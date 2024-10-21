const myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.toggleRead = function() {
    this.read = !this.read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function removeBookFromLibrary(book) {
  const bookIdx = myLibrary.indexOf(book);
  myLibrary.splice(bookIdx, 1);
}
