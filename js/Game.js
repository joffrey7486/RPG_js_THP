class Game {
    constructor(paladin,fighter, monk, assassin, berzerker, turnLeft) {
        this.paladin = new Paladin();
        this.fighter = new Fighter();
        this.monk = new Monk();
        this.assassin = new Assassin();
        this.berzerker = new Berzerker();
        this.wizard = new Wizard();
        this.turnLeft = 10;
        this.fighters = [this.paladin, this.fighter, this.monk, this.assassin, this.berzerker, this.wizard];
        this.initHumanPlayer();
        this.newTurn();
    }      

    initHumanPlayer = () => {
        while (true) {
            console.log(this.fighters.map(fighter => fighter.name))
            let choiceBrawler = prompt(`Choisissez un BAGARREUR: ${this.fighters.map(brawler => brawler.name).join(", ")}`);
            if (this.fighters.map(fighter => fighter.name).includes(choiceBrawler)) { 
                this.enemies = this.fighters.filter(brawler => brawler.name !== choiceBrawler);
                console.log(`Vous avez choisi ${choiceBrawler}. Bon chance enculé...`);
                this.humanPlayer = this.fighters.filter(brawler => brawler.name == choiceBrawler)[0];
                break;
            };
        };
    }

    
    // Lance un tour complet de jeu si la conditions de victoire n'est pas remplie
    newTurn = () => {
        // mettre dans un tableau 
        while(this.turnLeft > 0 || this.fighters.length == 1){
            this.fighters.sort(() => Math.random() - 0.5).forEach(fighter => {
                let turn = new Turn();
                turn.startTurn(this.fighters, fighter, this.humanPlayer, this.enemies);
                this.fighters = this.fighters.filter(brawler => brawler.status !== "loser");
            });
            
            this.turnLeft--;
            console.log("Tours avant la fin de la bagarre " + this.turnLeft + ".");
        }  
        // tout les fighter avec le status "playing" son déclarer "winner"
        this.fighters = this.fighters.filter(brawler => brawler.status === "playing");
        if (this.fighters.length == 1) {
            console.log(`${this.fighters[0].name} a gagné la bagarre !`);
        } else if (this.fighter.length < 1) {
            console.log(`Voici les gagnants de la bagarre: ${this.fighters.map(fighter => fighter.name).join(", ")}`);
        } 
        
    }

    // Donne les statistiques de partie 
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

var game = new Game();
