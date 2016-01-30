// var palabra = prompt('Escribe una palabra y te la deletreo: ');

// var subpalabra = new Array();
// subpalabra[0]='';
// var msg = 'Palabra Deletreada: \n\n';

// for (var i=1; i<=palabra.length; i++){
// 	subpalabra[i] = subpalabra[i-1] + palabra.charAt(i-1);
// }

// for (var i=1; i<=palabra.length; i++){
// 	msg = msg + subpalabra[i] +'\n';
// }


// msg = msg + '\nPalabra al revés: \n\n';

// for (var i=palabra.length; i>0; i--){
// 	msg = msg + palabra.charAt(i-1);
// }
// alert (msg);

//************************* OBTENER ELEMENTO DE UNA ETIQUETA *********************//

// function obtenerParrafo(elemento){
// 	var parrafo = document.getElementsByTagName(elemento);
// 	alert(parrafo[1].innerHTML);
// }

// obtenerParrafo('p');

//****************** CONTADOR DE NUMERO **************************//

// var contador = prompt('Dime un numero: ');
// var i = 0;
// while(true){
// 	console.log(i);
// 	i++;
// 	if (i == contador) {
// 		break;
// 	}
// }

//****************** DELETREAR PALABRA CON WHILE ********************** //

var palabra = prompt('Escoge una palabra: ');

function mostrarPalabra(palabra){
	var numero = palabra.length;
	var i = 0;
	while(true){
		alert(palabra[i]);
		i++;
		if(i == numero){
			break;
		}
	}
}

mostrarPalabra(palabra);