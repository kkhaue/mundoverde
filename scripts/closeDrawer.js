document.addEventListener("DOMContentLoaded", () => {
    const menuToggler = document.getElementById("menu-toggler");
    const menuLinks = document.querySelectorAll(".all-links a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (menuToggler.checked) {
                menuToggler.checked = false; // Fecha o drawer
            }
        });
    });
});
