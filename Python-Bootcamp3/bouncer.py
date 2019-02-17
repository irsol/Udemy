# Simple age checker.

# Ask for age
age = input("How old are you: ")

# Check an empty string
if age != "":

# Check an empty string: solution 2
# if age:
    
    age = int(age)
    if age >= 21:
        print("You can enter and can drink!")
    elif age >= 18:
        print("You can enter, but need a wristband!")
    else:
        print("Sorry, you are too young!")
else:
    print("Please enter an age!")
