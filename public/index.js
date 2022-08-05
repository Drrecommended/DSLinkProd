let cta = document.getElementById('cta')
let email = document.getElementById('email').value
let error = document.getElementById('error')
let success = document.getElementById('success')
let signup = document.getElementById('cta')

cta.addEventListener('click', (e) => {
  e.preventDefault()

  if (this.email.value == null || this.email.value == '') {
    error.classList.add('errorAnim')
  } else {
    let fetchData = {
      method: 'POST',
      body: JSON.stringify({ email: this.email.value, js: true }),
      headers: { 'Content-Type': 'application/json' },
    }

    fetch('/subscribe', fetchData).then((res) => {
      if (res.ok) {
        //yay
      } else {
        error.classList.add('errorAnim')
      }
    })
  }
})
