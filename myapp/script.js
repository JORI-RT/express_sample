var express = require('express');
var app = express();

//環境を表示
console.log(app.get('env'));
//configファイルから環境に応じた内容を取得
var config = require('./config.json')[app.get('env')];

//表示
console.log(config.host);