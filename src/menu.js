import fullMenu from './components/menu/fullMenu.png';
import burgerImg from './components/menu/burger.png';
import breakfastImg from './components/menu/breakfast.png';
import valuePicksImg from './components/menu/value-picks.png';
import snacksSidesImg from './components/menu/snacks-and-sides.png';
import saladsImg from './components/menu/salads.png';
import dessertsImg from './components/menu/desserts.png';
import beveragesImg from './components/menu/beverages.png';
import mccafeImg from './components/menu/mccafe.png';
import signatureImg from './components/menu/signature.png';
import happyMealImg from './components/menu/happy-meal.png';
import extraValueImg from './components/menu/extra-value-meals.png';
import extraValueBreakfastsImg from './components/menu/extra-value-breakfasts.png';

import './menu.css';

function createMenu() {
    document.querySelector('.header-img-container').innerHTML = '';
    let contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';

    let body = document.createElement('div');
    body.id = 'body';

    let sideBar = document.createElement('div');
    sideBar.id = 'sidebar';

    let currentPage = document.createElement('a');
    currentPage.classList.add('sidebar-module')
    currentPage.id = 'current-page';
    let currentPageImg = document.createElement('img');
    currentPageImg.setAttribute('src', fullMenu);
    currentPageImg.classList.add('sidebar-icon')
    let currentPageText = document.createElement('p');
    currentPageText.innerText = 'View Full Menu';
    currentPageText.classList.add('sidebar-text')

    currentPage.appendChild(currentPageImg);
    currentPage.appendChild(currentPageText);

    sideBar.appendChild(currentPage);

    let otherFood = document.createElement('div');
    otherFood.id = 'foodbar';
    sideBar.appendChild(otherFood);

    let burgers = document.createElement('div');
    burgers.classList.add('sidebar-module');

    let burgersImg = document.createElement('img');
    burgersImg.setAttribute('src', burgerImg);
    burgersImg.classList.add('sidebar-icon');

    let burgersText = document.createElement('p');
    burgersText.innerText = 'Burgers';
    
    burgersText.classList.add('sidebar-text');

    burgers.appendChild(burgersImg);
    burgers.appendChild(burgersText);

    otherFood.appendChild(burgers);

    let breakfast = document.createElement('div');
    breakfast.classList.add('sidebar-module');

    let breakfastIcon = document.createElement('img');
    breakfastIcon.setAttribute('src', breakfastImg);
    breakfastIcon.classList.add('sidebar-icon');

    let breakfastText = document.createElement('p');
    breakfastText.innerText = 'Breakfast Platter and Twisty Pasta';
    
    breakfastText.classList.add('sidebar-text');

    breakfast.appendChild(breakfastIcon);
    breakfast.appendChild(breakfastText);

    otherFood.appendChild(breakfast);

    let valuePicks = document.createElement('div');
    valuePicks.classList.add('sidebar-module');

    let valuePicksIcon = document.createElement('img');
    valuePicksIcon.setAttribute('src', valuePicksImg);
    valuePicksIcon.classList.add('sidebar-icon');

    let valuePicksText = document.createElement('p');
    valuePicksText.innerText = 'Value Picks';
    
    valuePicksText.classList.add('sidebar-text');

    valuePicks.appendChild(valuePicksIcon);
    valuePicks.appendChild(valuePicksText);

    otherFood.appendChild(valuePicks);

    let snacksSides = document.createElement('div');
    snacksSides.classList.add('sidebar-module');

    let snacksSidesIcon = document.createElement('img');
    snacksSidesIcon.setAttribute('src', snacksSidesImg);
    snacksSidesIcon.classList.add('sidebar-icon');

    let snacksSidesText = document.createElement('p');
    snacksSidesText.innerText = 'Snacks and Sides';
    
    snacksSidesText.classList.add('sidebar-text');

    snacksSides.appendChild(snacksSidesIcon);
    snacksSides.appendChild(snacksSidesText);

    otherFood.appendChild(snacksSides);

    let salads = document.createElement('div');
    salads.classList.add('sidebar-module');

    let saladsIcon = document.createElement('img');
    saladsIcon.setAttribute('src', saladsImg);
    saladsIcon.classList.add('sidebar-icon');

    let saladsText = document.createElement('p');
    saladsText.innerText = 'Salads';
    
    saladsText.classList.add('sidebar-text');

    salads.appendChild(saladsIcon);
    salads.appendChild(saladsText);

    otherFood.appendChild(salads);

    let desserts = document.createElement('div');
    desserts.classList.add('sidebar-module');

    let dessertsIcon = document.createElement('img');
    dessertsIcon.setAttribute('src', dessertsImg);
    dessertsIcon.classList.add('sidebar-icon');

    let dessertsText = document.createElement('p');
    dessertsText.innerText = 'Desserts';
    
    dessertsText.classList.add('sidebar-text');

    desserts.appendChild(dessertsIcon);
    desserts.appendChild(dessertsText);

    otherFood.appendChild(desserts);

    let beverages = document.createElement('div');
    beverages.classList.add('sidebar-module');

    let beveragesIcon = document.createElement('img');
    beveragesIcon.setAttribute('src', beveragesImg);
    beveragesIcon.classList.add('sidebar-icon');

    let beveragesText = document.createElement('p');
    beveragesText.innerText = 'Beverages';
    
    beveragesText.classList.add('sidebar-text');

    beverages.appendChild(beveragesIcon);
    beverages.appendChild(beveragesText);

    otherFood.appendChild(beverages);

    let mccafe = document.createElement('div');
    mccafe.classList.add('sidebar-module');

    let mccafeIcon = document.createElement('img');
    mccafeIcon.setAttribute('src', mccafeImg);
    mccafeIcon.classList.add('sidebar-icon');

    let mccafeText = document.createElement('p');
    mccafeText.innerText = 'McCafe';
    
    mccafeText.classList.add('sidebar-text');

    mccafe.appendChild(mccafeIcon);
    mccafe.appendChild(mccafeText);

    otherFood.appendChild(mccafe);

    let signature = document.createElement('div');
    signature.classList.add('sidebar-module');

    let signatureIcon = document.createElement('img');
    signatureIcon.setAttribute('src', signatureImg);
    signatureIcon.classList.add('sidebar-icon');

    let signatureText = document.createElement('p');
    signatureText.innerText = 'The Signature Collection';
    
    signatureText.classList.add('sidebar-text');

    signature.appendChild(signatureIcon);
    signature.appendChild(signatureText);

    otherFood.appendChild(signature);

    let happyMeal = document.createElement('div');
    happyMeal.classList.add('sidebar-module');

    let happyMealIcon = document.createElement('img');
    happyMealIcon.setAttribute('src', happyMealImg);
    happyMealIcon.classList.add('sidebar-icon');

    let happyMealText = document.createElement('p');
    happyMealText.innerText = 'Happy Meals';
    
    happyMealText.classList.add('sidebar-text');

    happyMeal.appendChild(happyMealIcon);
    happyMeal.appendChild(happyMealText);

    otherFood.appendChild(happyMeal);

    let extraValueMeals = document.createElement('div');
    extraValueMeals.classList.add('sidebar-module');

    let extraValueMealsIcon = document.createElement('img');
    extraValueMealsIcon.setAttribute('src', extraValueImg);
    extraValueMealsIcon.classList.add('sidebar-icon');

    let extraValueMealsText = document.createElement('p');
    extraValueMealsText.innerText = 'Extra Value Meals';
    
    extraValueMealsText.classList.add('sidebar-text');

    extraValueMeals.appendChild(extraValueMealsIcon);
    extraValueMeals.appendChild(extraValueMealsText);

    otherFood.appendChild(extraValueMeals);

    let extraValueBreakfasts = document.createElement('div');
    extraValueBreakfasts.classList.add('sidebar-module');

    let extraValueBreakfastsIcon = document.createElement('img');
    extraValueBreakfastsIcon.setAttribute('src', extraValueBreakfastsImg);
    extraValueBreakfastsIcon.classList.add('sidebar-icon');

    let extraValueBreakfastsText = document.createElement('p');
    extraValueBreakfastsText.innerText = 'Extra Value Breakfasts';
    
    extraValueBreakfastsText.classList.add('sidebar-text');

    extraValueBreakfasts.appendChild(extraValueBreakfastsIcon);
    extraValueBreakfasts.appendChild(extraValueBreakfastsText);

    otherFood.appendChild(extraValueBreakfasts);

    let menu = document.createElement('div');
    menu.id = 'menu';

    let menuHeader1 = document.createElement('h1');
    menuHeader1.innerText = 'Meals and Value';
    menuHeader1.setAttribute('class', 'menu-header')
    
    menu.appendChild(menuHeader1);
    body.appendChild(sideBar);
    body.appendChild(menu);
    contentDiv.appendChild(body);

}

export default createMenu;