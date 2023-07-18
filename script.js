const navbar = document.getElementById('navbar');
const element = document.querySelector(".navlinks");
const contacts = document.querySelector(".ion-git");

const mobileNav = document.querySelector('.mobile-nav-open');
const mobileNav_close = document.querySelector('.mobile-nav-close');

const aboutSection = document.getElementById('about-sec');
const skillsSection = document.getElementById('skills-sec');
const contSection = document.getElementById('contact-sec');
const mainSection = document.getElementById('main-sec');

const mobNavDrop = document.querySelector('.mobile-nav-drop');

mobileNav.addEventListener('click', function(){
  this.style.display = 'none';
  mobileNav_close.style.display = 'flex';
  mobNavDrop.style.display = 'flex';
});
mobileNav_close.addEventListener('click', function(){
  this.style.display = 'none';
  mobileNav.style.display = 'flex';
  mobNavDrop.style.display = 'none';
}); 

let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


if (screenWidth >= 720) {

  function handleScroll() {

    const main =  mainSection.getBoundingClientRect().bottom;
    const main_navlink = document.getElementById('home');

    const about =  aboutSection.getBoundingClientRect().top;
    const about_navlink = document.getElementById('about');

    const skills =  skillsSection.getBoundingClientRect().top;
    const skills_navlink = document.getElementById('skills');

    const contact =  contSection.getBoundingClientRect().top;
    const cont_navlink = document.getElementById('cont');

    if(main > window.innerHeight * 0.3){
      about_navlink.classList.remove("active");

      main_navlink.classList.add("active");
      
      element.classList.remove("show");
      contacts.classList.remove("show");

      mobileNav.classList.remove("show");
      mobileNav_close.classList.remove("show");

      mobileNav.style.display = 'flex';
      mobileNav_close.style.display = 'none';
      mobNavDrop.style.display = 'none';

    }
    if (window.scrollY > 550) {
      const aboutAnimation_1 = document.querySelector('.about-me-main-img');
      aboutAnimation_1.style.animation = 'animate-left 1.5s forwards'

      const aboutAnimation_2 = document.querySelector('.about-me-main-cont');
      aboutAnimation_2.style.animation = 'animate-right 1.5s forwards'
    }
    if (window.scrollY > 1175) {
      const aboutAnimation_3 = document.getElementById('timeline-li-1');
      aboutAnimation_3.style.animation = 'animate-down 1s forwards'

      const aboutAnimation_4 = document.getElementById('timeline-li-2');
      aboutAnimation_4.style.animation = 'animate-down 1s forwards'
      aboutAnimation_4.style.animationDelay = '0.5s'

      const aboutAnimation_5 = document.getElementById('timeline-li-3');
      aboutAnimation_5.style.animation = 'animate-down 1s forwards';
      aboutAnimation_5.style.animationDelay = '1s'

      const aboutAnimation_6 = document.getElementById('timeline-li-4');
      aboutAnimation_6.style.animation = 'animate-down 1s forwards'
      aboutAnimation_6.style.animationDelay = '1.5s'
    }
    if (about < window.innerHeight * 0.3) {
      element.classList.add("show");
      contacts.classList.add("show");

      mobileNav.classList.add("show");
      mobileNav_close.classList.add("show");

      about_navlink.classList.add("active");
      skills_navlink.classList.remove("active");
      
      main_navlink.classList.remove("active");
    }
    if (skills < window.innerHeight * 0.3) {
      skills_navlink.classList.add("active");
      about_navlink.classList.remove("active");
      cont_navlink.classList.remove("active");
    }
    if (window.scrollY > 2000){
      const skillAnimation_1 = document.getElementById('skills-cw-1-1');
      skillAnimation_1.style.animation = 'animate-left 1s forwards';
      

      const skillAnimation_2 = document.getElementById('skills-cw-2-1');
      skillAnimation_2.style.animation = 'animate-right 1s forwards';
      skillAnimation_2.style.animationDelay = '0.5s'

      const skillAnimation_3 = document.getElementById('skills-cw-1-2');
      skillAnimation_3.style.animation = 'animate-left 1s forwards';
      skillAnimation_3.style.animationDelay = '1s'

      const skillAnimation_4 = document.getElementById('skills-cw-2-2');
      skillAnimation_4.style.animation = 'animate-right 1s forwards';
      skillAnimation_4.style.animationDelay = '1.5s'
    }
    if (contact < window.innerHeight * 0.7) {
      cont_navlink.classList.add("active");
      skills_navlink.classList.remove("active");

      const contactAnimation_1 = document.querySelector('.cont-text');
      contactAnimation_1.style.animation = 'animate-left 1.5s forwards';

      const contactAnimation_2 = document.querySelector('.cont-main');
      contactAnimation_2.style.animation = 'animate-right 1.5s forwards';
    }

  };
}


  if (screenWidth <= 719) {
    const aboutAnimation_1 = document.querySelector('.about-me-main-img');
    aboutAnimation_1.style.animation = 'none';

    const aboutAnimation_2 = document.querySelector('.about-me-main-cont');
    aboutAnimation_2.style.animation = 'none';

    const aboutAnimation_3 = document.getElementById('timeline-li-1');
    aboutAnimation_3.style.animation = 'none';

    const aboutAnimation_4 = document.getElementById('timeline-li-2');
    aboutAnimation_4.style.animation = 'none';

    const aboutAnimation_5 = document.getElementById('timeline-li-3');
    aboutAnimation_5.style.animation = 'none';

    const aboutAnimation_6 = document.getElementById('timeline-li-4');
    aboutAnimation_6.style.animation = 'none';

    const skillAnimation_1 = document.getElementById('skills-cw-1-1');
    skillAnimation_1.style.animation = 'none';
    

    const skillAnimation_2 = document.getElementById('skills-cw-2-1');
    skillAnimation_2.style.animation = 'none';

    const skillAnimation_3 = document.getElementById('skills-cw-1-2');
    skillAnimation_3.style.animation = 'none';

    const skillAnimation_4 = document.getElementById('skills-cw-2-2');
    skillAnimation_4.style.animation = 'none';

    const contactAnimation_1 = document.querySelector('.cont-text');
    contactAnimation_1.style.animation = 'none';

    const contactAnimation_2 = document.querySelector('.cont-main');
    contactAnimation_2.style.animation = 'none';

  }

