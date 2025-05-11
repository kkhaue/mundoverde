
document.addEventListener("DOMContentLoaded", () => {
    const chartBars = document.querySelectorAll(".chart-bar");
    const chartContainer = document.querySelector(".chart-container");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                chartBars.forEach(bar => {
                    bar.style.animationPlayState = "running";
                });
                observer.disconnect(); // Para evitar que a animação seja repetida
            }
        });
    }, { threshold: 0.5 }); // Ativa quando 50% do gráfico estiver visível

    observer.observe(chartContainer);
});
