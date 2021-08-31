const scrollToSection = () => {
  const navigation = document.querySelectorAll('.navigation .menu__link')
  navigation.forEach(item =>
    item.addEventListener('click', e => {
      e.preventDefault()
      const sectionHash = item.getAttribute('href')
      const section = document.querySelector(sectionHash)
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  )
}

export default scrollToSection
