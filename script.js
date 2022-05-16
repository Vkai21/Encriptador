var entradaTexto = document.querySelector(".mensaje2");
    entradaTexto.focus();
var respuesta = document.querySelector(".input-text2");


function botonEncriptar() {

    var textoEncriptado = encriptar(entradaTexto.value);
    respuesta.value = textoEncriptado;
}

function encriptar(txtEncript) {

    var codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    txtEncript = txtEncript.toLowerCase();

    for (var i = 0; i < codigos.length; i++) {

        if (txtEncript.includes(codigos[i][0])) {
            txtEncript = txtEncript.replaceAll(codigos[i][0],codigos[i][1])
        }
    }
    entradaTexto.value = "";
    return txtEncript
}




function botonDesencriptar() {

    var textoEncriptado2 = encriptar2(entradaTexto.value);
    respuesta.value = textoEncriptado2;
}

function encriptar2(txtDesencript) {

    var codigos2 = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    txtDesencript = txtDesencript.toLowerCase();

    for (var i = 0; i < codigos2.length; i++) {

        if (txtDesencript.includes(codigos2[i][1])) {
            txtDesencript = txtDesencript.replaceAll(codigos2[i][1],codigos2[i][0])
        }
    }
    entradaTexto.value = "";
    return txtDesencript
}


function copiarTxt() {

    var content2 = document.querySelector(".mensaje2");
    var content1 = document.querySelector(".input-text2");

    content1.select();
    document.execCommand("copy");

    alert("Texto Copiado!");
    if (copiarTxt=true){
        content2.value = "";
        content2.focus();
    }
   
}
