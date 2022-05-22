var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
line_Width = 2;

canvas.addEventListener("mousedown", mouse_down);
function mouse_down(e){
mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mouse_up);
function mouse_up(e){
mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mouse_leave);
function mouse_leave(e){
mouseEvent = "mouse_leave";
}

canvas.addEventListener("mousemove", mouse_move);
function mouse_move(e){

current_x = e.clientX -canvas.offsetLeft;
current_y = e.clientY -canvas.offsetTop;

if (mouseEvent == "mousedown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = line_Width;

console.log("last positions of x and y coordinates = "+ " , x= "+last_position_of_x + " , y= "+last_position_of_y);

ctx.moveTo(last_position_of_x, last_position_of_y);
console.log("current positions of x and y coordinates = "+ " , x= "+current_x +" , y= "+current_y);

ctx.lineTo(current_x, current_y);
ctx.stroke();
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;


last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y= e.touches[0].clientY - canvas.offsetTop;    
}


canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("touchmove");

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;

        }

last_position_of_x = current_x;
last_position_of_y = current_y;
}

function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}