document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Функція перемикання
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        burgerBtn.classList.toggle('open');
    };

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Закриваємо при кліку на посилання
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('open');
        });
    });

    // Закриваємо, якщо клікнули десь поруч
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('open');
        }
    });
});