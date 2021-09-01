window.onscroll = function() {stickyNavbar()};

const navbar = document.getElementById("navbar");
const logo = document.getElementsByClassName("logo");
const menuList = document.getElementsByClassName("scroll");
console.log(menuList)
console.log(logo)



let sticky = navbar.offsetTop;



function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    logo[0].classList.add("sticky-nav");
    menuList[0].classList.add("sticky-nav");
    menuList[1].classList.add("sticky-nav");
    menuList[2].classList.add("sticky-nav");
    menuList[3].classList.add("sticky-nav");
    menuList[4].classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky");
    logo[0].classList.remove("sticky-nav");
    menuList[0].classList.remove("sticky-nav");
    menuList[1].classList.remove("sticky-nav");
    menuList[2].classList.remove("sticky-nav");
    menuList[3].classList.remove("sticky-nav");
    menuList[4].classList.remove("sticky-nav");
  }
}
