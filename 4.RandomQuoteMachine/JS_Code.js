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
  	var quotesArr=["Life is about making an impact, not making an income",
  	'Whatever the mind of man can conceive and believe, it can achieve',
  	'Strive not to be a success, but rather to be of value',
  	'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference',
  	'I attribute my success to this: I never gave or took any excuse',
  	'You miss 100% of the shots you don’t take',
  	'I have missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed',
  	'The most difficult thing is the decision to act, the rest is merely tenacity',
  	'Every strike brings me closer to the next home run',
  	'Definiteness of purpose is the starting point of all achievement'];
  	var ownerArr=["Kevin Kruse",
  	"Napoleon Hill",
  	"Albert Einstein",
  	"Robert Fros",
  	"Florence Nightingale",
  	"Wayne Gretzky",
  	"Michael Jordan",
  	"Amelia Earhart",
  	"Babe Ruth",
  	"W. Clement Stone"];

	$(".btn").on("click",function(){
		$('.BG').css("background",getRandomColor);
		var random=Math.floor(Math.random()*10);
		var quote=quotesArr[random];
		var owner=ownerArr[random];
		$('.contents p').first().html(quote);
		$('.contents p').last().html(owner);
	})
})