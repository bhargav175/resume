import express from 'express';
import http from 'http';
import fs from 'fs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import compress from 'compression';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/containers/Root';


//import DebugMiddleware from './app/middleware/debug';

let app = express();
let config = require('./webpack.config');
let compiler = webpack(config)

app.use(compress());
app.use(express.static('static'));
app.set('view engine','jade');
app.set('views','./views');

app.get('/',(req,res)=>{
	res.sendFile('index',{content:'yo'});
});


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

var httpServer = http.createServer(app);
httpServer.listen(3030);


console.log( process.env.NODE_ENV + " server running at " + 3030);
