
//广告

let myTimer;
function run(){
	let top1=0;
	if(myTimer){
		return;
	}
	myTimer = setInterval(function(){
		top1 = top1-1;
		if (top1<-60) {
			top1=-60;
			window.clearInterval(myTimer);
		}
		$("#bigBox").style.top = top1+"px";
	},5);
}
$("#close").onclick = function(){
	run();
}
//文本框获取焦点时边框变色
$("#inputSearch").onfocus=function(){
	$("#searchHeader").style.cssText=`
		border:1px solid #FF1268;
	`;
}
$("#inputSearch").onblur=function(){
	$("#searchHeader").style.cssText=`
		border: 1px solid #f8f8f8;
	`;
}
//全国省市
var arr=['北京','上海','杭州','深圳','天津','广州','成都','武汉','南京','重庆','苏州',
'西安','青岛','长沙','郑州','宁波','大连','哈尔滨','济南','昆明','厦门','石家庄','福州',
'无锡','贵阳','合肥','太原','佛山','南宁','沈阳','常州','南昌','珠海','长春','绍兴',
'呼和浩特','中山','海口','东莞','南通','包头','潍坊','香港','宜昌','株洲','兰州','唐山',
'惠州','烟台','银川','邯郸','河源','马鞍山','澳门','江门','金华','台州','柳州','泰州',
'遵义','衡水','扬州','黄冈','潜江','舟山','九江','聊城','兴安盟','盐城','滨州','丽水陵',
'水宿','迁营口','大同','丹东','荆州','芜湖','徐州','宜春','安庆','抚州','海西','黄石',
'泉州','温州','岳阳','鞍山','巴彦淖尔','蚌埠','本溪','大理','德阳','桂林','济宁','嘉兴',
'晋中','酒泉','廊坊','洛阳','南充','萍乡','乌兰察布','乌鲁木齐','西宁','延边','肇庆','阿坝',
'保定','北海','昌吉','赤峰','大庆','广安','广元','葫芦岛','吉林','佳木斯','丽江','临沂',
'绵阳','莆田','普洱','黔南','秦皇岛','日照','三门峡','三亚','汕头','塔城','台北','桃园',
'梧州','咸宁','湘潭','新北','新乡','许昌','阳江','玉林','云浮','湛江','张家口','昭通',
'淄博','泸州','境外'];
var aDoms=[];
for(i=0;i<146;i++){
	let aDom = document.createElement("a");
	aDom.style.cssText=`
		color:#111;
		margin-right:15px;
		width:33px;
		height:29px;
		line-height:29px;
	`;
	aDom.href = "#";
	aDom.innerHTML = arr[i];
	if ((i+1)%10==0){
		aDom.innerHTML=arr[i]+"<br/>";
	}
	$("#rightCity").appendChild(aDom);
	aDoms.push(aDom);
}
//移入移出变色
for(let i=0;i<aDoms.length;i++){
	aDoms[i].onmouseover = function(){
		this.style.color="#FF1268";
	}
	aDoms[i].onmouseout = function(){
		this.style.color="#111";
	}
}
$("#locationHeader").onmouseover=function(){
	$("#locationOne").style.display="block";
}
$("#locationHeader").onmouseout=function(){
	$("#locationOne").style.display="none";
}

//banner图
window.onload = function(){
	//轮播图
	new BannerPlayer({
		width:1200,
		height:320,
		imgs:["img/banner2.jpg","img/banner1.jpg"],
		timeSpace:1500,
		douColor:"#fff",
		douHighColor:"#fff"
	},$("#banner"));
}

class BannerPlayer{
	//构造函数
	constructor(obj,boxDom){
		//1、属性（数据）
		this.boxDom = boxDom;
		this.imgDoms = [];//存储所有的图片标签
		this.liDoms = [];//存储所有的li标签（豆豆）
		this.arrowBoxDom = null;//存储左右箭头的容器
		let defaultObj = {
			width:400,
			height:300,
			imgs:["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"],
			timeSpace:1000,
			douColor:"pink",
			douHighColor:"red",
			douSize:10,
			douPos:"下",
			douIsCircle:true,
			myTimer:null,
			ord:0,
			type:"fade",//切换效果的类型
			douOpacity:0.5,
			douHighOpacity:1
		}

		for(let key in defaultObj){
			if(obj[key]){
				this[key] = obj[key];
			}else{
				this[key] = defaultObj[key];
			}
		}
		//2、创建外观（把数据应用在外观上）
		this.render();
		this.addEvent();
		this.autoPlay();
	}

