const RANDOM_QUOTABLE_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteIn');

quoteInputElement.addEventListener('input', () => {
    // console.log('CHANGES MADE')
    const arrQuote = quoteDisplayElement.querySelectorAll('span');
    
})

function getRandomQuote(){
    return fetch(RANDOM_QUOTABLE_API_URL) // fetch from quotable and return Promises
        .then(response => response.json()) //convert to json
        .then(data => data.content)
}

async function renderNewQuote() { //async: a fnc always return a Promise
    const quote = await getRandomQuote(); // wait until the promise resolves (*)
    quoteDisplayElement.innerHTML = '';
    // Loop thru each individual Character of quoteDisplay
    quote.split('').forEach(character => {
        // each span is an individual character
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;

        quoteDisplayElement.appendChild(characterSpan);
    });
    quoteInputElement.innerText = null;
}

renderNewQuote();