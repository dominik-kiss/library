
let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let readText = read ? "already read":"not read yet";
        return `${title} by ${author}, ${pages} pages, ${readText}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 250, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 275, true);
addBookToLibrary("Beloved", "Toni Morrison", 150, false);


myLibrary.forEach((book, index) => {
    const cardsContainer = document.getElementById("cards");
    let card = document.createElement("div");
    card.className = "card";
    card.id = `card${index+1}`;

    for (const [key, value] of Object.entries(book)) {
        if (key == "read") {
            let readButton = document.createElement("button");
            readButton.innerHTML = value ? "Read" : "Not read";
            card.appendChild(readButton);
            break;
        }
        else {
            let p = document.createElement("p");        
            p.innerHTML = value;
            card.appendChild(p); 
        }
    }
    cardsContainer.appendChild(card);
});


