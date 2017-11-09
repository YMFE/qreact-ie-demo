const path = require('path');

module.exports = {
    server: {
        hot: true
    },
    plugins: [],
    config: {
        modifyWebpackConfig: function (baseConfig) {
            baseConfig.entry = {
                app: './App.js'
            };

            baseConfig.module = {
                loaders: [{
                    test: /\.jsx?$/,
                    include: [path.resolve(__dirname, 'src')],
                    exclude: 'node_modules',
                    loaders: ['babel-loader']
                }]
            };

            baseConfig.resolve = {
                extensions: ['', '.js', '.jsx'],
                alias: {
                    react: 'qreact/dist/ReactIE',
                    'react-dom': 'qreact/dist/ReactIE'
                }
            };

            baseConfig.module.postLoaders = [
                {
                    test: /\.jsx?$/,
                    loaders: [require.resolve('es3ify-loader')]
                }
            ];

            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
