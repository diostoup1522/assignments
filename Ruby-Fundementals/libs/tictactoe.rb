def tictactoe
  $p1= true
  p= 0
  def wind
    if $p1 == true
      winner = "player 2"
    else
      winner = "player 1"
    end
    puts "#{winner} wins!"
  end
  g = [[0,0,0],[0,0,0],[0,0,0]]
  loop do
    g.each do |i|
      puts "#{i}"
    end
    puts "choose row"
    row=gets.chomp.to_i-1
    puts "choose column"
    column=gets.chomp.to_i-1
    if $p1 == true
      g[row][column] = 1
      $p1 = false
    else
      g[row][column] = 2
      $p1 = true
    end
    if $p1 == false
      p = 1
    else
      p = 2
    end
    (0..2).each do |b|
      win = 0
      (0..2).each do |i|
        if g[i][b] == p
          win += 1
        end
        if win == 3
          wind
          return
        end
      end
    end
    g.each do |i|
      if i.all? {|ggrid| ggrid == p}
        wind
        return
      end
    end
    win = 0
    (0..2).each do |i|
      if g[i][i] == p
        win += 1
      end
      if win == 3
        wind
        return
      end
    end
    win = 0
    win = 0
    (0..2).each do |i|
      if g[i][2 - i] == p
        win += 1
      end
      if win == 3
        wind
        return
      end
    end
  end
end
=begin
tictactoe game
  make a playing board
  repeat
    whose turn is it?
      let the player change a box
        if a grid is only one value or if a value is the same in all three grids or there is a recurring patterns on three boxes
          give the win to a player
=end