class Monk extends Character {
    constructor(name = "Moana", hp = 8, dmg = 2, mana = 200, status) {
        super(name, hp, dmg, mana, status);
    }
    special = () => {
        this.hp = this.hp + 8;
        this.mana = this.mana - 25;
        console.log(this.name + " utilise la puissance de la lumière et gagne 8 points de vie et consomme 25 mana!");
    }
}

