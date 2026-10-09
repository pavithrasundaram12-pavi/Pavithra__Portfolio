document.addEventListener("DOMContentLoaded", function () {
    // Display the current year in the footer
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    console.log("Pavithra's portfolio is ready!");
});