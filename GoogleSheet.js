const scriptURL='https://script.google.com/macros/s/AKfycbzADadcgc_bJ5na3gY_Kv-rLtibOGq5ODJUO9Sm47avNAj-PuAf3o62a23D0LlzQZU/exec'
const form =document.forms['quotation-form']
form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method :'POST',body:new FormData(form)})
    .then(response => alert ("Thankyou! Your form has been submitted successfully."))
    .then(()=>{window.location.reload(); })
    .catch(error => console.error ('Error!',error.message))
})
