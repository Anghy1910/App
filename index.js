const express = require ("express");
const app = express();
const routes = require('./routes/routes')
const modulos = require('./routes/modulos');
const colegios = require('./routes/colegios')

const cors = require('cors');

//AJUSTES
app.set('port', 3000);
require('dotenv').config()

//MIDLEWARE
app.use(express.json());
app.use(cors({origin: '*'}));

//RUTAS
app.get('/',(req,res)=>{
  res.send('Nuestra primera app Express-MySQL')
})

app.use('/api', routes)
app.use('/api/modulos',modulos);
app.use('/api/colegios', colegios);

//AJUSTES SERVIDOR
app.listen(app.get('port'),()=>{
  console.log(`Servidor corriendo en el puerto ${app.get(`port`)}`)
})