Encriptador de Textos con Imagen de Placeholder

Este proyecto es una aplicación web sencilla que permite encriptar y desencriptar texto utilizando reglas específicas de sustitución de caracteres. Además, muestra una imagen de marcador de posición (placeholder) cuando no se ha ingresado ningún texto. Una vez que se ingresa y procesa el texto, la imagen desaparece y se muestra el resultado junto con un botón para copiar el texto al portapapeles.

Características

Encriptación y Desencriptación: Usa reglas de sustitución para encriptar y desencriptar el texto ingresado.
Imagen Placeholder: Muestra una imagen de placeholder cuando el área de texto está vacía. La imagen desaparece cuando se procesa el texto.
Botón de Copiar: Permite copiar el resultado encriptado o desencriptado al portapapeles.

Estructura del Código

Funciones Principales

togglePlaceholderImage(text): Muestra u oculta la imagen de placeholder, el área de resultado y el botón de copiar en función de si el área de texto está vacía o no.
encryptText(): Encripta el texto ingresado en el campo de entrada y actualiza el campo de resultado. También llama a togglePlaceholderImage(text) para gestionar la visibilidad de la imagen.
decryptText(): Desencripta el texto ingresado en el campo de entrada y actualiza el campo de resultado. También llama a togglePlaceholderImage(text) para gestionar la visibilidad de la imagen.
encrypt(text): Aplica las reglas de encriptación al texto ingresado.
decrypt(text): Aplica las reglas de desencriptación al texto ingresado.
copyToClipboard(): Copia el contenido del campo de resultado al portapapeles.

Reglas de Encriptación y Desencriptación

Reglas de encriptación: Las vocales son reemplazadas por secuencias de caracteres específicos ('e' por 'enter', 'i' por 'imes', 'a' por 'ai', 'o' por 'ober', y 'u' por 'ufat').
Reglas de desencriptación: Son las inversas de las reglas de encriptación, convirtiendo las secuencias de caracteres de vuelta a las vocales originales.

Uso

Ingresar Texto: Escribe o pega el texto que deseas encriptar o desencriptar en el campo de entrada.
Seleccionar Acción: Elige entre encriptar o desencriptar el texto.
Procesar Texto: Haz clic en el botón correspondiente para procesar el texto.
Copiar al Portapapeles: Si lo deseas, copia el resultado al portapapeles utilizando el botón Copiar al portapapeles
