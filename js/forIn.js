var arreglo = [];

for (var i=0; i<=4; i++){
	var num = prompt('Escribe un numero');
	num = Number(num);
	arreglo[i] = num;
}
alert(arreglo);

for (i in arreglo){
	alert(arreglo[i] + ' * 3 = ' + arreglo[i] * 3);
}
