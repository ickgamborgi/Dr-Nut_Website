console.log("JavaScript file is linked.");

const toggleButton = document.querySelector("#button")
const navbarLinks = document.querySelector(".links-header")
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})