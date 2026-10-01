const menuButton = document.querySelector(".header__menu");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("is-open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню"
        );
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Открыть меню");
        });
    });

    document.addEventListener("click", event => {
        if (
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            mobileMenu.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Открыть меню");
        }
    });
}