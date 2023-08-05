const rs = require('readline-sync');

const start = rs.keyIn('Press any key... ')


const stirke = rs.question('Enter a location to strike ')
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

const rng = () =>{
  const coords = grid.flat()
  const loc = Math.floor(Math.random() * coords.length)
  let ship = coords[loc]
  return ship
}

const shipCheck = (grid, location) => {
  const spot = location.toLowerCase()
  if (grid === spot) {
    return console.log('hit');
  }
  return console.log('miss');
}



let grid = createGrid();
let emeny = rng()
let call = stirke;
let result = shipCheck(emeny, call);
let missCount = 0;
let hitCount = 0;