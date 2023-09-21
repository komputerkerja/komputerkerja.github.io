class Road{
    constructor(x,w,laneCount=3,tracks){
        this.x=x;
        this.w=w;
        this.laneCount=laneCount

        const infinity = 100000
        this.left =this.x-this.w/2
        this.right =this.x+this.w/2
        this.top = -infinity
        this.bottom = infinity
        this.borders = tracks

    }

    update(ctx){
        this.draw(ctx)
    }

    getLaneCount(index){
        return  200
    }

    draw(ctx){
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"
        this.borders.forEach(border => {
            ctx.setLineDash([])
            ctx.beginPath()
            ctx.moveTo(border[0].x,border[0].y)
            ctx.lineTo(border[1].x,border[1].y)
            ctx.stroke()
        })
    }

}
