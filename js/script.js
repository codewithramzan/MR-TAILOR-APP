
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
menuBtn();
darktheme();
