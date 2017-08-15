function fahrenheitCelsiusConverter() {
	var userInput = parseFloat(document.getElementById('ftc').value);
	if(document.getElementById('fahrenheitRadio').checked) {
    	var convertedToFahrenheit = userInput*9/5 + 32;
    	var classToApply = decideWhichClass(convertedToFahrenheit, 'far');
    	document.getElementById('answer').innerHTML = '<h3 class="'+ classToApply +'">' + convertedToFahrenheit + '°F' + '</h3>'
    	console.log(classToApply);
	} else if(document.getElementById('celsiusRadio').checked) {
    	var convertedToCelsius = (userInput-32) * 5/9;
    	var classToApply = decideWhichClass(convertedToCelsius, 'cel');
    	document.getElementById('answer').innerHTML = '<h3 class="'+ classToApply +'">' + convertedToCelsius + '°C' + '</h3>'
	}
}

var converterButton = document.getElementById('converterBTN');
converterButton.addEventListener('click', fahrenheitCelsiusConverter);

function decideWhichClass (outputTemp, farOrCel) {
	var classToAdd = "";
	console.log(outputTemp, farOrCel);
	// know to return 1 of 3 classes .tempGreaterThan9032 .tempLessThan320 .tempInBetween
	if((farOrCel === 'far' && outputTemp >= 90) || (farOrCel === 'cel' && outputTemp >= 32)) {
		classToAdd = "tempGreaterThan9032";
	} else if((farOrCel === 'far' && outputTemp <= 32) || (farOrCel === 'cel' && outputTemp <= 0)) {
		classToAdd = "tempLessThan320";
	} else {
		classToAdd = "tempInBetween";
	}
	return classToAdd;
}



// Function to clear form

var clearButton = document.getElementById('clearBTN');
clearButton.addEventListener('click', clearForm);

function clearForm() {
    document.getElementById("textInput").reset();
}









