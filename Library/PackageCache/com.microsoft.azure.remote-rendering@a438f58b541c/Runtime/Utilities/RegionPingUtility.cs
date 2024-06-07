#if !UNITY_EDITOR && UNITY_ANDROID
// On Android, prefer Unity's own ping function
#define USE_UNITY_PING
#endif

using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Microsoft.Azure.RemoteRendering.Unity
{
    /// <summary>
    /// Contains a utility function to ping Azure Remote Rendering regions in order to find the region with the lowest network round-trip time.
    /// </summary>
    public static class RegionPingUtility
    {
        /// <summary>
        /// One result entry that corresponds to an input region string in <see cref="PingArrRegions"/>.
        /// </summary>
        public class RegionPingResult
        {
            /// <summary>
            /// The region string, same as passed as input to <see cref="PingArrRegions"/>.
            /// </summary>
            public string Region;

            /// <summary>
            /// The domain string for the region. The domain is of the form [region].mixedreality.azure.com.
            /// </summary>
            public string Domain;

            /// <summary>
            /// The median ping time (in milliseconds) of all successful ping iterations.
            /// </summary>
            public float PingMedianMs;

            /// <summary>
            /// The minimum ping time (in milliseconds) of all successful ping iterations.
            /// </summary>
            public float PingMinimumMs;

            /// <summary>
            /// The maximum ping time (in milliseconds) of all successful ping iterations.
            /// </summary>
            public float PingMaximumMs;

            /// <summary>
            /// The number of successful ping iterations. The sum of  <see cref="NumResults"/> and  <see cref="NumFailures"/> equals numIterations as passed to <see cref="PingArrRegions"/>.
            /// </summary>
            public int NumResults;

            /// <summary>
            /// The number of ping iterations with failures (due to timeouts for instance). The sum of  <see cref="NumResults"/> and  <see cref="NumFailures"/> equals numIterations as passed to <see cref="PingArrRegions"/>.
            /// </summary>
            public int NumFailures;

            /// <summary>
            /// A human-readable summary of this result.
            /// </summary>
            /// <returns></returns>
            public override string ToString()
            {
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.Append($"'{Region}' (median/min/max = {PingMedianMs}ms/{PingMinimumMs}ms/{PingMaximumMs}ms");
                if (NumFailures == 1)
                {
                    stringBuilder.Append($", {NumFailures} failure!");
                }
                else if (NumFailures > 1)
                {
                    stringBuilder.Append($", {NumFailures} failures!");
                }
                stringBuilder.Append($")");
                return stringBuilder.ToString();
            }
        }

        /// <summary>
        /// Internal comparer for sorting the results
        /// </summary>
        private class BestMedianPingTime : IComparer<RegionPingResult>
        {
            public int Compare(RegionPingResult x, RegionPingResult y)
            {
                // Most significant criterion: No failures
                int successDiff = x.NumFailures - y.NumFailures;
                if (successDiff != 0)
                {
                    return successDiff;
                }

                // Next criterion: median ping time:
                int diff = Math.Sign(x.PingMedianMs - y.PingMedianMs);
                if (diff != 0)
                {
                    return diff;
                }

                // Next criterion: minimum ping time:
                diff = Math.Sign(x.PingMinimumMs - y.PingMinimumMs);
                if (diff != 0)
                {
                    return diff;
                }

                // Next criterion: maximum ping time:
                diff = Math.Sign(x.PingMaximumMs - y.PingMaximumMs);
                if (diff != 0)
                {
                    return diff;
                }

                return 0;
            }
        }

        /// <summary>
        /// A list of all available rendering regions.
        /// </summary>
        public static readonly IReadOnlyList<string> AvailableRegions = new List<string> { "australiaeast", "eastus", "eastus2", "japaneast", "northeurope", "southcentralus", "southeastasia", "uksouth", "westeurope", "westus2" };

        private static readonly IComparer<RegionPingResult> DefaultRegionComparer = new BestMedianPingTime();
        private static readonly string HostPrefix = "remoterendering";
        private static readonly string HostSuffix = "mixedreality.azure.com";


        /// <summary>
        /// Utility function to determine the Azure Remote Rendering region with the smallest network round-trip time.
        /// </summary>
        /// <param name="regions">String array of regions to test, e.g. "australiaeast", "eastus". If <c>null</c> is passed, it defaults to <see cref="AvailableRegions"/>.</param>
        /// <param name="numIterations">The number of pings per region. Multiple iterations are used to build the median/min/max values. This value must be >= 1.</param>
        /// <param name="cancellationToken">Optional cancellation token that is tested between every iteration. If cancellation is requested, this function throws an OperationCanceledException exception.</param>
        /// <returns>The array of results, sorted by lowest median ping times first. The number of entries matches the length of the input list.</returns>
        public static async Task<List<RegionPingResult>> PingArrRegionsAsync(IReadOnlyList<string> regions = null, int numIterations = 6, CancellationToken cancellationToken = default)
        {
            if (regions == null)
            {
                regions = AvailableRegions;
            }
            if (numIterations < 1 || regions.Count < 1)
            {
                throw new ArgumentOutOfRangeException(nameof(numIterations));
            }

            List<Task<RegionPingResult>> perRegionTask = new List<Task<RegionPingResult>>(regions.Count);

            foreach (string region in regions)
            {
                // create one task per region
                perRegionTask.Add(PingRegionAsync(region, numIterations, cancellationToken));
            }

            List<RegionPingResult> results = new List<RegionPingResult>(await Task.WhenAll(perRegionTask));

            results.Sort(DefaultRegionComparer);
            return results;
        }

        /// <summary>
        /// Internal function to perform the pings on one region
        /// </summary>
        private static async Task<RegionPingResult> PingRegionAsync(string region, int numIterations, CancellationToken cancellationToken)
        {
            List<float> pingTimes = new List<float>(numIterations);
            string host = $"{HostPrefix}.{region}.{HostSuffix}";
            int timeoutInMs = 2000;

            // Manually resolve the hostname in an async manner.
            // - "Ping.SendPingAsync" will do a blocking DNS resolve if given a hostname.
            // - "UnityEngine.Ping" only works with IP addresses anyhow.
            IPAddress hostIp = await ResolveHostnameAsync(host, cancellationToken);
            if (hostIp != null)
            {
                // Ping the given region multiple times
#if USE_UNITY_PING
                // For UnityEngine.Ping we need to resolve the IP address first
                string hostIpString = hostIp.ToString();
                for (int i = 0; i < numIterations; i++)
                {
                    var pinger = new UnityEngine.Ping(hostIpString);
                    float timeout = UnityEngine.Time.unscaledTime + (timeoutInMs * 0.001f);
                    while (!pinger.isDone && (UnityEngine.Time.unscaledTime < timeout))
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        await Task.Yield();
                    }
                    if (pinger.isDone && (pinger.time > 0))
                    {
                        pingTimes.Add(pinger.time);
                    }
                    pinger.DestroyPing();
                }
#else
                var pinger = new System.Net.NetworkInformation.Ping();
                for (int i = 0; i < numIterations; i++)
                {
                    // "ContinueWith" will throw if the cancellation token is cancelled but the Task wrapping "Ping.Send" isn't completed yet.
                    System.Net.NetworkInformation.PingReply reply = await pinger.SendPingAsync(hostIp, timeoutInMs).ContinueWith(task => task.Result, cancellationToken, TaskContinuationOptions.ExecuteSynchronously, TaskScheduler.Current);
                    if (reply.Status == System.Net.NetworkInformation.IPStatus.Success)
                    {
                        pingTimes.Add(reply.RoundtripTime);
                    }
                }
#endif
            }

            // Evaluate results from list of successful pings:
            RegionPingResult result = new RegionPingResult();
            result.Region = region;
            result.Domain = $"{region}.{HostSuffix}";
            result.NumResults = pingTimes.Count;
            result.NumFailures = numIterations - result.NumResults;
            if (pingTimes.Count > 0)
            {
                // Sort in ascending order, so we can extract min, max and P50
                pingTimes.Sort();

                result.PingMinimumMs = pingTimes[0];
                result.PingMaximumMs = pingTimes[pingTimes.Count - 1];
                int center = pingTimes.Count / 2;
                if ((pingTimes.Count % 2) == 0)
                {
                    result.PingMedianMs = (pingTimes[center - 1] + pingTimes[center]) * 0.5f;
                }
                else
                {
                    result.PingMedianMs = pingTimes[center];
                }
            }

            return result;
        }

        /// <summary>
        /// Internal helper function to resolve a hostname to an IP address. This is required for the Unity ping.
        /// </summary>
        private static async Task<IPAddress> ResolveHostnameAsync(string hostname, CancellationToken cancellationToken)
        {
            try
            {
                // "ContinueWith" will throw if the cancellation token is cancelled but "GetHostAddressesAsync" isn't completed yet.
                IPAddress[] addresses = await Dns.GetHostAddressesAsync(hostname).ContinueWith(task => task.Result, cancellationToken, TaskContinuationOptions.ExecuteSynchronously, TaskScheduler.Current);
                return (addresses != null && addresses.Length > 0) ? addresses[0] : null;
            }
            catch (TaskCanceledException)
            {
                throw;
            }
            catch
            {
                // "Dns.GetHostAddressesAsync" can throw exceptions, e.g. if the host is unresolvable. In that case just treat it as an ordinary resolve failure.
                return null;
            }
        }
    }
}
