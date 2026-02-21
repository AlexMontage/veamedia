// Ця функція додає клас, який робить сайт видимим
function showPage() {
    document.body.classList.add('loaded');
}

// 1. Спрацьовує, коли завантажилися всі картинки та стилі
window.addEventListener('load', showPage);

// 2. Спрацьовує, якщо ви натиснули кнопку "Назад"
window.addEventListener('pageshow', (event) => {
    if (event.persisted) showPage();
});

// 3. (Запобіжник) Якщо через 3 секунди сторінка все ще біла — показуємо примусово
setTimeout(() => {
    if (!document.body.classList.contains('loaded')) {
        showPage();
        console.warn("Сайт показано примусово (load event затримався)");
    }
}, 3000);

// Плавний вихід при натисканні на посилання (твій код без змін)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hostname !== window.location.hostname || link.hash || link.target === "_blank") return;

        e.preventDefault();
        let target = link.href;
        document.body.classList.remove('loaded');

        setTimeout(() => {
            window.location.href = target;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо поточну адресу сторінки (тільки шлях, наприклад /works.html)
    const currentPath = window.location.pathname.split("/").pop();

    // Знаходимо всі посилання в навігації
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Отримуємо назву файлу з атрибута href (наприклад index.html)
        const linkPath = link.getAttribute('href');

        // Якщо шлях збігається — додаємо клас .active
        if (currentPath === linkPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add('active');
        }
    });
});