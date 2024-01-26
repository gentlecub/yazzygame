export default class Score {
  constructor() {
    this.scores = {
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      // onePair:0,
      //twoPairs: 0,
      //threeOfAKind:0,s
      //fourOfAKind:0,
      //smallStraight:0,
      //largeStraight:0,
      //fullHouse:0,
      //chance: 0,
  
      // yatzy: 0
    };
  }

  recordScore(category, points) {
    if (!this.scores[category]) {
      this.scores[category] = points;
    }
  }

  calculateTotalScore() {
    let totalScore = 0;

    for (const category in this.scores) {
      if (this.scores[category] === -1) {
        this.scores[category] = 0;
      }
      totalScore += this.scores[category];
    }
    return totalScore;
  }
  getCategoryScore(category) {
    if (this.scores.hasOwnProperty(category)) {
      return category;
    } else {
      return null;
      }
    
    }

   checkAllValue() {
  for (const key in this.scores) {
    if (this.scores[key] === 0) {
      return true; 
    }
  }
  return false; 
   }
 dibujarDardos(a) {
  const dice = {
    1: '  *****  \n *     * \n*   1   *\n *     * \n  *****  \n',
    2: '  *****  \n *     * \n*   2   *\n *     * \n  *****  \n',
    3: '  *****  \n *     * \n*   3   *\n *     * \n  *****  \n',
    4: '  *****  \n *     * \n*   4   *\n *     * \n  *****  \n',
    5: '  *****  \n *     * \n*   5   *\n *     * \n  *****  \n',
    6: '  *****  \n *     * \n*   6   *\n *     * \n  *****  \n',
  };
   
   const dardoPattern =
  `  *****     *****      *****      *****       *****                                                                                                        \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                           \n` +
  `*   ${a[0]}   * *   ${a[1]}   *  *   ${a[2]}   *  *   ${a[3]}   *   *   ${a[4]}   *                                                                                              \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                          \n` +
  `  *****     *****      *****      *****       *****                                                                                                        `;  
   
   
 /* let  arrayDice = '';
  for (const numero of arrNumber) {
    arrayDice += dice[numero];
  }*/
   console.log(dardoPattern)
 }
  dibujarDardosX(a, i) {
  let dardoPattern 
switch (i) {
  case 0:
    dardoPattern =  `  *****     *****      *****      *****       *****                                                                                                        \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                           \n` +
  `*   X   * *   ${a[1]}   *  *   ${a[2]}   *  *   ${a[3]}   *   *   ${a[4]}   *                                                                                              \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                          \n` +
  `  *****     *****      *****      *****       *****                                                                                                        `;  
    break;
  case 1:
   dardoPattern =  `  *****     *****      *****      *****       *****                                                                                                        \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                           \n` +
  `*   ${a[0]}   * *   X   *  *   ${a[2]}   *  *   ${a[3]}   *   *   ${a[4]}   *                                                                                              \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                          \n` +
  `  *****     *****      *****      *****       *****                                                                                                        `;  
   
    break;
  case 2:
   dardoPattern =  `  *****     *****      *****      *****       *****                                                                                                        \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                           \n` +
  `*   ${a[0]}   * *   ${a[1]}   *  *   X   *  *   ${a[3]}   *   *   ${a[4]}   *                                                                                              \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                          \n` +
  `  *****     *****      *****      *****       *****                                                                                                        `;  
   
    break;
  case 3:
    dardoPattern =  `  *****     *****      *****      *****       *****                                                                                                        \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                           \n` +
  `*   ${a[0]}   * *   ${a[1]}   *  *   ${a[2]}   *  *   X   *   *   ${a[4]}   *                                                                                              \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                          \n` +
  `  *****     *****      *****      *****       *****                                                                                                        `;  
   
    break;
  case 4:
    dardoPattern =  `  *****     *****      *****      *****       *****                                                                                                        \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                           \n` +
  `*   ${a[0]}   * *   ${a[1]}   *  *   ${a[2]}   *  *   ${a[3]}   *   *   X   *                                                                                              \n` +
  ` *     *   *     *    *     *    *     *     *     *                                                                                          \n` +
  `  *****     *****      *****      *****       *****                                                                                                        `;  
    break;

  }
  console.log(dardoPattern)

  }
  showDicex() {
    let aux = []
    for (const key in this.scores) {
      if (this.scores[key] === 0) {
             aux.push(key)
      }
    }
    return aux;
  }
  setValue(keyValue)
  {
    this.scores[keyValue] = -1;
  }
}
