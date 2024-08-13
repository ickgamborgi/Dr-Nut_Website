console.log("JavaScript file is linked."); // this will ensure my .js file is connected

// VARIABLES

// Header
const toggleButton = document.querySelector("#button")
const navbarLinks = document.querySelector(".links-header")
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Suscription Form
const form = document.getElementById('newsletterForm');
const popup = document.getElementById('popup');
const popupCloseBtn = document.querySelector('.close-btn');

// Promotion Lightbox
const promotions = document.querySelectorAll(".promotion-button");
const lightbox = document.querySelector("#lightbox");
const lbContent = document.querySelector ('.lb-content');
const lbImage = document.querySelector('.lb_image');
const lbHeading = document.querySelector('.lb_heading');
const lbProductPromo = document.querySelector('.lb_product-promo');
const lbProductCode = document.querySelector('.lb_product-code');
const lbCloseBtn = document.querySelector('.lb_close-btn');

// Promotions and Products Data
let products = [
    {
        "name": "Original Flavor",
        "text": "Use our promo code below and get 50% off your first purchase with us!",
        "code": "#DrNutOriginal50%",
        "image": "./images/can_1.png",
        "backgroundColor": "#913236"
    },
    {
        "name": "Chocolate Flavor",
        "text": "Use this promo code in here to get an extra 6 pack of Dr. Nut chocolate in your first purchase!",
        "code": "#6ChocolateLover",
        "image": "./images/can_2.png",
        "backgroundColor": "#533234"
    },
    {
        "name": "Pistachio Flavor",
        "text": "With this promo, when you buy two cans of any Dr. Nut flavor, you get a pistachio can for free!",
        "code": "#IAmPistachio10",
        "image": "./images/can_3.png",
        "backgroundColor": "#4F5620"
    }
]


// FUNCTIONS


// Subscribe Popup Confirmation
form.addEventListener('submit', function(event) {
    console.log("User submitted information on " + this.id) // console log it out
    event.preventDefault(); // prevent default behavior from form
    popup.style.display = 'flex'; // show pop-up
    form.reset(); // reset the form
});

popupCloseBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    console.log("User closed subscription confirmation");
}); // when user clicks on close button

window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
        console.log("User closed subscription confirmation");
    }
}); // when user clicks outside the popup to close


// Lightbox
function openLightbox() {
    const index = this.getAttribute('data-index');
    const promotion = products[index];
    
    console.log("User clicked on promotion " + promotion.name);
    console.log("Code generated for user: " + promotion.code);

    lbImage.src = promotion.image; // change image source of the promotion
    lbHeading.textContent = promotion.name; // change name of promotin
    lbProductPromo.textContent = promotion.text; // change text
    lbProductCode.textContent = promotion.code; // change code

    lbHeading.style.color = promotion.backgroundColor;
    lbProductPromo.style.color = promotion.backgroundColor;
    lbProductCode.style.backgroundColor = promotion.backgroundColor; // change colors

    lightbox.style.display = 'inline'; // display lightbox
}

lbCloseBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
    console.log("User closed promotion lightbox");
}); // user clicks on close button

window.addEventListener('click', function(event) {
    if (event.target == lightbox) {
        lightbox.style.display = 'none';
        console.log("User closed promotion lightbox");
    }
}); // user clicks outside the lightbox to close

promotions.forEach(promotion => promotion.addEventListener("click", openLightbox)); // for each loop