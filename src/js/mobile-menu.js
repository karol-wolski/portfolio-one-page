import * as focusTrap from 'focus-trap'

const mobileMenu = () => {
  const focusTrapMobileNav = focusTrap.createFocusTrap('.navigation')
  const menuList = document.querySelector('#menu')
  const menuItems = document.querySelectorAll('.menu__link')
  const navigationButton = document.querySelector('#button-menu')
  menuList.classList.toggle('menu--active')
  navigationButton.classList.toggle('hamburger--active')
  menuItems.forEach(element => {
    element.addEventListener('click', () => {
      menuList.classList.remove('menu--active')
      navigationButton.classList.remove('hamburger--active')
    })
  })
  return menuList.classList.value.includes('menu--active')
    ? focusTrapMobileNav.activate()
    : focusTrapMobileNav.deactivate()
}

export default mobileMenu
