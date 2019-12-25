; (function () {
    //полноэкранное меню бургера

    var doc = document,
        hamburgerMenu = doc.querySelector('.hamburger-menu'),
        fullScreenMenu = doc.querySelector('.full-screen-menu'),
        fullScreenMenu__close = doc.querySelector('.full-screen-menu__close'),
        fullScreenMenu__list = doc.querySelector('.full-screen-menu__list');

    hamburgerMenu.addEventListener('click', function (e) {
        e.preventDefault();
        fullScreenMenu.style.display = 'flex';
    });


    fullScreenMenu__close.addEventListener('click', function (e) {
        e.preventDefault();
        fullScreenMenu.style.display = 'none';
    });


    fullScreenMenu__list.addEventListener('click', function (e) {
        e.target.tagName;
        if (e.target.tagName = 'A') {
            fullScreenMenu.style.display = 'none';
        }
    });

    //секция меню

    var menuItemAll = document.querySelectorAll('.menu__item'),
        menuItemLen = menuItemAll.length;

    for (i = 0; i < menuItemLen; i++) {
        menuItemAll[i].addEventListener('click', selectMenu);
    }

    function selectMenu() {
        for (i = 0; i < menuItemLen; i++) {
            menuItemAll[i].classList.remove('menu__item--active');
            this.classList.add('menu__item--active');
        }
    }

    // var menuItemActive = document.querySelector('.menu__item--active'),
    //     menuCloseAll = document.querySelectorAll('.menu__close--trigger'),
    //     menuCloseLen = menuCloseAll.length;


    // for (i = 0; i < menuCloseLen; i++) {
    //     menuCloseAll[i].addEventListener('click', function (e) {
    //         e.preventDefault();
    //         menuItemActive.classList.remove('menu__item--active');
    //     })
    // }

    var menuCloseAll = document.querySelectorAll('.menu__close--trigger'),
        menuCloseLen = menuCloseAll.length;

    for (i = 0; i < menuCloseLen; i++) {
        menuCloseAll[i].addEventListener('click', function (e) {
            e.preventDefault();
            var menuItemActive = document.querySelector('.menu__item--active');
            menuItemActive.classList.remove('menu__item--active');
            console.log(menuItemActive)
        })
    }

    //секция команда

    var teamItem = document.querySelectorAll('.team__item'),
        teamlen = teamItem.length;

    for (i = 0; i < teamlen; i++) {
        teamItem[i].addEventListener('click', selectTeam);
    }

    function selectTeam() {
        if (this.classList.contains('team__item--active')) {
            this.classList.remove('team__item--active');
        } else {
            this.classList.add('team__item--active');
        }
    }

    //секция батончиков

    var barsComp = document.querySelector('.bars__composition'),
        barsAdd = document.querySelector('.bars__add-composition');

    barsComp.addEventListener('click', function (e) {
        e.preventDefault();
        if (barsAdd.classList.contains('bars__add-composition--active')) {
            barsAdd.classList.remove('bars__add-composition--active');
        } else {
            barsAdd.classList.add('bars__add-composition--active');
        }
    })

})();

