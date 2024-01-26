import Player from "./player.js";
import Data from "./data.js";
import PromptSync from 'prompt-sync';
import YatzyGame from "./yatzy.js"
const prompt = PromptSync({ sigint: true });
class Menu {
  constructor() {
      this.yatzy = new YatzyGame()
  };
   start() {
    let playersGame = null;
    let playerCount = true;
    const url = "data/score.csv"
    const data = new Data(url);
    
    let user = data.lastWinner();
    user = user.split(",");
    
    console.log(`the last winner  was ${user[0]} with ${user[2]} points`)
    do {
      console.log("Welcome to Yatzy's Game");
      playersGame = prompt("Select the number of players that will play ")
      playersGame = Number(playersGame);
      if (isNaN(playersGame)) {
        console.log("It must be a number")
      } else if (playersGame > 5) {
        console.log("The number must be less than 4");
      } else if (playersGame === 0) {
        console.log("The number cannot be 0")
      } else {
        playerCount = false;
      }
   
    }
    while (playerCount)
    let option;
    if (typeof playersGame === 'number') {
      for (let i = 0; i < playersGame; i++) {
        let validUser = true;
         do {
          validUser
         console.log("        MENU \n" +
            "1. You have played before\n" +
            "2. You are new player"
          );
          option = prompt()
           
          option = Number(option);
          if (isNaN(option)) {
            console.log("It must be a number");
          } else if (option !== 1 && option !== 2) {
            console.log("the number must be 1 or 2");
          } else {
            validUser = false;
          }
        
        } while (validUser)


        if (option === 1) {
          let validName = true;
          do {
            let user = prompt("Write your name ");
            const url = "data/users.csv"
            const data = new Data(url);
            user = data.getUser(user);
            if (!user) {
            } else if (this.yatzy.players.find((valor) => valor.name === user)) {
              console.log("The name already exists")
            } else {
                this.yatzy.players.push(new Player(user));
                validName = false;
                console.log(`Welcomen ${user}`)
              }

          } while (validName)
          
        }
        else if (option == 2) {
          let validName = true;
          let name;
          do {
            validName = true;
            name = prompt("Please write your name ");
            const url = "data/users.csv"
            const data = new Data(url);
            let users = data.getUsers().trim();
            users = users.split("\n")
            for (let user of users) {
              if (user.trim() === name) {
                console.log("A user with that name already exists");
                validName = false;
                break;
              }
            }
          } while (!validName)

            
          let newUser = new Player(name);
          this.yatzy.players.push(newUser);
          const url = "data/users.csv"
          const data = new Data(url);
          data.insertUser(newUser.name);
        }
      
      }

    }
    if (this.yatzy.players.length > 0) {
      this.yatzy.currentPlayer = this.yatzy.players[0];
      this.yatzy.playRound(); 
    }
  
  
  }


}
let a = new Menu()
a.start()