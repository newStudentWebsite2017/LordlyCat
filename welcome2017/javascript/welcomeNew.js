var btnBox = document.querySelectorAll('.btnBox');
var smellContainer = document.querySelector('.smellContainer');
var helpContainer = document.querySelector('.helpContainer');
var slider = document.querySelector('#slide');
var sliderImg = slider.querySelector('img');

btnBox[0].style.background = 'url(../img/onBackground.png)';
btnBox[0].style.color = 'white';
smellContainer.style.display = 'block';

function changea(event) {
    event = event || window.event;
    var e = event.target;

    if (e.className === 'btnBox smell') {
        btnBox[0].style.background = 'url(../img/onBackground.png)';
        btnBox[0].style.color = 'white';
        btnBox[1].style.background = 'url(../img/help.png) no-repeat';
        btnBox[1].style.color = '#ebaf62';
        slider.className = 'slider_0';
        smellContainer.style.display = 'block';
        helpContainer.style.display = 'none';
    }else{
        btnBox[0].style.background = 'url(../img/btnbackground.png)';
        btnBox[0].style.color = '#ebaf62';
        //btnBox[1].style.background = 'url() no-repeat';
        btnBox[1].style.background = 'url(../img/biggerBackground.png) no-repeat';
        btnBox[1].style.color = 'white';
        slider.className = 'slider_1';
        smellContainer.style.display = 'none';
        helpContainer.style.display = 'block';
    }
}

for (var i = 0; i < btnBox.length; i++) {
    btnBox[i].addEventListener('click', changea, false);
}
































