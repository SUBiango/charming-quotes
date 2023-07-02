const quoteContainer = document.querySelector('[data-quote-container]');
const quoteAuthor = document.querySelector('[data-quote-author]');
const quoteBtn = document.querySelector('[data-quote-btn]');


let quotes = []

quoteBtn.addEventListener('click', () => {
    displayRandomQuote()
})

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex];
    quoteContainer.innerHTML = `<div>${quote.text}</div>`
    quoteAuthor.innerHTML = `<em>~ ${quote.author}</em>`
}

fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then((data) => {
        quotes = data
        displayRandomQuote()
    })