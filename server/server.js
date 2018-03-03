const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const express    = require('express')
//...................................

const app = express()
//...................

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//........................





// Local
//....................................................
const port = 3000
var database = 'mongodb://localhost:27017/template-db'
//....................................................

// Producción
//.....................................
// var port = process.env.PORT
// var database = process.env.MONGODB_URI
//.....................................

//...................................................................
mongoose.connect(database, (err, res) =>
{
	if (err) throw err
	console.log('Conectado a mongo') 

	app.listen(port, () => { console.log('Ejecutando en', port) })
})
//...................................................................



module.exports = app
