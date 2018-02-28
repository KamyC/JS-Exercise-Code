$(document).ready(function(){
	$('.part_A_Half').css({
		"height":"345px",
		"background":"#EDEDED",
		"margin":"5px",
		"overflow":"hidden"
	})
	$('.part_A_Half .subtitle').css({
		"color":'#808080',
		"margin":"5px 5px 5px 15px",
		"padding":"5px",
		"font-size":"18px",
		"font-style":"oblique"
	})
	var animation=[{"width":0},{"width":"210px"}];
	function turn(target,time,animation){
	target.find('a').hover(
		function(){
			$(this).find('img').stop().animate(animation[0],time,function(){
				$(this).hide().next().show();
				$(this).next().animate(animation[1],time);
			});
		},
		function(){
			$(this).find('.info').animate(animation[0],time,function(){
				$(this).hide().prev().show();
				$(this).prev().animate(animation[1],time);
			});
		}
	);
	}
	turn($('.part_A_Half'),100,animation);

	$('.eachImg:first()').on('click',function(){
		$(".eachImg:first() .box").slideDown(500);
	})
	$('.eachImg:eq(1)').on('click',function(){
		$(".eachImg:eq(1) .box").slideDown(500);
	})
	$('.eachImg:eq(2)').on('click',function(){
		$(".eachImg:eq(2) .box").slideDown(500);
	})
	$('.eachImg:eq(3)').on('click',function(){
		$(".eachImg:eq(3) .box").slideDown(500);
	})
	$('.eachImg:eq(4)').on('click',function(){
		$(".eachImg:eq(4) .box").slideDown(500);
	})
	$('.eachImg:eq(5)').on('click',function(){
		$(".eachImg:eq(5) .box").slideDown(500);
	})
 	
	var n=0;
	var len=38;
	function tink(classname){
		var a=document.getElementsByClassName(classname);//classname=arrow
		a[n].setAttribute("src","img/arrowB-01.png");
		n++;
	}
	function back(target){
		$(target).attr('src',"img/arrowA-01.png")//target=.tinkling img
	}
	function go(target,classname){
		tink(classname);
		if(n>38){
			back(target);
			n=0;
		}
	}	
	console.log(len)
	function line(){
		go(".tinkling img","arrow");
	}
	setInterval(line,100)
	





})