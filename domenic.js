/* Provide the frist argv to the prg*/
const inputString =  process.argv[2];

/*  print  an output of a 2 line msg using console*/
console.log(`Hello, ${inputString}!
Your name lowercased is \"${inputString.toLowerCase()}\".`);