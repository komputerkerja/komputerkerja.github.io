import { Game } from './js/game.js'
const button = document.querySelector('button')
window.addEventListener('load', gameInit, false)
button.addEventListener('click', gameInit)

function gameInit(){
        button.classList.add('display_none')
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width=innerWidth
        canvas.height=innerHeight/2
        let lastTime=0
        
        const game = new Game(ctx,canvas.width,canvas.height)
        
        function animate(timeStamp){
            ctx.clearRect(0,0,canvas.width,canvas.height)
            const deltaTime = timeStamp-lastTime
            lastTime=timeStamp
            game.update(deltaTime)
            game.draw()
            if(!game.gameOver) {
                requestAnimationFrame(animate)
            }else{
                ctx.font = "40px Helvetica";
                ctx.textAlign = "center";
                ctx.fillStyle = "black";
                ctx.fillText("GAME OVER",canvas.width/2, canvas.height/2-40)
                ctx.fillStyle = "white";
                ctx.fillText("GAME OVER",canvas.width/2+2, canvas.height/2+2-40)
                button.classList.remove('display_none')
            }
        }
        animate(0)
}    
