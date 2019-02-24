# Double every number in the list.

numbers = [1, 2, 3, 4, 5]
doubled_numbers = []

for num in numbers:
    doubled_number = num * 2
    doubled_numbers.append(doubled_number)

print(doubled_numbers)


# Double every numbers in the list, using comprehension:.

numbers = [1, 2, 3, 4, 5]

doubled_numbers = [num * 2 for num in numbers]

print(doubled_numbers)

# Make each character in the string uppercase, using list comprehension.

name = 'hallo'

[char.upper() for char in name]

# Generate numbers between 1 and 5, multiple them by 10.

[num*10 for num in range(1, 6)]


# Turn values into their boolean representation.

[bool(val) for val in [0, [], "", 1]]

# Take a list of numbers and convert it to a list of strings.

numbers = [6, 7, 8]

string_list = [str(num) for num in numbers]

print(string_list)

# Add str to the list nums.

nums = [1, 2, 3,]
[str(num) for num in nums]
[str(num) + "Hello" for num in nums]

# List Comprehension with Conditional Logic

numbers = [6, 7, 8, 9]

evens = [num for num in numbers if num % 2 == 0]

odds = [num for num in numbers if num % 2 != 0]

print(f"Even: {evens} Odd: {odds}")

# List Comprehension with else statement: take even numbers and divide them by 2,
# if number is even it's multiply it by 2.

numbers = [6, 7, 8, 9]

[num*2 if num % 2 == 0 else num/2 for num in numbers]


# Take a string and return it without "aeiouy" vowels.

with_vowels = "This is Python!"

"".join(char for char in with_vowels if char not in "aeiouy")


# Take first letter in names.
answer = [person[0] for person in ["Elie", "Tim", "Matt"]]

# Use loops to take first letters in a list.
answer = []
for person in ["Elie", "Tim", "Matt"]:
    answer.append(person[0])

# Find is the intersection of the two lists.
answer = [val for val in [1, 2, 3, 4] if val in [3, 4, 5, 6]]

# Find is the intersection of the two lists.
answer = []
for x in [1,2,3,4]:
    if x in [3,4,5,6]:
        answer.append(x)

# Use [::-1] slice is a quick way to reverse a string
answer2 = [val[::-1].lower() for val in ["Elie", "Tim", "Matt"]]

# or reverse list solution with for statement
answer2 = []
for name in ["Elie", "Tim", "Matt"]:
    answer2.append(name[::-1].lower())


# Return all numbers divisible by 12 in range 1-100 (including 100).

answer = [num for num in range(1, 101) if num % 12 == 0]

# Return string without "aeiou" vowels.
answer = [char for char in "amazing" if char not in "aeiou"]
