var numero = prompt('Elige la cantidad: ');
var tipo = prompt('Elige el tipo debe ser 1 o 2');

numero = Number(numero);
tipo = Number(tipo);



function obtenerImporteImpuesto(cantidad,tipo){
	if (tipo == 1) {
		cantidad = cantidad + ((cantidad * 21)/100);
		alert(cantidad);
	}else if (tipo == 2){
		cantidad = cantidad +  ((cantidad * 10)/100);
		alert(cantidad);
	}else{
		alert('No es un tipo valido');
	}
}

function obtenerImporteImpuesto2(cantidad){
	var arreglo = [];
	arreglo[0] = undefined;
	arreglo[1] = cantidad + ((cantidad * 21) / 100);
	arreglo[2] = cantidad + ((cantidad * 10) / 100);
	arreglo[3] = cantidad + ((cantidad * 5) / 100);
	alert(arreglo);

}

obtenerImporteImpuesto(numero,tipo);
obtenerImporteImpuesto2(numero)