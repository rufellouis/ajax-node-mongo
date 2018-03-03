
// Asignar click a los 
// botones de borrado
//.....................
function asignarClick()
{
	var close_cross = document.getElementsByClassName('close-cross')

	for(let i=0; i < close_cross.length; i++)
	{
	 	close_cross[i].addEventListener('click', borrarEntrada)
	}
}


setTimeout(function(){ // Para dar tiempo a cargar las capas
 	asignarClick()
}, 500)







 function borrarEntrada()
 {
 	var that = this
 	var id = that.id


 	// Fade Out
 	//............................................
 	that.parentNode.style.transition = "all, .3s"
 	that.parentNode.style.opacity = 0


 	// Borramos tras la transición
 	//............................
 	setTimeout(function(){
 		that.parentNode.remove()
	 	ajaxDelete(id)
 	}, 300)
 }




