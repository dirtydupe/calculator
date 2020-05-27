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

function sqrt(x) {
    if(x < 0)
        return "ERROR";

    return sqrt(x);
}

function operate(x, op, y) {
    if(op === '+')
        return add(x, y);
    
    if(op === '-')
        return subtract(x, y);

    if(op === '*')
        return multiply([x, y]);

    if(op === '/')
        return divide(x, y);

    if(op === 0x221A)
        return sqrt(x);
}

function buildKeyGrid() {
    let buttonLabels = ['C', 'DEL', '(-)', String.fromCharCode(0x221A), '7', '8', '9', 
                        String.fromCharCode(247), '4', '5', '6', 'x', '1', '2', '3', 
                        '-', '0', '.', '=', '+'];
    let keyGrid = document.getElementById("keyGrid");
    for(let i = 0; i < buttonLabels.length ; i++)
    {
        const keyCell = document.createElement('div');
        keyCell.classList.add('keyCell');
        keyCell.textContent = buttonLabels[i];

        if(i === 18)
            keyCell.style.setProperty('--rgb', '214, 138, 38');
        else if(i === 0 ||i === 1 || i === 2)
            keyCell.style.setProperty('--rgb', '13, 44, 30');
        else if(i === 3 ||i === 7 || i === 11 || i === 15 || i === 19 || 
                i === 21 || i === 22 || i === 23)
            keyCell.style.setProperty('--rgb', '44, 36, 18');
        else
            keyCell.style.setProperty('--rgb', '14, 14, 14');

        keyGrid.appendChild(keyCell);
    }
}

buildKeyGrid();