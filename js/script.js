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
