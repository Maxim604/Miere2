const scriptURL = 'https://script.google.com/macros/s/AKfycbwlXGPCoSeHlP5pJSXaKs0P5Zl-376dFxn7sVbaBPd1bIIen92z3wdd3e7_KJZoIAHOag/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Mesajul a fost trimis!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Eroare!', error.message))
})