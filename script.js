document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.menu-links');

    menuIcon.addEventListener('click', function () {
        if (menuLinks.classList.contains('show')) {
            menuLinks.style.maxHeight = '0'; // Close with animation
        } else {
            menuLinks.style.maxHeight = menuLinks.scrollHeight + 'px'; // Open with animation
        }
        menuLinks.classList.toggle('show');
    });
});
