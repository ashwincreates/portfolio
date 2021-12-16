const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/portfolio/' : '',
	basePath: isProd ? '/portfolio' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}

