
paises = ['Colombia','Peru','España']

paises.each do |pais|
	puts "Este es el pais #{pais}"
end

def dos_veces
	yield
	yield
end

dos_veces { puts 'Esto es un texto'}