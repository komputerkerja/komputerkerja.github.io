const canvas = document.querySelector('canvas')
const canvasWidth = canvas.width = window.innerWidth * 0.9
const canvasHeight = canvas.height = window.innerHeight * 0.6

const ctx = canvas.getContext('2d')
const circles = []
for (let i = 0; i < 10; i++) {
    circles.push(new Circle(canvasWidth / 2, canvasHeight / 2, 50, getRandomHexColor(), canvasWidth, canvasHeight))
}

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    circles.forEach(circle => {
        circles.forEach(otherCircle => {
            if (circle != otherCircle) {
                const dx = circle.x - otherCircle.x
                const dy = circle.y - otherCircle.y
                const distance = Math.sqrt((dx * dx) + (dy * dy))
                const sumOffRadius = circle.radius + otherCircle.radius
                if (distance < sumOffRadius) {
                    // circle.color=getRandomHexColor()
                }
            }
        })
        circle.update(ctx)
    })
    requestAnimationFrame(animate)
}

animate(0)


function getRandomHexColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Convert the RGB values to a hex string
    const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
    return hexColor;
}
