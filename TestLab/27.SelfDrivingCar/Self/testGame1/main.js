document.addEventListener('DOMContentLoaded', getTrack('track4.json'))
function gameInit(tracks){


    const canvas = document.querySelector('canvas')
    const canvasWidth = canvas.width = window.innerWidth*0.9
    const canvasHeight = canvas.height = window.innerHeight*0.9
    const ctx = canvas.getContext('2d')
    
    const road = new Road(canvasWidth/2, canvasWidth*0.9,3,tracks)
    const N = 10
    const cars = generateAiCar(N)
    let bestCar = cars[0]; 

    // let bestCar = new Car(road.getLaneCount(1), canvasHeight*0.7,30,50,"KEYS")

    if(localStorage.getItem('bestBrain')){
        cars.forEach((car,i)=>{
            car.brain=JSON.parse(localStorage.getItem('bestBrain'))
            if(i!=0) NeuralNetwork.mutate(car.brain,0.1)
        })
    }
    
    const trafics = []
    
    function animate(){
        requestAnimationFrame(animate)
        if(N!=1) bestCar = cars.find(car => car.score==Math.max(...cars.map(c=>c.score))) 
    
        ctx.clearRect(0,0,canvasWidth,canvasHeight)
        ctx.save()
        ctx.translate(-bestCar.x+(canvasWidth/2), -bestCar.y+(canvasHeight*0.8))
        
        road.update(ctx)
        trafics.forEach(dummyCar => dummyCar.update(ctx,road.borders,[]))
        bestCar.update(ctx, road.borders,trafics,true)

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
            cars_of_ai.push(new Car(road.getLaneCount(1), canvasHeight*0.8,30,50,"AI"))
        }
        return cars_of_ai;
    }












}