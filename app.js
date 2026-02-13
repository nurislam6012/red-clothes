
const basket = document.querySelector('#basket');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-icon')

const addButtons = document.querySelectorAll('.add-btn');
const cartItemsContainer = document.querySelector('.cart-items');
const emptyCart = document.querySelector('.empty-cart');
const totalPriceEl = document.querySelector('#totalPrice');
const headerTotal = document.querySelector('#totalHeader');

const zakazBtn = document.querySelector('.order-btn')
const ofor = document.querySelector('.oformlenie');
const footer = document.querySelector('.cart-footer');

// zakazBtn.addEventListener('click', () => {
//     ofor.style.display = 'block';
//     cartItemsContainer.style.display = 'none';
//     footer.style.display = 'none';
//     // emptyCart.style.display = 'none';
//     if (emptyCart.style.display === 'block') {
//         cartItemsContainer.style.display = 'none'
//         ofor.style.display = 'none'
//         emptyCart.style.display = 'block'
//     footer.style.display = 'flex';
//     }
// })

let cart = JSON.parse(localStorage.getItem('cart')) || [];
function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
// localStorage.clear()

basket.addEventListener('click', () => {
    modal.classList.add('open')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('open')
})


function updateCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
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
                saveCart();
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
        saveCart();
        updateCart();
    });
});

updateCart();


const hearts = document.querySelectorAll('.img-mini');

let isHidden = false;

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        const card = heart.parentElement;
        if (isHidden) {
        isHidden = false;
            heart.classList.remove('active');
        }else{
        heart.classList.toggle('active');
            isHidden = true;
        }

        let favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
        favorites.push(card.outerHTML);

        sessionStorage.setItem('favorites', JSON.stringify(favorites));
    });
});


const img = document.querySelector('.mini-img');

img.addEventListener('click', () => {
    img.classList.toggle('active');
});

img.addEventListener('click', () => {
    img.classList.toggle('active');
});

















