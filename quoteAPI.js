const quoteText = document.querySelector('.quote-text')
const newQuoteBtn = document.querySelector('.new-quote-btn')

newQuoteBtn.addEventListener('click', getQuote)
getQuote()

function getQuote() {
  fetch('https://icanhazdadjoke.com/',{
    headers: {
      'Accept' : 'application/json'
    }
    
}).then(function(response) {
  return response.json()
}).then(function(data) {
  const quote = data.quote
  quoteText.innerText = quote
})

}