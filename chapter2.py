paragrafo = "O que ela faz?"
input(paragrafo)
print("")

paragrafo = "Alternativa A: ela pula por cima.\n" \
            "Alternativa B: ela dá meia volta e vai embora."
input(paragrafo)
print("")

escolha = input("O que ela faz? (A ou B): ").upper()

while escolha != "A" and escolha != "B":
    escolha = input("O que ela faz? (A ou B): ").upper()

if escolha == "A":
        print("\n" \
        "Ela pega distância, corre e pula por cima! Que gata corajosa! \n" \
        "E ela chega ao outro lado com sucesso! E lá ela encontra um peixe fresquinho! \n" \
        "O que ela faz?")

elif escolha == "B":
        print("\n" \
        "A gata não pula, pois parece perigoso demais pular por cima e não vale o risco. \n" \
        "Porém, quando ela se vira, se depara com um cachorro... com um cachorro, não com um lobo! \n" \
        " \n" \
        "Ela se desespera e corre como se não houvesse amanhã, \n" \
        "mas ela se esquece do buraco e cai, cai, cai e... \n" \
        " \n" \
        "VOCÊ MORREU... \n" \
        " \n" \
        "Opa, mas gatos têm 9 vidas... \n" \
        "ela revive, escala o buraco, e do outro lado encontra um peixe fresquinho! \n" \
        " \n" \
        "O que ela faz?")

print("")
paragrafo = "Alternativa A: ela come o peixe, pois está há tempos sem comer!\n" \
            "Alternativa B: ela não come, pois parece suspeito..."
input(paragrafo)
print("")

escolha = input("O que ela faz? (A ou B): ").upper()

while escolha != "A" and escolha != "B":
    escolha = input("O que ela faz? (A ou B): ").upper()

if escolha == "A":
        print("\n" \
        "Ela pula no peixe sem medo de ser feliz! \n" \
        "Só que uma rede começa a cair vagarosamente em cima dela... \n" \
        "O que ela faz?")
        input("")
        paragrafo = "Alternativa A: ela corre rápido! \n" \
        "Alternativa B: ela sai devagarinho, sem ninguém perceber...."
        input(paragrafo)
        input("")
        escolha = input("O que ela faz? (A ou B): ").upper()

        while escolha != "A" and escolha != "B":
                escolha = input("O que ela faz? (A ou B): ").upper()

        if escolha == "A" or "B":
                print("\n" \
                "Ela consegue fugir da rede, mas tropeça em uma pedra e torce a patinha... \n" \
                "Tenta escapar, mas concentrada na dor ela não vê um penhasco e cai... \n" \
                " \n" \
                "VOCÊ MORREU... \n" \
                " \n" \
                "Opa, mas gatos têm 9 vidas... \n" \
                "ela revive, escala o penhasco, e lá está o peixe novamente... \n" \
                " \n" \
                "Dessa vez, ela dá meia volta...")

elif escolha == "B":
        print("\n" \
        "Ela não come, pois parece suspeito... \n" \
        "então ela dá meia volta e continua andando.")

print("")
paragrafo = "Ela anda, anda, anda até chegar a uma clareira, \n" \
            "onde ela encontra o que acha que são caçadores tentando capturar um bebê jaguatirica. \n" \
            "Ela fica assustada! \n" \
            " \n" \
            "O que ela faz?"
input(paragrafo)
print("")

paragrafo = "Alternativa A: ela tenta ajudar. \n" \
            "Alternativa B: ela passa pelo meio da clareira."
input(paragrafo)
print("")

escolha = input("O que ela faz? (A ou B): ").upper()

while escolha != "A" and escolha != "B":
    escolha = input("O que ela faz? (A ou B): ").upper()

if escolha == "A" or "B":
        print("\n" \
        "Ela vai presa e é colocada em uma caixa, mas não na mesma caixa do bebê. \n" \
        "Quando ela chega ao seu destino, e a tiram da caixa, \n" \
        "ela não vê a jaguatirica e fica histérica, mas não consegue se soltar... \n" \
        " \n" \
        "Ela jamais verá o bebê novamente...")

print("")
paragrafo = "---------------------------"
input(paragrafo)
print("")