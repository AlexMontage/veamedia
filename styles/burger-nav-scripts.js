document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Функція відкриття/закриття
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        burgerBtn.classList.toggle('open');
    };

    // Клік по бургеру
    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Закриваємо меню при натисканні на будь-яке посилання
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('open');
        });
    });

    // Закриваємо меню при кліку в будь-якому місці екрана за межами меню
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('open');
        }
    });
});