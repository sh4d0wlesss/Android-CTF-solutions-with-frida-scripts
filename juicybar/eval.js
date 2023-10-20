Java.perform(function(){
        let ReverseEngineering = Java.use("xyz.barsk.juicy.levels.static.ReverseEngineering");
        ReverseEngineering["eval"].implementation = function (str) {
            console.log(`ReverseEngineering.eval is called: str=${str}`);
            let result = this["eval"](str);
            console.log(`ReverseEngineering.eval result=${result}`);
            return result;
    };

    let b = Java.use("s1.b");
b["a"].implementation = function (str, dVar) {
    console.log(`b.a is called: str=${str}, dVar=${dVar}`);
    let result = this["a"](str, dVar);
    console.log(`b.a result=${result}`);
    return result;
};
});