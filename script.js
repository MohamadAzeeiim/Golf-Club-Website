var crsr = document.querySelector("#cursor")
var crsrbg = document.querySelector("#cursor-bg")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x -15 +"px"
    crsr.style.top = dets.y -15 +"px"
    crsrbg.style.left = dets.x -150 +"px"
    crsrbg.style.top = dets.y -150 +"px"
})

var navh4 = document.querySelectorAll("#nav h4")
navh4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition = "all ease 0.4s"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -80%",
        scrub: 2
    }
}) 


gsap.from("#about-us, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us", 
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})


gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 2
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 2
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 70%",
        end: "top 75%",
        scrub: 3
    }
})
