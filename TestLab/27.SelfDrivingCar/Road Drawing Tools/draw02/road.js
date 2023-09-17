class Road{
    constructor(){}
    update(ctx, borders){
        this.draw(ctx, borders)
    }
    draw(ctx, allBorder){
            ctx.beginPath()
            ctx.strokeStyle="white"
            ctx.lineWidth=4
            allBorder.forEach((borders,i) => {
                if(borders.length>0){
                    ctx.moveTo(borders[0].x,borders[0].y)
                    ctx.lineTo(borders[1].x,borders[1].y)
                    for(let i=1; i<borders.length; i++){
                        ctx.moveTo(borders[0].x,borders[0].y)
                        ctx.lineTo(borders[1].x,borders[1].y)
                    }
                }
            ctx.stroke()
            ctx.closePath()
        })
    }
}