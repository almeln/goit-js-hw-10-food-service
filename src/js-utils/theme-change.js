import { refs } from './refs';
import { Theme } from './theme';

// export function onCheckboxChange(event) {
//     const checkedCheckbox = event.currentTarget.checked;

//     if(checkedCheckbox) {
//         onChecked();
//     } else {
//         onUsual();
//     }
// }

export function onCheckboxChange(event) {
    const checkedCheckbox = event.currentTarget.checked;

    if(checkedCheckbox) {
        themeSwitcher(Theme.LIGHT, Theme.DARK);
    } else {
        themeSwitcher(Theme.DARK, Theme.LIGHT);
    }
}

function themeSwitcher(themeToRemove, themeToAdd) {
    refs.body.classList.remove(themeToRemove);
    refs.body.classList.add(themeToAdd);
    localStorage.setItem('theme', themeToAdd);

    if (themeToAdd === Theme.LIGHT) {
        refs.switcher.checked = false;
    } else {
        refs.switcher.checked = true;
    }
}

// function onChecked() {
//     refs.body.classList.remove(Theme.LIGHT);
//     refs.body.classList.add(Theme.DARK);
//     localStorage.setItem('theme', Theme.DARK);
//     refs.switcher.checked = true;
// }

// function onUsual() {
//     refs.body.classList.remove(Theme.DARK);
//     refs.body.classList.add(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.LIGHT);
//     refs.switcher.checked = false;
// }

// export function onCurrentTheme() {
//     const currentTheme = localStorage.getItem('theme');

//     if(currentTheme === Theme.LIGHT || currentTheme === null) {
//         onUsual();
//     } else {
//         onChecked();
//     }
// }

export function onCurrentTheme() {
    const currentTheme = localStorage.getItem('theme');

    if(currentTheme === Theme.LIGHT || currentTheme === null) {
        themeSwitcher(Theme.DARK, Theme.LIGHT);;
    } else {
        themeSwitcher(Theme.LIGHT, Theme.DARK);
    }
}