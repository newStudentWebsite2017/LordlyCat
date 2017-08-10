var btnBox = document.querySelectorAll('.btnBox');
var contentBox = document.querySelectorAll('.contentBox');

contentBox[0].style.display = 'block';
btnBox[0].style.background = 'url(../img/onBackground.png)';
btnBox[0].style.color = 'white';

function changeTopic(event) {
    event = event || window.event;
    var e = event.target;

    for (var i = 0; i < btnBox.length; i++) {
        if (btnBox[i].className !== e.className) {
            contentBox[i].style.display = 'none';
            btnBox[i].style.background = 'url(../img/btnbackground.png)';
            btnBox[i].style.color = '#ebaf62';
        } else {
            contentBox[i].style.display = 'block';
            btnBox[i].style.background = 'url(../img/onBackground.png)';
            btnBox[i].style.color = 'white';
        }
    }
}

for (var i = 0; i < btnBox.length; i++) {
    btnBox[i].addEventListener('click', changeTopic, false);
}