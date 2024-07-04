(function ($) {
  "use strict";

  // meanmenu
//   $("#mobile-menu").meanmenu({
//     meanMenuContainer: ".mobile-menu",
//     meanScreenWidth: "992",
//   });

  // One Page Nav
//   var top_offset = $(".header-area").height() - 10;
//   $(".main-menu nav ul").onePageNav({
//     currentClass: "active",
//     scrollOffset: top_offset,
//   });

//   $(window).on("scroll", function () {
//     var scroll = $(window).scrollTop();
//     if (scroll < 245) {
//       $(".header-sticky").removeClass("sticky");
//     } else {
//       $(".header-sticky").addClass("sticky");
//     }
//   });

  // play button
  $("#play-video").on("click", function (e) {
    e.preventDefault();
    $("#video-overlay").addClass("open");
    $("#video-overlay").append(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
    );
  });

  $(".video-overlay, .video-overlay-close").on("click", function (e) {
    e.preventDefault();
    close_video();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      close_video();
    }
  });

  function close_video() {
    $(".video-overlay.open").removeClass("open").find("iframe").remove();
  }

  // progress bar
//   var count = 0;
//   var interval = setInterval(function () {
//     if (count >= 70) {
//       clearInterval(interval);
//     } else {
//       document.getElementById("Prog").innerHTML =
//         '<div class="progress-bar" role="progressbar" aria-valuenow="' +
//         count +
//         '" aria-valuemin="0" aria-valuemax="75" style="width: ' +
//         count +
//         '%"></div>';
//       count += 5;
//     }
//   }, 10);
//   var count3 = 0;
//   var interval = setInterval(function () {
//     if (count3 >= 64) {
//       clearInterval(interval);
//     } else {
//       document.getElementById("Prog3").innerHTML =
//         '<div class="progress-bar" role="progressbar" aria-valuenow="' +
//         count3 +
//         '" aria-valuemin="0" aria-valuemax="75" style="width: ' +
//         count3 +
//         '%"></div>';
//       count3 += 5;
//     }
//   }, 15);
//   var count2 = 0;
//   var interval = setInterval(function () {
//     if (count2 >= 82) {
//       clearInterval(interval);
//     } else {
//       document.getElementById("Prog2").innerHTML =
//         '<div class="progress-bar" role="progressbar" aria-valuenow="' +
//         count2 +
//         '" aria-valuemin="0" aria-valuemax="75" style="width: ' +
//         count2 +
//         '%"></div>';
//       count2 += 5;
//     }
//   }, 20);
//   var count4 = 0;
//   var interval = setInterval(function () {
//     if (count4 >= 72) {
//       clearInterval(interval);
//     } else {
//       document.getElementById("Prog4").innerHTML =
//         '<div class="progress-bar" role="progressbar" aria-valuenow="' +
//         count4 +
//         '" aria-valuemin="0" aria-valuemax="75" style="width: ' +
//         count4 +
//         '%"></div>';
//       count4 += 5;
//     }
//   }, 25);

  // document.addEventListener('DOMContentLoaded', function() {
  //     var progressContainer = document.getElementById('Prog');

  //     var observer = new IntersectionObserver(function(entries) {
  //         if (entries[0].isIntersecting) {
  //             startProgress();
  //             observer.disconnect(); // Stop observing after the progress bar starts
  //         }
  //     }, { threshold: 0.1 });

  //     observer.observe(progressContainer);
  // });
  // var count=0;
  // setInterval(function () {document.getElementById('Prog').innerHTML='<div class="progress-bar" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" style="width: '+count+'%"></div>';count+=5}, 5);

  // mainSlider
//   function mainSlider() {
//     var BasicSlider = $(".slider-active");
//     BasicSlider.on("init", function (e, slick) {
//       var $firstAnimatingElements = $(".single-slider:first-child").find(
//         "[data-animation]"
//       );
//       doAnimations($firstAnimatingElements);
//     });
//     BasicSlider.on(
//       "beforeChange",
//       function (e, slick, currentSlide, nextSlide) {
//         var $animatingElements = $(
//           '.single-slider[data-slick-index="' + nextSlide + '"]'
//         ).find("[data-animation]");
//         doAnimations($animatingElements);
//       }
//     );
//     BasicSlider.slick({
//       autoplay: false,
//       autoplaySpeed: 10000,
//       dots: false,
//       fade: true,
//       arrows: false,
//       responsive: [
//         { breakpoint: 767, settings: { dots: false, arrows: false } },
//       ],
//     });

//     function doAnimations(elements) {
//       var animationEndEvents =
//         "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
//       elements.each(function () {
//         var $this = $(this);
//         var $animationDelay = $this.data("delay");
//         var $animationType = "animated " + $this.data("animation");
//         $this.css({
//           "animation-delay": $animationDelay,
//           "-webkit-animation-delay": $animationDelay,
//         });
//         $this.addClass($animationType).one(animationEndEvents, function () {
//           $this.removeClass($animationType);
//         });
//       });
//     }
//   }
//   mainSlider();

  
  //owlCarousel
  $(".project-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    autoplay: true,
    center:true,
	  dotsEach: 3,
    // rewind: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1100: {
        items: 3,
      },
    },
  });

  $(".testimonial-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    autoplay: true,
    rewind: true,
    navText: [
      '<i class="las la-arrow-left"></i>',
      '<i class="las la-arrow-right"></i>',
    ],
    navs: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1100: {
        items: 2,
      },
    },
  });

  $(".owl-dots").on("click", ".owl-dot", function () {
    var index = $(this).index();
    $(".single-project").each(function () {
      var currentProjectIndex = $(this).index();
      if (currentProjectIndex === index) {
        $(this).find(".project-description,.plus-icon").show(); // Show description and icon
      } else {
        $(this).find(".project-description,.plus-icon").hide(); // Hide others
      }
    });
  });




