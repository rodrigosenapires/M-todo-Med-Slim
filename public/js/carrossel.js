const vejaMais = document.querySelector(".vejaMais");
const carrosselContainer = document.querySelector(".carrossel-container");
const carrossel = document.querySelector(".carrossel");
const carrosselItems = document.querySelectorAll(".carrossel-item");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const fecharCarrossel = document.querySelector(".fechar-carrossel");

let currentSlide = 0;

function showSlide(slideIndex) {
    carrosselItems.forEach(item => {
        item.style.display = "none";
    });
    carrosselItems[slideIndex].style.display = "block";
}

vejaMais.addEventListener("click", () => {
    carrosselContainer.style.display = "flex";
    showSlide(currentSlide);
});

arrowLeft.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = carrosselItems.length - 1;
    }
    showSlide(currentSlide);
});

arrowRight.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= carrosselItems.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

fecharCarrossel.addEventListener("click", () => {
    carrosselContainer.style.display = "none";
});
