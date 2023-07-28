const rs = require('readline-sync');
const start = rs.question('Press any key... ')
const stirke = rs.question('Enter a location to strike ')


const run = (stirke) => {
  const alpha = 'abcdefghij'.toUpperCase()
  let boradsize = 3;
  let shipLoc = [];

  shipLoc
  let grid = []
  let stirkeLoc = stirke;
  
  const random = (size) => {
    return Math.floor(Math.random() *size.length);
  }

  const creatGrid = (size) => {
    for (let i = 0; i < size; i++) {
      grid[i]=[];
      for (let j = 0; j < size; j++) {
        grid[i].push(`${alpha[i]}${j + 1}`)
      }
    }
    return grid
  }
  creatGrid(boradsize)
  
  
  const exist = (ship, shipLoc) => {
    if(!shipLoc.includes(ship)) {
      shipLoc.push(ship);
      return true
    }else{
      return false
    }
  }
  
  const place = () => {
    const coords = grid.flat()
    const loc = random(coords)
    let ship = coords[loc]
    return exist(ship,shipLoc)
  }
  place()

  const set = () => {
    [1, 2].forEach((item) => place())
  }
  set()
  
  const hitMiss = () =>{
    for (let i = 0; i < shipLoc.length; i++) {
      shipLoc[i]
      if(stirkeLoc === shipLoc[i]) {
       console.log('hit');
      }else{
        console.log('miss')
      }
    }
  }  
  hitMiss(stirkeLoc)
  }

  console.log(run(stirke))