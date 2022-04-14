class Wizard extends Character {
    constructor(name = "Gandoulf", hp = 10, dmg = 2, mana = 200, status) {
        super(name, hp, dmg, mana, status);
    }

    special = () => {
        victim.hp = victim.hp - 7;
        this.mana = this.mana - 20;
        console.log(this.name + "Lance une boule de feu et inflige 7 de dégats et consomme 20 mana!");
    }
}