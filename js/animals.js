import { Dog } from "./dog.js";


const rexas = new Dog('Rexas', 'brown');
const brisius = new Dog('Brisius', 'white');

console.log(rexas);
console.log(brisius);

rexas.isStanding = true;
console.log(rexas);

// Hi, my name is Rexas and my fur is brown.

console.log(rexas.intro());
console.log(brisius.intro());


rexas.sit();
console.log(rexas);

rexas.stand();
console.log(rexas);