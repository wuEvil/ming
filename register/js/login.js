//切换到手机登录页面
//*
$(".phoneLogin").click(function(){
	
	$(".u2").css("display","none");
	$(".u22").css("display","block");
	
	$(".phoneLogin").css({
		"border-bottom":"1px solid #fe4161",
		color:"#fd6477"
	})
	$(".normal").css({
		"border-bottom":"none",
		color:"#4f3c3a"
	})
})//*/

//切换到普通登录页面
//*
 $(".normal").click(function(){
	$(".u22").css("display","none");
	$(".u2").css("display","block");
	
	$(".normal").css({
		"border-bottom":"1px solid #fe4161",
		color:"#fd6477"
	})
	$(".phoneLogin").css({
		"border-bottom":"none",
		color:"#4f3c3a"
	})
})
//*/

//2.手机登录
//*由于登录接口文档必须传密码，这里只实现验证码认证功能，认证成功跳转到首页
	var url="http://h6.duchengjiu.top/shop/api_user.php";
	
	var username;
	
	var reg=/^1[3|4|7|8|9]\d{9}$/;
	
	$(".username").blur(function(){
			username=$(this).val();
			
			if(reg.test(username)){
				
			}else{
				$(".fixed").css("display","block")
				$(".fixed").html("请输入正确的11位手机号");
				$(".fixed").click(function(){
					$(".fixed").css("display","none")
				})
			}
	})
	//*
	$.idcode.setCode();   //加载生成验证码方法
	$("#Txtidcode").change(function() {
				var r = $.idcode.validateCode();
				console.log(r);
				if (r == true) {
					$(".fixed").css("display","block")
					$(".fixed").html("验证成功！去购物~！");
					$(".fixed").click(function(){
						$(".fixed").css("display","none")
						location.href="index.html";
					})
	
				} else {
					$(".fixed").css("display","block")
					$(".fixed").html("验证失败！请重新输入验证码");
					$(".fixed").click(function(){
						$(".fixed").css("display","none")
						
					})
				}
			})
	
	//1.用户名登录
	  //检测用户名是否存在==>密码是否正确==>跳转到首页，并保存用户名到页面上 
	
	var url="http://h6.duchengjiu.top/shop/api_user.php";
	var oUserName;
	var oPassWord;
	var data;
	localStorage.name = " ";
	$("#button").click(function(){
		
		oUserName=$("#input").val();
		oPassWord=$("#passWord").val();
		data={
			"status":"login",
			"username":oUserName,
			"password":oPassWord
		}
		$.post(url, data, function(str) {
			//str后台传回来的值
			console.log(str.data.username);
			$(".fixed").css("display","block")
			$(".fixed").html(str.message+"(点击可关闭)");
			$(".fixed").click(function(){
				$(".fixed").css("display","none")
			})
			if(str.code==0){
				//数据保存在系统服务器中
				
				localStorage.name=str.data.username;
				localStorage.token=str.data.token;
				$(".fixed").html(str.message+"去购物吧！(点击可关闭)");
				$(".fixed").click(function(){
					$(".fixed").css("display","none")
					//跳转到首页
					location.href="http://localhost:8020/MeilishuoPage-one/home/index.html"
				})
	
			}
				
		})
	
	})
