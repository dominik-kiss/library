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
    let readButtons;

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
        readButtons = cardsContainer.querySelectorAll(".read, .not-read");
        
        cancelButtons.forEach(button => button.addEventListener("click", removeCard));
        readButtons.forEach(button => button.addEventListener("click", switchRead));
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

    function switchRead() {
        let index = [...cardsContainer.children].indexOf(this.parentElement);
        let thisObject = myLibrary[index];
        thisObject.read = !thisObject.read;
        thisObject.readText = thisObject.read ? "Read":"Not read";
        thisObject.readStyle = thisObject.read ? "read":"not-read";
        render();
    }

})();