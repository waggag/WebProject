

var indexIndex = 5;

function index1() {

    var imgindex = document.getElementById("index13").innerHTML = "<img src='images/index-" + indexIndex + ".gif' style='border:0px' />";
    indexIndex++;
    if (indexIndex > 7) {
        indexIndex = 5;
    }

    window.setTimeout("index1()", 1000);

}


function moveIndexStatic() {
    //alert("定位广告");

    //alert(document.documentElement.scrollTop);
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        document.getElementById("staticAdIndex").style.top = document.body.scrollTop + 100 + "px";
    }
    else {
        document.getElementById("staticAdIndex").style.top = document.documentElement.scrollTop + 100 + "px";
    }
}



function close1Index() {
    document.getElementById("staticAdIndex").style.display = "none";
}



var dicX = true;
var dicY = true;

var step = 2;

var posX = 0;
var posY = 0;

var lastScrollLeft = 0;
var lastScrollTop = 0;

var deltaScrollTop = 0;
var deltaScrollLeft = 0;

function move0Index() {
    //向右运动
    //MSIE识别document.body.clientHeight和document.body.clientWidth，也识别document.documentElement.scrollTop和document.documentElement.scrollLeft
    //alert(document.body.clientHeight+"*"+document.body.clientWidth);

    var myLeftScroll = document.documentElement.scrollLeft;
    var myClientWidth = document.documentElement.clientWidth;

    var myTopScroll = document.documentElement.scrollTop;
    var myClientHeight = document.documentElement.clientHeight;


    if (navigator.userAgent.indexOf("Chrome") != -1) {
        myTopScroll = document.body.scrollTop;
        myLeftScroll = document.body.scrollLeft;
    }


    //alert("左滚动："+myLeftScroll+"*右滚动："+myTopScroll+"********视界宽度："+myClientWidth+"*视界高度："+myClientHeight);

    if (dicX) {
        deltaScrollLeft = myLeftScroll - lastScrollLeft;

        lastScrollLeft = myLeftScroll;

        posX = posX + step + deltaScrollLeft;//这个没问题

        deltaScrollLeft = 0;//这个没问题

        if (posX <= myLeftScroll) {
            posX = myLeftScroll;
        }

        var widd = myClientWidth + myLeftScroll - 80;

        if (posX >= widd) {
            posX = widd;
            dicX = false;
        }
    }
    else {
        deltaScrollLeft = myLeftScroll - lastScrollLeft;

        posX = posX - step + deltaScrollLeft;//没问题

        lastScrollLeft = myLeftScroll;

        deltaScrollLeft = 0;//ok

        var sleftt = myClientWidth + myLeftScroll - 80;

        if (posX >= sleftt) {
            posX = sleftt;
        }

        if (posX <= myLeftScroll) {
            posX = myLeftScroll;
            dicX = true;
        }

    }

    if (dicY) {
        deltaScrollTop = myTopScroll - lastScrollTop;

        posY = posY + step + deltaScrollTop;//ok

        deltaScrollTop = 0;//ok

        lastScrollTop = myTopScroll;

        if (posY <= myTopScroll) {
            posY = myTopScroll;
        }

        var hei = myClientHeight + myTopScroll - 52;

        if (posY >= hei) {
            posY = hei;
            dicY = false;
        }
    }
    else {
        deltaScrollTop = myTopScroll - lastScrollTop;


        posY = posY - step + deltaScrollTop;//ok

        deltaScrollTop = 0;//ok

        lastScrollTop = myTopScroll;

        var sHei = myClientHeight + myTopScroll - 52;

        if (posY >= sHei) {
            posY = sHei;
        }

        if (posY <= myTopScroll) {
            posY = myTopScroll;
            dicY = true;
        }

    }

    var div = document.getElementById("divMove0Index");
    div.style.left = posX + "px";
    div.style.top = posY + "px";
    window.setTimeout("move0Index()", 30);

}

function startThis() {
    move0Index();
    index1();
}

onload = startThis;
onscroll = moveIndexStatic;
