const cartBtn = document.getElementById('cartBtn');
const cart = document.getElementById('cart');
const overlay = document.getElementById('overlay');
const closeCart = document.getElementById('closeCart');
const cartItemsDiv = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const headerTotal = document.getElementById('totalPrice');
const basket = document.querySelector('#basket');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-icon')


basket.addEventListener('click', () => {
    modal.classList.add('open')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('open')
})
