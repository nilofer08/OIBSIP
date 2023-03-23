function convert() {
	// Get user input
	let temp = parseFloat(document.getElementById("temp").value);
	let unit = document.getElementById("unit").value;

	// Convert temperature
	if (unit == "celsius") {
		let fahrenheit = (temp * 9/5) + 32;
		document.getElementById("result").innerHTML = `${temp}&deg;C = ${fahrenheit}&deg;F`;
	} else {
		let celsius = (temp - 32) * 5/9;
		document.getElementById("result").innerHTML = `${temp}&deg;F = ${celsius}&deg;C`;
	}
}