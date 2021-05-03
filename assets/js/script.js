var nav = document.querySelector('#nav');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY >= 180) {
        nav.style.backgroundColor = '#63d0f1';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});