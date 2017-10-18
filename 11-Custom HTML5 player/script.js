const player = document.querySelector(".player");
const video = document.querySelector("video");
const togglePlay = document.querySelector(".toggle");
const progressFull = document.querySelector(".progress-full");
const playerProgress = document.querySelector(".player-progress");
const playerBtns = document.querySelectorAll(".player-button");
const inputRange = document.querySelectorAll("input[type='range']");



var togglePlaying = function () {

    return video.paused == true ? video.play() : video.pause()
}

var updateButton = function () {

    if (video.paused) {
        togglePlay.innerHTML = "►";
        console.log("pause");
    }
    else {
        console.log("play");
        togglePlay.innerHTML = "❚❚";
    }

}

var updateProgressBar = function(){

    let percent = (video.currentTime / video.duration) * 100;
    progressFull.style.width = `${ percent }%`;

}

var handleProgress = function(e){

  let jump = (e.offsetX / playerProgress.offsetWidth) * video.duration;

  video.currentTime = jump;

};


playerBtns.forEach((btn)=>{

    btn.addEventListener("click",()=>{
        video.currentTime += parseFloat(btn.dataset.skip);
    });
});


var rangeClicked = false;

inputRange.forEach((range)=>{

        range.addEventListener("change",(e)=>{

            video[range.name] = range.value;

        });

        range.addEventListener("click",() => rangeClicked = !rangeClicked )

        range.addEventListener("mousemove",()=> rangeClicked == true ? video[range.name] = range.value : false );
});


playerProgress.addEventListener("click",handleProgress);

togglePlay.addEventListener("click", togglePlaying);
video.addEventListener("click", togglePlaying);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener("timeupdate",updateProgressBar)


player.addEventListener("mouseover", () => {
    player.querySelector(".player-control").style.transform = 'translateY(0)';
});

player.addEventListener("mouseout", () => {
    player.querySelector(".player-control").style.transform = 'translateY(45px)';
});