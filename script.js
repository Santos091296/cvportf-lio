// script.js
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
    document.body.insertBefore(navToggle, nav);
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Seleciona os campos do formulário
    var nome = document.querySelector('#nome');
    var email = document.querySelector('#email');
    var mensagem = document.querySelector('#mensagem');

    // Verifica se todos os campos foram preenchidos
    if (nome.value && email.value && mensagem.value) {
        alert('Mensagem enviada! 📬');
    } else {
        alert('Por favor, preencha todos os campos. 🚫');
    }
});
