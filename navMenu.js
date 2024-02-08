const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    IOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPodi/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
    },
    Any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows())
    }
}
// /Меню бургер/

const iconMenu = document.querySelector('.header_icon_burger')
const mainMenu = document.querySelector('.menu_body')
if(iconMenu) {
    iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('._lock')
        iconMenu.classList.toggle('_active')
        mainMenu.classList.toggle('_active')
    })
}

if (isMobile.Any()) {
    document.body.classList.add('_touch')
    let menuArrows = document.querySelectorAll('.menu-arrow')
    if (menuArrows.length > 0) {
        for (let index = 0 ; index < menuArrows.length; index++){
            const menuArrow = menuArrows[index]
            menuArrow.addEventListener('click', () => {
                menuArrow.parentElement.classList.toggle('_active')
            })
        }
    }
} else {
    document.body.classList.add('_pc')
}