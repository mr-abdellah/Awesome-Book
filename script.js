const booksContainer = document.querySelector('.books-container');

function bookCreator({title, author}) {
    return `
    <div class="book">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <button type="submit" id="removeBtn">Remove</button>
        <hr>
    </div>
    `;
}

let books = [
    {
        title : 'favour book',
        author : 'favour',
    },
    {
        title : 'abdullah book',
        author : 'abdullah',
    },
    {
        title : 'favour book',
        author : 'favour',
    },
]
let booksHtml = books.map((book) => bookCreator(book)).join('');
booksContainer.innerHTML = booksHtml;

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', ()=>{
    let myBook = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
    };
    books.push(myBook);
    booksHtml = books.map((book) => bookCreator(book)).join('');
    booksContainer.innerHTML = booksHtml;
});
