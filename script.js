let books = [];

const booksContainer = document.querySelector('.books-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

title.value = window.localStorage.getItem('Title');
author.value = window.localStorage.getItem('Author');

function Book() {
  this.title = 'title';
  this.author = 'author';
}

const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
  const newBook = Object.create(Book.prototype);

  newBook.title = title.value;
  newBook.author = author.value;

  window.localStorage.setItem('Title', title.value);
  window.localStorage.setItem('Author', author.value);

  books.push(newBook);

  const bookContainer = document.createElement('article');
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

  bookTitle.textContent = title.value;
  bookAuthor.textContent = `Author: ${author.value}`;
  deleteButton.textContent = 'Delete';

  bookContainer.style.borderBottom = '1px solid black';
  bookContainer.style.width = '500px';
  bookContainer.style.height = '200px';
  bookContainer.style.padding = '10px';
  bookContainer.style.marginLeft = '10px';
  bookContainer.style.marginBottom = '40px';

  deleteButton.addEventListener('click', () => {
    bookContainer.remove();
    books = books.filter((element) => element !== newBook);
  });
});