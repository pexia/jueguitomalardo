let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = prompt('Ingrese el valor maximo para el numero secreto')

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let intentoUsuario = parseInt(document.getElementById('valorUsuario').value);;
    if (numeroSecreto === intentoUsuario){
        // template string aplicando 'if/else'
        asignarTextoElemento('p',`Acertaste al numero Secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(intentoUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
        }else{
            asignarTextoElemento('p','El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroRandom = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroRandom);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroRandom)){
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroRandom);
            return numeroRandom;
        }
    }    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    // deshabilitar 'nuevo juego'
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
