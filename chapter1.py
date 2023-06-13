paragrafo = "Esta é uma história interativa. Tecle Enter para dar continuidade ao texto e divirta-se!"
input(paragrafo)
print("")

print("---------------------------")
paragrafo = "A GATA MAL COMPREENDIDA"
input(paragrafo)
print("")

paragrafo = "Era uma vez, muito tempo atrás, em um lugar bem longe daqui... \n" \
            "Pera ai, pera ai!"
input(paragrafo)
paragrafo = "Para tudo! Isso foi há um mês e foi bem perto daqui!"
input(paragrafo)
print("")

cidade = input("Onde você mora mesmo?: ")
while not cidade:
    cidade = input("Onde você mora mesmo?: ")

paragrafo = "Isso, foi bem aí mesmo: "+cidade.capitalize()+"!"
input(paragrafo)
print("")

paragrafo = "Um homem, que se chamava..."
input(paragrafo)
print("")

dono = input("Como era mesmo o nome do dono?: ")
while not dono:
    dono = input("Como era mesmo o nome do dono?: ")

paragrafo = dono.capitalize()+" morava em um condomínio, comprou uma gata de raça bem cara e bonita..."
input(paragrafo)
print("")

paragrafo = "E levou para o seu apartamento."
input(paragrafo)

print("")
paragrafo = "O problema era que essa raça tinha uma pelagem peculiar \n" \
            "e podia-se confundi-la com um filhote de jaguatirica, \n" \
            "e o síndico do prédio cometeu esse erro: \n" \
            "achou que ela era um bebê jaguatirica em viveiro ilegal!"
input(paragrafo)

print("")
paragrafo = "Ele falou com umas pessoas e a jaguatiric... ops, a gata foi solta na floresta!"
input(paragrafo)

print("")
paragrafo = "Agora você pode ajudá-la! Mas daí você me pergunta: como?"
input(paragrafo)

print("")
paragrafo = "Agora você pode controlar as decisões da bichinha na floresta, \n" \
            "até que dê uma luz na cabeça do síndico, \n" \
            "ou até ela sair de lá com segurança!"
input(paragrafo)

print("")
paragrafo = "Mas cuidado: suas decisões podem levá-la à morte!"
input(paragrafo)

print("---------------------------")

print("")
gata = input("Qual vai ser o nome da gata?: ")
while gata == "":
    gata = input("Qual vai ser o nome da gata?: ")

idade = input("Quantos anos a gata vai ter?: ")
while idade == "":
    idade = str(input("Quantos anos a gata vai ter?: "))

print("")
paragrafo = "---------------------------"
input(paragrafo)
print("")

paragrafo = "Lá estava a "+gata.capitalize()+" sozinha na floresta, molhada e com fome.\n" \
            "Afinal, "+idade+" anos não é uma idade fácil para um gato...\n" \
            "Que raiva do síndico! \n" \
            "Ela andou, andou e andou até chegar na frente de um estreito, mas fundo buraco."
input(paragrafo)
print("")