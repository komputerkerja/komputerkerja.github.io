class Road{
    constructor(x,w,laneCount=3){
        this.x=x;
        this.w=w;
        this.laneCount=laneCount
        const infitiy = 1000000
        this.left = x-(w/2)
        this.right = x+(w/2)
        this.top = -infitiy
        this.bottom = infitiy

        const leftTop = {x:this.left,y:this.top}
        const rightTop = {x:this.right,y:this.top}
        const leftBottom = {x:this.left,y:this.bottom}
        const rightBottom = {x:this.right,y:this.bottom}
        this.borders = [
            [leftTop, leftBottom],
            [rightTop, rightBottom]
        ]
    }
    getLaneCenter(laneIndex){
        const laneWidth = (this.w/this.laneCount)
        return  (this.left + laneWidth/2) +
                (Math.min(laneIndex,this.laneCount-1)*laneWidth)
    }
    update(deltaTime, ctx){
        
        this.draw(ctx)
    }
    draw(ctx){
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"
        for(let i = 0; i <= this.laneCount; i++){
            const xLip = LIP(this.left,this.right,i/this.laneCount)
            ctx.setLineDash([20,20])
            ctx.beginPath()
            ctx.moveTo(xLip,this.top)
            ctx.lineTo(xLip,this.bottom)
            ctx.stroke()
        }
        this.borders.forEach(border => {
            ctx.setLineDash([])
            ctx.beginPath()
            ctx.moveTo(border[0].x,border[0].y)
            ctx.lineTo(border[1].x,border[1].y)
            ctx.stroke()
        })
    }
}

