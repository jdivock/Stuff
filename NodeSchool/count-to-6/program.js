(function() {

    var inputs = process.argv.slice(2);

    var results = inputs.map(x => x[0])
        .reduce((y, x) => y + x);

    console.log(`[${inputs}] becomes "${results}"`);

})();
