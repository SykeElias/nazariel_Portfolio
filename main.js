// script.js
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    navbar.classList.remove('active');
};


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("confirmationModal");
    const closeModal = document.getElementById("closeModal");

    // Formular absenden
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
            });

            if (response.ok) {
                modal.style.display = "block"; // Modal anzeigen
                form.reset(); // Formular zurücksetzen
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    });

    // Modal schließen
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Modal nach 3 Sekunden automatisch schließen (optional)
    setTimeout(() => {
        modal.style.display = "none";
    }, 3000);
});