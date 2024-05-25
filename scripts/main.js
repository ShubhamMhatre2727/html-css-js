// js for sec2 class
const h2 = document.querySelector('#wheel');
let angle=0;
let i=0
function animate() {
   h2.style.transform = `rotate3d(0,0,1,${angle}deg)`;
  angle = (angle + 25);

  h2.style.color = `hsl(${i}, 100%, 50%)`;
i += 2;
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
// =======================================================

const sec1 = document.querySelector(".sec1")
const sec2 = document.querySelector(".sec2")
const sec3 = document.querySelector(".sec3")
const wheel2 = document.querySelector("#wheel2")
const scroller = document.querySelector("#scroller")

scroller.addEventListener("scroll", function(e) {
  window.requestAnimationFrame(scrolling);
});

document.addEventListener("DOMContentLoaded", scrolling, false);
     

function scrolling(e){
  if(isFullyVisible(sec1)){
    wheel2.style.transform = `rotate3d(0,0,1,-135deg)`;
    sec1.style.opacity = 1;
    sec2.style.opacity = 0;
    sec3.style.opacity = 0;
  }
  else if(isFullyVisible(sec2)){
    wheel2.style.transform = `rotate3d(0,0,1,-45deg)`;
    sec1.style.opacity = 0;
    sec2.style.opacity = 1;
    sec3.style.opacity = 0;
  }
  else if(isFullyVisible(sec3)){
    wheel2.style.transform = `rotate3d(0,0,1,45deg)`;
    sec1.style.opacity = 0;
    sec2.style.opacity = 0;
    sec3.style.opacity = 1;
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top >= 0) && (bottom <= height));
}