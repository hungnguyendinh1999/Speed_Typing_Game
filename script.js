const RANDOM_QUOTABLE_API_URL = 'https://api.quotable.io/random'

function getRandomQuote(){
    fetch(RANDOM_QUOTABLE_API_URL) // fetch from quotable and return Promises
        .then(response => response.json()) //convert to json
        .then(data => data.content)
}

async function getNextQuote() { //async: a fnc always return a Promise
    const quote = await getRandomQuote // wait until the promise resolves (*)
    
}
