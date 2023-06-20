const goods = [
    { name: 'Morka', price: 1, },
    { name: 'Kopustas', price: 1.5, },
    { name: 'Svogunas', price: 2, },
    { name: 'Agurkas', price: 3, },
    { name: 'Pomidoras', price: 4.5, },
    { name: 'Bulve', price: 1.29, },
    { name: 'Kalafioras', price: 102.99, },
];

const listDOM = document.querySelector('ul');

for (const { name, price } of goods) {
    const formatedPrice = price.toFixed(2).replace('.', ',');

    listDOM.innerHTML += `<li>${name} (${formatedPrice} Eur)</li>`;
}
