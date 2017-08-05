var mainbody = document.querySelector('body');

console.log(mainbody);
    function bemid(){
        var screenwidth = document.body.clientWidth;
        console.log('resize')
    // var screenheight = 
        var leftbox = document.querySelector('.leftbox');
        var rightbox = document.querySelector('.rightbox');
        var distance = (screenwidth - 1250 - 209*2)/2;
        leftbox.style.left = distance + 'px';
        rightbox.style.right = distance + 'px';
        console.log(screenwidth);
    }
    window.addEventListener("resize",bemid);
    
bemid();


