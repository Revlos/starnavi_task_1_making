var imgs_arr = [{"format":"jpeg","width":5616,"height":3744,"filename":"0000_yC-Yzbqy7PY.jpeg","id":0,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/yC-Yzbqy7PY"},{"format":"jpeg","width":5616,"height":3744,"filename":"0001_LNRyGwIJr5c.jpeg","id":1,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LNRyGwIJr5c"},{"format":"jpeg","width":5616,"height":3744,"filename":"0002_N7XodRrbzS0.jpeg","id":2,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/N7XodRrbzS0"},{"format":"jpeg","width":5616,"height":3744,"filename":"0003_Dl6jeyfihLk.jpeg","id":3,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/Dl6jeyfihLk"},{"format":"jpeg","width":5616,"height":3744,"filename":"0004_y83Je1OC6Wc.jpeg","id":4,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/y83Je1OC6Wc"},{"format":"jpeg","width":5245,"height":3497,"filename":"0005_LF8gK8-HGSg.jpeg","id":5,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LF8gK8-HGSg"},{"format":"jpeg","width":5616,"height":3744,"filename":"0006_tAKXap853rY.jpeg","id":6,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/tAKXap853rY"},{"format":"jpeg","width":4728,"height":3168,"filename":"0007_BbQLHCpVUqA.jpeg","id":7,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/BbQLHCpVUqA"},{"format":"jpeg","width":5616,"height":3744,"filename":"0008_xII7efH1G6o.jpeg","id":8,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/xII7efH1G6o"},{"format":"jpeg","width":5616,"height":3672,"filename":"0009_ABDTiLqDhJA.jpeg","id":9,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/ABDTiLqDhJA"},{"format":"jpeg","width":2500,"height":1667,"filename":"0010_6J--NXulQCs.jpeg","id":10,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/6J--NXulQCs"},{"format":"jpeg","width":2500,"height":1667,"filename":"0011_Cm7oKel-X2Q.jpeg","id":11,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Cm7oKel-X2Q"},{"format":"jpeg","width":2500,"height":1667,"filename":"0012_I_9ILwtsl_k.jpeg","id":12,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/I_9ILwtsl_k"},{"format":"jpeg","width":2500,"height":1667,"filename":"0013_3MtiSMdnoCo.jpeg","id":13,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/3MtiSMdnoCo"},{"format":"jpeg","width":2500,"height":1667,"filename":"0014_IQ1kOQTJrOQ.jpeg","id":14,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/IQ1kOQTJrOQ"},{"format":"jpeg","width":2500,"height":1667,"filename":"0015_NYDo21ssGao.jpeg","id":15,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/NYDo21ssGao"},{"format":"jpeg","width":2500,"height":1667,"filename":"0016_gkT4FfgHO5o.jpeg","id":16,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/gkT4FfgHO5o"},{"format":"jpeg","width":2500,"height":1667,"filename":"0017_Ven2CV8IJ5A.jpeg","id":17,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ven2CV8IJ5A"},{"format":"jpeg","width":2500,"height":1667,"filename":"0018_Ps2n0rShqaM.jpeg","id":18,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ps2n0rShqaM"},{"format":"jpeg","width":2500,"height":1667,"filename":"0019_P7Lh0usGcuk.jpeg","id":19,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/P7Lh0usGcuk"}];
var img_panel = {};

//Model:
img_panel.model = {};

img_panel.model.imgs_arr = imgs_arr;
img_panel.model.imgs_num = imgs_arr.length;
img_panel.model.max_on_page = 4;
img_panel.model.pag_num_all = Math.ceil(img_panel.model.imgs_num/img_panel.model.max_on_page);
img_panel.model.pag_arr_all = (function() {
  var ret_arr = [];
  for(var i = 0; i < img_panel.model.pag_num_all; i++) {
    ret_arr.push(i+1);
  };

  return ret_arr;
})();

img_panel.model.pag = {};
//This is number of item in the "img_panel.model.pag_arr_all".
img_panel.model.pag.sel = 0;
img_panel.model.pag.max_in_row = 3;
img_panel.model.pag.num_arr = [];

img_panel.model.imgs = {};
img_panel.model.imgs.show_arr = [];


//View:
img_panel.view = {};

img_panel.view.show_img_arr = function() {

  //!!! Add checking for various cases.
  var ret_str = "";

  img_panel.model.imgs.show_arr.forEach(function(img) {
    ret_str += '<img src="https://picsum.photos/200?image=' + img.id + '">';
  });

  //console.log(ret_str);

  document.querySelector(".img_panel__imgs").innerHTML = ret_str;
  //!!! Add onclick events to imgs.
};

