var scr = document.querySelector("#curse")
var crsr = document.querySelector(".cursor")

scr.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    
})
scr.addEventListener("mouseleave",function(){
    crsr.style.opacity="0"
})
scr.addEventListener("mouseenter",function(){
    crsr.style.opacity="1"
})