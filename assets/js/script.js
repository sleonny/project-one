function getRandomQuote() {
  var urlQuote = "https://quote-garden.onrender.com/api/v3/quotes/random";
        // Set the API endpoint URL
  fetch(urlQuote)
  .then(response => response.json())
  .then(data => {
        // Send the HTTP GET request to the API endpoint
      var quote = data.data[0].quoteText;
      var author = data. data[0].quoteAuthor;
      console.log(`${quote}`);

        // Console log the quote to make sure it is loading correctly

      var quoteElement = document.getElementById('quote');
      quoteElement.textContent = quote;
      var authorElement = document.getElementById('author');
      authorElement.textContent = author;

        // Create variables for data and manipulate the DOM to display them
     }) 
}

     }) }

// Call the function to retrieve a random quote
getRandomQuote();


getRandomQuote();
        // Call the function to retrieve a random quote

    var button = document.getElementById('search');
    button.addEventListener('click', function() {
    getDefinition();
});
        // Assigns a variable and event listener to button to call the function to the dictionary API

function getDefinition() {
      console.log("getDefinition function called"); 
        // Console log to ensure that the function is being called; part of troubleshooting
    var word = document.getElementById('search').value;
      console.log(`word value: ${word}`);
        // Console log to make sure that the value from the text field is being passed correctly; part of troubleshooting
    var urlDictionary = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
      console.log(urlDictionary);
        // Console log to make sure the url is working correctly; part of troubleshooting    
  fetch(urlDictionary)
  .then(response => response.json())
  .then(data => {
    var definitions = data[0].meanings[0].definitions;
    var definitionString = '';
        definitions.forEach(function(definition, index) {
        definitionString += `${index + 1}. ${definition.definition}\n`;
           // Fetch the data from the API and assign variables to the data strings; account for more than one definition.
      });
         
      console.log(definitionString);
          // Console log to make sure that the string is returning correctly and how expected
      var displayDefinition = document.getElementById('definition');
      displayDefinition.textContent = definitionString;
          // Manipulate the DOM to display the search results 
    })
}

  var modal = document.getElementById('modal1');
  var mbtn = document.querySelector('.modal-trigger');
  var span = document.getElementsByClassName('modal-close')[0];
          // Assign variables to navigate the DOM


mbtn.onclick = function() {
  modal.style.display = 'block';
}
         // Function to handle the modal button click

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

   


span.onclick = function() {
  modal.style.display = 'none';
}
        // Function to handle the close modal button click

var saveButton = document.querySelector('#quote-save-btn');
var input = document.querySelector('#input');
var para = document.querySelector('#saved-data');
        // Assign variables to navigate the DOM

para.innerHTML = localStorage.getItem("value");
        // Retrieve local storage


para.innerHTML = localStorage.getItem("value");


function saveData() {
    localStorage.setItem("value", input.value);
    var data = localStorage.getItem("value");
    console.log(data);
        // Function to save data to local storage
        // Console log to make sure data is being captured
}


function displayData() {
    localStorage.setItem("value", input.value);
    localStorage.getItem("value");
    para.innerHTML = localStorage.getItem("value");
        // Function to display saved local data on the DOM

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
      
      


saveButton.addEventListener("click", function(){
  saveData()
  displayData()
});
        // Function to handle the button click to save data
      




       
          