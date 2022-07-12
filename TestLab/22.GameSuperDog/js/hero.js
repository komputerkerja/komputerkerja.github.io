import { STATE } from "./state.js";
import { Game } from "./game.js";

export class Hero{
    constructor({game,sprites}){
        this.game=game;
        this.image=sprites.image;
        this.hFrame=sprites.hFrame;
        this.vFrame=sprites.vFrame;
        this.spriteWidth=(this.image.width/this.hFrame)+sprites.offsetW;
        this.spriteHeight=(this.image.height/this.vFrame)+sprites.offsetH;
        this.width=this.spriteWidth/6
        this.height=this.spriteHeight/6;
        this.status='run'
        this.frameX=0
        this.frameY=STATE[this.status].frameY;
        this.frameMax=STATE[this.status].frameX;
        //======================================
        this.fpsMax=10;
        this.fpsNormal=50;
        this.frameFps=50;
        this.frameTimer=0;
        //================
        this.x=20;
        this.y=0;
        this.vx=0;
        this.vy=0;
        this.weight=1;
        this.movementSpeed=4;
        this.maxJump=24;
        this.boost=2;
    }
    draw(ctx){
        // ctx.beginPath()
        // ctx.strokeStyle = 'yellow'
        // ctx.arc(this.x+this.width/2,this.y+this.height/2,this.width/2,0,Math.PI*2)
        // ctx.stroke()
        // ctx.closePath()
        // ctx.fillRect(this.x,this.y,this.width,this.height)

        ctx.drawImage(this.image,
            this.frameX*this.spriteWidth,
            this.frameY*this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height,)
    }
    update(deltaTime){
        this.vy+=this.weight;
        this.playerControls();
        this.x+=this.vx;
        this.y+=this.vy;
        // **********COLLITIONS***********
        this.game.enemies.forEach(enemy => {
            const dx = (enemy.x+(enemy.width/2)) - (this.x+(this.width/2))
            const dy = (enemy.y+(enemy.height/2)) - (this.y+(this.height/2))
            const distance = Math.sqrt((dx*dx)+(dy*dy))
            const sumSize = this.width+enemy.width
            if(distance<(sumSize/3)) {
                if(this.status=='roll' || this.status=='slide'){
                    this.game.enemies=this.game.enemies.filter(e => e!= enemy)
                    this.game.score++
                }else this.game.gameOver=true;
            } 
        });
        // **********PARTICLES***********
        if(this.status=='run') this.game.createDustParticle(this.x+this.width/2,this.y+this.height)
        if(this.status=='roll' || this.status=='slide') this.game.createFireParticle(this.x+this.width/2,this.y+this.height)
        // FRAME PER SECOND LOOP **********
        if(this.frameTimer>=this.frameFps){
            if(this.frameX>=this.frameMax-1)this.frameX=0;
            else this.frameX++
            this.frameTimer=0;
        }else this.frameTimer+=deltaTime
    }
    onGround(){
        return this.y+this.height+this.vy >= this.game.ground;
    }
    onFall(){
        return this.vy+this.maxJump == this.maxJump+1;
    }
    onSit(){
        return this.game.keys.includes(83,0);
    }
    onSlide(){
        return this.game.keys.includes(70,0);
    }
    onRollToRight(){
        return this.game.keys.includes(69,0);
    }
    onRollToLeft(){
        return this.game.keys.includes(81,0);
    }
    toLeft(){
        return this.game.keys.includes(65,0);
    }
    toRight(){
        return this.game.keys.includes(68,0);
    }
    toUp(){
        return this.game.keys.includes(87,0);
    }
    toDown(){
        return this.onSit() && !this.onGround();
    }
    notKeyPressed(){
        return this.game.keys.length;
    }
    preventOnGround(){
        this.y = this.game.ground-this.height
        this.vy=0
    }
    preventToLeft(){
        return this.x+this.vx <= 0;
    }
    preventToRight(){
        return this.x+this.vx>=this.game.width-this.width;
    }
    playerControls(){
                
        if(this.onGround() && 
            !this.onSit() &&
            !this.onRollToLeft() &&
            !this.onRollToRight() &&
            !this.onSlide()
        ){ // IDLE RUN
            this.preventOnGround()
            this.on('run')
        }
        if(this.onSit() && this.onGround()){ // DOWN
            this.preventOnGround()
            this.game.speed=0
            this.on('sit')
        }
        
        if(this.toUp() && this.onGround()){ // JUMP
            this.vy = -this.maxJump
            this.on('jump')
        }
        if(this.onFall()&&!this.onGround()){ // FALL
            this.on('fall')
        }
        if(this.onSlide()){ // F
            this.vx+=(this.boost*2)
            if(this.onGround()) this.preventOnGround()
            this.game.speed=10
            this.on('slide')
        }
        if(this.onRollToLeft()){ // Q
            this.vx-=this.boost
            if(this.onGround()) this.preventOnGround()
            this.on('roll')
        }
        if(this.onRollToRight()){ // E
            this.vx+=this.boost
            if(this.onGround()) this.preventOnGround()
            this.game.speed=4
            this.on('roll')
        }
        if(this.toDown()){ // S
            this.vy+=this.boost
            if(this.onGround()) this.preventOnGround()
            this.on('roll')
        }
        if(this.toLeft()) { // LEFT
            this.vx = -this.movementSpeed
        }
        if(this.toRight()) { // RIGHT
            this.frameFps = this.fpsMax
            this.vx = this.movementSpeed
        }else this.frameFps = this.fpsNormal
        if(this.notKeyPressed() == 0 && this.onGround){ // IDLE RUN
            this.vx = 0
        }
        if(this.preventToLeft()){
            this.vx = 0
            this.x = 0
        }
        if(this.preventToRight()){
            this.x=this.game.width-this.width
            this.vx=0
        }

    }
    on(status){
        switch(status){
            case 'idle':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'jump':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'fall':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'run':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'take_hit2':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'sit':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'roll':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'slide':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'dead':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
            case 'take_hit1':
                if(this.status != status){
                    this.frameX = 0
                    this.status = status
                    this.frameMax = STATE[status].frameX
                    this.frameY = STATE[status].frameY
                }
                break;
        }
    }
}