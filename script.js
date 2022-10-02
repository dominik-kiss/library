
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
addBookToLibrary("Example1", "Toni Morrison", 150, false);
addBookToLibrary("Example12", "Toni Morrison", 150, false);
addBookToLibrary("Example13", "Toni Morrison", 150, false);
addBookToLibrary("Example132", "Toni Morrison", 150, false);
addBookToLibrary("Example15", "Toni Morrison", 150, false);

const cardsContainer = document.getElementById("cards-container");

myLibrary.forEach((book, index) => {
    let card = document.createElement("div");
    card.className = "card";
    card.id = `card${index+1}`;

    let cancel = document.createElement("i");
    cancel.innerHTML = "close";
    cancel.className = "material-icons close-button";
    card.appendChild(cancel);

    for (const [key, value] of Object.entries(book)) {
        if (key == "read") {
            let readButton = document.createElement("button");
            readButton.innerHTML = value ? "Read" : "Not read";
            readButton.className = value ? "read" : "not-read";
            card.appendChild(readButton);
            break;
        }
        else {
            let p = document.createElement("p");
            switch (key) {
                case "author":
                    p.innerHTML = "by " + value;
                    break;
                case "pages":
                    p.innerHTML = value + " pages";
                    break;
                default:
                    p.innerHTML = value;
                    break;
            }
            p.classList += key;
            card.appendChild(p); 
        }
    }
    cardsContainer.appendChild(card);
    updateLog();
});

// Remove book object from array, and card element from display

let cancelButtons = document.querySelectorAll(".close-button").forEach(button => button.addEventListener("click", removeBook));

function removeBook() {
    myLibrary = myLibrary.filter((el) => el.title != this.nextElementSibling.innerHTML);
    cardsContainer.removeChild(document.getElementById(this.parentNode.id));
    updateLog();
}

document.querySelectorAll(".read, .not-read").forEach(button => button.addEventListener("click", switchRead));


// Switch the class and text content of the 'Read/Not read' button after clicking on it

function switchRead() {
    this.className = this.className == "read" ? "not-read" : "read";
    this.innerHTML = this.innerHTML == "Read" ? "Not read" : "Read";
    updateLog();
}


// Update the statistics in the top right

function updateLog() {
    document.getElementById("total-num").innerHTML = `Your books: ${myLibrary.length}`;
    document.getElementById("read-num").innerHTML = `Read: ${document.querySelectorAll(".read").length}`;
    document.getElementById("not-read-num").innerHTML = `Not yet read: ${document.querySelectorAll(".not-read").length}`;
}