function circleMotion(xscale, yscale) {
    window.addEventListener("mousemove", function (detail) {
        document.querySelector(".mincircle").style.transform = `translate(${detail.clientX}px , ${detail.clientY}px)  scale(${xscale},${yscale})
        `;
    })
}
function circlechapta() {
    var xscale = 1;
    var yscale = 1;
    var xpre = 0;
    var ypre = 0;
    window.addEventListener("mousemove", function (dets) {
        var xdiff = dets.clientX - xpre;
        var ydiff = dets.clientY - ypre;
        xpre = dets.clientX;
        ypre = dets.clientY;
        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);
        circleMotion(xscale, yscale);




    })

}

circleMotion();

circlechapta()
  document.querySelectorAll(".first").forEach(
    function (first) {
        var diff = 0;
        var rotate = 0;
        var diffrot = 0;

        first.addEventListener("mousemove", function (dets) {

            var diff = dets.clientY - first.getBoundingClientRect().top
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(first.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                left: dets.clientX,
                top: diff,
                rotate: gsap.utils.clamp(-20, 20, diffrot) * 0.8
            })
            // gsap.to(first.querySelector(".h"), {
            //     opacity:.2,
            //     ease: Power3,
            // })

        })
        first.addEventListener("mouseleave", function (dets) {
            gsap.to(first.querySelector("img"), {
                opacity: 0,
                ease: Power3,

            })
            // gsap.to(first.querySelector(".h"), {
            //     opacity: .6,
            //     ease: Power3,
            //     left: 0,
            // })

        })

    })

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var t=gsap.timeline();




t.from(".logo-img",{
    y: '-70',
    opacity: 0,
    duration: 1,
    stagger: .2,



})
t.from(".menu h3",{
    y: '-40',
    opacity: 0,
    duration: 1.5,
    stagger: .2,


})

t.from(".name",{
    x: '-170',
    opacity: 0,
    duration: .5,

})
t.from(".h11 ,.h12",{
    x: '-1700',
    opacity: 0,
    duration: 2,
stagger:1.5,

})



t.from(".my-pic",{
    scrollTrigger:
    {trigger:    ".main2  ",
    scroller:"body",
    start:"top 60%",
    end:"top 40%",
    scrub:1

},

    scale:0,
    rotate:360,
    opacity: 0,
    duration: 1,


})

t.from(".about",{
    scrollTrigger:
    {trigger:    ".main2 ",
    scroller:"body",
start:"top 60%",
end:"top 40%",

scrub:1
    },
    x: '500',
    opacity: 0,
    duration: 1,
})

t.from(".main8 .this",{
    scrollTrigger:
    {trigger:    ".main8  ",
    scroller:"body",
    start:"top 80%",
    end:"top 50%",
    scrub:.5

},

    y: '200',
    opacity: 0,
    duration: 2,
    stagger:.7


})


t.from(".main3 h1",{
    scrollTrigger:
    {trigger:    ".main3  ",
    scroller:"body",
    start:"top 60%",
    end:"top 40%",
    scrub:1

},

    x: '-1500',
    opacity: 0,
    duration: 3,


})
t.from(".skill li",{
    scrollTrigger:
    {trigger:    ".skill li ",
    scroller:"body",
    start:"top 30%",
    // end:"top 40%",
    scrub:1

},

    x: '-1500',
    opacity: 0,
    duration: 4,
stagger:.7

})
t.from("#training",{
    scrollTrigger:
    {trigger:    "#training  ",
    scroller:"body",
    start:"top 60%",
    end:"top 40%",
    scrub:1

},


    x: '-1500',
    opacity: 0,
    duration: 3,


})
// t.from(".main4 .first",{
//     scrollTrigger:
//     {trigger:    ".main4 .first ",
//     scroller:"body",
//     start:"top 80%",
//     end:"top 10%",
//     scrub:1,



// },

// x: '-1500',
// opacity: 0,
// duration: 4,

// stagger:.9


// })




t.from(".project",{
    scrollTrigger:
    {trigger:    ".project ",
    scroller:"body",
    start:"top 60%",
    end:"top 10%",
    scrub:1,



},


    x: '-1500',
    opacity: 0,
    duration: 2,


})
t.from(".sec1 .pro",{
    scrollTrigger:
    {trigger:    ".sec1 .pro ",
    scroller:"body",
    start:"top 60%",
    end:"top 40%",
    scrub:1,



},

scale:0,
rotate:180,
opacity: 0,
duration: 1.7,
stagger:.5

})
t.from(".sec2 .pro",{
    scrollTrigger:
    {trigger:    ".sec2 .pro ",
    scroller:"body",
    start:"top 60%",
    end:"top 40%",
    scrub:1,



},

    scale:0,
    rotate:180,
    opacity: 0,
    duration: 1.7,
    stagger:.5
    
    })
    t.from(".sec3 .pro",{
        scrollTrigger:
        {trigger:    ".sec3 .pro ",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        scrub:1,
    
    
    
    },
    
        scale:0,
        rotate:180,
        opacity: 0,
        duration: 1.7,
        stagger:.5
        
        })
            

    t.from(".main7  h3",{
        scrollTrigger:
        {trigger:    ".main7 h3",
        scroller:"body",
        start:"top 100%"
    },
    
        y:600,
        opacity: 0,
        duration: 1.7,
        stagger:.5
        
        })

        t.to(".btn3",{
           y:-70,
           duration:1,
           repeat:-1,
           delay:1,
           yoyo:1
            
            })
    
         
             // t.from("#other",{
        // //     scrollTrigger:
        // //     {trigger: "#other",
        // //     scroller:"body",
        // //     start:"top 60%",
        // //     end:"top 40%",
        // //     scrub:1,
        // // },
        //     x: '-1500',
        //     opacity: 0,
        //     duration: 2,
        
        
        // })
        
//     t.from(".other-list  dt ,dd",{
//         scrollTrigger:
//         {trigger:    ".other-list ",
//         scroller:"body",
//         start:"top 70%",
//         // end:"top 20%",
//         scrub:1,
    
    
    
//     },
    
// repeat:0,
//         x:1200,
//         opacity: 0,
//         duration: 4,
//         stagger:.7
        
//         })
