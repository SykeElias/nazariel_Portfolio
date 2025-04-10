// script.js
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    navbar.classList.remove('active');
};


