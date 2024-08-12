export function letterGenerator () {
      let max = 122;
      let min = 97;
      let roll = Math.floor(Math.random() * (max-min+1)) + min;
      return String.fromCharCode(roll)
}

console.log( letterGenerator());