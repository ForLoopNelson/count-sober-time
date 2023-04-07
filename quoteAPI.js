

const messages = ['You can do this', 'It may be hard, but it is worth it!', 'Be kind to yourself', 'One day at a time.', 'No more Booze!!', 'It is never too late to quit.', 'It is okay not to drink', 'Find your peace', 'Be kind to yourself.','It is a good day to be sober.'];

const getQuote = document.querySelector('.new-quote-btn');
const messageContainer = document.querySelector('.quote-text');

getQuote.addEventListener('click', function() {
  // Get a random message from the array
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  // Display the random message in the message container
  messageContainer.textContent = randomMessage;
});