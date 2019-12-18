(function(){
    $("#nav").load("nav.html",function () {
        // 移动端导航
        $('.m_list').click(function(){
            $(this).find('.m_to_right').toggleClass('m_nav_rotate');
            $(this).find('.m_dropdown').slideToggle();
        });
        $('.nav_m_more').click(function(){
            $('.nav_m_download').css({'display':'block'});
            $('.m_left').animate({'left':'0'});
        });
        $('#close').click(function(){
            $('.nav_m_download').css({'display':'none'});
            $('.m_left').animate({'left':'-100%'});
        });
        $('.nav_m_download').click(function(){
            $('.m_left').animate({'left':'-100%'});
            $(this).css({'display':'none'});
        });
        var m_height = $('.m_left').height();
        console.log(m_height);
        $('.nav_m_download').css({'height':'m_height'});
        //切换语言
        $(".lang-tw").click(function(){
            //切换中文
            var href = window.location.href;
            var pathname = href.substring(href.lastIndexOf("/") + 1);

            if(href.indexOf("/tw/") == -1 ){
                location.href = "../tw/"+pathname;
            }

        });

        $(".lang-en").click(function(){
            //切换英文
            var href = window.location.href;
            var pathname = href.substring(href.lastIndexOf("/") + 1);
            if(href.indexOf("/en/") == -1 ){
                location.href = "../"+pathname;
            }

        });
    });
    $("#footer").load("footer.html",function () {
    });
	$('.qa-modular3 .cont_right_bottom>li .p2').hide(300);
	$('.qa-modular3 .cont_right_bottom>li .p2').eq(0).show(300);
	$('.qa-modular3 .cont_right_bottom>li').click(function(){
		$(this).find('.cont_icon>img').addClass('rotate');
		$(this).siblings().find('.cont_icon>img').removeClass('rotate');
	})
	$('.qa-modular3 .cont_right_bottom>li').click(function(){
		$(this).find('.p2').show(300);
		$(this).siblings().find('.p2').hide(300);
	})
})();