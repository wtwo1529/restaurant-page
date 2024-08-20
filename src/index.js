import {default as createMenu} from "./menu";
import {default as createAboutUs} from "./aboutUs";

import img1 from './img-slideshow1.jpg';
import img2 from './img-slideshow2.jpg';
import img3 from './img-slideshow3.jpg';
import img4 from './img-slideshow4.jpg';
import img5 from './img-slideshow5.jpg';

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
    document.querySelector('#menu-btn').addEventListener("click", () => createMenu());
    document.querySelector('#about-btn').addEventListener("click", () => createAboutUs());
    
    changeImg(i);
};