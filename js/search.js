function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
        var appendString = '';

        for (var i = 0; i < results.length; i++) {  // Iterate over the results
            var item = store[results[i].ref];
            appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
            appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
        }
        searchResults.innerHTML = appendString;
    } else {
        searchResults.innerHTML = '<li>No results found</li>';
    }
}

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

var searchTerm = document.getQueryVariable('query');
document.getElementById('search-results').innerHTML = "<li>"+searchTerm+"</li>";
/*
if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    var idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('content');
        for (var key in window.store) { // Add the data to lunr
            this.add({
                'id': key,
                'title': window.store[key].title,
                'content': window.store[key].content,
                'url': window.store[key].url
            });
        });
    }
    var results = idx.search(searchTerm);
    displaySearchResults(results, window.store);
}*/
