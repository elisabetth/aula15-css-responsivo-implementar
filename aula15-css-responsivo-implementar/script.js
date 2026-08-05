const imagemBanhoTosa = document.querySelector("#img-banho-tosa")
const tituloBanhoTosa = document.querySelector("#titulo-banho-tosa")
const paragrafoBanhoTosa = document.querySelector("#paragrafo-banho-tosa")

const paragrafoBanhoTosaOriginal = paragrafoBanhoTosa.textContent

tituloBanhoTosa.addEventListener("click", function(){
    paragrafoBanhoTosa.textContent = ""
})

imagemBanhoTosa.addEventListener("click", function(){
    paragrafoBanhoTosa.textContent =  paragrafoBanhoTosaOriginal
})
