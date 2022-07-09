class Enemy{
    constructor(game,image,frameMax,offsetY){
        this.game=game;
        this.image=image;
        this.spriteWidth=this.image.width/frameMax;
        this.spriteHeight=this.image.height;
        this.frameX=0;
        this.frameMax=frameMax;
        this.frameInterval=50;
        this.frameTimer=0;
        this.mark=false;
        this.offsetY=offsetY;

        this.speed = 1;
        this.width=this.spriteWidth/3;
        this.height=this.spriteHeight/3;
        this.x=this.game.canvas.width;
        this.y=Math.random() * (this.game.canvas.height * 0.8);        
        this.vx=-this.speed;
        this.vy=0;       
    }
    draw(){
        // this.game.ctx.beginPath()
        // this.game.ctx.strokeStyle = 'red'
        // this.game.ctx.arc(this.x+this.width/2,this.y+this.height/2,this.width/3,0,Math.PI*2)
        // this.game.ctx.stroke()
        // this.game.ctx.closePath()

        // this.game.ctx.beginPath()
        // this.game.ctx.strokeStyle = 'black'
        // this.game.ctx.rect(this.x,this.y,this.width,
        //     this.height)
        // this.game.ctx.stroke()
        // this.game.ctx.closePath()

        this.game.ctx.drawImage(this.image,
            this.frameX*this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height,)
    }
    update(deltaTime){
        this.x+=this.vx*Game.speed;
        this.y+=this.vy;
        if(this.frameTimer>this.frameInterval){
            if(this.frameX >= this.frameMax-1) this.frameX=0
            else this.frameX++
            this.frameTimer=0
        }else this.frameTimer+=deltaTime
        if(this.x<=-this.width) this.mark=true
    }
}

class GhostEnemy extends Enemy{
    constructor(game,image,frameMax,offsetY){
        super(game,image,frameMax,offsetY)
        this.rawSpeed = Math.random()*1.5
        this.speed = (this.game.roadSpeed+this.rawSpeed);      
        this.vx=-this.speed;
    }
    draw(){
        super.draw()
    }
    update(deltaTime){
        super.update(deltaTime)
    }
}

class WromEnemy extends Enemy{
    constructor(game,image,frameMax,offsetY){
        super(game,image,frameMax,offsetY)
        this.rawSpeed = Math.random()*1.2
        this.speed = (this.game.roadSpeed+this.rawSpeed);
        this.x=this.game.canvas.width;
        this.y=this.game.canvas.height-this.height-this.offsetY;        
        this.vx=-this.speed;
        this.vy=0;    
    }
    draw(){
        super.draw()
    }
    update(deltaTime){
        super.update(deltaTime)
    }
}

class PlantEnemy extends Enemy{
    constructor(game,image,frameMax,offsetY){
        super(game,image,frameMax,offsetY)

        this.speed = this.game.roadSpeed;
        this.width=this.spriteWidth;
        this.height=this.spriteHeight;
        this.x=this.game.canvas.width;
        this.y=this.game.canvas.height-this.height-this.offsetY;        
        this.vx=-this.speed;
        this.vy=0;    
    }
    draw(){
        super.draw()
    }
    update(deltaTime){
        super.update(deltaTime)
    }
}