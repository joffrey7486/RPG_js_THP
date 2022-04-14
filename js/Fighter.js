class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status) {
    super(name, hp, dmg, mana, status);
  }

  special = (victim) => {
    if (this.mana >= 20) {
      victim.hp = victim.hp - 5;
      if (victim.hp <= 0) {
        victim.status = "loser";
      }
      this.mana = this.mana - 20;
      console.log(
        this.name +
          " utilise la vision sombre donne 5 de dégats et consomme 20 mana!"
      );
    } else {
      console.log("Pas assez de mana, vous passez votre tour...");
    }
  };
}
