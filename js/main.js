console.clear();

const buttomDOM = document.getElementById('mygtukas');
const titleDOM = document.getElementById('antraste');

function kaDaryti() {
    titleDOM.textContent = 'Labas vakaras!';
}

buttomDOM.addEventListener('click', kaDaryti);
