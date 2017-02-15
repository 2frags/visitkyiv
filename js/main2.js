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
    $('.lang_current').click(function() {
        $(this).closest('.lang_block').toggleClass('__opened');
    });
})