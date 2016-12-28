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
                //console.log(target_menu + ' - ' + mainmenu);
                $(this).is(':visible') ? $('body').addClass('js-menu') : $('body').removeClass('js-menu');
            } else if (target_menu) {
                //console.log(target_menu + ' ++ ');
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

    // $('.js-click_show').one('click', function() {
    //     $(this).addClass('hide');
    // })
    mainmenu_pos('.icon-menu');
    // mainmenu_pos('#mainmenu_toggle');

    // $('#mainmenu_toggle').click(function() {
    //     $('body').toggleClass('js-menu_on');
    // })

    $(window).resize(function() {
        mainmenu_pos('.icon-menu');
        $('body').removeClass('js-menu_on');
    })

    //=============== js hamburger menu
    $('.icon-menu').on('click', function() {
            var target_menu = $(this).data('target');
            console.log(target_menu + ' ' + $('body').attr('class'));
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

    //=========================================================================================== project
    //================== events_slider
    $('#events_slider').lightSlider({
        item: 1,
        slideMargin: 0,
        pager: false,
        prevHtml: '<span class="icon-prev"></span>',
        nextHtml: '<span class="icon-next"></span>',
        loop: true,
        cssEasing: 'ease',
        speed: 800,
        pause: 4000,
        auto: true
    });
    $('#package_slider').lightSlider({
        item: 1,
        slideMargin: 0,
        pager: false,
        prevHtml: '<span class="icon-prev"></span>',
        nextHtml: '<span class="icon-next"></span>',
        loop: true,
        cssEasing: 'ease',
        speed: 800,
        pause: 4000,
        auto: true
    });
    $('#locations_slider').lightSlider({
        item: 1,
        slideMargin: 0,
        pager: false,
        prevHtml: '<span class="icon-prev"></span>',
        nextHtml: '<span class="icon-next"></span>',
        loop: true,
        cssEasing: 'ease',
        speed: 800,
        pause: 4000,
        auto: true
    });

    var totalItems = $('#events_slider li').length;
    totalItems = $.trim(totalItems).length === 1 ? '0' + totalItems : totalItems;
    $("#events_slider .slide_num sup").text('/' + totalItems);
    $('#events_slider li').each(function(index) {
        var itemIndex = index + 1;
        itemIndex = $.trim(itemIndex).length === 1 ? '0' + itemIndex : itemIndex;
        $(this).find(".slide_num strong").text(itemIndex);
    })

    var totalItems = $('#locations_slider li').length;
    totalItems = $.trim(totalItems).length === 1 ? '0' + totalItems : totalItems;
    $("#locations_slider .slide_num sup").text('/' + totalItems);
    $('#locations_slider li').each(function(index) {
            var itemIndex = index + 1;
            itemIndex = $.trim(itemIndex).length === 1 ? '0' + itemIndex : itemIndex;
            $(this).find(".slide_num strong").text(itemIndex);
        })
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

})