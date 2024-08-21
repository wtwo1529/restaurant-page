import {default as createMenu} from "./menu";
import {default as createAboutUs} from "./aboutUs";
import {default as createHomePage} from "./homepage";

import './style.css';

import img1 from './components/homepage/img-slideshow1.jpg';
import img2 from './components/homepage/img-slideshow2.jpg';
import img3 from './components/homepage/img-slideshow3.jpg';
import img4 from './components/homepage/img-slideshow4.jpg';
import img5 from './components/homepage/img-slideshow5.jpg';

import logo from './components/homepage/logo-1.png'
import orderNowPhoto from './components/homepage/order_now.png';


function changeImg(i) {
    let images = [img1, img2, img3, img4, img5];
    let time = 3000;
    
    const headerImg = document.querySelector('#header-img');
    if (headerImg) {
        headerImg.setAttribute("src", images[i]);
        i = (i+1) % images.length;
        setTimeout(() => changeImg(i), time);
    }
}

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
    changeImg(i);
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