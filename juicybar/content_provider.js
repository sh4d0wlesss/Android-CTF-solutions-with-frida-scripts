Java.perform(function(){
    //hook flag generation method with level number, its an unintented solution :/ 
    let ContentProviders = Java.use("xyz.barsk.juicy.levels.tools.ContentProviders");
    ContentProviders["o"].implementation = function (i2) {
        console.log(`ContentProviders.o is called: i2=${i2}`);
        let result = this["o"](i2);
        console.log(`ContentProviders.o result=${result}`);
        console.log(" 1: " + this["o"](1));
        console.log(" 2: " + this["o"](2));
        console.log(" 3: " + this["o"](3));
        return result;
    };
});
