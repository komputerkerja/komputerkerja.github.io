class Sensor{
    constructor(car){
        this.car=car;
        this.rayCount=5;
        this.rayLength=200;
        this.raySpread=Math.PI/4 // 45 derajat
        this.rays=[]
    }

    update(deltaTime,ctx){
        this.rays=[]

        for(let i = 0; i < this.rayCount; i ++){

            const rayAngel = LIP(
                this.raySpread/2,
                -this.raySpread/2,
                i/(this.rayCount-1)
            ) + this.car.angle

            const start = {x: this.car.x, y: this.car.y}
            const end = {
                x: this.car.x-Math.sin(rayAngel)*this.rayLength,
                y: this.car.y-Math.cos(rayAngel)*this.rayLength
            }
            this.rays.push([start, end])
        }

        this.draw(ctx)
    }

    draw(ctx){
        this.rays.forEach(ray => {
            ctx.beginPath()
            ctx.lineWidth = 2
            ctx.strokeStyle = "yellow"
            ctx.moveTo(ray[0].x, ray[0].y)
            ctx.lineTo(ray[1].x, ray[1].y)
            ctx.stroke()
        })
    }
}

