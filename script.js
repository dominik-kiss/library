
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

    let table = document.createElement("table");

    for (const [key, value] of Object.entries(book)) {
        if (key == "info") {
            break;
        }
        let tr = table.insertRow();

        let td1 = tr.insertCell();
        let text1 = document.createTextNode(key);
        td1.appendChild(text1);
        
        let td2 = tr.insertCell();
        let text2 = document.createTextNode(value);
        td2.appendChild(text2);
    }
    card.appendChild(table);
    cardsContainer.appendChild(card);
});