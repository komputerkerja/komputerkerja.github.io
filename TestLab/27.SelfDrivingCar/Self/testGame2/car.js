class Car{
    constructor(x,y,w,h,controlType, maxSpeed=3){
        this.keys=new CarControllers(controlType)
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=maxSpeed;
        this.friction=0.05;
        this.angle=0;
        if(controlType!="DUMMY") {
            this.sensor=new Sensor(this)
            this.brain=new NeuralNetwork([this.sensor.rayCount,6,4])
        }
        this.polygon;
        this.damage;

        this.controlType=controlType
        this.useBrain=controlType=="AI"
        this.moveValue=0
        this.score=0;
    }
    update(ctx, roadBorders, trafics, drawSensor=false,cars){
        if(!this.damage) {
            this.#move()
            this.polygon=this.#createPolygon()
            this.damage=this.#assessDamage(roadBorders, trafics)
            if(this.sensor) {
                this.sensor.update(ctx, roadBorders, trafics, drawSensor)
                const offset = this.sensor.readings.map(s=>s==null?0:1-s.offset)
                const outputs = NeuralNetwork.feedForward(offset, this.brain)
                if(this.useBrain){
                    this.keys.up=outputs[0]
                    this.keys.left=outputs[1]
                    this.keys.right=outputs[2]
                    this.keys.down=outputs[3]
                }
            }
        }
        this.draw(ctx)
        if(this.moveValue != this.x+this.y ){
            this.moveValue = this.x+this.y
            this.score++
        }
        if(this.damage) {
            cars.forEach((myCar,i) => {
                if(myCar==this) cars.splice(i,1)
            });
        }
    }
    draw(ctx){
        ctx.fillStyle=this.damage?"#c75a5aca":this.controlType=="DUMMY"?"red":"black"
        ctx.beginPath()
        ctx.moveTo(this.polygon[0].x,this.polygon[0].y)
        for(let i=1;i<this.polygon.length;i++){
            ctx.lineTo(this.polygon[i].x,this.polygon[i].y)
        }
        ctx.fill()
    }
    #createPolygon(){
        const points=[]
        const rad=Math.hypot(this.w,this.h)/2
        const alpha=Math.atan2(this.w,this.h)
        points.push({
            x:this.x-Math.sin(this.angle-alpha)*rad,
            y:this.y-Math.cos(this.angle-alpha)*rad
        })                
        points.push({
            x:this.x-Math.sin(this.angle+alpha)*rad,
            y:this.y-Math.cos(this.angle+alpha)*rad
        })                
        points.push({
            x:this.x-Math.sin(Math.PI+this.angle-alpha)*rad,
            y:this.y-Math.cos(Math.PI+this.angle-alpha)*rad
        })                
        points.push({
            x:this.x-Math.sin(Math.PI+this.angle+alpha)*rad,
            y:this.y-Math.cos(Math.PI+this.angle+alpha)*rad
        })   
        return points;             
    }
    #move(){
        if(this.keys.up) this.speed -= this.acceleration
        if(this.keys.down) this.speed += this.acceleration
        if(this.speed>=this.maxSpeed) this.speed=this.maxSpeed/2
        if(this.speed<=-this.maxSpeed) this.speed=-this.maxSpeed
        if(this.speed>0) this.speed-=this.friction
        if(this.speed<0)this.speed+=this.friction
        if(Math.abs(this.speed)<this.friction) this.speed=0

        if(this.speed!=0){
            const flip = this.speed>0?1:-1
            if(this.keys.left) this.angle-=0.03*flip
            if(this.keys.right) this.angle+=0.03*flip
        }
        this.x+=Math.sin(this.angle)*this.speed
        this.y+=Math.cos(this.angle)*this.speed     
    }
    #assessDamage(roadBorders, trafics){
        for(let i=0;i<roadBorders.length;i++){
            if(polyIntersection(this.polygon,roadBorders[i])) return true
        }
        for(let i=0;i<trafics.length;i++){
            if(polyIntersection(this.polygon,trafics[i].polygon)) return true
        }
        return false;
    }
}