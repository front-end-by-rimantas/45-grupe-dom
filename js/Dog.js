export class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.isStanding = false;
    }

    intro() {
        return `Hi, my name is ${this.name} and my fur is ${this.color}.`;
    }

    sit() {
        this.isStanding = false;
    }

    stand() {
        this.isStanding = true;
    }
}
