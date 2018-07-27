//LocalStorage:

var favorite_l_s = {};

favorite_l_s.supported = false;

if (typeof(Storage) !== "undefined") {
  favorite_l_s.supported = true;
}

favorite_l_s.key = "favorite_imgs_arr";

favorite_l_s.write = function(array) {
  if(favorite_l_s.supported) {
    var array_str = JSON.stringify(array);

    window.localStorage.setItem(favorite_l_s.key, array_str);
  }
};

favorite_l_s.read = function() {
  if(favorite_l_s.supported) {
    var array_str = window.localStorage.getItem(favorite_l_s.key);

    if(array_str === null) {
      array_str = "[]";
    }

    return JSON.parse(array_str);
  } else {
    return [];
  }
};

favorite_l_s.delete = function() {
  if(favorite_l_s.supported) {
    window.localStorage.removeItem(favorite_l_s.key);
  }
};

//Tests:

var test_arr = [{a:"a", b: 1}, {a:"b", b: 2}, {a:"c", b: 3}];

//console.log(favorite_l_s.read());

//console.log(favorite_l_s.write(test_arr));

//console.log(favorite_l_s.delete());

//console.log(favorite_l_s.read());