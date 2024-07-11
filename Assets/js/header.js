const headerFn = () => {
    const burgerBtns = document.querySelectorAll(".burger");
    const closeIcons = document.querySelectorAll(".close-icon");
    const menuItems = document.querySelector(".header_wrapper_menu");

    const openMenu = () => {
        burgerBtns.forEach(burgerBtn => {
            burgerBtn.onclick = () => {
                menuItems.classList.add("is-active");
            };
        });
    };

    const closeMenu = () => {
        closeIcons.forEach(closeIcon => {
            closeIcon.onclick = () => {
                menuItems.classList.remove("is-active");
            };
        });
    };
    
    openMenu();
    closeMenu();
};

export default headerFn;
