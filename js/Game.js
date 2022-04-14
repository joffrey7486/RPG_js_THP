class Game {
  constructor(paladin, fighter, monk, assassin, berzerker, turnLeft) {
    this.paladin = new Paladin();
    this.fighter = new Fighter();
    this.monk = new Monk();
    this.assassin = new Assassin();
    this.berzerker = new Berzerker();
    this.wizard = new Wizard();
    this.hacker = new Hacker();
    this.turnLeft = 10;
    this.fighters = [
      this.paladin,
      this.fighter,
      this.monk,
      this.assassin,
      this.berzerker,
      this.wizard,
      this.hacker
    ];
    this.initHumanPlayer();
    this.newTurn();
  }

  initHumanPlayer = () => {
    while (true) {
      console.log(this.fighters.map((fighter) => fighter.name));
      let choiceBrawler = prompt(
        `Choisissez un BAGARREUR: ${this.fighters
          .map((brawler) => brawler.name)
          .join(", ")}`
      );
      if (
        this.fighters.map((fighter) => fighter.name).includes(choiceBrawler)
      ) {
        this.enemies = this.fighters.filter(
          (brawler) => brawler.name !== choiceBrawler
        );
        console.log(`Vous avez choisi ${choiceBrawler}. Bon chance enculé...`);
        this.humanPlayer = this.fighters.filter(
          (brawler) => brawler.name == choiceBrawler
        )[0];
        break;
      }
    }
  };

  // Lance un tour complet de jeu si la conditions de victoire n'est pas remplie
  newTurn = () => {
    // mettre dans un tableau
    while (
      this.turnLeft > 0 &&
      this.fighters.filter((fighter) => fighter.status == "playing").length > 1
    ) {
      this.fighters
        .filter((fighter) => fighter.status == "playing")
        .sort(() => Math.random() - 0.5)
        .forEach((fighter) => {
          this.watchStats();
          let turn = new Turn();
          turn.startTurn(
            this.fighters.filter((brawler) => brawler.status == "playing"),
            fighter,
            this.humanPlayer,
            this.enemies
          );
          this.sleep(1);
        });

      this.turnLeft--;
      console.log("Tours avant la fin de la bagarre " + this.turnLeft + ".");
    }

    // tout les fighter avec le status "playing" son déclarer "winner"
    var remainingPlayers = this.fighters.filter(
      (fighter) => fighter.status == "playing"
    );
    if (remainingPlayers.length == 1) {
      document.querySelector(
        ".winner"
      ).innerHTML = `${remainingPlayers[0].name} a gagné la bagarre !`;
    } else {
      document.querySelector(
        ".winner"
      ).innerHTML = `Voici les gagnants de la bagarre: ${remainingPlayers
        .map((player) => player.name)
        .join(", ")}`;
    }
  };

  // Donne les statistiques de partie
  watchStats = () => {
    document.querySelector(".player-stats").innerHTML =
      "Tes stats " +
      this.humanPlayer.name +
      " : [HP]= " +
      this.humanPlayer.hp +
      "    [MANA] : " +
      this.humanPlayer.mana;
    document.querySelector(
      ".turn-left"
    ).innerHTML = `Tours restants : ${this.turnLeft}`;
    this.fighters.forEach((fighter) => {
      document.querySelector(`.${fighter.name}`).innerHTML = "";
      if (fighter.status == "playing" && fighter != this.humanPlayer) {
        document.querySelector(
          `.${fighter.name}`
        ).innerHTML = `${fighter.name} : [HP]=${fighter.hp}   [MANA]=${fighter.mana}`;
      }
    });
  };

  sleep(seconds) {
    var waitUntil = new Date().getTime() + seconds * 1000;
    while (new Date().getTime() < waitUntil) true;
  }
}

var game = new Game();
