/* Desenvolva sua lógica aqui ... */
export const themeMode = () => {
    const themeButton = document.querySelector(".color-mode__button")
    const colorModeImg = document.querySelector(".color-mode__img")
    const html = document.querySelector("html")

    const modePreference = JSON.parse(localStorage.getItem("dark-mode"))

    if(modePreference) {
        colorModeImg.src = "./src/assets/img/sun.svg"
        colorModeImg.alt = "Light Mode"
        html.classList.add("dark-mode")
    } else {
        colorModeImg.src = "./src/assets/img/moon.svg"
        colorModeImg.alt = "Dark Mode"
        html.classList.remove("dark-mode")
    }

    themeButton.addEventListener("click", () => {
        html.classList.toggle("dark-mode")
        if(html.classList.contains("dark-mode")) {
        colorModeImg.src = "./src/assets/img/sun.svg"
        colorModeImg.alt = "Light Mode"
        localStorage.setItem("dark-mode", true)
        } else {
        colorModeImg.src = "./src/assets/img/moon.svg"
        colorModeImg.alt = "Dark Mode"
        localStorage.setItem("dark-mode", false)
        }
    })
}