	//js  tab切换
$$("#left").onclick = function(){
	$$("#center").style.cssText=`
		background-color:#eee;
		color:#222;
		border-top:2px solid #eee;
	`;
	$$("#left").style.cssText=`
		color:#ff1268;
		background-color: #fff;
		border-top: 2px solid #FF1268;
	`;
	 $$("#right").style.cssText=`
		background-color:#eee;
		color:#222;
		border-top:2px solid #eee;
	`;
	$$("#enterThird").style.display = "none";
	$$("#enterFirst").style.display = "block";
	$$("#enterSecond").style.display = "none";
}
$$("#center").onclick = function(){
	$$("#left").style.cssText=`
		background-color:#eee;
		color:#222;
		border-top:2px solid #eee;
	`;
	$$("#center").style.cssText=`
		color:#ff1268;
		background-color: #fff;
		border-top: 2px solid #FF1268;
	`;
	$$("#right").style.cssText=`
		background-color:#eee;
		color:#222;
		border-top:2px solid #eee;
	`;
	$$("#enterFirst").style.display = "none";
	$$("#enterSecond").style.display = "none";
	$$("#enterThird").style.display = "block";
}
$$("#right").onclick = function(){
	$$("#left").style.cssText=`
		background-color:#eee;
		color:#222;
		border-top:2px solid #eee;
	`;
	$$("#right").style.cssText=`
		color:#ff1268;
		background-color: #fff;
		border-top: 2px solid #FF1268;
	`;
	$$("#center").style.cssText=`
		background-color:#eee;
		color:#222;
		border-top:2px solid #eee;
	`;
	$$("#enterFirst").style.display = "none";
	$$("#enterSecond").style.display = "block";
	$$("#enterThird").style.display = "none";

}
function $$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}


//jquery
$(".phone-select").click(function(){
	$(".phone-opation").css({"display":"block"});
});
//获取每个span下的值
$(".phone-opation li").each(function(){
	$(this).click(function(){
		//获取每个li的下标
		let index=$(this).index();
		//把span对应下标的值获取
		let spanVal=$(".phone-opation li span").eq(index).html();
		$(".phone-select").text(spanVal);
		$(".phone-opation").css({"display":"none"});
	})
})
	
//hover([over,]out)
//over:鼠标移到元素上要触发的函数
//out:鼠标移出元素要触发的函数
$(".phone-opation #focus").hover(
	function(){
		$(this).css({backgroundColor:"#e7e7e7"});
	},
	function(){
		$(this).css({backgroundColor:"#fff"})
	}
);
//点击文本框变色
$("input").focus(function(){
	$(this).parent().css({
		"border-color":"#ff1268"
	});
})
$("input").blur(function(){
	$(this).parent().css({
		"border-color":"#ccc"});
});
$(".text").focus(function(){
	$(this).css({
		"border-color":"#ff1268"
	});
});
$(".text").blur(function(){
	$(this).css({
		"border-color":"#ccc"});
});


//前端验证
var arr = ["userphone","userpass"];
$$(`#userphoneId`).onblur = function(){
    if(check(this.value,"userphone")){
        $$("#phoneHelp").style.display="none";
            $$("#userphoneId").style.cssText=`border:1px solid #ccc;`;              
    }else{
         $$("#phoneHelp").style.display="block";
    }
}

$$(`#userpassId`).onblur = function(){
    if(check(this.value,"userpass")){
        $$("#passHelp").style.display="none";
        $$("#userpassId").style.cssText=`border:1px solid #ccc;`;
                
    }else{
        $$("#passHelp").style.display = "block";
    }
}

// $$("#checkpass").onblur = function(){
//     if(checkpass()){
//         $$("#passHelpAgain").style.display="none";
//         $$("#checkpass").style.cssText=`border:1px solid #ccc;`;
//     }else{
//         $$("#passHelpAgain").style.display = "block";
//     }
// }


