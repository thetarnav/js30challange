ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// ctx.globalCompositeOperation = 'multiply';

var isDrawing = false;
var [lastX, lastY] = [0, 0];
var hue = 0;
const [widthMin, widthMax] = [10, 100];
var width = widthMin;
var increasing = true;


function draw(e) {
   if (!isDrawing) return;

   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
   ctx.lineWidth = width;
   ctx.beginPath();
   ctx.moveTo(lastX, lastY);
   ctx.lineTo(e.offsetX, e.offsetY);
   ctx.stroke();
   [lastX, lastY] = [e.offsetX, e.offsetY];
   hue++;
   if (increasing) width++;
   else width--;
   if (width === widthMax || width === widthMin) increasing = !increasing;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
   isDrawing = true;
   [lastX, lastY] = [e.offsetX, e.offsetY];
   draw(e);
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);