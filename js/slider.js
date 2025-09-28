//هنا للصور الي في الصفحة الرايسية الي تنتقل كل شوية ثواني 
let current = 0;
const track = document.getElementById("slider-track");
const slides = track.children;
function showSlide(i) {
  if (i < 0) i = slides.length - 1;
  if (i >= slides.length) i = 0;
  current = i;
  track.style.transform = "translateX(" + -i * 100 + "%)";
}
function nextSlide() {
  showSlide(current + 1);
}
function prevSlide() {
  showSlide(current - 1);
}
setInterval(() => {
  nextSlide();
}, 5000);

