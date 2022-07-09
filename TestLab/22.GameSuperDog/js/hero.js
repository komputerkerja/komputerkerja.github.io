class Hero{
    constructor(game,offsetY,super_dog){
        this.game=game;
        this.image=super_dog;
        this.spriteWidth=(this.image.width/12)+2;
        this.spriteHeight=this.image.height/10;
        this.width=100;
        this.height=100;
        this.x=0;
        this.offsetY=offsetY
        this.bottom=this.game.canvas.height-this.height-this.offsetY
        this.y=0;
        this.vx=0;
        this.vy=0;

        this.sprites = {
            idle: {
                status: 'idle',
                frameX: 7,
                frameY: 0,
            },
            jump: {
                status: 'jump',
                frameX: 7,
                frameY: 1
            },
            fall: {
                status: 'fall',
                frameX: 7,
                frameY: 2
            },
            run: {
                status: 'run',
                frameX: 9,
                frameY: 3
            },
            take_hit2: {
                status: 'take_hit2',
                frameX: 11,
                frameY: 4
            },
            sit: {
                status: 'sit',
                frameX: 5,
                frameY: 5
            },
            roll: {
                status: 'roll',
                frameX: 7,
                frameY: 6
            },
            slide: {
                status: 'slide',
                frameX: 7,
                frameY: 7
            },
            dead: {
                status: 'dead',
                frameX: 12,
                frameY: 8
            },
            take_hit1: {
                status: 'take_hit1',
                frameX: 4,
                frameY: 9
            },
        }
        this.state="run"

        this.frameX=0;
        this.frameY=this.sprites[this.state].frameY;
        this.frameMax=this.sprites[this.state].frameX;

        this.frameInterval=50;
        this.frameTimer=0;

        this.movementSpeed = 4;
        this.maxSpeed = 5;
        this.jumpSpeed = 20;
        this.weight = 0.8;
        this.isJump=false;
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
            this.frameY*this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height)
    }
    update(deltaTime,enemies){
        // Update Frames
        if(this.frameTimer > this.frameInterval){
            if(this.frameX >= (this.sprites[this.state].frameX)-1) this.frameX = 0
            else this.frameX++
            this.frameTimer = 0;
        }this.frameTimer += deltaTime

        this.vy+=this.weight;
        
        if(this.game.keys.includes(69,0)){ // E
                Game.speed += 1
                this.on('roll', ()=>this.state="roll")
                this.vy=0
                this.vx+=(this.movementSpeed)
        }else if(this.game.keys.includes(81,0)){ // Q
            if(this.onGround()){
                this.on('roll', ()=>this.state="roll")
                this.vy=0
                this.vx+=(this.movementSpeed)
            }else{
                this.on('roll', ()=>this.state="roll")
                this.vy+=(this.movementSpeed)
                this.vx=0
            }
        }else if(this.onGround()){
            if(this.game.keys.includes(70,0)){ // F
                Game.speed += 1
                this.on('slide', ()=>this.state="slide")
                this.vy=0
                this.vx=(this.movementSpeed*2)
            }else if(this.game.keys.includes(83,0)){ // SIT
                Game.speed=0
                this.y=this.bottom
                this.vy=0
                this.vx=0
                this.isJump=false
                this.on('sit', ()=>this.state="sit")
            }else if(this.game.keys.length==0){ // IDLE RUN
                this.y=this.bottom
                this.vy=0
                this.vx=0
                this.isJump=false
                this.on('run', ()=>this.state="run")
            }else if(this.game.keys.includes(87,0) && !this.isJump){ // W
                this.vy-=this.jumpSpeed
                this.isJump=true
                this.on('jump', ()=>this.state="jump")
            }else{ // IDLE RUN
                this.y=this.bottom
                this.vy=0
                this.isJump=false
                this.on('run', ()=>this.state="run")
            }
        }else if(this.onFall()){
            this.on('fall', ()=>this.state="fall")
        }

        if(this.game.keys.includes(65,0)){ // A
            this.vx=-this.movementSpeed
        }else if(this.game.keys.includes(68,0)){ // D
            this.vx=this.movementSpeed
        }

        this.x+=this.vx;
        this.y+=this.vy;
        if(this.x+this.width>this.game.canvas.width) this.x=this.game.canvas.width-this.width
        if(this.x<0) this.x=0

        // COLLISION DETECTION
        enemies.forEach((enemy) => {
            const dx = enemy.x - this.x
            const dy = enemy.y - this.y
            const distance = Math.sqrt((dx*dx)+(dy*dy))
            if(distance<(this.width/3)+(enemy.width/3)) {
                if(this.state=='slide' || this.state=='roll'){
                    this.game.playSoundBoom()
                    this.game.enemies=this.game.enemies.filter(e => e!= enemy)
                    this.game.score++
                } else Game.gameOver=true;
            }    
        });

        // DUST
        if(this.state=='run') this.game.createDustParticles(this.x+this.width/2,this.y+this.height)
        if(this.state=='slide' || this.state=='roll') this.game.createFireParticles(this.x+this.width/2,this.y+this.height)
    }
    onGround(){
        return this.y > this.bottom
    }
    onFall(){
        return Math.floor(this.y)<=(this.bottom-this.height-this.height-this.jumpSpeed)
    }
    on(state, fnc){
        switch(state){
            case 'idle':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'jump':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'fall':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'run':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'take_hit2':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'sit':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'roll':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'slide':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'dead':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
            case 'take_hit1':
                if(this.state != this.sprites[state].status){
                    this.frameY=this.sprites[state].frameY;
                    this.frameX=0
                    fnc()
                }
                break;
        }

    }
}