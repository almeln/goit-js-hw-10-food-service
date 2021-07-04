import menu from './menu.json';
import eventsTemplate from './templates/menu-items.hbs';

// import './sass/main.scss';

const mainMenu = document.querySelector('.js-menu');
mainMenu.innerHTML = eventsTemplate(menu);

