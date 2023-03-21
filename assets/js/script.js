
function getRandomQuote() {
    // Set the API endpoint URL
    var urlQuote = "https://quote-garden.onrender.com/api/v3/quotes/random";
  
    // Send the HTTP GET request to the API endpoint
    fetch(urlQuote)
      .then(response => response.json())
      .then(data => {
        // Print the quote to the console
        var quote = data.data[0];
        console.log(`${quote.quoteText} - ${quote.quoteAuthor}`);
     
     var resultsDiv = document.getElementById('quote-search');
     var quoteText = document.createElement('p');
     quoteText.innerHTML = quote.quoteText;
     var quoteAuthor = document.createElement('p');
     quoteAuthor.innerHTML = quote.quoteAuthor;
     resultsDiv.appendChild(quoteText);
     resultsDiv.appendChild(quoteAuthor);
       }) }
  
  // Call the function to retrieve a random quote
  getRandomQuote();


      
  function getDefinition() {
     
    searchForm.addEventListener('submit', event => {
      event.preventDefault(); 
      const searchForm = document.getElementById('search-form');
      var searchTerm = document.getElementById('search-input').value;
      var urlDictionary = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(searchTerm)}`;
      fetch(urlDictionary)
      .then(response => response.json())
      .then(data => {
        // Get Definition of Word
        var definition = data.data[0];
        console.log(definition);
      })
      .catch(error => console.error(error));
  })}
  
  getDefinition();
  
  




//BELOW NEED TO BRACKET AND ATTACH HTML ELEMENT TO END OF DOCUMENT.
    displayResults(data) 
        var word = data.word;
        var displayWord = document;
        var orgin = data.orgin;
        var displayOrgin = document;
        var meanings = data.meanings;
        var displayMeanings = document;
        var partOfSpeech = data.partOfSpeech;
        var displaypartofSpeech = document;
    

