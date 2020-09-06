const moreBtn = document.querySelector("header .moreBtn");
const menu = document.querySelector("header .menu");
const icons = document.querySelector("header .icons");

moreBtn.addEventListener("click", () => {
	menu.classList.toggle("clicked");
	icons.classList.toggle("clicked");
});

function change() {
	// no ';' here
	var elem = document.getElementById("myButton");
	if (elem.classList == "fas fa-compress-alt")
		elem.classList = "fas fa-expand-alt";
	else elem.classList = "fas fa-compress-alt";
}
