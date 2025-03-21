const addBookButton = document.querySelector("#add-book-button");
const screenContainer = document.querySelector(".screen-container");
let counter = 0;

const myLibrary = [];

function Book(title, author, pages, read, id, created) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  this.created = created;
}
function addBookToUi() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].created);
    if (myLibrary[i].created == 0) {
      const newBookContainer = document.createElement("div");
      newBookContainer.className = "book-container";
      const title = document.createElement("h2");
      title.textContent = "Title:";
      const titleName = document.createElement("p");
      titleName.textContent = myLibrary[i].title;
      const author = document.createElement("h2");
      author.textContent = "Author:";
      const authorName = document.createElement("p");
      authorName.textContent = myLibrary[i].author;
      const pages = document.createElement("h2");
      pages.textContent = "Pages:";
      const pagesCount = document.createElement("p");
      pagesCount.textContent = myLibrary[i].pages;
      const read = document.createElement("h2");
      read.textContent = "Read:";
      const readStatus = document.createElement("p");
      readStatus.textContent = myLibrary[i].read;
      newBookContainer.append(
        title,
        titleName,
        author,
        authorName,
        pages,
        pagesCount,
        read,
        readStatus
      );

      const buttonDiv = document.createElement("div");
      buttonDiv.className = "button-div";
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      const readButton = document.createElement("button");
      readButton.className = "read-button";
      readButton.textContent = "Read";
      newBookContainer.appendChild(buttonDiv);
      buttonDiv.append(deleteButton, readButton);
      console.log(myLibrary[i]);
      myLibrary[i].created = 1;
      screenContainer.append(newBookContainer);
    } else {
    }
  }
}

addBookButton.addEventListener("click", createBookInputField);

function createBookInputField() {
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
    submitButton.addEventListener("click", addBookToArray);
    function addBookToArray(event) {
      event.preventDefault();
      const titleInput = document.querySelector(".title-input");
      const authorInput = document.querySelector(".author-input");
      const pagesInput = document.querySelector(".pages-input");
      const readInput = document.querySelector(".read-input");

      const newBook = new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.checked,
        self.crypto.randomUUID(),
        0
      );
      myLibrary.push(newBook);
      console.log(myLibrary);
      counter = 0;
      addBookContainer.remove();
      addBookToUi();
    }
  } else {
    return null;
  }

  counter += 1;
}
