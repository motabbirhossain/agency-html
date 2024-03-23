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

  $('.gen-testimonials-one__carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    autoplayTimeout: 8000,
    autoplay: true,
    nav: true,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    
})

    //Header Responsive
    $("#mobile-nav__toggler").on("click", function () {
      $(".mobile-nav__wrapper").addClass("expanded");
    });

    $(".mobile-nav__close").on("click", function () {
      $(".mobile-nav__wrapper").removeClass("expanded");
    });

    $(".mobile-nav__overlay").on("click", function () {
      $(".mobile-nav__wrapper").removeClass("expanded");
    });
   
    /* =============================================
				#wow  init
			===============================================*/
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        mobile: true, 
        live: true
      });
      wow.init();
    }
  })
  })(jQuery); // End jQuery
