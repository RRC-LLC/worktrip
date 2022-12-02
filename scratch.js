const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")

let isMouseDown = false
let isTouch = false

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    isTouch = true
  }else{
    // false for not mobile device
    isTouch = false
  }

const growCursor = function () {
    cursor.classList.add("is-down")
}

const shrinkCursor = function () {
    cursor.classList.remove("is-down")
}

const moveCursor = function (x, y) {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}

const setupCanvas = function (canvas) {
    const bodyTag = document.querySelector("body")

    const w = window.innerWidth
    const h = bodyTag.offsetHeight
    const dpi = window.devicePixelRatio

    canvas.width = w *dpi
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"

    // canvas context
    const context = canvas.getContext("2d")
    context.scale(dpi, dpi)

    context.fillStyle = "#000000"
    context.strokeStyle = "#ffffff"

    context.lineWidth = 80
    context.lineCap = "round"
    context.lineJoin = "round"

    context.shadowBlur = 10
    context.shadowColor = context.strokeStyle

    context.rect(0, 0, w, h)
    context.fill()

}

const startDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")
    
    context.moveTo(x, y)
    context.beginPath()
}


const moveDraw = function (canvas, x, y) {
    const context = canvas.getContext("2d")

    if (isMouseDown) {
        context.lineTo(x, y)
        context.stroke()
    }

}


setupCanvas(canvasTag)

if (isTouch) {

    cursor.style.display = "none"
    
    document.addEventListener("touchstart", function (event) {
        isMouseDown = true
        growCursor()
        startDraw(canvasTag, event.pageX, event.pageY)
    })
    
    document.addEventListener("touchend", function () {
        isMouseDown = false
        shrinkCursor()
    })
    
    document.addEventListener("touchmove", function (event) {
        moveCursor(event.pageX, event.pageY)
        moveDraw(canvasTag, event.pageX, event.pageY)
    })


} else {

    document.addEventListener("mousedown", function (event) {
        isMouseDown = true
        growCursor()
        startDraw(canvasTag, event.pageX, event.pageY)
    })
    
    document.addEventListener("mouseup", function () {
        isMouseDown = false
        shrinkCursor()
    })
    
    document.addEventListener("mousemove", function (event) {
        moveCursor(event.pageX, event.pageY)
        moveDraw(canvasTag, event.pageX, event.pageY)
    })

}



window.addEventListener("resize", function () {
    setupCanvas(canvasTag)
})