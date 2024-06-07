// Copyright (c) Microsoft Corporation. All rights reserved.

#nullable enable
using System.Collections.Generic;

namespace Azure.Communication.Calling.UnityClient
{
    internal static class IdentifierHelpers
    {
        const string PHONE_MRI_PREFIX = "4:";
        const string SKYPE_MRI_PREFIX = "8:";
        const string BOT_MRI_PREFIX = "28:";
        const string TEAMS_PUBLIC_CLOUD_NAMESPACE = "orgid";
        const string TEAMS_DOD_CLOUD_NAMESPACE = "dod";
        const string TEAMS_GCCH_CLOUD_NAMESPACE = "gcch";
        const string TEAMS_AG08_CLOUD_NAMESPACE = "ag08";
        const string TEAMS_AG09_CLOUD_NAMESPACE = "ag09";
        const string ACS_PUBLIC_CLOUD_NAMESPACE = "acs";
        const string ACS_PUBLIC_LEGACY_CLOUD_NAMESPACE = "spool";
        const string ACS_DOD_CLOUD_NAMESPACE = "dod-acs";
        const string ACS_GCCH_CLOUD_NAMESPACE = "gcch-acs";
        const string ACS_AG08_CLOUD_NAMESPACE = "ag08-acs";
        const string ACS_AG09_CLOUD_NAMESPACE = "ag09-acs";
        const string TEAMS_ANONYMOUS_NAMESPACE = "teamsvisitor";
        const string SEPARATOR = ":";

        const string TEAMS_PUBLIC_CLOUD_MRI_PREFIX =
            SKYPE_MRI_PREFIX + TEAMS_PUBLIC_CLOUD_NAMESPACE + SEPARATOR;
        const string TEAMS_DOD_CLOUD_MRI_PREFIX =
            SKYPE_MRI_PREFIX + TEAMS_DOD_CLOUD_NAMESPACE + SEPARATOR;
        const string TEAMS_GCCH_CLOUD_MRI_PREFIX =
            SKYPE_MRI_PREFIX + TEAMS_GCCH_CLOUD_NAMESPACE + SEPARATOR;
        const string TEAMS_AG08_CLOUD_MRI_PREFIX =
            SKYPE_MRI_PREFIX + TEAMS_AG08_CLOUD_NAMESPACE + SEPARATOR;
        const string TEAMS_AG09_CLOUD_MRI_PREFIX =
            SKYPE_MRI_PREFIX + TEAMS_AG09_CLOUD_NAMESPACE + SEPARATOR;
        const string TEAMS_ANONYMOUS_MRI_PREFIX =
            SKYPE_MRI_PREFIX + TEAMS_ANONYMOUS_NAMESPACE + SEPARATOR;

        const string ACS_PUBLIC_MRI_PREFIX =
            SKYPE_MRI_PREFIX + ACS_PUBLIC_CLOUD_NAMESPACE + SEPARATOR;
        const string ACS_PUBLIC_LEGACY_MRI_PREFIX =
            SKYPE_MRI_PREFIX + ACS_PUBLIC_LEGACY_CLOUD_NAMESPACE + SEPARATOR;
        const string ACS_DOD_MRI_PREFIX =
            SKYPE_MRI_PREFIX + ACS_DOD_CLOUD_NAMESPACE + SEPARATOR;
        const string ACS_GCCH_MRI_PREFIX =
            SKYPE_MRI_PREFIX + ACS_GCCH_CLOUD_NAMESPACE + SEPARATOR;
        const string ACS_AG08_MRI_PREFIX =
            SKYPE_MRI_PREFIX + ACS_AG08_CLOUD_NAMESPACE + SEPARATOR;
        const string ACS_AG09_MRI_PREFIX =
            SKYPE_MRI_PREFIX + ACS_AG09_CLOUD_NAMESPACE + SEPARATOR;

        public static string[] ConvertIdentifiersToMris(IReadOnlyList<CallIdentifier> identifiers)
        {
            string[] result = new string[identifiers.Count];

            for (int i = 0; i < identifiers.Count; i++)
            {
                result[i] = ToMri(identifiers[i]);
            }

            return result;
        }

        public static CallIdentifier[] ConvertMrisToIdentifiers(IReadOnlyList<string> mris)
        {
            CallIdentifier[] result = new CallIdentifier[mris.Count];

            for (int i = 0; i < mris.Count; i++)
            {
                result[i] = ToCallIdentifier(mris[i]);
            }

            return result;
        }

