import time

name = input("What is your name? ")
character = input("What is your character name? ")
age = input("How old is your character, in years? ")

text1 = "Game over, {}!"
text2 = "{}, {} years old, did not survive..."
text3 = "Go back to the previous choice and try again."

def game_over(name,character,age):
    print(text1.format(name))
    print(text2.format(character,age))
    print(text3)

print("")

game_over(name,character,age)

