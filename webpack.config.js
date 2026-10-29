const path = require('path');

module.exports = {
  entry: './src/index.js',                  // ponto de partida
  output: {
    filename: 'main.js',                    // pacote gerado
    path: path.resolve(__dirname, 'dist'),  // pasta de saída
  },
  module: {
    rules: [
      {
        test: /\.css$/,                       // arquivos .css
        use: ['style-loader', 'css-loader'],  // executados da direita para a esquerda
      },
    ],
  },
  mode: 'development',
};