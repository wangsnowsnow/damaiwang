function create(){
    let dmBody = $(".dm-body")[0];
    //创建复选框
    let checked = document.createElement("input");
    checked.type = "checkbox";
    checked.style.cssText=`
        width:16px;
        height:16px;
        margin-left:23px;
        margin-top:60px;
        float:left;
    `;
    dmBody.appendChild(checked);
    //创建左边div
    let infodiv = document.createElement("div");
    infodiv.style.cssText = `
        width:335px;
        height:80px;
        padding:22px 26px;
        margin-left:25px;
        float:left;
    `;
    dmBody.appendChild(infodiv);
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
    dmBody.appendChild(sitdiv);
    let pricediv = document.createElement("div");
    pricediv.innerHTML = '15480.00';
    pricediv.style.cssText = `
        float:left;
        margin-left:8px;
        padding:54px 16px;;
        color: #333;
        font-size:12px;
    `;
    dmBody.appendChild(pricediv);
    //数量
    let numdiv = document.createElement("div");
    numdiv.style.cssText = `
        float:left;
        margin-left:9px;
        padding:22px 0;
        width:77px;
        height:80px;
    `;
    dmBody.appendChild(numdiv);
    let btnLeft = document.createElement("button");
    btnLeft.innerHTML = "-";
    numdiv.style.lineHeight = "77px";
    numdiv.appendChild(btnLeft);
    let numInp = document.createElement("input");
    numInp.style.cssText=`
        width:28px;
        height:17px;
        text-align:center;
    `;
    numInp.value = "1";  
    numdiv.appendChild(numInp);
    let btnRight = document.createElement("button");
    btnRight.innerHTML = "+";
    numdiv.style.lineHeight = "77px";
    numdiv.appendChild(btnRight);
    //
    let celldiv = document.createElement("div");
    celldiv.innerHTML = '-';
    celldiv.style.cssText = `
        float:left;
        margin-left:15px;
        padding:54px 36px;;
        color: #333;
        font-size:12px;
    `;
    dmBody.appendChild(celldiv);
    let totaldiv = document.createElement("div");
    totaldiv.innerHTML = '15480.00';
    totaldiv.style.cssText = `
        float:left;
        margin-left:15px;
        padding:54px 36px;;
        color: #333;
        font-size:12px;
    `;
    dmBody.appendChild(totaldiv);
}
window.onload = function(){
    create();
}