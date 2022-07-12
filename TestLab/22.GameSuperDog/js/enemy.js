class Enemy{
    constructor(game,sprites){
        this.game=game
        this.image=sprites.image
        this.frameMax=sprites.frameMax
        this.spriteWidth=this.image.width/this.frameMax
        this.spriteHeight=this.image.height
        this.width=this.spriteWidth/4
        this.height=this.spriteHeight/4
        this.x=this.game.width
        this.speed=(this.game.slideSpeed*0.2)+(Math.random()*2);
        this.y=(Math.random()*this.game.height)*0.5
        this.vy=0
        this.vx=0
        this.frameX=0
        this.frameFps=50;
        this.frameTimer=0;
        this.mark=false;
    }
    draw(ctx){
        // ctx.beginPath()
        // ctx.strokeStyle = 'yellow'
        // ctx.arc(this.x+this.width/2,this.y+this.height/2,this.height/2,0,Math.PI*2)
        // ctx.stroke()
        // ctx.closePath()
        // ctx.fillStyle = 'red'
        // ctx.fillRect(this.x,this.y,this.width,this.height)

        ctx.drawImage(this.image,
            this.frameX*this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height)
    }
    update(deltaTime){
        this.vx = this.speed * ((this.game.speed>0)?this.game.speed:1)
        this.x-=this.vx
        this.y-=this.vy
        if(this.x+this.width <= 0) this.mark=true;
        if(this.frameTimer>=this.frameFps){
            if(this.frameX>=this.frameMax-1)this.frameX=0;
            else this.frameX++
            this.frameTimer=0;
        }else this.frameTimer+=deltaTime
    }
}

export class FlyingEnemy extends Enemy{
    constructor(game,sprites){
        super(game,sprites)
    }
    draw(ctx){
        super.draw(ctx)
    }
    update(deltaTime){
        super.update(deltaTime)
    }
}

export class GroundEnemy extends Enemy{
    constructor(game,sprites){
        super(game,sprites)
        this.y=this.game.ground-this.height
    }
    draw(ctx){
        super.draw(ctx)
    }
    update(deltaTime){
        super.update(deltaTime)
    }
}

export class PlantEnemy extends Enemy{
    constructor(game,sprites){
        super(game,sprites);
        this.width=this.spriteWidth/1.2;
        this.height=this.spriteHeight/1.2;
        this.speed=this.game.slideSpeed*0.2;
        this.y=this.game.ground-this.height;
    }
    draw(ctx){
        super.draw(ctx);
    }
    update(deltaTime){
        this.vx = this.speed * this.game.speed;
        this.x-=this.vx;
        this.y-=this.vy;
        if(this.x+this.width <= 0) this.mark=true;
        if(this.frameTimer>=this.frameFps){
            if(this.frameX>=this.frameMax-1)this.frameX=0;
            else this.frameX++;
            this.frameTimer=0;
        }else this.frameTimer+=deltaTime;
    }
}