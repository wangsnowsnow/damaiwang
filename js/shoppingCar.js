function create(){
    let dmBody = $(".dm-body")[0];
    //创建复选框
    for(let i=0;i<2;i++){
        let boxDom = document.createElement("div");
        boxDom.style.cssText = `
            width: 100%;
            height: 124px;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        `;
        boxDom.setAttribute("class","box");
        dmBody.appendChild(boxDom);

        let checked = document.createElement("input");
        checked.type = "checkbox";
        checked.style.cssText=`
            width:16px;
            height:16px;
            margin-left:23px;
            margin-top:60px;
            float:left;
        `;
        checked.setAttribute("class","input_checked");
        boxDom.appendChild(checked);
        //创建左边div
        let infodiv = document.createElement("div");
        infodiv.style.cssText = `
            width:335px;
            height:80px;
            padding:22px 26px;
            margin-left:25px;
            float:left;
        `;
        boxDom.appendChild(infodiv);
       //创建图片盒子
        let imgdiv = document.createElement("div");
        imgdiv.style.cssText=`
            margin-right:16px;
            float:left;
            width:62px;
            height:80px;
        `;
        infodiv.appendChild(imgdiv);
        let imgDom = document.createElement("img");
        imgDom.style.cssText = `
                width: 100%;
                height: 100%;
            `;
            imgDom.src = `img/l1.jpg`;
            imgdiv.appendChild(imgDom);
        let worddiv = document.createElement("div");
        worddiv.style.cssText = `
                width: 257px;
                height: 100%;
                float:left;
                line-height:16px;
            `;   
        infodiv.appendChild(worddiv);
        let pName = document.createElement("p");
        pName.innerHTML = '2019張藝興巡迴演唱會[大航海-香港站]';
        pName.style.cssText = `
            color: #4a4a4a;
            margin-bottom: 4px;
            font-size:12px;
        `;
        worddiv.appendChild(pName);
        let pTime = document.createElement("p");
        pTime.innerHTML = '2019.08.17 20:00-22:00';
        pTime.style.cssText = `
            color: #9b9b9b;
            font-size:12px;
        `;
        worddiv.appendChild(pTime);
        let pAddres = document.createElement("p");
        pAddres.innerHTML = '亚洲国际博览馆';
        pAddres.style.cssText = `
            color: #9b9b9b;
            font-size:12px;
            margin-bottom: 2px;
        `;
        worddiv.appendChild(pAddres);
        let sitdiv = document.createElement("div");
        sitdiv.innerHTML = '暂无座位信息';
        sitdiv.style.cssText = `
            float:left;
            padding:54px 32px;;
            color: #6c6c6c;
            font-size:12px;
        `;
        boxDom.appendChild(sitdiv);
        let pricediv = document.createElement("div");
        pricediv.innerHTML = '15480.00';
        pricediv.style.cssText = `
            float:left;
            margin-left:8px;
            padding:54px 16px;;
            color: #333;
            font-size:12px;
        `;
        boxDom.appendChild(pricediv);
        //-数量
        let numdiv = document.createElement("div");
        numdiv.style.cssText = `
            float:left;
            margin-left:9px;
            padding:22px 0;
            width:77px;
            height:80px;
        `;
        boxDom.appendChild(numdiv);
        let btnLeft = document.createElement("button");
        btnLeft.innerHTML = "-";
        numdiv.style.lineHeight = "77px";
        numdiv.appendChild(btnLeft);
        btnLeft.setAttribute("class","reducebtn")

        let numInp = document.createElement("span");
        numInp.style.cssText=`
            display:inline-block;
            width:28px;
            height:17px;
            text-align:center;
        `;
        numInp.innerHTML = "1";  
        numdiv.appendChild(numInp);
        let btnRight = document.createElement("button");
        btnRight.innerHTML = "+";
        numdiv.style.lineHeight = "77px";
        numdiv.appendChild(btnRight);
        btnRight.setAttribute("class","addbtn");
       
        let totaldiv = document.createElement("div");
        totaldiv.innerHTML = '15480.00';
        totaldiv.style.cssText = `
            float:left;
            margin-left:10px;
            padding:54px 32px;;
            color: #333;
            font-size:12px;
        `;
        totaldiv.setAttribute("class","totaldiv")
        boxDom.appendChild(totaldiv);
         
        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = '删除';
        deletebtn.style.cssText = `   
            float:left;
            margin:54px 25px 54px 30px;
            color: #333;
        `;
        boxDom.appendChild(deletebtn);
    }
}
//按钮
jQuery.fn.extend({
	checkBind:function($employeeCheckbox,$ubCheckBtn){
		// this; 是全选复选框
		$(this).click(function(){
			$employeeCheckbox.checkAll(this.checked);
		});


		$employeeCheckbox.click(()=>{
			$employeeCheckbox.fanCheck(this);
		});

		if($ubCheckBtn){
			$ubCheckBtn.click(()=>{
				$employeeCheckbox.uncheck();
				$employeeCheckbox.fanCheck(this);
			});	
		}
	},
	checkAll:function(isChecked){
		this.attr("checked",isChecked);
	},
	uncheck:function(){
		this.each(function(){
			//this:循环过程中的每个DOM对象
			this.checked = !this.checked;
		});
	},
	fanCheck:function($leaderCheck){
		let isAllCheck = true;//假定全部选中
		this.each(function(){
			if(!this.checked){
				isAllCheck = false;
			}
		});
		$leaderCheck.attr("checked",isAllCheck);
	}
});

window.onload = function(){
    create();
    $("#checkallid").checkBind($(".input_checked"),);

    var addbtn = $$(".addbtn");
    for(var i=0;i<addbtn.length;i++){
        addbtn[i].onclick=function(){
            var spanDom=this.previousElementSibling;
            changeCount(this,spanDom,1);
            // totalMoneyF();
        }
    }
    var btnResuces=$$(".reducebtn");
		for(var i=0;i<btnResuces.length;i++){
			btnResuces[i].onclick=function(){
				var spanDom=this.nextElementSibling;
				changeCount(this,spanDom,-1);
			}
	}
}
function changeCount(selfDom,spanDom,inc){
    //计算点击按钮后是给span +1还是-1
    var count=parseInt(spanDom.innerHTML);//定义count取整在HTML中的数值
    count+=inc;//inc= 1(-1)
    if(count<0){
        count=0;
    }
    spanDom.innerHTML=count;//将计算后的count打印在HTML

    //根据单价和数量计算金额

    //1.获取单价：
    var price=parseFloat(selfDom.parentNode.previousElementSibling.innerHTML);
    //2.计算金额
    var money=(count*price);
    //3.显示金额
    selfDom.parentNode.nextElementSibling.innerHTML = money;

    //4.计算总金额
    totalMoneyF();
}
function totalMoneyF(){
   
    var totalMoney=15480.00;
    for(var i=1;i<$$(".totaldiv").length;i++){
        var money=$$(".totaldiv")[i].innerHTML;
        console.log(money)
        totalMoney+=parseFloat(money);
    }
    $$("#spanTotalMoney").innerHTML=totalMoney;
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