const myLibrary = [];
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(){
    container = document.querySelector(".container");
    myLibrary.forEach((book) =>{
        const card = document.createElement("div");
        card.classList.add('card');
        const title = document.createElement("div");
        title.classList.add('title');
        title.textContent = book.title;
        card.appendChild(title);
        container.appendChild(card);
    })
}

const bookExample = new Book("Techniques", "CringeCamTV", 35, true);
myLibrary.push(bookExample);
displayBooks();