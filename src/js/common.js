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
        breakpoint: 993,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });

  $('.search_now').click(function(a) {
    a.preventDefault();
    $('.footer-search').slideToggle();
    $('.search_now .fa').toggleClass('fa-chevron-down');
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
    var contact = $('.popup_contact');
    var overlay = $('.popup_overlay');
    var hidden = $('.popup_hidden');
    var btnclose = $('.popup_contact-btn');
    var body = $('body');
    
    contact.fadeIn(500);
    overlay.addClass('active');
    body.addClass('popup_body');

    hidden.click(function() {
      contact.fadeOut();
      overlay.removeClass('active');
      body.removeClass('popup_body');
    });

    btnclose.click(function() {
      contact.fadeOut();
      overlay.removeClass('active');
      body.removeClass('popup_body');
    });
  });

});  