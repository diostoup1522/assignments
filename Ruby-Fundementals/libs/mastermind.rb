def mastermind
  answer = 4.times.map { rand(9) }
  puts "guess the 4 integer code (y = exists in that spot, e = exists, n = doesn't exist)"
  tries = 12
  loop do
    guess = []
    guess1 = gets.chomp.split("")
    guess1.each do |i|
      guess << i.to_i
    end
    if guess == answer
      puts "you win with #{tries} tries left"
      break
    end
    guess = guess.each_with_index.map do |i, indx|
      if i == answer[indx]
        i = "y"
      else
        if answer.any? {|c| c == i}
          i = "e"
        else
          i = "n"
        end
      end
    end
    tries -= 1
    if tries == 0
      puts "you lose"
      break
    end
    puts "#{guess}, you have #{tries} tries left"
  end
end