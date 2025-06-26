const button = document.querySelector(".convert")

//cotação em 24/06/2025
const cotacoes = {
  real: 1,
  dollar: 5.51,
  euro: 6.41,
  libra: 7.51,
  bitcoin: 585455.06
}

function cliquei() {
  const value = document.querySelector("#value").value
  const valueFrom = document.querySelector("#valueFrom")
  const valueTo = document.querySelector("#valueTo")
  const convertFrom = document.querySelector("#convertFrom").value
  const coinFrom = document.querySelector("#coinFrom")
  const convertTo = document.querySelector("#convertTo").value
  const imgTo = document.querySelector("#imgTo")
  const coinTo = document.querySelector("#coinTo")
  const imgFrom = document.querySelector("#imgFrom")

  if (convertFrom === "real") {
    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value)
    imgFrom.src = "./assets/img/brasil.png"
    imgFrom.alt = "Bandeira Brasil"
    coinFrom.textContent = "Real Brasileiro"

    if (convertTo === "dollar") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD"
      }).format(value / cotacoes.dollar)
      imgTo.src = "./assets/img/estados-unidos.png"
      imgTo.alt = "Bandeira Estados Unidos"
      coinTo.textContent = "Dólar Americano"
    } else if (convertTo === "euro") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
      }).format(value / cotacoes.euro)
      imgTo.src = "./assets/img/euro.png"
      imgTo.alt = "Bandeira União Europeia"
      coinTo.textContent = "Euro"
    } else if (convertTo === "libra") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "GBP"
      }).format(value / cotacoes.libra)
      imgTo.src = "./assets/img/libra.png"
      imgTo.alt = "Bandeira Libra"
      coinTo.textContent = "Libra Esterlina"
    } else if (convertTo === "bitcoin") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BTC"
      }).format(value / cotacoes.bitcoin)
      imgTo.src = "./assets/img/bitcoin.png"
      imgTo.alt = "Bandeira Bitcoin"
      coinTo.textContent = "Bitcoin"
    } else if (convertTo === "real") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(value / cotacoes.real)
      imgTo.src = "./assets/img/brasil.png"
      imgTo.alt = "Bandeira Brasil"
      coinTo.textContent = "Real"
    }
  } else if (convertFrom === "dollar") {
    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "USD"
    }).format(value)
    imgFrom.src = "./assets/img/estados-unidos.png"
    imgFrom.alt = "Bandeira Estados Unidos"
    coinFrom.textContent = "Dólar Americano"

    if (convertTo === "dollar") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD"
      }).format(value)
      imgTo.src = "./assets/img/estados-unidos.png"
      imgTo.alt = "Bandeira Estados Unidos"
      coinTo.textContent = "Dólar Americano"
    } else if (convertTo === "euro") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
      }).format((value * cotacoes.dollar) / cotacoes.euro)
      imgTo.src = "./assets/img/euro.png"
      imgTo.alt = "Bandeira União Europeia"
      coinTo.textContent = "Euro"
    } else if (convertTo === "libra") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "GBP"
      }).format((value * cotacoes.dollar) / cotacoes.libra)
      imgTo.src = "./assets/img/libra.png"
      imgTo.alt = "Bandeira Libra"
      coinTo.textContent = "Libra Esterlina"
    } else if (convertTo === "bitcoin") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BTC"
      }).format((value * cotacoes.dollar) / cotacoes.bitcoin)
      imgTo.src = "./assets/img/bitcoin.png"
      imgTo.alt = "Bandeira Bitcoin"
      coinTo.textContent = "Bitcoin"
    } else if (convertTo === "real") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format((value * cotacoes.dollar) / cotacoes.real)
      imgTo.src = "./assets/img/brasil.png"
      imgTo.alt = "Bandeira Brasil"
      coinTo.textContent = "Real"
    }
  } else if (convertFrom === "euro") {
    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "EUR"
    }).format(value)
    imgFrom.src = "./assets/img/euro.png"
    imgFrom.alt = "Bandeira Euro"
    coinFrom.textContent = "Euro"

        if (convertTo === "dollar") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD"
      }).format((value * cotacoes.euro) / cotacoes.dollar)
      imgTo.src = "./assets/img/estados-unidos.png"
      imgTo.alt = "Bandeira Estados Unidos"
      coinTo.textContent = "Dólar Americano"
    } else if (convertTo === "euro") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
      }).format((value * cotacoes.euro) / cotacoes.euro)
      imgTo.src = "./assets/img/euro.png"
      imgTo.alt = "Bandeira União Europeia"
      coinTo.textContent = "Euro"
    } else if (convertTo === "libra") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "GBP"
      }).format((value * cotacoes.euro) / cotacoes.libra)
      imgTo.src = "./assets/img/libra.png"
      imgTo.alt = "Bandeira Libra"
      coinTo.textContent = "Libra Esterlina"
    } else if (convertTo === "bitcoin") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BTC"
      }).format((value * cotacoes.euro) / cotacoes.bitcoin)
      imgTo.src = "./assets/img/bitcoin.png"
      imgTo.alt = "Bandeira Bitcoin"
      coinTo.textContent = "Bitcoin"
    } else if (convertTo === "real") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format((value * cotacoes.euro) / cotacoes.real)
      imgTo.src = "./assets/img/brasil.png"
      imgTo.alt = "Bandeira Brasil"
      coinTo.textContent = "Real"
    }
  } else if (convertFrom === "libra") {
    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "GBP"
    }).format(value)
    imgFrom.src = "./assets/img/libra.png"
    imgFrom.alt = "Bandeira Libra"
    coinFrom.textContent = "Libra"

    if (convertTo === "dollar") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD"
      }).format((value * cotacoes.libra) / cotacoes.dollar)
      imgTo.src = "./assets/img/estados-unidos.png"
      imgTo.alt = "Bandeira Estados Unidos"
      coinTo.textContent = "Dólar Americano"
    } else if (convertTo === "euro") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
      }).format((value * cotacoes.libra) / cotacoes.euro)
      imgTo.src = "./assets/img/euro.png"
      imgTo.alt = "Bandeira União Europeia"
      coinTo.textContent = "Euro"
    } else if (convertTo === "libra") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "GBP"
      }).format((value * cotacoes.libra) / cotacoes.libra)
      imgTo.src = "./assets/img/libra.png"
      imgTo.alt = "Bandeira Libra"
      coinTo.textContent = "Libra Esterlina"
    } else if (convertTo === "bitcoin") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BTC"
      }).format((value * cotacoes.libra) / cotacoes.bitcoin)
      imgTo.src = "./assets/img/bitcoin.png"
      imgTo.alt = "Bandeira Bitcoin"
      coinTo.textContent = "Bitcoin"
    } else if (convertTo === "real") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format((value * cotacoes.libra) / cotacoes.real)
      imgTo.src = "./assets/img/brasil.png"
      imgTo.alt = "Bandeira Brasil"
      coinTo.textContent = "Real"
    }
  } else if (convertFrom === "bitcoin") {
    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC"
    }).format(value)
    imgFrom.src = "./assets/img/bitcoin.png"
    imgFrom.alt = "Bandeira Bitcoin"
    coinFrom.textContent = "Bitcoin"

    if (convertTo === "dollar") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD"
      }).format((value * cotacoes.bitcoin) / cotacoes.dollar)
      imgTo.src = "./assets/img/estados-unidos.png"
      imgTo.alt = "Bandeira Estados Unidos"
      coinTo.textContent = "Dólar Americano"
    } else if (convertTo === "euro") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
      }).format((value * cotacoes.bitcoin) / cotacoes.euro)
      imgTo.src = "./assets/img/euro.png"
      imgTo.alt = "Bandeira União Europeia"
      coinTo.textContent = "Euro"
    } else if (convertTo === "libra") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "GBP"
      }).format((value * cotacoes.bitcoin) / cotacoes.libra)
      imgTo.src = "./assets/img/libra.png"
      imgTo.alt = "Bandeira Libra"
      coinTo.textContent = "Libra Esterlina"
    } else if (convertTo === "bitcoin") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BTC"
      }).format((value * cotacoes.bitcoin) / cotacoes.bitcoin)
      imgTo.src = "./assets/img/bitcoin.png"
      imgTo.alt = "Bandeira Bitcoin"
      coinTo.textContent = "Bitcoin"
    } else if (convertTo === "real") {
      valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format((value * cotacoes.bitcoin) / cotacoes.real)
      imgTo.src = "./assets/img/brasil.png"
      imgTo.alt = "Bandeira Brasil"
      coinTo.textContent = "Real"
    }
  }

}

button.addEventListener("click", cliquei)