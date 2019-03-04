# Loop over 3 nested lists

nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for l in nested_list:
    for val in l:
        print(val)


# Loop over 3 nested lists using list comprehension

nested_list = [[12, 22, 32], [41, 51, 61], [73, 83, 93]]

[[print(val) for val in l] for l in nested_list]


# Generate a nested list that can represent a game board

board = [[num for num in range(1, 4)] for val in range(1, 4)]

print(board)


#