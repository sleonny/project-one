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
      
   
      var quoteElement = document.getElementById('quote');
      quoteElement.textContent = quote;
      var authorElement = document.getElementById('author');
      authorElement.textContent = author;
     }) }

// Call the function to retrieve a random quote
getRandomQuote();

var button = document.getElementById('search');

button.addEventListener('click', function() {
  // Call your function here
  getDefinition();
});


function getDefinition() {
  console.log("getDefinition function called"); 
     var word = document.getElementById('search').value;
     console.log(`word value: ${word}`);
    var urlDictionary = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
    console.log(urlDictionary);
    fetch(urlDictionary)
    .then(response => response.json())
    .then(data => {
      var definitions = data[0].meanings[0].definitions;
      var definitionString = '';
      definitions.forEach(function(definition, index) {
        definitionString += `${index + 1}. ${definition.definition}\n`;
      });
      console.log(definitionString);
      var displayDefinition = document.getElementById('definition');
      displayDefinition.textContent = definitionString;
    })
    
    .catch(error => console.error(error));
}

   


var saveButton = document.querySelector('#quote-save-btn');
var input = document.querySelector('#input');



function saveData() {

localStorage.setItem("value", input.value);
var data = localStorage.getItem("value");
console.log(data);

}

saveButton.addEventListener("click", saveData);
      
      



        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
          var instances = M.Modal.init(elems, options);
        });
          
              
      
      