//importando framework de node
var express = require('express');
 
var app = express();
//respuesta a "/"
app.get('/', function (req, res) {
 res.send('HELLO WORLD FOR SA :D');
});
//puesto 3000 por defecto
app.listen(process.env.PORT || 3000);
 
module.exports = app;