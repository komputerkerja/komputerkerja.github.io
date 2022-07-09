class Game{
    static speed = 1;
    static gameOver=false;
    constructor(canvas,ctx){
        this.score =0;
        this.canvas=canvas;
        this.ctx=ctx;
        this.roadSpeed=3;
        this.layers = [
            this.layer1 = new Buildng(this,layer1,this.roadSpeed*0.1),
            this.layer2 = new Buildng(this,layer2,this.roadSpeed*0.2),
            this.layer3 = new Buildng(this,layer3,this.roadSpeed*0.5),
            this.layer4 = new Buildng(this,layer4,this.roadSpeed*0.8),
            this.layer5 = new Buildng(this,layer5,this.roadSpeed),
        ];
        this.offset=100
        this.hero = new Hero(this,this.offset,super_dog);
        this.keys=[];
        this.enemies=[];
        this.enemiesObject={
            0:{
                image: enemy_ghost,
                frameMax: 6
            },
            1:{
                image: enemy_worm,
                frameMax: 6
            },
            2:{
                image: enemy_plant,
                frameMax: 2
            }},
        this.enemySpawnInterval = 100;
        this.enemySpawnTimer = 0;
        this.#addKeyboardEvents();
        this.ui=new Ui(this)
        this.soundBoom = new Audio()
        this.soundBoom.src = "./audio/sound.wav"
        this.particles = []
    }
    update(deltaTime){
        this.layers.forEach(layer=>layer.update())
        this.enemies=this.enemies.filter(enemy=>!enemy.mark)
        this.enemies.forEach(enemy=>enemy.update(deltaTime))
        this.hero.update(deltaTime,this.enemies)
        this.particles=this.particles.filter(particle=>!particle.mark)
        this.particles.forEach(particle=>particle.update())

        if(this.enemySpawnTimer > this.enemySpawnInterval){
            this.#createNewEnemy();
            this.enemySpawnTimer=0
        }else this.enemySpawnTimer++
    }
    draw(){
        this.layers.forEach(layer=>layer.draw())
        this.enemies.forEach(enemy=>enemy.draw())
        this.hero.draw()
        this.ui.draw(this.ctx)
        this.particles.forEach(particle=>particle.draw(this.ctx))
    }
    #createNewEnemy(){
        let num = Math.floor(Math.random()*3)
        if(num==0) this.enemies.push(new GhostEnemy(this,this.enemiesObject[num].image,this.enemiesObject[num].frameMax,this.offset))
        if(num==1) this.enemies.push(new WromEnemy(this,this.enemiesObject[num].image,this.enemiesObject[num].frameMax,this.offset))
        if(num==2) this.enemies.push(new PlantEnemy(this,this.enemiesObject[num].image,this.enemiesObject[num].frameMax,this.offset))
        // this.enemies.push(new PlantEnemy(this,this.enemiesObject[2].image,this.enemiesObject[2].frameMax))
    }
    #addKeyboardEvents(){
        window.onkeydown = e => {
            if(!this.keys.includes(e.keyCode,0)){
                this.keys.push(e.keyCode)
            }
        }
        window.onkeyup = e => {
            if(this.keys.includes(83,0)) Game.speed=1
            if(this.keys.includes(69,0)) Game.speed=1
            if(this.keys.includes(70,0)) Game.speed=1
            this.keys = this.keys.filter(keyCode => keyCode!=e.keyCode)
        }
    }
    playSoundBoom(){
        this.soundBoom.play()
    }
    createDustParticles(x,y){
        this.particles.push(new DustParticles(x,y))
    }
    createFireParticles(x,y){
        this.particles.push(new FireParticles(x,y))
    }
}