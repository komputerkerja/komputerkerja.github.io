class Car{
    constructor(x,y,w,h){
        this.keys=new KeyboardEvents()
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=4;
        this.friction=0.05;

        this.angle=0;
        
        this.sensor=new Sensor(this)
    }

    update(ctx,roadBorders){
        if(this.keys.up) this.speed-=this.acceleration;
        if(this.keys.down) this.speed+=this.acceleration;
        if(this.speed>=this.maxSpeed) this.speed=this.maxSpeed/2;
        if(this.speed<=-this.maxSpeed) this.speed=-this.maxSpeed;
        if(this.speed>0) this.speed-=this.friction
        if(this.speed<0) this.speed+=this.friction
        if(Math.abs(this.speed)<this.friction) this.speed=0

        if(this.speed!=0){
            const flip = this.speed>0?1:-1
            if(this.keys.left) this.angle-=0.03*flip
            if(this.keys.right) this.angle+=0.03*flip
        }

        this.x+=Math.sin(this.angle)*this.speed
        this.y+=Math.cos(this.angle)*this.speed
 
        this.draw(ctx)
        this.sensor.update(ctx,roadBorders)
    }

    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angle)
        ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h)
        ctx.restore()
    }
}