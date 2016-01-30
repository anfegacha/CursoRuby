var numeroMagico = Math.round(Math.random()*20);
alert(numeroMagico);


while(true){
	var opcionUsuario = prompt('Hemos escogido un numero entre 1 y 20 \n trata de adivinar el numero: ');
	if (numeroMagico == opcionUsuario) {
		alert('Ganaste');
		break;
	}
	else if (opcionUsuario < numeroMagico){
		alert('El numero es mayor vuelve a intentarlo.');
		
	}else if (opcionUsuario > numeroMagico) {
		alert('El numero es menor vuelve a intentarlo');
		
	}else if (opcionUsuario === 0 ) {
		break;
	}
}

