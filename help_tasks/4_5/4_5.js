var imgs_arr = [{"format":"jpeg","width":799,"height":3744,"filename":"0000_yC-Yzbqy7PY.jpeg","id":0,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/yC-Yzbqy7PY"},{"format":"jpeg","width":5616,"height":3744,"filename":"0001_LNRyGwIJr5c.jpeg","id":1,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LNRyGwIJr5c"},{"format":"jpeg","width":5616,"height":3744,"filename":"0002_N7XodRrbzS0.jpeg","id":2,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/N7XodRrbzS0"},{"format":"jpeg","width":5616,"height":3744,"filename":"0003_Dl6jeyfihLk.jpeg","id":3,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/Dl6jeyfihLk"},{"format":"jpeg","width":5616,"height":3744,"filename":"0004_y83Je1OC6Wc.jpeg","id":4,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/y83Je1OC6Wc"},{"format":"jpeg","width":5245,"height":3497,"filename":"0005_LF8gK8-HGSg.jpeg","id":5,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LF8gK8-HGSg"},{"format":"jpeg","width":5616,"height":3744,"filename":"0006_tAKXap853rY.jpeg","id":6,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/tAKXap853rY"},{"format":"jpeg","width":4728,"height":3168,"filename":"0007_BbQLHCpVUqA.jpeg","id":7,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/BbQLHCpVUqA"},{"format":"jpeg","width":5616,"height":3744,"filename":"0008_xII7efH1G6o.jpeg","id":8,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/xII7efH1G6o"},{"format":"jpeg","width":5616,"height":3672,"filename":"0009_ABDTiLqDhJA.jpeg","id":9,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/ABDTiLqDhJA"},{"format":"jpeg","width":2500,"height":1667,"filename":"0010_6J--NXulQCs.jpeg","id":10,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/6J--NXulQCs"},{"format":"jpeg","width":2500,"height":1667,"filename":"0011_Cm7oKel-X2Q.jpeg","id":11,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Cm7oKel-X2Q"},{"format":"jpeg","width":2500,"height":1667,"filename":"0012_I_9ILwtsl_k.jpeg","id":12,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/I_9ILwtsl_k"},{"format":"jpeg","width":2500,"height":1667,"filename":"0013_3MtiSMdnoCo.jpeg","id":13,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/3MtiSMdnoCo"},{"format":"jpeg","width":2500,"height":1667,"filename":"0014_IQ1kOQTJrOQ.jpeg","id":14,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/IQ1kOQTJrOQ"},{"format":"jpeg","width":2500,"height":1667,"filename":"0015_NYDo21ssGao.jpeg","id":15,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/NYDo21ssGao"},{"format":"jpeg","width":2500,"height":1667,"filename":"0016_gkT4FfgHO5o.jpeg","id":16,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/gkT4FfgHO5o"},{"format":"jpeg","width":2500,"height":1667,"filename":"0017_Ven2CV8IJ5A.jpeg","id":17,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ven2CV8IJ5A"},{"format":"jpeg","width":2500,"height":1667,"filename":"0018_Ps2n0rShqaM.jpeg","id":18,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ps2n0rShqaM"},{"format":"jpeg","width":2500,"height":1667,"filename":"0019_P7Lh0usGcuk.jpeg","id":19,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/P7Lh0usGcuk"}];
//5616
var get_img_arr = function() {
  return imgs_arr;
}

var filter_was_appl = function(res) {
  console.log(res);
}

var img_filter = {};

//Model:
img_filter.model = {};

img_filter.model._all = true;

img_filter.model.size = "All";

img_filter.model.author = "All";

//View:
img_filter.view = {};

img_filter.view.appl_model_to_view = function() {

  //Apply only when filter is ready:
  if(img_filter.interface.ready) {


  if(img_filter.model._all === true) {

    document.querySelector(".filter__gener__none a").className = "filter__item--selected";

  } else {

    document.querySelector(".filter__gener__none a").removeAttribute("class");

  }

  document.querySelectorAll(".filter__size__sizes a").forEach(function(a_elm) {
    if(a_elm.getAttribute("data-filter-by") === img_filter.model.size ) {
      a_elm.className = "filter__item--selected";
    } else {
      a_elm.removeAttribute("class");
    }
  });

  document.querySelectorAll(".filter__author__authors a").forEach(function(a_elm) {
    if(a_elm.getAttribute("data-filter-by") === img_filter.model.author) {
      a_elm.className = "filter__item--selected";
    } else {
      a_elm.removeAttribute("class");
    }
  });

  }//end:if(img_filter.interface.ready) {
};

//Controller:
img_filter.controller = {};

