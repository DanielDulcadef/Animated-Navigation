let navbar = document.getElementById("nav")
let btn = document.getElementById("toggle")


btn.addEventListener('click', () => {
	navbar.classList.toggle('active');
});