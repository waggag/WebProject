window.onload = function(){
    //获取元素
    var banner = document.getElementsByClassName("banner")[0];
    var leftBtn = document.getElementsByClassName("left_btn")[0];
    var rightBtn = document.getElementsByClassName("right_btn")[0];

    var num = 0;
    //定义一个数组，里面存放所有需要切换的图片
    var bannerPics = ["img/lunbo1.jpg","img/lunbo2.jpg","img/lunbo4.jpg","img/lunbo5.jpg"];

    banner.style.backgroundImage = "url("+bannerPics[num]+")";

    // 事件单击事件
    leftBtn.onclick = function(){
        // alert("左左左");
        // console.log(banner.style.backgroundTmage);

        //拿到数组里面的图片地址
        // banner.style.backgroundTmage = "url(img/lunbo3.jpg)"
        num++;
        if(num > bannerPics.length - 1){
            num = 0;
        }
        banner.style.backgroundImage = "url("+bannerPics[num]+")";
    }

    rightBtn.onclick=function(){
        // alert("右右右");
        num--;
        if(num < 0){
            num = bannerPics.length-1;
        }

        banner.style.backgroundImage = "url("+bannerPics[num]+")";
    }

}