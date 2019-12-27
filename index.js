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

    for (var i = 0; i < menuItemLen; i++) {
        menuItemAll[i].addEventListener('click', selectMenu);
    };

    function selectMenu() {
        for (var i = 0; i < menuItemLen; i++) {
            menuItemAll[i].classList.remove('menu__item--active');
            this.classList.add('menu__item--active');
        }
    };

    var menuCloseAll = document.querySelectorAll('.menu__close--trigger'),
        menuCloseLen = menuCloseAll.length;

    for (var i = 0; i < menuCloseLen; i++) {
        menuCloseAll[i].addEventListener('click', function (e) {
            e.stopPropagation();
            var menuItemActive = document.querySelector('.menu__item--active');
            menuItemActive.classList.remove('menu__item--active');
        })
    };

    //секция команда

    var teamItem = document.querySelectorAll('.team__item'),
        teamlen = teamItem.length;

    for (var i = 0; i < teamlen; i++) {
        teamItem[i].addEventListener('click', selectTeam);
    };

    function selectTeam() {
        // for (var i = 0; i < menuItemLen; i++) {
        //     teamItem[i].classList.remove('team__item--active');
        //     this.classList.add('team__item--active');
        // }

        if (this.classList.contains('team__item--active')) {
            this.classList.remove('team__item--active');
        } else {
            this.classList.add('team__item--active');
        }
    };

    //секция батончиков

    //состав

    var barsComp = document.querySelectorAll('.bars__composition'),
        barsAdd = document.querySelectorAll('.bars__add-composition'),
        barsCompLen = barsComp.length,
        barsAddLen = barsAdd.length;

    for (var i = 0; i < barsCompLen; i++) {
        barsComp[i].addEventListener('click', function (e) {
            for (var i = 0; i < barsAddLen; i++) {
                if (barsAdd[i].classList.contains('bars__add-composition--active')) {
                    barsAdd[i].classList.remove('bars__add-composition--active');
                } else {
                    barsAdd[i].classList.add('bars__add-composition--active');
                }
            }
        })
    };

    //слайдер батончиков

    var right = document.querySelector('#right'),
        left = document.querySelector('#left'),
        barsList = document.querySelector('.bars__list');
    // currentRight = barsList.style.right;



    // console.log(currentRight);
    // const minRight = 0;
    // const maxRight = 100;
    // const step = 100;
    // let currentRight = 0;

    right.addEventListener('click', function (e) {
        barsList.style.right = '100%';
        // if (barsList.style.right === '100%') {
        //     let barsRight = document.querySelector('.bars__slider-icone--right');
        //     barsRight.style.filter = 'none';
        // }
    });

    left.addEventListener('click', function (e) {
        barsList.style.right = '0';
        // if (barsList.style.right === '0') {
        //     let barsLeft = document.querySelector('.bars__slider-icone--left');
        //     barsLeft.style.filter = 'none';
        // }
    })


    // right.addEventListener('click', function (e) {
    //     if (currentRight < maxRight) {
    //         currentRight = currentRight + step;
    //         barsList.style.right = currentRight + 'px';
    //     }
    // });

    // left.addEventListener('click', function (e) {

    // });



    //Работа с формой

    // const myForm = document.querySelector('#myForm');
    // const sendBtn = document.querySelector('#sendBtn');

    // sendBtn.addEventListener('click', function (e) {
    //     e.preventDefault();

    //     if (validateForm(myForm)) {
    //         console.log('ok');
    //     }
    // });

    // function validateForm(form)


    //Секция отзывы

    // var commentsAvatarItem = document.querySelectorAll('.comments__avatar-item'),
    //     commentsAvatarItemLen = commentsAvatarItem.length;
    // // commentsBox = document.querySelectorAll('.comments__box');

    // for (var i = 0; i < commentsAvatarItemLen; i++) {
    //     commentsAvatarItem[i].addEventListener('click', function (e) {
    //         if (commentsAvatarItem[i].classList.contains('comments__avatar-item')) {
    //             console.log('dsg')
    //         }
    //     })
    // }


})();

