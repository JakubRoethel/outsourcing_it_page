window.onscroll = function() {stickyNavbar()};

const navbar = document.getElementById("navbar");
const logo = document.getElementsByClassName("logo");
const menuList = document.getElementsByClassName("scroll");
const burgerMenu = document.getElementsByClassName("navicon");
console.log(burgerMenu);
console.log(menuList)
console.log(logo)



let sticky = navbar.offsetTop;

let menuBtn = document.getElementsByClassName('menu-btn');
console.log(menuBtn);


menuBtn[0].addEventListener("click", () => {

  if (window.pageYOffset === 0) {
    console.log('/inside');
    if(menuBtn[0].checked) {
      
      navbar.classList.add("sticky");
      logo[0].classList.add("sticky-nav");
      menuList[0].classList.add("sticky-nav");
      menuList[1].classList.add("sticky-nav");
      menuList[2].classList.add("sticky-nav");
      menuList[3].classList.add("sticky-nav");
      menuList[4].classList.add("sticky-nav");
      burgerMenu[0].classList.add("sticky-nav");
    } else {
      navbar.classList.remove("sticky");
      logo[0].classList.remove("sticky-nav");
      menuList[0].classList.remove("sticky-nav");
      menuList[1].classList.remove("sticky-nav");
      menuList[2].classList.remove("sticky-nav");
      menuList[3].classList.remove("sticky-nav");
      menuList[4].classList.remove("sticky-nav");
      burgerMenu[0].classList.remove("sticky-nav");
    }
  } else {
    console.log('/inside');
    if(menuBtn[0].checked) {
      
      navbar.classList.add("sticky");
      logo[0].classList.add("sticky-nav");
      menuList[0].classList.add("sticky-nav");
      menuList[1].classList.add("sticky-nav");
      menuList[2].classList.add("sticky-nav");
      menuList[3].classList.add("sticky-nav");
      menuList[4].classList.add("sticky-nav");
      burgerMenu[0].classList.add("sticky-nav");
    } else {
      // navbar.classList.remove("sticky");
      // logo[0].classList.remove("sticky-nav");
      menuList[0].classList.remove("sticky-nav");
      menuList[1].classList.remove("sticky-nav");
      menuList[2].classList.remove("sticky-nav");
      menuList[3].classList.remove("sticky-nav");
      menuList[4].classList.remove("sticky-nav");
      // burgerMenu[0].classList.remove("sticky-nav");
    }
  }
  
});


function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    logo[0].classList.add("sticky-nav");
    menuList[0].classList.add("sticky-nav");
    menuList[1].classList.add("sticky-nav");
    menuList[2].classList.add("sticky-nav");
    menuList[3].classList.add("sticky-nav");
    menuList[4].classList.add("sticky-nav");
    burgerMenu[0].classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky");
    logo[0].classList.remove("sticky-nav");
    menuList[0].classList.remove("sticky-nav");
    menuList[1].classList.remove("sticky-nav");
    menuList[2].classList.remove("sticky-nav");
    menuList[3].classList.remove("sticky-nav");
    menuList[4].classList.remove("sticky-nav");
    burgerMenu[0].classList.remove("sticky-nav");
  }

}





