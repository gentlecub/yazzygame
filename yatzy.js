import Player from "./player.js";
import Data from "./data.js";
import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });
export default class YatzyGame {
  constructor() {
    this.players = []; 
    this.currentPlayer = null;
    this.rules = {
      maxRounds: 13, 
      maxPlayers: 4, 
    
    };
  }
  setMaxRounds(maxRounds) {
    this.rules.maxRounds = maxRounds;
  }

  setMaxPlayers(maxPlayers) {
    this.rules.maxPlayers = maxPlayers;
  }

  addPlayer(player) {
    if (this.players.length < this.rules.maxPlayers) {
      this.players.push(player);
    }
  }

  addPlayer(name) {
    this.players.push(name);
  }


  playRound() {
    let continueUser = true
    let confirmation = null;
    console.log(`Score of ${this.currentPlayer.name}`);
    for (let a of Object.entries(this.currentPlayer.score.scores)) {
      console.log(a);
    }
    this.currentPlayer.darts = this.currentPlayer.rollDice();
    this.currentPlayer.score.dibujarDardos(this.currentPlayer.darts)
    do {
      const expresion = /[ny]/i
      console.log(`The player ${this.currentPlayer.name}: has ${this.currentPlayer.rollsLeft} opportunities`);
      console.log()
      console.log("Do you want to continue throwing dice\n" +
                   "   ********    ********    \n" +
                   "   *  N   *    *  Y   *    \n" +
                   "   ********    ********    \n"
                   )
      confirmation = prompt().toLocaleLowerCase();
      if (confirmation === "y" && this.currentPlayer.rollsLeft > 0) {
        this.currentPlayer.score.dibujarDardos(this.currentPlayer.darts)
        let cantidadCambios = prompt("Select how many dices you want to throw again:");
        cantidadCambios = parseInt(cantidadCambios, 10);

        if (!isNaN(cantidadCambios) && cantidadCambios > 0 && cantidadCambios <= this.currentPlayer.darts.length) {
          const miDiccionario = {
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false
          };
          let run = true;
          let x = 1;
          for (let i = 0; i < cantidadCambios; i++) {
            while (run) {
              let change = prompt("Select the dice you want to change ");
              change = parseInt(change, 10);
              if (isNaN(change)) {
                console.log("The data is not a number ")
              } else if (this.currentPlayer.darts.includes(change) === false) {
                console.log(`The number is not found on the dices`)
              }
              else if (!isNaN(change)) {
                let index = this.currentPlayer.getPositionsOfNumber(change);
                if (index.length > 1) {
                  for (let l = 0; l < index.length; l++) {
                    console.log(`The dices ${change} are in the position ${index[l]}`)
                  }
                  let number = prompt("Select the position that you want to change ")
                  number = parseInt(number, 10);
                  if (!isNaN(number) && index.includes(number)) {
                    if (miDiccionario[number] === false) {
                      this.currentPlayer.reroll(number)
                      this.currentPlayer.score.dibujarDardos(this.currentPlayer.darts)
                      this.currentPlayer.score.dibujarDardosX(this.currentPlayer.darts,number)
                      miDiccionario[number] = true
                      if (x < cantidadCambios) {
                        x++
                      } else {
                        run = false
                      }
                    } else {
                      console.log("The die has already changed")
                    }
                  } else {
                    console.log("It's not a number. Please enter a valid number.");
                  }
                } else if (index.length == 1) {
                  if (miDiccionario[index] === false) {
                    this.currentPlayer.rerollContinue(change)
                     this.currentPlayer.score.dibujarDardos(this.currentPlayer.darts)
                     this.currentPlayer.score.dibujarDardosX(this.currentPlayer.darts,index[0])
                    miDiccionario[index] = true
                    if (x < cantidadCambios) {
                      x++
                    } else { run = false }
                  } else {
                    console.log("The die has already changed")
                  }
                }

              }
              
            }
          }

           
          this.currentPlayer.rollsLeft--;
        }
        

        else if (isNaN(cantidadCambios))
        {
          console.log("It can't be a letter, it has to be a number. ")
        }
        else {
           console.log("The change amount entered is not valid.");
        }
        } else if (!isNaN(confirmation)) {
          console.log("It can't be a number")
        
        }
        else if (!expresion.test(confirmation)) {
          console.log("It can only be (y/n)")
        }
      
        else if (confirmation === "n") {
          continueUser = false;
        }
        else if (this.currentPlayer.rollsLeft === 0) {
          console.log("You dont'n have no more chance")
            
          continueUser = true;
        }
      
        else {
          continueUser = false;
        }
        
      }
    
    
      while (continueUser)

  
        if (confirmation === "n") {
          for (let score of Object.keys(this.currentPlayer.score.scores)) {
            console.log(score);
          }
          console.log(`${this.currentPlayer.darts}`)
      
          let chenckOption = true;
          do {
            let selectOption = prompt("Select one of the options to calculate your score ").trim();
            let category = this.currentPlayer.score.getCategoryScore(selectOption);
            if (selectOption === category) {
              let scoreResult = this.currentPlayer.selectOption(selectOption)
              if (scoreResult > 0) {
                console.log(` ${this.currentPlayer.name}: ${this.currentPlayer.points}`);
                for (let entry of Object.entries(this.currentPlayer.score.scores)) {
                  console.log(entry);
                }
                chenckOption = false;
              } else if (this.currentPlayer.rollsLeft === 0) {
                     console.log("Select one of the option")
                     let a = this.currentPlayer.score.showDicex()
                     for (const key in a) {
                      console.log(`${a[key]}`)
                     }
                let run = prompt("Option:").trim();
                if (a.includes(run)) {
                  this.currentPlayer.score.setValue(run)
                   chenckOption = false;
                } else if (!isNaN()) {
                  console.log("It can't be a number")
                } else { 
                  console.log("Select a correct value")
                }
                 
              } 
                else if (scoreResult === 0) {
                console.log("The number inserted is not in the dice")
               }
              
            } else {
              console.log("You must select one of these options:")
              for (let score of Object.keys(this.currentPlayer.score.scores)) {
                console.log(score);
              }
          
            }
          }
          while (chenckOption)
          let  lastPlayer = this.players[this.players.length - 1]
          if (lastPlayer.score.checkAllValue()) {
            this.currentPlayer = this.nextPlayer()
            this.currentPlayer.rollsLeft = 3;
            this.playRound();
          } else {
            const winner = this.getWinner();
            console.log(`The winner is ${winner.name} with ${winner.score.calculateTotalScore()} points`);
            const url = "data/score.csv";
            const data = new Data(url);
            data.saveWinner(winner.asWinner());
            this.GameFinished();

          }
          
        }
   
    }


  GameFinished() {
      let finish = prompt("Presione y si quieres continuar jugando ")
      if (finish === "y") {
        this.start();
      }

    }

    nextPlayer() {
      const currentPlayerIndex = this.players.indexOf(this.currentPlayer);
      const nextPlayerIndex = (currentPlayerIndex + 1) % this.players.length;
      return this.players[nextPlayerIndex]
      
    }
    getWinner() {
      let winner = null;
      let highestScore = -1; 

      for (const player of this.players) {
        const playerScore = player.score.calculateTotalScore();

        if (playerScore > highestScore) {
          highestScore = playerScore;
          winner = player;
        } else if (playerScore === highestScore) {
          console.log(`Tie between ${winner.name} y ${player.name}`);
        }
      }
    
      return winner;
    }
    
  
  }


