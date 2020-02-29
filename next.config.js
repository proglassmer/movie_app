const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(
  withSass({
    sassLoaderOptions: {
      includePaths: [
      ]
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
      
      config.module.rules.push(
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'static/fonts/', // move compile fonts from "./next/" to "./next/static/"
              publicPath: '/_next/static/fonts' // change "src: url()" of @font-face in "./next/static/style.css"
            }
          }]
        }
      )

      config.module.rules.push(
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }]
        }
      )

      return config
    }
  })
)