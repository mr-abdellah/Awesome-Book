let myBooks = [];
let storage = [];

const booksContainer = document.querySelector('.books-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#add');

const addSection = document.querySelector('.add-book');
const containerOfAddedBooks = document.querySelector('.container');
const contact = document.querySelector('.contact');

const navList = document.querySelector('#navList');
navList.addEventListener('click', (e) => {
  e.preventDefault();
  addSection.style.display = 'none';
  contact.style.display = 'none';
  containerOfAddedBooks.style.display = 'flex';
});

const navAdd = document.querySelector('#navAdd');
navAdd.addEventListener('click', (e) => {
  e.preventDefault();
  containerOfAddedBooks.style.display = 'none';
  contact.style.display = 'none';
  addSection.style.display = 'flex';
});

const navContact = document.querySelector('#navContact');
navContact.addEventListener('click', (e) => {
  e.preventDefault();
  containerOfAddedBooks.style.display = 'none';
  addSection.style.display = 'none';
  contact.style.display = 'flex';
});

storage = JSON.parse(localStorage.getItem('books')) || [];

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    this.add = localStorage.setItem('books', JSON.stringify(myBooks));
  }

  remove() {
    myBooks = myBooks.filter((element) => element !== this);
    localStorage.setItem('books', JSON.stringify(myBooks));
  }

  static emptyField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

function addBook(book, title, author) {
  book.title = title;
  book.author = author;

  const bookContainer = document.createElement('div');
  const bookInfo = document.createElement('h2');
  const deleteButton = document.createElement('button');

  bookContainer.classList.add('bookContainer');
  bookInfo.classList.add('bookTitle');
  deleteButton.classList.add('delete');

  booksContainer.appendChild(bookContainer);
  bookContainer.appendChild(bookInfo);
  bookContainer.appendChild(deleteButton);

  bookInfo.textContent = ` ${title} by ${author}`;
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    book.remove();
  });

  const ul = booksContainer.style;
  const li = bookContainer.style;
  bookInfo.style.marginLeft = '2%';
  bookInfo.style.whiteSpace = 'nowrap';
  ul.width = '75%';
  ul.display = 'flex';
  ul.flexDirection = 'column';
  li.width = '100%';
  li.display = 'flex';
  li.justifyContent = 'space-between';
  li.alignItems = 'center';
  li.marginTop = '2%';
  li.marginBottom = '2%';
  li.border = '2px solid black';
  deleteButton.style.marginRight = '2%';
}

for (let i = 0; i < storage.length; i += 1) {
  const book = new Books();
  book.title = storage[i].title;
  book.author = storage[i].author;
  myBooks.push(book);
  addBook(myBooks[i], myBooks[i].title, myBooks[i].author);
}

addBtn.addEventListener('click', () => {
  const book = new Books();
  myBooks.push(book);
  addBook(book, title.value, author.value);
  book.add();
  Books.emptyField();
});