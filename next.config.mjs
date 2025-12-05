/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orlkodjvpprzfnzceywu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins_images/**",
      },
    ],
  },
  // output: "export", // 静态导出
};

export default nextConfig;
