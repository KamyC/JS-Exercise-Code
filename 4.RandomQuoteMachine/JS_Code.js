$(document).ready(function(){
	var color_origin=getRandomColor();
	$('.BG').css("background",color_origin);
	$('.contents p').first().css({
		"color":color_origin,
		"font-size":"20px",
		"word-wrap":"break-word",
		"word-break":"break-all",

	});
	$('.contents p').last().css({
		"color":"yellow",
		"margin-left":"300px"

	})
	$('.box .btn').css("background",color_origin);

	function getRandomColor(){	
    	var colorArr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    	var color = "";
    	for(var i = 0; i < 6; i++){
    	color += colorArr[Math.floor(Math.random()*15)]; 
   		};
   		console.log("#"+color);
   		return "#"+color;
  	}
  	var quotesArr=["AAAAA",'bbbbb','ccccccc','dddddd'];
  	var ownerArr=["1","2","3","4"];

	$(".btn").on("click",function(){
		$('.BG').css("background",getRandomColor);
		var random=Math.floor(Math.random()*4);
		var quote=quotesArr[random];
		var owner=ownerArr[random];
		$('.contents p').first().html(quote);
		$('.contents p').last().html(owner);
	})
})