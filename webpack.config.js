const path = require('path');

const clientConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/client/index.tsx',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: 'tsconfig.json'
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }
      ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js')
    }
};

module.exports = clientConfig;