(function($) {

	'use strict';
	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });		
    // END MENU JS

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
    });
        
    //Hospotial-Slider
    $('.hospotial-slider').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay: true,
        autoplayhover:true,
        dots:false,
        autoplayTimeout:4000,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>",
        ],
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
            
            },
            1000:{
                items:2,
                
                
            }
        }
    });
    
    //Testimoinal-slider
    $('.testimoinal-slider').owlCarousel({
        items:1,
        loop:true,
        margin:25,
        nav:true,
        autoplay: true,
        autoplayhover:true,
        dots:false,
        autoplayTimeout:4000,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>",
        ],

    });

    
    // MixItUp Shorting JS
    $('.container').mixItUp();

      	// Accordion JS
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').on('click', function(j) {
        var dropDown = $(this).closest('li').find('p');
        $(this).closest('.accordion').find('p').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

    $('.forum-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: false,
        autoplayhover:true,
        dots:false,
        nav:true,
        autoplayTimeout:4000,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>",
        ],
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
            
            },
            1000:{
                items:2,
                
                
            }
        }
    })
    //Doctor-slider
    $('.doctor-right').owlCarousel({
        items:1,
        loop:true,
        margin:25,
        nav:true,
        autoplay: false,
        autoplayhover:true,
        dots:false,
        autoplayTimeout:4000,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>",
        ],
    });
    
    //Doctor-slider
    $('.doctor-slider').owlCarousel({
        items:1,
        loop:true,
        margin:25,
        nav:true,
        autoplay: true,
        autoplayhover:true,
        dots:false,
        autoplayTimeout:4000,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>",
        ],
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
            
            },
            1000:{
                items:3,
                
                
            }
        }
    });
        // PRELOADER
        jQuery(window).on('load',function(){
            jQuery(".loader").fadeOut(500);
        });
        // WOW JS
        new WOW().init();

        // Back to top 
        $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-pulse"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 900);
            return false;
        });
        
        // Sorting Portfolio JS
        $('.container').mixItUp();

        // Popup Video JS
        $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
        // PRELOADER
        jQuery(window).on('load',function(){
            jQuery(".loader").fadeOut(500);
        });
            // Testimonial
        $('.testimonial-slider-2').owlCarousel({
            loop:true,
            margin:25,
            nav:true,
            autoplay: true,
            autoplayhover:true,
            dots:false,
            autoplayTimeout:4000,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>",
            ],
            responsive:{
                0:{
                    items:1,
                    
                },
                600:{
                    items:2,
                
                },
                1000:{
                    items:2,
                    
                    
                }
            }
        });


        //news-slider-two
        $('.news-slider-two').owlCarousel({
            items:1,
            loop:true,
            margin:25,
            nav:true,
            autoplay: true,
            autoplayhover:true,
            dots:false,
            autoplayTimeout:4000,
            navText: [
                "<i class='flaticon-right-arrow'></i>",
            ],
            responsive:{
                0:{
                    items:1,
                    
                },
                600:{
                    items:2,
                
                },
                1000:{
                    items:4,
                    
                    
                }
            }
        });
        //Default-slider
        $('.default-slider').owlCarousel({
            loop:true,
            margin:25,
            nav:false,
            items:1,
            autoplay: true,
            autoplayhover:true,
            dots:true,
            autoplayTimeout:4000,

        });



    }(jQuery));