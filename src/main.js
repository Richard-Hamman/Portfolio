import './style.css';
import gsap from 'gsap';
import Lenis from 'lenis'

document.body.classList.add("lock-scroll");

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};


// Initialize Lenis
const lenis = new Lenis();
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
lenis.stop();
gsap.timeline()

  // Overlay enters one-by-one with dramatic pauses
  .to(".top-left", { left: "-.75vw", duration: 0.1, ease: "power2.inOut" })
  .to(".top-right", { right: "-.75vw", duration: 0.1, ease: "power2.inOut" }, "+=1")
  
  .to(".bottom-left", { left: "-.75vw", duration: 0.1, ease: "power2.inOut" }, "+=1")
  .to(".bottom-right", { right: "-.75vw", duration: 0.1, ease: "power2.inOut" }, "+=1")
  

  // Short suspense pause
  .to(".overlay", {}, "+=1")

  // All overlays exit together
  .to(".top-left", { left: "-55vw", duration: 0.6, ease: "power2.inOut" }, "<")
  .to(".top-right", { right: "-55vw", duration: 0.6, ease: "power2.inOut" }, "<")
  
  .to(".bottom-left", { left: "-55vw", duration: 0.6, ease: "power2.inOut" }, "<")
  .to(".bottom-right", { right: "-55vw", duration: 0.6, ease: "power2.inOut" }, "<")
  
    
  // Hero reveal with fade AND scale
  .fromTo(".hero-content-box, nav",
  { opacity: 0, scale: 0.95 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power3.out",
    onComplete: () => {
      lenis.start(); // resume smooth scrolling
    }
    },
     "<+0.3"
    )

  .fromTo(".hero-content-box",
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        document.body.classList.remove("lock-scroll");
      }
    }, "<+0.1"
  );


  const overlayCorner = gsap.utils.toArray(".overlay-corner");

let tl = gsap.timeline();

overlayCorner.forEach((slide, i) => {
  tl.to(slide, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power2.out",
  }, "+=2.1"); // adjust timing between slides
});

// back to top progress button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    if (!scrollProgress) return;
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#34df5d ${scrollValue}%, #083e6d ${scrollValue}%)`;
};

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);

document.getElementById("year").textContent = new Date().getFullYear();


