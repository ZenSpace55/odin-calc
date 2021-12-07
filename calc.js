let historyText = document.querySelector(".calcTextHistory");
let mainText = document.querySelector(".calcTextMain");
let fistNum = "0";
let showingResults;

function pressNumButton(number){
    if (showingResults){
        mainText.textContent = "";
        historyText.textContent = "";
        showingResults = false;
    }
    mainText.textContent += number;
}

function clearInput(){
    mainText.textContent = "";
    historyText.textContent = "";
    showingResults = false;
}

function backspace(){
    mainText.textContent = mainText.textContent.substring(0, mainText.textContent.length-1);
}

function addToHistory(currentText){
    historyText += currentText;
}

function operationButton(mathFunc){
    firstNum = mainText.textContent;
    historyText.textContent = mainText.textContent;
    mainText.textContent = "";
    showingResults = false;
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
    historyText.textContent += " " + mainText.textContent;
    let decimal;
    if (operationChar === "/"){
        if (mainText.textContent == false){
            mainText.textContent = "";
            historyText.textContent = "ERROR-Division by 0";
        }
        else{
        mainText.textContent = firstNum / mainText.textContent;
        }
    }
    else if (operationChar === "*"){
        mainText.textContent = firstNum * mainText.textContent;
    }
    else if (operationChar === "-"){
        mainText.textContent = firstNum - mainText.textContent;
    }
    else if (operationChar === "+"){
        mainText.textContent = +firstNum + +mainText.textContent;
    }
    mainText.textContent = Number(mainText.textContent).toFixed(6);
    mainText.textContent = mainText.textContent * 1;
    showingResults = true;
}

function inverse(){
    mainText.textContent = mainText.textContent *= -1;
}

function decimal(){
    let containsDecimal;
    for (let i = 0; i < mainText.textContent.length; i++){
        if (mainText.textContent.charAt(i) === "."){
            return;
        }
    }
    mainText.textContent += ".";
}