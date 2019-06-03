// Converts gallons to liters

var gallonsToLiters = function(gallons) {
	return (gallons * 3.785).toFixed(2);
}

// Converts cups to mL

var cupsToML = function(cups) {
	return (cups * 236.588).toFixed(2);
}

// Converts tablespoons to mL

var tbspToML = function(tbsp) {
	return (tbsp * 14.787).toFixed(2);
}

// Converts teaspoons to mL

var tspToML = function(tsp) {
	return (tsp * 4.929).toFixed(2);
}

// Prompts for user input

var gallons = parseInt(prompt("What is the value in gallons?"));
// var cups = parseInt(prompt("What is the value in cups?"));
// var tbsp = parseInt(prompt("What is the value in tablespoons?"));
// var tsp = parseInt(prompt("What is the value in teaspoons?"));

// Displays result as an alert

alert(gallons + " gallons are equivalent to " + gallonsToLiters(gallons) + " liters.");
// alert(cups + " cups are equal to " + cupsToML(cups) + " mL.");
// alert(tbsp + "tablespoons are equal to " + tbspToML(tbsp) + " mL.");
// alert(tsp + "teaspoons are equal to " + tspToML(tsp) + " mL.");
