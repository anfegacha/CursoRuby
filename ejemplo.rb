prompt = '> '
mercado = []


puts "Eres Administrador o Comprador."
puts prompt
usuario = $stdin.gets.chomp

while usuario == 'Administrador'
	puts 'Que bien eres el dueño de la tienda'
	puts 'Deseas ingresar un producto para la venta.'
	puts prompt
	validar = $stdin.gets.chomp
	while validar == 'si'
		puts 'Ingresa el nombre del producto.'
		puts prompt
		mercado.push $stdin.gets.chomp
		puts 'Deseas ingresar otro producto'
		puts prompt
		ingresar = $stdin.gets.chomp
		if ingresar == validar
			puts 'Ingresa el producto'
		else
			validar = 'no'
		end
	end
	puts "Gracias por ingresar los productos que tienes en el mercado son: "
	puts mercado
	puts 'Eres Administrador o Comprador: '
	puts prompt
	confirmaCompra = $stdin.gets.chomp
	usuario = confirmaCompra
end

puts 'Bienvenido a la tienda de comida: '
puts 'Deseas ver el mercado que tenemos en estos momentos: '
puts prompt
confirmar = $stdin.gets.chomp
	if confirmar == 'si'
		puts mercado
		puts 'Elige tu producto: '
		puts prompt 
		vendido = $stdin.gets.chomp
		mercado.each do |producto|
			if producto == vendido
				mercado.delete(producto)
				puts 'Nuestro mercado quedo asi.'
				puts mercado
			end
		end
	else
		puts 'Gracias por venir'
	end

