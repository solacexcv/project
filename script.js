document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.menu-links');

    menuIcon.addEventListener('click', function () {
        menuLinks.classList.toggle('show');
    });
});