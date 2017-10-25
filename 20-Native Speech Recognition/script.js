
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.interimResults = true;


const note = document.querySelector(".note");

let p = document.createElement("p");

note.appendChild(p);

recognition.addEventListener("result",(e)=>{

    let results = Array.from(e.results);
    
    let transcript = results.map((result)=>result[0]).map((result)=>result.transcript).join("");

    p.textContent = transcript;

    if(e.results[0].isFinal)
    {
        p = document.createElement("p");
        note.appendChild(p);
    }

});


recognition.addEventListener("end",recognition.start);

recognition.start();
