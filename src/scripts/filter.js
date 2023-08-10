export const filterCardsByCategory = (productsData, categoriesData, filter) => {
    const inputValue = document.querySelector("#range")

    const arrTemp = productsData.filter(data => data.price <= Number(inputValue.value))


    let index = categoriesData.indexOf(filter)

    if(filter.toLowerCase() === 'todos'){
        return arrTemp
    }else{
        
        return arrTemp.filter(data => data.category === index)
    }

    
}

export const filterCardsByValue = (productsData, categoriesData, value) => {
    const buttonActived = document.querySelector(".filter-button--active")
    let index = categoriesData.indexOf(buttonActived.innerText)
 
    if(buttonActived.innerText.toLowerCase() === 'todos'){

        return productsData.filter(data => data.price <= Number(value))
    }else{
        const arrTemp = productsData.filter(data => data.category === index)
    
        return arrTemp.filter(data => data.price <= Number(value))

    }

}