class Car{
    constructor(x,y,w,h,controlType){
        this.controlType=controlType;
        this.keys=new Keys(controlType);
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;

        this.speed=0;
        this.acceleration=0.3;
        this.maxSpeed=(controlType=="DUMMY")?2:3;
        this.friction=0.05;

        this.angel=0;

        if(controlType!="DUMMY") this.sensor=new Sensor(this)
        this.damage=false
    }

    update(ctx, roadBorders){
        this.#assesDamange(roadBorders)
        if(!this.damage) this.#move()
        this.draw(ctx)
        if(this.sensor) this.sensor.update(ctx)
    }

    #assesDamange(roadBorders){
        
    }

    draw(ctx){
        ctx.fillStyle=(this.controlType=="DUMMY")?"red":"black"
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angel)
        ctx.beginPath()
        ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }
    #move(){
        if(this.keys.up) this.speed -= this.acceleration
        if(this.keys.down) this.speed += this.acceleration
        if(this.speed>this.maxSpeed)this.speed=this.maxSpeed/2
        if(this.speed<-this.maxSpeed)this.speed=-this.maxSpeed
        if(this.speed>0)this.speed-=this.friction
        if(this.speed<0)this.speed+=this.friction
        if(Math.abs(this.speed)<=this.friction)this.speed=0
        if(this.speed!=0){
            const flip=this.speed>0?1:-1
            if(this.keys.left)this.angel-=0.03*flip
            if(this.keys.right)this.angel+=0.03*flip
        }
        this.y+=Math.cos(this.angel)*this.speed
        this.x+=Math.sin(this.angel)*this.speed    
    }
}