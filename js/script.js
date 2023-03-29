/*jshint esversion: 6 */

const burger = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header__menu');
const menuItem = document.querySelectorAll('.header__menu__item');


burger.addEventListener('click', () => {
  burger.classList.toggle('header__hamburger_active');
  mobileMenu.classList.toggle('header__menu_active');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.toggle('header__hamburger_active');
    mobileMenu.classList.toggle('header__menu_active');
  });
});

// При клике вне меню и бургера, меню закрывается
document.addEventListener('click', function(event) {
  if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
    mobileMenu.classList.remove('header__menu_active');
    burger.classList.remove('header__hamburger_active');
  }
});

const accordion = document.querySelectorAll('.accordions__head');

accordion.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('accordions__head_active');
    item.nextElementSibling.classList.toggle('accordions__body_active');
  });
});

const btnSwitch = document.querySelector('.switch');

btnSwitch.addEventListener('click', () => {
  btnSwitch.classList.toggle('switch_active');
});

const switchBtn = document.querySelector('.switch input');
const priceBasic = document.querySelector('.plans__price_basic');
const pricePro = document.querySelector('.plans__price_pro');
const plansMonthly = document.getElementById('plans-monthly');
const plansAnnual = document.getElementById('plans-annual');

switchBtn.addEventListener('change', function() {
  if (this.checked) {
    priceBasic.textContent = '7.99$';
    pricePro.textContent = '31.99$';
    plansMonthly.classList.remove('plans__billing_active');
    plansAnnual.classList.add('plans__billing_active');
  } else {
    priceBasic.textContent = '9.99$';
    pricePro.textContent = '39.99$';
    plansMonthly.classList.add('plans__billing_active');
    plansAnnual.classList.remove('plans__billing_active');
  }
});


