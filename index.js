
function myFunction() {
    var element = document.body;
    var about_text = document.getElementById("abouttext");
    var about_header = document.getElementById("aboutheader");
    var vertical_navbar = document.getElementById("verticalnavbar");
    element.classList.toggle('dark-mode');
    about_text.classList.toggle('about-text-dark');
    about_header.classList.toggle('about-header-dark');
    vertical_navbar.classList.toggle('vertical-navbar-dark');
}