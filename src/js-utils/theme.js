import { refs } from './refs';
import { Theme } from './refs';

export function onCheckboxChange(event) {
    const checkedCheckbox = event.currentTarget.checked;

    if(checkedCheckbox === true) {
        onChecked();
    } else {
        onUsual();
    }
}

function onChecked() {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    refs.switcher.checked = true;
}

function onUsual() {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    refs.switcher.checked = false;
}

function onCurrentTheme() {
    const currentTheme = localStorage.getItem('theme');

    if(currentTheme === Theme.LIGHT || currentTheme === null) {
        onUsual();
    } else {
        onChecked();
    }
}