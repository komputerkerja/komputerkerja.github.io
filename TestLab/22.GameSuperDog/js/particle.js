class Particle{
    constructor(x,y){
        this.x=x
        this.y=y
        this.vx=Math.random()*2-2
        this.vy=Math.random()*2-2
        this.size=Math.random()*6-2
        this.opacity=1
        this.mark=false
        this.color = `rgba(0,0,0,${this.opacity})`
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
    update(deltaTime){
        this.x+=this.vx
        this.y+=this.vy
        this.size -= 0.1
        this.opacity-=0.02
        if(this.size<=0.3)this.mark=true
    }
}

export class DustParticle extends Particle{
    constructor(x,y){
        super(x,y)
    }
    draw(ctx){
        super.draw(ctx)
    }
    update(deltaTime){
        super.update(deltaTime)
    }
}

export class FireParticle extends Particle{
    constructor(x,y){
        super(x,y-10)
        this.vx=Math.random()-2
        this.vy=Math.random()*2-2
        this.size=Math.random()*12-2
        this.opacity=0.6
        this.color = `rgba(43, 48, 201,${this.opacity})`
        // this.color = `rgba(255, 163, 163,${this.opacity})`
    }
    draw(ctx){
        super.draw(ctx)
    }
    update(deltaTime){
        this.x+=this.vx
        this.y+=this.vy
        this.size -= 0.1
        this.opacity-=0.1
        if(this.size<=0.3)this.mark=true
    }
}