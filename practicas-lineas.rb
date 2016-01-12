File.open('alimentos.txt','r') do |f|
	identificador = 1

	f.readlines.each do |linea|
		registro = linea.chomp.split(/,/)
		alimento = registro[0]
		agregado = registro[1]

		printf("%3d: %s:\n", identificador, alimento)
		printf("Agregado: %s:\n", agregado)

		identificador += 1
		end
	end