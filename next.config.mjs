/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mpn-lookup/",
        permanent: true,
      },
    ];
  },
  output: "export",
  basePath: "/mpn-nextjs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
