// Function to toglle Nav Bar =========================================>
const navBar = document.getElementById('nav_Bar')
const toggleBtn = document.getElementById('toggleIconDiv')
const closeBtn = document.getElementById('closeIconDiv')

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.add('show')
})

closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('show')

})

const nav = document.querySelectorAll('.navLink');
function takeAction(){
    navBar.classList.remove('show')
}
nav.forEach(n=>n.addEventListener('click',takeAction))



// Function to switch color theme ========================================>
const colorSwitchIcon = document.getElementById('colorSwitchIcon')
colorSwitchIcon.addEventListener('click', function(){
  
  document.body.classList.toggle('blueColor')
  if(document.body.classList.contains('blueColor')){
    document.querySelector('.colorSwitch').innerHTML = `<i class="uil uil-toggle-on icon"></i>`

    document.querySelector('.logoDiv').innerHTML = `<img src="./Images/Logo2.png" alt="logo Image" class="logo">`

  }else{
    
    document.querySelector('.colorSwitch').innerHTML = `<i class="uil uil-toggle-off icon"></i>`
    document.querySelector('.logoDiv').innerHTML = `<img src="./Images/Logo.png" alt="logo Image" class="logo">`
  }

})


// Scroll Up Button function ==================================================>

const moveUp = document.getElementById('moveUp')
function moveUpButtonShow(){
  if(this.scrollY >= 85){
    moveUp.style.display = 'flex'
  }else{
    moveUp.style.display = 'none'
  }
}
window.addEventListener('scroll', moveUpButtonShow)


// Accomodation Swiper ==================================================>
let accSwiper = new Swiper(".accWrapper", {
  cssMode: true,
  loop: true,
  autoplay: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  mousewheel: true,
  keyboard: true,
  mausehold: true,
 drag: true,
 
});


// HomePage Swiper ==================================================>

let newSwiper = new Swiper(".homeWrapper", {
    autoplay: true,
    spaceBetween: 60,
    effect: "fade",
    

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,
   drag: true,
   
  });


// Facilities Swiper ==================================================>
let facSwiper = new Swiper(".facWrapper", {
    cssMode: true,
    loop: true,
    

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,
   drag: true,
   
  });


  //// Gallery Swiper ==================================================>
let gallerySwiper = new Swiper(".gallerySwiper", {
    cssMode: true,
    autoplay: true,
    loop: true,
    

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,
   drag: true,
   
  });



  // Scroll Reveal ======================================================>
  const sr = ScrollReveal({ 
    distance: '30px',
    duration: 2000,
    origin: 'top',
    reset: true
    });

    sr.reveal(`.about, .accomodation, .location, .offer, .facilities,  .gallery, .footerSection, .linksDiv `,
    {interval: 200,
       
   })
  
    sr.reveal(`.locationInfo`,
    {interval: 200,
       origin: 'left'
   })


    sr.reveal(`iframe`,
    {interval: 200,
       origin: 'right'
   })

 

   


