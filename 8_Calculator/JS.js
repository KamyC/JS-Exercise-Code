var result='';
var flag=0;

$(document).ready(function(){
	$('.btn').click(function(){
		var value=$(this).attr('value');
		if(parseInt(value,10)==value||value==="."||value==='%'
			||value==='*'||value==='-'||value==='+'||value==='/'){

			if(flag==0){result+=value;$('.input_text').val(result);}
			else {result=value;$('.input_text').val(result);flag=0;}
		}

		else if(value=="AC"){
			result='';
			$('.input_text').val(result);
		}

		else if(value=='+/-'){
			result=parseInt(result)*(-1);
			$('.input_text').val(result);
		}

		else if(value=='='){
			result=eval(result);
			$('.input_text').val(result);
			flag=1;
		}
	})
})