const RANDOM_QUOTABLE_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteIn');

quoteInputElement.addEventListener('input', () => {
    // console.log('CHANGES MADE')
    const arrQuote = quoteDisplayElement.querySelectorAll('span'); // choose all splitted 'span'
    const arrValue = quoteInputElement.value.split(''); // split values of input
    // how does the machine knows these parameters' types??? -> ((HTMLspan, number, NodeList parent) ->...)
    arrQuote.forEach((characterSpan, index) => {
        const character = arrValue[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
        }
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }
        else {
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
        }

    });
    
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
        // each span is an individual character <span>
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        // shouldn't we add sth here?
        quoteDisplayElement.appendChild(characterSpan);
    });
    quoteInputElement.innerText = null;
}

renderNewQuote();