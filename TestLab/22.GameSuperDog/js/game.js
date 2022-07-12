import { Building } from "./building.js";
import { Hero } from "./hero.js";
import { FlyingEnemy, GroundEnemy, PlantEnemy } from "./enemy.js";
import { UI } from "./Ui.js";
import { DustParticle, FireParticle } from "./particle.js";

export class Game {
  constructor(ctx, width, height) {
    this.gameOver=false;
    this.score=0;
    this.ui=new UI(this)
    this.keys = [];
    this.#addKeyboardEvents();
    this.speed = 1;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.ground = this.height / 1.2;
    this.hero = new Hero({
      game: this,
      sprites: {
        image: super_dog,
        hFrame: 12,
        vFrame: 10,
        offsetW: 2,
        offsetH: 0,
      },
    });
    this.slideSpeed=10
    this.slides = [
      new Building(this, layer1, this.slideSpeed*0.02),
      new Building(this, layer2, this.slideSpeed*0.08),
      new Building(this, layer3, this.slideSpeed*0.12),
      new Building(this, layer4, this.slideSpeed*0.15),
      new Building(this, layer5, this.slideSpeed*0.20),
    ];
    this.enemies = [];
    this.enemiesInterval = 60;
    this.enemiesTimer = 0;
    this.particles = [];
  }
  draw() {
    this.slides.forEach(slide=>slide.draw(this.ctx))
    this.hero.draw(this.ctx);
    this.enemies.forEach((enemy) => enemy.draw(this.ctx));
    this.ui.draw(this.ctx);
    this.particles.forEach((particle) => particle.draw(this.ctx));
  }
  update(deltaTime) {
    this.slides.forEach(slide=>slide.update())
    this.hero.update(deltaTime);
    this.enemies.forEach((enemy) => enemy.update(deltaTime));
    this.enemies=this.enemies.filter((enemy) => !enemy.mark);
    this.particles.forEach((particle) => particle.update(deltaTime));
    this.particles=this.particles.filter((particle) => !particle.mark);
    this.#createEnemy()
    // console.log(this.particles)
  }
  #addKeyboardEvents() {
    window.onkeydown = (e) => {
      if (!this.keys.includes(e.keyCode, 0)) {
        this.keys.push(e.keyCode);
      }
    };
    window.onkeyup = (e) => {
      if (this.keys.includes(83, 0)) this.speed = 1;
      if (this.keys.includes(69, 0)) this.speed = 1;
      if (this.keys.includes(70, 0)) this.speed = 1;
      this.keys = this.keys.filter((keyCode) => keyCode != e.keyCode);
    };
  }
  #createEnemy() {
    if (this.enemiesTimer >= this.enemiesInterval) {
      const enemyModel = Math.floor(Math.random() * 3);
      if(enemyModel==0)this.enemies.push( new FlyingEnemy(this, {image: enemy_bad2, frameMax: 6}));
      if(enemyModel==1)this.enemies.push( new GroundEnemy(this, {image: enemy_worm, frameMax: 6}));
      if(enemyModel==2)this.enemies.push( new PlantEnemy(this, {image: enemy_plant, frameMax: 2}));
      this.enemiesTimer = 0;
    } else this.enemiesTimer++;
  }
  createDustParticle(x,y){
    this.particles.push(new DustParticle(x,y))
  }
  createFireParticle(x,y){
    for(let i = 0; i<5; i++){
      this.particles.push(new FireParticle(x,y))
    }
  }
}
