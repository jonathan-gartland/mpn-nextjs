/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mpn-lookup",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
