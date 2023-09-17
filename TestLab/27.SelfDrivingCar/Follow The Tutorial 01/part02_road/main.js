const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth/2
const canvasHeight = canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

const road = new Road(canvasWidth/2, canvasWidth*0.9, 5)
const car = new Car(road.getLaneCenter(1),canvasHeight*0.9,30,50)

let lastTime = 1;
function animate(timeStamp){
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp

    ctx.clearRect(0,0,canvasWidth,canvasHeight)

    ctx.save()
    ctx.translate(0, -car.y+(canvasHeight*0.8))

    road.update(deltaTime, ctx)
    car.update(deltaTime, ctx)

    ctx.restore()

    requestAnimationFrame(animate)
}

animate(0)