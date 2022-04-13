class Turn extends Game {
    constructor(turnLeft, paladin, fighter, monk, assassin, berzerker) {
        super(paladin, fighter, monk, assassin, berzerker, turnLeft)
    }

    startTurn = () => {
        const brawler = fighters.filter(brawler => brawler.status != "loser");
        console.log("brawler")
           
        
        /*while(this.turnLeft > 0 || brawler.length > 1) {

        }*/
        
    }

}
const battleRoyal = new Turn();
