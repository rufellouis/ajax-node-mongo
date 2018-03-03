
const mongoose = require('mongoose')


const alarmModel = mongoose.Schema({

	horas   : String,
	minutos : String
})


module.exports = mongoose.model('alarmModel', alarmModel)



