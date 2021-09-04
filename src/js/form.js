import REGEX from './constants'
import alert from './alert'

const isEmailValidate = email => REGEX.test(String(email).toLowerCase())
const isEmptyField = field => field.value === ''

const contactFormValidation = () => {
  let error = ''
  const formClass = '.form-contact'
  const fields = document.querySelectorAll('.form-contact__field')

  fields.forEach(field => {
    if (isEmptyField(field))
      error += `Field <span>${field.name}</span> cannot be empty.<br>`

    if (field.name === 'email' && field.value !== '') {
      if (!isEmailValidate(field.value))
        error += `Incorrect <span>${field.name}</span> address.<br>`
    }
  })

  if (error) return alert(formClass, error, 'danger')
  return false
}

const sendFormContact = () => {
  const fields = document.querySelectorAll('.form-contact__field')
  let data = {
    name: '',
    email: '',
    topic: '',
    message: '',
  }

  fields.forEach(({ name, value }) => {
    data = {
      ...data,
      [name]: value,
    }
  })
}

const contactForm = () => {
  const formInputs = document.querySelectorAll('.form-contact__field')
  const buttonSubmit = document.querySelector('#sendForm')
  buttonSubmit.addEventListener('click', e => {
    e.preventDefault()
    const isValidate = contactFormValidation()
    if (isValidate) sendFormContact()
  })
  formInputs.forEach(item =>
    item.addEventListener('focusin', () => {
      const label = item.parentElement.lastElementChild
      return label.classList.add('form-contact__label--active')
    })
  )
  formInputs.forEach(item =>
    item.addEventListener('focusout', () => {
      const label = item.parentElement.lastElementChild
      const { value } = item
      if (!value) return label.classList.remove('form-contact__label--active')
      return true
    })
  )
}

export default contactForm
