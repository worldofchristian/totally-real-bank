var tl = gsap.timeline({
    defaults: { duration: 0.5, ease: 'none', opacity:0 }
})

var tl2 = gsap.timeline({
    defaults: { duration: .75, delay: 0 } 
});

tl.from('.bigbox',{ y:40 })
    tl2.to('.bigbox', {
        repeat: -1,
        yoyo: true,
        repeatRefresh: true
    })