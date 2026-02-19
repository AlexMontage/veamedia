document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        burgerBtn.classList.toggle('open');
    };

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('open');
        });
    });

    // Закриття меню при кліку в будь-якому місці екрана
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('open');
        }
    });
});