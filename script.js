function changeTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}

function changeLanguage(language) {
    if (language === 'ru') {
        document.getElementById('about-title').textContent = 'О Dreadskull';
        document.getElementById('about-text').textContent = 'Привет! Добро пожаловать на мой официальный сайт. Я Dreadskull, официальный исполнитель в жанре Phonk и Funk. Здесь вы можете ознакомиться с моим творчеством и узнать больше о том, как я создаю свою музыку. Если у вас есть желание сотрудничать и создать нечто особенное, не стесняйтесь связаться со мной. Я всегда открыт для новых идей и совместных проектов!';
        document.getElementById('about-info').textContent = 'Этот сайт – это не просто место для моего творчества, но и пространство для возможных коллабораций. Если вы хотите работать вместе, свяжитесь с менеджером!';
        document.getElementById('collab-title').textContent = 'Правила для сотрудничества';
        document.getElementById('collab-text').textContent = 'Если вы хотите сотрудничать с Dreadskull, свяжитесь с менеджером. Все условия будут уточнены менеджером:';
        document.getElementById('collab-info').textContent = 'Все условия будут проверены менеджером.';
        document.getElementById('manager-contact').innerHTML = 'Контакт с менеджером: <a href="https://t.me/exarch_mus_manager" target="_blank">@exarch_mus_manager</a>';
    } else if (language === 'uk') {
        document.getElementById('about-title').textContent = 'Про Dreadskull';
        document.getElementById('about-text').textContent = 'Привіт! Ласкаво просимо на мій офіційний сайт. Я Dreadskull, офіційний виконавець у жанрі Phonk і Funk. Тут ви можете ознайомитися з моєю творчістю та дізнатися більше про те, як я створюю свою музику. Якщо ви хочете співпрацювати і створити щось особливе, не соромтеся звертатися до мене. Я завжди відкритий для нових ідей і спільних проектів!';
        document.getElementById('about-info').textContent = 'Цей сайт - це не лише місце для моєї творчості, але й простір для можливих колаборацій. Якщо ви хочете працювати разом, звертайтеся до менеджера!';
        document.getElementById('collab-title').textContent = 'Правила для співпраці';
        document.getElementById('collab-text').textContent = 'Якщо ви хочете співпрацювати з Dreadskull, звертайтеся до менеджера. Усі умови будуть уточнені менеджером:';
        document.getElementById('collab-info').textContent = 'Усі умови будуть перевірені менеджером.';
        document.getElementById('manager-contact').innerHTML = 'Контакт з менеджером: <a href="https://t.me/exarch_mus_manager" target="_blank">@exarch_mus_manager</a>';
    }
}

// Загружаем вкладку по умолчанию
changeTab('about');
