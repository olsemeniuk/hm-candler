const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.header__menu-list');

menuButton.addEventListener('click', toggleMenu);
document.body.addEventListener('click', hideMenu);

function toggleMenu() {
    menuList.classList.toggle('menu__list--active');
}

function hideMenu(event) {
    const { target } = event;
    const isMenu = target.closest('.header__menu-list');
    const isButton = target.closest('.menu__button');
    if (isMenu || isButton) return;
    menuList.classList.remove('menu__list--active');
}

const feedbacksSlider = new Swiper('.feedbacks__slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.feedbacks__pagination',
        clickable: true
    }
});

const certificatesSlider = new Swiper('.certificates__slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.certificates__pagination',
        clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        360: {
            slidesPerView: 2
        },
        576: {
            slidesPerView: 3
        },
        992: {
            spaceBetween: 20
        }
    }
});

const faqBlock = document.querySelector('.faq__list');

faqBlock.addEventListener('click', toggleAccordion);

function toggleAccordion(event) {
    const { target } = event;
    const isButton = target.closest('.faq__btn');
    if (!isButton) return;

    const parentItem = isButton.closest('.faq__item');
    const contentWrapper = parentItem.querySelector('.faq__content-wrapper');
    const itemContent = parentItem.querySelector('.faq__content');

    const contentHeight = window.getComputedStyle(itemContent).getPropertyValue('height');
    const itemIsActive = parentItem.classList.contains('faq__item--active');

    closeAllFaq();
    if (!itemIsActive) {
        contentWrapper.style.height = contentHeight;
        parentItem.classList.add('faq__item--active');
    }
}

function closeAllFaq() {
    const items = document.querySelectorAll('.faq__item');
    items.forEach(item => {
        item.classList.remove('faq__item--active');
        const contentWrapper = item.querySelector('.faq__content-wrapper');
        contentWrapper.style.height = 0;
    });
}
