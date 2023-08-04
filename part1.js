// const rs = require('readline-sync');

// const start = rs.keyIn('Press any key... ')
// const stirke = rs.question('Enter a location to strike ')
const createGrid = () => {
  const alpha = 'abcdefghij';
  const borad = [];
  for (let i = 0; i < 3; i++) {
    borad[i]=[];
    for (let j = 0; j < 3; j++) {
      borad[i].push(`${alpha[i]}${j + 1}`);
    }
  }
  return borad
}


const exist = (ship, shipLoc) => {
  if(!shipLoc.includes(ship)) {
    shipLoc.push(ship);
    return true
  }else{
    return false
  }
}

const rng = () =>{
  const coords = grid.flat()
  const loc = Math.floor(Math.random() * coords.length)
  let ship = coords[loc]
  return exist(ship,shipLoc)
}

const set = () => {
  [1,2].forEach((item) => rng())
}

const shipCheck = (grid, location) => {
  const spot = location.toLowerCase()
  if (grid === spot) {
    return 'hit';
  }
  return 'miss';
}



let grid = createGrid();
let shipLoc = []
let call = 'a1';
let result = shipCheck(shipLoc, call );


console.log(shipLoc);
console.log(result);