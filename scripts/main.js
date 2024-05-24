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
animate();