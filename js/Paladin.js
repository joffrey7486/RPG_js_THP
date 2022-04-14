class Paladin extends Character {
  constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, status) {
    super(name, hp, dmg, mana, status);
  }

  special = (victim) => {
    if (this.mana >= 40) {
      this.hp = this.hp + 5;
      victim.hp = victim.hp - 4;
      if (victim.hp <= 0) {
        victim.status = "loser";
      }
      this.mana = this.mana - 40;
      console.log(
        this.name +
          " utilise la lumière divine et gagne 5 points de vie, inflige 4 de dégats et consomme 40 mana!"
      );
    } else {
      console.log("Pas assez de mana, vous passez votre tour...");
    }
  };
}
