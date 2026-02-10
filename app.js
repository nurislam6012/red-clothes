
const basket = document.querySelector('#basket');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-icon')

const addButtons = document.querySelectorAll('.add-btn');
const cartItemsContainer = document.querySelector('.cart-items');
const emptyCart = document.querySelector('.empty-cart');
const totalPriceEl = document.querySelector('#totalPrice');
const headerTotal = document.querySelector('#totalHeader');



let cart = [];

basket.addEventListener('click', () => {
    modal.classList.add('open')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('open')
})


function updateCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCart.style.display = 'flex';
    } else {
        emptyCart.style.display = 'none';
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('blacksi');
            div.innerHTML = `
                <img src="./imager/img_11.png" alt="">
                <div class="info">
                    <h5>${item.name}</h5>
                    <p class="sport">${item.category || 'Товар'}</p>
                    <h3 class="rus">${item.price} ₽</h3>
                </div>
                <button class="remove"></button>
            `;

            div.querySelector('.remove').addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });
            cartItemsContainer.appendChild(div);
        });
    }

    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    totalPriceEl.textContent = total + ' ₽';
    headerTotal.textContent = total + ' ₽';
}

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = btn.dataset.price;
        cart.push({ name, price });
        updateCart();
        // modal.classList.add('open');
    });
});

updateCart();