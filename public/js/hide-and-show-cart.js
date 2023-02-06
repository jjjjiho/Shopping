const cartContainer = document.querySelector('#cart_container');

function closeCart () {
  cartContainer.style.left = '100%';
}

function openCart () {
  cartContainer.style.left = '75%';
}

function init () {
  const closeBtn = document.querySelector('#close_cart_btn');
  const openCartBtn = document.querySelector('#open_cart_btn');
  closeBtn.addEventListener('click', closeCart);
  openCartBtn.addEventListener('click', openCart);
}

init();