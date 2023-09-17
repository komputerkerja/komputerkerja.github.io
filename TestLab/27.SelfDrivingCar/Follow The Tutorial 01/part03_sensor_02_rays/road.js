class Road{
    constructor(x,w,laneCount=3){
        this.x=x;
        this.w=w;
        this.laneCount=laneCount

        const infinity = 100000
        this.left =this.x-this.w/2
        this.right =this.x+this.w/2
        this.top = -infinity
        this.bottom = infinity
        this.borders = [
            [{x: this.left, y: this.top}, {x: this.left, y: this.bottom}],
            [{x: this.right, y: this.top}, {x: this.right, y: this.bottom}]
        ]

    }

    update(deltaTime, ctx){

        this.draw(ctx)
    }

    getLaneCount(index){
        const laneWidth = this.w/this.laneCount
        return  (this.left+laneWidth/2) +
                (laneWidth * Math.min(this.laneCount-1,index))
    }

    draw(ctx){
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"

        for(let i =0; i < this.laneCount; i++){
            const x = LIP(this.left,this.right,i/this.laneCount)
            ctx.setLineDash([20,20])
            ctx.beginPath()
            ctx.moveTo(x,this.top)
            ctx.lineTo(x,this.bottom)
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
