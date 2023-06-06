class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.booksDiv = document.getElementById('books');
    this.addBookForm = document.getElementById('addBookForm');
    this.titleInput = document.getElementById('titleInput');
    this.authorInput = document.getElementById('authorInput');

    this.displayBooks();
    this.addEventListeners();
  }

  displayBooks() {
    this.booksDiv.innerHTML = '';

    if (this.books.length === 0) {
      this.booksDiv.textContent = 'No books in the collection.';
      return;
    }

    const removeBook = (index) => {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    };

    this.books.forEach((book, index) => {
      this.booksDiv.innerHTML += `<div class="book">
          <span class="book-title">${book.title}</span>
          <span class="book-author">by ${book.author}</span>
          <button class="remove-button" type="button" data-index="${index}">Remove</button>
        </div>`;
    });

    const removeButtons = document.getElementsByClassName('remove-button');
    Array.from(removeButtons).forEach((button, index) => {
      button.addEventListener('click', () => {
        removeBook(index);
      });
    });
  }

  addBook(title, author) {
    const book = {
      title,
      author,
    };

    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  addEventListeners() {
    this.addBookForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this.addBook(this.titleInput.value, this.authorInput.value);
      this.titleInput.value = '';
      this.authorInput.value = '';
    });
  }

  static initialize() {
    const bookManager = new BookManager();
    return bookManager;
  }
}

BookManager.initialize();