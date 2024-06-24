function page1() {
    var tl=gsap.timeline()
tl.from("nav .wizard h1,nav .wizard2 a,nav .wizard2 .btn",{
    y:-20,
    opacity:0,
    ease:"back.out",
    duration:0.6,
    stagger:0.1,
    delay:0.5
})
tl.from(".hero .hero1 h1,.hero .hero1 p,.hero .hero1 .btn",{
    x:-200,
    opacity:0,
    ease:"back.out",
    duration:0.6,
    stagger:0.1,
})
tl.from(".hero .heroimg img ",{
    y:-20,
    scale:2,
    opacity:0,
    ease:"back.out",
    duration:0.6,
    stagger:0.1,
    delay:0.5
},"-=1")
tl.from(".brands  img ",{
    y:-20,
    scale:2,
    opacity:0,
    ease:"back.out",
    duration:0.6,
    stagger:0.1,
})


}


// Page2
function page2() {
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".service",
            scroller:"body",
            start:"top 50%",
            end:"top 30%",
        }
    })
    tl2.from(".service .services",{
        y:-20,
        opacity:0,
        ease:"back.out",
        duration:0.6,
        delay:0.5
    })
    tl2.from(".service .servicebox .line1",{
        y:120,
        opacity:0,
        ease:"power3",
        duration:1,
    })
    tl2.from(".service .servicebox .line2",{
        y:120,
        opacity:0,
        ease:"power3",
        duration:1,
    })
    tl2.from(".service .servicebox .line1 .text, .service .servicebox .line1 .img",{
        y:20,
        opacity:0,
        ease:"back.out",
        stagger:0.2
    },"-=1")
    tl2.from(".service .servicebox .line2 .text, .service .servicebox .line2 .img",{
        y:20,
        opacity:0,
        ease:"back.out",
        stagger:0.2
    })
}


function page3() {
    var tl3=gsap.timeline({
        scrollTrigger:{
            trigger:".pproposal",
            scroller:"body",
            start:"top 10%",
            end:"top 10%",
        }
    })
    tl3.from(".pproposal ",{
        opacity:0,
        ease:"power3.out",
        scale:1.5,
    })
    tl3.from(".pproposal .proposal .proposalText ",{
        x:30,
        opacity:0,
        ease:"back.out",
        stagger:0.2,
        duration:1
    },"join")
    tl3.from(".pproposal .proposal .proposalImg ",{
        x:-30,
        opacity:0,
        ease:"back.out",
        stagger:0.2,
        duration:1
    },"join")
}



page1()
page2()
page3()