const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth/2
const canvasHeight = canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

const road = new Road(canvasWidth/2, canvasWidth*0.9)
// controler is "DUMMY" "KEYS" OR "AI"
const car = new Car(road.getLaneCount(1),canvasHeight*0.8, 30, 50, "AI")
const trafics = [
    new Car(road.getLaneCount(1),canvasHeight*0.5, 30, 50, "DUMMY",2)
]

function animate(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    ctx.save()
    ctx.translate(0, -car.y+(canvasHeight*0.8))
    
    road.update(ctx)
    trafics.forEach(dummyCar => dummyCar.update(ctx,road.borders,[]))
    car.update(ctx, road.borders,trafics)

    ctx.restore()

    requestAnimationFrame(animate)
}

animate()
