// Define calculateBMI globally
function calculateBMI() {
    console.log('calculateBMI called');
    const weight = parseFloat(document.getElementById('poids').value);
    const height = parseFloat(document.getElementById('taille').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('resultat').innerText = 'Veuillez entrer des valeurs valides pour le poids et la taille.';
        return;
    }

    const bmi = weight / (height * height);
    let resultMessage = '';
    if (bmi < 18.5) {
        resultMessage = 'Sous-poids';
    } else if (bmi < 25) {
        resultMessage = 'Poids normal';
    } else if (bmi < 30) {
        resultMessage = 'Surpoids';
    } else {
        resultMessage = 'Obésité';
    }

    document.getElementById('resultat').innerText = `Votre IMC est ${bmi.toFixed(2)}. ${resultMessage}.`;
}

document.addEventListener('deviceready', function () {
    // Wait for the DOM to be fully loaded before attaching the event listener
    document.addEventListener('DOMContentLoaded', function () {
        // Attach the calculateBMI function to the button click event
        document.querySelector('button').addEventListener('click', calculateBMI);
    });
});
