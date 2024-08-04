document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    const textInput = document.getElementById('textInput');
    const lengthOutput = document.getElementById('lengthOutput');

    calculateButton.addEventListener('click', function() {
        const text = textInput.value;
        const lengthExcludingSpaces = text.replace(/\s+/g, '').length;
        lengthOutput.textContent = lengthExcludingSpaces;
    });
});
