textField = document.querySelector('.text-field')

let value = 0
if(localStorage.getItem('value') != null) {
  value = localStorage.getItem('value')
textField.innerHTML = localStorage.getItem('value')
}

document.querySelector('.up-btn').addEventListener('click', () => {
  value++

  localStorage.setItem('value', value)
textField.innerHTML = localStorage.getItem('value')
})

// document.querySelector('.down-btn').addEventListener('click', () => {
//   value--

//   localStorage.setItem('value', value)
// textField.innerHTML = localStorage.getItem('value')
// })

document.querySelector('.reset-btn').addEventListener('click', () => {
  value = 0

  localStorage.setItem('value', value)
textField.innerHTML = localStorage.getItem('value')
})


