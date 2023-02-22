document.addEventListener("DOMContentLoaded", () => {

    let burger = document.getElementById('burger');
    let mobileMenu = document.getElementById('mobile-menu');

    // Меню бургер
    burger.addEventListener('click', () => {
        if (burger.classList.contains('burger-active')) {
            mobileMenu.style.display = "none";
            burger.classList.remove('burger-active');
        } else {
            mobileMenu.style.display = "flex";
            burger.classList.add('burger-active');
        }
    });

    // AOS initialization
    AOS.init();

});
