# Replace letters in the list

people = ["Hanna","Louisa","Claudia", "Angela","Geoffrey", "aparna"]

replaced = ["Hannah" if item == "Hanna" else item for item in people]

replaced = ["Jeffrey" if item == "Geoffrey" else item for item in people]

replaced = ["Aparna" if item == "aparna" else item for item in people]

print(replaced)


# Replace letters in the list, using built-it method replace()

people = [w.replace("Hanna", "Hannah") for w in people]
people = [w.replace("Geoffrey", "Jeffrey") for w in people]
people = [w.replace("aparna", "Aparna") for w in people]
print(people)


# Replace letters in the list, using index.

people = ["Hanna","Louisa","Claudia", "Angela","Geoffrey", "aparna"]

people[0] = "Hannah"
people[4] = "Jeffrey"
people[-1] = "Aparna"
print(people)

# Accessing values in a list using while loop.

numbers = [1, 2, 3, 4]
i = 0

while i < len(numbers):
    print(numbers[i])
    i += 1

# Access the date directly from inside the list.
# With while loop we have easy access to index of each items in the list.

colors = ["red", "green", "emerald", "teal"]

index = 0
while index < len(colors):
    print(f"Index {index}: {colors[index]}")
    index += 1

# Accessing values in a list using for loop.

colors = ["red", "green", "emerald", "teal"]

for color in colors:
    print(color)


# Capitalize each string anf combine all items in the list in one.

sounds = ["super", "cali", "fragil", "istic", "expi", "ali", "docious"]
result = ""

for s in sounds:
    result += s.upper()
print(result)

# Add all strings to result variable and then capitalize the whole string

sounds = ["super", "cali", "fragil", "istic", "expi", "ali", "docious"]
result = ''

for s in sounds:
    result += s
result = result.upper()
print(result)
