Java.perform(function(){
    let MQTT = Java.use("xyz.barsk.juicy.levels.network.MQTT");
    MQTT["g"].implementation = function (context, str, str2) {
        console.log(`MQTT.g is called: context=${context}, str=${str}, str2=${str2}`);
        if(str == "flags/flag_22"){
            console.log("flag_22 here");
            str = "flags/flag_2";
            console.log("changed to flag_2");
        }
        let result = this["g"](context, str, str2);
        console.log(`MQTT.g result=${result}`);
    return result;
    };
});

// capture the packets during request made and get flag :)
