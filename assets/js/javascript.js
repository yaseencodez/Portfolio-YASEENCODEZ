// JavaScript to toggle mobile menu
document.getElementById('menuBtn').addEventListener('click', function () {
    document.querySelector('.popup-mobile-menu').classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.popup-mobile-menu').classList.remove('active');
});
