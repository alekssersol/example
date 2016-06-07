//---------------НАВИГАЦИЯ начало-----------------------------
var navButtons=document.querySelectorAll(".nav-button");
var navButtonsA=document.querySelectorAll(".nav-button>a");
var navSubMenus=document.querySelectorAll(".nav-sub-menu");

var navButtonsMobile=document.querySelectorAll(".nav-container-mobile>.nav-button");
var navButtonsAmobile=document.querySelectorAll(".nav-container-mobile>.nav-button>a");
var navSubMenusMobile=document.querySelectorAll(".nav-container-mobile .nav-sub-menu");

var mobileMenu=document.querySelector(".mobile-menu");


mobileMenu.onclick=function(){
  if(getComputedStyle(navButtonsMobile[0]).display=="block"){
    for(i=0; i<navButtonsMobile.length; i++){
      navButtonsMobile[i].style.display="none";
    }
  }
  else {for(i=0; i<navButtonsMobile.length; i++){
      navButtonsMobile[i].style.display="block";
    }
  }
}

navButtons[0].onmouseover=function(){
  navButtonsA[0].style.cssText="background:#fff;color:black";
  if(getComputedStyle(navButtons[0]).display=="inline-block"){
    navSubMenus[0].style.cssText="display:block";
  }
}
navButtonsAmobile[0].onclick=function(){
  if(getComputedStyle(navButtonsMobile[0]).display=="block"){
    if(getComputedStyle(navSubMenusMobile[0]).display=="none"){
      navSubMenusMobile[0].style.cssText="display:block";
    }
    else {navSubMenusMobile[0].style.cssText="display:none";}
  }
}
navButtons[0].onmouseout=function(){
  navButtonsA[0].style.cssText="background:#333;color:#white";
  if(getComputedStyle(navButtons[0]).display=="inline-block"){
    navSubMenus[0].style.cssText="display:none";
  }
}

navButtons[1].onmouseover=function(){
  navButtonsA[1].style.cssText="background:#fff;color:black";
  if(getComputedStyle(navButtons[1]).display=="inline-block"){
    navSubMenus[1].style.cssText="display:block";
  }
}
navButtonsAmobile[1].onclick=function(){
  if(getComputedStyle(navButtonsMobile[1]).display=="block"){
    if(getComputedStyle(navSubMenusMobile[1]).display=="none"){
      navSubMenusMobile[1].style.cssText="display:block";
    }
    else {navSubMenusMobile[1].style.cssText="display:none";}
  }
}
navButtons[1].onmouseout=function(){
  navButtonsA[1].style.cssText="background:#333;color:#white";
  if(getComputedStyle(navButtons[1]).display=="inline-block"){
    navSubMenus[1].style.cssText="display:none";
  }
}

navButtons[2].onmouseover=function(){
  navButtonsA[2].style.cssText="background:#fff;color:black";
  if(getComputedStyle(navButtons[2]).display=="inline-block"){
    navSubMenus[2].style.cssText="display:block";
  }
}
navButtonsAmobile[2].onclick=function(){
  if(getComputedStyle(navButtonsMobile[2]).display=="block"){
    if(getComputedStyle(navSubMenusMobile[2]).display=="none"){
      navSubMenusMobile[2].style.cssText="display:block";
    }
    else {navSubMenusMobile[2].style.cssText="display:none";}
  }
}
navButtons[2].onmouseout=function(){
  navButtonsA[2].style.cssText="background:#333;color:#white";
  if(getComputedStyle(navButtons[2]).display=="inline-block"){
    navSubMenus[2].style.cssText="display:none";
  }
}

navButtons[3].onmouseover=function(){
  navButtonsA[3].style.cssText="background:#fff;color:black";
  if(getComputedStyle(navButtons[3]).display=="inline-block"){
    navSubMenus[3].style.cssText="display:block";
  }
}
navButtonsAmobile[3].onclick=function(){
  if(getComputedStyle(navButtonsMobile[3]).display=="block"){
    if(getComputedStyle(navSubMenusMobile[3]).display=="none"){
      navSubMenusMobile[3].style.cssText="display:block";
    }
    else {navSubMenusMobile[3].style.cssText="display:none";}
  }
}
navButtons[3].onmouseout=function(){
  navButtonsA[3].style.cssText="background:#333;color:#white";
  if(getComputedStyle(navButtons[3]).display=="inline-block"){
    navSubMenus[3].style.cssText="display:none";
  }
}
//---------------НАВИГАЦИЯ конец-----------------------------

//---------------СЛАЙДЕР начало------------------------------
var sliderButtons=document.querySelectorAll(".slide-button");
var sliderContainer=document.querySelector(".slide-container");

sliderButtons[0].onclick=function(){
  sliderContainer.style.marginLeft="0px";
}
sliderButtons[1].onclick=function(){
  sliderContainer.style.marginLeft="-500px";
}
sliderButtons[2].onclick=function(){
  sliderContainer.style.marginLeft="-1000px";
}
sliderButtons[3].onclick=function(){
  sliderContainer.style.marginLeft="-1500px";
}
//---------------СЛАЙДЕР конец-------------------------------