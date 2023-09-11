Java.perform(function(){
    let Intrinsics = Java.use("kotlin.jvm.internal.Intrinsics");
    Intrinsics["areEqual"].overload('java.lang.Object', 'java.lang.Object').implementation = function (obj, obj2) {
        if(obj2 == "29.9791" || obj2 ==  "31.1341" ){
            return true;
        }
        else{
            let result = this["areEqual"](obj, obj2);
            return result;
        }
        
    };
});
