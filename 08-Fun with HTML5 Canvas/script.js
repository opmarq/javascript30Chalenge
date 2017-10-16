const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 50;


var isDrawing = false;
var direction = true;

var [startX,startY] = [0,0];
var hue = 0;


var draw = function(e){

  if(!isDrawing)
    return;
  ctx.strokeStyle = `hsl(${hue},100%,70%)`;

  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();

  [startX,startY] = [e.offsetX,e.offsetY];

  hue++;

  if(hue > 360 )
  {
    hue = 0;
  } 

  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
  {
    direction = !direction;
  }

  if(direction)
    ctx.lineWidth++;
  else
    ctx.lineWidth--;

  console.log(ctx.lineWidth);
  console.log(direction);

};

canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mousedown",(e)=>{
  isDrawing = true;

  startX = e.offsetX;
  startY = e.offsetY;

});
canvas.addEventListener("mouseup",()=>{
  isDrawing = false;
})