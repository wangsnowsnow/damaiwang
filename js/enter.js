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

//验证码倒计时
 var times = 60;
 function roof(){
     if(times == 0){
         $('.getyzm').text('获取验证码('+times+'秒)');
         $('.getyzm').prop('disabled',false);
         $('.getyzm').text('获取验证码');
         times = 60;
         return
     }
     $('.getyzm').text(times+'秒'+'后重发');
     times--;
 
     setTimeout(roof,1000);
 }
 $('.getyzm').on('click',function(){
     
     $(this).prop('disabled',true);
     roof();
 
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

	

