const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth*0.8
const canvasHeight = canvas.height = window.innerHeight/2
const ctx = canvas.getContext('2d')

const rects = [
    new Rectangle(canvas,0,0,40,50,"orange"),
    new Rectangle(canvas,60,0,40,50,"purple")
]

function animate(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    rects.forEach(rect=>rect.update(ctx,rects))
    requestAnimationFrame(animate)
}

animate()