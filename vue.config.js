const ansiRegex = require('ansi-regex')
const path = require('path')

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@': path.join(__dirname, 'src/'),
        'three/addons': path.join(
          __dirname,
          'node_modules/three/examples/jsm/'
        ),
      },
    },
    entry: ["@babel/polyfill", "./src/main.js"],
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
    devtool: 'inline-source-map'
  },
  transpileDependencies: [
    ansiRegex
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
  },
}
