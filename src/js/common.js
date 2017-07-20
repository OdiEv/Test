$(document).ready(function(){
  $('.brands-slider').slick({
    speed: 500,
    slidesToShow: 4,
    adaptiveHeight: true,
    nextArrow: '<i class="fa fa-chevron-right"></i>',
    prevArrow: '<i class="fa fa-chevron-left"></i>',
   	responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1150,
        settings: {
          arrows: false, // краще залишить
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
        	arrows: false,
          slidesToShow: 1
        }
      }
    ]
    });

   $('.hamburger').click(function(e) {
    e.preventDefault();
    $('.nav').slideToggle();
    $(this).toggleClass('active');
  });

  $(window).resize(function() {
    if($(window).width() > 760 && $('.nav').is(':hidden')) {
      $('.nav').removeAttr('style');
    }
  });

  $(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()/2) {
      $('.scroll_top').addClass('active');
    } else {
      $('.scroll_top').removeClass('active');
    }
  });

  $('.scroll_top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 1000);
  });

  $('.send_message').click(function() {
    $('.popup_contact').fadeIn(500); // cash query selectors (var)
    $('.popup_bg').addClass('active');
    $('.popup_hidden').addClass('active'); // лишнє
    $('body').addClass('popup_body');

    $('.popup_hidden').click(function() {
      $('.popup_contact').fadeOut();
      $('.popup_bg').removeClass('active');
      $('.popup_hidden').removeClass('active');
      $('body').removeClass('popup_body');
    });

    $('.popup_contact-btn').click(function() {
      $('.popup_contact').fadeOut();
      $('.popup_bg').removeClass('active');
      $('body').removeClass('popup_body');
    });
  });

});  