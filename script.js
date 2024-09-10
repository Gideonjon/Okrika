const hamburger = document.querySelector('.hamburger');
const navBar =  document.querySelector('#navbar');
const navLinks = document.querySelector('#nav-links');
const navlink = document.querySelector('#nav-links li');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navBar.classList.toggle('open');
  navLinks.classList.toggle('open');
  navLink.classList.toggle('open');
});

console.log(navLinks);