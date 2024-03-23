/*
    Template: 
    Author: 
*/

(function ($) {
  "use strict";

  $(document).ready(function () {

    /*==========================
		Owl Carousel Init
	============================*/

    /*==========================
					Sticky Menu Init
			============================*/

    //Header Responsive
    $("#hamburger").on("click", function () {
      $(".mobile-nav").addClass("show");
      $(".body-overlay").addClass("active");
    });

    $(".close-nav").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".body-overlay").removeClass("active");
      $("body").removeClass("active");
    });

    $(".body-overlay").on("click", function () {
      $(".mobile-nav").removeClass("show");
      $(".body-overlay").removeClass("active");
    });
   
    /* =============================================
				#wow  init
			===============================================*/
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        mobile: true,
        live: true,
      });
      wow.init();
    }
  })
  })(jQuery); // End jQuery
