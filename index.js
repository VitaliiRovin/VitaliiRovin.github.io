; (function () {

    //  полноэкранное меню бургера
    let gambergerMenu = () => {
        let doc = document,
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
        })
    };
    gambergerMenu();



    //  секция команда акордеон
    let teamAcco = () => {
        let team = document.querySelector('.team__list');
        team.addEventListener('click', function (e) {
            const target = e.target;
            if (target.classList.contains('team__name')) {
                let activeClass = team.querySelector('.team__item--active');
                if (activeClass) {   //закрывает активный элемент
                    let activeText = activeClass.querySelector('.team__desc');
                    activeText.style.height = '0px';
                    activeClass.classList.remove('team__item--active');
                }

                if (!activeClass || activeClass.querySelector('.team__name') !== target) {    //открытие
                    let current = target.closest('.team__item');
                    current.classList.add('team__item--active');
                    let currentText = current.querySelector('.team__desc');
                    currentText.style.height = currentText.scrollHeight + 'px';
                }
            }
        })
    };
    teamAcco();

    //  секция команда акордеон вариант 2
    let teamAcco2 = () => {
        let teamList = document.querySelector('.team__list');

        teamList.addEventListener('click', function (e) {
            e.preventDefault();
            let target = e.target;
            const item = target.closest('.team__item');
            const items = document.querySelectorAll('.team__item');

            if (target.classList.contains('team__name')) {
                if (!item.classList.contains('team__item--active')) {
                    for (let i = 0; i < items.length; i++) {
                        items[i].classList.remove('team__item--active');
                    }
                    item.classList.add('team__item--active');
                } else {
                    item.classList.remove('team__item--active');
                }
            }
        })
    };
    // teamAcco2();

    //  секция команда акордеон вариант 3
    let teamAcco3 = () => {
        var teamItem = document.querySelectorAll('.team__item'),
            teamlen = teamItem.length;

        for (let i = 0; i < teamlen; i++) {
            teamItem[i].addEventListener('click', selectTeam);
        };

        function selectTeam() {
            // for (let i = 0; i < menuItemLen; i++) {
            //     teamItem[i].classList.remove('team__item--active');
            //     this.classList.add('team__item--active');
            // }

            if (this.classList.contains('team__item--active')) {
                this.classList.remove('team__item--active');
            } else {
                this.classList.add('team__item--active');
            }
        }
    };
    // teamAcco3();



    //  секция меню акордеон
    let menuAcco = () => {
        let menuItemAll = document.querySelectorAll('.menu__item'),
            menuItemLen = menuItemAll.length;

        for (let i = 0; i < menuItemLen; i++) {
            menuItemAll[i].addEventListener('click', selectMenu);
        };

        function selectMenu() {
            for (let i = 0; i < menuItemLen; i++) {
                menuItemAll[i].classList.remove('menu__item--active');
                this.classList.add('menu__item--active');
            }
        };

        let menuCloseAll = document.querySelectorAll('.menu__close--trigger'),
            menuCloseLen = menuCloseAll.length;

        for (let i = 0; i < menuCloseLen; i++) {
            menuCloseAll[i].addEventListener('click', function (e) {
                e.stopPropagation();
                let menuItemActive = document.querySelector('.menu__item--active');
                menuItemActive.classList.remove('menu__item--active');
            })
        }
    };
    menuAcco();



    //  секция отзывов
    let reviewsSlide = () => {
        const box = document.querySelectorAll('.comments__box');
        const avatar = document.querySelectorAll('.comments__avatar-item');
        let active = 0;
        for (let i = 0; i < box.length; i++) {
            avatar[i].addEventListener('click', function (e) {
                box[i].classList.toggle('comments__box--active');
                avatar[i].classList.toggle('comments__avatar-item--active');

                avatar[active].classList.toggle('comments__avatar-item--active');
                box[active].classList.toggle('comments__box--active');
                active = i;
            })
        }
    };
    reviewsSlide();



    //  секция выбора батончиков

    //      выпадашка состав
    let openingСomposition2 = () => {
        var barsComp = document.querySelectorAll('.bars__composition'),
            barsAdd = document.querySelectorAll('.bars__add-composition'),
            barsCompLen = barsComp.length,
            barsAddLen = barsAdd.length;

        for (let i = 0; i < barsCompLen; i++) {
            barsComp[i].addEventListener('click', function (e) {
                for (let i = 0; i < barsAddLen; i++) {
                    if (barsAdd[i].classList.contains('bars__add-composition--active')) {
                        barsAdd[i].classList.remove('bars__add-composition--active');
                    } else {
                        barsAdd[i].classList.add('bars__add-composition--active');
                    }
                }
            })
        }
    };
    openingСomposition2();

    //      слайдер батончиков
    let slideBars2 = () => {
        let right = document.querySelector('#right'),
            left = document.querySelector('#left'),
            barsList = document.querySelector('.bars__list');

        right.addEventListener('click', function (e) {
            barsList.style.right = '100%';
            right.classList.add('bars__slider--active');
            left.classList.remove('bars__slider--active');
        });

        left.addEventListener('click', function (e) {
            barsList.style.right = '0';
            left.classList.add('bars__slider--active');
            right.classList.remove('bars__slider--active');
        });
    };
    slideBars2();

})();

