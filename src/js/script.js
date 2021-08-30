import '../scss/style.scss'
import mobileMenu from './mobile-menu'

const init = () => {
  const navigationButton = document.querySelector('#button-menu')
  navigationButton.addEventListener('click', mobileMenu)
}

init()
