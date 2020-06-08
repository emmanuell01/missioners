
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
  });

ScrollReveal().reveal('.cabecera');
ScrollReveal().reveal('.imagenes-nuevas' , { delay: 500});
ScrollReveal().reveal('.banners1', { delay: 500});
ScrollReveal().reveal('.banners2', { delay: 500});