const favContainer = document.querySelector('.favorit');
const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];

// sessionStorage.clear();

favorites.forEach(cardHTML => {
    favContainer.insertAdjacentHTML('beforeend', cardHTML);
});


