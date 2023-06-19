console.clear();

const formDOM = document.querySelector('form');
const minus3DOM = formDOM.querySelector('button');
const minus1DOM = formDOM.querySelector('button:nth-child(2)');
const numberDOM = formDOM.querySelector('div');
const plus1DOM = formDOM.querySelector('button:nth-child(4)');
const plus3DOM = formDOM.querySelector('button:nth-child(5)');

let counter = 0;

plus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    numberDOM.textContent = ++counter;
});

minus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    numberDOM.textContent = --counter;
});

plus3DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter += 3;
    numberDOM.textContent = counter;
});

minus3DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter -= 3;
    numberDOM.textContent = counter;
});