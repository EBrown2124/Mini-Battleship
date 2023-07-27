
const rs = require('readline-sync');

let misses = [];
let hits = [];
let shipLoc = [];
let attackLoc;
let boradArr = [];

const boradBuild = (size) => {
  for(let i = 0; i < size; i++){
    boradArr[i] = [];
    for(let j = 0; j < size; j++){
      let letters = ["a", "b", "c"];
      let x = letters[Math.floor(Math.random() * 3 )];
      let y = Math.floor(Math.random() * 3) + 1;
      boradArr[i].push(`${x}${y}`.toUpperCase());
    }
  }
  return boradArr;z
}

const setShip = () => {
  [1,2].forEach((item) => placeShip())
}

const placeShip = () => {
  const place = boradArr.flat();
  const x = Math.floor(Math.random() * place.length);
  let ship = place[x];
  return exist(ship,shipLoc);
}

const exist = (ship,shipLoc) => {
  if(!shipLoc.includes(ship)){
    shipLoc.push(ship);
    return true
  }else{
    return false
  }
}

console.log(placeShip());