img_filter.controller.apply_filter = function() {

  //Apply only when filter is ready:
  if(img_filter.interface.ready) {

    //Unlinked copy:
    var img_arr_copy = img_filter.init.img_arr_getter();
    var interm = [];
    var result = [];

    //Apply:
    if(img_filter.model._all === false) {

      //Apply sizes:
      //!!! By width:
      switch (img_filter.model.size) {
        case "All":
          interm = img_arr_copy;
          break;
        case img_filter.init.size_arr[0]://"Large"
          img_arr_copy.forEach(function(img_data) {
            if(img_filter.init.size_appl_cond(0, img_data)) {
              interm.push(img_data);
            }
          });
          //console.log(interm);
          break;
        case img_filter.init.size_arr[1]://"Medium"
          img_arr_copy.forEach(function(img_data) {
            if(img_filter.init.size_appl_cond(1, img_data)) {
              interm.push(img_data);
            }
          });
          break;
        case img_filter.init.size_arr[2]://"Small"
          img_arr_copy.forEach(function(img_data) {
            if(img_filter.init.size_appl_cond(2, img_data)) {
              interm.push(img_data);
            }
          });
          break;
        default:
          throw "Imgs_filter: Trying to apply undefined size case.";
          break;
      }

      //Setting intermediate array as starting array:
      img_arr_copy = interm;
      interm = [];

      //Apply authors:
      switch (img_filter.model.author) {
        case "All":
          interm = img_arr_copy;
          break;
        default:
          img_arr_copy.forEach(function(img_data) {
            if(img_data.author === img_filter.model.author) {
              interm.push(img_data);
            }
          });
          break;
      }

      result = interm;

    } else {
      result = img_arr_copy;
    }

    img_filter.init.filter_res_cb(result);
  }//end: if(img_filter.interface.ready) {

};

//Init:
img_filter.init = {};

img_filter.init.authors_arr = [];

img_filter.init.authors_arr_make = function(img_arr) {
  var ret_arr = [];

  img_arr.forEach(function(img_data) {

    if( ret_arr.indexOf(img_data.author) === -1) {
      ret_arr.push(img_data.author);
    }
  });

  img_filter.init.authors_arr = ret_arr;
};

img_filter.init.size_arr = ["Large", "Medium", "Small"];
//Returns true if condition is take place:
//!!! By width.
img_filter.init.size_appl_cond = function( size_indx ,data) {
  switch (img_filter.init.size_arr[size_indx]) {
    case "Large":
      if(data.width >= 1500) {
        return true;
      } else {
        return false
      }
      break;
    case "Medium":
      if(data.width <= 1499 && data.width >= 800) {
        return true;
      } else {
        return false
      }
      break;
    case "Small":
      if(data.width <= 799) {
        return true;
      } else {
        return false
      }
      break;
    default:
      return false;
      break;
  }
};

img_filter.init.append_filters_items = function() {

  //Sizes:
  var sizes_ul = document.querySelector(".filter__size__sizes");

  img_filter.init.size_arr.forEach(function(size_str) {
    var size_li = document.createElement("li");

    size_li.innerHTML = '<a href="javascript:;" data-filter-by="'
      + size_str + '">' + size_str + '</a>';

    sizes_ul.appendChild(size_li);
  });

  //Authors:
  var authors_ul = document.querySelector(".filter__author__authors");

  img_filter.init.authors_arr.forEach(function(author_str) {
    var author_li = document.createElement("li");

    author_li.innerHTML = '<a href="javascript:;" data-filter-by="'
    + author_str + '">' + author_str + '</a>';

    authors_ul.appendChild(author_li);
  });
};

img_filter.init.add_cb_to_filters_items = function() {

  //No filter:
  document.querySelector(".filter__gener__none a").onclick = function(e) {
    
    img_filter.model._all = true;
    img_filter.model.size = "All";
    img_filter.model.author = "All";

    img_filter.controller.apply_filter();

    img_filter.view.appl_model_to_view();
  };

  //Selected size:
  document.querySelectorAll(".filter__size__sizes a").forEach(function(a_elm) {

    a_elm.onclick = function(e) {
    
    img_filter.model._all = false;
    img_filter.model.size = e.target.getAttribute("data-filter-by");

    img_filter.controller.apply_filter();

    img_filter.view.appl_model_to_view();
    };

  });
  

  //Selected author:
  document.querySelectorAll(".filter__author__authors a").forEach(function(a_elm) {

    a_elm.onclick = function(e) {
    
    img_filter.model._all = false;
    img_filter.model.author = e.target.getAttribute("data-filter-by");

    img_filter.controller.apply_filter();

    img_filter.view.appl_model_to_view();
    };

  });


};//end: img_filter.init.add_cb_to_filters_items = function() {

img_filter.init._img_arr_getter = undefined;

img_filter.init.img_arr_getter = function() {
  //Always get unlinked copy:
  return JSON.parse( JSON.stringify( img_filter.init._img_arr_getter() ) );
};

img_filter.init.filter_res_cb = undefined;




//Meta:
img_filter.interface = {};

img_filter.interface.ready = false;

//!!! To pass initialization first must be setted this two things:
img_filter.interface.add_img_arr_getter = function(img_arr_getter) {
  img_filter.init._img_arr_getter = img_arr_getter;
};

img_filter.interface.add_filter_res_cb = function(filter_res_cb) {
  img_filter.init.filter_res_cb = filter_res_cb;
};

img_filter.interface.init = function() {

  if(img_filter.init._img_arr_getter !== undefined &&
  img_filter.init.filter_res_cb !== undefined) {

    img_filter.init.authors_arr_make(img_filter.init.img_arr_getter());
    img_filter.init.append_filters_items();
    img_filter.init.add_cb_to_filters_items();

    //When all ready:
    img_filter.interface.ready = true;

    img_filter.view.appl_model_to_view();
    img_filter.controller.apply_filter();
  } else {
    throw "Imgs_filter: trying to make init befor setted img_arr_getter and filter_res_cb!";
  }
};


//Do init:
img_filter.interface.add_img_arr_getter(get_img_arr);
img_filter.interface.add_filter_res_cb(filter_was_appl);
img_filter.interface.init();