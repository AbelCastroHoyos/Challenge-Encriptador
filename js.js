let mensajeEntrada;
let mensajeSalida;
let estadoMsg = document.querySelector(".contenedor-resultado").style.display;

// Función para cambiar el estado de visibilidad del muñeco 
// y el resultado de la encriptación o desencriptación
function cambiarEstado(estado) {
    if (estado === true) {
        document.querySelector(".contenedor-resultado").style.display = estadoMsg;
        document.querySelector(".muneco").style.display = "none";
        document.querySelector(".ver-msg").style.display = "none";

    } else {
        document.querySelector(".contenedor-resultado").style.display = "none";
    }
}

// Funcion de encriptación
function cifrar() {
    cambiarEstado(true);
    mensajeEntrada = document.getElementById("mensaje").value;
    let msgEnc = '';
    mensajeEntrada.split('').forEach(x => {
        if (x === 'a'){
            msgEnc += 'ai';
        }else if (x === 'e'){
            msgEnc += 'enter';
        }else if (x === 'i'){
            msgEnc += 'imes';
        }else if (x === 'o'){
            msgEnc += 'ober';
        }else if (x === 'u'){
             msgEnc += 'ufat';
        }else{
        msgEnc += x;
        }
    });
    document.getElementById("ver-mensaje").innerHTML = msgEnc;
}

// Función de desencriptación
function descifrar() {
    cambiarEstado(true);
    mensajeEntrada = document.getElementById("mensaje").value;
    mensajeEntrada = mensajeEntrada.replace(/ai/g,'a');
    mensajeEntrada = mensajeEntrada.replace(/enter/g,'e');
    mensajeEntrada = mensajeEntrada.replace(/imes/g,'i');
    mensajeEntrada = mensajeEntrada.replace(/ober/g,'o');
    mensajeEntrada = mensajeEntrada.replace(/ufat/g,'u');
    document.getElementById("ver-mensaje").innerHTML = mensajeEntrada;
}

// Función para copiar el texto al portapeles
function copy(texto) {
    navigator.clipboard.writeText(texto)
        .catch(err => {
            console.error("Error al copiar el texto al portapapeles.",err);
        });
}

// Llamar a la función cuando se hace clic en un botón
document.querySelector("#copy").addEventListener("click", () => {
    let textoACopiar = document.querySelector("#ver-mensaje").innerText;
    copy(textoACopiar);
});

// Se prefiere usar el Clipboard API en vez de execCommand puesto que es una implementacion mas segura y moderna,
// además execCommand ya está deprecado
/* function copy() {
    let copyText = document.querySelector("#ver-mensaje");
    copyText.select()
    document.execCommand("copy");
    copyText.selectionEnd = 0
}
document.querySelector("#copy").addEventListener("click",copy); 
*/