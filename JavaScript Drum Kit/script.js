window.addEventListener("keydown", function (e) {

    const returnedKey = document.querySelector(`.key[data-key = ${e.key.toUpperCase()}`);
    const returnedSound = document.querySelector(`audio[data-key = ${e.key.toUpperCase()}`);
    const logo = document.querySelector(".logo");

    if (returnedKey == null)
        return false;

    returnedSound.currentTime = 0;
    returnedSound.play();
    returnedKey.classList.toggle("pressed");
    logo.classList.toggle("pressed");



});

var keys = document.querySelectorAll(".key");

keys.forEach((key) => {

    key.addEventListener("transitionend", (e) => {

        if (e.propertyName != "transform")
            return;

        key.classList.remove("pressed");

    });
});
