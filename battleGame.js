// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

/*
const attack = function  (attackingPlayer, defendingPlayer, baseDamage, variableDamage) {
  //calculate total damage. This will equal baseDamage plus 
  //a random integer from 0 to the amount of the variableDamage
  let totalDamage = baseDamage + (Math.floor(Math.random()*(variableDamage+1)))

  //reduce the health property of the defendingPlayer by the amount
  //of the calculated damage
  defendingPlayer.health -= totalDamage;

  //return a string describing the attack, ${name} inflicts ${damage}
  //to ${defender}
  console.log(`${attackingPlayer.name} inflicted ${totalDamage} damage to ${defendingPlayer.name}`);
}
*/

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
/*
class player1 {
  constructor(name = 'defaultFirst', health = 10) {
    this.name = name;
    this.health = health;
  }
}

class player2 {
  constructor(name = 'defaultSecond', health = 10) {
    this.name = name;
    this.health = health;
  }
}
*/
const player1 = {
  name : 'Mr. Bean', 
  health : 10 
}

const player2 = {
  name : 'Pink Panther', 
  health : 10 
}

// test first function
//var Maximus = new player1 ('Maximus');
//console.log(Maximus);
//var Commodus = new player2 ('Commodus');
//console.log(Commodus);

//attack(Commodus, Maximus, 0, 8);

// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {
  //calculate total damage. This will equal baseDamage plus 
  //a random integer from 0 to the amount of the variableDamage
  let totalDamage = baseDamage + (Math.floor(Math.random()*(variableDamage+1)))

  //reduce the health property of the defendingPlayer by the amount
  //of the calculated damage
  defendingPlayer.health -= totalDamage;

  //return a string describing the attack, ${name} inflicts ${damage}
  //to ${defender}
  console.log(`${attackingPlayer.name} inflicted ${totalDamage} damage to ${defendingPlayer.name}`);
}


// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);