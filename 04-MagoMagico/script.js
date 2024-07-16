function preguntar() {
    var pregunta = document.getElementById('preguntaEntrada')
    var respuesta = document.getElementById('respuestaMagica')

    var preguntaTexto = pregunta.value.trim()
    if (preguntaTexto.length === 0) {
        alert('Por favor, escribe una pregunta')
        return
    }

    var respuestas = [
        "Si.",
        "No.",
        "Puede ser.",
        "Tal vez.",
        "Probablemente no.",
        "Probablemente si.",
        "Definitivamente no.",
        "Definitivamente si.",
        "No te lo diré en este momento.",
    ]

    respuesta.textContent = 'Estoy viendo el futuro...'

    setTimeout(function () {
        var randomIndex = Math.floor(Math.random() * respuestas.length)
        var randomRespuesta = respuestas[randomIndex]
        respuesta.textContent = randomRespuesta
        pregunta.focus()
    }, 1500)

}