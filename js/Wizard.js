class Wizard extends Character {
  constructor(name = "Gandoulf", hp = 10, dmg = 2, mana = 200, status) {
    super(name, hp, dmg, mana, status);
  }

  special = (victim) => {
    if (this.mana >= 20) {
      victim.hp = victim.hp - 7;
      if (victim.hp <= 0) {
        victim.status = "loser";
      }
      this.mana = this.mana - 20;
      console.log(
        this.name +
          "Lance une boule de feu et inflige 7 de dégats et consomme 20 mana!"
      );
    } else {
      console.log("Pas assez de mana, vous passez votre tour...");
    }
  };
}
