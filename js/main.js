console.log("JavaScript file is linked."); // this will ensure my .js file is connected

// VARIABLES
const toggleButton = document.querySelector("#button")
const navbarLinks = document.querySelector(".links-header")
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
const form = document.getElementById('newsletterForm');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// FUNCTIONS
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default behavior from form
    popup.style.display = 'flex'; // show pop-up
    form.reset(); // reset the form
});

// EVENT LISTENERS
closeBtn.addEventListener('click', function() {
    // Hide the pop-up
    popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});