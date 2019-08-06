window.onload = function(){
    createContentRight();
}
function createContentRight(){
    let titleDom = document.createElement("div");
    let suggestDom = $(".suggest")[0];
    titleDom.innerHTML = "为你推荐";
    titleDom.style.cssText = `
        margin-bottom: 24px;
        font-size: 20px;
        height:28px;
    `;
    suggestDom.appendChild(titleDom);
    for(var i=0;i<6;i++){
        let aDom = document.createElement("a");
        aDom.href="#";
        suggestDom.appendChild(aDom);   
        let itemDoms = document.createElement("div");
        itemDoms.style.cssText=`
            width:281px;
            height:160px;
            margin-bottom:30px;
        `;    
        aDom.appendChild(itemDoms);
        let imgDoms = document.createElement("img");
        imgDoms.style.cssText = `
            width: 120px;
            height: 100%;
        `;
        imgDoms.src = `img/${i+1}.webp`;
        itemDoms.appendChild(imgDoms);
        let itemInfo = document.createElement("div");
        itemInfo.style.cssText=`
            float:right;
            width:146px;
            height:160px;
        `;
        itemDoms.appendChild(itemInfo);
        let pNameArr = [
            "2019 PENTAGON WORLD TOUR ‘PRISM’IN HONG KONG",
            "费玉清2019告别演唱会澳门站",
            "东亚超级联赛 - 非凡 12",
            "【惠州】2019遇见电子音乐节-惠州站",
            "GOT7 2019 WORLD TOUR ‘KEEP SPINNING’ IN HONG KONG",
            "【汕头】蓝妹啤酒呈献 MY BEAUTIFUL LIVE 杨千嬅世界巡回演唱会-汕头站",
           
        ];
        let pName = document.createElement("p");
        pName.innerHTML = pNameArr[i];
        pName.style.cssText = `
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-size: 14px;
            color: #4a4a4a;
        `;
        itemInfo.appendChild(pName);
        let paddressArr=[
            "香港 | 香港九龙湾国际展贸中心STAR HALL汇星",
            "澳门 | 澳门威尼斯人金光综艺馆",
            "澳门 | 澳门塔石体育馆",
            "惠州 | 惠州欧美城文化小镇",
            "香港 | 亚洲国际博览馆",
            "汕头 | 汕头方特欢乐世界·蓝水星",
        ];
        let paddress = document.createElement("p");
        paddress.innerHTML = paddressArr[i];
        paddress.style.cssText = `
            margin-top: 12px;
            color: #9b9b9b;
            font-size: 12px;
    `;
    itemInfo.appendChild(paddress);
    let pdateArr=[
        "2019.10.12 周六 20:00",
        "2019.09.21 周六 20:00",
        "2019.09.17-09.22",
        "2019.08.17 周六",
        "2019.08.31-09.01",
        "2019.09.14 周六 20:00",
    ];
    let pdate = document.createElement("p");
    pdate.innerHTML = pdateArr[i];
    pdate.style.cssText = `
        margin-top: 3px;
        color: #9b9b9b;
        font-size: 12px;
`;
itemInfo.appendChild(pdate);
   
    let ppriceArr=[
        "￥500.0",
        "￥330.0",
        "￥45.0",
        "￥98.0",
        "￥588.0",
        "￥488.0",
    ];
    let pprice = document.createElement("p");
    pprice.innerHTML = ppriceArr[i];
    pprice.style.cssText=`
        font-size: 16px;
        color:#ff1268;
        margin-top:35px;    
    `; 
    itemInfo.appendChild(pprice);
    let spanDom = document.createElement("span");
    spanDom.innerHTML = "起";
    spanDom.style.cssText=`
        font-size: 12px;
        color:#ff1268;  
    `; 
    pprice.appendChild(spanDom);
    }
    
}

$(document).scroll(function(){      
    let top = $(document).scrollTop();
    let top1 = $(".hd").offset().top+$(".hd").height()+$(".notice-nav").height();
    let top2 = $(".hd").offset().top+$(".hd").height()+$(".one").height()+$(".notice-nav").height();
    let top3 = $(".hd").offset().top+$(".hd").height()+$(".one").height()+$(".one").offset().top;
    if(top>top1){
        $(".nav-top").slideDown(300,function(){
            $(".nav-top").css({
                "display":"block",
                "position":"fixed",
                "top":"-15px"
            })
            $(".flago").css({"display":"block"});
            $("#sfirst").css({"font-size":"22px"});
            $(".flagt").css({"display":"none"});
            $("#stwo").css({"font-size":"16px"});
            $(".flagth").css({"display":"none"});
            $("#sthree").css({"font-size":"16px"});
        }) ;
        if(top>top2){
            $(".flago").css({"display":"none"});
            $("#sfirst").css({"font-size":"16px"});
            $(".flagt").css({"display":"block"});
            $("#stwo").css({"font-size":"22px"});
            $(".flagth").css({"display":"none"});
            $("#sthree").css({"font-size":"16px"});
        }
        if(top>top3){
            $(".flago").css({"display":"none"});
            $("#sfirst").css({"font-size":"16px"});
            $(".flagt").css({"display":"none"});
            $("#stwo").css({"font-size":"16px"});
            $(".flagth").css({"display":"block"});
            $("#sthree").css({"font-size":"22px"});
        }
    }else{
        $(".nav-top").slideUp(300,function(){
            $(".nav-top").css({"display":"none"})
        })
    }

})

$(document).ready(function(){
    $("#sfirst").click(function(){
        $("html,body").animate({scrollTop:$(".hd").offset().top+$(".hd").height()+$(".notice-nav").height()+$(".notice-nav").height()},300)
    })
    $("#stwo").click(function(){
        $("html,body").animate({scrollTop:$(".hd").offset().top+$(".hd").height()+$(".one").height()+$(".notice-nav").height()+$(".notice-nav").height()},500)
    })
    $("#sthree").click(function(){
        $("html,body").animate({scrollTop:$(".hd").offset().top+$(".hd").height()+$(".one").height()+$(".one").offset().top+$(".notice-nav").height()},500)
    })
});
