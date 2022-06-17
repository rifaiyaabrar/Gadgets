const textArea = document.getElementById("inputbox");
const clearButton = document.querySelector(".clear");
const capitalizeButton = document.querySelector(".capitalize");
const sortButton = document.querySelector(".sort");
const reverseButton = document.querySelector(".reverse");
const stripBlankButton = document.querySelector(".strip_blank");
const addNumbersButton = document.querySelector(".add_numbers");
const shuffleButton = document.querySelector(".shuffle");

const clearButtonHandler = () => {
  textArea.value = "";
};

const capitalizeButtonHandler = () => {
  if(textArea.value === textArea.value.toUpperCase()){
    textArea.value = textArea.value.toLowerCase();
  }
  else if(textArea.value === textArea.value.toLowerCase()){
    textArea.value = textArea.value.toUpperCase();
};
}
const sortButtonHandler = () => {
  const textAreaContent = textArea.value.trim();
  textArea.value = textAreaContent.split("\n").sort().join("\n");
};

const reverseButtonHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  let reversedlines = "";

  textLines.forEach((textLine) => {
    reversedlines += textLine.split("").reverse().join("") + "\n";
  });

  textArea.value = reversedlines;
};

const stripBlankButtonHandler = () => {
  const textLines = textArea.value.split("\n");
  let strippedLines = "";
  console.log(textLines);
  textLines.forEach((textLine) => {
    if (textLine === "") {
      return;
    }

    strippedLines += textLine.trim() + "\n";
  });

  textArea.value = strippedLines;
};

const addNumbersButtonHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  let numberAddedLines = "";

  textLines.forEach((textLine, index) => {
    numberAddedLines += `${index + 1})` + textLine + "\n";
  });

  textArea.value = numberAddedLines;
};

const shuffleButtonHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  textArea.value = textLines.sort(() => Math.random() - 0.5).join("\n");
};

clearButton.addEventListener("click", clearButtonHandler);
capitalizeButton.addEventListener("click", capitalizeButtonHandler);
sortButton.addEventListener("click", sortButtonHandler);
reverseButton.addEventListener("click", reverseButtonHandler);
stripBlankButton.addEventListener("click", stripBlankButtonHandler);
addNumbersButton.addEventListener("click", addNumbersButtonHandler);
shuffleButton.addEventListener("click", shuffleButtonHandler);
