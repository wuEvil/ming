
//系统加载完成方法
$(function(){
	var username;
	var password;
	var reg=/^1[3|4|7|8|9]\d{9}$/;
	var url = "http://h6.duchengjiu.top/shop/api_user.php";
	var data;
			
	$(".username").blur(function(){
		username=$(this).val();
		
		if(reg.test(username)){
			
		}else{
			alert("请输入正确的手机号")
		}
	})
	$(".button").click(function(){
		password=$(".password").val();
		//转为js对象再判断
		if($("#check")[0].checked===true){
			//请求数据
			data = {
				status: "register",
				username: username,
				password: password
			}
			console.log(data)
			$.post(url, data, function(str) {
				console.log(str);
			})
			alert("注册成功，请登录！")
			location.href="../home/index.html";
			
		}else{
			alert("请阅读并勾选美丽说注册条款")
		}
			
		
	})
		
})
