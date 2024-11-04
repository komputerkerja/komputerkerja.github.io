// controler is "DUMMY" "KEYS" OR "AI"
const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth/2
const canvasHeight = canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

const road = new Road(canvasWidth/2, canvasWidth*0.9)
const N = 1
const cars = generateAiCar(N)
// Karna di akses localstorage
// Jadi harus di inisialisasi
let bestCar = cars[0]; 

//BRAIN DARI FILE JSON
fetch("localstorage_brain.json")
.then(res => res.json())
.then(data => {
    let dataIter=0
    for(let i=0; i<cars.length; i++){
        if(i==0){
            console.log('ok')
            bestCar.brain=data[dataIter]
        }else{
            NeuralNetwork.mutate(cars[i].brain,0.5)
            cars[i].brain=data[dataIter]
        } 
        if(dataIter < data.length-1) dataIter++
        else dataIter=0
    }
})
.catch(err => console.log(err));

//BRAIN DARI LOCAL STORAGE BROWSER
// if(localStorage.getItem('bestBrain')){
//     cars.forEach((car,i)=>{
//         car.brain=JSON.parse(localStorage.getItem('bestBrain'))
//         if(i!=0) NeuralNetwork.mutate(car.brain,Math.random()/10)
//     })
// }

const trafics = [
    new Car(road.getLaneCount(1),canvasHeight*0.5, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*0.2, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*0.2, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-0.1, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-0.4, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-0.4, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-0.8, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-0.8, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-1.1, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-1.1, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-1.4, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-1.4, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-1.8, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-2, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-2.1, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-2.5, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-2.5, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-2.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-2.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-3.3, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-3.3, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-3.6, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-3.6, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-3.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-3.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-4.1, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-4.3, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-4.6, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-4.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-4.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-5.2, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-5.2, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-5.3, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-5.6, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-5.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-5.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-6.1, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-6.1, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-6.4, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-6.4, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-6.65, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-6.65, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-6.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-6.9, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(2),canvasHeight*-7.2, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(0),canvasHeight*-7.45, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-7.6, 30, 50, "DUMMY",2,getRandomColor()),
    new Car(road.getLaneCount(1),canvasHeight*-7.4, 30, 50, "DUMMY",2,getRandomColor()),
]

function animate(){
    requestAnimationFrame(animate)
    if(N!=1) bestCar = cars.find(car => car.y==Math.min(...cars.map(c=>c.y))) 

    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    ctx.save()
    ctx.translate(0, -bestCar.y+(canvasHeight*0.8))
    
    road.update(ctx)
    trafics.forEach(dummyCar => dummyCar.update(ctx,road.borders,[]))
    
    if(N==1){
        cars[0].update(ctx, road.borders,trafics,true)
    }else{
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
    }
    ctx.restore()
}

animate()

function generateAiCar(n){
    const cars_of_ai = []
    for(let i=0; i<n; i++){
        cars_of_ai.push(new Car(road.getLaneCount(1), canvasHeight*0.8,30,50,"AI",3,"blue"))
    }
    return cars_of_ai;
}

function save(){
    localStorage.setItem('bestBrain', JSON.stringify(bestCar.brain))
}
function discard(){
    localStorage.removeItem('bestBrain')
}


