console.clear();

// Paspaudus <button> elementa
// <h1> elemente pasikeicia tekstas

// 1. Susirasti <button> elementa
// 2. Jei <button> elementa YRA:
// - susirandame <h1> elementa...
//   - jei <h1> elementa YRA:
//   - uzregistruojame ivykio stebejima:
//      - kai/jei vartotojas paspaus <button>
//      - <h1> elemente keiciam teksta
//   - jei NERA:
//   - nieko nedarom....
// - jei NERA:
// - nieko nedarom....

const buttomDOM = document.getElementById('mygtukas');

if (buttomDOM === null) {
    console.log('Mygtuko nera :(');
} else {
    console.log('Mygtukas rastas!');

    const titleDOM = document.getElementById('antraste');

    if (titleDOM === null) {
        console.log('Nepavyko rasti antrastes :(');
    } else {
        console.log('Antraste egzistuoja!');

        titleDOM.textContent = 'Labas vakaras!';
    }
}
