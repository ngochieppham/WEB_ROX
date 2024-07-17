document.addEventListener('DOMContentLoaded', function () {
    // Đoạn mã JavaScript ban đầu của bạn
    const menuToggle = document.querySelector('.icon-menu-deck');
    const menumobile = document.querySelector('.icon-menu-mobile');
    const menuDecktop = document.querySelector('.menu-decktop');
    const closeButton = document.querySelector('.button-menu-right');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        menuDecktop.classList.add('open');
        body.classList.add('no-scroll');
    });

    menumobile.addEventListener('click', function () {
        menuDecktop.classList.add('open');
        body.classList.add('no-scroll');
    });

    closeButton.addEventListener('click', function () {
        menuDecktop.classList.remove('open');
        body.classList.remove('no-scroll');
    });
});

