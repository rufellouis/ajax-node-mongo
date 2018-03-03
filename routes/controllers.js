
const AlarmModel = require('../models/model-alarm')


// GET
//........................
function getData(req, res)
{
	AlarmModel.find({}, (err, alarmStored) =>
	{
		 res.status(200).send(alarmStored)
	})
}




// POST
//.........................
function postData(req, res)
{
	 const model   = new AlarmModel()
	 model.horas   = req.body.horas
	 model.minutos = req.body.minutos

	 model.save((err, alarmStored) =>
	 {
	 	if (err) res.status(500).send({ message: 'Error al guardar en mongo' })

	 	res.send({ datos: alarmStored })
	 })
}




// DELETE
//...........................
function deleteData(req, res)
{
	let ID = req.body.ID

	AlarmModel.findById(ID, function(err, registro)
	{
		registro.remove( err =>
		{
			if(err) throw err
			res.send({ datos: registro }) // Para evitar error en ajax
		})
	})
}




module.exports = {
	getData,
	postData,
	deleteData
}