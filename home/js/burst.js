var url = "http://h6.duchengjiu.top/shop/api_goods.php";

var a = [];
var data = {
	cat_id: 0
}
$.ajax({

	url: url,
	data: data,
	type: "get", // 类型
	success: function(str) { // 成功时的处理
		console.log(str);
		a = str.data;

		for(var j = 0; j < a.length - (a.length % 3); j++) {

			$(".nav-con").append("<div class='nav-content-one'></div>")
			$(".nav-content-one").eq(j).append("<div class='mmp-3'></div>");
			$(".nav-content-one").eq(j).append("<div class='mmp-4'style='color: red;'><p>￥" + a[j].price + "</p></div>");
			$(".nav-content-one").eq(j).append("<div class='mmp-4'><p>" + a[j].goods_name + "</p></div>");
			$(".mmp-3").eq(j).css('background-image', 'url(' + a[j].goods_thumb + ')');

		}
	}
}) //			$(".nav-content-one").eq(i).click(
//				console.log("sss")
//			)

var id_arr = [];
$.ajax({
	type: "get",
	url: "http://h6.duchengjiu.top/shop/api_cat.php",
	async: false,
	success: function(str) {
		var a = str.data
		for(var i = 0; i < a.length; i++) {
			id_arr.push(a[i].cat_id)
		};
	}
});
var mm = id_arr
var data_a = {
	cat_id: id_arr[1]
}
$.ajax({
	type: "get",
	url: url,
	async: true,
	data: data_a,
	success: function(str) {
		// 成功时的处理
		console.log(str);
		a = str.data;

		for(var j = 0; j < a.length - (a.length % 3); j++) {

			$(".nav-mmp").append("<div class='nav-content-one'></div>")
			$(".nav-mmp .nav-content-one").eq(j).append("<div class='mmp-3'></div>");
			$(".nav-mmp .nav-content-one").eq(j).append("<div class='mmp-two'style='color: red;'><p>￥" + a[j].price + "</p></div>");
			$(".nav-mmp .nav-content-one").eq(j).append("<div class='mmp-two'><p>" + a[j].goods_name + "</p></div>");
			$(".nav-mmp .mmp-3").eq(j).css('background-image', 'url(' + a[j].goods_thumb + ')');

		}
		$(".nav-content-one").click(
			function() {
				window.location.href = "/MeilishuoPage-one/goods/12.html?good_id=" + $(this)[0].innerHTML
			}
		)

	}
});

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

//ul.removeChild(".username")
//$.ajax({
//	type: "get",
//	url: "http://h6.duchengjiu.top/shop/api_userinfo.php",
//	async: true,
//	status: 'info',
//	username: localStorage.name,
//	success: function(str) {
//		console.log(str);
//	}
//})
console.log(localStorage.name)
if(localStorage.name != undefined) {
	$(".userinfo").remove();
	$(".inner ul").append("<li class='one'>以" + localStorage.name + "登录</li>")
}
//,

for(var i = 0; i <= 10; i++) {

	(function(i) {
		$(".link").eq(i).click(

			function() {
				if(i == 0) {
					location.href = "index.html"
				}
				$(".totalnum-11 li a").css("color", "#000");
				$(".totalnum-11 li a").css("border-bottom", "0");
				$(this).css("color", "#f36");
				$(this).css("border-bottom", "2px solid #f36");
				var nn = this.innerHTML;
				$(".nav").html("");
				console.log(mm);
				console.log(i)
				var data_name = {
					cat_name: nn,
					cat_id: mm[i - 1]
				}
				$.ajax({
					type: "get",
					url: url,
					async: true,
					data: data_name,
					success: function(str) {
						console.log(str);
						a = str.data;
						for(var j = 0; j < a.length - (a.length % 3); j++) {
							$(".nav").append("<div class='nav-content-one'></div>")
							$(".nav .nav-content-one").eq(j).append("<div class='mmp-3'></div>");
							$(".nav .nav-content-one").eq(j).append("<div class='mmp-two'style='color: red;'><p>￥" + a[j].price + "</p></div>");
							$(".nav .nav-content-one").eq(j).append("<div class='mmp-two'><p>" + a[j].goods_name + "</p></div>");
							$(".nav .mmp-3").eq(j).css('background-image', 'url(' + a[j].goods_thumb + ')');
						}
						$(".nav-content-one").click(
							function() {
								window.location.href = "/MeilishuoPage-one/goods/12.html?good_id=" + $(this)[0].innerHTML
							}
						)
					}
				});
			})

	})(i);

}