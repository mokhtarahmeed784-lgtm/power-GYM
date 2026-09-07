// ========================================
// GET ELEMENTS
// ========================================

const searchIcon = document.getElementById("searchIcon");
const userIcon = document.getElementById("userIcon");
const cartIcon = document.getElementById("cartIcon");

const contactForm = document.querySelector(".contact-form");


// ========================================
// SMOOTH SCROLL
// ========================================

const links = document.querySelectorAll(".links a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const sectionId = this.getAttribute("href");

        const section = document.querySelector(sectionId);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// SEARCH ICON
// ========================================

searchIcon.addEventListener("click", function() {

    const search = prompt("What are you looking for?");

    if (search && search.trim() !== "") {

        alert("You searched for: " + search);

    }

});


// ========================================
// USER ICON
// ========================================

userIcon.addEventListener("click", function() {

    alert("Welcome to Fighter Gym!");

});


// ========================================
// SHOPPING CART
// ========================================

let cartCount = 0;

cartIcon.addEventListener("click", function() {

    cartCount++;

    alert("Your cart contains " + cartCount + " item(s).");

});


// ========================================
// CONTACT FORM
// ========================================

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector(
        '.contact-form input[type="text"]'
    ).value;

    const email = document.querySelector(
        '.contact-form input[type="email"]'
    ).value;

    const message = document.querySelector(
        ".contact-form textarea"
    ).value;


    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        alert("Please fill in all required fields.");

        return;
    }


    alert(
        "Thank you " + name +
        "! Your message has been sent successfully."
    );


    contactForm.reset();

});


// ========================================
// JOIN NOW BUTTONS
// ========================================

const joinButtons = document.querySelectorAll(
    ".join-btn, .price-btn"
);

joinButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Welcome to Fighter Gym! " +
            "Your membership journey starts now."
        );

    });

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const cards = document.querySelectorAll(
    ".program-card, .trainer-card, .price-card"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);


cards.forEach(function(card) {

    observer.observe(card);

});