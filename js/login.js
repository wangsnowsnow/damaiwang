//手机号
let bDom = $$("#bId");
$$("#phones").onclick = function(evt){
	evt.stopPropagation();
	$$("#ulId").style.display = "block";
	$$("#phones").style.border =`1px solid #f50`;
	bDom.style.cssText = `
		transform: rotate(180deg);
		transition: all .3s ease-out;	
	`;
}

let liDom = $$("#ulId").children;
for(let i=0;i<liDom.length;i++){
	liDom[i].onclick = function(evt){
		evt.stopPropagation();
		$$("#emId").innerHTML = this.innerHTML;
		$$("#ulId").style.display = "none";
		$$("#phones").style.border ="none";
		bDom.style.cssText = `
		transform: rotate(360deg);
		transition: all .3s ease-out;
	`;
	}
}
document.onclick = function(){
	$$("#ulId").style.display = "none";
	$$("#phones").style.border ="";
	bDom.style.cssText = `
		transform: rotate(360deg);
		transition: all .3s ease-out;	
	`;
}
//滑动验证
 window.onload=function(){
    //事件:滑块1.按下  onmousedown
    //2.拖动 onmousemove
    //3.松开 onmouseup
    var flag=false; //处理验证是否通过  默认是不通过
    var box=document.getElementById('box');//大盒子
    var btn=document.getElementsByClassName('btn')[0];//滑块
    var text=document.getElementsByClassName('text')[0];//文字
    var bg=document.getElementsByClassName('bg')[0];//背景
    //按下
    btn.onmousedown=function(e){
        var downX=e.clientX; //按下按钮后与窗口的x轴间距
        //移动
        btn.onmousemove=function(e){
            var moveX=e.clientX-downX; //滑动的时候距离窗口的x轴的间距  滑动的x-按下的x             
            //只有在大于0的时候才拖动
            if(moveX>0){
                btn.style.left=moveX+'px';//滑块与左边的距离
                bg.style.width=moveX+'px'; //背景的宽度就是滑块距离左边的位置
                //验证成功 条件 不能> 盒子的宽度-滑块的宽度 
                if(moveX>=(box.offsetWidth-btn.offsetWidth)){
                    text.innerText='验证成功';
                    text.style.color='#fff';
                    btn.onmousemove=null; //清除拖动事件
                    btn.onmousedown=null; //清除按下事件
                    flag=true; //通过的时候设置为true
                }
            }
            
        }
    }
    
    //松开
    btn.onmouseup=function(){
        //为假的时候
        if(flag==false){
            btn.onmousemove=null;//清除事件
            btn.style.left=0;
            bg.style.width=0;
        }
        
    }
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


//光标获取焦点时
$("input").focus(function(){
    $(this).css({
        "border-color":"#ff3000",
        "border-width":"1px",                         
        "border-style":"solid"      
    })
    $(".judge").css({"display":"block"});
})
$("#userpassId").blur(function(){

    $(".judge").css({"display":"none"});
})


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


$$("#checkpass").onblur = function(){
    if(checkpass()){
        $$("#passHelpAgain").style.display="none";
        $$("#checkpass").style.cssText=`border:1px solid #ccc;`;
    }else{
        $$("#passHelpAgain").style.display = "block";
    }
}

//注册按钮绑定事件
$$("#btnReg").onclick = function(){
    //1、先看前端验证是否全部通过
    if(!frontCheck() || !checkpass()){
        alert("亲，请把信息输入正确!");
        return;
    }
    //2、后端注册
    ajaxByPromise("checkuser.php","get",{userphone:$$("#userphoneId").value},true)
        .then(
                (str)=>{
                    if(str!="1"){
                        regSave();
                    }else{
                        alert("此手机号已经注册！");
                    }
                },
                (str)=>{
                    alert(str);
                }
        );
}


//前端验证
function frontCheck(){
    for(let i in arr){
        if(!check($$(`#${arr[i]}Id`).value,arr[i])){
            return false;
        }
    }
    return true;
}

//重复密码的验证
function checkpass(){
    return $$("#userpassId").value == $$("#checkpass").value;
}

//用户名是否存在
var isExistsUser = false;
// //后端验证用户名是否存在
// function afterCheckUser(func){
     
// }

//后端注册
function regSave(){
    
    ajaxByPromise(
        "regSave03.php",
        "post",
        {
            userphone:$$("#userphoneId").value,
            userpass:$$("#userpassId").value
        },
        true
        ).then(
        (str)=>{
            if(str==1){
                window.open('enter.html');
            }else{
               alert("亲，不好意思，注册失败！请重新输入内容");
            }
        },(str)=>{
            alert(str);
        });
}


function check(str,type) {
    switch(type){
        case "username":var r =  /^[a-zA-Z_]\w{5,14}$/ ; break;
        //数字，字母，下划线，6,16
        case "userpass":var r =  /^\w{6,20}$/; break;
        case "email":var r =  /^[1-9a-zA-Z_]\w{5,17}@\w{2,10}\.(com|cn|net|com.cn)$/; break;
        case "post":var r =  /^[1-9]\d{5}$/ ; break;
        case "card":var r = /^[1-9]\d{5}[12]\d{3}(0[1-9]|1[0-2])\d{5}[0-9X]$/ ; break;
        case "userphone":var r =  /^1[3-9]\d{9}$/; break;
    }
    return r.test(str);
}

function ajaxByPromise(url,method,params,isAsync){
    //1、创建对象
    let xhr = new XMLHttpRequest();

    //产生请求参数的字符串：循环把json对象转换为形如这样的格式：key1=value1&key2=value2
    let sendstr = '';
    for(let key in params){
        sendstr += `${key}=${params[key]}&`;
        // sendstr += key+"="+params[key]+"&"
    }
    if(sendstr.length>0){
        sendstr = sendstr.substring(0,sendstr.length-1); //musicname=你
    }
    
    let urlAndParam = url;//getMusic.php
    //如果是get方式，并且有请求参数，那么就把url和请求参数用问号隔开
    if(method.toLowerCase()=="get" && sendstr!=""){
        urlAndParam+= "?"+sendstr;//getMusic.php?musicname=你
    }

    //2、设置请求参数
    xhr.open(method,urlAndParam,isAsync);

    let p = new Promise(function(resolve,reject){
        //3、设置回调函数
        xhr.onreadystatechange = function(){            
            if(xhr.readyState==4){
                if(xhr.status==200){
                    if(resolve){
                        resolve(xhr.responseText);
                    }
                }else{
                    if(reject){
                        reject("服务器出错了");
                    }
                }
            }
        }
    });
  
    if(method.toLowerCase()=="post"){
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(sendstr);
    }else{
        //4、发送请求
        xhr.send(); 
    }
    return p;
}




