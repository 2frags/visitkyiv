var mainmenu = '#mainmenu';
$(document).ready(function() {
    //===============sticky header
    var scrollTimeout;
    scrolled = 0;
    $(window).scroll(function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 150);
    });
    scrollHandler = function() {
            if ($(window).scrollTop() > 10) {
                $('#header').addClass("sticky");
            } else {
                $('#header').removeClass("sticky");
                $('#mainmenu li').removeClass("active");
            }
        }
        //================ js-hamburger
    function mainmenu_pos($el) {
        //$($el).is(':visible') ? $('body').addClass('js-menu') : $('body').removeClass('js-menu');
        $($el).each(function() {
            var target_menu = $(this).data('target');
            if (target_menu == mainmenu) {
                $(this).is(':visible') ? $('body').addClass('js-menu') : $('body').removeClass('js-menu');
            } else if (target_menu) {
                $(this).is(':visible') ? $(target_menu).parent().addClass('js-menu_hide') : $(target_menu).attr('style', '').parent().removeClass('js-menu_hide js-menu_on');
            }
        });

    }
    //=============== js-show_block
    $(document).on('mouseup', 'body.js-menu_on', function() {
        $(this).removeClass('js-menu_on');
    });
    $('#mainmenu').mouseup(function(e) {
        e.stopPropagation();
    });

    mainmenu_pos('.icon-menu');
    //=============== js hamburger menu
    $('.icon-menu, .js-menu-btn').on('click', function() {
            var target_menu = $(this).data('target');
            if (target_menu == mainmenu) {
                $('body').toggleClass('js-menu_on');
            } else if (target_menu) {
                $(target_menu).slideToggle(300);
                $(target_menu).parent().toggleClass('js-menu_on');
            }
        })
        //=============== tabs
    $('.tabs').on('click', ' dt:not(.on)', function() {
            $(this).next('dd').slideToggle(500);
            $(this).siblings('dt.on + dd').slideToggle(500);
            $(this).addClass('on').siblings('dt').removeClass('on');
        })
        //=================== panels
    $('.js-panel').on('click', function() {
            var target_panel = $(this).data('target');
            $(this).addClass('hover').siblings().removeClass('hover');
            $(target_panel).fadeIn(200).addClass('on').siblings().hide().removeClass('on');
        })
        //==================== show password
    $('.js-showpass input').on('keyup', function() {
        if ($(this).val()) {
            $(this).parent().addClass('icon-eye');
        } else {
            $(this).parent().removeClass('icon-eye');
        }
    });
    $('.js-showpass').mousedown(function(e) {
        if (e.target == this) {
            $(this).find('input').attr('type', 'text');
        }
    }).on('mouseup mouseout', function() {
        $(this).find('input').attr('type', 'password');
    });
    //=========================================================================================== project
    //================== events_slider
    var $sliders = $(".slider_wide");
    var $arrows = $('.arr_wrap');

    $(".slide_count").each(function() {

        var $this = $(this);
        $this.find($sliders).on('init', function(event, slick) {
            slidecount = (slick.slideCount < 10) ? '0' + slick.slideCount : slick.slideCount;
            var curr_slide = slick.currentSlide + 1;
            curr_slide = (curr_slide < 10) ? '0' + curr_slide : curr_slide;
            $this.find('.arr_wrap').find('.slide_num span').text(curr_slide);
            $this.find('.arr_wrap').find('.slide_num sup').text('/' + slidecount);
        });
        var slick = $this.find($sliders).slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $this.find($arrows),
            prevArrow: '<span class="icon-prev"></span>',
            nextArrow: '<span class="icon-next"></span>'
        });
        slick.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var curr_slide = nextSlide + 1;
            curr_slide = (curr_slide < 10) ? '0' + curr_slide : curr_slide;
            $this.find('.arr_wrap').find('.slide_num span').text(curr_slide);
        });

    });


    $('#package_slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $("<div></div>").addClass("arr_wrap").insertAfter("#package_slider"),
        prevArrow: '<span class="icon-prev"></span>',
        nextArrow: '<span class="icon-next"></span>'
    });


    $('#offers_slider').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="icon-up"></div>',
        nextArrow: '<div class="icon-down"></div>',
        vertical: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    prevArrow: '<div class="icon-prev"></div>',
                    nextArrow: '<div class="icon-next"></div>',
                    vertical: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<div class="icon-prev"></div>',
                    nextArrow: '<div class="icon-next"></div>',
                    vertical: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<div class="icon-prev"></div>',
                    nextArrow: '<div class="icon-next"></div>',
                    vertical: false
                }
            }
        ]
    });

    //========================= datetimepicker
    $('#tv22').datetimepicker({
        format: 'unixtime',
        formatDate: 'unixtime',
        timepicker: false,
        closeOnDateSelect: true,
        lang: 'uk',
        onClose: function(ct, $input) {
            if ($input.val() != "") {
                $input.addClass('filled');
                $("#tv22i").val(moment.unix($input.val()).format("DD-MM-YYYY"));
            }
        },
        onShow: function(ct) {
            //console.log($('#tv34').val() + ' max');
            this.setOptions({
                maxDate: $('#tv34').val() ? $('#tv34').val() : false
            })
        }
    });

    $('#tv34').datetimepicker({
        format: 'unixtime',
        formatDate: 'unixtime',
        timepicker: false,
        closeOnDateSelect: true,
        lang: 'uk',
        onClose: function(ct, $input) {
            if ($input.val() != "") {
                $input.addClass('filled');
                $("#tv34i").val(moment.unix($input.val()).format("DD-MM-YYYY"));
            }
        },
        onShow: function(ct) {
            //console.log($('#tv22').val() + ' min');
            this.setOptions({
                minDate: $('#tv22').val() ? $('#tv22').val() : false
            })
        }
    });
    $('.top_filters .icon-close').click(function() {
        $(this).siblings('input').removeClass('filled').val('');
        $(this).siblings('input').attr('value', '');
    });

    $(".fancybox").fancybox();
    //===================resize 
    var id;
    $(window).resize(function() {
            clearTimeout(id);
            id = setTimeout(doneResizing(), 200);

        })
        //===================== do resize
    function doneResizing() {
        mainmenu_pos('.icon-menu');
        $('body').removeClass('js-menu_on');
    }
})