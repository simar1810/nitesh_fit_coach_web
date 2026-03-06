/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure /privacy works (redirect to actual route)
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
