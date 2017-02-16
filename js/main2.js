$(document).ready(function() {
   //Readmore
    $('.showmore_text').readmore({
        speed: 75,
        moreLink: '<div class="comments_block_more txt_r"><a href="#" class="small-text"><span class="icon-down"></span>Детальніше</a></div>',
        lessLink: '<div class="comments_block_more txt_r"><a href="#" class="small-text"><span class="icon-up"></span>Сховати</a></div>'
    });

    //Show more comments
    var allcomments = $(".comments .comments_block");
    var commcount = allcomments.length;
    if(commcount>2)
    {
        $('#commcount').text(commcount);
        x=2;
        allcomments.hide();
        $('.comments .comments_block:lt('+x+')').show();
        $(document).on("click", '.comments_block_more a:not(.__less)', function(e) {

            $('.comments .comments_block:lt('+commcount+')').show();
            $(this).addClass('__less');
            $('#moretext').text('Менше');
            return false;
        });
        $(document).on("click", '.comments_block_more a.__less', function(e) {
            y = commcount-x;
            $('.comments .comments_block').not(':lt('+y+')').hide();
            $(this).removeClass('__less');
            $('#moretext').text('Більше');
            return false;
        });
    }

    //Show more filters
        $('.left_afisha .filter-form').each(function() {
            var allftlr = $(this).find('.filter-form-item');
            var allftlrcount = allftlr.length;
            var y=5;
            allftlr.hide();
            allftlr.slice(1,y).show();
            var hiddenelements = allftlrcount-y;
            if(hiddenelements>0){
                $(this).find('.filter-form-item-more').show();
                $(this).find('.filter-form-item-more .count_of_fltr').text('('+hiddenelements+')');
            }
        });
        $(document).on("click", '.filter-form-item-more-link:not(.__less)', function(e) {
            var allftlr = $(this).closest('.filter-form').find('.filter-form-item');
            allftlr.show();
            $(this).addClass('__less');
            $(this).find('.count_of_fltr_txt').text('Менше');
            $(this).find('.count_of_fltr').hide();
            return false;
        });
        $(document).on("click", '.filter-form-item-more-link.__less', function(e) {
            var y=5;
            var allftlr = $(this).closest('.filter-form').find('.filter-form-item');
            allftlr.slice(y,100).hide();
            $(this).removeClass('__less');
            $(this).find('.count_of_fltr_txt').text('Більше');
            $(this).find('.count_of_fltr').show();
            return false;
        });


    $('.lang_current').click(function() {
        $(this).closest('.lang_block').toggleClass('__opened');
    });
})