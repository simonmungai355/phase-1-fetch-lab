
// SIMONS CODE

// function fetchBooks() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then((resp)=>resp.json())
//   .then((json)=>renderBooks(json))

//   return fetch
// }

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });

// end code\
function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books') // Fetch the data and return the promise
      .then((response) => response.json()) // Convert the response to JSON
      .then((jsonData) => renderBooks(jsonData)) // Call renderBooks() with the JSON data
      .catch((error) => console.error('Error fetching books:', error));
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach((book) => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    fetchBooks();
  });
  
  





//   import fetch from 'node-fetch';

// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();

// console.log(data);