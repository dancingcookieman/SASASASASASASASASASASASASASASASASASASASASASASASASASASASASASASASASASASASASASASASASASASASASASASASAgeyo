var color = "red" 
var last_mouse_positon_X,last_mouse_positon_Y
var current_mouse_positon_X,current_mouse_positon_Y
var mouseEvent = "empty"
var lineWidth = 10

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")


canvas.addEventListener("mousedown",My_mousedown)
function My_mousedown(e){
mouseEvent = "mouseDown"
}
canvas.addEventListener("mouseup",My_mouseup)
function My_mouseup(e){
mouseEvent = "mouseUp"
}
canvas.addEventListener("mouseleave",My_mouseleave)
function My_mouseleave(e){
mouseEvent = "mouseLeave"
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++
lineWidth == lineWidth++

}

canvas.addEventListener("mousemove",My_mousemove)
function My_mousemove(e){
    current_mouse_positon_X = e.clientX - canvas.offsetLeft
    current_mouse_positon_Y = e.clientY - canvas.offsetTop
    mouseEvent = "empty"
    if(mouseEvent = "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.arc(current_mouse_positon_X,current_mouse_positon_Y,40,0,2*Math.PI)
        ctx.stroke ()
    }

}