window.addEventListener('scroll', handleScroll);

const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');
const cursor3 = document.querySelector('.cursor-3');
const cursor4 = document.querySelector('.cursor-4');
const cursor5 = document.querySelector('.cursor-5');


function followMouse(e){
  let x = e.clientX;
  let y = e.clientY;
  
  x += window.scrollX;
  y += window.scrollY;


  cursor1.style.top = y + 'px';
  cursor1.style.left = (x - 5) + 'px';
  cursor1.style.opacity = '100%';

  cursor2.style.top = y + 'px';
  cursor2.style.left = (x - 4) + 'px';
  cursor2.style.opacity = '100%';

  cursor3.style.top = y + 'px';
  cursor3.style.left = (x - 3) + 'px';
  cursor3.style.opacity = '100%';

  cursor4.style.top = y + 'px';
  cursor4.style.left = (x - 3) + 'px';
  cursor4.style.opacity = '100%';
  
  cursor5.style.top = y + 'px';
  cursor5.style.left = (x - 3) + 'px';
  cursor5.style.opacity = '100%';
}

document.addEventListener('mousemove', followMouse);

const skills_cw1 = document.querySelectorAll('.skills-cw-1');

skills_cw1.forEach(skill => {
  const ionBG = skill.querySelector('.ion-bg');
  const ion = skill.querySelector('.skills-ion');
  const ionBG_h1 = skill.querySelector('.ion-bg > h1');
  const ionBG_p = skill.querySelector('.ion-bg > p');

  skill.addEventListener('mouseover', function() {
    ionBG.classList.add("open1")

    ion.classList.add("open");

    ionBG_h1.classList.add("open");

    ionBG_p.classList.add("open");
  });

  skill.addEventListener('mouseout', function() {
    ionBG.classList.remove("open1")

    ion.classList.remove("open");

    ionBG_h1.classList.remove("open");

    ionBG_p.classList.remove("open");
  });
});

const skills_cw2 = document.querySelectorAll('.skills-cw-2');

skills_cw2.forEach(skill => {
  const ionBG = skill.querySelector('.ion-bg');
  const ion = skill.querySelector('.skills-ion');
  const ionBG_h1 = skill.querySelector('.ion-bg > h1');
  const ionBG_p = skill.querySelector('.ion-bg > p');
  

  skill.addEventListener('mouseover', function() {
    ionBG.classList.add("open2")

    ion.classList.add("open");

    ionBG_h1.classList.add("open");

    ionBG_p.classList.add("open");
  });

  skill.addEventListener('mouseout', function() {
    ionBG.classList.remove("open2")

    ion.classList.remove("open");

    ionBG_h1.classList.remove("open");

    ionBG_p.classList.remove("open");
  });
});


