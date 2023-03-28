/*jshint esversion: 6 */

var accordion = document.querySelectorAll('.accordions__head');

accordion.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('accordions__head_active');
    item.nextElementSibling.classList.toggle('accordions__body_active');
  });
});

var accordion = document.querySelectorAll('.switch');

accordion.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('switch_active');
  });
});

const switchBtn = document.querySelector('.switch input');
const priceBasic = document.querySelectorAll('.plans__price_basic');
const pricePro = document.querySelectorAll('.plans__price_pro');

switchBtn.addEventListener('change', function() {
  if (this.checked) {
    priceBasic.forEach(function(elem) {
      elem.textContent = '7.99$';
    });
    pricePro.forEach(function(elem) {
      elem.textContent = '31.99$';
    });
  } else {
    priceBasic.forEach(function(elem) {
      elem.textContent = '9.99$';
    });
    pricePro.forEach(function(elem) {
      elem.textContent = '39.99$';
    });
  }
});