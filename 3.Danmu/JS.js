$(document).ready(function(){
	var top;
	var right;
	var pageWidth=parseInt($(".screen").width());
	var pageHeight=parseInt($(".screen").height())-10;
	
	$("#send").bind("click",generate);
	function generate() {
    	var str = $(".form-control").val();
    	var span = $("<span class='string'></span>");
    	span.text(str);
   		top = Math.floor(Math.random() * pageHeight);
    	span.css({
    	"top":top,
        "right": "-400px",
        "color": getRandomColor(),
        "position":"absolute",
    	})

    	$(".screen").append(span);
    	$(".form-control").val("");
    	var lastSpan = $(".screen>span:last-child");
    	lastSpan.animate({ "right": pageWidth+300 }, 6000, function() {
        	$(this).remove();
    	})
	};
	
	function getRandomColor(){
    	var colorArr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    	var color = "";
    	for(var i = 0; i < 6; i++){
    	color += colorArr[Math.floor(Math.random()*16)]; 
   		}
   		return "#"+color;
  	}


})


