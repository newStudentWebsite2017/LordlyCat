let lbtn = document.querySelectorAll('.lunbo-container .lunbo-leftbtn');
let rbtn = document.querySelectorAll('.lunbo-container .lunbo-rightbtn');

for (let i = 0; i < lbtn.length; i++) {
    lbtn[i].addEventListener('click', function() {
        let turn = 0;
        Changepics(this, turn)
    })
    rbtn[i].addEventListener('click', function() {
        let turn = 1;
        Changepics(this, turn)
    })
}


function Changepics(btn, turn) {
    let match = btn.parentNode.parentNode.className;
    let grandfather = match.match(/\s\S*/);
    grandfather = grandfather[0].match(/\S\S*/);

    let classname = '.' + grandfather[0] + ' ' + '.' + btn.parentNode.className + ' ' + '.lunbo-pics-container .lunbo-pics';

    let pics = document.querySelectorAll(classname);
    let piclength = pics.length;
    let j;
    for (var i = 0; i < piclength; i++) {

        if (pics[i].className == "lunbo-pics scaled") {
            j = i;
            if (turn == 0) {
                if (i > 0) {

                    j--;

                    break;
                } else {

                    break;
                }
            } else if (turn == 1) {
                if (i < piclength - 1) {

                    j++;

                    break;
                } else {

                    break;
                }
            }
        }
    }

    if (j == 0 || j == piclength - 1) {
        if (j == 0) {
            pics[j].className = "lunbo-pics scaled";
            pics[j + 1].className = "lunbo-pics pics-r";
        } else if (j == piclength - 1) {
            pics[j - 1].className = "lunbo-pics pics-l";
            pics[j].className = "lunbo-pics scaled";
        }

    } else {
        if (j != 0) {

            pics[j + 1].className = "lunbo-pics pics-r";
        }
        if (j != piclength - 1) {

            pics[j - 1].className = "lunbo-pics pics-l";
        }
        pics[j].className = "lunbo-pics scaled";

    }
}

