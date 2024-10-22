const myLibrary = [];
let bookIdx = myLibrary.length;
const booksContainer = document.querySelector(".books-container");
const addBookButton = document.querySelector(".add-book-button");
const removeBookButton = document.querySelector(".remove-book");
const addBookModal = document.querySelector(".add-book-modal");
const bookModalSubmit = document.querySelector("#add-book-modal-button");
const newBookTitle = document.querySelector("#add-book-title")
const newBookAuthor = document.querySelector("#add-book-author")
const newBookPages = document.querySelector("#add-book-pages")
const newBookRead = document.querySelector("#add-book-read")

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.toggleRead = function() {
    this.read = !this.read;
  }
}

const bodyKeepsScore = new Book("the body keeps the score", "bessel van der kolk", "445", true);
const fourAgreements = new Book("the FOUR AGREEMENTS", "Don miguel Ruiz", "153", false);

addBookToLibrary(bodyKeepsScore);
addBookToLibrary(fourAgreements);

function addBookToLibrary(book) {
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
  if (book.read) {
    bookReadCheckbox.checked = true;
  }
  bookRead.appendChild(bookReadLabel);
  bookRead.appendChild(bookReadCheckbox);
  newBook.appendChild(bookRead);

  const removeBookButton = document.createElement("button");
  removeBookButton.classList.add("remove-book");
  removeBookButton.innerText = "Remove";
  removeBookButton.setAttribute("data-idx", bookIdx);
  removeBookButton.addEventListener("click", (e) => {
    removeBookFromLibrary(removeBookButton.dataset.idx, e.target.parentElement)
  })
  newBook.appendChild(removeBookButton);
  bookIdx++;
  
  booksContainer.appendChild(newBook);
}

function removeBookFromLibrary(bookIdx, nodeToRemove) {
  myLibrary.splice(bookIdx, 1);
  bookIdx--;

  booksContainer.removeChild(nodeToRemove);
}

addBookButton.addEventListener("click", () => {
  addBookModal.showModal();
  newBookTitle.value = "";
  newBookAuthor.value = "";
  newBookPages.value = "";
  newBookRead.checked = false;
});

bookModalSubmit.addEventListener("click", (e) => {
  let validInput = false;
  const newTitle = newBookTitle.value
  const newAuthor = newBookAuthor.value
  const newPages = newBookPages.value;
  const newRead = newBookRead.checked;

  if (newBookTitle.value.length > 0 && newBookAuthor.value.length > 0 && +newBookPages.value > 0) {
    validInput = true;
  }

  if (validInput) {
    const newBookToAdd = new Book(newTitle, newAuthor, newPages, newRead);
    addBookToLibrary(newBookToAdd);
  } else {
    e.preventDefault();
  }
})