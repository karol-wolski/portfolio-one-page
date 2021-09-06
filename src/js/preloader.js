const preloader = () => {
  const preloaderElement = document.querySelector('#preloader')
  window.addEventListener('load', () => {
    preloaderElement.classList.add('preloader--hidden')
  })
}

export default preloader
