gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollToPlugin);

let bodyScrollBar;
let mouseSize = 30;
const circleType = new CircleType(document.getElementById('rotated'))
const select = (e) => document.querySelector(e);

const navLinks = gsap.utils.toArray('nav ul li a')
const projectCards = gsap.utils.toArray('.project-card')
const btnNavigation = gsap.utils.toArray('.btn-navigation')


var timeline_navigation = gsap.timeline({ paused: "true" })

timeline_navigation.fromTo(".menu", { css: { transform: 'translateX(-100%, 0)' } }, { duration: .65, x: "0%", ease: Expo.easeInOut, repeatRefresh: true })
timeline_navigation.fromTo(".li", { y: "-100%", opacity: 0 }, { duration: .5, opacity: 1, y: '0%', stagger: 0.25 });
timeline_navigation.fromTo(".right-side", { opacity: 0 }, { duration: 1, opacity: 1, stagger: { amount: 1 }, ease: Expo.easeOut }, "-=0.4");

bodyScrollBar = Scrollbar.init(select('#viewport'), {
  damping: 0.1
});

bodyScrollBar.addListener((s) => {
  currentScroll = s.offset.y
  let offset = s.offset.y * 0.5
  // document.getElementById("circular-text").style.transform = `rotate(${ offset }deg)`

  gsap.to('#about-first', { x: (s.offset.y * 0.2) - 400 })
  gsap.to('#about-second', { x: ((s.offset.y * 0.2) * -1) })

  gsap.to('#stack-first', { x: (s.offset.y * 0.2) - 500 })
  gsap.to('#stack-second', { x: ((s.offset.y * 0.2) * -1) })
})

bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value; // setter
    }
    return bodyScrollBar.scrollTop;    // getter
  }
});



function animationInit() {
  TweenMax.staggerTo(".loading", 0.5, {
    opacity: 1,
    ease: Power3.easeInOut,
  }, 1)


  TweenMax.staggerFrom(".kamusta", 1, {
    x: '-40',
    opacity: 0,
    ease: Power3.easeInOut,
  }, 1.2)

  TweenMax.staggerTo(".kamusta", 1, {
    x: '40',
    opacity: 0,
    delay: 2,
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
          }, 1)
        })
      }, 1.5)
    }
  }, 3);


}

/**
 *  Follows mouse cursor
 *  
 */
let circle = document.getElementById('mouse')
let arrow = document.getElementsByClassName('mouse-arrow')[0]

function moveMouse(e) {
  gsap.to(circle, {
    ease: Power3.easeOut,
    x: e.pageX - (mouseSize - 10),
    y: e.pageY - (mouseSize - 10),
  })
}


function smoothScrollTo(e) {
  e.preventDefault();
  let scroll = select(e.target.getAttribute("href")).offsetTop
  if (e.target.getAttribute("href") !== '#footer') {
    scroll = scroll - 100
  }
  gsap.to(bodyScrollBar, { duration: 1.5, scrollTo: scroll });
}

function createCursorHover(e) {

  if (e.type === 'mouseenter') {
    gsap.to(circle, {
      height: '10px',
      width: '10px'
    })
    mouseSize = 15
    setTimeout(() => {
      circle.classList.add('mouse-interaction')
    }, 120)
  }
  else if (e.type === 'mouseleave') {
    gsap.to(circle, {
      height: '30px',
      width: '30px'
    })
    mouseSize = 30
    setTimeout(() => {
      circle.classList.remove('mouse-interaction')
    }, 120)
  }
}

document.addEventListener('DOMContentLoaded', function () {

  if (JSON.parse(localStorage.getItem('darkMode'))) {
    document.documentElement.classList.add('dark')
    document.getElementById('moon').classList.toggle('hidden')
  }
  else {
    document.getElementById('sun').classList.toggle('hidden')

  }

  document.getElementById('sun').addEventListener('click', function () {
    localStorage.setItem('darkMode', false)
    document.documentElement.classList.remove('dark')
    document.getElementById('sun').classList.toggle('hidden')
    document.getElementById('moon').classList.toggle('hidden')
  })

  document.getElementById('moon').addEventListener('click', function () {
    localStorage.setItem('darkMode', true)
    document.documentElement.classList.add('dark')
    document.getElementById('moon').classList.toggle('hidden')
    document.getElementById('sun').classList.toggle('hidden')
  })

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', createCursorHover);
    link.addEventListener('mouseleave', createCursorHover);
    link.addEventListener('click', smoothScrollTo);
  });

  projectCards.forEach(link => {
    link.addEventListener('mouseenter', createCursorHover);
    link.addEventListener('mouseleave', createCursorHover);
  });

  btnNavigation.forEach(link => {
    link.addEventListener('mouseenter', createCursorHover);
    link.addEventListener('mouseleave', createCursorHover);
  });

  document.addEventListener('mousemove', function (e) {
    moveMouse(e)
  })

  select('#to-top').addEventListener('mouseenter', createCursorHover);
  select('#to-top').addEventListener('mouseleave', createCursorHover);
  select('#to-top').addEventListener('click', smoothScrollTo);
});


gsap.utils.toArray('#heading').forEach((div, index) => {
  gsap.from(div, {
    x: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: div,
      start: "top bottom",
      // end: "top center",
      // scrub: 1,
    }
  })
});

gsap.utils.toArray('#subheading').forEach((div, index) => {
  gsap.from(div, {
    x: -60,
    opacity: 0,
    scrollTrigger: {
      trigger: div,
      start: "top bottom",
      // end: "top 10%",
      // scrub: 1
    }
  }, .5)
});

gsap.from('.card-work', {
  x: -20,
  opacity: 0,
  duration: 1,
  ease: Power3.easeInOut,
  scrollTrigger: {
    trigger: 'div.card-work',
    start: 'top bottom',
    // end: 'top center',
    // scrub: 1
  },
  stagger: { amount: 1 }
})



/**
 *  Navigation bar animation
 *  scrolling
 * 
 */

function navbarScroll() {
  ScrollTrigger.matchMedia({
    //sm
    "(min-width: 768px)": function () {
      const showAnim = gsap.from('nav ul li', {
        opacity: 0,
        y: -20,
        paused: true,
        duration: .35,
        stagger: .15,
        ease: Power3.easeInOut
      }).progress(1);

      gsap.timeline({
        scrollTrigger: {
          trigger: '.pin-section',
          start: 'top center',
          endTrigger: '#project-5',
          end: 'center center',
          pin: true,
          pinReparent: true
        }
      })

      ScrollTrigger.create({
        start: "top top",
        end: 4000,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });
    },
  })
}

navbarScroll()

/**
 *  Scroll to top button
 * 
 */
gsap.from('#to-top', {
  opacity: 0,
  y: 60,
  duration: 1,
  ease: Circ.easeOut,
  scrollTrigger: {
    trigger: "#footer",
    start: 'top bottom',
    end: '+=40',
    scrub: true
  }
});



function toggle() {
  timeline_navigation.play();
}

function toggleClose() {
  timeline_navigation.reverse();
}


/**
 *  Hides the mouse
 */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  circle.style.visibility = "hidden"
  circle.style.opacity = 0
}

animationInit()