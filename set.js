var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        /* pass  setImmediate function and as this.yelp is undefined use .bindthis to print the value using console*/
        setImmediate(function () {
            console.log(this.yelp);
        }.bind(this));
    }
};
foot.kick();

