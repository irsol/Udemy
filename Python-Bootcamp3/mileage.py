
print("How many kilometers did you cycle/walk today?")
kms = input()
miles = float(kms)/1.60934
miles = round(miles, 2)
print(f"Your {kms}km ride/walk was {miles}miles!")
