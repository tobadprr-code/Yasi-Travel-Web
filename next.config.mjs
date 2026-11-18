/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 78, 82],
    deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
  },
  async redirects() {
    // /es no existe como ruta: el español vive en la raíz
    return [{ source: "/es", destination: "/", permanent: true }];
  },
};
export default nextConfig;
