

function mapData(data)
{
	for( i in data )
	{
		insertData(data[i]._id, data[i].horas, data[i].minutos)
	}
}





function insertData(id, horas, minutos)
{
	// Crear capas
	//.............................................
	let capa_entrada = document.createElement('div')
	let capa_datos   = document.createElement('div')
	let parrafo_1    = document.createElement('p')
	let parrafo_2    = document.createElement('p')
	let close_cross  = document.createElement('div')


	// Insertar capas
	//......................................
	container_data.appendChild(capa_entrada)
	capa_entrada.appendChild(capa_datos)
	capa_entrada.appendChild(close_cross)
	capa_datos.appendChild(parrafo_1)
	capa_datos.appendChild(parrafo_2)



	// Insertar datos
	//............................
	parrafo_1.innerHTML = horas
	parrafo_2.innerHTML = minutos
	


	// Styles
	//...........................................
	capa_entrada.classList.add('capa-entrada')
	capa_datos.classList.add('capa-datos')
	close_cross.classList.add('close-cross')
	close_cross.classList.add('icon-close-cross')



	// Fade In para la entrada
	//........................................
	capa_entrada.style.transition = "all, .3s"
	capa_entrada.style.opacity    = 0
	setTimeout(function()
	{
		capa_entrada.style.opacity = 1
	})




	// ID del registro
	// asignado al botón
	//..................
	close_cross.id = id



	// Asignar click
	// a los botones 
	// de borrado
	//...............
	asignarClick() // delete-button.js

}



