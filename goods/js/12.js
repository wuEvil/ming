var oBox1 = document.getElementById("size");
var aP = oBox1.getElementsByClassName("jiuz");

for(var i = 0; i < aP.length; i++) {
	aP[i].onclick = function() {
		// 全部干掉！   循环
		for(var j = 0; j < aP.length; j++) {
			aP[j].style.background = "white"
		}

		// 自己再亮起来
		this.style.background = "red"
	}
}
var dizhi = window.location.href
		var s = "",c="";
		function GetArgsFromHref(sHref,mm,nn,i) {
			s="";
		
			var args = sHref.split(nn);
//			console.log(args)
			args = args.splice(mm)
//			console.log(args)
			s = args[i];
		}
		GetArgsFromHref(dizhi,'?',"&quot;",1);
		$(".left").append("<img src="+s+">")
		
	

