var titles = document.querySelectorAll('.train-titles');
var titlest1 = document.querySelectorAll('.train-titlest1');
var blockst2 = document.querySelectorAll('.t2blocks');
var inshellpointer = document.querySelector('.inshell-pointer img');
var inshellcontainer  = document.querySelector('.inshell-container');
var titlest2 = document.querySelectorAll('.titlest2');
var titlest2roller = document.querySelector('.traintips-roller');
let volicon = document.querySelector('.vol-icon');
let volbar = document.querySelector('.vol-progress-limit');
let volpt = document.querySelector('.vol-point2');
let songvol = document.querySelector('.song-vol');

songvol.onmouseover = () => {
    volicon.className = "vol-icon vol-icon-active";

    volbar.style.visibility = "visible";
    volbar.style.opacity = "1";

    volpt.style.visibility = "visible";
    volpt.style.opacity = "1";
}
songvol.onmouseleave = () => {
    volicon.className = "vol-icon";

    volbar.style.visibility = "hidden";
    volbar.style.opacity = "0";

    volpt.style.visibility = "hidden";
    volpt.style.opacity = "0";
}

function t2changes(a) {
    for (var i = 0; i < titlest2.length; i++){
        titlest2[i].className = "titlest2";
    }
    titlest2[a].className = "titlest2 titlest2-clicked"
    titlest2roller.style.left = 93 + a*250 + 'px';
}


function changes(a) {
    for (var i = 0; i < titles.length; i++){
        titles[i].className = "train-titles";
        titlest1[i].className = "train-titlest1";
    
        blockst2[i].style.opacity = "0";
        blockst2[i].style.visibility = "hidden";
        
    }
    
    titles[a].className = "train-titles train-titles-clicked";
    titlest1[a].className = "train-titlest1 titlest1-clicked";
    
    blockst2[a].style.opacity = "1";
    blockst2[a].style.visibility = "visible";
    


    inshellpointer.style.marginLeft = 85 + a*240 + 'px';
    if (a == 2) {
        inshellpointer.src = "../img/inshell-pointer-green.png";
        inshellcontainer.style.backgroundImage = "url(../img/inshell-green.png)";
        
    }else{
        inshellpointer.src = "../img/inshell-pointer.png";
        inshellcontainer.style.backgroundImage = "url(../img/inshell.png)";
    }
    
}
// var b = document.querySelector('.traintips-main-container');
// var a = setInterval("fa()",100);
// function fa() {
//     console.log(b.scrollTop);
// }