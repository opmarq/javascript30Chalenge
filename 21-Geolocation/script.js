const speed = document.querySelector("#speed");
const compass = document.querySelector("#compass");

console.log(speed);

navigator.geolocation.watchPosition((data)=>{

    speed.innerText = data.coords.speed || "00";
    compass.style.transform = `rotate(${ data.coords.heading }deg)`;

},(err)=>{

    console.error("You didn't allow access to your location!");

});