const button = document.querySelector(".burgerIcon")
const list = document.querySelector(".navigationList")
const icon = document.querySelector(".menuIcon")
const logo = document.querySelector(".topLogo")





button.addEventListener("click", ()=>{
    if(list.ariaExpanded=="false"){
        list.classList.add("opened")
        list.classList.remove("closed")
        icon.src= "images/icon-close.svg"
        button.style.position="fixed"
        button.style.right="10%"
        logo.style.position="fixed"
        list.setAttribute("aria-expanded", "true")
    } else if(list.ariaExpanded=="true"){
        list.classList.add("closed")
        list.classList.remove("opened")
        icon.src= "images/icon-hamburger.svg"
        button.style.position="absolute"
        button.style.right="10%"
        logo.style.position="relative"
        list.setAttribute("aria-expanded", "false")
    }

})