//   $( ".img-wrapper" ).hover(
//     function() {
//       $(this).find(".img-overlay").animate({opacity: 1}, 600);
//     }, function() {
//       $(this).find(".img-overlay").animate({opacity: 0}, 600);
//     }
//   );
  
  // Lightbox
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
  
  // Add overlay
  $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
  $("#gallery").append($overlay);
  
  // Hide overlay on default
  $overlay.hide();
  
  // When an image is clicked
  $(".img-overlay").click(function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image.attr("src", imageLocation);
    // Fade in the overlay
    $overlay.fadeIn("slow");
  });
  
  // When the overlay is clicked
  $overlay.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
  });
  
  // When next button is clicked
  $nextButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    // All of the images in the gallery
    var $images = $("#image-gallery img");
    // If there is a next image
    if ($nextImg.length > 0) { 
      // Fade in the next image
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
      // Otherwise fade in the first image
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
  });
  
  // When previous button is clicked
  $prevButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
  });
  
  // When the exit button is clicked
  $exitButton.click(function() {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
  });


//   $(".popup-image").magnificPopup({
//     type: "image",
//     gallery: {
//       enabled: true,
//     },
//   });

  /* magnificPopup video view */
//   $(".popup-video").magnificPopup({
//     type: "iframe",
//   });

  // isotop
//   $(".grid").imagesLoaded(function () {
//     // init Isotope
//     var $grid = $(".grid").isotope({
//       itemSelector: ".grid-item",
//       percentPosition: true,
//       masonry: {
//         // use outer width of grid-sizer for columnWidth
//         columnWidth: ".grid-item",
//       },
//     });
//   });

  // filter items on button click
//   $(".portfolio-menu").on("click", "button", function () {
//     var filterValue = $(this).attr("data-filter");
//     $grid.isotope({ filter: filterValue });
//   });

  //for menu active class
//   $(".portfolio-menu button").on("click", function (event) {
//     $(this).siblings(".active").removeClass("active");
//     $(this).addClass("active");
//     event.preventDefault();
//   });

  // scrollToTop
//   $.scrollUp({
//     scrollName: "scrollUp", // Element ID
//     topDistance: "300", // Distance from top before showing element (px)
//     topSpeed: 300, // Speed back to top (ms)
//     animation: "fade", // Fade, slide, none
//     animationInSpeed: 200, // Animation in speed (ms)
//     animationOutSpeed: 200, // Animation out speed (ms)
//     scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
//     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
//   });

  // WOW active
//   new WOW().init();
})(jQuery);
