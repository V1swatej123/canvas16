var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var X;
var Y;
var color = "grey";
var radius = 20;
var lineWidth = 5;
var mouseEvent = "empty";

var width = screen.width;

var new_width = screen.width - 50;
var new_height = screen.height - 200;

if ( width < 992 ) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchdown", touchDown);

function touchDown(e) { 
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width").value;
    if ( document.getElementById("radius").value !== null || "" ){
      console.log("radius");
    }else{
      radius = document.getElementById("radius").value;
    }  
  }



canvas.addEventListener("touchmove", touchMove);

function touchMove(e) {
    var current_X = e.touches[0].clientX - canvas.offsetLeft;
    var current_Y = e.touches[0].clientY - canvas.offsetTop;
        
      ctx.beginPath();
     // ctx.moveTo(X, Y);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      //ctx.lineTo(current_X, current_Y);
      ctx.arc( current_X, current_Y, radius, 0, 2 * Math.PI);
      ctx.stroke();


    X = current_X;
    Y = current_Y;
}

canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e) {
  color = document.getElementById("color").value;
    lineWidth = document.getElementById("width").value;
    if ( document.getElementById("radius").value !== null || "" ){
    }else{
      radius = document.getElementById("radius").value;
    }  
    mouseEvent = "mousedown"
}

canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e) {
  var current_X = e.clientX - canvas.offsetLeft;
  var current_Y = e.clientY - canvas.offsetTop;
    if ( mouseEvent == "mousedown" ){
      ctx.beginPath();
      //ctx.moveTo(X, Y);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      //ctx.lineTo(current_X, current_Y);
      ctx.arc( current_X, current_Y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
    X = current_X;
    Y = current_Y;
}


document.getElementById("btn1").addEventListener("click", a);

canvas.addEventListener("mouseup", mouseup);

function mouseup(e) {
  mouseEvent = "mouse up"
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave(e) {
  mouseEvent = "mouse leave"
}

function a(e) {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}