const menu = document.querySelector('.desktop-header  .modal-content.menu');
const burgerMenu = document.querySelector('.desktop-header .header__content .burger-menu');
const cart = document.querySelector('.desktop-header .header__content .cart');
const basket = document.querySelector('.desktop-header .basket');
const closeModal = document.querySelector('.desktop-header .modal-content.menu .close-modal');
const menuContentModal = document.querySelector('.desktop-header .modal-content.menu');

cart.addEventListener('click', () => {
  basket.style.display = 'flex';
  basket.previousElementSibling.style.display = 'flex';
});

burgerMenu.addEventListener('click', () => {
  menu.style.display = 'flex';
  menu.nextElementSibling.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  menu.style.display = 'none';
  menu.nextElementSibling.style.display = 'none';
});

menuContentModal.addEventListener('click', (e)=>{
  if(!e.target.classList.contains('link__open')) return;
  if (getComputedStyle(e.target.parentElement.nextElementSibling, null).getPropertyValue("display")==='none')
    e.target.parentElement.nextElementSibling.style.display = 'flex';
  else  e.target.parentElement.nextElementSibling.style.display = 'none';
});

//mobile
const mobileMenu = document.querySelector('.mobile-header  .modal-content.menu');
const burgerMenuMob = document.querySelector('.mobile-header .header__content .burger-menu');
const cartMob = document.querySelector('.mobile-header .header__content .cart');
const basketMob = document.querySelector('.mobile-header .basket');
const closeModalMob = document.querySelector('.mobile-header .modal-content.menu .close-modal');
const menuContentModalMob = document.querySelector('.mobile-header .modal-content.menu');
const overlay = document.querySelector('.overlay');

cartMob.addEventListener('click', () => {
    basketMob.style.display = 'flex';
    overlay.style.display='flex';
});

burgerMenuMob.addEventListener('click', e => {
  mobileMenu.style.display = 'flex';
  overlay.style.display='flex';
});

closeModalMob.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  overlay.style.display='none';
});

menuContentModalMob.addEventListener('click', (e)=>{
  if(!e.target.classList.contains('link__open')) return;
  console.log(e.target.parentElement);
  if (getComputedStyle(e.target.parentElement.nextElementSibling, null).getPropertyValue("display")==='none')
    e.target.parentElement.nextElementSibling.style.display = 'flex';
  else  e.target.parentElement.nextElementSibling.style.display = 'none';
});


window.onclick = (e) =>{
  if (e.target.classList.contains('overlay')) {
    menu.style.display = 'none';
    menu.nextElementSibling.style.display = 'none';
    basket.style.display = 'none';
    mobileMenu.style.display = 'none';
   overlay.style.display = 'none';
    basketMob.style.display = 'none';
  }
};