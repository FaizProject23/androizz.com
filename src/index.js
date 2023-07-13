const menu = document.getElementById("menu");
const nav = document.querySelector("#navBar");
const header = document.querySelector(".header-active")
// let bottom = nav.style.bottom = 10 + 'em'
menu.addEventListener("click", () => {
  nav.classList.toggle("nav-active")
  menu.classList.toggle("menu-active")
});


window.onscroll = () => {
  // const header = document.querySelector('#nav-fixed')
  // const fixed = header.offsetTop

  // if (window.pageYOffset > fixed) header.classList.add('nav-fixed')
  // else header.classList.remove('nav-fixed')
  
  nav.classList.remove('nav-active')
  menu.classList.remove("menu-active")
}

