def mi_metodo
	mensaje = "El resultado es: "
	resultado = 2+2
	mensaje + resultado.to_s
end

def otro_metodo(argumento, *argumentos)
	p argumento
	p argumentos
end

otro_metodo('hola',2,'cuando,2.5')

def login(usuario:, clave: password)
	p "Usuario: " + usuario
	p "Clave: " + clave
end

login(usuario: "Andres", clave: "Andres")