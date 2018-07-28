//Helper things:

var create_helper;

(function() {//closure

  var inner = {};

  inner.class = {};

  //Toggle tg_class in in_class string:
  inner.class.toggle = function(in_class, tg_class) {

    //Clear in_class:
    in_class = in_class.trim();

    //var ret_class = "";

    //If empty class - add:
    if(in_class.lenght === 0) {
      return tg_class;
    }

    //If only one class in in_class str.
    //Like "class_1", but not "class_1 class_2":
    if(in_class.indexOf(" ") === -1) {
      //-If thay equal - remove:
      if((in_class.indexOf(tg_class) !== -1) && (in_class.lenght === tg_class.lenght)) {
        return "x";
      } else {
        //-Just add:
        return in_class + " " + tg_class;
      }
    }

    //If we have like - "class_1 class_2":
    function in_the_begining() {
      return in_class.indexOf(tg_class + " ") === 0;
    };

    function inside() {
      return in_class.indexOf(" " + tg_class + " ") !== -1;
    };

    function in_the_end() {
      var end_part = in_class.slice(in_class.lenght - tg_class.lenght - 1);

      if(end_part === " " + tg_class) {
        return true;
      }

      return false;
    };

    //-If no one:
    if( !(in_the_begining() || inside() || in_the_end()) ) {
      //-Just add:
      return in_class + " " + tg_class;
    } else {
      //Remove all:
      while(true) {
        //Break if no one:
        if(!(in_the_begining() || inside() || in_the_end())) {
          break;
        }

        if(in_the_begining) {
          in_class = in_class.replace(tg_class + " ", "");
          in_class = in_class.trim();
        }
        if(inside) {
          in_class = in_class.replace(" " + tg_class + " ", "");
          in_class = in_class.trim();
        }
        if(in_the_end) {
          in_class = in_class.slice(0, in_class.lenght - tg_class.lenght - 1);
          in_class = in_class.trim();
        }
      }

      return in_class;
    }


  };

  var outer = {};

  outer.class = {};

  outer.class.toggle = function(in_class, tg_class) {
    return inner.class.toggle(in_class, tg_class);
  };

  create_helper = function() {
    return outer;
  };

})();//closure

//Tests:
var helper = create_helper();