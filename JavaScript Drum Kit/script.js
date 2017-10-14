window.addEventListener("keydown",function(e){

   const returnedKey =  document.querySelector(`.key[data-key = ${e.key.toUpperCase()}`);
   const returnedSound =  document.querySelector(`audio[data-key = ${e.key.toUpperCase()}`);

    if(returnedKey == null)
        return false;

    returnedSound.currentTime = 0;
    returnedSound.play();
    returnedKey.classList.add("pressed");

    returnedKey.addEventListener("transitionend",(e)=>{

        if(e.propertyName != "transform")
            return;

        returnedKey.classList.remove("pressed");

    });

});

/*
var keys = document.querySelectorAll(".key");

keys.forEach((key)=>{

    .addEventListener("transitionend",(e)=>{
        
                if(e.propertyName != "transform")
                    return;
        
                returnedKey.classList.remove("pressed");
        
    });
});
*/