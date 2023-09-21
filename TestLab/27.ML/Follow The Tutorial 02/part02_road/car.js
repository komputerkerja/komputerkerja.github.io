class Car{
    constructor(x,y,w,h){
        this.keys=new Keys()
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;

        this.speed=0;
        this.acceleration=0.3;
        this.maxSpeed=3;
        this.friction=0.05;

        this.angel=0;
    }
    update(ctx){
        this.#move()
        this.draw(ctx)
    }
    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angel)
        ctx.beginPath()
        ctx.fillStyle="black"
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