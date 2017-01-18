$(document).ready(function(){

  jQuery.fn.reverse = [].reverse;

  var isContrast = true;
  var offcanvas = false;

  if(!$(".navigation-wrapper > div").hasClass("tm-navbar-contrast")){
      isContrast = false;

  }


  $(".uk-navbar-nav > .uk-parent").hover(function(){

    if(!isContrast){$(".navigation-wrapper > div").addClass("tm-navbar-contrast");}


    var navHeight = $(this).find(".uk-nav-navbar").outerHeight()+81;
    var max = $(this).find(".uk-nav-navbar li").length;
    var time = 1000 / max;

    $(".nav-overlay").css("height", navHeight);

    $(this).find(".uk-nav-navbar li").each(function(i) {
        var myLi = $(this);
        $(myLi).css({"visibility": "visible","opacity": 1});
        $(myLi).find("a").addClass("uk-icon-angle-right");
    });
  }, function(){

    if(!isContrast){$(".navigation-wrapper > div").removeClass("tm-navbar-contrast");}

    $(".nav-overlay").stop().css("height", "0");

    $(this).find(".uk-nav-navbar li").each(function(i) {
        var myLi = $(this);
        $(myLi).css({"opacity": 0,"visibility":"hidden"});
    });
  });


  $(".uk-navbar-toggle").on("mousedown", function() {
    console.log(offcanvas);
    if(offcanvas == false){
      $(this).addClass("active");
      if(!isContrast){
        $(".navigation-wrapper > div").addClass("tm-navbar-contrast");
        $(".navigation-wrapper").addClass("contrastmobile");
      };
      $("#offcanvas").fadeIn(200);
      offcanvas = true;
    }else{
      $(this).removeClass("active");
      if(!isContrast){
        $(".navigation-wrapper > div").removeClass("tm-navbar-contrast");
        $(".navigation-wrapper").removeClass("contrastmobile");
      };
      $("#offcanvas").fadeOut(200);
      offcanvas = false;
    }
  });

  if ( $(".tm-navbar-transparent").length) {

    }

  $(".uk-nav-side>li>a").addClass("uk-icon-angle-right");


  $(".parent").on("mouseover", function(){
    $(this).addClass("uk-open");
  });
  $(".parent").on("mouseout", function(){
    $(this).removeClass("uk-open");
  });

});
