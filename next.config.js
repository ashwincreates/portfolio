const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}

