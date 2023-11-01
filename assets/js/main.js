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

//dark / light theme

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark_theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//validate if user previously chose a theme
if (selectedTheme) {
  // if theme selected by user previously then we add/remove classes again based on localStorage
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
//if initially there is no local storage ie. user has not made a choice and this is first time loading
//then we check if browser/OS is in dark mode and then add dark theme if required by default
else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("found dark mode for browser/OS");
  // add dark theme by setting dark theme flags in localStorage
  localStorage.setItem("selected-theme", "dark");
  localStorage.setItem("selected-icon", "uil-moon");
  // add classes for dark theme in DOM
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

