export class UI{
    constructor(game){
        this.game=game;
    }
    draw(ctx){
        ctx.font = "20px Helvetica";
        ctx.textAlign = "left";
        ctx.fillStyle = "black";
        ctx.fillText("Score : " + this.game.score,20, 50)
        ctx.fillStyle = "white";
        ctx.fillText("Score : " + this.game.score,22, 50)
    }
}