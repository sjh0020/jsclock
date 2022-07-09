getTime();

function getTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    runClock(hours, minutes, seconds);
    document.querySelector("#year").innerHTML = year;
    document.querySelector("#month").innerHTML = month + 1;
    document.querySelector('#day').innerHTML = day;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
    setTimeout("getTime()", 100);
}

function runClock(hours, minutes, seconds) {
    let hourHand = document.getElementById('hourHand').style;
    let minuteHand = document.getElementById('minuteHand').style;
    let secondHand = document.getElementById('secondHand').style;
    secondHand.transformOrigin = "50% 100%";
    secondHand.transform = 'rotate('+seconds / 60 * 360+'deg)';
    minuteHand.transformOrigin = "50% 100%";
    minuteHand.transform = 'rotate('+(minutes / 60 * 360 + seconds / 60 * 6)+'deg)';
    hourHand.transformOrigin = "50% 100%";
    hourHand.transform = 'rotate('+(hours / 12 * 360 + minutes / 60 * 30)+'deg)';
}