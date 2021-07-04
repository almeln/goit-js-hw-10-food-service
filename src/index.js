import './sass/main.scss';
import menu from './menu.json';
import { refs } from './js-utils/refs';
import eventsTemplate from './templates/menu-items.hbs';
import { onCheckboxChange } from './js-utils/theme-change';
import { onCurrentTheme } from './js-utils/theme-change';

refs.menu.innerHTML = eventsTemplate(menu);

onCurrentTheme();

refs.switcher.addEventListener('change', onCheckboxChange);