class Assassin extends Character {
  constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status) {
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
          " utilise la lumière de l'ombre et inflige 7 dégats et consomme 20 mana!"
      );
    } else console.log("Pas assez de mana, vous passez votre tour...");
  };
}
