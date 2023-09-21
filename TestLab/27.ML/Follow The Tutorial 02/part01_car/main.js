const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width=window.innerWidth/2
const canvasHeight = canvas.height=window.innerHeight
const ctx = canvas.getContext('2d')

const car = new Car(canvasWidth/2,canvasHeight/2,30,50)

function animate(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    car.update(ctx)
    requestAnimationFrame(animate)
} animate()