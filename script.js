

let myLibrary = (function() {

    let myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.readText = this.read ? "Read":"Not read";
        this.readStyle = this.read ? "read":"not-read";
    }

    function addBookToLibrary(title, author, pages, read) {
        myLibrary.push(new Book(title, author, pages, read));
    }


    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 250, true);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 275, true);
    addBookToLibrary("Beloved", "Toni Morrison", 150, false);
    

    // Cache DOM
    let cardsContainer = document.querySelector("#cards-container");
    let newBookButton = document.getElementById("add-button");
    let form = document.getElementById("add-form");
    let submitButton = form.querySelector("#submit-button");
    let cancelButtons;
    let titles;
    let authors;
    let pages;
    let reads;

    
    render();

    // Bind listeners that will not change

    newBookButton.addEventListener("click", toggleForm);
    formClose.addEventListener("click", toggleForm);
    submitButton.addEventListener("click", addCard);



    function render() {

        cardsContainer.innerHTML = Mustache.render('\
        {{#myLibrary}}\
        <div class="card">\
            <i class="material-icons close-button">close</i>\
            <p class="title">{{title}}</p>\
            <p class="author">{{author}}</p>\
            <p class="pages">{{pages}}</p>\
            <button class="{{readStyle}}">{{readText}}</button>\
        </div>\
        {{/myLibrary}}\
        ', { myLibrary: myLibrary });
        bindListeners();
    }

    function bindListeners() {

        // Cache newly created DOM elements
        cancelButtons = cardsContainer.querySelectorAll(".close-button");
        titles = cardsContainer.querySelectorAll(".title");
        authors = cardsContainer.querySelectorAll(".author");
        pages = cardsContainer.querySelectorAll(".pages");
        reads = cardsContainer.querySelectorAll(".read, .not-read");
        
        cancelButtons.forEach(button => button.addEventListener("click", removeCard));    
    }

    function toggleForm() {
        clearForm()
        form.classList.toggle("hidden");
    }

    function addCard() {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
        toggleForm();
        render();
    }

    function removeCard() {
        let index = [...cardsContainer.children].indexOf(this.parentElement);
        myLibrary.splice(index, 1);
        render();
    }

    function clearForm() {
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        readInput.checked = false;
    }

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
