document.addEventListener("DOMContentLoaded", () => {
    //Hamburger Menu for Mobile
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    //Toggle mobile navigation menu
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    //Smooth Scroll to Sections
    const navLinks = document.querySelectorAll(".nav-menu a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            
            //Smooth scrolling to the target section
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    //Form Validation
    const form = document.querySelector(".form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("textarea");
    
    form.addEventListener("submit", function(event) {
        let valid = true;
        
        //Validate Name
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            valid = false;
        }
        
        //Validate Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            valid = false;
        }
        
        //Validate Message
        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            valid = false;
        }
        
        if (!valid) {
            event.preventDefault(); //Prevent form if validation false
        }
    });

    //Hero Section Button Interaction
    const heroButton = document.querySelector(".hero-button");
    
    if (heroButton) {
        heroButton.addEventListener("click", () => {
            const bookingSection = document.getElementById("hotels");
            bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
});
