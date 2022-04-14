class Game {
    constructor(paladin,fighter, monk, assassin, berzerker, turnLeft) {
        this.paladin = new Paladin();
        this.fighter = new Fighter();
        this.monk = new Monk();
        this.assassin = new Assassin();
        this.berzerker = new Berzerker();
        this.turnLeft = 10;
    }

    newTurn = () => {
        battleRoyal.startTurn();
        this.turnLeft--;
        console.log("Tours avant la fin de la bagarre " + this.turnLeft + ".");
    }

    watchStats = () => {
        if(paladin.status == "loser") {
            console.log("Le paladin est un misérable faible.");
        } else {
            console.log("Paladin: " + this.paladin.name + " " + this.paladin.health + " " + this.paladin.mana + " ");
        }

        if(fighter.status == "loser") {
            console.log("Le guerrier est un misérable faible.");
        } else {
            console.log("Fitgher: " + this.fighter.name + " " + this.fighter.health + " " + this.fighter.mana + " ");
        }

        if(monk.status == "loser") {
            console.log("Le monnk est un misérable faible.");
        } else {
            console.log("Monk: " + this.monk.name + " " + this.monk.health + " " + this.monk.mana + " ");
        }

        if(assassin.status == "loser") {
            console.log("L'assassin est un misérable faible.");
        } else {
            console.log("Assassin: " + this.assassin.name + " " + this.assassin.health + " " + this.assassin.mana + " ");
        }

        if(berzerker.status == "loser") {
            console.log("Le berzerker est un misérable faible.");
        } else {
            console.log("Berzerker: " + this.berzerker.name + " " + this.berzerker.health + " " + this.berzerker.mana + " ");
        }
    }
}

const game = new Game(paladin, fighter, monk, assassin, berzerker);
const fighters = [paladin, fighter, monk, assassin, berzerker];
