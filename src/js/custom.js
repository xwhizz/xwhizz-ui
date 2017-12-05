(function ($) {
    $(window).on('load', function () {
        $('#loader').delay(1000).fadeOut('slow');
    });

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').addClass('active');
            } else {
                $('.back-to-top').removeClass('active');
            }
        });
        $('#back-to-top').click(function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
        /*-------------------------------------------------------------------------*
         *             02. change Menu background on scroll js                     *
         *-------------------------------------------------------------------------*/
        $(window).on('scroll', function () {
            var menu_area = $('.menu-area-fix');
            if ($(window).scrollTop() > 20) {
                menu_area.addClass('sticky-menu');
            } else {
                menu_area.removeClass('sticky-menu');
            }
        }); // $(window).on('scroll' end

        $('.menu-toggle-btn').on('click', function () {
            $(this).toggleClass('open');
        });

        $('.slider-active').owlCarousel({
          autoPlay: 800000000,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          items: 1,
          dots: true,
          slideSpeed: 500,
          pagination: true,
          navigation: false,
          loop: true,
          mouseDrag: true,
          singleItem: true,
          transitionStyle: "fade",
          transitionStyle: "fade",
          addClassActive: true,
        });
    });

})(jQuery);

