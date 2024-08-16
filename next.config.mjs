/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.aceternity.com",
      "i.pinimg.com",
      // Add any other domains you use for images here
      "images.beta.cosmos.so",
    ],
  },
}

export default nextConfig
