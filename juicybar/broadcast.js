Java.perform(function(){

    let BroadcastReceivers = Java.use("xyz.barsk.juicy.levels.tools.BroadcastReceivers");
    BroadcastReceivers["g"].implementation = function (intent) {

        console.log(`BroadcastReceivers.g is called: intent=${intent}`);
        let result = this["g"](intent);
        console.log(`Original flag result= JUICY{${result}}`);

        //for getting flag 3, create an fake intent with expected action :)
        const intentClass = Java.use("android.content.Intent");
        var intentTT = intentClass.$new();
        intentTT.setAction("xyz.barsk.juicy.action.KAMEN");
        let result3 = this["g"](intentTT);
        console.log(`Level 3 flag result=JUICY{${result3}}`);
        //-----
        
        return result;
    };
});



