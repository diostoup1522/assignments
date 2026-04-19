def hangman
  file = File.readlines('alotofenglishwords.txt')
  wline = rand(0...file.length)
  word = file[wline].chomp
  showed = word[0]
  (1...word.length).each do |letter|
    letter = "_"
    showed << letter
  end
  tries = 7
  wrongs = ""
  puts"it's hangman! just say a random character"
  loop do
    puts showed
    puts wrongs
    guess=gets.chomp
    guessed = false
    word.chars.each_with_index do |letter, indx|
      if letter == guess
        guessed = true
        showed[indx] = letter
      end
    end
    if guessed == false
      wrongs << guess
      tries -= 1
    end
    if showed == word
      puts "the word was #{word}, you win!"
      return
    end
    if tries == 0
      puts "you lose, the word was #{word}"
      return
    end
    puts "you have #{tries} tries left"
  end
end