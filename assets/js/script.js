const button = document.querySelector(".convert")

// Cotação em 24/06/2025
const cotacoes = {
  real: 1,
  dollar: 5.51,
  euro: 6.41,
  libra: 7.51,
  bitcoin: 585455.06
}

const moedas = {
  real: {
    sigla: "BRL",
    nome: "Real Brasileiro",
    img: "brasil.png",
    alt: "Bandeira Brasil"
  },
  dollar: {
    sigla: "USD",
    nome: "Dólar Americano",
    img: "estados-unidos.png",
    alt: "Bandeira Estados Unidos"
  },
  euro: {
    sigla: "EUR",
    nome: "Euro",
    img: "euro.png",
    alt: "Bandeira União Europeia"
  },
  libra: {
    sigla: "GBP",
    nome: "Libra Esterlina",
    img: "libra.png",
    alt: "Bandeira Libra"
  },
  bitcoin: {
    sigla: "BTC",
    nome: "Bitcoin",
    img: "bitcoin.png",
    alt: "Bandeira Bitcoin"
  }
}

function formatarValor(valor, moeda) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: moeda
  }).format(valor)
}

function renderMoeda(valorEl, imgEl, textoEl, valor, tipo) {
  const moeda = moedas[tipo]
  valorEl.innerHTML = formatarValor(valor, moeda.sigla)
  imgEl.src = `./assets/img/${moeda.img}`
  imgEl.alt = moeda.alt
  textoEl.textContent = moeda.nome
}

function cliquei() {
  const valor = parseFloat(document.querySelector("#value").value)
  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido.")
    return
  }

  const convertFrom = document.querySelector("#convertFrom").value
  const convertTo = document.querySelector("#convertTo").value

  const valorFromEl = document.querySelector("#valueFrom")
  const valorToEl = document.querySelector("#valueTo")
  const imgFromEl = document.querySelector("#imgFrom")
  const imgToEl = document.querySelector("#imgTo")
  const coinFromEl = document.querySelector("#coinFrom")
  const coinToEl = document.querySelector("#coinTo")

  const valorConvertido = (valor * cotacoes[convertFrom]) / cotacoes[convertTo]

  renderMoeda(valorFromEl, imgFromEl, coinFromEl, valor, convertFrom)
  renderMoeda(valorToEl, imgToEl, coinToEl, valorConvertido, convertTo)
}

button.addEventListener("click", cliquei)