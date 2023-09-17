class Sketch{ static isDraw = false ;static mouse={x:0,y:0}; static borders=[[]]}
document.onmousedown=e=>{
    Sketch.isDraw=true;
}
document.onmouseup=e=>{
    Sketch.isDraw=false;
    Sketch.borders.push([])
}
document.onmousemove=e=>{
    Sketch.mouse={x: e.x, y: e.y}
    if(Sketch.isDraw) { 
        const path = Sketch.borders.length-1
        Sketch.borders[path].push(Sketch.mouse) 
    }
}

const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width=window.innerWidth
const canvasHeight = canvas.height=window.innerHeight
const ctx = canvas.getContext('2d')
const road = new Road()

function animate(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    road.update(ctx, Sketch.borders)
    requestAnimationFrame(animate)
} animate()

function saveLocal(){
    localStorage.setItem(
        'borderPath',
        JSON.stringify(Sketch.borders)
    )
}
function loadLocal(){
    if(localStorage.getItem('borderPath')){
        const data = JSON.parse(localStorage.getItem('borderPath'))
        Sketch.borders=data       
    }
}
function clearLocal(){
    localStorage.removeItem('borderPath')
    Sketch.borders=[[]]
}
