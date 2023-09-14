const myLibrary = [
    {title:'The Hobbit', author:'Tolkien', pages: 295, status: 'not-read', index: 0},
    {title:'The Hob', author:'kien', pages: 29, status: 'read', index: 1}
];
const addBookBtn = document.getElementById('add-book');
const dialogBox = document.getElementById('form-dialog');
const bookList = document.getElementById('books-show');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readingStatus = document.getElementById('status');

function Book(title, author, pages, status, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.index = index;
}

function addBookToLibrary(){
    dialogBox.open =  true;
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
        let readStatus = readingStatus.checked ? 'read': 'not-read';
        let bookIndex = myLibrary.length == 0 ? 0 : myLibrary.length;
        let newBook = new Book(title.value,author.value, parseInt(pages.value),readStatus,bookIndex);
        myLibrary.push(newBook);  
        console.log(myLibrary)  ;
        dialogBox.open = false;
        createCard(newBook);
        // clearFields();
    })
}

addBookBtn.addEventListener('click',addBookToLibrary);

console.log(myLibrary)

function clearFields(){
    title.value = '';
    author.value = '';
    pages.value = '';
    readingStatus.checked = false;
}

function createCard(book){
    const card = document.createElement('div');
    card.className = 'cards';
    const title = document.createElement('div');
    title.innerText = book.title;
    const author = document.createElement('div');
    author.innerText = book.author;
    const pages = document.createElement('div');
    pages.innerText = `${book.pages} pages`;
    const remove = document.createElement('button');
    remove.classList = 'remove';
    remove.innerText = 'Remove';
    const staus = document.createElement('button');
    staus.classList = `${book.status}`;
    let inner = book.status === 'read' ? 'Ready' : "Not Ready";
    staus.innerText = `${inner}`;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(staus)
    card.appendChild(remove)
    bookList.appendChild(card);
}

document.addEventListener('DOMContentLoaded',()=>{
    myLibrary.forEach((book)=>createCard(book));
})