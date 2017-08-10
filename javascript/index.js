var mainbody = document.querySelector('body');

console.log(mainbody);
    function bemid(){
        var screenwidth = document.body.clientWidth;
        var topbox  = document.querySelector('.backTop')
        var leftbox = document.querySelector('.leftbox');
        var rightbox = document.querySelector('.rightbox');
        var distance = (screenwidth - 1250 - 209*2)/2;
        if (distance <= 0) {
            leftbox.style.left = 0 + 'px';
            rightbox.style.right = 0 + 'px';
        }else{
            leftbox.style.left = distance + 'px';
            rightbox.style.right = distance + 'px';
        }
        
        
    }
    window.addEventListener("resize",bemid);
    
bemid();


