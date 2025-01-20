function appendToResult(ch) {
    const resultElement = document.getElementById("result");
    resultElement.value += ch;
}

function calculate() {
    const resultElement = document.getElementById("result");
    try {
        resultElement.value = eval(resultElement.value); 
    } catch (error) {
        resultElement.value = "Error"; 
    }
}

function clearResult() {
    document.getElementById("result").value = ""; 
}

function deleteLast() {
    const resultElement = document.getElementById("result");
    resultElement.value = resultElement.value.slice(0, -1); 
}
