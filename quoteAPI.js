

const messages = ['Hello!', 'How are you?', 'Good morning!', 'Nice to meet you.'];

const getQuote = document.querySelector('.new-quote-btn');
const messageContainer = document.querySelector('.quote-text');

getQuote.addEventListener('click', function() {
  // Get a random message from the array
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  // Display the random message in the message container
  messageContainer.textContent = randomMessage;
});