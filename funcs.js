function isFive(num) {
  return num === 5 ? true: false;
}

function isOdd(number) {
  if (typeof number !== "number"){
    throw Error("Not a number")
  }

  return number % 2 !== 0? true: false;
}

function myRange(min, max, step = 1) {
  let range = [];

  for (let i = min; i <= max; i += step){
    range.push(i);
  }

  return range;
}


module.exports = { isFive, isOdd, myRange };
