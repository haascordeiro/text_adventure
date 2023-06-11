import subprocess

while True:
    subprocess.run(["python", "chapter1.py"])
    subprocess.run(["python", "chapter2.py"])
    subprocess.run(["python", "chapter3.py"])

    print("")

    play_again = input("Quer jogar de novo (sim/não)? ").lower()

    print("")

    if play_again != "sim":
        break

print("Até a próxima!")