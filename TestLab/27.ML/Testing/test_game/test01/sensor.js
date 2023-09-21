class Sensor{
    constructor(car){
        this.car=car;
        this.rayCount=5;
        this.rayLength=200;
        this.raySpread=Math.PI/2;
        this.rays=[];
        this.radings=[];
    }

    update(ctx,roadBorders){
        this.#sensor_update_rays()
        this.#sensor_read_collisions(roadBorders)
        this.draw(ctx)
    }

    #sensor_read_collisions(roadBorders){
        this.readings=[]
        this.rays.forEach(ray => {
            this.readings.push(this.#getCollisions(ray,roadBorders))
        })
    }

    #getCollisions(ray,roadBorders){
        let collisions=[]
        roadBorders.forEach(border => {
            const hasCollision=getInterSection(ray[0],ray[1],border[0],border[1])
            if(hasCollision) collisions.push(hasCollision)
        })
        if(collisions.length==0) return null
        const offset = collisions.map(e => e.offset)
        const minOffset = Math.min(...offset)
        return collisions.find(e=>e.offset==minOffset)
    }

    #sensor_update_rays(){
        this.rays=[]
        for(let i=0;i<this.rayCount;i++){
            const rayAngle = LIP(
                this.raySpread/2,
                -this.raySpread/2,
                this.rayCount==1?0.5:i/(this.rayCount-1)
            )+this.car.angle
            const start = {x: this.car.x, y:this.car.y}
            const end = {
                x: this.car.x-Math.sin(rayAngle)*this.rayLength,
                y: this.car.y-Math.cos(rayAngle)*this.rayLength
            }
            this.rays.push([start,end])
        }
    }

    draw(ctx){
        this.rays.forEach((ray,i)=> {   
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