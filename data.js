import Player from "./player.js";
import { readFileSync, writeFileSync } from 'node:fs';

export default class Data {
  _url;
  constructor(url) {
    this._url = url;
  }
   
  insertUser(user) {
  
     
     
    writeFileSync(this._url, user + '\n', { encoding: 'utf-8', flag: 'a' })
    {
      
      console.log("Saved data");
    }
     
    
  }
  getUsers() {
    const users = readFileSync(this._url, "utf8", function (err) {
      
      if (err) {
        console.log(err)
      } else {
        console.log("Saved data")
      }
    });

    return users;

    
  }
  getUser(name) {
    let user = null
    let dbUsers = this.getUsers().trim();
    const usersArray = dbUsers.split("\n");

    for (let dbUser of usersArray) {
      if (dbUser === name) {
        user = new Player(name)
        return user.name;
      }
    }
    if (!user) {
      console.log("The user was not found");
    }
  }
saveWinner(obj) {
     if(obj){
      writeFileSync(this._url, obj  + '\n', { encoding: 'utf-8', flag: 'a' })
      
        console.log("Saved data");

    }
  }
   lastWinner() {
     let lastWinner = null;
     try{
       const users = readFileSync(this._url, "utf8").trim(); 
      lastWinner = users.split("\n");
     }
     
     catch (err){
       console.log(err);
    }

        return  lastWinner =lastWinner[lastWinner.length-1] 
      
 } 


}