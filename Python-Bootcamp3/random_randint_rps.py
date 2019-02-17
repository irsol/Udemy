from random import randint

player_wins = 0
computer_wins = 0
winning_score = 3

while player_wins < winning_score and computer_wins < winning_score:
    print(f"Player Score: {player_wins} Computer Score: {computer_wins}")

# for time in range(3):  # game repeats 3 times

    player = input("Enter your choice: rock, paper or scissors: ").lower()

    if player == "quit" or player == "q":
        break

    random_num = randint(0, 2)
    if random_num == 0:
        computer = "rock"
    elif random_num == 1:
        computer = "paper"
    else:
        computer = "scissors"

    print(f"Computer plays: {computer}")

    # Tie outcome
    if player == computer:
        print("It's a tie!")
    elif player == "rock":
        if computer == "paper":
            print("Computer wins :( ")
            computer_wins += 1
        else:
            print("Player wins!")
            player_wins += 1

    # Paper outcome
    elif player == "paper":
        if computer == "rock":
            print("Player win!")
            player_wins += 1
        else:
            print("Computer wins!")
            computer_wins += 1

    # Scissors outcome
    elif player == "scissors":
        if computer == "rock":
            print("Computer wins!")
            computer_wins += 1
        else:
            print("You win!")
            player_wins += 1

    else:
        print("Something went wrong! Check your spelling!")

if player_wins > computer_wins:
    print("Congrats, you won!")
elif player_wins == computer_wins:
    print("It's a tie!")
else:
    print("Computer won!")

