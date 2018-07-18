var imgs_arr = [{"format":"jpeg","width":5616,"height":3744,"filename":"0000_yC-Yzbqy7PY.jpeg","id":0,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/yC-Yzbqy7PY"},{"format":"jpeg","width":5616,"height":3744,"filename":"0001_LNRyGwIJr5c.jpeg","id":1,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LNRyGwIJr5c"},{"format":"jpeg","width":5616,"height":3744,"filename":"0002_N7XodRrbzS0.jpeg","id":2,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/N7XodRrbzS0"},{"format":"jpeg","width":5616,"height":3744,"filename":"0003_Dl6jeyfihLk.jpeg","id":3,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/Dl6jeyfihLk"},{"format":"jpeg","width":5616,"height":3744,"filename":"0004_y83Je1OC6Wc.jpeg","id":4,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/y83Je1OC6Wc"},{"format":"jpeg","width":5245,"height":3497,"filename":"0005_LF8gK8-HGSg.jpeg","id":5,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LF8gK8-HGSg"},{"format":"jpeg","width":5616,"height":3744,"filename":"0006_tAKXap853rY.jpeg","id":6,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/tAKXap853rY"},{"format":"jpeg","width":4728,"height":3168,"filename":"0007_BbQLHCpVUqA.jpeg","id":7,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/BbQLHCpVUqA"},{"format":"jpeg","width":5616,"height":3744,"filename":"0008_xII7efH1G6o.jpeg","id":8,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/xII7efH1G6o"},{"format":"jpeg","width":5616,"height":3672,"filename":"0009_ABDTiLqDhJA.jpeg","id":9,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/ABDTiLqDhJA"},{"format":"jpeg","width":2500,"height":1667,"filename":"0010_6J--NXulQCs.jpeg","id":10,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/6J--NXulQCs"},{"format":"jpeg","width":2500,"height":1667,"filename":"0011_Cm7oKel-X2Q.jpeg","id":11,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Cm7oKel-X2Q"},{"format":"jpeg","width":2500,"height":1667,"filename":"0012_I_9ILwtsl_k.jpeg","id":12,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/I_9ILwtsl_k"},{"format":"jpeg","width":2500,"height":1667,"filename":"0013_3MtiSMdnoCo.jpeg","id":13,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/3MtiSMdnoCo"},{"format":"jpeg","width":2500,"height":1667,"filename":"0014_IQ1kOQTJrOQ.jpeg","id":14,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/IQ1kOQTJrOQ"},{"format":"jpeg","width":2500,"height":1667,"filename":"0015_NYDo21ssGao.jpeg","id":15,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/NYDo21ssGao"},{"format":"jpeg","width":2500,"height":1667,"filename":"0016_gkT4FfgHO5o.jpeg","id":16,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/gkT4FfgHO5o"},{"format":"jpeg","width":2500,"height":1667,"filename":"0017_Ven2CV8IJ5A.jpeg","id":17,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ven2CV8IJ5A"},{"format":"jpeg","width":2500,"height":1667,"filename":"0018_Ps2n0rShqaM.jpeg","id":18,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ps2n0rShqaM"},{"format":"jpeg","width":2500,"height":1667,"filename":"0019_P7Lh0usGcuk.jpeg","id":19,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/P7Lh0usGcuk"}];

var one_img_show = {};

one_img_show.prev_img_index = -1;

one_img_show.help = {};

//!!! Improve this function.
one_img_show.help.toggle_str = function(str_to_pr, str_toggle) {
  if(str_to_pr.indexOf(str_toggle) !== -1) {

    if(str_to_pr.indexOf(str_toggle + " ") !== -1) {
      //console.log("x");
      return str_to_pr.replace(str_toggle + " ", "");
    }

    if(str_to_pr.indexOf(" " + str_toggle) !== -1) {
      //console.log("x");
      return str_to_pr.replace(" " + str_toggle, "");
    }

  } else {
    return str_to_pr + " " + str_toggle;
  }
};

one_img_show.toggle = function() {
  var elm = document.querySelector(".one_img_show");

  elm.className = one_img_show.help.toggle_str(
    elm.className,
    "one_img_show--show"
  );
};

one_img_show.show_img = function(img_indx, img_data_obj) {

  if(one_img_show.prev_img_index !== img_indx) {

    var one_img_show_elm = document.querySelector(".one_img_show");

    var src_to_set = 'https://picsum.photos/'
      + img_data_obj.width + '/' + img_data_obj.height
      + '?image=' + img_data_obj.id;

    if(document.querySelector(".one_img_show__img") === null) {
      one_img_show_elm.innerHTML = '<img class="one_img_show__img" src="' + src_to_set
      +  '" alt="">';

      document.querySelector(".one_img_show__img").onclick = function(e) {
        e.stopPropagation();
      };

    } else {
      var one_img_show__img_elm = document.querySelector(".one_img_show__img");

      one_img_show__img_elm.setAttribute("src", src_to_set);
    }

    one_img_show.prev_img_index = img_indx;

  }//end: if(one_img_show.prev_img_index !== img_indx) {

  one_img_show.toggle();
  
};

window.addEventListener("load", function() {

  document.querySelector(".one_img_show").onclick = function(e) {
    one_img_show.toggle();
  };


//!!! This must be placed to the ../2:
var imgs_elm_arr = document.querySelectorAll(".img_panel__imgs img");

imgs_elm_arr.forEach(function(img_elm) {

  var img_arr_ind = Number.parseInt(img_elm.getAttribute("data-img-arr-ind"), 10);

  img_elm.onclick = function() {

    one_img_show.show_img(img_arr_ind, imgs_arr[img_arr_ind]);
  };
  
});

});//end: window.addEventListener("load", function() {