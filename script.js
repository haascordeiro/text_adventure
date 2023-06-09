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

const fraseCidade = document.getElementById("fraseCidade")
const fraseDono = document.getElementById("fraseDono")
const fraseGata = document.getElementById("fraseGata")


// add events
function salvarCidadeState() {
  state.cidadeDono = inserirCidadeDono.value

  if (inserirCidadeDono.value.length > 0) {
    cp1pt2.style.setProperty("display", "initial"),
    escolha2.style.setProperty("display", "initial"),
    fraseCidade.innerText = `Isso, foi bem aí mesmo: ${state.cidadeDono}!`

    inserirNomeDono.focus()
    }
}
btnEnviarCidadeDono.addEventListener("click", salvarCidadeState)

function salvarNomeDonoState() {
  state.nomeDono = inserirNomeDono.value

  if (inserirNomeDono.value.length > 0) {
    cp1pt3.style.setProperty("display", "initial"),
    escolha3.style.setProperty("display", "initial")
    fraseDono.innerText = `${state.nomeDono} morava em um condomínio, comprou uma gata de raça bem cara e bonita e levou para seu apartamento.`
    
    inserirNomeGata.focus()
    }
}
btnEnviarNomeDono.addEventListener("click", salvarNomeDonoState)

function salvarNomeGataState () {
  state.nomeGata = inserirNomeGata.value

  if (inserirNomeGata.value.length > 0) {
    escolha4.style.setProperty("display", "initial"),
    fraseGata.innerText = `Quantos anos a ${state.nomeGata} vai ter?`

    inserirIdadeGata.focus()
    }
}
btnEnviarNomeGata.addEventListener("click", salvarNomeGataState)

function salvarIdadeGataState () {
  state.idadeGata = inserirIdadeGata.value
}
btnEnviarIdadeGata.addEventListener("click", salvarIdadeGataState)

function onInserirCidadeDonoKeyup (evt) {
  if (evt.code == "Enter") {
    salvarCidadeState()
  }
}
inserirCidadeDono.addEventListener("keyup", onInserirCidadeDonoKeyup)

function onInserirNomeDonoKeyup (evt) {
  if (evt.code == "Enter") {
    salvarNomeDonoState()
  }
}
inserirNomeDono.addEventListener("keyup", onInserirNomeDonoKeyup)

function onInserirNomeGataKeyup (evt) {
  if (evt.code == "Enter") {
    salvarNomeGataState()
  }
}
inserirNomeGata.addEventListener("keyup", onInserirNomeGataKeyup)

function onInserirIdadeGataKeyup (evt) {
  if (evt.code == "Enter") {
    salvarIdadeGataState()
  }
}
inserirIdadeGata.addEventListener("keyup", onInserirIdadeGataKeyup)






// debug application

const btnDepurar = document.getElementById("btnDepurar")
function depurar() {
  console.table(state)
}
btnDepurar.addEventListener("click", depurar)