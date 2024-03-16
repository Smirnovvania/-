document.getElementById('date_s').valueAsDate = new Date();
document.getElementById('date_b').valueAsDate = new Date();
document.getElementById('date_x').valueAsDate = new Date();




const scriptURL = 'https://script.google.com/macros/s/AKfycbzH83Z_aeiORiTUso4OcigQzswpeJiW2iDOgZKP7TjNqSbC3cOPy5-HJHQ6qq5ohZex/exec'

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
