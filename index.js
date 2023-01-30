const navButton = document.querySelector(".nav-button");
const navBar = document.querySelector(".nav-bar");
const navItems = document.querySelectorAll(".nav-item");

function toggleNav() {
    navBar.classList.toggle("active");
}

navButton.addEventListener("click", toggleNav);

navItems.forEach(element => {
    element.addEventListener("click", toggleNav);
});

navItems.addEventListener("click", toggleNav);