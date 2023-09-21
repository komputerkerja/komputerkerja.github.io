const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width=window.innerWidth/2
const canvasHeight = canvas.height=window.innerHeight
const ctx = canvas.getContext('2d')

const car = new Car(canvasWidth/2,canvasHeight/2,30,50)
const road = new Road(canvasWidth/2,canvasWidth*0.9,3)

function animate(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight)

    ctx.save()
    ctx.translate(0,-car.y+canvasHeight*0.8)

    road.update(ctx)
    car.update(ctx)
    
    ctx.restore()
    requestAnimationFrame(animate)
} animate()