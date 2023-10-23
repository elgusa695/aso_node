console.log("infoGeneral ON")
fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: 'P2'})
})


if(info.names !== ''){
    document.querySelector('#client_name').innerHTML = `
        !Hola <b>${info.names}</b>! <br> Diligencia el siguiente formulario y descubre tus beneficios.
    `;
    document.querySelector('#names').setAttribute("type", "hidden");

    info.names = info.names;
}else{
    document.querySelector('#client_name').innerHTML = `
        Diligencia el siguiente formulario y descubre tus beneficios.
    `;
}

document.querySelector('#cc').value = info.cc;

document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    showSpinner();

    /** Guardar y cargar */
    info.names === '' ? info.names = document.querySelector('#names').value : '';
    info.cel = document.querySelector('#cel').value;
    info.email = document.querySelector('#email').value;
    info.dir = document.querySelector('#dir').value;

    LS.setItem('info', JSON.stringify(info));

    setTimeout(()=>{
        window.location.href = 'producto.html'
    }, 2000);

    
});