const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const letraOriginal = matrizCodigo[i][0];
        const encriptacion = matrizCodigo[i][1];
        const regex = new RegExp(letraOriginal, "g");
        stringEncriptada = stringEncriptada.replace(regex, encriptacion);
    }

    return stringEncriptada;
}

function desencriptar(stringEncriptada) {
    const matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const encriptacion = matrizCodigo[i][0];
        const letraOriginal = matrizCodigo[i][1];
        const regex = new RegExp(encriptacion, "g");
        stringEncriptada = stringEncriptada.replace(regex, letraOriginal);
    }

    return stringEncriptada;
}

function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function validarEntrada(texto) {
    return /^[a-z\s]*$/.test(texto);
}

function limpiarCampos() {
    textArea.value = "";
    mensaje.style.backgroundImage = ""; // Restaura la imagen de fondo si la hay
}

function procesarTexto(texto, operacion) {
    if (validarEntrada(texto)) {
        const resultado = operacion === 'encriptar' ? encriptar(texto) : desencriptar(texto);
        limpiarCampos();
        mensaje.value = resultado;
        mensaje.style.backgroundImage = "none";
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
    }
}

function btmEncriptar() {
    procesarTexto(textArea.value, 'encriptar');
}

function btmDesencriptar() {
    procesarTexto(mensaje.value, 'desencriptar');
}

document.querySelector(".copiar").addEventListener("click", copiarTexto);