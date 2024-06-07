using System;
using System.Runtime.InteropServices;

namespace Microsoft.Azure.RemoteRendering
{
    /// <summary>
    ///  Constants for remote rendering.
    /// </summary>
    public static class ValidationUtils
    {
        public static bool IsValid(float v)
        {
            return !(float.IsNaN(v) || float.IsInfinity(v));
        }
        public static bool IsValid(double v)
        {
            return !(double.IsNaN(v) || double.IsInfinity(v));
        }
    }

    public partial struct Float2 : IEquatable<Float2>
    {
        public Float2(float x, float y)
        {
            this.X = x;
            this.Y = y;
        }

        public bool IsValid()
        {
            return ValidationUtils.IsValid(X) && ValidationUtils.IsValid(Y);
        }

        public bool Equals(Float2 other)
        {
            return X == other.X && Y == other.Y;
        }

        public static bool operator ==(Float2 left, Float2 right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Float2 left, Float2 right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Float2)
                return ((Float2)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = X.GetHashCode() * 31 + Y.GetHashCode();
                return hash;
            }
        }
    }

    public partial struct Float3 : IEquatable<Float3>
    {
        public Float3(float x, float y, float z)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
        }

        public bool IsValid()
        {
            return ValidationUtils.IsValid(X) && ValidationUtils.IsValid(Y) && ValidationUtils.IsValid(Z);
        }

        public bool Equals(Float3 other)
        {
            return X == other.X && Y == other.Y && Z == other.Z;
        }
        public static bool operator ==(Float3 left, Float3 right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Float3 left, Float3 right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Float3)
                return ((Float3)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = X.GetHashCode() * 31 + Y.GetHashCode();
                hash = hash * 31 + Z.GetHashCode();
                return hash;
            }
        }

    }

    public partial struct Float4 : IEquatable<Float4>
    {
        public Float4(float x, float y, float z, float w)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
            this.W = w;
        }

        public bool IsValid()
        {
            return ValidationUtils.IsValid(X) && ValidationUtils.IsValid(Y) && ValidationUtils.IsValid(Z) && ValidationUtils.IsValid(W);
        }

        public bool Equals(Float4 other)
        {
            return X == other.X && Y == other.Y && Z == other.Z && W == other.W;
        }
        public static bool operator ==(Float4 left, Float4 right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Float4 left, Float4 right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Float4)
                return ((Float4)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = X.GetHashCode() * 31 + Y.GetHashCode();
                hash = hash * 31 + Z.GetHashCode();
                hash = hash * 31 + W.GetHashCode();
                return hash;
            }
        }

    }

    public partial struct Plane : IEquatable<Plane>
    {
        public Plane(float a, float b, float c, float d)
        {
            this.A = a;
            this.B = b;
            this.C = c;
            this.D = d;
        }

        public bool IsValid()
        {
            return ValidationUtils.IsValid(A) && ValidationUtils.IsValid(B) && ValidationUtils.IsValid(C) && ValidationUtils.IsValid(D);
        }

        public bool Equals(Plane other)
        {
            return A == other.A && B == other.B && C == other.C && D == other.D;
        }
        public static bool operator == (Plane left, Plane right)
        {
            return left.Equals(right);
        }
        public static bool operator != (Plane left, Plane right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Plane)
                return ((Plane)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = A.GetHashCode() * 31 + B.GetHashCode();
                hash = hash * 31 + C.GetHashCode();
                hash = hash * 31 + D.GetHashCode();
                return hash;
            }
        }
    }

    public partial struct Matrix4x4 : IEquatable<Matrix4x4>
    {
        public Matrix4x4(Float4 col0, Float4 col1, Float4 col2, Float4 col3)
        {
            this.Column0 = col0;
            this.Column1 = col1;
            this.Column2 = col2;
            this.Column3 = col3;
        }

        public bool IsValid()
        {
            return Column0.IsValid() && Column1.IsValid() && Column2.IsValid() && Column3.IsValid();
        }

        public bool Equals(Matrix4x4 other)
        {
            return Column0.Equals(other.Column0) && Column1.Equals(other.Column1) && Column2.Equals(other.Column2) && Column3.Equals(other.Column3);
        }
        public static bool operator ==(Matrix4x4 left, Matrix4x4 right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Matrix4x4 left, Matrix4x4 right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Matrix4x4)
                return ((Matrix4x4)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = Column0.GetHashCode() * 31 + Column1.GetHashCode();
                hash = hash * 31 + Column2.GetHashCode();
                hash = hash * 31 + Column3.GetHashCode();
                return hash;
            }
        }

    }

    public partial struct Double3 : IEquatable<Double3>
    {
        public Double3(double x, double y, double z)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
        }

        public bool IsValid()
        {
            return ValidationUtils.IsValid(X) && ValidationUtils.IsValid(Y) && ValidationUtils.IsValid(Z);
        }

        public bool Equals(Double3 other)
        {
            return X == other.X && Y == other.Y && Z == other.Z;
        }
        public static bool operator ==(Double3 left, Double3 right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Double3 left, Double3 right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Double3)
                return ((Double3)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = X.GetHashCode() * 31 + Y.GetHashCode();
                hash = hash * 31 + Z.GetHashCode();
                return hash;
            }
        }

    }

    public partial struct Transform : IEquatable<Transform>
    {
        public Transform(Double3 position, Quaternion rotation, Float3 scale)
        {
            this.Position = position;
            this.Rotation = rotation;
            this.Scale = scale;
        }

        public bool IsValid()
        {
            return Position.IsValid() && Rotation.IsValid() && Scale.IsValid();
        }

        public bool Equals(Transform other)
        {
            return Position == other.Position && Rotation == other.Rotation && Scale == other.Scale;
        }
        public static bool operator ==(Transform left, Transform right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Transform left, Transform right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Transform)
                return ((Transform)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = Position.GetHashCode();
                hash = hash * 31 + Rotation.GetHashCode();
                hash = hash * 31 + Scale.GetHashCode();
                return hash;
            }
        }
    }

    public partial struct Color4 : IEquatable<Color4>
    {
        public Color4(float r, float g, float b, float a)
        {
            this.R = r;
            this.G = g;
            this.B = b;
            this.A = a;
        }

        public bool IsValid()
        {
            return ValidationUtils.IsValid(R) && ValidationUtils.IsValid(G) && ValidationUtils.IsValid(B) && ValidationUtils.IsValid(A);
        }

        public bool Equals(Color4 other)
        {
            return R == other.R && G == other.G && B == other.B && A == other.A;
        }

        public override bool Equals(object obj)
        {
            if (obj is Color4)
                return ((Color4)obj) == this;
            return false;
        }

        public static bool operator ==(Color4 left, Color4 right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Color4 left, Color4 right)
        {
            return !left.Equals(right);
        }
        public override int GetHashCode()
        {
            unchecked
            {
                int hash = R.GetHashCode() * 31 + G.GetHashCode();
                hash = hash * 31 + B.GetHashCode();
                hash = hash * 31 + A.GetHashCode();
                return hash;
            }
        }

    }

    public partial struct Color4Ub : IEquatable<Color4Ub>
    {
        public Color4Ub(byte r, byte g, byte b, byte a)
        {
            R = r;
            G = g;
            B = b;
            A = a;
        }

        public uint Bytes
        {
            get
            {
                return (uint)R | ((uint)G << 8) | ((uint)B << 16) | ((uint)A << 24);
            }
            set
            {
                R = (byte)(value & 255);
                G = (byte)((value >> 8) & 255);
                B = (byte)((value >> 16) & 255);
                A = (byte)(value >> 24);
            }
        }
        public bool Equals(Color4Ub other)
        {
            return Bytes == other.Bytes;
        }
        public static bool operator ==(Color4Ub left, Color4Ub right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Color4Ub left, Color4Ub right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Color4Ub)
                return ((Color4Ub)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return (int)Bytes;
            }
        }

    }


    public partial struct Quaternion : IEquatable<Quaternion>
    {
        public Quaternion(float x, float y, float z, float w)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
            this.W = w;
        }

        public bool IsValid()
        {
            return ValidationUtils.IsValid(X) && ValidationUtils.IsValid(Y) && ValidationUtils.IsValid(Z) && ValidationUtils.IsValid(W);
        }

        public bool Equals(Quaternion other)
        {
            return X == other.X && Y == other.Y && Z == other.Z && W == other.W;
        }
        public static bool operator ==(Quaternion left, Quaternion right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Quaternion left, Quaternion right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Quaternion)
                return ((Quaternion)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = X.GetHashCode() * 31 + Y.GetHashCode();
                hash = hash * 31 + Z.GetHashCode();
                hash = hash * 31 + W.GetHashCode();
                return hash;
            }
        }
    }

    public partial struct CameraFov
    {
        /// <summary>
        /// Converts the part of the given projection matrix which governs the field of view to
        /// the generic field of view representation used here.
        /// </summary>
        /// <param name="projection">The 4x4 perspective projection matrix to convert.</param>
        /// <remarks>
        /// If the projection matrix is not a valid perspective projection, the function will
        /// return a <see cref="Result.InvalidParam"/> error.
        /// </remarks>     
        public Result FromProjectionMatrix(Matrix4x4 projection)
        {
            return NativeLibraryExtensions.RemoteRendering_fov_from_projection_matrix(ref projection, out this);
        }

        /// <summary>
        /// Converts this FOV to a perspective projection matrix.
        /// </summary>
        /// <param name="nearPlane">The z-distance of the nearPlane</param>
        /// <param name="farPlane">The z-distance of the farPlane</param>
        /// <param name="depthConvention">The local z convention to use for this projection matrix.</param>
        /// <param name="projection">The resulting projection matrix.</param>
        /// <remarks>
        /// If the FOV is currently invalid or one of the plane parameters is 0,
        /// the function will return a <see cref="Result.InvalidParam"/> error.
        /// </remarks>     
        public Result ToProjectionMatrix(float nearPlane, float farPlane, DepthConvention depthConvention, out Matrix4x4 projection)
        {
            return NativeLibraryExtensions.RemoteRendering_fov_to_projection_matrix(ref this, nearPlane, farPlane, depthConvention, out projection);
        }
    }

    public partial struct LoadTextureFromSasOptions
    {
        public LoadTextureFromSasOptions(string uri, TextureType type)
        {
            TextureUri = uri;
            TextureType = type;
        }
    }

    public partial struct LoadTextureOptions
    {
        public static LoadTextureOptions CreateForBlobStorage(string storageContainer, string blobName, string assetPath, TextureType type)
        {
            var res = new LoadTextureOptions();

            res.Blob.AssetPath = assetPath;
            res.Blob.StorageAccountName = storageContainer;
            res.Blob.BlobContainerName = blobName;
            res.TextureType = type;

            return res;
        }
    }

    public partial struct LoadModelFromSasOptions
    {
        public LoadModelFromSasOptions(string uri, Entity parent = null)
        {
            ModelUri = uri;
            Parent = parent;
        }
    }

    public partial struct LoadModelOptions
    {
        public static LoadModelOptions CreateForBlobStorage(string storageContainer, string blobName, string assetPath, Entity parent = null)
        {
            var res = new LoadModelOptions();

            res.Blob.AssetPath = assetPath;
            res.Blob.StorageAccountName = storageContainer;
            res.Blob.BlobContainerName = blobName;
            res.Parent = parent;

            return res;
        }
    }

    public partial struct Bounds : IEquatable<Bounds>
    {
        public Bounds(Double3 minIn, Double3 maxIn)
        {
            this.Min = minIn;
            this.Max = maxIn;
        }

        public static Bounds Create(IntPtr nativeData)
        {
            return (Bounds)Marshal.PtrToStructure(nativeData, typeof(Bounds));
        }

        public bool IsValid()
        {
            return Min.IsValid() && Max.IsValid() &&
                Min.X <= Max.X && Min.Y <= Max.Y && Min.Z <= Max.Z;
        }

        public bool Equals(Bounds other)
        {
            return Min.Equals(other.Min) && Max.Equals(other.Max);
        }

        public static bool operator ==(Bounds left, Bounds right)
        {
            return left.Equals(right);
        }
        public static bool operator !=(Bounds left, Bounds right)
        {
            return !left.Equals(right);
        }

        public override bool Equals(object obj)
        {
            if (obj is Bounds)
                return ((Bounds)obj) == this;
            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = Min.GetHashCode() * 31 + Max.GetHashCode();
                return hash;
            }
        }

    }

    public partial struct PerformanceAssessment
    {
        public static PerformanceAssessment Create(IntPtr nativeData)
        {
            return (PerformanceAssessment)Marshal.PtrToStructure(nativeData, typeof(PerformanceAssessment));
        }
    }

    public partial struct RayCast
    {
        /// <summary>
        /// Maximum supported number of hits returned in HitCollectionPolicy.ClosestHits mode
        /// </summary>
        public const int MaxNumRayCastHits = 1024;

        public RayCast(Double3 startPos, Double3 dir, double maxDistance, HitCollectionPolicy hitCollection = HitCollectionPolicy.ClosestHits, int maxHits = MaxNumRayCastHits, uint collisionMask = 0xFFFFFFFF)
        {
            this.StartPos = startPos;
            this.EndPos = new Double3(startPos.X + dir.X * maxDistance, startPos.Y + dir.Y * maxDistance, startPos.Z + dir.Z * maxDistance);
            this.HitCollection = hitCollection;
            this.MaxHits = maxHits;
            this.CollisionMask = collisionMask;
        }

        public RayCast(Double3 startPos, Double3 endPos, HitCollectionPolicy hitCollection = HitCollectionPolicy.ClosestHits, int maxHits = MaxNumRayCastHits, uint collisionMask = 0xFFFFFFFF)
        {
            this.StartPos = startPos;
            this.EndPos = endPos;
            this.HitCollection = hitCollection;
            this.MaxHits = maxHits;
            this.CollisionMask = collisionMask;
        }
    }


    public partial struct RayCastHit
    {
        public Entity HitEntity { get { return this.HitObject; } }
    }

    public partial struct AssetConversionInputOptions
    {
        public AssetConversionInputOptions(string storageContainerUri, string storageContainerReadListSas, string blobPrefix, string relativeInputAssetPath)
        {
            StorageContainerUri = storageContainerUri;
            StorageContainerReadListSas = storageContainerReadListSas;
            BlobPrefix = blobPrefix;
            RelativeInputAssetPath = relativeInputAssetPath;
        }
    }

    public partial struct AssetConversionOutputOptions
    {
        public AssetConversionOutputOptions(string storageContainerUri, string storageContainerWriteSas, string blobPrefix, string outputAssetFilename)
        {
            StorageContainerUri = storageContainerUri;
            StorageContainerWriteSas = storageContainerWriteSas;
            BlobPrefix = blobPrefix;
            OutputAssetFilename = outputAssetFilename;
        }
    }

    public partial struct AssetConversionOptions
    {
        public static AssetConversionOptions CreateForBlobStorage(string conversionId, AssetConversionInputOptions inputOptions, AssetConversionOutputOptions outputOptions)
        {
            var res = new AssetConversionOptions();

            res.ConversionId = conversionId;
            res.InputOptions = inputOptions;
            res.OutputOptions = outputOptions;

            return res;
        }
    }

    public partial struct RenderingSessionUpdateOptions
    {
        public RenderingSessionUpdateOptions(int maxLeaseTimeHours, int maxLeaseTimeMinutes = 0)
        {
            MaxLeaseInMinutes = maxLeaseTimeMinutes + maxLeaseTimeHours * 60;
        }
    }

    public partial struct RenderingSessionCreationOptionsUnsafe
    {
        public RenderingSessionCreationOptionsUnsafe(string sessionId, string size, int maxLeaseTimeHours, int maxLeaseTimeMinutes = 0)
        {
            this.SessionId = sessionId;
            MaxLeaseInMinutes = maxLeaseTimeMinutes + maxLeaseTimeHours * 60;
            Size = size;
        }
    }

    public partial struct RenderingSessionCreationOptions
    {
        public RenderingSessionCreationOptions(string sessionId, RenderingSessionVmSize size, int maxLeaseTimeHours, int maxLeaseTimeMinutes = 0)
        {
            this.SessionId = sessionId;
            MaxLeaseInMinutes = maxLeaseTimeMinutes + maxLeaseTimeHours * 60;
            Size = size;
        }

        public RenderingSessionCreationOptions(RenderingSessionVmSize size, int maxLeaseTimeHours, int maxLeaseTimeMinutes = 0)
        {
            // use old REST API (deprecated)
            this.SessionId = "";
            MaxLeaseInMinutes = maxLeaseTimeMinutes + maxLeaseTimeHours * 60;
            Size = size;
        }
    }

    public partial struct RenderingSessionProperties
    {
        RenderingSessionProperties(RenderingSessionStatus _Status = RenderingSessionStatus.Unknown, RenderingSessionVmSize _Size = RenderingSessionVmSize.None)
        {
            this.Status = _Status;
            this.Size = _Size;
            this.Hostname = "";
            this.Message = "";
            this.SizeString = "";
            this.Id = "";
            this.ElapsedTimeInMinutes = 0;
            this.MaxLeaseInMinutes = 0;
            this.ArrInspectorPort = 0;
            this.HandshakePort = 0;
        }

    }

    public partial struct RendererInitOptions
    {
        public RendererInitOptions(ServiceRenderMode modeIn = ServiceRenderMode.Default, bool ignoreCertsIn = false, bool forceTransparencyWritesDepth = false)
        {
            RenderMode = modeIn;
            IgnoreCertificateValidation = ignoreCertsIn;
			ForceTransparencyWritesDepth = forceTransparencyWritesDepth;
        }
    }

    public partial struct ResourceStateResult_Experimental
    {
        public static ResourceStateResult_Experimental Create(IntPtr nativeData)
        {
            return (ResourceStateResult_Experimental)Marshal.PtrToStructure(nativeData, typeof(ResourceStateResult_Experimental));
        }
    }


    /// <summary>
    /// Disable the corresponding UI field when not in Simulation mode.
    /// </summary>
    [AttributeUsage(AttributeTargets.All)]
    public sealed class EnableInSimulationAttribute : Attribute
    {
    }

    /// <summary>
    /// Disable the corresponding UI field when in Simulation mode.
    /// </summary>
    [AttributeUsage(AttributeTargets.All)]
    public sealed class DisableInSimulationAttribute : Attribute
    {
    }
}
