// Retrieve books from localStorage or initialize an empty array
const books = JSON.parse(localStorage.getItem('books')) || [];

// Function to display the books in the collection
function displayBooks() {
  const booksDiv = document.getElementById('books');
  booksDiv.innerHTML = ''; // Clear the booksDiv before displaying the books

  if (books.length === 0) {
    booksDiv.textContent = 'No books in the collection.';
    return;
  }

  // Function to remove a book from the collection
  const removeBook = (index) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  };

  books.forEach((book, index) => {
    booksDiv.innerHTML += `<h2>All Books</h2>
    <div class="book">
    
        <span class="book-title">${book.title}</span>
        <span class="book-author">by ${book.author}</span>
        <button class="remove-button" type="button" data-index="${index}">Remove</button>
      </div>`;
  });

  // Add event listeners to the Remove buttons
  const removeButtons = document.getElementsByClassName('remove-button');
  Array.from(removeButtons).forEach((button, index) => {
    button.addEventListener('click', () => {
      removeBook(index);
    });
  });
}

// Function to add a new book to the collection
function addBook(title, author) {
  const book = {
    title,
    author,
  };

  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Event listener for the add book form
const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');

  addBook(titleInput.value, authorInput.value);

  titleInput.value = '';
  authorInput.value = '';
});

// Display the books initially
displayBooks();
