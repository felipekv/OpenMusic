import { filterCardsByCategory, filterCardsByValue } from "./filter.js"
import { renderCards } from "./render.js"

export const categoryFilter = (productsData, categoriesData) => {
    const filterButtons = document.querySelectorAll(".filter-button")

    filterButtons.forEach(button => button.addEventListener("click", (event) => {
        if(!event.target.classList.contains("filter-button--active")){
            const buttonActived = document.querySelector(".filter-button--active")
            buttonActived.classList.remove("filter-button--active")
            event.target.classList.add("filter-button--active")

            let filterName = event.target.innerText

            renderCards(filterCardsByCategory(productsData, categoriesData, filterName))

        }

    }))
        

}

export const rangeFilter = (productsData, categoriesData) => {
    const rangeInput = document.querySelector("#range")
    const priceValue = document.querySelector(".price-filter__max-price")

    rangeInput.addEventListener("input", event => {

        priceValue.innerText = `Até R$ ${event.target.value},00`
    
        renderCards(filterCardsByValue(productsData, categoriesData, event.target.value))
    })
}