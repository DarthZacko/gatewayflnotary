const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
