class Game {
    constructor(paladin,fighter, monk, assassin, berzerker, turnLeft) {
        this.paladin = paladin;
        this.fighter = fighter;
        this.monk = monk;
        this.assassin = assassin;
        this.berzerker = berzerker;
        this.turnLeft = 10;
    }

    newTurn = () => {
        battleRoyal.startTurn();
        this.turnLeft--;
    }
}

const game = new Game(paladin, fighter, monk, assassin, berzerker);
const fighters = [paladin, fighter, monk, assassin, berzerker];