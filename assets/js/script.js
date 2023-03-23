
function getRandomQuote() {
  // Set the API endpoint URL
  var urlQuote = "https://quote-garden.onrender.com/api/v3/quotes/random";

  // Send the HTTP GET request to the API endpoint
  fetch(urlQuote)
    .then(response => response.json())
    .then(data => {
      // Print the quote to the console
      var quote = data.data[0].quoteText;
      var author = data. data[0].quoteAuthor;
      console.log(`${quote}`);
      


var button = document.getElementById('search');

button.addEventListener('click', function() {
  // Call your function here
  getDefinition();
});




var saveButton = document.querySelector('#quote-save-btn');
var input = document.querySelector('#input');



function saveData() {


}

saveButton.addEventListener("click", saveData);


