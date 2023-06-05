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

  static initialize() {
    const bookManager = new BookManager();
    return bookManager;
  }
}

BookManager.initialize();