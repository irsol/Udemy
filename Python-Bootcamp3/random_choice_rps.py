from random import choice

# Create a list of game options
game = ["rock", "paper", "scissors"]

player = input("Player, make your move: rock, paper or scissors? ").lower()

# Assign random player
cpu_choice = choice(game)

print(f"Computer plays: {cpu_choice} ")

# Tie outcome
if player == cpu_choice:
    print("It's a tie!")

# Rock outcome
elif player == "rock":
    if cpu_choice == "scissors":
        print("Player wins!")
    if cpu_choice == "paper":
        print("Computer wins!")

# Paper outcome
elif player == "paper":
    if cpu_choice == "scissors":
        print("Computer wins!")
    if cpu_choice == "rock":
        print("Player wins!")

# Scissors outcome
elif player == "scissors":
    if cpu_choice == "paper":
        print("Player wins!")
    if cpu_choice == "rock":
        print("Computer wins!")

else:
    print("Something went wrong! Check your spelling!")
