/* provoide a varialble containg argvs to the prg */ 
let input=process.argv.slice(2);

/* use and ES6 operator to find the min value */
 
min=Math.min(...input)
console.log(`The minimum of [${input}] is ${min}`);
