var cs_2 = CsCreate();

var b = "This is B.";

/**/
cs_2.set_reac("b.give_str", function(data) {
  console.log("B " + data);
});

cs_2.say("b.give_str");