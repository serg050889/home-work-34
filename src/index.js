import './scss/style.scss';
import logo from './assets/images/logo.png';

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo';
document.body.appendChild(img);

console.log('Проєкт працює!');