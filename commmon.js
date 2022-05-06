var quizClass = " quiz-class";

function createDropdownList() {
  var dropdownList = document.createElement("select");
  var addButton = document.createElement("button");
  addButton.appendChild(document.createTextNode("Add"));
  addButton.setAttribute("onclick", "createSelectedElement()");

  var dropdownItems = new Array();

  for (let i = 0; i < 4; i++)
    dropdownItems[i] = document.createElement("option");

  dropdownItems[0].innerHTML = "Multi-choice";
  dropdownItems[1].innerHTML = "True or False";
  dropdownItems[2].innerHTML = "Fill In Blanks";
  dropdownItems[3].innerHTML = "Essay";

  for (let i = 0; i < 4; i++) dropdownList.appendChild(dropdownItems[i]);

  document
    .getElementsByClassName("dropdown-container")[0]
    .appendChild(dropdownList);
  document
    .getElementsByClassName("dropdown-container")[0]
    .appendChild(addButton);
}

function createSelectedElement() {
  var selectedElement = document.getElementsByTagName("select")[0].value;

  if (selectedElement === "Multi-choice") createMultiChoice();

  if (selectedElement === "True or False") createTrueFalse();

  if (selectedElement === "Fill In Blanks") createFillInBlanks();

  if (selectedElement === "Essay") createEssay();

  if (selectedElement === "Notes") createNotes();
}

function randomGenerator(min = 1, max = 10000000000) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createMultiChoice() {
  var multiChoiceDiv = document.createElement("div");
  multiChoiceDiv.setAttribute("class", "multichoice-class" + quizClass);

  document.getElementsByClassName("container")[0].appendChild(multiChoiceDiv);
  multiChoiceDiv.innerHTML = `
    <div class="multichoice-class quiz-class">
    <p class="headings">Multiple Choice</p>
    <div class="choice">
    <input type="checkbox">
    <label>Option 1</label>
    <input type="checkbox">
    <label>Option 2</label>
    </div>
    </div>`;
}

function createTrueFalse() {
  var trueFalseDiv = document.createElement("div");
  trueFalseDiv.setAttribute("class", "tf-class" + quizClass);

  document.getElementsByClassName("container")[0].appendChild(trueFalseDiv);

  trueFalseDiv.innerHTML = `
    <div class="tf-class quiz-class">
    <p class="headings">True/False</p>
    <div class="options">
    <input type="radio" name="trueFalse8365163950">
    <label>True</label>
    <input type="radio" name="trueFalse8365163950">
    <label>False</label>
    </div>
    </div>
    `;
}

function createFillInBlanks() {
  var fillInBlanksDiv = document.createElement("div");
  fillInBlanksDiv.setAttribute("class", "fillinblanks-class" + quizClass);
  document.getElementsByClassName("container")[0].appendChild(fillInBlanksDiv);

  fillInBlanksDiv.innerHTML = `
    <div class="fillBlanks">
    <span>ABC_</span>
    <input type="text" class="answerInput"><
    /div>
   `;
}

function createEssay() {
  var essayDiv = document.createElement("div");
  essayDiv.setAttribute("class", "essay-class" + quizClass);
  document.getElementsByClassName("container")[0].appendChild(essayDiv);

  essayDiv.innerHTML = `
    <div class="essay-class quiz-class">
    <p class="headings">Essay</p>
    <div class="essay">
    <span class="questionSpan">Enter your answer below</span>
    <textarea class="essayInput" rows="5" cols="100"></textarea>
    </div>
    </div>
  `;
}

createDropdownList();
