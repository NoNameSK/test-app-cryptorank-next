/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.BASE_PATH || '',
    basePath: process.env.BASE_PATH || '',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/test-app-cryptorank/'
    : '/',
    env: {
        BASE_PATH: process.env.BASE_PATH || '',
    },
}

module.exports = nextConfig
