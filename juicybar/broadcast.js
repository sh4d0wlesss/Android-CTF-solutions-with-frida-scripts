//unintended solution for broadcast section flag-2
Java.perform(function(){
    let BroadcastReceivers = Java.use("xyz.barsk.juicy.levels.tools.BroadcastReceivers");
    BroadcastReceivers["g"].implementation = function (intent) {
        console.log(`BroadcastReceivers.g is called: intent=${intent}`);
        let result = this["g"](intent);
        console.log(`BroadcastReceivers.g result=${result}`);
        console.log("Flag: JUICY{" + result + "}");
        return result;
    };
});
