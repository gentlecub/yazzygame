import Score from "./scoresheet.js";
import Data from "./data.js";
export default class Player {
  constructor(name) {
    this.name = name;
    this.darts = Array(5).fill(0); 
    this.rollsLeft = 3; 
    this.score = new Score();
    this.points = 0

  }

  
  rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollDice() {
    
    if (this.rollsLeft > 0) {
      for (let i = 0; i < 5; i++) {
      
        this.darts[i] = this.rollDie();
      }

      this.rollsLeft--;
    }
    return this.darts;
  }

  reroll(indices) {
      
          this.darts[indices] = Math.floor(Math.random() * 6) + 1;
  
    }
  

 rerollContinue(...indices) {
   
      for (let i = 0; i < indices.length; i++) {
        if (this.darts.includes(indices[i])) {
          let index = this.darts.indexOf(indices[i]);
          this.darts[index] = Math.floor(Math.random() * 6) + 1;

        } else {
          console.log("The value was not found")
        }
      }
    }
  




 calculateScore(name)
  {  
    let score = 0;
    switch (name) {
     
      case 'ones':
        score  = this.calculateOnes();
        this.points += score;
        break;
      case 'twos':
        score  += this.calculateTwos();
        this.points += score;
        break;
      case 'threes':
          score += this.calculateThrees();
         this.points += score;
        break;
      case 'fours':
        score += this.calculateFours();
        this.points += score;
        break;
      case 'fives':
        score += this.calculateFives();
        this.points += score;
        break;
      case 'sixes':
        score += this.calculateSixes();
        this.points += score;
        break;
  
}
    return score;

  }


  calculateOnes() {
     let one = this.darts.filter(dado => dado === 1);
     this.score.scores["ones"] = one.reduce((total, dado) => total + dado, 0);
     return one =  one.reduce((total, dado) => total + dado, 0);
  }
calculateTwos() {
    let two = this.darts.filter(dado => dado === 2);
    this.score.scores["twos"] = two.reduce((total, dado) => total + dado, 0);
    two = two.reduce((total, dado) => total + dado, 0);
  return two;
  }
  calculateThrees() {
    let three = this.darts.filter(dado => dado === 3);
    this.score.scores["threes"] = three.reduce((total, dado) => total + dado, 0);
    return three =  three.reduce((total, dado) => total + dado, 0);
  }
  calculateFours() {
    let four = this.darts.filter(dado => dado === 4);
     this.score.scores["fours"] = four.reduce((total, dado) => total + dado, 0);
     return four =  four.reduce((total, dado) => total + dado, 0);
  }
  calculateFives() {
     let five = this.darts.filter(dado => dado === 5);
     this.score.scores["fives"] = five.reduce((total, dado) => total + dado, 0);
     return five =  five.reduce((total, dado) => total + dado, 0);
  }

  calculateSixes() {
    let sex = this.darts.filter(dado => dado === 6);
    this.score.scores["sixes"] = sex.reduce((total, dado) => total + dado, 0);
    return sex = sex.reduce((total, dado) => total + dado, 0);
    
  }

  selectOption(option) {
    let result = 0 ;

   
    switch (option) {
      case 'ones':
        if (this.score.scores['ones'] > 0) {
          console.log("The value cannot be changed")
          result = null;
        }
         else {
          result = this.calculateScore('ones');
        }
        break;
      case 'twos':
        if (this.score.scores['twos'] > 0) {
          console.log("The value cannot be changed")
          result = null
        } else {
          result = this.calculateScore('twos');
        }
        break;
      case 'threes':
        if (this.score.scores['threes'] > 0) {
            onsole.log("The value cannot be changed")
            result = null
        } else {
          result = this.calculateScore('threes');
        }
        break;
      case 'fours':
        if (this.score.scores['fours'] > 0) {
          console.log("The value cannot be changed")
          result = null
        } else {
          result = this.calculateScore('fours');
                
        }
        break;
      case 'fives':
        if (this.score.scores['fives'] > 0) {
          console.log("The value cannot be changed")
          result = null
        } else {
          result = this.calculateScore('fives');
            
        }
        break;
      case 'sixes':
           
        if (this.score.scores['sixes'] > 0) {
          console.log("The value cannot be changed")
          result = null
        } 
        else {
          result = this.calculateScore('sixes');
               
        }
        break;
      default:
        console.log("Invalid option");
        break;
    }
    
   
    return result;
  }
  
  getPositionsOfNumber(numberToFind) {
  const positions = [];
  for (let i = 0; i < this.darts.length; i++) {
    if (this.darts[i] == numberToFind) {
      positions.push(i);
    }
  }
  return positions;
  }
  markPositionWithX(position) {
     let dartsAsStringArray;
    if (position >= 0 && position < this.darts.length) {
     dartsAsStringArray = this.darts.map((value, index) => (index == position ? 'x' : value.toString()));
    } else {
      console.log("The position entered is not valid.");
    }
     return dartsAsStringArray
  }
 asWinner() {
    let date = new Date()
    const day = date.getDate(); 
    const month = date.getMonth() + 1; 
    const year = date.getFullYear(); 

    return this.name + "," + day + " " + month + " " + year + "," + this.score.calculateTotalScore();
  }

}