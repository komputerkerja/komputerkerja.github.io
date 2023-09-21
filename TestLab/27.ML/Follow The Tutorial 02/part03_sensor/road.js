class Road{
    constructor(x,w,laneCount=3){
        this.x=x;
        this.w=w;
        this.laneCount=laneCount;
        const infinity=1000000;
        this.left=this.x-(this.w/2);
        this.right=this.x+(this.w/2);
        this.bottom=infinity
        this.top=-infinity;
        this.borders = [
            [{x:this.left,y:this.top},{x:this.left,y:this.bottom}],
            [{x:this.right,y:this.top},{x:this.right,y:this.bottom}]
        ]
    }
    getLaneIndex(index){
        const laneWidth = (this.w/this.laneCount)
        return (this.left+laneWidth/2)+(laneWidth*Math.min(index,this.laneCount-1))
    }
    update(ctx){
        this.draw(ctx)
    }
    draw(ctx){
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"
        ctx.setLineDash([20,20])
        for(let i=0; i<this.laneCount; i++){
            const lane = LIP(this.left,this.right,i/this.laneCount)
            ctx.beginPath()
            ctx.moveTo(lane, this.top)
            ctx.lineTo(lane, this.bottom)
            ctx.stroke()  
            ctx.closePath()  
        }
        ctx.setLineDash([0,0])
        this.borders.forEach(border => {
            ctx.beginPath()
            ctx.moveTo(border[0].x, border[0].y)
            ctx.lineTo(border[1].x, border[1].y)
            ctx.stroke()
            ctx.closePath()
        })
    }
}
