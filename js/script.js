
 export function menuBtn() {
  const menuBtn= document.querySelector('.js-menu-btn');
  const navbar = document.querySelector('.js-nav');
    menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
 }

export function darktheme() { 
  const toggleBtn = document.querySelector('.js-theme-toggle');

  toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
  });
}
export function header() {
  let headerHTML = `
      <div class="logo-area">
    <img src="images/home-logo-icon.jpg" class="logo">
    <h2>MR Tailor</h2>
    </div>

    <nav class="nav js-nav">
    <a href="index.html">Home</a>
    <a href="measure.html">Measure</a>
    <a href="about_us.html">About</a>
    <a href="contact.html">Contact</a>
    <button class="theme-toggle">
        <i class="fa-solid fa-moon  js-theme-toggle"></i>
    </button>
    </nav>
    <div class="menu-btn">
    <i class="fa fa-bars js-menu-btn"></i>
    </div>

  `;
  document.querySelector('.header').innerHTML = headerHTML;
}
function homebody() {
  let homeHTML = `
        <!-- HERO SECTION -->

    <section class="hero">

    <img src="images/hero-image3.png" alt="hero image">

    <div class="hero-text">
    <h1>Professional Tailoring</h1>
    <p id="typing"></p>
    </div>

    </section>

    <!-- GALLERY -->
   <marquee id="slide-para" direction="right">  Best Quality Gents suit <span id="offer"></span> sewing only RS.1300</marquee>
    <section class="gallery">

    <h2 id="h2">Our Designs</h2>

    <div class="gallery-grid">

    <img src="images/image-01.avif">
    <img src="images/image-02.webp">
    <img src="images/image-03.jpg">
    <img src="images/image-04.jpg">
    <img src="images/image-05.jpg">
    <img src="images/image-06.jpg">
    <img src="images/image-04.jpg">
    <img src="images/image-05.jpg">
    <img src="images/image-06.jpg">
    <img src="images/image-06.jpg">

    </div>

    </section>
  
  `;
  let content = document.querySelector('.js-main');
  if(content){
    content.innerHTML=homeHTML;
  }
}
//for typing animation
const words = ["Modern designs and perfect fitting for everyone", "Crafting elegance with every stitch.",
             "Perfect fit, timeless style.","Precision stitching that defines your style.",
             "Tailored to fit perfectly, designed to impress."];

let i = 0
let j = 0
let currentWord = ""
let isDeleting = false

function type(){
 
currentWord = words[i];
const typingElement= document.getElementById("typing");
 // 🎨 Apply color logic
  if (i % 2 !== 0) {
    typingElement.style.color = "yellow";
  } else {
    typingElement.style.color = "white";
  }
if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing").textContent =
currentWord.substring(0,j)

if(!isDeleting && j === currentWord.length){

isDeleting = true
setTimeout(type,1000)
return

}

if(isDeleting && j === 0){

isDeleting = false
i++

if(i === words.length){
i = 0
}

}

setTimeout(type,120)

}


header();
menuBtn();
homebody();
type()
// typeParagraph();
darktheme();
