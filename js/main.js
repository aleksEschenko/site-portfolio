const navIcon = document.querySelector('.nav-icon');
const navMobile = document.querySelector('.nav-mobile');


navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	navMobile.classList.toggle('nav-mobile--active');
});

const navLinks = document.querySelectorAll('.nav-mobile a');

navLinks.forEach(function (item) {
    // для каждой ссылки добавляем прослушку по событию "клик"
    item.addEventListener('click', function () {
        navIcon.classList.remove('nav-icon--active'); //убираем активный класс у иконки моб навигации
        navMobile.classList.remove('nav-mobile--active'); // убираем активный класс у блока моб навигации
    })
})