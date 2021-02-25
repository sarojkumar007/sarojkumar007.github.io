var topButton = document.getElementById("topBtn");

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		topButton.style.display = "inline-flex";
	} else {
		topButton.style.display = "none";
	}
}

topButton.addEventListener('click', (e) => {
	e.preventDefault();
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})