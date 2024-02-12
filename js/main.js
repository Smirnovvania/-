const scriptURL = 'https://script.google.com/macros/s/AKfycbzfinmncsh0poCTMzyrn0lBqwrNrpnML25QrVTJxQtgwwEqRh81sCpQxZYEX9Sz2Tef/exec'

$('.tab').click(function(event) {
   $('.tab').removeClass('active');
   $(this).addClass('active');
   });

const form = document.forms['contact-form1']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Отчет отправлен" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Ошибка', error.message))
})

const form2 = document.forms['contact-form2']

form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
  .then(response => alert("Отчет отправлен" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Ошибка', error.message))
})

const form3 = document.forms['contact-form3']

form3.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form3)})
  .then(response => alert("Отчет отправлен" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Ошибка', error.message))
})
     