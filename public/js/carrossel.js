document.querySelector(".vejaMais").addEventListener("click", function() {
    const carrosselContainer = document.querySelector(".carrossel-container");
    carrosselContainer.style.display = "flex";
});

document.querySelector(".carrossel-container").addEventListener("click", function() {
    const carrosselContainer = document.querySelector(".carrossel-container");
    carrosselContainer.style.display = "none";
});
