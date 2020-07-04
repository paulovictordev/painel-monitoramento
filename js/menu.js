const btnMenuOpen = document.querySelector('.btn-menu-open');
const btnMenuClose = document.querySelector('.btn-menu-close');
const menu = document.querySelector('.menu');

btnMenuOpen.addEventListener('click', () => {
  menu.classList.add('menu-open');
});

btnMenuClose.addEventListener('click', () => {
  menu.classList.remove('menu-open');
});