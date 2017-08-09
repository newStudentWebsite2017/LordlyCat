var titles = document.querySelectorAll('.train-titles');
var titlest1 = document.querySelectorAll('.train-titlest1');
var blockst2 = document.querySelectorAll('.t2blocks');
var inshellpointer = document.querySelector('.inshell-pointer img');
var inshellcontainer  = document.querySelector('.inshell-container');
var titlest2 = document.querySelectorAll('.titlest2');
var titlest2roller = document.querySelector('.traintips-roller');


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
        blockst2[i].style.visiblity = "hidden";
        blockst2[i].style.display = "none";
    }
    
    titles[a].className = "train-titles train-titles-clicked";
    titlest1[a].className = "train-titlest1 titlest1-clicked";
    
    blockst2[a].style.opacity = "1";
    blockst2[a].style.visibility = "visible";
    blockst2[a].style.display = "block";


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