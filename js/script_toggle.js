$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().children(".text_info").slideUp();
		$( '.c p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().children(".text_info").slideUp();
		$( '.d p' ).toggleClass( 'ab' );
	});
	$(".right> li> .font2").click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().children(".text_info").slideUp();
		$( '.f p' ).toggleClass( 'ab' );
	});

});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

































































