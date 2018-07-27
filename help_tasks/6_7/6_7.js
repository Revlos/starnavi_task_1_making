//Head:

var imgs_arr = [{"format":"jpeg","width":5616,"height":3744,"filename":"0000_yC-Yzbqy7PY.jpeg","id":0,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/yC-Yzbqy7PY"},{"format":"jpeg","width":5616,"height":3744,"filename":"0001_LNRyGwIJr5c.jpeg","id":1,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LNRyGwIJr5c"},{"format":"jpeg","width":5616,"height":3744,"filename":"0002_N7XodRrbzS0.jpeg","id":2,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/N7XodRrbzS0"},{"format":"jpeg","width":5616,"height":3744,"filename":"0003_Dl6jeyfihLk.jpeg","id":3,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/Dl6jeyfihLk"},{"format":"jpeg","width":5616,"height":3744,"filename":"0004_y83Je1OC6Wc.jpeg","id":4,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/y83Je1OC6Wc"},{"format":"jpeg","width":5245,"height":3497,"filename":"0005_LF8gK8-HGSg.jpeg","id":5,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LF8gK8-HGSg"},{"format":"jpeg","width":5616,"height":3744,"filename":"0006_tAKXap853rY.jpeg","id":6,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/tAKXap853rY"},{"format":"jpeg","width":4728,"height":3168,"filename":"0007_BbQLHCpVUqA.jpeg","id":7,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/BbQLHCpVUqA"},{"format":"jpeg","width":5616,"height":3744,"filename":"0008_xII7efH1G6o.jpeg","id":8,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/xII7efH1G6o"},{"format":"jpeg","width":5616,"height":3672,"filename":"0009_ABDTiLqDhJA.jpeg","id":9,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/ABDTiLqDhJA"},{"format":"jpeg","width":2500,"height":1667,"filename":"0010_6J--NXulQCs.jpeg","id":10,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/6J--NXulQCs"},{"format":"jpeg","width":2500,"height":1667,"filename":"0011_Cm7oKel-X2Q.jpeg","id":11,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Cm7oKel-X2Q"},{"format":"jpeg","width":2500,"height":1667,"filename":"0012_I_9ILwtsl_k.jpeg","id":12,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/I_9ILwtsl_k"},{"format":"jpeg","width":2500,"height":1667,"filename":"0013_3MtiSMdnoCo.jpeg","id":13,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/3MtiSMdnoCo"},{"format":"jpeg","width":2500,"height":1667,"filename":"0014_IQ1kOQTJrOQ.jpeg","id":14,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/IQ1kOQTJrOQ"},{"format":"jpeg","width":2500,"height":1667,"filename":"0015_NYDo21ssGao.jpeg","id":15,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/NYDo21ssGao"},{"format":"jpeg","width":2500,"height":1667,"filename":"0016_gkT4FfgHO5o.jpeg","id":16,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/gkT4FfgHO5o"},{"format":"jpeg","width":2500,"height":1667,"filename":"0017_Ven2CV8IJ5A.jpeg","id":17,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ven2CV8IJ5A"},{"format":"jpeg","width":2500,"height":1667,"filename":"0018_Ps2n0rShqaM.jpeg","id":18,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/Ps2n0rShqaM"},{"format":"jpeg","width":2500,"height":1667,"filename":"0019_P7Lh0usGcuk.jpeg","id":19,"author":"Paul Jarvis","author_url":"https://unsplash.com/@pjrvs","post_url":"https://unsplash.com/photos/P7Lh0usGcuk"}];
var favor_imgs = imgs_arr.slice(0,2);

var head_module = {};

//Init:---------------------------------------------------------
head_module.init = {};

//Will call and pass img_arr and favor_imgs_arr:
head_module.init.img_show_fun = undefined;

//Model:---------------------------------------------------------
head_module.model = {};

head_module.model.views = ["All images", "Favorites"];

head_module.model.view_on = undefined;

//Images array to show:
head_module.model.imgs_arr = undefined;

//Favorites:
head_module.model.favor_imgs_arr = undefined;

//Controller:----------------------------------------------------
head_module.controller = {};

head_module.controller.toggle_img_in_favor = function(img_data) {

  var search_indx = head_module.model.favor_imgs_arr.indexOf(img_data);

  if( search_indx === -1) {
    //Add:
    head_module.model.favor_imgs_arr.push(img_data);
  } else {
    //Remove:
    head_module.model.favor_imgs_arr.splice(search_indx, 1);
  }

  //!!! Push changes to local storage:
  console.log("LocalStorage.write");

  //!!! Changes on imgs show must take place by themselves.
  //Changes in view:
  switch (head_module.model.view_on) {
    case head_module.model.views[0]://All images
      //Update header:
      head_module.view.update_header();
      break;
    case head_module.model.views[1]://Favorits
      //If we are in favorites and there no images in favor - go to all images:
      if(head_module.model.favor_imgs_arr.length === 0) {
        head_module.controller.go_to_all();
      }
      break;
    default:
      break;
  }
};

head_module.controller.go_to_all = function() {
  head_module.model.view_on = head_module.model.views[0];//All images

  head_module.view.update_header();
  head_module.view.update_imgs_list();
};

head_module.controller.go_to_favorites = function() {
  head_module.model.view_on = head_module.model.views[1];//All images

  head_module.view.update_header();
  head_module.view.update_imgs_list();
};

//View:----------------------------------------------------
head_module.view = {};

head_module.view.update_header = function() {
  var on_elm = document.querySelector(".head_md__on");
  var go_a_elm = document.querySelector(".head_md__go a");

  switch (head_module.model.view_on) {
    case head_module.model.views[0]://All images
      on_elm.innerHTML = head_module.model.views[0];
      if(head_module.model.favor_imgs_arr.length === 0) {
        go_a_elm.innerHTML = "Star off";
      } else {
        go_a_elm.innerHTML = "Star on";
      }
      break;
    case head_module.model.views[1]://Favorits
      on_elm.innerHTML = head_module.model.views[1];
      go_a_elm.innerHTML = "Go to all";
      break;
    default:
      break;
  }
};

head_module.view.update_imgs_list = function() {

  switch (head_module.model.view_on) {
    case head_module.model.views[0]://All images
      head_module.init.img_show_fun(
        head_module.model.imgs_arr,
        head_module.model.favor_imgs_arr
      );
      break;
    case head_module.model.views[1]://Favorits
      head_module.init.img_show_fun(
        head_module.model.favor_imgs_arr,
        head_module.model.favor_imgs_arr
      );
      break;
    default:
      break;
  }
};


//Interface:-----------------------------------------------------
head_module.interface = {};

head_module.interface.set_img_show_fun = function(fun) {
  head_module.init.img_show_fun = fun;
};

head_module.interface.init = function() {

  //Set starting view:
  head_module.model.view_on = head_module.model.views[0];
  //Get starting arrays of images:
  //!!! Put here real getters:
  head_module.model.imgs_arr = imgs_arr;
  head_module.model.favor_imgs_arr = favor_imgs;

  head_module.view.update_header();
  head_module.view.update_imgs_list();

  //Adding onclick events:
  document.querySelector(".head_md__go a").onclick = function() {
    switch (head_module.model.view_on) {
      case head_module.model.views[0]://All images
        if(head_module.model.favor_imgs_arr.length !== 0) {
          head_module.controller.go_to_favorites();
        }
        break;
      case head_module.model.views[1]://Favorits
        head_module.controller.go_to_all();
        break;
      default:
        break;
    }
  };

};

head_module.interface.toggle_img_in_favor = function() {
  head_module.controller.toggle_img_in_favor();
};



//Make initialization:
head_module.interface.set_img_show_fun(function(imgs_arr, favor_imgs_arr) {
  console.log(imgs_arr.length);
  console.log(favor_imgs_arr.length);
});
head_module.interface.init()