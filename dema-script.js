// Запрашиваем имя пользователя и добавляем приветствие
function showWelcomeMessage() {
    const userName = prompt("Введите ваше имя перед входом в DEMA:", "Посетитель");
    if (userName) {
        const welcomeElement = document.createElement('p');
        welcomeElement.style.textAlign = 'center';
        welcomeElement.style.color = '#ff66b2';
        welcomeElement.style.fontSize = '1.2em';
        welcomeElement.textContent = `Добро пожаловать в DEMA, ${userName}!`;
        
        // Вставляем приветствие после заголовка h1
        const title = document.getElementById('dema-title');
        title.insertAdjacentElement('afterend', welcomeElement);
    }
}
// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', showWelcomeMessage);

// Проверяем, согласен ли пользователь с условиями
const userAgreement = confirm("Вы согласны погрузиться в историю DEMA?");
if (!userAgreement) {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 50px; color: white; background-color: rgba(0,0,0,0.8); height: 100vh;">
            <h1>Вы отказались от входа в DEMA</h1>
            <p>Возвращайтесь, когда будете готовы.</p>
            <a href="page1.html" style="color: #ff66b2;">Вернуться на главную</a>
        </div>
    `;
} else {
    // Добавляем текущую дату в футер
    const footer = document.createElement('footer');
    footer.style.background = 'rgba(0,0,0,0.8)';
    footer.style.padding = '15px';
    footer.style.textAlign = 'center';
    footer.style.marginTop = '30px';
    footer.innerHTML = `
        <p>© COPYRIGHT ${new Date().getFullYear()} | Twenty One Pilots DEMA Universe</p>
        <p>Последнее посещение: ${new Date().toLocaleString()}</p>
    `;
    document.body.appendChild(footer);
    
    // Добавляем эффект при наведении на термины
    document.querySelectorAll('dt').forEach(dt => {
        dt.style.transition = 'all 0.3s ease';
        dt.addEventListener('mouseover', () => {
            dt.style.fontSize = '1.1em';
            dt.style.textShadow = '0 0 5px #ff66b2';
        });
        dt.addEventListener('mouseout', () => {
            dt.style.fontSize = '1em';
            dt.style.textShadow = 'none';
        });
    });
}