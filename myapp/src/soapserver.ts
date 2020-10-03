import * as express from 'express';
import * as soap from 'soap';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';

var xml = fs.readFileSync(__dirname + '/myservice.wsdl', 'utf8');

var app = express();
app.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: '5mb',
  })
);
app.listen(8001, function () {
  soap.listen(app, '/wsdl', {}, xml, function () {
    console.log('server initialized');
  });
});
