let expression = "";

function appendNumber(number){
    expression += number;
    document.getElementById('result').value = expression;
}

function appendOperator(operator){
    expression += operator;
    document.getElementById('result').value = expression;
}

function clearResult() {
    expression = "";
    document.getElementById('result').value = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById("result").innerHTML=result;
        expression = "";
    }
    catch {
        document.getElementById("result").innerHTML="Error";
    }
}
