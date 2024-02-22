let crsr = document.querySelector('#cursor');
let blur = document.querySelector('#cursor-blur');

document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
});

let h4All = document.querySelectorAll("#nav h4");
h4All.forEach( (elem) => {
    elem.addEventListener("mouseenter", () => {
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11E";
        crsr.style.backgroundColor = "#95c11E";
    })

})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from ("#about-us img,#about-us-in", {
    y:70,
    opacity:0,
    duration: 1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start:"top 70%",
        end:"top 58%",
        scrub:4
    }

})

gsap.from (".cards", {
    scale:0.9,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1", {
    y:-40,
    x:-40,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 85%",
        end:"top 75%",
        scrub:3
    }
})