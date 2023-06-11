// application state
const state = {
  cidadeDono: "",
  nomeDono: "",
  nomeGata: "",
  idadeGata: "",
}

// capture elements
const btnEnviarCidadeDono = document.getElementById("enviarCidadeDono")
const inserirCidadeDono = document.getElementById("inserirCidadeDono")

const btnEnviarNomeDono = document.getElementById("enviarNomeDono")
const inserirNomeDono = document.getElementById("inserirNomeDono")

const btnEnviarNomeGata = document.getElementById("enviarNomeGata")
const inserirNomeGata = document.getElementById("inserirNomeGata")

const btnEnviarIdadeGata = document.getElementById("enviarIdadeGata")
const inserirIdadeGata = document.getElementById("inserirIdadeGata")

const escolha1 = document.getElementById("escolha1")
const cp1pt2 = document.getElementById("cp1pt2")
const escolha2 = document.getElementById("escolha2")
const cp1pt3 = document.getElementById("cp1pt3")
const escolha3 = document.getElementById("escolha3")
const escolha4 = document.getElementById("escolha4")
const cp2pt1 = document.getElementById("cp2pt1")
const decisao1_1 = document.getElementById("decisao1_1")
const decisao1_2 = document.getElementById("decisao1_2")
const decisao3_1 = document.getElementById("decisao3_1")
const decisao3_1con = document.getElementById("decisao3_1con")
const decisao3_2 = document.getElementById("decisao3_2")
const cp2final1 = document.getElementById("cp2final1")
const cp2final2 = document.getElementById("cp2final2")

const fraseCidade = document.getElementById("fraseCidade")
const fraseDono = document.getElementById("fraseDono")
const fraseGata = document.getElementById("fraseGata")
const fraseGata2 = document.getElementById("fraseGata2")
const idadeGata = document.getElementById("idadeGata")
const fraseDono2 = document.getElementById("fraseDono2")

const btnCp2Dc1 = document.getElementById("btnCp2Dc1")
const btnCp2Dc2 = document.getElementById("btnCp2Dc2")
const btnCp2Dc3 = document.getElementById("btnCp2Dc3")
const btnCp2Dc3a = document.getElementById("btnCp2Dc3a")
const btnCp2Dc4 = document.getElementById("btnCp2Dc4")
const btnCp2Dc4a = document.getElementById("btnCp2Dc4a")
const btnCp2Dc5 = document.getElementById("btnCp2Dc5")
const btnCp2Dc6 = document.getElementById("btnCp2Dc6")
const btnCp2Dc7 = document.getElementById("btnCp2Dc7")
const btnCp2Dc8 = document.getElementById("btnCp2Dc8")
const btnCp2Dc9 = document.getElementById("btnCp2Dc9")
const btnCp2Dc10 = document.getElementById("btnCp2Dc10")


// add events
function salvarCidadeState() {
  state.cidadeDono = inserirCidadeDono.value

  if (inserirCidadeDono.value.length > 0) {
    cp1pt2.style.setProperty("display", "initial"),
      escolha2.style.setProperty("display", "initial"),
    fraseCidade.innerText = `Isso, foi bem aí mesmo: ${state.cidadeDono.toUpperCase()}!`

    inserirNomeDono.focus()
  }
}
btnEnviarCidadeDono.addEventListener("click", salvarCidadeState)

function salvarNomeDonoState() {
  state.nomeDono = inserirNomeDono.value

  if (inserirNomeDono.value.length > 0) {
    cp1pt3.style.setProperty("display", "initial"),
      escolha3.style.setProperty("display", "initial")
    fraseDono.innerText = `${state.nomeDono.toUpperCase()} morava em um condomínio, comprou uma gata de raça bem cara e bonita e levou para o seu apartamento.`

    inserirNomeGata.focus()
  }
}
btnEnviarNomeDono.addEventListener("click", salvarNomeDonoState)

function salvarNomeGataState() {
  state.nomeGata = inserirNomeGata.value

  if (inserirNomeGata.value.length > 0) {
    escolha4.style.setProperty("display", "initial"),
    fraseGata.innerText = `Quantos anos a ${state.nomeGata.toUpperCase()} tem?`

    inserirIdadeGata.focus()
  }
}
btnEnviarNomeGata.addEventListener("click", salvarNomeGataState)

function salvarIdadeGataState() {
  state.idadeGata = inserirIdadeGata.value

  if (inserirNomeGata.value.length > 0) {
    cp2pt1.style.setProperty("display", "initial"),
    fraseGata2.innerText = `Lá estava a ${state.nomeGata.toUpperCase()} sozinha na floresta, molhada e com fome.`
    fraseIdadeGata.innerText = `Afinal, ${state.idadeGata.toUpperCase()} anos não é uma idade fácil para um gato...`
  }
}
btnEnviarIdadeGata.addEventListener("click", salvarIdadeGataState)

