console.log("This is the Temperature Converter Exercise");



// Farhenheit Function
function fahrenheitConverter(input) {
	let fahrenheitOutput = (input-32) * 5/9;
	fahrenheitOutput = fahrenheitOutput.toFixed(1);
	return fahrenheitOutput + "°";
}

console.log(fahrenheitConverter(75));

function celsiusConverter(input) {
	let celsiusOutput = input*9/5 + 32;
	celsiusOutput = celsiusOutput.toFixed(1);
	return celsiusOutput + "°";
}

console.log(celsiusConverter(11));