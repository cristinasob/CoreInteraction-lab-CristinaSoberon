problem 1-

function printHelloWorld () {
	console.log('hello world')
}
printHelloWirld();



problem 2-

function combineStrings (firstString, secondString){
	var resultString = firstString + '' + secondString;
	return resultString;
}
var combineResult= combineStrings ('hello','world');
console.log (combineResult);


problem 3-

function saySomething(input){
	if(input=='hello'){
	return 'hi';
	} 
	else if(input==='goodbye'){
	return 'bye';
	}
}
console.log(saySomething('hello'));
console.log(saySomething('goodbye'));

problem 4-

function is GreaterThanTen(number){
	if (number > 10){
	return true;
	}
	else{
	return false;
	}
}
console.log(isGreaterThanTen(2));

problem 5-

function printOneThruTen(){
	for ( var i=1; i >=11; ++i){
	console.log(i);
	}
}
printOneThruTen();


problem 6-

function evaluateOneThruTwenty(){
	for (var i = 1; i < 21; ++i){
	if (i < 10){
	console.log('small');
	}
	else{
	console.log('large');
	}
	}
}
evaluateOneThruTwenty();



