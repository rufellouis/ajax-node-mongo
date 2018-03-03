

var ajaxRequest = new XMLHttpRequest()




// RESPUESTA
//.....................
function ajaxResponse(method)
{
	ajaxRequest.onreadystatechange = function()
	{	
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
		{
			let data = JSON.parse(ajaxRequest.responseText)


			// Filtrar el método delete
			//.....................................
			if(method == 'GET' || method == 'POST') 
			{
				mapData(data)
			}
		}
	}
}






// LLAMADA
//..........................................................
function ajaxCalls(parametros)
{
	ajaxResponse(parametros.method) // Para reconocer el método de la llamada
	ajaxRequest.open(parametros.method, parametros.route, true)
	ajaxRequest.setRequestHeader(parametros.content, parametros.urlencoded)
	ajaxRequest.send(parametros.data)
}






// GET
//...................
function ajaxGetAll()
{
	let parametros = {

		method:    'GET',
		route:     'http://localhost:3000/get',
		content:    null,
		urlencoded: null,
		data:       null,
	}

	ajaxCalls(parametros)
}
ajaxGetAll()








// POST
//..............................................
function ajaxPost(data_1, data_2) // get-data.js
{
	let parametros = {

		method:     'POST',
		route:      'http://localhost:3000/post',
		content:    'Content-Type',
		urlencoded: 'application/x-www-form-urlencoded',
		data:       'horas=' + data_1 + '&minutos=' + data_2,
	}

	ajaxCalls(parametros)
}








// DELETE
//...................
function ajaxDelete(id)
{
	let parametros = {

		method:     'DELETE',
		route:      'http://localhost:3000/delete',
		content:    'Content-Type',
		urlencoded: 'application/x-www-form-urlencoded',
		data:       'ID=' + id,
	}

	ajaxCalls(parametros)
}




