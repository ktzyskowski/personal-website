const prod = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/ktzyskowski.github.io/' : '',
}