img_panel.view.show_nav_num = function() {

  var html_str = "|";

  img_panel.model.pag.num_arr.forEach(function(numb){

    if(numb === img_panel.model.pag_arr_all[img_panel.model.pag.sel]) {
      html_str += '<li><a href="javascript:;"' + 
      ' class="img_panel__nav__num__item img_panel__nav__num__item--selected"' + 
      ' data-pag-num="' + numb + '">' + numb + '</a></li>|';
    } else {
      html_str += '<li><a href="javascript:;" class="img_panel__nav__num__item" data-pag-num="'
      + numb + '">' + numb + '</a></li>|';
    }
  });

  document.querySelector(".img_panel__nav__num").innerHTML = html_str;

  //Onclick events.
  var pag_elements = document.querySelectorAll(".img_panel__nav__num__item");
  pag_elements.forEach(function(pag_elm){
    pag_elm.onclick = function(e) {
      var pag_num = e.srcElement.getAttribute("data-pag-num");
      img_panel.contr.pag_clicked(pag_num);
    };
  });
};

//Controller:
img_panel.contr = {};

//!!! Check for correct work.
img_panel.contr.gen_nav_num_arr = function() {

  var ret_arr_1 = [
    img_panel.model.pag_arr_all[
      img_panel.model.pag.sel
    ]
  ];

  var i_back = img_panel.model.pag.sel;
  var i_front = img_panel.model.pag.sel;

  while(true) {
    i_back--;
    if(i_back >=  0) {
      ret_arr_1.push(img_panel.model.pag_arr_all[i_back]);
    }

    if(ret_arr_1.length === img_panel.model.pag.max_in_row ) {
      break;
    }

    i_front++;
    if(i_front < img_panel.model.pag_arr_all.length) {
      ret_arr_1.push(img_panel.model.pag_arr_all[i_front]);
    }

    if(ret_arr_1.length === img_panel.model.pag.max_in_row ) {
      break;
    }

    if(i_back < 0 && i_front >= img_panel.model.pag_arr_all.length ) {
      break;
    }

  };

  img_panel.model.pag.num_arr = ret_arr_1.sort(function(a, b) {
    if(a < b ) {
      return -1;
    } else if(a === b) {
      return 0;
    } else {
      return 1;
    }
  });

  //console.log(img_panel.model.pag.num_arr);

};

img_panel.contr.gen_img_show_arr = function() {
  var beg_index = 0;
  var end_index = 0;
  var pag_num = img_panel.model.pag_arr_all[img_panel.model.pag.sel];

  beg_index = (pag_num - 1)*img_panel.model.max_on_page;
  end_index = (function() {
    if(pag_num === img_panel.model.pag_num_all) {
      return img_panel.model.imgs_num - 1;
    } else {
      return beg_index + img_panel.model.max_on_page - 1;
    }
  })();

  img_panel.model.imgs.show_arr = img_panel.model.imgs_arr.slice(beg_index, end_index + 1);
};

img_panel.contr.gen_and_show_all = function() {
  img_panel.contr.gen_img_show_arr();
  img_panel.view.show_img_arr();
  img_panel.contr.gen_nav_num_arr();
  img_panel.view.show_nav_num();

  //console.log("!updated");
};

//!!! "data" as string:
img_panel.contr.pag_clicked = function(what_clicked) {

  var prev_sel_pag = img_panel.model.pag.sel;

  switch(what_clicked) {
    case "to_beg":
      img_panel.model.pag.sel = 0;
      break;
    case "to_end":
      img_panel.model.pag.sel = img_panel.model.pag_num_all - 1;
      break;
    case "prev":
      if(img_panel.model.pag.sel !== 0) {
        img_panel.model.pag.sel--;
      }
      break;
    case "next":
      if(img_panel.model.pag.sel !== img_panel.model.pag_num_all - 1) {
        img_panel.model.pag.sel++;
      }
      break;
    //!!! Or pag index:
    default:
      img_panel.model.pag.sel = Number.parseInt( what_clicked, 10 ) - 1;
      break;
  }

  if(prev_sel_pag !== img_panel.model.pag.sel) {
    img_panel.contr.gen_and_show_all();
  }
};

//Init:
img_panel.init = function () {

  document.querySelector(".img_panel__nav__beg").onclick = function() {
    img_panel.contr.pag_clicked("to_beg");
  };

  document.querySelector(".img_panel__nav__prev").onclick = function() {
    img_panel.contr.pag_clicked("prev");
  };

  document.querySelector(".img_panel__nav__next").onclick = function() {
    img_panel.contr.pag_clicked("next");
  };

  document.querySelector(".img_panel__nav__end").onclick = function() {
    img_panel.contr.pag_clicked("to_end");
  };

  img_panel.contr.gen_and_show_all();
};


//-----------------------------------------------
window.addEventListener("load", function() {
  img_panel.init();
});