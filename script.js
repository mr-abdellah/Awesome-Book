let books = [];

const booksContainer = document.querySelector('.books-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

books = JSON.parse(localStorage.getItem('books')) || [];

function Book() {
  this.title = 'title';
  this.author = 'author';
}

function addBooks(newBook, title, author) {
  newBook.title = title;
  newBook.author = author;

  const bookContainer = document.createElement('li');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('p');
  const deleteButton = document.createElement('button');

  bookContainer.classList.add('bookContainer');
  bookTitle.classList.add('bookTitle');
  bookAuthor.classList.add('bookAuthor');
  deleteButton.classList.add('btn');
  deleteButton.classList.add('delete');

  booksContainer.appendChild(bookContainer);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(deleteButton);

  bookTitle.textContent = title;
  bookAuthor.textContent = `Author: ${author}`;
  deleteButton.textContent = 'Delete';

  bookContainer.style.borderBottom = '1px solid black';
  bookContainer.style.width = '500px';
  bookContainer.style.height = '200px';
  bookContainer.style.padding = '10px';
  bookContainer.style.marginLeft = '10px';
  bookContainer.style.marginBottom = '30px';

  deleteButton.addEventListener('click', () => {
    bookContainer.remove();
    books = books.filter((element) => element !== newBook);
    localStorage.setItem('books', JSON.stringify(books));
  });
}

for (let i = 0; i < books.length; i += 1) {
  addBooks(books[i], books[i].title, books[i].author);
}

const addBtn = document.getElementById('add').addEventListener('click', () => {
  const newBook = Object.create(Book.prototype);
  books.push(newBook);
  addBooks(newBook, title.value, author.value);
  localStorage.setItem('books', JSON.stringify(books));
});