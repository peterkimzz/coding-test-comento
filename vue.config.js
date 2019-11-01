const path = require('path')
const webpack = require('webpack')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

module.exports = {
  transpileDependencies: ['vue-clamp', 'resize-detector'],
  configureWebpack: {
    resolve: {
      alias: {
        src: resolveSrc('src')
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      // },
      less: {
        globalVars: {
          '--border-radius-default': '2px',
          '--color-text-primary': '#333',
          '--color-primary': '#00c854',
          '--color-gray-3': '#dee2e6',
          '--color-black': '#000',
          '--color-white': '#fff'
        }
      }
    }
  }
}
