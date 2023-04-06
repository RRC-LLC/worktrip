const canvas = document.createElement("canvas")
const sandbox = new GlslCanvas(canvas)

document.querySelector(".info-container").appendChild(canvas)

canvas.width="100%"
canvas.height="100%"
canvas.style.position="absolute"
canvas.style.top="0"
canvas.style.left="0"
canvas.style.width = "100%"
canvas.style.height = "100%"


sandbox.load(frag[0])
