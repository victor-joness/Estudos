let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function toggle(){
    let toggle = document.querySelector('.popup-container')
    toggle.classList.toggle('toggle')
}

function toggle_boostrap(){
    let toggle = document.querySelector('.popup-container-boostrap')
    toggle.classList.toggle('toggle')
}

function toggle_javascript(){
    let toggle = document.querySelector('.popup-container-javascript')
    toggle.classList.toggle('toggle')
}

function toggle_css(){
    let toggle = document.querySelector('.popup-container-css')
    toggle.classList.toggle('toggle')
}

function toggle_html(){
    let toggle = document.querySelector('.popup-container-html')
    toggle.classList.toggle('toggle')
}

function toggle_react(){
    let toggle = document.querySelector('.popup-container-react')
    toggle.classList.toggle('toggle')
}

/* parte do nome animado */

var typed = new Typed('.type', {
    strings: [
        'Developer Front-end', 
        'Designer',
        'Social Manager'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed('.type2', {
    strings: [
        'This is a JavaScript library', 
        'This is an ES6 module'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });