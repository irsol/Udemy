import random

random_number = random.randint(1,10)  # numbers 1-10
player_guess = None

while player_guess != random_number:
    player_guess = input("Guess a number between 1 and 10: ")
    player_guess = int(player_guess)

    if player_guess < random_number:
        print(f"{player_guess} Too small, try again!")

    elif player_guess > random_number:
        print(f"{player_guess} Too high, try again!")

    else:
        print(f"{player_guess} You guess it! You won!")
