const circleType = new CircleType(document.getElementById('rotated'))

document.addEventListener('DOMContentLoaded', function () {
 var splide = new Splide('.splide', {padding: '5rem',  pagination: 'false'});
 splide.mount();
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);

let bodyScrollBar;

const select = (e) => document.querySelector(e);
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
  duration: .3,
  opacity: 1,
  x: 0,
  ease: "power1.inOut",
  stagger: {
   each: .4,
   onComplete: function () {
    gsap.to(this.targets()[0], {
     opacity: 0,
     x: '60',
     duration: 0.6,
     ease: Power3.easeInOut
    })
   }
  },
  onComplete: function () {
   gsap.to(".loading", 1, {
    x: '100',
    opacity: 0,
    ease: Power3.easeInOut,
    onCompleteAll: (function () {
     select('.loading').remove()
     gsap.to('#viewport', {
      opacity: 1
     })
    })
   }, 1.2)
  }
 }, 2);


}

animationInit()