document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById('navbar-toggler');

    navbarToggler.addEventListener('click', function () {
        this.classList.toggle('collapsed');
    });
});
