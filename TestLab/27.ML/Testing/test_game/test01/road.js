class Road{
    constructor(x,w,laneCount=3){
        this.w=w;
        this.x=x;
        this.laneCount=laneCount;
        const infinity=1000000;
        this.left=this.x-this.w/2
        this.right=this.x+this.w/2;
        this.top=-infinity;
        this.bottom=infinity;
        this.borders=[
            [{x:this.left,y:this.top},{x:this.left,y:this.bottom}],
            [{x:this.right,y:this.top},{x:this.right,y:this.bottom}]
        ]
    }

    update(ctx){
        this.draw(ctx)
    }

    draw(ctx){
        ctx.beginPath()
        ctx.lineWidth=5
        ctx.strokeStyle = "white"
        ctx.setLineDash([20,20])
        for(let i =0; i < this.laneCount; i++){
            const x = LIP(this.left,this.right,i/this.laneCount)
            ctx.moveTo(x,this.top)
            ctx.lineTo(x,this.bottom)
            ctx.stroke()
        }
        ctx.beginPath()
        ctx.setLineDash([])
        this.borders.forEach(border => {
            ctx.moveTo(border[0].x,border[0].y)
            ctx.lineTo(border[1].x,border[1].y)
            ctx.stroke()
        })
    }
}