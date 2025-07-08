import './sass/style.scss';
import logo from './assets/img/logo.jpg';

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo';
document.body.appendChild(img);

console.log('Проєкт працює!');