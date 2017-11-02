var url = "http://h6.duchengjiu.top/shop/api_goods.php";

var a = [];
$.ajax({
	url: url,
	type: "get", // 类型
	success: function(str) { // 成功时的处理
		console.log(str);
		a = str.data;
		for(var i = 0; i < 6; i++) {
			$(".nav-con").append("<div class='nav-content'></div>")
			$(".nav-content").eq(i).append("<div class='mmp'></div>");
			$(".nav-content").eq(i).append("<div class='mmp-two'></div>");
			$(".mmp").eq(i).css('background-image', 'url(' + a[i].goods_thumb + ')');
			//console.log(a[i].goods_thumb);
		};

		for(var j = 0; j < a.length - (a.length % 3); j++) {

			$(".nav-mmp").append("<div class='nav-content-one'></div>")
			$(".nav-content-one").eq(j).append("<div class='mmp-3'></div>");
			$(".nav-content-one").eq(j).append("<div class='mmp-4'style='color: red;'><p>￥" + a[j].price + "</p></div>");
			$(".nav-content-one").eq(j).append("<div class='mmp-4'><p>" + a[j].goods_name + "</p></div>");
			$(".mmp-3").eq(j).css('background-image', 'url(' + a[j].goods_thumb + ')');

		}
		$(".nav-content-one").click(
			function() {
				alert("页面凯玉坐着呢")
				//							window.location.href="Leaflet.html?good_id="+$(this)[0].innerHTML
				console.log($(this))
			}
		)
	}
}) //			$(".nav-content-one").eq(i).click(
//				console.log("sss")
//			)

var tit = document.getElementById("global-sec-nav");
//alert(tit);
//占位符的位置
var rect = tit.getBoundingClientRect(); //获得页面中导航条相对于浏览器视窗的位置
var inser = document.createElement("div");
tit.parentNode.replaceChild(inser, tit);
inser.appendChild(tit);
inser.style.height = rect.height + "px";

//获取距离页面顶端的距离
var titleTop = tit.offsetTop;
//滚动事件
document.onscroll = function() {
	//获取当前滚动的距离
	var btop = document.body.scrollTop || document.documentElement.scrollTop;
	//如果滚动距离大于导航条据顶部的距离
	if(btop > titleTop) {
		//为导航条设置fix
		tit.className = "sec_nav fix";
	} else {
		//移除fixed
		tit.className = "sec_nav";
	}
}