"use strict";
const mobileicons = document.querySelector(".mobile-icons");
const menuheader = document.querySelector(".header");

const toggleNavbar = () => {
  menuheader.classList.toggle("show");
};

mobileicons.onclick = toggleNavbar;
