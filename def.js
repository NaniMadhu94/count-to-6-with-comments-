/* export a  functipon module that has a string which is imp ("!") */
module.exports = (string, bangs = string.length) => string + "!".repeat(bangs);