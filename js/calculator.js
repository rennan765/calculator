var arr = ["n", "n", "n"];
var pointer = 0;
var comma = false;
var signal = true;
var lastResult = null;

function clearCalc(){
	arr = ["n", "n", "n"];
	pointer = 0;
	lastResult = null;
	document.getElementById("led").innerHTML = "0";
}

function calculate(){
	var result;

	switch(arr[1]){
		case "+":
			result = parseFloat(arr[0]) + parseFloat(arr[2]);
			document.getElementById("led").innerHTML = result.toString();
			return result;
		case "-":
			result = parseFloat(arr[0]) - parseFloat(arr[2]);
			document.getElementById("led").innerHTML = result.toString();
			return result;
		case "*":
			result = parseFloat(arr[0]) * parseFloat(arr[2]);
			document.getElementById("led").innerHTML = result.toString();
			return result;
		case "/":
			result = parseFloat(arr[0]) / parseFloat(arr[2]);
			document.getElementById("led").innerHTML = result.toString();
			return result;
		default:
			document.getElementById("led").innerHTML = "Error!";
			break;
	}
}

function addNumber(number){
	//PRIMEIRO NUMERO
	if(pointer === 0){
		//CONFERE SE E O PRIMEIRO CALCULO
		if(lastResult !== null){
			clearCalc();
		}
		//CONFERE SE O PRIMEIRO NUMERO ESTA VAZIO
		if(arr[0] === "n"){
			arr[0] = "";
		}
		arr[0] += number.toString();
		document.getElementById("led").innerHTML = arr[0];
	}
	//SEGUNDO NUMERO
	if(pointer === 2){
		//CONFERE SE O SEGUNDO NUMERO ESTA VAZIO
		if(arr[2] === "n"){
			arr[2] = "";
		}
		arr[2] += number.toString();
		document.getElementById("led").innerHTML = arr[2];
	}
}

function addComma(){
	if(!comma){
		if(pointer === 0){
			if(arr[0] === "n"){
				arr[0] = "0.";
				document.getElementById("led").innerHTML = arr[0];
			}else{
				arr[0] += "."
				document.getElementById("led").innerHTML = arr[0];
			}
		}else if(pointer === 2){
			if(arr[2] === "n"){
				arr[2] = "0.";
				document.getElementById("led").innerHTML = arr[2];
			}else{
				arr[2] += "."
				document.getElementById("led").innerHTML = arr[2];
			}
		}
		comma = true;
	}
}

function invertSignal(){
	if(signal){	//CASO SEJA +
		if(pointer === 0){
			if(arr[0] != "n" && arr[0] != "0" && arr[0] != "0."){
				arr[0] = "-" + arr[0];
				signal = false;
				document.getElementById("led").innerHTML = arr[0];
			}
		}else if(pointer === 2){
			if(arr[2] != "n" && arr[2] != "0" && arr[2] != "0."){
				arr[2] = "-" + arr[2];
				signal = false;
				document.getElementById("led").innerHTML = arr[2];
			}
		}
	}else{	//CASO SEJA -
		if(pointer === 0){
			arr[0] = arr[0].substring(1);
			signal = true;
			document.getElementById("led").innerHTML = arr[0];
		}else if(pointer === 2){
			arr[2] = arr[2].substring(1);
			signal = true;
			document.getElementById("led").innerHTML = arr[2];
		}
	}
}

function addOperator(operator){
	//CONFERE SE E O PRIMEIRO CALCULO
	if(lastResult == null){
		//PRIMEIRO NUMERO
		if(pointer === 0){
			//CONFERE SE O PRIMEIRO NUMERO ESTA VAZIO
			if(arr[0] === "n"){
				arr[0] = "0";
			}
			arr[1] = operator;
			pointer = 2;
			comma = false;
			signal = true;
			return 0;
		}
		if(pointer === 2){
			//CONFERE SE O SEGUNDO NUMERO ESTA VAZIO
			if(arr[2] === "n"){
				arr[2] = "0";
			}
			lastResult = calculate();
			arr[0] = lastResult.toString();
			arr[1] = operator;
			arr[2] = "n";
			comma = false;
			signal = true;
			return 0;
		}
	}else{
		if(pointer === 0){	//CASO TENHA SAIDO DE UM EQUALS()
			document.getElementById("led").innerHTML = lastResult.toString();
			arr[0] = lastResult.toString();
			arr[1] = operator;
			arr[2] = "n";
			pointer = 2;
			comma = false;
			signal = true;
			return 0;
		}else if(pointer === 2){	//CASO TENHA SAIDO DE UM addOperator()
			document.getElementById("led").innerHTML = lastResult.toString();
			lastResult = calculate();
			arr[0] = lastResult.toString();
			arr[1] = operator;
			arr[2] = "n";
			comma = false;
			signal = true;
			return 0;
		} 
	}
}

function equals(){
	if(arr[0] !== "n" && arr[2] !== "n"){
		lastResult = calculate();
		arr = ["n", "n", "n"];
		pointer = 0;
	}else{
		pointer = 0;
		clearCalc();
	}
}