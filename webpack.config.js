const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
        { 
          test: /\.css$/,
          use: ['style-loader','css-loader']
        },
        { 
          test: /\.s[ca]ss$/,
          use: ['style-loader','css-loader', 'sass-loader']
        },
        { 
          test: /\.ts$/,
          use: ['ts-loader']
        },
        { 
          test: /\.twig$/,
          use: ['twig-loader']
        },
        // {
        //   test: /\.m?js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: "babel-loader",
        //     options: {
        //       presets: ['@babel/preset-env']
        //     }
        //   }
        // }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/views/pages/index.twig',
        filename: 'index.html',
        posts: [
          {title:'Lorem ipsum dolor sit amet.', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet, officia aut impedit minus hic quae asperiores a dolores sunt nulla, sapiente provident blanditiis explicabo! Eaque rem ducimus harum commodi!'},
          {title:'Eaque harum perferendis cum quis!', content: 'Voluptate consequatur doloribus aspernatur distinctio facere, architecto dignissimos amet iste assumenda vitae facilis quidem. Assumenda atque, officia, repudiandae odit, cupiditate numquam dignissimos culpa voluptatibus expedita libero sequi laudantium necessitatibus soluta?'},
          {title:'Delectus obcaecati aspernatur magni ullam!', content: 'Qui esse, minima voluptas beatae exercitationem reprehenderit aliquam sed incidunt eius amet laborum accusantium perferendis ipsa nulla porro aperiam assumenda placeat, ab nihil saepe corrupti. Quae officiis necessitatibus laboriosam non.'},
          {title:'Ullam quod officia vel rem!', content: 'Assumenda magnam delectus dicta nisi voluptatum maxime temporibus illo vitae dolores voluptas deserunt, quidem a explicabo odit accusamus dolore nulla debitis, libero quaerat beatae optio at vero facilis? Fugiat, error.'},
          {title:'Quasi ratione quae voluptate. Officia.', content: 'Vel eaque eius impedit fuga consequatur sequi debitis fugiat cumque at, neque ex, quibusdam voluptatibus est quasi officiis, consectetur dolor dolorum voluptas illo architecto voluptatem. Consequuntur ullam totam asperiores fuga.'},
        ]
      }),
      new HtmlWebpackPlugin({ template: './src/views/pages/about.twig', filename: 'about.html' }),
      new HtmlWebpackPlugin({ template: './src/views/pages/contact.twig', filename: 'contact.html' })
    ],
};