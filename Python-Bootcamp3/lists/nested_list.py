# Loop over 3 nested lists

nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for l in nested_list:
    for val in l:
        print(val)


# Loop over 3 nested lists using list comprehension

nested_list = [[12, 22, 32], [41, 51, 61], [73, 83, 93]]

[[print(val) for val in l] for l in nested_list]
print(nested_list)

# Generate a nested list that can represent a game board

board = [[num for num in range(1, 4)] for val in range(1, 4)]
print(board)


# Even = X, Odd = O

board_odd_even = [["X" if num % 2 != 0 else "O" for num in range(1, 4)] for val in range(1, 4)]
print(board_odd_even)


# Using a nested list comprehension and range() create a variable called answer with value [0, 1, 2]

answer = [[num for num in range(0, 3)] for val in range(0, 3)]
print(answer)

# 10*10 nested lists

answer = [[num for num in range(0, 10)] for val in range(0, 10)]
print(answer)
