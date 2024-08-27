function togglePlaceholderImage(text) {
    const placeholderImage = document.getElementById('placeholder-image');
    const resultField = document.getElementById('result');
    const copyButton = document.querySelector('.right-section button');

    if (text.trim() === "") {
        placeholderImage.style.display = "block"; // Mostrar la imagen
        resultField.style.display = "none"; // Ocultar el área de texto
        copyButton.style.display = "none"; // Ocultar el botón de copiar
    } else {
        placeholderImage.style.display = "none"; // Ocultar la imagen
        resultField.style.display = "block"; // Mostrar el área de texto
        copyButton.style.display = "block"; // Mostrar el botón de copiar
    }
}

// Llamar a esta función cuando se hace clic en encriptar o desencriptar
function encryptText() {
    const text = document.getElementById('textInput').value;
    const result = encrypt(text);
    document.getElementById('result').value = result;
    togglePlaceholderImage(text); // Llamar a la función para verificar el texto
}

function decryptText() {
    const text = document.getElementById('textInput').value;
    const result = decrypt(text);
    document.getElementById('result').value = result;
    togglePlaceholderImage(text); // Llamar a la función para verificar el texto
}



// Reglas de encriptación
const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Inversión de las reglas de encriptación
const decryptionRules = Object.fromEntries(
    Object.entries(encryptionRules).map(([key, value]) => [value, key])
);

function encryptText() {
    const text = document.getElementById('textInput').value;
    const result = encrypt(text);
    document.getElementById('result').value = result;
    togglePlaceholderImage(result);
}

function decryptText() {
    const text = document.getElementById('textInput').value;
    const result = decrypt(text);
    document.getElementById('result').value = result;
    togglePlaceholderImage(result);
}

function encrypt(text) {
    return text.split('').map(char => encryptionRules[char] || char).join('');
}

function decrypt(text) {
    for (const [key, value] of Object.entries(decryptionRules)) {
        text = text.split(key).join(value);
    }
    return text;
}



function copyToClipboard() {
    const resultField = document.getElementById('result');
    resultField.select();
    document.execCommand('copy');
}

