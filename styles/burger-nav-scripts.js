document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Відкриття та закриття меню по кліку на бургер
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burgerBtn.classList.toggle('open');
        
        // Забороняємо скрол сторінки при відкритому меню
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Логіка для посилань (зміна кольору та авто-закриття)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Виділяємо активне посилання
            navLinks.forEach(l => l.classList.remove('active-link'));
            link.classList.add('active-link');

            // Закриваємо меню через 300мс (щоб встигли побачити клік)
            setTimeout(() => {
                navMenu.classList.remove('active');
                burgerBtn.classList.remove('open');
                document.body.style.overflow = '';
            }, 300);
        });
    });
});