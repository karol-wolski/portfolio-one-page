const alert = (selector, message, type) => {
  const element = document.querySelector(`${selector}`)
  const template = document.querySelector('.alert-template')
  const alertElement = template.content.cloneNode(true)
  if (element.firstElementChild.classList.contains('alert')) {
    const removeElement = document.querySelector('.alert')
    element.removeChild(removeElement)
  }
  alertElement.querySelector('.alert').classList.add(`alert--${type}`)
  alertElement.querySelector('.alert').innerHTML = message
  return element.prepend(alertElement)
}

export default alert
