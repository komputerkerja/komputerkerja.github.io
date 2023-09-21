class Sketch { 
    static mouse = {x: 0, y:0}
    static border = []
    static borders = []
}
document.onmousedown = e => {
    Sketch.mouse = {x: e.x, y: e.y}    
    Sketch.border.push(Sketch.mouse)
}
document.onmouseup = e => {
    if(Sketch.border.length==2){
        Sketch.borders.push(Sketch.border)
        Sketch.border = []
    }
}

const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth
const canvasHeight = canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
const road = new Road()

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    road.update(ctx, Sketch.borders)
    requestAnimationFrame(animate)
} animate()
