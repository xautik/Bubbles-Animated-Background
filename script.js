let msf = document.getElementById("msf")
//detect touchscreen

function isTouchdevice(){
    try{
        document.createEvent("TouchEvent")
        return true
    } catch (e) {
        return false
    }
}

const move = (e) => {
    try{
        var x = !isTouchdevice() ? e.pageX : e.touches[0].pageX
        var y = !isTouchdevice() ? e.pageY : e.touches[0].pageY
    } catch (e){}

    msf.style.left = x + "px"
    msf.style.top = y + "px"
}

document.addEventListener("mousemove", (e) => {
    move(e)
})

document.addEventListener("touchmove", (e) => {
    move(e)
})


/*
let curX = 0
let cutY = 0
let tgX = 0
let tgY = 0

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive')

    function move() {
        curX += (tgX - curX) / 20
        curY += (tgY - curY) / 20
        interBubble.style.transform = 'translate(${Math.round(curx)}px, ${Math.round(curY)}px)'
        requestAnimationFrame(() => {
            move();
        })
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX
        tgY = event.clientY
    })

    move()
})*/