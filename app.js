function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function sum(lst) {
	let sum = 0;

	for(let i = 0; i < lst.length; i++)
		sum = sum + lst[i];

	return sum;
}

function multiply(lst) {
	let product = 1;

	for(let i = 0; i < lst.length; i++)
		product = product * lst[i];

	return product;
}

function divide(x, y) {
    if(y === 0)
        return "NOPE!";

    return x / y;
}

function power(x, n) {
	let product = 1;

	for(let i = 0; i < n; i++)
		product = product * x;

	return product;
}

function factorial(n) {
	let seq = [1];

	for(let i = 1; i < n; i++)
		seq.push(seq[i - 1] * (i + 1));

	return seq[seq.length - 1];
}

function operate(x, y, op) {
    if(op === '+')
        return add(x, y);
    
    if(op === '-')
        return subtract(x, y);

    if(op === '*')
        return multiply([x, y]);

    if(op === '/')
        return divide(x, y);
}

function buildKeyGrid() {
    let buttonLabels = ['c', 'del', '(-)', String.fromCharCode(0x221A), '7', '8', '9', 
                        String.fromCharCode(247), '4', '5', '6', 'x', '1', '2', '3', 
                        '-', '0', '.', '=', '+'];
    let keyGrid = document.getElementById("keyGrid");
    for(let i = 0; i < buttonLabels.length ; i++)
    {
        const keyCell = document.createElement('div');
        keyCell.classList.add('keyCell');
        keyCell.textContent = buttonLabels[i];
    
        keyGrid.appendChild(keyCell);
    }
}

buildKeyGrid();