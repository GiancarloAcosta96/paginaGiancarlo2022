window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>2);
});

const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const parrafo = document.getElementById('warnings');

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexTelefono = /^([0-9]+){9}$/;
    let regexTelefonoSpace = /\s/;
    if(nombre.value.length == 0){
        warnings += `Completa el campo nombre<br>`;
        entrar = true;
    }
    else if(telefono.value.length == 0){
        warnings += `Completa el campo teléfono<br>`;
        entrar = true;
    }
    else if(!regexTelefono.test(telefono.value) || regexTelefonoSpace.test(telefono.value)){
        warnings += `El teléfono no es válido<br>`;
        entrar = true;
    }
    else if(email.value.length == 0){
        warnings += `Completa el campo email<br>`;
        entrar = true;
    }
    else if(!regexEmail.test(email.value)){
       warnings += `El email no es válido<br>`;
       entrar = true;
    }
    else if(mensaje.value.length == 0){
        warnings += `Completa el campo mensaje`;
        entrar = true;
    }
    if(entrar) {
        parrafo.innerHTML = warnings;
    }
});