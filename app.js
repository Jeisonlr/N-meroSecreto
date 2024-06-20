let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//el triple igual compara además de los valores, el tipo de dato
    if(numeroSecreto ===numeroDeUsuario){
        asignarTextoElemento('p', `Felicidades, has adivinado en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no asertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');  
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarimput();
    };
return;    
}

function limpiarimput(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','ya se sortearon los números posibles');
    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumero();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
        } 
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un # del 1 al ${numeroMax}`);
    numeroSecreto = generarNumero();
    intentos = 1;  
}

function reiniciarJuego(){
    //limpiar caja
    limpiarimput();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
// desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
