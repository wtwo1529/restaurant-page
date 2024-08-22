import {default as createMenu} from "./menu";
import {default as createAboutUs} from "./aboutUs";
import {default as createHomePage} from "./homepage";

import './style.css';

import logo from './components/homepage/logo-1.png'
import orderNowPhoto from './components/homepage/order_now.png';

let i = 0;
window.onload = () => {
    document.querySelector('#menu-btn').addEventListener("click", () => {
        document.querySelector('.menu-content').classList.add('show');
    });
    document.querySelector('#about-btn').addEventListener("click", () => createAboutUs());
    let orderBtn = document.querySelector('#order-now');
    orderBtn.innerHTML = '<img id="order-now-photo">';
    document.querySelector('#order-now-photo').setAttribute('src', orderNowPhoto);
    orderBtn.addEventListener('click', () => {
        window.location = 'https://www.mcdonaldsapps.com/en-HK/?appUrl=gmalite://gmalite-marketpicker'
    });

    let homepageLogo = document.querySelector('#logo');
    homepageLogo.innerHTML = '<img id="logo-photo">';
    document.querySelector('#logo-photo').setAttribute('src', logo);

    homepageLogo.addEventListener('click', () => {
        createHomePage();
    })

    createHomePage();
};

window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
      var dropdowns = document.getElementsByClassName("menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }}