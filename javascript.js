const addBookButton = document.querySelector("#add-book-button");
const screenContainer = document.querySelector(".screen-container");
let counter = 0;

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addBookButton.addEventListener("click", createBookInputField);

function createBookInputField(event) {
  if (counter == 0) {
    const form = document.createElement("form");
    form.className = "add-book-form";
    const addBookContainer = document.createElement("div");
    addBookContainer.className = "add-book-container";
    let inputDivArray = [
      {
        label: "Title",
        input: document.createElement("input"),
        name: "Title",
        className: "title-input",
      },
      {
        label: "Author",
        input: document.createElement("input"),
        name: "Author",
        className: "author-input",
      },
      {
        label: "Pages",
        input: document.createElement("input"),
        name: "Pages",
        type: "number",
        className: "pages-input",
      },
      {
        label: "Read",
        input: document.createElement("input"),
        name: "Read",
        type: "checkbox",
        className: "read-input",
      },
    ];

    inputDivArray.forEach(({ label, input, name, type, className }) => {
      const inputContainer = document.createElement("div");
      inputContainer.className = "input-container";

      const labelElement = document.createElement("label");
      labelElement.textContent = label;
      labelElement.setAttribute("for", name);

      input.name = name;
      input.className = className;
      input.required = true;
      if (type) input.type = type;
      addBookContainer.appendChild(form);
      form.append(labelElement, input);
    });

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.textContent = "Add Book";

    screenContainer.appendChild(addBookContainer);
    addBookContainer.appendChild(form);
    form.appendChild(submitButton);
    event.preventDefault();
    submitButton.addEventListener("click", function () {
      const titleInput = document.querySelector(".title-input");
      const authorInput = document.querySelector(".author-input");
      const pagesInput = document.querySelector(".pages-input");
      const readInput = document.querySelector(".read-input");

      const newBook = new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.value
      );
      myLibrary.push(newBook);
      console.log(myLibrary);
      counter = 0;

      addBookContainer.remove();
    });
  } else {
    return null;
  }
  counter += 1;
}

function addBookToLibrary() {}
