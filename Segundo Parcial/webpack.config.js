const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {   
        calculosA: './js/calculosA.js',
        imgViewerA: './js/imgViewerA.js',
        passwordGenA: './js/passwordGenA.js',
        taskListA: './js/taskListA.js',
        unitConvertA: './js/unitConvertA.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
          {
          test: /\.html$/,
          use: ["html-loader"],
          },
        ],
      },
      plugins: [
new html({
          inject: true,
          template: './Inicio.html',
          filename: './Inicio.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },  
        }),

        new html({
            inject: true,
            template: './paginas/calculos/calculos.html',
            filename: './paginas/calculos/calculos.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            },  
          }),

          new html({
            inject: true,
            template: './paginas/imgViewer/imgWiewer.html',
            filename: './paginas/imgViewer/imgWiewer.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            },  
          }),

          new html({
            inject: true,
            template: './paginas/passwordGen/passwordGen.html',
            filename: './paginas/passwordGen/passwordGen.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            },  
          }),

          new html({
            inject: true,
            template: './paginas/taskList/taskList.html',
            filename: './paginas/taskList/taskList.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            },  
          }),


          new html({
            inject: true,
            template: './paginas/unitConvert/unitConvert.html',
            filename: './paginas/unitConvert/unitConvert.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            },  
          }),

      ]
};