function solicitarAcceso(){
    const selectorDeCampo = campo => document
    .querySelector('.formulario > .campos-de-texto > .'+campo+' input')
    .value
    const emailDeUsuario = selectorDeCampo('email');
    const nombreDeUsario = selectorDeCampo('nombre');
    const password = selectorDeCampo('password');
    const passwordSegundoIntento = selectorDeCampo('password-dos');
    console.log({
        emailDeUsuario,
        nombreDeUsario,
        password,
        passwordSegundoIntento
    })
}