var btnBox = document.querySelectorAll('.btnBox');
var contentBox = document.querySelectorAll('.contentBox');

contentBox[0].style.display = 'block';


function changeTopic(event) {
    event = event || window.event;
    var e = event.target;

    for (var i = 0; i < btnBox.length; i++) {
        if (btnBox[i].className !== e.className) {
            contentBox[i].style.display = 'none';
            console.log(2);
        } else {
            contentBox[i].style.display = 'block';
        }
    }
}

for (var i = 0; i < btnBox.length; i++) {
    btnBox[i].addEventListener('click', changeTopic, false);
}