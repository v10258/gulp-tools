
var webpack =require('webpack');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor.js');
var providePlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
});

console.log('__dirname', __dirname);

module.exports = {
    entry: {
        main: './assets/js/detail/main.js',
        vendor: ['jquery']
    },
    output: {
        //path:'./dist/js/detail',
        filename: '[name].js'
    },
    resolve: {
        //root:'./',
        alias: {
            'bootstrap': __dirname + '/vendor/bootstrap/dist/js/bootstrap.js',
            'jquery': __dirname + "/vendor/jquery/dist/jquery.js"
        }
    },
/*    module:{
        loaders:[
            { test: /jquery\.js$/, loader: "expose?$!expose?jQuery" }
        ]
    },*/
    plugins: [commonsPlugin, providePlugin]
};
