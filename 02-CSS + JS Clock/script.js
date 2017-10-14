const second = document.querySelector(".second-hand");
const minute = document.querySelector(".minute-hand");
const hours = document.querySelector(".hours-hand");

//the clock starts from the 90 deg


var tickTock = function () {

    const date = new Date();

    let secondRot = ((date.getSeconds() / 60) * 360) + 90;
    second.style.transform = `rotate(${secondRot}deg)`;

    console.log(date.getMinutes());

    // same thing to minutes
    let minuteRot = ((date.getMinutes() / 60) * 360) + 90;
    minute.style.transform = `rotate(${minuteRot}deg)`;


    // same thing to minutes

    let hoursRot = ((date.getHours() / 12) * 360) + 90;
    hours.style.transform = `rotate(${hoursRot}deg)`;

}

tickTock();

setInterval(tickTock, 1000);