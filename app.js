let textAreaSalida = document.getElementById("salida");
let textAreaEntrada = document.getElementById("entrada");
let btnCopiar = document.getElementById("btnCopiar");
let msjNoEncontrado = document.getElementById("msjNoEncontrado")

function encriptar() {

    if (textAreaEntrada.value) {
        let cadena = Array.from(textAreaEntrada.value);
        textAreaEntrada.value = "";
        let textoSalida = [];
        for (let letra of cadena) {
            switch (letra) {
                case "a":
                    textoSalida.push("ai");
                    break;
                case "e":
                    textoSalida.push("enter");
                    break;
                case "i":
                    textoSalida.push("imes");
                    break;
                case "o":
                    textoSalida.push("ober");
                    break;
                case "u":
                    textoSalida.push("ufat");
                    break;
                default:
                    textoSalida.push(letra);
                    break;
            }
        }
        textAreaSalida.style.backgroundImage = "none";
        btnCopiar.style.display = "block";
        msjNoEncontrado.style.display = "none"
        let textoEncriptado = textoSalida.join('');
        textAreaSalida.value = textoEncriptado;
    }
}

function desencriptar() {
    if (textAreaEntrada.value) {
        textAreaSalida.value = textAreaEntrada.value.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
        textAreaEntrada.value = "";
    }
}

async function copiar() {
    let mensaje = document.getElementById("salida").value;
    try {
        await navigator.clipboard.writeText(mensaje);
        alert("texto de mensaje copiado");
    } catch (error) {
        console.error("Error al copiar ", error);
        alert("No se pudo copiar texto de mensaje");
    }
}

function validar(event) {
    let pat = /^[a-z ]+$/;
    if (pat.test(event.key)) {
        return true;
    } else {
        alert("Solo debe introducir letras en minuscula sin acentos ni caracteres especiales");
        return false;
    }
}