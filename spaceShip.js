// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class spaceShip {
    constructor (name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate () {
        //console.log('${name} moving to ${topSpeed}');
        console.log(this.name + ' moving to ' + this.topSpeed);
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

let firstShip = new spaceShip('Sulaco', 58);
let secondShip = new spaceShip('Ishimura', 49);
firstShip.accelerate();
secondShip.accelerate();
