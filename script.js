let arr = ['', '', ''];
const result = document.querySelector(".result");

function operate(a,b,operand){
	switch(operand){
		case '+':
			return a + b;
			break;
		case '-':
			return a - b;
			break;
		case '*':
			return a * b;
			break;
		case '/':
			if(b!=0){
				return a / b;
			}else{
				result.style.color = "#cc241d";
				return "ERR: DIV BY 0";
			}
			break;
		default:
			result.style.color = "#cc241d";
			return "need 2 numbers and 1 operand";
	}
}

function equals(){
	result.innerHTML = operate(parseInt(arr[0]),parseInt(arr[2]),arr[1]);
}

function setVal(val){
	result.style.color = "#a89984";
	if(typeof(val) == "number"){
		if(arr[1] == ''){
			arr[0] += val.toString();
			result.innerHTML = arr[0];
			console.log(arr);
		}else{
			arr[2] += val.toString();
			result.innerHTML = arr[2];
			console.log(arr);
		}
	}else{
		arr[1] = val;
		result.innerHTML = val;
		console.log(arr);
	}
}
function clearArr(){
	arr = ['', '', ''];
	result.innerHTML = "___";
	console.log(arr);
}
