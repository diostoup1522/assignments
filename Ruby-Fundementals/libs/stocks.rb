require 'pry-byebug'
def findstock(smarket)
  hvalue = []
  smarket.each_with_index do |i, indx|
    mprice = smarket[indx..].max
    profit = mprice - i
    d = smarket.index(mprice)
    hvalue << [indx, d, profit]
  end
  hvalue.max_by { |_, _, profit| profit }
end
# for every day in the stock market
#   check the highest price that follows it
#     after finding it save the amount of profit
# select the most profitable one