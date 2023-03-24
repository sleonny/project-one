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
    
   
}

  // Get the modal element
var modal = document.getElementById('modal1');

// Get the button that opens the modal
var mbtn = document.querySelector('.modal-trigger');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('modal-close')[0];

// When the user clicks the button, open the modal
mbtn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
 


var saveButton = document.querySelector('#quote-save-btn');
var input = document.querySelector('#input');
var para = document.querySelector('#saved-data');

para.innerHTML = localStorage.getItem("value");

function saveData() {

localStorage.setItem("value", input.value);
var data = localStorage.getItem("value");
console.log(data);

}
function displayData() {
  
  localStorage.setItem("value", input.value);
  localStorage.getItem("value");
  para.innerHTML = localStorage.getItem("value");


}

saveButton.addEventListener("click", function(){
  saveData()
  displayData()
});
      
      



       
          