Java.perform(function(){
    // 1 ---------------------------------------------------------------------------------------
    let challenge_01 = Java.use("uk.rossmarks.fridalab.challenge_01");
    challenge_01["getChall01Int"].implementation = function () {return 1;};
    // 3 ---------------------------------------------------------------------------------------
    let MainActivity = Java.use("uk.rossmarks.fridalab.MainActivity");
    MainActivity["chall03"].implementation = function () {return true;};
    // 5 ---------------------------------------------------------------------------------------
    MainActivity["chall05"].implementation = function (str) {
    this["chall05"]("frida");
    };
    // 6 - 8 -----------------------------------------------------------------------------------
    setTimeout(function () {
      Java.perform(function () {
        var challenge_06 = Java.use('uk.rossmarks.fridalab.challenge_06');
        challenge_06.addChall06.overload('int').implementation = function (a) {
          Java.choose('uk.rossmarks.fridalab.MainActivity', {
                  onMatch: function(instance) {
                    instance.chall06(challenge_06.chall06.value);
                    // get button for solving chall 8
                    var bt_id = instance.findViewById(2131165231);
                    var bt_class = Java.use('android.widget.Button');
                    console.log(bt_id);
                    var target_button = Java.cast(bt_id,bt_class);
                    var javaString = Java.use('java.lang.String');
                    target_button.setText(javaString.$new("Confirm"));
                  },
                  onComplete: function() {}
              });
        }
      })
    }, 10000);
    // 2 - 4 - 7 - 8 ---------------------------------------------------------------------------
    MainActivity["onCreate"].implementation = function (bundle) {
        console.log(`MainActivity.onCreate is called: bundle=${bundle}`);

        // 7 --(call setChall07 to get original pin value and prevent null pin problem)---------
        var challenge_07 = Java.use("uk.rossmarks.fridalab.challenge_07");
        challenge_07.setChall07();
        console.log("Target PIN: " + challenge_07.chall07.value);
        let pin= "";
        for (let i = 1000; i < 10000; i++) {
          pin = "" + i;
          let result = Java.use("uk.rossmarks.fridalab.challenge_07").check07Pin(pin)
          if(result){
              break;
          }
        }
        //--------------------------------------------------------------------------------------
        Java.choose("uk.rossmarks.fridalab.MainActivity" , {
          onMatch : function(instance){ 
            console.log("Found instance: "+instance);
            console.log("Calling chall2 func: " + instance.chall02());
            console.log("Calling chall4 func: " + instance.chall04("frida"));
            console.log("Calling check07 func: " + instance.chall07(pin));
          },
          onComplete:function(){}
        
        });
        //call original onCreate
        this["onCreate"](bundle);
    };

});
