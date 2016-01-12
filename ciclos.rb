i = 0

while i <=10
	puts i
	i+=1
end

puts 'Until'

j = 10

until j < 0
	puts j
	j-=1
end

puts 'Paises'

paises = %w[Colombia España Portugal]

paises.each do |pais|
	puts pais
	if pais == 'Colombia'
		puts 'Estas en Colombia '
	end
end