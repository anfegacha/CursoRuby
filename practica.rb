alimento = ARGV.shift
mercado = []
mercado.push alimento

File.open('alimentos.txt','a') do |f|
	creada = Time.now
	f.puts "#{alimento}, #{creada}"

	mercado.each do |alimentos|
		puts alimentos
	end

end

puts "#{alimento} agregado"


