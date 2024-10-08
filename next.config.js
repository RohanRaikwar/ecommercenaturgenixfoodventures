/** @type {import('next').NextConfig} */

const path = require('path')

const withPWA = require('next-pwa')({
  dest: "public",
  //register: true,
  //skipWaiting: true,
})

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    ServerId: process.env.ServerId,
    ServerUrl: "https://multivendor-ecommerce-45lz.onrender.com/api"
  },
  output: 'export',
})

module.exports = nextConfig
