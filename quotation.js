
const scriptURL = 'https://script.google.com/macros/s/AKfycbygvEzj51pf3EWx9yRdZ0n8CP-rzY3E5PldQrnog_zkttETJo9YQdvcTA70lsbMNA/exec';
const form = document.forms['quotation-form'];

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission behavior

    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors', // Disable CORS enforcement
        body: new FormData(form) 
    })
    .then(() => {
        alert("Your form has been submitted!");
        setTimeout(() => {
            window.location.href = "/index.html"; // Redirect to homepage
        }, 500);
    })
    .catch(error => {
        console.error('Error! Failed to fetch', error);
    });
});
