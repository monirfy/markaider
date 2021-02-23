jQuery(function ($) {
  new WOW().init();
  $('#year').text(new Date().getFullYear());

  /*header appear*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('fixed-header');
    } else {
      $('.header').removeClass('fixed-header');
    }
  });
  $(function () {
    var $mobile_nav = $('#main-menu').clone().prop({
      id: 'mobile-nav',
    });

    var $mobile_logo = $('.logo').clone().prop({
      id: 'mobile-logo',
    });

    var $footer_nav = $('.footer').clone().prop({
      id: 'mobile-footer',
    });

    $('body').append($mobile_nav);
    $('#mobile-nav ').append($mobile_logo);
    $('#mobile-nav ').append($footer_nav);
    $('body').append('<div id="mobile-body-overly"></div>');

    $(document).on('click', '.menu-trigger', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $('#mobile-nav, .menu-trigger');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.icons').toggleClass('icon-menu icon-close');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  });
  $(document).ready(function () {
    $('.our-partner-slides').slick({
      infinite: true,
      autoplay: true,
      arrows: false,
      pauseOnHover: false,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  });
});
