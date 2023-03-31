document.addEventListener('DOMContentLoaded', function() {
    var categoryButtons = document.querySelectorAll('.category-selection li, #rodapeCategorias a');
    var products = document.querySelectorAll('.product');
    var footerCategoryButtons = document.querySelectorAll('#rodapeCategorias a');

    showAllProducts();

    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var selectedCategory = this.getAttribute('data-category') || this.getAttribute('href').split('#')[1].toLowerCase();
            filterProducts(selectedCategory);
        });
    });

    footerCategoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            scrollToTop();
        });
    });

    var allButton = document.querySelector('[data-category="all"]');
    allButton.addEventListener('click', function() {
        showAllProducts();
    });

    function showAllProducts() {
        products.forEach(function(product) {
            product.classList.add('show');
        });
    }

    function filterProducts(category) {
        products.forEach(function(product) {
            if (product.getAttribute('data-category') === category) {
                product.classList.add('show');
            } else {
                product.classList.remove('show');
            }
        });
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});
