// controler is "DUMMY" "KEYS" OR "AI"
const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth/2
const canvasHeight = canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

const road = new Road(canvasWidth/2, canvasWidth*0.9)
const N = 50
const cars = generateAiCar(N)
const trafics = [
    new Car(road.getLaneCount(1),canvasHeight*0.5, 30, 50, "DUMMY",2)
]

function animate(){
    requestAnimationFrame(animate)
    const bestCar = cars.find(car => car.y==Math.min(...cars.map(c=>c.y))) 

    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    ctx.save()
    ctx.translate(0, -bestCar.y+(canvasHeight*0.8))
    
    road.update(ctx)
    trafics.forEach(dummyCar => dummyCar.update(ctx,road.borders,[]))
    
    ctx.globalAlpha=0.2
    for(let i =1; i<cars.length;i++) {
        if(cars[i]==bestCar){
            ctx.globalAlpha=1
            cars[i].update(ctx, road.borders,trafics,true)
            ctx.globalAlpha=0.2
        } else {
            cars[i].update(ctx, road.borders,trafics)
        }
    }

    ctx.restore()
}

animate()

function generateAiCar(n){
    const cars_of_ai = []
    for(let i=0; i<n; i++){
        cars_of_ai.push(
            new Car(road.getLaneCount(1), canvasHeight*0.8,30,50,"AI")
        )
    }
    return cars_of_ai;
}
