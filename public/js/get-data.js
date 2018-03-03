
let input_text_1 = document.getElementById('input_text_1')
let input_text_2 = document.getElementById('input_text_2')
let button_1     = document.getElementById('button_1')
//........................................................



// Obtener datos de los campos de texto
//.........................................
function getData()
{
	let data_1 = input_text_1.value
	let data_2 = input_text_2.value

	clearInputs() 


	ajaxPost(data_1, data_2) // Llamada a ajax post
}
button_1.addEventListener('click', getData)





// Vaciar inputs
//....................
function clearInputs()
{
	input_text_1.value = ""
	input_text_2.value = ""
}
