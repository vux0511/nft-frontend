function handleToggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const menu = document.querySelector(".header__menu");

    if (!menuToggle || !menu) return;
    menuToggle.addEventListener("click", function () {
        menu.classList.add("is-active");
    });
    menuClose.addEventListener("click", function () {
        menu.classList.remove("is-active");
    });
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
            menu.classList.remove("is-active");
        }
    });
}
handleToggleMenu();
