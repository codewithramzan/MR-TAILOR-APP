
 function menuBtn() {
  const menuBtn= document.querySelector('.js-menu-btn');
  const navbar = document.querySelector('.js-nav');
    menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
 }

function darktheme() { 
  const toggleBtn = document.querySelector('.js-theme-toggle');

  toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
  });
}
function header() {
  let headerHTML = `
      <div class="logo-area">
    <img src="images/home-logo-icon.jpg" class="logo">
    <h2>MR Tailor</h2>
    </div>

    <nav class="nav js-nav">
    <a href="index.html">Home</a>
    <a href="nap.html">Measure</a>
    <a href="about_us.html">About</a>
    <a href="contact.html">Contact</a>
    <button class="theme-toggle js-theme-toggle">
        <i class="fa-solid fa-moon"></i>
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
    <p>Modern designs and perfect fitting for everyone</p>
    </div>

    </section>

    <!-- GALLERY -->

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
  document.querySelector('.js-main').innerHTML = homeHTML;
}
header();
menuBtn();
homebody();
darktheme();
