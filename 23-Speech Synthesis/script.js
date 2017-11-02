
let speech = new SpeechSynthesisUtterance();
let speakBtn = document.querySelector(".speak");
let stopBtn = document.querySelector(".stop");
let textArea = document.querySelector("[name='text']");
let options = document.querySelectorAll("[name='speed'], [name='pitch']");
const select = document.querySelector("select[name='voice']");


speech.text = textArea.value;
let voices = [];

var populateSelect = function () {

    voices = this.getVoices();

    select.innerHTML = voices.map((voice) => {
        return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    }).join();

};

var chooseVoice = function () {
    speech.voice = voices.find((voice) => this.value === voice.name);
    toggle();
};

var toggle = function (stop = false) {

    speechSynthesis.cancel();

    if (!stop) {
        speech.text = textArea.value;
        speechSynthesis.speak(speech);
    }

};

let changeRange = function () {
    speech[this.name] = this.value;
};

speechSynthesis.addEventListener("voiceschanged", populateSelect);
select.addEventListener("change", chooseVoice);
options.forEach((option) => option.addEventListener("change", changeRange));
speakBtn.addEventListener("click",toggle.bind(null,false));
stopBtn.addEventListener("click",toggle.bind(null,true));
