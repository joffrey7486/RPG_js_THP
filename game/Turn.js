class Turn extends Game {
    constructor(turnLeft, paladin, fighter, monk, assassin, berzerker) {
        super(paladin, fighter, monk, assassin, berzerker, turnLeft)
    }

    startTurn = () => {
        const brawler = fighters.filter(brawler => brawler.status == "playing");
        const eliminated = fighters.filter(brawler => brawler.status == "loser");
        
        // PLAYER CHOICE
        let choiceBrawler = prompt("Choisissez un brawler: " + paladin.name + ", " + fighter.name + ", " + monk.name + ", " + assassin.name + ", " + berzerker.name);
        const player = fighters.filter(brawler => brawler.name == choiceBrawler);
        const enemies = fighters.filter(brawler => brawler.name !== choiceBrawler);
        console.log("Vous avez choisi " + player[0].name + ".");

        
        // PLAYER ACTION
        let action;
        let choiceAction = prompt("Que fais-tu ? 1 pour attaquer ou 2 pour le coup spécial.");
        if(choiceAction == 1) {
            action = 1;
        } else if(choiceAction == 2) {
            action = 2;
        } else {
            console.log("Vous n'avez pas choisi une action valide.");
            choiceAction = prompt("Que fais-tu ? 1 pour attaquer ou 2 pour le coup spécial.");
        }
        // choisir qui ataquer sauf brawler de player
        let choiceEnemy = prompt("Qui tapes-tu ?" + enemies.map(enemy => enemy.name + ", "));
        const enemy = enemies.filter(brawler => brawler.name == choiceEnemy);
        
        
    }

}
const battleRoyal = new Turn();

/*for(let i = 0; i < 10; i++){
    const eliminated = fighters.filter(brawler => brawler.status == "loser");
    const winner = fighters.filter(brawler => brawler.status == "alive")[0];
    if(eliminated.length == 4){
        console.log("Le gagnant est " + winner.name);
    } else {
        battleRoyal.startTurn();
    }
}*/