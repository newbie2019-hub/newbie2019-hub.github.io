gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);

let bodyScrollBar;
const circleType = new CircleType(document.getElementById('rotated'))
const select = (e) => document.querySelector(e);
const navLinks = gsap.utils.toArray('nav ul li a')

bodyScrollBar = Scrollbar.init(select('#viewport'), {
 damping: 0.1,
});


bodyScrollBar.addListener((s) => {
 currentScroll = s.offset.y
 let offset = s.offset.y * 0.5
 document.getElementById("circular-text").style.transform = `rotate(${ offset }deg)`

 gsap.to('#about-first', { x: (s.offset.y * 0.2) - 400 })
 gsap.to('#about-second', { x: ((s.offset.y * 0.2) * -1) })

 gsap.to('#stack-first', { x: (s.offset.y * 0.2) - 500 })
 gsap.to('#stack-second', { x: ((s.offset.y * 0.2) * -1) })
})


function animationInit() {
 TweenMax.staggerTo(".loading", 0.5, {
  opacity: 1,
  ease: Power3.easeInOut,
 }, 1)


 TweenMax.staggerFrom(".kamusta", 0.8, {
  x: '-40',
  opacity: 0,
  ease: Power3.easeInOut,
 }, 1.2)

 TweenMax.staggerTo(".kamusta", 0.8, {
  x: '40',
  opacity: 0,
  delay: 1.4,
  ease: Power3.easeInOut,
 }, 1.5)


 /**
  *  Stagger Animation
  *  - animates a set of elements
  *  after a delay
  * 
  */
 gsap.fromTo(".intro", {
  x: '-50',
  opacity: 0,
 }, {
  duration: .2,
  opacity: 1,
  x: 0,
  ease: "power1.inOut",
  stagger: {
   each: .15,
   onComplete: function () {
    gsap.to(this.targets()[0], {
     opacity: 0,
     x: '60',
     duration: 0.22,
     ease: Power3.easeInOut
    })
   }
  },
  onComplete: function () {
   gsap.to(".loading", 1, {
    x: '100vw',
    // opacity: 0,
    ease: Power3.easeInOut,
    onComplete: (function () {
     select('.loading').remove()
     gsap.to('#viewport', {
      opacity: 1
     })
    })
   }, 1.5)
  }
 }, 2);
}

/**
 *  Follows mouse cursor
 *  
 */
let circle = document.getElementById('mouse')

function moveMouse(e) {
 gsap.to(circle, 0.4, {
  x: e.pageX - 30,
  y: e.pageY - 30,
 })
}


function createCursorHover(e) {

 if (e.type === 'mouseenter') {
  circle.classList.add('mouse-interaction')
 }
 else if (e.type === 'mouseleave') {
  circle.classList.remove('mouse-interaction')
 }
}

document.addEventListener('DOMContentLoaded', function () {
 var splide = new Splide('.splide', { padding: '5rem', pagination: 'false' });
 splide.mount();

 if (JSON.parse(localStorage.getItem('darkMode'))) {
  document.documentElement.classList.add('dark')
  document.getElementById('toggle').setAttribute('checked', true)
 }

 document.getElementById('toggle').addEventListener('change', function () {
  if (this.checked) {
   localStorage.setItem('darkMode', true)
   document.documentElement.classList.add('dark')
  } else {
   localStorage.setItem('darkMode', false)
   document.documentElement.classList.remove('dark')
  }
 })

 navLinks.forEach(link => {
  link.addEventListener('mouseenter', createCursorHover);
  link.addEventListener('mouseleave', createCursorHover);
 });

 document.addEventListener('mousemove', function (e) {
  moveMouse(e)
 })
});

animationInit()