        public static CallIdentifier ToCallIdentifier(string mri)
        {
            CallIdentifier? result = null;

            if (mri.StartsWith(PHONE_MRI_PREFIX))
            {
                result = new PhoneNumberCallIdentifier(mri.Substring(PHONE_MRI_PREFIX.Length));
            }
            else if (mri.StartsWith(TEAMS_PUBLIC_CLOUD_MRI_PREFIX))
            {
                result = new MicrosoftTeamsUserCallIdentifier(
                    mri.Substring(TEAMS_PUBLIC_CLOUD_MRI_PREFIX.Length),
                    isAnonymous: false)
                {
                    CloudEnvironment = CallCloudEnvironment.Public
                };
            }
            else if (mri.StartsWith(TEAMS_DOD_CLOUD_MRI_PREFIX))
            {
                result = new MicrosoftTeamsUserCallIdentifier(
                    mri.Substring(TEAMS_DOD_CLOUD_MRI_PREFIX.Length),
                    isAnonymous: false)
                {
                    CloudEnvironment = CallCloudEnvironment.Dod
                };
            }
            else if (mri.StartsWith(TEAMS_GCCH_CLOUD_MRI_PREFIX))
            {
                result = new MicrosoftTeamsUserCallIdentifier(
                    mri.Substring(TEAMS_GCCH_CLOUD_MRI_PREFIX.Length),
                    isAnonymous: false)
                {
                    CloudEnvironment = CallCloudEnvironment.Gcch
                };
            }
            else if (mri.StartsWith(TEAMS_ANONYMOUS_MRI_PREFIX))
            {
                result = new MicrosoftTeamsUserCallIdentifier(
                    mri.Substring(TEAMS_ANONYMOUS_MRI_PREFIX.Length),
                    isAnonymous: true);
            }
            else if (
                mri.StartsWith(ACS_PUBLIC_MRI_PREFIX) ||
                mri.StartsWith(ACS_PUBLIC_LEGACY_MRI_PREFIX) ||
                mri.StartsWith(ACS_DOD_MRI_PREFIX) ||
                mri.StartsWith(ACS_GCCH_MRI_PREFIX) ||
                mri.StartsWith(ACS_AG08_MRI_PREFIX) ||
                mri.StartsWith(ACS_AG09_MRI_PREFIX))
            {
                result = new UserCallIdentifier(mri);
            }
            else
            {
                result = new UnknownCallIdentifier(mri);
            }

            return result;
        }

        public static string ToMri(CallIdentifier identifier)
        {
            if (identifier is UserCallIdentifier)
            {
                return ((UserCallIdentifier)identifier).Id;
            }
            else if (identifier is PhoneNumberCallIdentifier)
            {
                return PHONE_MRI_PREFIX + ((PhoneNumberCallIdentifier)identifier).PhoneNumber;
            }
            else if (identifier is MicrosoftTeamsUserCallIdentifier)
            {
                var microsoftTeamsUserIdentifier = (MicrosoftTeamsUserCallIdentifier)identifier;
                string rawId = microsoftTeamsUserIdentifier.RawId;
                if (string.IsNullOrEmpty(rawId))
                {
                    return rawId;
                }

                if (microsoftTeamsUserIdentifier.CloudEnvironment == CallCloudEnvironment.Public)
                {
                    return TEAMS_PUBLIC_CLOUD_MRI_PREFIX + microsoftTeamsUserIdentifier.UserId;
                }

                if (microsoftTeamsUserIdentifier.CloudEnvironment == CallCloudEnvironment.Dod)
                {
                    return TEAMS_DOD_CLOUD_MRI_PREFIX + microsoftTeamsUserIdentifier.UserId;
                }

                if (microsoftTeamsUserIdentifier.CloudEnvironment == CallCloudEnvironment.Gcch)
                {
                    return TEAMS_GCCH_CLOUD_MRI_PREFIX + microsoftTeamsUserIdentifier.UserId;
                }

                return TEAMS_ANONYMOUS_MRI_PREFIX + microsoftTeamsUserIdentifier.UserId;
            }
            else
            {
                return ((UnknownCallIdentifier)identifier).Id;
            }
        }
    }
}