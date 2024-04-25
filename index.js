function inputText(id) {
    let valido = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let texto = document.querySelector('#inputEncrip').value;
    let textoCorrecto = true;

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (!valido.includes(letra) && letra !== ' ') {
            textoCorrecto = false;
            break; 
        }
    }

    if (!textoCorrecto) {
        document.querySelector('#inputEncrip').style.fontSize = "calc(1vw + 8px)";
        document.querySelector('#inputEncrip').value = "El texto no es válido, asegúrese de solo usar letras minúsculas del abecedario";
    } else {
        if (id === "encrip") {
            encriptado();
        }
        if (id === "desen") {
            desencriptado();
        }
    }
}


function borradoText() {
    let textarea = document.querySelector('#inputEncrip');
    textarea.addEventListener('click', function () {
        textarea.value = "";
    });
}

function encriptado(){
    let texto = document.querySelector('#inputEncrip').value;
    let cambio = ['a', 'e', 'i', 'o', 'u'];
    let cambiadas = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    for (let i = 0; i < texto.length; i++) {
        for (let o = 0; o <= 5; o++) {
            if (texto[i] === cambio[o]) {
                texto = texto.slice(0, i) + cambiadas[o] + texto.slice(i + 1);
                i += cambiadas[o].length - 1;
                break;
            }
        }
    }
    document.querySelector('#outEncrip').value = texto;
}

function desencriptado() {
    let textoEncriptado = document.querySelector('#inputEncrip').value;
    let cambiadas = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let cambio = ['a', 'e', 'i', 'o', 'u'];

    for (let o = 0; o < cambiadas.length; o++) {
        let regex = new RegExp(cambiadas[o], 'g'); // Crear expresión regular para buscar todas las ocurrencias de la letra cambiada
        textoEncriptado = textoEncriptado.replace(regex, cambio[o]); // Reemplazar todas las ocurrencias de la letra cambiada por la original
    }
    document.querySelector('#outEncrip').value = textoEncriptado;
}

function copy() {
    let texto = document.querySelector('#outEncrip');
    texto.select();
    document.execCommand('copy');
}


window.onload = function () {
    borradoText();
};
