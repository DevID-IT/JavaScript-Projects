const btnAdd = document.querySelector(".button--add");
const btnDeleteAll = document.querySelector(".button--delete-all");
const btnAddCategory = document.querySelector(".button--add-category");
const categoryField = document.querySelector(
  ".note-panel__inputs--add-category"
);
const descriptionFild = document.querySelector(
  ".note-panel__inputs--description"
);
const btnField = document.querySelector(".note-panel__buttons");
const btnSaveCategory = document.querySelector(".button--save-category");
const mainInputCategory = document.querySelector(
  ".note-panel__inputs--categories"
);
const btnSave = document.querySelector(".button--save");
const inputCat = document.querySelector(".newCategory");
const btnCancel = document.querySelector(".button--cancel");
const notePanel = document.querySelector(".note-panel");
const notesArea = document.querySelector(".notes-area");
const category = document.querySelector("#category");
const date = document.querySelector("#date");
const textarea = document.querySelector("#note-description");
const errorMessage = document.querySelector(".note-panel__inputs__error");
let selectedValue;
let selectedId;
let noteID = 0;
const openAddPanel = () => (notePanel.style.display = "flex");
const deleteAllNotes = () => (notesArea.innerHTML = "");
const deleteOneNote = (id) => {
  const noteToDelete = document.getElementById(id);
  notesArea.removeChild(noteToDelete);
};
const addNewNote = () => {
  if (
    textarea.value !== "" &&
    category.options[category.selectedIndex].value !== "0"
  ) {
    createNewNote();
    errorMessage.style.visibility = "hidden";
    category.style.border = "1px solid black";
    textarea.style.border = "1px solid black";
  } else {
    errorMessage.style.visibility = "visible";
    category.style.border = "1px solid rgb(255, 0 , 0)";
    textarea.style.border = "1px solid rgb(255, 0 , 0)";
  }
};

const createNewNote = () => {
  const newNote = document.createElement("article");
  newNote.classList.add("note");
  newNote.setAttribute("id", noteID);
  newNote.innerHTML = `
        <header class="note__header">
        <h3 class="note__header__title">${selectedValue}</h3>
            <button class="button--delete" onclick="deleteOneNote(${noteID})">
            <i class="fas fa-times"></i>
            </button>
        </header>
        <div class="note__description">${
          date.value ? `Deadline: <strong>${date.value}</strong>` : ""
        } 
          <p>${textarea.value}</p>
        </div>`;

  notesArea.appendChild(newNote);
  noteID++;
  textarea.value = "";
  category.selectedIndex = 0;
  notePanel.style.display = "none";
  checkColor(newNote);
};
const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
  selectedId = category.options[category.selectedIndex].value;
};
const checkColor = (note) => {
  switch (selectedId) {
    case "1":
      note.style.backgroundColor = "rgb(72,255,0)";
      break;
    case "2":
      note.style.backgroundColor = "rgb(255,243,0)";
      break;
    case "3":
      note.style.backgroundColor = " rgb(155, 118, 241)";
      break;
    case "4":
      note.style.backgroundColor = " rgb(118, 241, 235)";
      break;
    case "5":
      note.style.backgroundColor = " rgb(118, 241, 180)";
      break;
    case "6":
      note.style.backgroundColor = " rgb(218, 241, 118)";
      break;
  }
};
const closePanel = () => {
  notePanel.style.display = "none";
  errorMessage.style.visibility = "hidden";
  textarea.value = "";
  category.selectedIndex = 0;
};
const addCategory = () => {
  categoryField.style.display = "block";
  btnField.style.display = "none";
  descriptionFild.style.display = "none";
  mainInputCategory.style.display = "none";
};
const SaveCategory = () => {
  const newCategory = `<option value=${category.length}>${inputCat.value}</option>`;
  category.innerHTML += newCategory;
  inputCat.value = "";

  categoryField.style.display = "none";
  mainInputCategory.style.display = "block";
  btnField.style.display = "block";
  descriptionFild.style.display = "block";
};
btnAdd.addEventListener("click", openAddPanel);
btnDeleteAll.addEventListener("click", deleteAllNotes);
btnSave.addEventListener("click", addNewNote);
btnCancel.addEventListener("click", closePanel);
btnAddCategory.addEventListener("click", addCategory);
btnSaveCategory.addEventListener("click", SaveCategory);
