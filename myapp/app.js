var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get('/', function (req, res) {
    console.log(app.get('env'));
    res.send('Hello World!')
})

app.listen(3000)