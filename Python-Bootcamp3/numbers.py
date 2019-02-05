# Check odd, even and unlucky numbers.

for n in range(1, 21):
    if n == 4 or n == 13:
        print(f"{n} is unlucky!")
    elif n % 2 == 0:
        print(f"{n} is even!")

    else:
        print(f"{n} is odd!")


# Solution with one print statement

for n in range(1, 21):
    if n == 4 or n == 13:
        type = "unlucky"
    elif n % 2 == 0:
        type = "even"

    else:
        type = "odd"
    print(f"{n} is {type}!")
