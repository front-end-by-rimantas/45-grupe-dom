import { renderHeader } from '../js/header.js';
renderHeader();

const formDOM = document.querySelector('form');
const inputDOM = formDOM.querySelector('input');
const boardDOM = document.querySelector('.board');

formDOM.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseInt(inputDOM.value);

    if (number > 0 && number % 1 === 0) {
        renderChessBoard(number);
    }
});

function renderChessBoard(size = 8) {
    let blackHTML = '';
    let whiteHTML = '';
    let HTML = '';

    for (let m = 0; m < size; m++) {
        blackHTML += `<div class="cell ${m % 2 === 0 ? 'black' : ''}"></div>`;
        whiteHTML += `<div class="cell ${m % 2 === 0 ? '' : 'black'}"></div>`;
    }

    for (let i = 0; i < size; i++) {
        HTML += `<div class="row">${i % 2 === 0 ? blackHTML : whiteHTML}</div>`
    }

    boardDOM.innerHTML = HTML;
}

renderChessBoard();
