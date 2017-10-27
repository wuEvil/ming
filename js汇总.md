# js知识大典

script ： js在html的标签

document：页面

.write() ：输出（覆盖原有的）

console.log():控制台打印日志

var 声明一个空间

function 函数名 (参数){执行内容}

		有匿名函数，闭包，构造函数等

.value 输入框的值

parseFloat()：获取参数的小数

toFixed（）：保留小数的位数

^ 位运算基于2进制的计算

true 代表真的

false  代表假的

！ 相反

&&：一F就F 第一个是F就不执行第二个了，T反之

||：一T就T	与&&相反

if (表达式) {  代码 }
else｛
｝

 如果表达式的值为true，那么执行代码，否则执行else的

break; 代表中断，不往下面的条件走了

switch (a)
{
case 1:
	代码
case 2:
	代码
case 3:
	代码
}

a==case 值则执行下面的代码（所以）一般用break跳出

循环

	while （）｛｝
	for（）｛｝

undefined： 空

prompt()：弹出一个输入框

return：返回值

局部变量：写在函数中的，定义的变量，是只能在函数中使用的。

“XXX” is not defined 出错了（没有找到）

定义在函数外的变量，称为 全局变量

闭包的思想一个函数放变量，函数内写另一个进行
缺点占内存，多了容易崩溃

parseInt：获取整数

```
	do
	{
		//  n % 10  等于 n 的个位数
		str = str + (n % 10);
		n = parseInt(n / 10)
	}
	while (n != 0);
```

var a = []:数组

a.length ；a的长度

push（）：将数据压入到 数组最末尾

splice 代表数组中 增加 或者 删除

unshift 代表在数组的开始位置插入

concat  连接两个或更多的数组，并返回结果。

join()	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。

sort 函数的讲解，规定排序顺序。必须是函数
```
	function func(a, b)
{
	return a < b
}

var a = [1, 3, 5, 2, 0];

// 规定排序顺序。必须是函数。
a.sort(func);

console.log(a)



function m1(a, b)
{
	return a
}

function sort(m2)
{
	if (m2(3,5) == true)
	{
		交换数据
	}
	else
	{	
		不交换数据
	}
}

sort(m1)

```

### 字符串

substr 代表 从制定位置开始，找对应数目的字符 截取

indexOf 代表搜索子串，返回子串首字符的下标位置

replace 代表 替换某个符号
// a = a.replace("！", "，")

split  代表以某个字符串分隔
// var arr = a.split("，")

concat 拼接字符串，返回的结果才是拼接后的结果
// a = a.concat(",布灵布灵的！")

charAt 代表取出字符串中对应下标的字符【注意】是从0开始编号的
// document.write( a.charAt(0)  )

typeof：数据类型

arguments：输入参数值

### 正则
replace 是【字符串对象】的 方法，作用是用于替换

charCodeAt 是字符串对象的系统方法，返回值字符对应的编码数值
              参数： 字符串的下标

fromCharCode 是字符串对象（String）的系统方法
                  作用： 将编码数值转换成对应的字符
                  参数： 编码数值
                  返回结果： 对应的字符
数组也是对象

var a=｛｝：对象

#### 一些系统函数（数学计算方面）
```
Math  对象（数学方面）系统提供的
// random 函数： 产生1个随机数， 
//        产生的是 0~1 之间的随机数
// Math.random()					0~1
// Math.random()*5					0~5 的小数
// parseInt(Math.random()*5)		0~5 的整数
match 是 【字符串对象】中的系统函数
//     功能： 匹配规则，并且以【数组】的形式返回规则中所有分组的内容
// var reg = new RegExp("\\d")
```

## 重点：闭包
```html
function m1()
{
	var a = 10

	function m2()
	{
		// 函数m2使用了 父函数中的变量 a，那么变量a的空间就不会销毁（释放）
		//  子函数使用了父函数的空间，称为闭包。
		a++

		console.log(a)
	}

	// 返回这个函数 m2
	return m2;
}
// 将m1函数的返回值 赋值给 f1, 这里相当于 f1 等于 m2
var f1 = m1()

// 输出11
f1()

```
##### 原理分析

mi放a的变量值
之后调用取返回值return m2;
也就是m2

最直接的就是一个函数放变量，函数里面再来一个函数调用这个变量，
第一个函数返回值是第二个函数

### dom操作（增删改查）
















## 疑惑
<h3>文字</h3>  ==> 180 
// translate:rotate(180deg)   ==> 180