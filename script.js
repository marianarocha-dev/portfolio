const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('nav-active');

  
    hamburger.classList.toggle('toggle');
});


navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});