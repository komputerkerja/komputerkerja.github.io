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
            if(borders){
                if(borders.length!=0) {
                    ctx.moveTo(borders[0].x,borders[0].y)
                }
                for(let i=1; i<borders.length; i++){
                    ctx.lineTo(borders[i].x,borders[i].y)
                }
            }
        })
        ctx.stroke()
        ctx.closePath()
    }
}