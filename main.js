function fahrenheitCelsiusConverter() {
	if(document.getElementById('fahrenheitRadio').checked) {
		var userInputCelsius = parseFloat(document.getElementById('ftc').value);
    	var convertedFromFahrenheit = userInputCelsius*9/5 + 32;
    	// document.getElementById('answer').value = convertedFromFahrenheit;
    	document.getElementById('answer').innerHTML = '<h3>' + convertedFromFahrenheit + '°F' + '</h3>'
	} else if(document.getElementById('celsiusRadio').checked) {
		var userInputFahrenheit = parseFloat(document.getElementById('ftc').value);
    	var convertedFromCelsius = (userInputFahrenheit-32) * 5/9;
    	document.getElementById('answer').innerHTML = '<h3>' + convertedFromCelsius + '°C' + '</h3>'
	}
}

// if (convertedFromFahrenheit > 90 && convertedFromCelsius > 32) {
// 	convertedFromFahrenheit.classList.add("tempGreaterThan9032");
// } else if (convertedFromFahrenheit < 32 && convertedFromCelsius < 0) {
// 	convertedFromFahrenheit.classList.add("tempGreaterThan9032");
// }


//This is an unnessary comment


// Function to clear form
function clearForm() {
    document.getElementById("textInput").reset();
}