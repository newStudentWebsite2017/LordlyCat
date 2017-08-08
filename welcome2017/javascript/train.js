var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');
var slide = document.querySelector('.selectVideo');


//切换视频
var videoWrapper = document.querySelector('.videoWrapper');
var mainVideo = document.querySelector('.mainVideo');
var boxes = videoWrapper.querySelectorAll('.box');
var video = mainVideo.querySelector('video');
var playButton = document.querySelector(".playButton").querySelector('img');
var totalTime; //视频时长

var btn = document.querySelector('.btn');

function switchVideo(event) {
    var event = event || window.event;
    var e = event.target;

    video = document.querySelector('video');

    mainVideo.removeChild(video);

    var newVideo = document.createElement('video');
    var source = document.createElement('source');

    clearInterval(reduce);
    reduce = setInterval(reduceTime, 1000);

    spot.style.left = '0px';
    r = 1;
    clearInterval(go);
    go = setInterval(moveSpot, 1000);

    if (e.className === 'box one') {
        newVideo.src = '../video/AllOfMe.mp4';
        getTime();
        setTimeout(showTime, 300);
    }
    if (e.className === 'box two') {
        newVideo.src = '../video/AllOfMe.mp4';
        getTime();
        setTimeout(showTime, 300);
    }
    if (e.className === 'box three') {
        newVideo.src = '../video/AllOfMe.mp4';
        getTime();
        setTimeout(showTime, 300);
    }
    if (e.className === 'box four') {
        newVideo.src = '../video/AllOfMe.mp4';
        getTime();
        setTimeout(showTime, 300);
    }

    newVideo.type = 'video/mp4';

    //newVideo.controls = 'controls';
    //newVideo.loop = 'loop';
    newVideo.autoplay = 'autopaly';

    newVideo.appendChild(source);
    mainVideo.append(newVideo);

}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', switchVideo, false);
}

function playVideo() {
    var video = mainVideo.querySelector('video');

    video.play();
    playButton.parentNode.style.display = 'none';
    reduce = setInterval(reduceTime, 1000);
    r = 1;
    go = setInterval(moveSpot, 1000);
}

playButton.addEventListener('click', playVideo, false);


function listenVideo() {

    var video = mainVideo.querySelector('video');
    var btn = document.querySelector('.btn');
    if (video.paused) {
        playButton.parentNode.style.display = 'block';
        btn.className = 'play btn';
    } else {
        playButton.parentNode.style.display = 'none';
        btn.className = 'pause btn';
    }

    setTimeout(listenVideo, 300);

}

listenVideo();

// video.addEventListener('pause', function () {
//     console.log(1);
// }, false);


//自定义控件
var controls = document.querySelector('.controls');
//var play = document.querySelector('.play');

//播放与暂停
function played(e) {

    event = event || window.event;
    var e = event.target;
    var video = mainVideo.querySelector('video');

    if (video.paused && e.className === 'play btn') {
        video.play();
        e.className = 'pause btn';
        playButton.parentNode.style.display = 'none';
        reduce = setInterval(reduceTime, 1000);
        r = 1;
        go = setInterval(moveSpot, 1000);
        return;
    }
    if (video.played && e.className === 'pause btn') {
        video.pause();
        e.className = 'play btn';
        playButton.parentNode.style.display = 'block';
        clearInterval(reduce);
        clearInterval(go);
        return;
    }
}

// function paused(e) {
//     event = event || window.event;
//     var e = event.target;
//     var video = mainVideo.querySelector('video');

//     if (video.paused && e.className === 'play btn') {
//         video.play();
//         e.className = 'pause btn';
//         playButton.style.display = 'none';
//     }
// }

controls.addEventListener('click', played, false);

//时间进度条
var timeBar = document.querySelector('.timeBar');
var time = timeBar.querySelector('.time');
var spot = timeBar.querySelector('.spot');
var show = timeBar.querySelector('.show');
//定时器
var reduce;
var go;

function getTime() {

    var geter = function() {
        var video = mainVideo.querySelector('video');

        if (video.readyState > 0) {
            totalTime = parseInt(video.duration);
            clearInterval(setTime);
        }
    }

    var setTime = setInterval(geter, 100);
}

getTime();

function showTime() {
    if (totalTime) {
        var minutes = parseInt(totalTime / 60, 10);
        var seconds = totalTime % 60;
        //console.log(minutes + ':' + seconds);

        show.innerHTML = minutes + ':' + seconds;

        //reduceTime();
    }
}
setTimeout(showTime, 300);

function reduceTime() {

    totalTime--;

    var minutes = parseInt(totalTime / 60, 10);
    var seconds = totalTime % 60;
    if (0 <= seconds && seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes >= 0 && parseInt(seconds) >= 0) {
        show.innerHTML = minutes + ':' + seconds;

        //console.log(minutes + ':' + seconds);
    } else {
        clearInterval(reduce);
    }

}

// = setInterval(reduceTime, 1000);

// videoWrapper.addEventListener('click', function(e) {
//     event = event || window.event;
//     var e = event.target;
//     console.log(e.className);
//     if (e.className === 'playButton' || e.className === 'pause btn') {
//         clearInterval(reduce);
//     }
//     // if (video.played) {
//     //     reduce = setInterval(reduceTime, 1000);
//     // }
// },false);



video.addEventListener('play', function() {
    console.log(video.currentTime);
});

var r = 1;
spot.style.left = 0;

function moveSpot() {
    var len = 395;
    var speed = len / (totalTime + r - 1);

    //totalTime--;


    r++;
    spot.style.left = speed * r + 'px';

    //console.log(spot.style.left);
    //console.log(totalTime);
    console.log(speed);
    if (parseFloat(spot.style.left) > 395) {
        clearInterval(go);
    }

}


// //手动移动
// var initital_x, mouse_x, sign;

// //获取初始位置
// function getPosition(event) {

//     var event = event || window.event;
//     //var e = event.target;

//     if (video.played) {
//         initital_x = spot.offsetLeft;
//         mouse_x = event.pageX;

//         console.log(initital_x);
//         console.log(mouse_x);
//     }

//     sign = true;

//     console.log(sign);
// }


// //移动
// function manualSpot(event) {

//     var event = event || window.event;
//     var e = event.target;
//     if (sign && e.className === 'spot' && e.offsetLeft >= 0 && e.offsetLeft <= 395) {
//         var mouseMoveX = event.pageX - mouse_x;
//         spot.style.left = initital_x + mouseMoveX + 'px';
//         video.currentTime = parseInt(spot.style.left);
//     }

// }

// //鼠标松开
// function over(e) {
//     sign = false;
//     console.log(sign);
//     if (parseInt(spot.style.left) > 0) {
//         video.play();
//     }
// }
// spot.addEventListener('mousedown', getPosition, false);
// document.addEventListener('mousemove', manualSpot, false);
// document.addEventListener('mouseup', over, false);

// var imgs = document.querySelectorAll('img');
// for (var i = 0; i < imgs.length; i++) {
//     imgs[i].ondragstart = function() {
//         return false;

//     }
// }


//全屏
var fullBtn = document.querySelector('.fullBtn');
function fullScreen() {
    var video = document.querySelector('video');
    //For Webkit
    if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
        //video.requestFullscreen();
    }
    //video.mozRequestFullScreen();
 
   //For Firefox
   
}


fullBtn.addEventListener('click', fullScreen, false);



