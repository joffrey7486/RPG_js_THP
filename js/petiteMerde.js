class PetiteMerde extends Character {
constructor(name = "Jimmy", hp = 5, dmg = 2, mana = 0, status){
    super(name, hp, dmg, mana, status)
    }

    special = () => {
        victim.hp = victim.hp - 1;
        this.hp = this.hp - 2;
        console.log(this.name + "attaque comme une quiche, inflige 1 dégât et perd 2 points de vie !");
    }
}