//切换到手机登录页面
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
})
//切换到普通登录页面
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

//手机登录
/*
var url=" http://h6.duchengjiu.top/shop/api_user.php";

var username;

var reg=/^1[3|4|7|8|9]\d{9}$/;

$(".username").blur(function(){
		username=$(this).val();
		
		if(reg.test(username)){
			
		}else{
			alert("请输入正确的手机号")
		}
})

$.idcode.setCode();   //加载生成验证码方法

$(".checkednumber").change(function(){
	var result = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(result){
            alert("验证码输入正确");
             console.log(result);
        }else {
            alert("请重新输入验证码");
            console.log(result);
        }
	 
})
//*/

//用户名登录
$(function(){
	
	var url=" http://h6.duchengjiu.top/shop/api_user.php";
	var oUserName;
	var oPassWord;
	var data;
	$("#button").click(function(){
		oUserName=$("#input").val();
		oPassWord=$("#passWord").val();
		data={
			"status":"Login",
			"username":oUserName,
			"password":oPassWord
		}
		$.post(url, data, function() {
			console.log(data)
			//数据保存在系统服务器中
			localStorage.userName=data.username;
			localStorage.passWord=data.password;
			
		})
		//跳转到首页
		Location.href="../../home/index.html";
	})
})