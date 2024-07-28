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
        container.appendChild(card);

        const title = document.createElement("div");
        title.classList.add('title');
        title.textContent = book.title;
        card.appendChild(title);

        authorHeading = document.createElement("div");
        authorHeading.classList.add("info-heading");
        authorHeading.textContent = "Author:";
        card.appendChild(authorHeading);

        author = document.createElement("div");
        author.classList.add("info");
        author.textContent = book.author;
        authorHeading.appendChild(author);

        pagesHeading = document.createElement("div");
        pagesHeading.classList.add("info-heading");
        pagesHeading.textContent = "Pages:";
        card.appendChild(pagesHeading);
        
        pages = document.createElement("div");
        pages.classList.add("info")
        pages.textContent = book.pages;
        pagesHeading.appendChild(pages);
        
        statusHeading = document.createElement("div");
        statusHeading.classList.add("info-heading");
        statusHeading.textContent = "Status:"
        card.appendChild(statusHeading);

        read = document.createElement("div");
        read.classList.add("info");
        if(book.read === "true"){
            read.textContent = "Read";
        }
        else {
            read.textContent = "Not read yet";
        }
        statusHeading.appendChild(read);
    });
}

const modal = document.querySelector("dialog");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal")

openModal.addEventListener("click", () => {
    modal.showModal();
});


const bookExample1 = new Book("Techniques", "CringeCamTV", 35, "true");
myLibrary.push(bookExample1);
const bookExample2 = new Book("Techniques", "CringeCamTV", 35, "true");
myLibrary.push(bookExample2);
const bookExample3 = new Book("Techniques", "CringeCamTV", 35, "true");
myLibrary.push(bookExample3);

displayBooks();

