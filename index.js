const myLibrary = [];
const booksContainer = document.querySelector(".books-container");
const addBookButton = document.querySelector(".add-book-button");
console.log(addBookButton);
const removeBookButton = document.querySelector(".remove-book");

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.toggleRead = function() {
    this.read = !this.read;
  }
}

const bodyKeepsScore = new Book("the body keeps the score", "bessel van der kolk", "445", false);
const fourAgreements = new Book("the FOUR AGREEMENTS", "Don miguel Ruiz", "153", false);

function addBookToLibraryHTML(book) {
  myLibrary.push(book);

  const newBook = document.createElement("div");
  newBook.classList.add("book-container");

  const bookContent = document.createElement("div");
  bookContent.classList.add("book-content");
  newBook.appendChild(bookContent);

  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  bookTitle.innerText = book.title;
  bookContent.appendChild(bookTitle);

  const bookInfo = document.createElement("div");
  bookInfo.classList.add("book-info");
  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book-author");
  bookAuthor.innerText = book.author;
  const bookPages = document.createElement("div");
  bookPages.classList.add("book-num-pages");
  bookPages.innerText = `# of Pages: ${book.numPages}`;
  bookInfo.appendChild(bookAuthor);
  bookInfo.appendChild(bookPages);
  bookContent.appendChild(bookInfo);

  const bookRead = document.createElement("div");
  bookRead.classList.add("book-read");
  const bookReadLabel = document.createElement("label");
  bookReadLabel.setAttribute("for", "toggle-book-read");
  bookReadLabel.innerText = "Read?";
  const bookReadCheckbox = document.createElement("input");
  bookReadCheckbox.setAttribute("type", "checkbox");
  bookReadCheckbox.id = "toggle-book-read";
  bookRead.appendChild(bookReadLabel);
  bookRead.appendChild(bookReadCheckbox);
  newBook.appendChild(bookRead);

  const removeBookButton = document.createElement("button");
  removeBookButton.classList.add("remove-book");
  removeBookButton.innerText = "Remove";
  newBook.appendChild(removeBookButton);

  booksContainer.appendChild(newBook);
}

function removeBookFromLibrary(book) {
  const bookIdx = myLibrary.indexOf(book);
  myLibrary.splice(bookIdx, 1);
}

addBookButton.addEventListener("click", addBookToLibrary);