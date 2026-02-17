const favContainer = document.querySelector('.favorit');
const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
const madal = document.querySelector('.madal');

sessionStorage.clear();

favorites.forEach(cardHTML => {
    favContainer.insertAdjacentHTML('beforeend', cardHTML);
});

function renderFavorit() {
    if (favorites.length === 0) {
        madal.style.display = 'flex';
        favContainer.style.display = 'none';
    }else{
        madal.style.display = 'none';
        favContainer.style.display = 'flex';
    }
}
renderFavorit();
