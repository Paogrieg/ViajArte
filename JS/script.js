const bars = document.querySelector(".bars");
bars.onclick = function() {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}