function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}

var searchTerm = getQueryVariable('query');

if (searchTerm) {
  document.getElementById('search-box').setAttribute("value", searchTerm);

  var idx = lunr(function () {
    this.field('title');
  });

  for (var key in window.store) { // Add the data to lunr
    idx.add({
      'title': window.store[key].title
    });

    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
}

function displaySearchResults(results, store) {
  var searchResults = document.getElementById('search-results');

  if (results.length) { // Are there any results?
    var appendString = '';

    for (var i = 0; i < results.length; i++) {  // Iterate over the results
      var item = store[results[i].ref];
      appendString += '<li><h3>' + item.title + '</h3></li>';
    }

    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<li>No results found</li>';
  }
}
