TweenMax.from('.logo',{
    delay:1,
    duration: 1,
    x:"-100%",
    ease:"power4.easeInOut"
});

TweenMax.from('.logo span h1',{
    delay:1.4,
    duration: .5,
    y:"100%",
    ease:"power4.easeInOut",
});

TweenMax.from('.logo p',{
    delay:1.7,
    duration: .5,
    opacity:0,
    y:"20px",
    ease:"power4.easeInOut"
});

TweenMax.from('.menu-link ul li',{
    delay:1.7,
    duration: .5,
    opacity:0,
    x:"-50px",
    stagger:.2,
    ease:"power4.easeInOut"
});
TweenMax.from('.Setting',{
    delay:1.7,
    duration: .5,
    opacity:0,
    x:"-50px",
    stagger:.2,
    ease:"power4.easeInOut"
});

TweenMax.from('.topbar',{
    delay:2,
    duration: .5,
    opacity:0,
    y:"-50px",
    stagger:.2,
    ease:"power4.easeInOut"
});

TweenMax.from('.title h1',{
    delay:2.3,
    duration: .5,
    y:"100px",
    stagger:.2,
    ease:"power4.easeInOut"
});

TweenMax.from('.title2 h2',{
    delay:2.5,
    duration: .5,
    x:"-110%",
    stagger:.2,
    ease:"elastic.easeInOut"
});

TweenMax.from('.main-content p',{
    delay:2.5,
    duration: .5,
    y:"20px",
    opacity:0,
    stagger:.2,
    ease:"elastic.easeInOut"
});
TweenMax.from('.main-content button',{
    delay:2.5,
    duration: .5,
    opacity:0,
    ease:"elastic.easeInOut"
});

TweenMax.from('.person',{
    delay:2.8,
    duration: 1,
    opacity:0,
    x:"100px",
    ease:"elastic.easeInOut"
});

TweenMax.from('.media ul li',{
    delay:2.8,
    duration: 1,
    opacity:0,
    y:"100px",
    stagger:.2,
    ease:"elastic.easeInOut"
});

TweenMax.to('.lay1',{
    delay:.5,
    duration: .5,
    x:"-100vw",
    ease:"elastic.easeInOut"
});
TweenMax.to('.lay2',{
    delay:.5,
    duration: .5,
    x:"100vw",
    ease:"elastic.easeInOut"
});