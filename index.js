var hamburgerMenu = document.querySelector('.hamburger-menu');
var fullScreenMenu = document.querySelector('.full-screen-menu');

hamburgerMenu.addEventListener('click', function (e) {
    e.preventDefault();
    fullScreenMenu.style.display = 'flex';
});

var fullScreenMenu__close = document.querySelector('.full-screen-menu__close');

fullScreenMenu__close.addEventListener('click', function (e) {
    e.preventDefault();
    fullScreenMenu.style.display = 'none';
});

var fullScreenMenu__list = document.querySelector('.full-screen-menu__list');

fullScreenMenu__list.addEventListener('click', function (e) {
    e.target.tagName;
    if (e.target.tagName = 'A') {
        fullScreenMenu.style.display = 'none';
    }
})

