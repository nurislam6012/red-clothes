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

let products = [
    {
        id: 1,
        name: "Blacksi",
        desc: "Костюм спортивный",
        price: 3595,
        img: "./imager/img_1.png"
    },
    {
        id: 2,
        name: "Blacksi",
        desc: "Костюм спортивный",
        price: 3595,
        img: "./imager/img_1.png"
    },
    {
        id: 3,
        name: "Blacksi",
        desc: "Костюм спортивный",
        price: 3595,
        img: "./imager/img_1.png"
    }
];

// OPEN
cartBtn.onclick = () => {
    cart.classList.add('active');
    overlay.classList.add('active');
};

// CLOSE
closeCart.onclick = close;
overlay.onclick = close;

function close() {
    cart.classList.remove('active');
    overlay.classList.remove('active');
}

// RENDER
function renderCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    products.forEach(p => {
        total += p.price;

        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${p.img}">
                <div class="cart-info">
                    <h4>${p.name}</h4>
                    <p>${p.desc}</p>
                    <strong>${p.price} ₽</strong>
                </div>
                <span class="remove" onclick="removeItem(${p.id})">✕</span>
            </div>
        `;
    });

    cartTotal.textContent = total + " ₽";
    headerTotal.textContent = total + " ₽";
}

// REMOVE
function removeItem(id) {
    products = products.filter(p => p.id !== id);
    renderCart();
}

renderCart();