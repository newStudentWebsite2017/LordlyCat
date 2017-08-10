let player = document.querySelector('.audioplayer');
let startbtn = document.querySelector('.btn-play');
// let progress = document.querySelector('.song-progress-limit');
let progress = document.querySelector('.song-progress');
let volprogress = document.querySelector('.vol-progress');
let html = document.querySelector('body');
let pt1 = document.querySelector('.vol-point');
let pt2 = document.querySelector('.vol-point2')
let pointerlrc = document.querySelectorAll('.progress-point');
let timer = document.querySelector('.progress-timer');
let volpoint = document.querySelector('.vol-point');
let volpoint2 = document.querySelector('vol-point2');
let lercontainer = document.querySelector('.lrc-container');


startbtn.onclick = () => {
    if (player.paused == true) {
        player.play();
    } else {
        player.pause();
    }
    if (startbtn.className == "controller btn-play") {
        startbtn.className = "controller btn-pause";
    } else {
        startbtn.className = "controller btn-play";
    }

}
progress.onclick = () => {

    let percent;
    let left = window.event.clientX;
    let divleft = progress.offsetLeft;
    let width = progress.offsetWidth;

    let swtich = progress;


    while (swtich.offsetParent != html) {
        swtich = swtich.offsetParent;
        divleft += swtich.offsetLeft;
        // console.log(divleft)

    }
    divleft -= 2;
    percent = (left - divleft) / width;
    progress.value = percent * 100;
    pointerlrc[0].style.left = left - divleft;
    pointerlrc[1].style.left = left - divleft;
    player.currentTime = percent * player.duration;
    timer.innerHTML = calcTime(player.currentTime) + '/' + calcTime(player.duration);




}
volprogress.onclick = () => {
    let left = window.event.clientX;
    let divleft = volprogress.offsetLeft;
    let width = volprogress.offsetWidth;

    let swtich = volprogress;
    let percent;

    while (swtich.offsetParent != html) {
        swtich = swtich.offsetParent;
        divleft += swtich.offsetLeft;
        console.log(divleft)

    }
    percent = (left - divleft) / width;
    player.volume = percent;
    volprogress.value = percent * 100;
    pt2.style.left = 80 + percent * width + 'px';
    pt1.style.left = -5 + percent * width + 'px';

}


function calcTime(time) {
    let hour;
    let minute;
    let second;
    hour = String(parseInt(time / 3600, 10));
    if (hour.length == 1) hour = '0' + hour;
    minute = String(parseInt((time % 3600) / 60, 10));
    if (minute.length == 1) minute = '0' + minute;
    second = String(parseInt(time % 60, 10));
    if (second.length == 1) second = '0' + second;
    return minute + ":" + second;
}

let motherfucker = setInterval(() => {
    progress.value = player.currentTime / player.duration * 100;
    pointerlrc[0].style.left = player.currentTime / player.duration * progress.offsetWidth - 10 + 'px';
    pointerlrc[1].style.left = player.currentTime / player.duration * progress.offsetWidth - 10 + 'px';
    timer.innerHTML = calcTime(player.currentTime) + '/' + calcTime(player.duration);
    pt2.style.left = 80 + player.volume * volprogress.offsetWidth + 'px';
    pt1.style.left = -5 + player.volume * volprogress.offsetWidth + 'px';
    volprogress.value = player.volume * 100;
}, 200)

// let testa = Ajax.get('http://localhost:3000/lyric?id=34516734').then( (req) => {
//     console.log(req);
// })
// console.log(testa)

var aaa = "[00:19.83]听吧 新征程号角吹响\n[00:24.13]强军目标召唤在前方\n[00:28.36]国要强 我们就要担当\n[00:32.57]战旗上写满铁血荣光\n[00:37.63]将士们 听党指挥\n[00:41.28]能打胜仗作风优良\n[00:45.54]不惧强敌 敢较量\n[00:49.44]为祖国决胜疆场\n[00:53.20]听吧 新征程号角吹响\n[01:01.21]强军目标召唤在前方\n[01:05.26]国要强 我们就要担当\n[01:09.36]战旗上写满铁血荣光\n[01:13.44]将士们 听党指挥\n[01:17.93]能打胜仗作风优良\n[01:22.00]不惧强敌 敢较量\n[01:25.94]为祖国决胜疆场\n[01:30.00]将士们 听党指挥\n[01:34.03]能打胜仗作风优良\n[01:38.06]不惧强敌敢较量\n[01:42.01]为祖国决胜疆场\n[01:46.11]决胜疆场\n[01:50.39]\n";
console.log(parseLyric(aaa));

function parseLyric(text) {
    let lyric = text.split('\n'); //先按行分割
    let _l = lyric.length; //获取歌词行数

    let lrc = new Array(); //新建一个数组存放最后结果
    for (let i = 0; i < _l; i++) {

        let d = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g); //正则匹配播放时间
        let t = lyric[i].split(d); //以时间为分割点分割每行歌词，数组最后一个为歌词正文
        if (d != null) {
            var dt = String(d).split(':');

            var _t = Math.round(parseInt(dt[0].split('[')[1]) * 60 + parseFloat(dt[1].split(']')[0]) * 100) / 100;
            lrc.push([_t, t[1]]);
        }
    }
    return lrc;
}

function pushlrc(lrc) {
    var len = lrc.length;
    for (let i = 0; i < len; i++) {
        let addp = document.createElement('div');
        addp.className = "lrc-text";
        addp.innerHTML = lrc[i][1];
        lercontainer.appendChild(addp);

    }
}
pushlrc(parseLyric(aaa))