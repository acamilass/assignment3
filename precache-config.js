var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!\/__)/], // <-- necessary for Firebase OAuth
    stripPrefix: 'dist',
    root: 'dist/',
    plugins: [
        new SWPrecacheWebpackPlugin({
          cacheId: 'contrateDevs',
          filename: 'service-worker.js',
          staticFileGlobs: [
            'dist/index.html',
            'dist/**.js',
            'dist/**.css',
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            'https://fonts.googleapis.com/css?family=Montserrat|Quicksand',
            'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
            'https://use.fontawesome.com/releases/v5.0.10/js/all.js',
            'https://code.jquery.com/jquery-3.2.1.slim.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
          ],
          stripPrefix: 'dist/assets/',
          mergeStaticsConfig: true // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
        }),
      ]
  };