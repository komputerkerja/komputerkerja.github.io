const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth * 0.9
const canvasHeight = canvas.height = window.innerHeight-20
let lastTime = 1;

const ctx = canvas.getContext('2d')

const car = new Car(canvasWidth/2,canvasHeight*0.9,30,55)

function animate(timeStamp){
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    car.update(deltaTime, ctx)
    requestAnimationFrame(animate)
}

animate(0)