class Particle{
    constructor(x,y){
        this.x=x+(Math.random()*30)-20;
        this.y=y+(Math.random()*2);
        this.size=8;
        this.vx=Math.random()*2-2
        this.vy=Math.random()*2-2
        this.opacity=0.4
        this.mark=false
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = `rgba(0,0,0,${this.opacity})`
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
    update(){
        this.x+=this.vx
        this.y+=this.vy
        this.size-=0.1
        this.opacity-=0.02
        if(this.size<=2) this.mark=true
    }
}

class DustParticles extends Particle{
    constructor(x,y){
        super(x,y)
    }
    draw(ctx){
        super.draw(ctx)
    }
    update(){
        super.update()
    }
}

class FireParticles extends Particle{
    constructor(x,y){
        super(x,y)
        this.x=x+(Math.random()*35)-30;
        this.y=y+(Math.random()*30)-20;
        this.size=18;
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = `rgba(180,50,10,${this.opacity})`
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
    update(){
        super.update()
    }
}