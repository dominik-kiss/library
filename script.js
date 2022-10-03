// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

(function() {
    
    let myLibrary = {
        myLibrary: [
            {
                "title": "The Hobbit",
                "author": "J.R.R. Tolkien",
                "pages": 295,
                "read": true
            },
            {
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "pages": 250,
                "read": false
            },
            {
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "pages": 275,
                "read": false
            },
            {
                "title": "Beloved",
                "author": "Toni Morrison",
                "pages": 150,
                "read": true
            },
            {
                "title": "Example",
                "author": "Authorexample",
                "pages": 84,
                "read": true
            }
        ],
        init: function() {
            this.cacheDOM();
            this.render();
        },
        cacheDOM: function() {
            this.cardsContainer = document.querySelector("#cards-container");
            this.template = this.cardsContainer.querySelector("#card-template").innerHTML;
        },
        render: function() {
            this.myLibrary.forEach((book) => {
                console.log(book);
                this.cardsContainer.innerHTML = Mustache.render(this.template, book);
            });
        }
    };

    myLibrary.init();
})();




// let cancelButtons = document.querySelectorAll(".close-button").forEach(button => button.addEventListener("click", removeBook));
// document.querySelectorAll(".read, .not-read").forEach(button => button.addEventListener("click", switchRead));

// // Form

// document.getElementById("add-button").addEventListener("click", toggleForm);
// document.getElementById("form-close").addEventListener("click", toggleForm);

// function toggleForm() {
//     document.getElementById("add-form").classList.toggle("hidden");
// }

// // Create a card for each 'Book' object in the array

// const cardsContainer = document.getElementById("cards-container");

// function updateDisplay() {
//     cardsContainer.replaceChildren();
//     myLibrary.forEach((book, index) => {
//         let card = document.createElement("div");
//         card.className = "card";
//         card.id = index;
    
//         let cancel = document.createElement("i");
//         cancel.innerHTML = "close";
//         cancel.className = "material-icons close-button";
//         card.appendChild(cancel);
    
//         for (const [key, value] of Object.entries(book)) {
//             if (key == "read") {
//                 let readButton = document.createElement("button");
//                 readButton.innerHTML = value ? "Read" : "Not read";
//                 readButton.className = value ? "read" : "not-read";
//                 card.appendChild(readButton);
//                 break;
//             }
//             else {
//                 let p = document.createElement("p");
//                 switch (key) {
//                     case "author":
//                         p.innerHTML = "by " + value;
//                         break;
//                     case "pages":
//                         p.innerHTML = value + " pages";
//                         break;
//                     default:
//                         p.innerHTML = value;
//                         break;
//                 }
//                 p.classList += key;
//                 card.appendChild(p); 
//             }
//         }
//         cardsContainer.appendChild(card);
//     });
//     updateLog();
//     cancelButtons = document.querySelectorAll(".close-button").forEach(button => button.addEventListener("click", removeBook));
//     document.querySelectorAll(".read, .not-read").forEach(button => button.addEventListener("click", switchRead));
// }

// updateDisplay();


// // Remove book object from array, and card element from display

// function removeBook() {
//     myLibrary.splice(this.parentElement.id, 1);
//     updateDisplay();
// }

// // Switch the class and text content of the 'Read/Not read' button after clicking on it

// function switchRead() {
//     this.className = this.className == "read" ? "not-read" : "read";
//     this.innerHTML = this.innerHTML == "Read" ? "Not read" : "Read";
//     myLibrary[this.parentElement.id].read = !myLibrary[this.parentElement.id].read;
//     updateLog();
// }


// // Update the statistics in the top right

// function updateLog() {
//     document.getElementById("total-num").innerHTML = `Your books: ${myLibrary.length}`;
//     document.getElementById("read-num").innerHTML = `Read: ${document.querySelectorAll(".read").length}`;
//     document.getElementById("not-read-num").innerHTML = `Not yet read: ${document.querySelectorAll(".not-read").length}`;
// }
