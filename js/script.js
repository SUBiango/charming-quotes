const quoteContainer = document.querySelector('[data-quote-container]');
const quoteAuthor = document.querySelector('[data-quote-author]');
const quoteBtn = document.querySelector('[data-quote-btn]');


let quotes = []
let currentIndex = 0

quoteBtn.addEventListener('click', () => {
    displayNextQuote()
})

function displayNextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    const quote = quotes[currentIndex];
    quoteContainer.innerHTML = `<div>${quote.text}</div>`
    quoteAuthor.innerHTML = `<em>~ ${quote.author}</em>`
}

fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then((data) => {
        quotes = data
        displayNextQuote()
    })