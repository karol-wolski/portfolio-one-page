import '../scss/style.scss'
import mobileMenu from './mobile-menu'
import scrollToSection from './scrollToSection'

const init = () => {
  const navigationButton = document.querySelector('#button-menu')
  navigationButton.addEventListener('click', mobileMenu)
  scrollToSection()
}

init()
