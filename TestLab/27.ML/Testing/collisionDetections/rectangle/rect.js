class Rectangle{
    constructor(canvas,x,y,w,h,color="black"){
        this.color=color
        this.changeColor=color
        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;

        this.keys={left:false,right:false,up:false,down:false}

        this.dirX=0;
        this.dirY=0;
        this.grafity=Math.random()+23;
        this.maxSpeed=Math.random()+2.5;

        this.borderTop=0;
        this.borderBottom=canvas.height-this.h
        this.borderLeft=0
        this.borderRight=canvas.width
        this.isJump=false

        this.keys.up=true
        this.keys.right=true
    }
    update(ctx,rects){
        if(this.keys.left) {
            this.dirX--
        }else if(this.keys.right) {
            this.dirX++
        }else{
            this.dirX=0
        }
        if(this.dirX>=this.maxSpeed) this.dirX=this.maxSpeed
        if(this.dirX<=-this.maxSpeed) this.dirX=-this.maxSpeed
        if(this.keys.up && !this.isJump) {
            this.dirY=-this.grafity
            this.isJump=true;
        }
        if(this.y+this.dirY>=this.borderBottom) {
            this.dirY=0
            this.isJump=false
        }      
        if(this.y+this.dirY<this.borderBottom) this.dirY++
        if(this.x<=this.borderLeft) {
            this.keys.right=true;
            this.keys.left=false;
        }
        if(this.x+this.w>=this.borderRight) {
            this.keys.left=true;
            this.keys.right=false;
        }
        this.y+=this.dirY
        this.x+=this.dirX
        this.draw(ctx)
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.changeColor
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fill()
    }
}
