module.exports = function average(...args) {
    var result = 0;
    for (var i = 0; i< args.length; i++) {
        result = result + args[i];
            }
            return result / args.length;
        }

        /*  
           module.exports = (...args) => {
        var sum = args.reduce((soFar, value) => soFar + value, 0);
        return sum / args.length;
    };
    */