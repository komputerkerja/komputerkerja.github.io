document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width=innerWidth
    canvas.height=innerHeight
    let lastTime=0
    const game = new Game(canvas,ctx)
    function animate(timeStamp){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        const deltaTime = timeStamp-lastTime
        lastTime=timeStamp
        game.update(deltaTime)
        game.draw()
        if(!Game.gameOver) {
            requestAnimationFrame(animate)
        }else {
            ctx.font = "40px Helvetica";
            ctx.textAlign = "center";
            ctx.fillStyle = "black";
            ctx.fillText("GAME OVER",canvas.width/2, canvas.height/2-40)
            ctx.fillStyle = "white";
            ctx.fillText("GAME OVER",canvas.width/2+2, canvas.height/2+2-40)
        }
    }
    animate(0)
})
