class Berzerker extends Character {
    constructor(name = "Draven", hp = 8, dmg = 4, mana = 0, status) {
        super(name, hp, dmg, mana, status);
    }
    rage = () => {
        this.dmg = this.dmg + 1;
        this.hp = this.hp - 1;
        console.log(this.name + " utilise la rage et gagne 1 en puissance et perd 1 point de vie!");
    }
}

const berzerker = new Berzerker("Draven");