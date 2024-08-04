// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const results = document.getElementById('results');

    const handleEvent = (event) => {
        const buttonId = event.target.id;
        let text = textInput.value;

        switch(buttonId) {
            case 'countWords':
                const wordCount = countWords(text);
                results.textContent = `Word Count: ${wordCount}`;
                break;
            case 'toUpperCase':
                results.textContent = text.toUpperCase();
                break;
            case 'toLowerCase':
                results.textContent = text.toLowerCase();
                break;
            case 'findSubstring':
                const substring = prompt("Enter the substring to find:");
                const position = text.indexOf(substring);
                results.textContent = position !== -1 ? `Substring found at index: ${position}` : 'Substring not found';
                break;
        }
    };

    // Higher-order function to attach event listeners
    const attachEventListeners = (buttonIds, handler) => {
        buttonIds.forEach(id => {
            document.getElementById(id).addEventListener('click', handler);
        });
    };

    attachEventListeners(['countWords', 'toUpperCase', 'toLowerCase', 'findSubstring'], handleEvent);

    function countWords(text) {
        return text.trim().split(/\s+/).length;
    }
});
