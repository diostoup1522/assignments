require 'pry-byebug'
def substrings(str, arr)
  str = str.split(' ')
  result = Hash.new(0)
  str.each do |sword|
    arr.each do |aword|
      result[sword] += 1 if aword.include?(sword)
      aword
    end
  end
  result
end
# equipment:
# votes.reduce(Hash.new(0)) do |result, vote|
#   result[vote] += 1
#   result
# end
#   gets the amount of times a string is seen inside an array
# fruits.any? { |fruit| fruit.length > 10 }
#   checks if a condition is present within an array, .none? is the opposite
# PLAN:
# turn string into array
# for each item in str
#     reduce arr
#       if the item == the word
#         word+1
# reject any words that were not found
