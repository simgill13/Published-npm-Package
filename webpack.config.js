// var path = require('path');
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'index.js',
//     libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
//   },
//   module: {
//     rules: [
//         {
//             test: /\.css$/,
//             use: [ 'style-loader', 'css-loader' ]
//     },
//       {
//         test: /\.js$/,
//         include: path.resolve(__dirname, 'src'),
//         exclude: /(node_modules|bower_components|build)/,
//         use: {
//           loader: 'babel-loader',
//           query:
//           {
//             presets:['react']
//           }
//         }
//       }
//     ]
//   },
//   externals: {
//     'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
//   }
// };


// var path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'index.js',
//     libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
//   },
//   module: {
//     loaders: [
//         {
//             test: /\.js?/,
//             include: path.resolve(__dirname, 'src'),
//             loader: "babel-loader",
//             query: {
//                 presets: ["react", "es2015", "stage-2"]
//             }
//         },
//         {
//             test: /\.css/,
//             loaders: ['style', 'css'],
//             include: path.resolve(__dirname, 'src'),
//         },
//         {
//             test: /\.scss$/,
//             loaders: ["style-loader", "css-loader", "sass-loader"],
//             include: path.resolve(__dirname, 'src'),
//         }
//     ]
// },
//   externals: {
//     'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
//   }
// };




var path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'index.js',
//     libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
      
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader"]
//       },
//       {
//         test: /\.scss$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"],
//         include: path.resolve(__dirname, 'src'),
//       }
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     })
//   ],
//   externals: {
//     'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
//   }
// };


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
   module: {
     rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|)$/,
          loader: 'url-loader',
      },
     ]
   },
   externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
  };




