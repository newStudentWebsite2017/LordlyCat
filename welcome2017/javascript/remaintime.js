var fa = setInterval(Movenum,1000);

var daynum_ten = document.querySelector('#day-ten');
var daynum_one = document.querySelector('#day-one');
var hournum_ten = document.querySelector('#hour-ten');
var hournum_one = document.querySelector('#hour-one');
var minnum_ten = document.querySelector('#min-ten');
var minnum_one = document.querySelector('#min-one');
var secnum_ten = document.querySelector('#sec-ten');
var secnum_one = document.querySelector('#sec-one');


var day,hour,min,sec;
var dayten,dayone,hourten,hourone,minten,minone,secten,secone;


CalculateRemainTime();
Setnumones(secone,secnum_one,sec);
Setnumones(minone,minnum_one,min);
Setnumones(hourone,hournum_one,hour);
Setnumones(dayone,daynum_one,day);
Setnumtens(secten,secnum_ten,sec);
Setnumtens(minten,minnum_ten,min);
Setnumtens(hourten,hournum_ten,hour);
Setnumtens(dayten,daynum_ten,day);
function CalculateRemainTime() {
    var termstart = 1504886400000+3600*24*3*1000;
    var now = new Date();
    now = now.getTime();
    var remain = termstart - now;
    day = Math.floor(remain/3600/24/1000);
    hour = Math.floor((remain-day*1000*3600*24)/3600/1000);
    min = Math.floor((remain - day*1000*3600*24 - hour*3600*1000)/1000/60);
    sec = Math.floor((remain - day*1000*3600*24 - hour*3600*1000 - min*1000*60)/1000);
    //var test = '离开学还有'+day+'天'+hour+'小时'+min+'分'+sec+'秒';
    //console.log(test);
}


function Setnumones(ones,num_ones,times) {
    
    var swtich = Math.floor(times/10);
    swtich = times - swtich*10;
    ones = -(38*10-swtich*38);
    if(ones == -38) {
        num_ones.style.transition = "0.3s";
    }
    num_ones.style.backgroundPositionY = ones + 'px'; 

    //console.log(ones);

    
    if (ones == -380 ) {
        
        var change = setTimeout(function () {
            num_ones.style.backgroundPositionY = 0;
            num_ones.style.transition = "0s";
        },300);
        
    }

}
function Setnumtens(tens,num_tens,times) {

    tens = Math.floor(times/10);
    tens = -(38*6-tens*38);
    if(tens == -38) {
        num_tens.style.transition = "0.3s";
    }
    num_tens.style.backgroundPositionY = tens + 'px';

    if (tens == -228 ) {
        
        var change = setTimeout(function () {
            num_tens.style.backgroundPositionY = 0;
            num_tens.style.transition = "0s";
        },300);
        
    }

}


function Movenum() {
    CalculateRemainTime();
    Setnumones(secone,secnum_one,sec);
    Setnumones(minone,minnum_one,min);
    Setnumones(hourone,hournum_one,hour);
    Setnumones(dayone,daynum_one,day);
    Setnumtens(secten,secnum_ten,sec);
    Setnumtens(minten,minnum_ten,min);
    Setnumtens(hourten,hournum_ten,hour);
    Setnumtens(dayten,daynum_ten,day);
}

