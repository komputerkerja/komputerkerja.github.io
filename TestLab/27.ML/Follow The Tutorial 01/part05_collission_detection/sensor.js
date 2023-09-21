class Sensor{
    constructor(car){
        this.car=car;
        this.rayCount=5;
        this.rayLength=200;
        this.raySpread=Math.PI/4 // 45 derajat
        this.rays=[] // updated on sensor_Update_Rays()
        this.readings=[] // updated on sensor_Update_Collisions()
    }

    update(ctx, roadBorders){
        this.#sensor_Update_Rays()
        this.#sensor_Update_Collisions(roadBorders)
        this.draw(ctx)
    }

    #sensor_Update_Collisions(roadBorders){
        // console.log(roadBorders[0][0].x) // batas kiri jalan
        // console.log(roadBorders[1][0].x) // batas kanan jalan

        // console.log(this.rays[0][1].x) // ujung sensor kiri
        // console.log(this.rays[1][1].x) // ujung sensor tengah
        // console.log(this.rays[2][1].x) // ujung sensor kanan

        this.readings = []
        this.rays.forEach(ray => {
            this.readings.push(
                this.#getCollisions(ray, roadBorders)
            )
        })
    }

    #getCollisions(ray, roadBorders){
        let touches = []
        roadBorders.forEach(border => {
            const touch=getInterSection(ray[0],ray[1],border[0],border[1])
            if(touch) touches.push(touch)            
        })
        if(touches.length==0) return null
        const offsets = touches.map(e => e.offset)
        const minOffset = Math.min(...offsets)
        return touches.find(e => e.offset==minOffset)
    }

    #sensor_Update_Rays(){
        this.rays=[]
        for(let i = 0; i < this.rayCount; i ++){
            const rayAngel = LIP(
                this.raySpread/2,
                -this.raySpread/2,
                this.rayCount==1?0.5:i/(this.rayCount-1)
            ) + this.car.angle
            const start = {x: this.car.x, y: this.car.y}
            const end = {
                x: this.car.x-Math.sin(rayAngel)*this.rayLength,
                y: this.car.y-Math.cos(rayAngel)*this.rayLength
            }
            this.rays.push([start, end])
        }
    }

    draw(ctx){
        this.rays.forEach((ray, i) => {

            let end = ray[1]
            if(this.readings[i]) end = this.readings[i]

            ctx.beginPath()
            ctx.lineWidth = 2
            ctx.strokeStyle = "yellow"
            ctx.moveTo(ray[0].x, ray[0].y)
            ctx.lineTo(end.x, end.y)
            ctx.stroke()

            ctx.beginPath()
            ctx.lineWidth = 2
            ctx.strokeStyle = "black"
            ctx.moveTo(ray[1].x, ray[1].y)
            ctx.lineTo(end.x, end.y)
            ctx.stroke()

        })
    }
}

