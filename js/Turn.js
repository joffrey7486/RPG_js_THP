class Turn {
  startTurn = (fighters, fighter, humanPlayer, enemies) => {
    if (fighter.status != "playing") {
      return;
    }

    clearInterval(10000);
    console.log("##################################################");
    console.log("Il est temps pour " + fighter.name + " de TAPER!!!");

    let enemy;
    let action = "";

    if (fighter == humanPlayer) {
      while (true) {
        // supprimer tout les enemies avec le status "loser"
        enemies = enemies.filter((brawler) => brawler.status !== "loser");
        let choiceEnemy = prompt(
          "Qui tapes-tu ? " + enemies.map((enemy) => enemy.name).join(", ")
        );
        if (enemies.map((enemy) => enemy.name).includes(choiceEnemy)) {
          enemy = enemies.filter((brawler) => brawler.name == choiceEnemy)[0];
          break;
        } else {
          console.log("Tu n'as pas choisi un ennemi");
        }
      }

      action = prompt(
        `${fighter.name} Veux-tu utiliser ton attaque spécial ? Tape "special" ou appuie sur entrer pour une attaque normal`
      );
      if (action == "special") {
        fighter.special(enemy);
      } else {
        fighter.dealDamage(enemy);
      }
    } else {
      let computerEnemies = fighters.filter(
        (brawler) => brawler.name !== fighter.name
      );
      // fighter attaque un computerEnemy random
      enemy =
        computerEnemies[Math.floor(Math.random() * computerEnemies.length)];
      fighter.dealDamage(enemy);
    }
  };
}
