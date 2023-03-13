const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 126891.12

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    
    /* innerHTML: permite acessar e modificar o conteúdo HTML dentro de um elemento específico */

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if(select.value === "US$ Dólar americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if(select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if(select.value === "Bitcoin") {
        currencyValueText.innerHTML = (inputReais / bitcoin).toFixed(2);
      }
};

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")
    

    if(select.value == 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./img/EUA.jpg"
    }

    if(select.value == '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/Euro.jpg"
    }

    if(select.value == 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/Bitcoin.jpg"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)