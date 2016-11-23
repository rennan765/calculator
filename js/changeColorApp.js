//Button colors:
var gray = '#808080';
var lgray = '#A9A9A9';
var lrgray = '#D3D3D3';
var orange = '#FF8C00';
var lorange = '#FFA500';
var red = '#E1140B';
var lred = '#E83E36';
var yellow = '#FEEB23';
var lyellow = '#FFF053';
var blue = '#5093D7';
var lblue = '#72A3D4';

//RGB Colors
var grayRGB = 'rgb(128, 128, 128)';
var lgrayRGB = 'rgb(169, 169, 169)';
var lrgrayRGB = 'rgb(211, 211, 211)';
var orangeRGB = 'rgb(255, 140, 0)';
var lorangeRGB = 'rgb(255, 165, 0)';
var redRGB = 'rgb(225, 20, 11)';
var lredRGB = 'rgb(232, 62, 54)';
var yellowRGB = 'rgb(254, 235, 35)';
var lyellowRGB = 'rgb(255, 240, 83)';
var blueRGB = 'rgb(80, 147, 215)';
var lblueRGB = 'rgb(114, 163, 212)';

function changeOperationColor(color){
	var c = document.getElementById('operationC');
	var signal = document.getElementById('operationSignal');

	switch(color){
		case 'gray':
			c.style.backgroundColor = gray;
			signal.style.backgroundColor = gray;
			break;
		case 'lgray':
			c.style.backgroundColor = lgray;
			signal.style.backgroundColor = lgray;
			break;
		case 'orange':
			c.style.backgroundColor = orange;
			signal.style.backgroundColor = orange;
			break;
		case 'red':
			c.style.backgroundColor = red;
			signal.style.backgroundColor = red;
			break;
		case 'yellow':
			c.style.backgroundColor = yellow;
			signal.style.backgroundColor = yellow;
			break;
		case 'blue':
			c.style.backgroundColor = blue;
			signal.style.backgroundColor = blue;
			break;
		default:
			//NO ACTION SET
			break;
	}
}

function changeOperatorColor(color){
	var operators = [
		document.getElementById('operatorDivided'),
		document.getElementById('operatorTimes'),
		document.getElementById('operatorMinus'),
		document.getElementById('operatorPlus'),
		document.getElementById('operatorEquals')
	];

	switch(color){
		case 'gray':
			for(i = 0 ; i < operators.length ; i++){
				operators[i].style.backgroundColor = gray;
			}
			break;
		case 'lgray':
			for(i = 0 ; i < operators.length ; i++){
				operators[i].style.backgroundColor = lgray;
			}
			break;
		case 'orange':
			for(i = 0 ; i < operators.length ; i++){
				operators[i].style.backgroundColor = orange;
			}
			break;
		case 'red':
			for(i = 0 ; i < operators.length ; i++){
				operators[i].style.backgroundColor = red;
			}
			break;
		case 'yellow':
			for(i = 0 ; i < operators.length ; i++){
				operators[i].style.backgroundColor = yellow;
			}
			break;
		case 'blue':
			for(i = 0 ; i < operators.length ; i++){
				operators[i].style.backgroundColor = blue;
			}
			break;
		default:
			//NO ACTION SET
			break;
	}
}

function changeNumberColor(color){
	var numbers = [
		document.getElementById('numberComma'),
		document.getElementById('number0'),
		document.getElementById('number1'),
		document.getElementById('number2'),
		document.getElementById('number3'),
		document.getElementById('number4'),
		document.getElementById('number5'),
		document.getElementById('number6'),
		document.getElementById('number7'),
		document.getElementById('number8'),
		document.getElementById('number9')
	];

	switch(color){
		case 'gray':
			for(i = 0 ; i < numbers.length ; i++){
				numbers[i].style.backgroundColor = gray;
			}
			break;
		case 'lgray':
			for(i = 0 ; i < numbers.length ; i++){
				numbers[i].style.backgroundColor = lgray;
			}
			break;
		case 'orange':
			for(i = 0 ; i < numbers.length ; i++){
				numbers[i].style.backgroundColor = orange;
			}
			break;
		case 'red':
			for(i = 0 ; i < numbers.length ; i++){
				numbers[i].style.backgroundColor = red;
			}
			break;
		case 'yellow':
			for(i = 0 ; i < numbers.length ; i++){
				numbers[i].style.backgroundColor = yellow;
			}
			break;
		case 'blue':
			for(i = 0 ; i < numbers.length ; i++){
				numbers[i].style.backgroundColor = blue;
			}
			break;
		default:
			//NO ACTION SET
			break;
	}
}

function buttonHoverIn(id){
	var button = document.getElementById(id);
	switch(button.style.backgroundColor){
		case grayRGB:
			button.style.backgroundColor = lgray;
			console.log(button.style.backgroundColor);
			break;
		case lgrayRGB:
			button.style.backgroundColor = lrgray;
			console.log(button.style.backgroundColor);
			break;
		case orangeRGB:
			button.style.backgroundColor = lorange;
			console.log(button.style.backgroundColor);
			break;
		case redRGB:
			button.style.backgroundColor = lred;
			console.log(button.style.backgroundColor);
			break;
		case yellowRGB:
			button.style.backgroundColor = lyellow;
			console.log(button.style.backgroundColor);
			break;
		case blueRGB:
			button.style.backgroundColor = lblue;
			console.log(button.style.backgroundColor);
			break;
		default:
			//NO ACTION SET
			break;
	}
}

function buttonHoverOut(id){
	var button = document.getElementById(id);
	switch(button.style.backgroundColor){
		case lgrayRGB:
			button.style.backgroundColor = gray;
			console.log(button.style.backgroundColor);
			break;
		case lrgrayRGB:
			button.style.backgroundColor = lgray;
			console.log(button.style.backgroundColor);
			break;
		case lorangeRGB:
			button.style.backgroundColor = orange;
			console.log(button.style.backgroundColor);
			break;
		case lredRGB:
			button.style.backgroundColor = red;
			console.log(button.style.backgroundColor);
			break;
		case lyellowRGB:
			button.style.backgroundColor = yellow;
			console.log(button.style.backgroundColor);
			break;
		case lblueRGB:
			button.style.backgroundColor = blue;
			console.log(button.style.backgroundColor);
			break;
		default:
			//NO ACTION SET
			break;
	}
}

function changeColorScheme(scheme){
	if(scheme === 'iOS'){
		changeOperationColor('gray');
		changeOperatorColor('orange');
		changeNumberColor('lgray');
	}else if(scheme === 'DevLoopers'){
		changeOperationColor('red');
		changeOperatorColor('yellow');
		changeNumberColor('blue');
	}
}