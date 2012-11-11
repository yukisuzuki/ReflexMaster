var canvas = function(e){
	document.getElementById("X").innerHTML="X" +e.layerX;
	document.getElementById("Y").innerHTML="Y" +e.layerY;
	if(330 < e.layerX && e.layerX < 450){
		if(215 < e.layerY && e.layerY < 250)
	window.location.href = "enchanttest/reflex_main.html";　//on_click実行時ページ遷移

	}
	};
window.addEventListener("load",function(){  //onLoadと同じ意味
	document.getElementById("canvas").addEventListener("click",canvas);
	}); 
	
	
