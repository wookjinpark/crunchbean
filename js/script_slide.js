$(function(){
	$(".table2").hide();
					$("#button1").click(function(){

							$(".table1").fadeIn(0).siblings().fadeOut(0);
					});	
					$("#button2").click(function(){

							$(".table2").fadeIn(0).siblings().fadeOut(0);
					});	
			});