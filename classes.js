class Books {
    constructor (title, author) {
        this.title = title;
        this.author = author;
    }
};

class Book {
    static displayBooks() {
        let booksList = [];

        const books = booksList;

        books.forEach((book) => Book.addBook(book));
    }

    static addBook(book) {

        // CREATE ELEMENTS

        const booksContainer = document.querySelector('.books-container');

        const bookContainer = document.createElement('li');
        const bookTitle = document.createElement('h2');
        const bookAuthor = document.createElement('p');
        const deleteButton = document.createElement('button');

        // GIVE EACH ELEMNT A CLASS
    
        bookContainer.classList.add('bookContainer');
        bookTitle.classList.add('bookTitle');
        bookAuthor.classList.add('bookAuthor');
        deleteButton.classList.add('delete');

        // APPEND ELEMENTS
    
        booksContainer.appendChild(bookContainer);
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(deleteButton);

        // CHANGE ELEMENTS TEXT CONTENT 

        bookTitle.textContent = book.title;
        bookAuthor.textContent = `Author: ${book.author}`;
        deleteButton.textContent = 'Delete';

        // Delete Book
        deleteButton.addEventListener('click', ()=> {
            bookContainer.remove();
        })
    }

    static emptyField() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
    }
}
