function toggleNav() {
  var sideNav = document.getElementById("sideNav");
  var navLinks = document.getElementById("navLinks");
  var menuIcon = document.getElementsByClassName("menu-icon")[0];

  navLinks.classList.toggle("open");
  navLinks.style.display =
    navLinks.style.display === "block" ? "none" : "block";
  menuIcon.innerHTML = menuIcon.innerHTML === "&#9776;" ? "&times;" : "&#9776;";
}
