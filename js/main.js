const navIcon = document.querySelector('.nav-icon');
const navMobile = document.querySelector('.nav-mobile');


navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	navMobile.classList.toggle('nav-mobile--active');
});