// (keyup events)
function onInserirCidadeDonoKeyup(evt) {
  if (evt.code == "Enter") {
    salvarCidadeState()
  }
}
inserirCidadeDono.addEventListener("keyup", onInserirCidadeDonoKeyup)

function onInserirNomeDonoKeyup(evt) {
  if (evt.code == "Enter") {
    salvarNomeDonoState()
  }
}
inserirNomeDono.addEventListener("keyup", onInserirNomeDonoKeyup)

function onInserirNomeGataKeyup(evt) {
  if (evt.code == "Enter") {
    salvarNomeGataState()
  }
}
inserirNomeGata.addEventListener("keyup", onInserirNomeGataKeyup)

function onInserirIdadeGataKeyup(evt) {
  if (evt.code == "Enter") {
    salvarIdadeGataState()
  }
}
inserirIdadeGata.addEventListener("keyup", onInserirIdadeGataKeyup)


// (cp2/cp3 events)

function showEscolha2_1() {
  decisao1_1.style.setProperty("display", "block")
  btnCp2Dc2.setAttribute("disabled", true)
}
btnCp2Dc1.addEventListener("click", showEscolha2_1)

function showEscolha2_2() {
  decisao1_2.style.setProperty("display", "block")
  btnCp2Dc1.setAttribute("disabled", true)
}
btnCp2Dc2.addEventListener("click", showEscolha2_2)

function showEscolha2_3() {
  decisao3_1.style.setProperty("display", "block")
  btnCp2Dc4.setAttribute("disabled", true)
}
btnCp2Dc3.addEventListener("click", showEscolha2_3)

function showEscolha2_3a() {
  decisao3_1.style.setProperty("display", "block")
  btnCp2Dc4a.setAttribute("disabled", true)
}
btnCp2Dc3a.addEventListener("click", showEscolha2_3a)

function showEscolha2_4() {
  decisao3_2.style.setProperty("display", "block")
  btnCp2Dc3.setAttribute("disabled", true)
}
btnCp2Dc4.addEventListener("click", showEscolha2_4)

function showEscolha2_4a() {
  decisao3_2.style.setProperty("display", "block")
  btnCp2Dc3a.setAttribute("disabled", true)
}
btnCp2Dc4a.addEventListener("click", showEscolha2_4a)

function showEscolha2_5() {
  decisao3_1con.style.setProperty("display", "block")
  btnCp2Dc6.setAttribute("disabled", true)
}
btnCp2Dc5.addEventListener("click", showEscolha2_5)

function showEscolha2_6() {
  decisao3_1con.style.setProperty("display", "block")
  btnCp2Dc5.setAttribute("disabled", true)
}
btnCp2Dc6.addEventListener("click", showEscolha2_6)

function showEscolha2_7() {
  cp2final1.style.setProperty("display", "block")
  btnCp2Dc8.setAttribute("disabled", true)
}
btnCp2Dc7.addEventListener("click", showEscolha2_7)

function showEscolha2_8() {
  cp2final2.style.setProperty("display", "block")
  btnCp2Dc7.setAttribute("disabled", true)
}
btnCp2Dc8.addEventListener("click", showEscolha2_7)

function showEscolha2_9() {
  cp3.style.setProperty("display", "block")
  btnCp2Dc9.setAttribute("disabled", true)
  fraseDono2.innerText = `Sim! Era o ${state.nomeDono.toUpperCase()}!`
}
btnCp2Dc9.addEventListener("click", showEscolha2_9)

function showEscolha2_10() {
  creditos.style.setProperty("display", "block")
  btnCp2Dc10.setAttribute("disabled", true)
}
btnCp2Dc10.addEventListener("click", showEscolha2_10)










// debug application

const btnDepurar = document.getElementById("btnDepurar")
function depurar() {
  console.table(state)
}
btnDepurar.addEventListener("click", depurar)


// typying effect

/* const firstText = document.querySelector("#cp1pt1 > .digitando")
const delay = 40 // Atraso em milissegundos entre cada caractere

function typeText(element, next) {
  const text = element.textContent
  let index = 0
  element.textContent = ""

  function addNextCharacter() {
    if (index < text.length) {
      element.textContent += text.charAt(index)
      index++
      setTimeout(addNextCharacter, delay)
    } else if (next) {
      next()
    }
  }

  addNextCharacter()
}

if (firstText) {
  typeText(firstText)
}

/* elements.forEach((element) => {
  typeText(element);
}); */