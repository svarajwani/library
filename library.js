const myLibrary = [];

class Book{
    constructor (title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//iterate through array of books and display each on the page
function displayBooks(){
    container = document.querySelector(".container");
    indexCounter = 0;
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }

    myLibrary.forEach((book) =>{
        const card = document.createElement("div");

        card.setAttribute("data-index", indexCounter);
        indexCounter++;

        card.classList.add('card');
        container.appendChild(card);

        const title = document.createElement("div");
        title.classList.add('title');
        title.textContent = book.title;
        card.appendChild(title);

        const authorHeading = document.createElement("div");
        authorHeading.classList.add("info-heading");
        authorHeading.textContent = "Author:";
        card.appendChild(authorHeading);

        const author = document.createElement("div");
        author.classList.add("info");
        author.textContent = book.author;
        authorHeading.appendChild(author);

        const pagesHeading = document.createElement("div");
        pagesHeading.classList.add("info-heading");
        pagesHeading.textContent = "Pages:";
        card.appendChild(pagesHeading);
        
        const pages = document.createElement("div");
        pages.classList.add("info")
        pages.textContent = book.pages;
        pagesHeading.appendChild(pages);
        
        const statusHeading = document.createElement("div");
        statusHeading.classList.add("info-heading");
        statusHeading.classList.add("status-heading");
        statusHeading.textContent = "Status:"
        card.appendChild(statusHeading);

        let read = document.createElement("div");
        read.classList.add("info");
        if(book.read === "true"){
            read.textContent = "Read";
        }
        else {
            read.textContent = "Not read yet";
        }
        statusHeading.appendChild(read);

        //toggle read/unread status by clicking on status div
        statusHeading.addEventListener("click", () => {
            let cardIndex = removeCardButton.parentNode.getAttribute("data-index");
            let currentCard = myLibrary[cardIndex];
            if (currentCard.read === "true"){
                currentCard.read = "false";
            }
            else{
                currentCard.read = "true";
            }
            displayBooks();
        })

        const removeCardButton = document.createElement("button");
        removeCardButton.textContent = "Remove";
        removeCardButton.classList.add("remove-card");
        card.appendChild(removeCardButton);

        //function for removing books from library when 'remove' is clicked
        removeCardButton.addEventListener("click", () => {
            let cardIndex = removeCardButton.parentNode.getAttribute("data-index");
            myLibrary.splice(cardIndex, 1);
            displayBooks();
            }
        );
    });
}

//show modal when "Add Book" button is pressed
const modal = document.querySelector("dialog");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
openModal.addEventListener("click", () => {
    modal.showModal();
});
closeModal.addEventListener("click", () => {
    modal.close();
})

//prevent modal form from submitting data to server and instead display as another book in the html
const addBookForm = document.querySelector(".add-book");
addBookForm.addEventListener("submit", (event) => {

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const statuses = document.querySelectorAll('input[name="status"]')
    let actualStatus = "";

    statuses.forEach((status) => {
        if (status.checked){
            actualStatus = status.value;
        }
    });

    event.preventDefault();

    newBook = new Book(title, author, pages, actualStatus);
    myLibrary.push(newBook);
    displayBooks();
    addBookForm.reset();
    modal.close();
});

displayBooks();

