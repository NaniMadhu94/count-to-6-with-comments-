/* provide var with the argvs*/
const inputs=process.argv.slice(2);

/* use arrow function '=>' */
let result=inputs.map((input)=>input[0]).join('');
console.log(`[${inputs}] becomes \"${result}"`);
