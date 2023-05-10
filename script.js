const ingresatexto = document.querySelector(".ingresa-texto")
const mensaje = document.querySelector(".mensaje")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(ingresatexto.value)
    mensaje.value = textoEncriptado
    ingresatexto.value = ""
    mensaje.style.backgroundImage = "none"
}

function encriptar(letraEncriptada){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    letraEncriptada = letraEncriptada.toLowerCase()

    for(i = 0; i< matrizcodigo.length; i++){
        if(letraEncriptada.includes(matrizcodigo[i][0])){
            letraEncriptada = letraEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return letraEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(ingresatexto.value)
    mensaje.value = textoEncriptado
    ingresatexto.value = ""
    
}

function desencriptar(letraDesencriptada){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    letraDesencriptada = letraDesencriptada.toLowerCase()

    for(i = 0; i< matrizcodigo.length; i++){
        if(letraDesencriptada.includes(matrizcodigo[i][1])){
            letraDesencriptada = letraDesencriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return letraDesencriptada
}

function copiaMensaje(){

    var contenido = document.querySelector('.mensaje');
    contenido.select();
    document.execCommand('copy');
    alert("Copiado!");
}




