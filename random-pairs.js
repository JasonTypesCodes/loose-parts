
const args = process.argv.slice(2);
const numOfItems = args.length > 0 && parseInt(args[0]) > 0 ? parseInt(args[0]) : 0;
const outputOffset = (args.length > 1 && parseInt(args[1]) > 0 ? parseInt(args[1]) : 0) + 1;

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function locateAssignment(assignments, item, forceExclude = -1) {
  const direction = randomInt(0, 2) === 0 ? 1 : -1;

  while(assignments[item] !== -1 || item === forceExclude){
    item = item + direction;
    if(item === assignments.length){
      item = 0
    } else if(item === -1) {
      item = assignments.length - 1;
    }
  }

  return item;
}

if(numOfItems === 0) {
  console.log('Please provide a positive the number of items:');
  console.log('ex.. > node random-pairs.js 12');
} else {
  const assignments = [];
  const results = {};
  let remaining = numOfItems;
  
  for(let x = 0; x < numOfItems; x++){
    assignments[x] = -1
  }

  while(remaining > 1) {
    const a = locateAssignment(assignments, randomInt(0, assignments.length));
    const b = locateAssignment(assignments, randomInt(0, assignments.length), a);
    
    assignments[a] = b;
    assignments[b] = a;
    results[a] = b;
    remaining = remaining - 2;
  }

  if(remaining === 1){
    const solo = locateAssignment(assignments, 0);
    assignments[solo] = solo;
    results[solo] = solo;
  }

  Object.keys(results).forEach(key => {
    console.log(`${parseInt(key) + outputOffset} is paired up with ${results[key] + outputOffset}`);
  });
}

