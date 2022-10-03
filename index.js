window.onload = () => {
    const botonEnviarFormulario = document.querySelector('.enviar-formulario > button');
    botonEnviarFormulario.onclick = solicitarAcceso;
}

const selectorDeCampo = campo => document
    .querySelector('.formulario > .campos-de-texto > .'+campo+' input')  

function solicitarAcceso(){
    const emailDeUsuario = selectorDeCampo('email').value;
    const nombreDeUsario = selectorDeCampo('nombre').value;
    const password = selectorDeCampo('password').value;
    const passwordSegundoIntento = selectorDeCampo('password-dos').value;
    
    errores = []

    // email tiene que tener formato correcto
    if(!emailEsValido(emailDeUsuario)){
        errores.push('el email no tiene el formato correcto \n')
    }

    // nombre no puede estar vacio
    if(stringEstaVacio(nombreDeUsario)){
        errores.push('el nombre no puede estar vacio \n')
    }

    // password tienen que ser la misma
    if(password !== passwordSegundoIntento){
       errores.push('las contraseñas no coinciden\n')
    }

    // password mas de 4 caracteres
    if(password.length < 5){
       errores.push('la contraseñas debe tener por lo menos 5 caracteres\n')
    }

    if(errores.length > 0){
        let mensajeDeAlerta = 'El formulario tiene algunos errores, revise el/los siguiente/s campo/s:\n\n';
        // loop sobre errores
        for(let i = 0; i < errores.length;i++){
            mensajeDeAlerta += errores[i]
        }
        alert(mensajeDeAlerta)
        return
    }else{
        if(solicitarAccesoDesdeElServidor() === "exito"){
            alert('se ha registrado su solicitud')
            limpiarFormulario()
        }else{
            alert('su solicitud no se ha podido registrar. intente nuevamente mas tarde')
        }
    }
}

function emailEsValido(email) {    
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function stringEstaVacio(str){
    return typeof str === "string" && str.trim().length === 0
}

function limpiarFormulario(){
    selectorDeCampo('email').value = "";
    selectorDeCampo('nombre').value = "";
    selectorDeCampo('password').value = "";
    selectorDeCampo('password-dos').value = "";
}