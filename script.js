// Мобильное меню (бургер)
const burger = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('active');
    // анимация иконки бургера
    const spans = burger.querySelectorAll('span');
    if (burger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Закрыть меню при клике на ссылку
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            const spans = burger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Кнопка "Заказать онлайн" – имитация формы
const orderBtn = document.getElementById('orderBtn');
orderBtn?.addEventListener('click', () => {
    alert('✨ Спасибо за интерес! Свяжитесь с нами по телефону +7 (812) 123-45-67 или напишите в форму обратной связи.');
});

// Кнопка "Как пройти" – открывает карту в Google Maps (пример)
const mapBtn = document.getElementById('mapBtn');
mapBtn?.addEventListener('click', () => {
    window.open('https://maps.google.com/?q=Санкт-Петербург,+Пекарная+15', '_blank');
});

// Обработка формы обратной связи
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = feedbackForm.querySelector('input[placeholder="Ваше имя"]').value.trim();
    if (name) {
        alert(`${name}, спасибо за отзыв! Мы ответим вам в ближайшее время.`);
        feedbackForm.reset();
    } else {
        alert('Пожалуйста, представьтесь :)');
    }
});

// Плавный скролл для всех якорных ссылок (дополнительно)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Эффект при скролле – меню меняет прозрачность (необязательно)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#fffaf5cc';
    } else {
        header.style.backgroundColor = '#fffaf5';
    }
});