	//外观（html和css代码）
	render(){
		this.boxDom.style.position = "relative";

		//1、创建图片
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = `
				position: absolute;
				left:0px;
				top:0px;
				width: 100%;
				height: 100%;	
				z-index: 1;`;	

			switch(this.type){
				case "fade":imgDom.style.opacity = (i==0?1:0);break;
			}
			if(i==0){
				imgDom.style.zIndex = 2;
			}
			let aDom = document.createElement("a");
			aDom.href = "#";
			aDom.appendChild(imgDom);

			this.boxDom.appendChild(aDom);
			this.imgDoms.push(imgDom);
		}
		//2、创建豆豆
		//1)、豆豆的容器ul
		let doudouBox = document.createElement("ul");
		doudouBox.style.cssText = `
				padding:0px;
				position: absolute;
				list-style: none;
				z-index: 3;`;
		if(this.douPos=="上"){
			doudouBox.style.left = `${(this.width-(this.douSize*(this.imgs.length*2-1)))/2}px`;
			doudouBox.style.top = "28px";			
		}else if(this.douPos=="下"){
			doudouBox.style.left = "1130px";
			doudouBox.style.bottom = "28px";
		}	
		this.boxDom.appendChild(doudouBox);
		//2)、豆豆 li
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.setAttribute("index",i);
			liDom.style.cssText = `
				float:left;
				width:${this.douSize}px;
				height: ${this.douSize}px;
				margin-right: ${this.douSize+8}px;
				background-color: ${this.douColor};
			`;
			if(this.douIsCircle){
				liDom.style.borderRadius="50%";
			}
			if(i==0){
				liDom.style.backgroundColor=this.douHighColor;
			}
			doudouBox.appendChild(liDom);
			this.liDoms.push(liDom);//放在数组里，方便其它函数使用
		}

		//3、创建左右按钮
		//1)、创建左右箭头的容器
		this.arrowBoxDom = document.createElement("div");

		this.arrowBoxDom.style.cssText = `
				position: absolute;
				left:0px;
				top:${(this.height-60)/2}px;
				width: 100%;
				height: 60px;
				z-index: 4;
			`;
		this.boxDom.appendChild(this.arrowBoxDom);


		let leftDivDom = document.createElement("div");
		leftDivDom.style.cssText = `
				float:left;
				height: 100%;
				width: 50px;
				background-color: black;
				opacity: 0.5;`;
		this.arrowBoxDom.appendChild(leftDivDom);


		let rightDivDom = document.createElement("div");
		rightDivDom.style.cssText = `
				float:right;
				height: 100%;
				width: 50px;
				background-color: black;
				opacity: 0.5;`;
		this.arrowBoxDom.appendChild(rightDivDom);
	

		//2)、创建左右箭头
		let leftArrowDom = document.createElement("div");
		leftArrowDom.style.cssText = `
				position: absolute;
				left: 20px;
			    top: 50%;
			    width: 18px;
			    height: 18px;
			    border: solid #fff;
			    border-width: 2px 2px 0 0;
				transform: translate(0,-50%) rotate(-135deg);`;
		this.arrowBoxDom.appendChild(leftArrowDom);


		let rightArrowDom = document.createElement("div");
		rightArrowDom.style.cssText = `
				position: absolute;
			    right: 19px;
			    top: 50%;
			    width: 18px;
			    height: 18px;
			    border: solid #fff;
			    border-width: 2px 2px 0 0;
				transform: translate(0,-50%) rotate(45deg);`;
		this.arrowBoxDom.appendChild(rightArrowDom);
	}

	//添加事件
	addEvent(){
		//2、鼠标放在轮播图上会停止
		this.boxDom.onmouseover = ()=>{
			this.stopPlay();	
		}

		//3、鼠标离开轮播图会继续播放
		this.boxDom.onmouseout = ()=>{
			this.autoPlay();	
		}

		let obj = this;
		//4、点击豆豆，跳转到对应的图片
		for(var i=0;i<this.liDoms.length;i++){
			this.liDoms[i].onclick = function(){
				obj.goImg(parseInt(this.getAttribute("index")));
			};
		}

		//5、左右按钮
		let leftBtn = this.arrowBoxDom.firstElementChild;
		leftBtn.onclick = ()=>{
			this.preImg();
		}
		leftBtn.onmousedown = function(){
			leftBtn.style.backgroundColor="#FF1268";

		}
		leftBtn.onmouseleave = function(){
			leftBtn.style.backgroundColor="black";
		}
		let rightBtn = leftBtn.nextElementSibling;
		// console.log(rightBtn);
		rightBtn.onclick = ()=>{
			this.nextImg();
		}
		rightBtn.onmousedown = function(){
			rightBtn.style.backgroundColor="#FF1268";

		}
		rightBtn.onmouseleave = function(){
			rightBtn.style.backgroundColor="black";
		}
	}

	//自动播放
	autoPlay(){
		if(this.myTimer!=null){//如果有定时器，就不再启动新的定时器了
			return;//
		}

		this.myTimer = setInterval(()=>{
			//一、改变数据
			//1、计算数据（改变图片的下标）
			var preOrd = this.ord;//上一张的序号 4
			this.ord++;//5

			//2、边界
			if(this.ord>this.imgs.length-1){
				this.ord = 0;
			}

			//二、改变外观
			this.reRender(preOrd,this.ord);
		},this.timeSpace)

	}
	
	//停止播放
	stopPlay(){
		window.clearInterval(this.myTimer);//根据定时器编号，找到定时器对象，进行清除
		this.myTimer = null;//把定时器编号清除掉
	}

	//跳转到对应的图片上
	//参数：图片的下标
	// goImg(3);
	goImg(transOrd){
		//一、改变数据
		//1、计算数据（改变图片的下标）
		var preOrd = this.ord;//上一张的序号 
		this.ord = transOrd;//5

		//2、边界
		if(this.ord>this.imgs.length-1){
			this.ord = 0;
		}else if(this.ord<0){
			this.ord = this.imgs.length-1;
		}

		//二、改变外观
		this.reRender(preOrd,this.ord);
	}

	//改变外观的函数(重新渲染)
	reRender(preOrd,ord){
		// //1)、改图片
		// this.imgDoms[preOrd].style.opacity = 1;
		this.imgDoms[ord].style.opacity = 0;		
		this.fadeInOut(this.imgDoms[ord],this.imgDoms[preOrd],this.timeSpace/2);
		
		//2)、改豆豆的颜色
		this.liDoms[preOrd].style.backgroundColor=this.douColor;
		this.liDoms[ord].style.backgroundColor= this.douHighColor;
		this.liDoms[preOrd].style.opacity=this.douOpacity;
		this.liDoms[ord].style.opacity=this.douHighOpacity;
	}

	preImg(){
		this.goImg(this.ord-1);
	}

	nextImg(){
		this.goImg(this.ord+1);
	}


	//两个dom元素的淡入和淡出
	//参数：
	//domObjIn
	//domObjOut
	//时长
	fadeInOut(domObjIn,domObjOut,timeLong){
		var currOpacity = 0;
		var step = 1/(timeLong/10);
		var myTimer = setInterval(function(){
			//一、改变数据（逻辑）
			//1、修改数据
			currOpacity+=step;//
			//2、边界处理
			if(currOpacity>=1){
				currOpacity=1;
				window.clearInterval(myTimer);
			}
			//二、改变外观（呈现）
			domObjIn.style.opacity = currOpacity;
			domObjOut.style.opacity = 1- currOpacity;
		},10);
	}

}



//侧栏
window.onscroll = function(){
	let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	if (scrollTop>135) {
		$("#bottomBar").style.display = "block";
	}else{
		$("#bottomBar").style.display = "none";
	}

	//固定
	// if (scrollTop>574) {
	// 	$("#fix").style.display = "block";
	// }
	// if (scrollTop<=574){
	// 	$("#fix").style.display = "none";
	// }
	// var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	
}
//回到顶部
$("#bottomBar").onclick = function() {
	if(document.documentElement.scrollTop!=0){
		document.documentElement.scrollTop=0;
	}else if(document.body.scrollTop!=0){
		document.body.scrollTop=0;
	}
}


function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}



