const time =gsap.timeline({});
let menu = document.querySelector("#navbar i")
let cross = document.querySelector("#full i")
time.to("#full",{
    right:0,
    duration:0.8
})
time.from("#full h4",{
    x:150,
    duration:0.5,
    stagger:0.28,
    opacity:0
})
time.from("#full i",{
    opacity:0
})
time.pause()
menu.addEventListener("click",()=>{
    time.play()
})
cross.addEventListener("click",()=>{
    time.reverse()
})