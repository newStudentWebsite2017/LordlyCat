var mapImg = document.querySelector('.mapImg');
var img = mapImg.querySelector('img');

//获取元素样式
function getStyle(ele) {

    var style = null;

    if (window.getComputedStyle) {

        style = window.getComputedStyle(ele, null);

    } else {

        style = ele.currentStyle;

    }
    return style;
}

//设置初始值
var imgSize = 1.0;
img.style.width = '870px';
img.style.height = '440px';
var imgWidth = parseInt(img.style.width);
var imgHeight = parseInt(img.style.height);
var offset_x = img.offsetLeft;
var offset_y = img.offsetTop;

//改变地图大小
function changeSize(event) {
    var event = event || window.event;
    var e = event.target;

    if (e.className === "add") {
        if (imgSize <= 1.99) {
            img.style.width = parseInt(img.style.width) + 300 + 'px';
            img.style.height = parseInt(img.style.height) + 500 / 3 + 'px';
            imgSize += 0.33;
        }
    } else if (e.className === "less") {

        if (imgSize !== 1.0) {
            img.style.width = parseInt(img.style.width) - 300 + 'px';
            img.style.height = parseInt(img.style.height) - parseInt(500 / 3) + 'px';
            imgSize -= 0.33;

            initital_x = img.offsetLeft;
            initital_y = img.offsetTop;

            img.style.marginLeft = initital_x * 1 - offset_x + 'px';
            img.style.marginTop = initital_y * 1 - offset_y + 'px';

        }
    }


    if (img.offsetLeft < (offset_x - (imgSize - 1) * imgWidth)) {
        img.style.marginLeft = -(imgSize - 1) * imgWidth + 'px';
    }

    if (img.offsetTop < (offset_y - (490 * (imgSize - 1)))) {
        img.style.marginTop = -imgHeight * (imgSize - 1) + 'px';
        //console.log(1);
    }
    /*console.log(offset_y);
    console.log(img.offsetTop);
    console.log(offset_y - (490 * (imgSize - 1)));*/
}

var add = document.querySelector('.add');
var less = document.querySelector('.less');
add.addEventListener('click', changeSize, false);
less.addEventListener('click', changeSize, false);


//地图的拖拽

var initital_x, initital_y, mouse_x, mouse_y, sign;

//鼠标按下时获取初始坐标位置
function getPosition(event) {

    var event = event || window.event;
    var e = event.target;

    if (imgSize > 1 && e.className === 'cover') {
        initital_x = img.offsetLeft;
        initital_y = img.offsetTop;

        mouse_x = event.pageX;
        mouse_y = event.pageY;

        sign = true;
    }
    //console.log(img.offsetTop);
}

//鼠标移动拖动地图
function moving(e) {
    if (sign) {

        var mouseMoveX = e.pageX - mouse_x;
        var mouseMoveY = e.pageY - mouse_y;

        if (mouseMoveX < 0 && img.offsetLeft > (offset_x - (imgSize - 1) * (imgWidth + 10))) {
            img.style.marginLeft = initital_x - offset_x + mouseMoveX + 'px';
        }
        if (mouseMoveX > 0 && img.offsetLeft < offset_x) {
            img.style.marginLeft = initital_x - offset_x + mouseMoveX + 'px';
        }
        if (img.offsetLeft > offset_x) {
            img.style.marginLeft = '0px';
        }
        if (img.offsetLeft < (offset_x - (imgSize - 1) * 910)) {
            img.style.marginLeft = -(imgSize - 1) * 910 + 'px';
        }


        if (mouseMoveY < 0 && img.offsetTop > offset_y - (500 * (imgSize - 1))) {
            img.style.marginTop = initital_y - offset_y + mouseMoveY + 'px';
        }
        if (mouseMoveY > 0 && img.offsetTop <= offset_y) {
            img.style.marginTop = initital_y - offset_y + mouseMoveY + 'px';
        }
        if (img.offsetTop > offset_y) {
            img.style.marginTop = '0px';
        }
        if (img.offsetTop < -160 * imgSize) {
            img.style.marginTop = -imgHeight * (imgSize - 1) + 'px';
        }
    }
}

//鼠标松开
function over(e) {
    sign = false;
    //console.log(sign);
}

document.addEventListener('mousedown', getPosition, false);
document.addEventListener('mousemove', moving, false);
document.addEventListener('mouseup', over, false);

//去除浏览器对图片拖拽的默认行为
img.ondragstart = function() {
    return false;
};
var cover = document.querySelector('.cover');
cover.ondragstart = function() {
    return false;
}



//人物浮动
var person_1 = document.querySelector('.person_1');
var n = null;
var m = 0;

person_1.style.top = '70px';
person_1.style.left = '-100px';

function drift() {

    n = Math.pow(-1, m);
    m++;

    if (n === 1) {
        person_1.style.top = '-20px';
    } else {
        person_1.style.top = '-50px';
    }

    setTimeout(drift, 2000);
}

drift();



var midTitle = document.querySelectorAll('.midTitle');
var leftTitle = document.querySelectorAll('.leftTitle');
var rightTitle = document.querySelectorAll('.rightTitle');
var boxes = document.querySelectorAll('.boxes');
var backTop = document.querySelector('.backTop');

midTitle[0].style.marginLeft = '380px';

var wheel = function(e) {
    e = e || window.event;

    if (e.wheelDelta || e.detail) {
        if (window.pageYOffset >= 300) {
            boxes[0].style.top = boxes[1].style.top = "8%";
        }
        if (window.pageYOffset < 300) {
            boxes[0].style.top = boxes[1].style.top = "40%";
        }
        if (window.pageYOffset >= 800) {
            midTitle[1].style.marginLeft = '380px';
        }
        if (window.pageYOffset >= 1800) {
            leftTitle[0].style.marginLeft = '110px';
            rightTitle[0].style.marginLeft = '650px';
            backTop.style.visibility = 'visible';
            
            backTop.style.opacity = 1;
        }
        if (window.pageYOffset <= 1800) {
            backTop.style.visibility = 'hidden';
            
            backTop.style.opacity = 0;
        }
        if (window.pageYOffset >= 2400) {
            leftTitle[1].style.marginLeft = '0px';
            rightTitle[1].style.marginLeft = '520px';
        }
        if (window.pageYOffset >= 3100) {
            midTitle[2].style.marginLeft = '380px';
        }


        //console.log(window.pageYOffset);
    }

}

//给页面绑定滑轮滚动事件  
if (document.addEventListener) { //firefox  
    document.addEventListener('DOMMouseScroll', wheel, false);
}

//滚动滑轮触发scrollFunc方法  //ie 谷歌  
window.onmousewheel = document.onmousewheel = wheel;


//返回顶部
function back() {
    var h = document.body.scrollTop;

    if (h >= 1) {
        document.body.scrollTop = h - 100;
        backTop.style.visibility = 'hidden';

        setTimeout(back, 10);
    }
}

backTop.addEventListener('click', back, false);