$(".sub").click(function(){
	if( ("#userphoneId").val("")||("#userpassId").val("")) {
		$(".warn").css({"display":"block"});
		
	}
})
// //注册按钮绑定事件
// $$("#btnReg").onclick = function(){
//     //1、先看前端验证是否全部通过
//     if(!frontCheck() || !checkpass()){
//         alert("亲，请把信息输入正确!");
//         return;
//     }
//     //2、后端注册
//     ajaxByPromise("checkuser.php","get",{userphone:$$("#userphoneId").value},true)
//         .then(
//                 (str)=>{
//                     if(str!="1"){
//                         regSave();
//                     }else{
//                         alert("此手机号已经注册！");
//                     }
//                 },
//                 (str)=>{
//                     alert(str);
//                 }
//         );
// }


// //前端验证
// function frontCheck(){
//     for(let i in arr){
//         if(!check($$(`#${arr[i]}Id`).value,arr[i])){
//             return false;
//         }
//     }
//     return true;
// }

// //重复密码的验证
// function checkpass(){
//     return $$("#userpassId").value == $$("#checkpass").value;
// }

// //用户名是否存在
// var isExistsUser = false;
// // //后端验证用户名是否存在
// // function afterCheckUser(func){
     
// // }

// //后端注册
// function regSave(){
    
//     ajaxByPromise(
//         "regSave03.php",
//         "post",
//         {
//             userphone:$$("#userphoneId").value,
//             userpass:$$("#userpassId").value
//         },
//         true
//         ).then(
//         (str)=>{
//             if(str==1){
//                 window.open('enter.html');
//             }else{
//                alert("亲，不好意思，注册失败！请重新输入内容");
//             }
//         },(str)=>{
//             alert(str);
//         });
// }


// function check(str,type) {
//     switch(type){
//         case "username":var r =  /^[a-zA-Z_]\w{5,14}$/ ; break;
//         //数字，字母，下划线，6,16
//         case "userpass":var r =  /^\w{6,20}$/; break;
//         case "email":var r =  /^[1-9a-zA-Z_]\w{5,17}@\w{2,10}\.(com|cn|net|com.cn)$/; break;
//         case "post":var r =  /^[1-9]\d{5}$/ ; break;
//         case "card":var r = /^[1-9]\d{5}[12]\d{3}(0[1-9]|1[0-2])\d{5}[0-9X]$/ ; break;
//         case "userphone":var r =  /^1[3-9]\d{9}$/; break;
//     }
//     return r.test(str);
// }

// function ajaxByPromise(url,method,params,isAsync){
//     //1、创建对象
//     let xhr = new XMLHttpRequest();

//     //产生请求参数的字符串：循环把json对象转换为形如这样的格式：key1=value1&key2=value2
//     let sendstr = '';
//     for(let key in params){
//         sendstr += `${key}=${params[key]}&`;
//         // sendstr += key+"="+params[key]+"&"
//     }
//     if(sendstr.length>0){
//         sendstr = sendstr.substring(0,sendstr.length-1); //musicname=你
//     }
    
//     let urlAndParam = url;//getMusic.php
//     //如果是get方式，并且有请求参数，那么就把url和请求参数用问号隔开
//     if(method.toLowerCase()=="get" && sendstr!=""){
//         urlAndParam+= "?"+sendstr;//getMusic.php?musicname=你
//     }

//     //2、设置请求参数
//     xhr.open(method,urlAndParam,isAsync);

//     let p = new Promise(function(resolve,reject){
//         //3、设置回调函数
//         xhr.onreadystatechange = function(){            
//             if(xhr.readyState==4){
//                 if(xhr.status==200){
//                     if(resolve){
//                         resolve(xhr.responseText);
//                     }
//                 }else{
//                     if(reject){
//                         reject("服务器出错了");
//                     }
//                 }
//             }
//         }
//     });
  
//     if(method.toLowerCase()=="post"){
//         xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//         xhr.send(sendstr);
//     }else{
//         //4、发送请求
//         xhr.send(); 
//     }
//     return p;
// }	

