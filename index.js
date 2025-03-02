document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been sent.");
        document.querySelector("form").reset();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                event.preventDefault();
                alert("Please fill in all fields.");
            } else if (!validateEmail(email)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }
});

// Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
}
