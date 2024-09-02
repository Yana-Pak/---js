let a = ''; // первое число
let b = ''; // второе
let sign = ''; // знак операции
let finish = false;

const digit = ['00', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/', '+/-'];

// экран 
const secondaryDisplay = document.querySelector('.secondary-display');
const mainDisplay = document.querySelector('.main-display');
const inversionNumder = document.querySelector('.inversion-numder');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    secondaryDisplay.textContent = '';
    mainDisplay.textContent = 0;

}

function deleteElem() {
    secondaryDisplay.textContent = secondaryDisplay.textContent.slice(0, -1);
    a = secondaryDisplay.textContent;
} secondaryDisplay
function inversion() {
    secondaryDisplay.textContent *= (-1);
    a = secondaryDisplay.textContent;
}

document.querySelector('.all-clear').addEventListener('click', clearAll);
document.querySelector('.clear').addEventListener('click', deleteElem);
document.querySelector('.inversion-numder').addEventListener('click', inversion);


document.querySelector('.calc-btn').onclick = (event) => {
    // если не кнопка
    if (!event.target.classList.contains('calc-btn-primary')) return;
    // кнопки +/- и сброс
    if (event.target.classList.contains('all-clear')) return;
    if (event.target.classList.contains('clear')) return;
    if (event.target.classList.contains('inversion-numder')) return;


    secondaryDisplay.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            secondaryDisplay.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            secondaryDisplay.textContent = b;
        }
        else {
            b += key;
            secondaryDisplay.textContent = b;
        }
        return;
    }

    // если  + - / *
    if (action.includes(key)) {
        sign = key;
        secondaryDisplay.textContent = sign;
        return;
    }

    // при нажатии на =
    if (key === '=') {
        if (b === '') {
            b = a;
            return a;
        }

        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    secondaryDisplay.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            // case "+/-":
            //     a = -a;
            //     b = -b;
            //     break;
        }


    }
    finish = true;
    mainDisplay.textContent = a.toFixed(2);

}