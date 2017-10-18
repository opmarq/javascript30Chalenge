const secretKey = "opmarq";
var pressed = [];

var secretMessage = function(){

    document.querySelector(".prize").style.display = "block";

};

document.addEventListener("keydown",e => {

    pressed.push(e.key);

    pressed.splice(-secretKey.length - 1, pressed.length - secretKey.length);

    if( pressed.join("") == secretKey )
        secretMessage();

});