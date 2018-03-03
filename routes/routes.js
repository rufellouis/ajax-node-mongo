


module.exports = function(controllers, app)
{
	app.get('/get', controllers.getData)
	app.post('/post', controllers.postData)
	app.delete('/delete', controllers.deleteData)
}