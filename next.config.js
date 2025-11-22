/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT: 'https://eu-west-2.cdn.hygraph.com/content/cllnlx5pk2e4801t6b8o37uxp/master',
  },
}

module.exports = nextConfig
