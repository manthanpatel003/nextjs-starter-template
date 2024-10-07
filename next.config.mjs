/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables React Strict Mode for development
  reactStrictMode: true,

  // Specify allowed domains for remote images
  images: {
    remotePatterns: process.env.NEXT_PUBLIC_ALLOWED_IMAGE_DOMAINS?.split(
      ",",
    ).map((domain) => ({
      protocol: "https",
      hostname: domain.trim(),
      port: "",
    })) || [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
      },
    ],
  },

  // Uncomment and modify to enable Internationalization (i18n)
  // i18n: {
  //   locales: ['en-US', 'fr', 'es'], // Example locales
  //   defaultLocale: 'en-US', // Default locale
  // },

  // Additional custom configurations can be added below
  // headers: async () => {
  //   return [
  //     {
  //       // Example: Add custom headers
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
