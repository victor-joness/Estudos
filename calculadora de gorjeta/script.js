// cached elements ==========
const form = document.getElementById("form");
const totalBill = document.getElementById("bill");
const totalPeople = document.getElementById("people");
const tipPercentage = document.getElementById("percentage");
const percentageOutput = document.getElementById("percentage-output");
const output = document.getElementById("output");

// event listeners ==========
form.addEventListener("change", calculateTip);
tipPercentage.oninput = calculateTip;

// event handlers ==========
function calculateTip() {
	const dollarsPerPerson = (
		(totalBill.value * (tipPercentage.value / 100)) /
		totalPeople.value
	).toFixed(2);

	displayTip(`$${dollarsPerPerson}`);
	displayPercentage();
}

// helper functions ==========
function displayTip(totalPerPerson) {
	output.innerText =
		totalPeople.value > 1
			? `Cada pessoa deve dar gorjeta ${totalPerPerson}`
			: `Você deveria dar gorjeta ${totalPerPerson}`;
}

function displayPercentage() {
	percentageOutput.innerText = `${tipPercentage.value}%`;
}

// on load ==========
calculateTip();
