Java.perform(function(){
    //1
    var string_class = Java.use("java.lang.String");
    let FridaIntro = Java.use("xyz.barsk.juicy.levels.dynamic.FridaIntro");
    FridaIntro["getFlag1"].implementation = function (context) {
        console.log(this["getFlag1"](context));
        var my_string = string_class.$new("Flaggy McFlagface");
        return my_string;
    };
    //2
    Java.choose("xyz.barsk.juicy.levels.dynamic.FridaIntro" , {
        onMatch : function(instance){ //This function will be called for every instance found by frida
          console.log("Found instance: "+instance);
          instance.staticMember.value = 584;
          instance.member.value = 23;
          console.log("Static value " + instance.staticMember.value);
          console.log("member value " + instance.member.value);
        },
        onComplete:function(){}
      
      });
      //3
      setTimeout(function () {
        var uuid_class = Java.use("java.util.UUID");
        uuid_class.toString.implementation = function(){
          console.log("heyyo");
          var yuyuaydi = this["toString"]();
          console.log("yuyuaydi= " + yuyuaydi);
          return "totally not a random UUID";
        };
      }, 10000);

});
