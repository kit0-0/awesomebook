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