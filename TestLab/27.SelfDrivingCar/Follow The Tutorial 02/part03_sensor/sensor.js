class Sensor{
    constructor(car){
        this.rayLength=150
        this.rayCount=5
        this.raySpread=Math.PI/4
        this.car=car;
        this.rays=[];
    }
    update(ctx){
        this.rays=[];
        for(let i=0;i < this.rayCount; i++){
            const rayAngel = LIP(
                -this.raySpread/2,
                this.raySpread/2,
                this.rayCount==1?0.5:i/(this.rayCount-1)
            )+this.car.angel
            const start = {x: this.car.x,y: this.car.y}
            const end = {
                x: this.car.x-Math.sin(rayAngel)*this.rayLength, 
                y: this.car.y-Math.cos(rayAngel)*this.rayLength
            }
            this.rays.push([start,end])
        }

        this.draw(ctx)
    }   
    draw(ctx){
        ctx.beginPath()
        ctx.strokeStyle = "yellow"
        ctx.lineWidth = 2

        this.rays.forEach(ray => {
            ctx.moveTo(ray[0].x, ray[0].y)
            ctx.lineTo(ray[1].x, ray[1].y)
        })

        ctx.stroke()
        ctx.closePath()
    }
}