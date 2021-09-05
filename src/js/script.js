import '../scss/style.scss'
import mobileMenu from './mobile-menu'
import scrollToSection from './scrollToSection'
import { filterPortfolio, loadPortfolioProjects } from './portfolio'
import contactForm from './form'

const init = () => {
  const navigationButton = document.querySelector('#button-menu')
  navigationButton.addEventListener('click', mobileMenu)
  scrollToSection()
  filterPortfolio()
  loadPortfolioProjects(4)
  const portfolioButtonLoadMore = document.querySelector(
    '.portfolio__item--load-more'
  )
  portfolioButtonLoadMore.addEventListener('click', () =>
    loadPortfolioProjects(3)
  )
  contactForm()
}

init()
