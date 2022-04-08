const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

const app = express();

app.use(express.json())

const empregadosRoutes = require('./src/api/routes/empregadosRoutes')
const projetosRoutes = require('./src/api/routes/projetosRoutes')

app.use(empregadosRoutes)
app.use(projetosRoutes)

app.set('url', 'http://localhost:')
app.set('porta', 3001);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;

