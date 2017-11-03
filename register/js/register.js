
//系统加载完成方法
$(function(){
	var username;
	var password;
	var reg=/^1[3|4|7|8|9]\d{9}$/;
	var reg1=/^\w{6,}/;
	var url = "http://h6.duchengjiu.top/shop/api_user.php";
	var data;
			
//	$(".username").blur(function(){
//		username=$(this).val();
//		
//		if(reg.test(username)){
//			
//		}else{
//			$(".fixed").css("display","block")
//			$(".fixed").html("请输入正确的手机号");
//			$(".fixed").click(function(){
//				$(".fixed").css("display","none")
//			})
//		}
//	})
//	
//	$(".password").blur(function(){
//		password=$(this).val();
//		
//		if(reg1.test(password)){
//			
//		}else{
//			$(".fixed").css("display","block")
//			$(".fixed").html("请重新设置密码");
//			$(".fixed").click(function(){
//				$(".fixed").css("display","none")
//			})
//			
//		}
//	})
	
	$(".buttonRegister").click(function(){
		username=$(".username").val();
		password=$(".password").val();
		data = {
				status: "register",
				username: username,
				password: password
			}
		//转为js对象再判断
		if($("#check")[0].checked===true){
			
			//请求数据
			$.post(url, data, function(str) {
				console.log(str);
				$(".fixed").css("display","block")
				$(".fixed").html(str.message+"(点击可关闭)");
				$(".fixed").click(function(){
					$(".fixed").css("display","none")
				})
				
				if(str.code==0){
					$(".fixed").html(str.message+"去登录吧！(点击可关闭)");
					$(".fixed").click(function(){
						$(".fixed").css("display","none")
						//注册成功则跳转到登录页面
						location.href="login.html";
					})
					
				}			
			})

		}else{
			$(".fixed").css("display","block")
			$(".fixed").html("请阅读并勾选美丽说注册条款 (点击可关闭)");
			$(".fixed").click(function(){
				$(".fixed").css("display","none")
			})
		}
			
		
	})
		
})
