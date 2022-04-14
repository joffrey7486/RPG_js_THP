class Assassin extends Character {
    constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status) {
        super(name, hp, dmg, mana, status);
    }
    special = () => {
        victim.hp = victim.hp - 7;
        this.mana = this.mana - 20;
        console.log(this.name + " utilise la lumière de l'ombre et inflige 7 dégats et consomme 20 mana!");
    }
}

