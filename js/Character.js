class Character {
    constructor(name, hp, dmg, mana, status) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = 'playing';
    }

    takeDamage = (damage) => {
        this.hp -= damage;
        console.log(this.name + " perd " + damage + " points de vie!");

        if (this.hp <= 0) {
            this.status = "loser";
            console.log("Adieu monde cruel, " + this.name + "!");
        } else {
            this.status = "playing";
            console.log("misérable insecte, il me reste " + this.hp + " points de vie avant la mort!");
        }
    }
    
    dealDamage = (victim) => {
        victim.takeDamage(this.dmg);
    }


}