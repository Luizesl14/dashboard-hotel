
const menu_mobile =   document.getElementById("menu_mobile");
const btn_close =   document.getElementById("btn_close");
const btn_open =   document.getElementById("btn_open");

function openMenu(){
   menu_mobile.classList.remove("hidden")
   menu_mobile.classList.add("flex")
}

function closeMenu(){
    menu_mobile.classList.remove("flex")
    menu_mobile.classList.add("hidden") 
}