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

const sec3 = document.querySelector(".sec3")
const wheel2 = document.querySelector("#wheel2")

window.addEventListener("scroll", function(e) {
  window.requestAnimationFrame(scrolling);
});

document.addEventListener("DOMContentLoaded", scrolling, false);
     

function scrolling(e){
  if(isPartiallyVisible(sec3)){
    wheel2.classList.add("active");
  }
  else{
    wheel2.classList.remove("active");
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}