function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books")
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderBooks(data);
      })
      .catch(function (error) {
        console.error('Error fetching books:', error);
      });
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear previous content
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name; // Assuming 'name' is the property you want to display
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
  });
  