var titles = document.querySelectorAll('.train-titles');
var titlest1 = document.querySelectorAll('.train-titlest1');
var blockst2 = document.querySelectorAll('.t2blocks');



function changes(a) {
    for (var i = 0; i < titles.length; i++){
        titles[i].className = "train-titles";
        titlest1[i].className = "train-titlest1";
    
        blockst2[i].style.opacity = "0";
        blockst2[i].style.visiblity = "hidden";
    }
    
    titles[a].className = "train-titles train-titles-clicked";
    titlest1[a].className = "train-titlest1 titlest1-clicked";
    
    blockst2[a].style.opacity = "1";
    blockst2[a].style.visibility = "visible";
    
}