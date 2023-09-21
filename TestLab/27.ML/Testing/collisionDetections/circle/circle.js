class Circle{
    constructor(x,y,radius, color="red", canvasWidth,canvasHeight){
        this.x=(x*(Math.random()*2))-30;
        this.y=y;
        this.radius=radius*Math.random()
        this.color=color

        this.speedX = Math.random()*4-1
        this.speedY = Math.random()*4-2

        this.left = canvasWidth-canvasWidth   
        this.right = canvasWidth
        this.top = canvasHeight-canvasHeight
        this.bottom = canvasHeight
    }

    update(ctx){

        if((this.x-this.radius/2) <= this.left) this.speedX = Math.abs(this.speedX)
        if((this.x+this.radius/2) >= this.right) this.speedX = this.speedX*-1
        if((this.y-this.radius/2) <= this.top) this.speedY = Math.abs(this.speedY)
        if((this.y+this.radius/2) >= this.bottom) this.speedY = this.speedY*-1

        this.x+=this.speedX
        this.y+=this.speedY
        this.draw(ctx)
    }

    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
        ctx.fill()
    }
}
