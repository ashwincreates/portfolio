const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/ashwincreates/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}

