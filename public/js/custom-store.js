document.addEventListener("DOMContentLoaded", function () {
    var categoryButtons = document.querySelectorAll("#listaCategoriasProdutos li");
    var products = document.querySelectorAll(".product");
  
    showAllProducts();
  
    categoryButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        var selectedCategory = this.getAttribute("data-category");
        filterProducts(selectedCategory);
      });
    });
  
    function showAllProducts() {
      products.forEach(function (product) {
        product.style.display = "block";
      });
    }
  
    function filterProducts(category) {
      if (category === "all") {
        showAllProducts();
        return;
      }
  
      products.forEach(function (product) {
        if (product.getAttribute("data-category") === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }
  });
  