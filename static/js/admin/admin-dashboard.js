const sideMenuDiv = document.querySelector(".SideBar-Menu");
const sideMenus = sideMenuDiv.querySelectorAll(".SideMenu-Wrapper");
const sideMenuIcons = sideMenuDiv.querySelectorAll(".SideMenu-Icon");

const homeDiv = document.querySelector("div[name=home]");
const userMngDiv = document.querySelector("div[name=user]");
// const marketMngDiv = document.querySelector("div[name=market]");
// const itemMngDiv = document.querySelector("div[name=item]");
// const reportMngDiv = document.querySelector("div[name=report]");

console.log(homeDiv);

const allSection = [
    homeDiv,
    userMngDiv,
    // marketMngDiv,
    // itemMngDiv,
    // reportMngDiv,
];

sideMenus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        sideMenuIcons.forEach((i) => i.classList.remove("current"));
        menu.firstElementChild.classList.add("current");
        allSection.forEach((a) => a.classList.add("off"));

        let menuName = menu.getAttribute("name");

        switch (menuName) {
            case "homeMenu":
                homeDiv.classList.remove("off");
                break;
            case "userMenu":
                userMngDiv.classList.remove("off");
                break;
            case "marketMenu":
                break;
            case "itemMenu":
                break;
            case "reportMenu":
                break;
        }
    });
});

document.querySelector("div[name=homeMenu]").click();
