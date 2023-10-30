const skillsCont = document.getElementsByClassName('skill_content'),
      skillHdr = document.querySelectorAll('.skill_header')

function toggleSkills(){
    let itemClass = this.parentNode.className
        for(i = 0 ; i < skillsCont.length ; i++){
            skillsCont[i].className = 'skill_content skills_close'
        }
        if(itemClass === 'skill_content skills_close'){
            this.parentNode.className = 'skill_content skills_open'
        }
}
skillHdr.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

//scroll nav 
let nav = document.querySelector('nav');
window.addEventListener('scroll' , ()=>{
    nav.classList.toggle('nav-scroll' , window.scrollY > 0);
})

//active toggle 
let allNavLink = document.querySelectorAll('.nav_links li a');
    allNavLink.forEach(item =>{
        item.addEventListener('click' , ()=>{
            rmActive();
            item.classList.add('active');
        })
    })
    const rmActive =()=> allNavLink.forEach(item=>{
        item.classList.remove('active');
    })

//menu bars 
let menuBars = document.querySelector('nav button');
let nvLinks = document.querySelector('.nav_links');

menuBars.addEventListener('click' , ()=>{
    nvLinks.classList.toggle('nav_link_block')
})

//qualifiacation togller
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
