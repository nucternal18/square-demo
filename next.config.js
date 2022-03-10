/** @type {import('next').NextConfig} */
const withTm = require('next-transpile-modules')(['@square/web-sdk', 'react-square-web-payments-sdk'])
const nextConfig = withTm( {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose'
  }
})

module.exports = nextConfig
