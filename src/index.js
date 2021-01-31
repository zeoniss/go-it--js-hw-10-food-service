import './styles.css';

// Templating

import menu from './menu.json';

import template from './gallery-items.hbs';

const markup = template(menu);

const container = document.querySelector('.js-menu');

container.innerHTML = markup;

// Theme-adding

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const existingTheme = localStorage.getItem('Theme');
const parsedExistingTheme = JSON.parse(existingTheme);

if (existingTheme) {
    document.body.classList.add(parsedExistingTheme);
}

const refs = {
    switcher: document.querySelector('#theme-switch-toggle'),
};

if (existingTheme === JSON.stringify(Theme.DARK)) {
    refs.switcher.checked = true;
}

refs.switcher.addEventListener('change', changeTheme);

function changeTheme(event) {
    if (event.target.checked) {
        document.body.classList.remove(existingTheme);
        document.body.classList.add('dark-theme');
        localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
    } else {
        document.body.classList.remove(existingTheme);
        document.body.classList.remove('dark-theme');
        localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
    }
}