/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["f4.bcbits.com", "v0.blob.com"], // Add other domains if needed
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
}

module.exports = nextConfig

