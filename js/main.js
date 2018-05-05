var mobileMenu = document.getElementById("mobile-menu");

var dektopMenu = document.getElementById("desktop-menu");
var mobileMenuTrigger = document.getElementById('mb-menu-tr');
var mobileMenuContainer = document.getElementsByClassName('mobile-menu-container')[0];
var mobileBrakepoint = window.matchMedia("(max-width: 767px)");

window.addEventListener("load", function() {
    if (mobileBrakepoint.matches) {
        var navigationContent = tektopMenu.innerHTML;
        mobileMenu.innerHTML = navigationContent;
    }
});

mobileMenuTrigger.addEventListener("click", function() {
    mobileMenuContainer.style.display = "block";
});
