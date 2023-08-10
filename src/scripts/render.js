export const firstRender = (productsData, categoriesData) => {
    const cardsList = document.querySelector(".cards__list")
    const categoryButton = document.querySelector(".filter-button--active")
    const rangeInput = document.querySelector("#range")
    const priceValue = document.querySelector(".price-filter__max-price ")

    const arrTemp = productsData.filter(data => data.price <= Number(rangeInput.value))

    if(categoryButton.innerText.toLowerCase() === 'todos'){

        if(arrTemp.length < 1){

        cardsList.innerHTML = ''

        }else if(arrTemp.length === 1){

        cardsList.innerHTML = ''
        arrTemp.forEach(product => cardsList.appendChild(createCards(product)))

        }else{

        cardsList.innerHTML = ''
        arrTemp.forEach(product => cardsList.appendChild(createCards(product)))
        }

    }else{

        let index = categoriesData.indexOf(categoryButton.innerText)

        const arrCards = arrTemp.filter(data => data.category === index)

        if(productsData.length < 1){

            cardsList.innerHTML = ''

            }else if(productsData.length === 1){

            cardsList.innerHTML = ''
            arrCards.forEach(card => cardsList.appendChild(createCards(card)))

            }else{

            cardsList.innerHTML = ''
            arrCards.forEach(card => cardsList.appendChild(createCards(card)))

            }
    }

    priceValue.innerText = `Até R$ ${rangeInput.value},00`

}

export const createCards = (productsData) =>{

    const cardsUnit = document.createElement("li")

    const cardsFigure = document.createElement("figure")
    const figureImg = document.createElement("img")
    const figureDetails = document.createElement("figcaption")
    const authorYearContainer = document.createElement("div")
    const author = document.createElement("p")
    const year = document.createElement("p")

    const albumName = document.createElement("h2")

    const cardPrice = document.createElement("div")
    const price = document.createElement("p")
    const sellButton = document.createElement("button")

    figureImg.src = productsData.img
    author.innerText = productsData.band
    year.innerText = productsData.year
    albumName.innerText = productsData.title
    price.innerText = productsData.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    sellButton.innerText = 'Comprar'

    cardsUnit.classList.add("cards__unit")
    cardsFigure.classList.add("cards__figure")
    figureImg.classList.add("figure__img")
    figureDetails.classList.add("figure__details")
    authorYearContainer.classList.add("author-year__container")
    author.classList.add("author")
    year.classList.add("year")
    albumName.classList.add("album-name")
    cardPrice.classList.add("card-price")
    price.classList.add("price")
    sellButton.classList.add("sell-button")

    authorYearContainer.append(author, year)
    cardPrice.append(price, sellButton)

    figureDetails.append(authorYearContainer, albumName, cardPrice)
    
    cardsFigure.append(figureImg, figureDetails)

    cardsUnit.appendChild(cardsFigure)

    return cardsUnit
}

export const renderCards = (productsData) => {
    const cardsList = document.querySelector(".cards__list")

    if(productsData.length < 1){

        cardsList.innerHTML = ''

    }else if(productsData.length === 1){

        cardsList.innerHTML = ''
        productsData.forEach(product => cardsList.appendChild(createCards(product)))

    }else{

        cardsList.innerHTML = ''
        productsData.forEach(product => cardsList.appendChild(createCards(product)))
        
    }
}