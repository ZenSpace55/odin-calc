let historyText = document.querySelector(".calcTextHistory");
let mainText = document.querySelector(".calcTextMain");
let fistNum = "0";

function pressNumButton(number){
    mainText.textContent += number;
    console.log("button pressed");
}

function clearInput(){
    mainText.textContent = "";
    historyText.textContent = "";
}

function backspace(){
    mainText.textContent = mainText.textContent.substring(0, mainText.textContent.length-1);
}

function addToHistory(currentText){
    historyText += currentText;
}

function operationButton(mathFunc){
    firstNum = mainText.textContent;
    historyText.textContent = mainText.textContent;//fistNum;
    mainText.textContent = "";
    console.log(firstNum);
    if (mathFunc == 0){
        historyText.textContent += " /";
    }

    else if (mathFunc == 1){
        historyText.textContent += " *"
    }

    else if (mathFunc == 2){
        historyText.textContent += " -";
    }

    else if (mathFunc == 3){
        historyText.textContent += " +"
    }
}

function calculate(){
    let operationChar = historyText.textContent.charAt(historyText.textContent.length-1);
    console.log("previous history: " + historyText.textContent);
    console.log("last char: " + operationChar);
    historyText.textContent += " " + mainText.textContent;
    if (operationChar === "/"){
        console.log("dividing")
        mainText.textContent = firstNum / mainText.textContent;
    }
    else if (operationChar === "*"){
        console.log("multiplying")
        mainText.textContent = firstNum * mainText.textContent;
    }
    else if (operationChar === "-"){
        console.log("subtracting")
        mainText.textContent = firstNum - mainText.textContent;
    }
    else if (operationChar === "+"){
        console.log("adding")
        mainText.textContent = +firstNum + +mainText.textContent;
    }
}