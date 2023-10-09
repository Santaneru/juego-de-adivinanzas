let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const hint = document.getElementById('hint');

    if (userGuess === randomNumber) {
        hint.textContent = "¡Correcto! ¡Ese es el número!";
        hint.style.color = 'green';
    } else if (userGuess < randomNumber) {
        hint.textContent = "El número es mayor. ¡Intenta de nuevo!";
        hint.style.color = 'red';
    } else {
        hint.textContent = "El número es menor. ¡Intenta de nuevo!";
        hint.style.color = 'red';
    }
}
