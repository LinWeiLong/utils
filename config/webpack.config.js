
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: '../src/index.js',
    output: {
        path: __dirname + "/dist", // 这里是项目输出的路径,__dirname表示当前文件的位置
        filename: "js/"+"[name].js" // 这里是生成文件的名称，可起你想要的名字
    },
    modules: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(css|scss)$/,
                loader: ['style-loader, css-loader, sass-loader， postcss-loader'],
            },
            {
                test: /\.(png|svg|jp?eg)$/,
                loader: 'url-loader',
            }
        ]
    }
}
