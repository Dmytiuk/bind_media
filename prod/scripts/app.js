"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var Site={isVisited:1,onload:document.addEventListener("DOMContentLoaded",function(){Site.init()}),init:function(){this.headerBurger(),this.headerScroll(),this.headerDropdown(),this.clientsScroll(),this.initLibs(),this.customSelect(),this.customSelectForm(),this.formTabs(),this.theme()},headerBurger:function(){var e=document.querySelector(".header__burger-lines"),t=document.querySelector(".header__content");e.addEventListener("click",function(){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")})},headerScroll:function(){window.onscroll=function(){50<document.body.scrollTop||50<document.documentElement.scrollTop?document.querySelector(".header").classList.add("header_scrolled"):document.querySelector("header").classList.remove("header_scrolled")}},headerDropdown:function(){$(window).width()<789&&$(".menu-item-has-child").click(function(){$(this).toggleClass("active")})},clientsScroll:function(){$(window).width()<789&&$(".our-clients__blocks").animate({scrollLeft:1400},2e4)},initLibs:function(){$(".reviews__slider").slick({arrows:!0,prevArrow:$(".reviews__button_prev"),nextArrow:$(".reviews__button_next"),infinite:!1}),AOS.init()},customSelect:function(){document.querySelectorAll(".custom-select").forEach(function(a){a.addEventListener("change",function(e){console.log("changed",e.target.value)}),a.addEventListener("mousedown",function(e){if(1<=window.innerWidth&&0===r){e.preventDefault(),r++;var n=a.children[0],o=document.createElement("ul");o.className="selector-options",[].concat(_toConsumableArray(n.children)).forEach(function(t){var e=document.createElement("li");e.className="text2",e.textContent=t.textContent,e.addEventListener("mousedown",function(e){e.stopPropagation(),n.value=t.value,a.value=t.value,n.style.background=t.getAttribute("data-background"),n.style.color=t.getAttribute("data-color"),n.dispatchEvent(new Event("change")),a.dispatchEvent(new Event("change")),a.classList.remove("active"),o.remove(),r--}),a.classList.add("active"),o.appendChild(e)}),a.appendChild(o),document.addEventListener("click",function(e){a.contains(e.target)||(o.remove(),a.classList.remove("active"),r=0)})}else e.preventDefault()})});var r=0},customSelectForm:function(){document.querySelectorAll(".modal-tabs__select").forEach(function(a){a.addEventListener("change",function(e){console.log("changed",e.target.value)}),a.addEventListener("mousedown",function(e){if(1<=window.innerWidth&&0===r){e.preventDefault(),r++;var n=a.children[0],o=document.createElement("ul");o.className="modal-tabs__select-options",[].concat(_toConsumableArray(n.children)).forEach(function(t){var e=document.createElement("li");e.className="text2",e.textContent=t.textContent,e.addEventListener("mousedown",function(e){e.stopPropagation(),n.value=t.value,a.value=t.value,n.style.color="#303E55",n.dispatchEvent(new Event("change")),a.dispatchEvent(new Event("change")),a.classList.remove("active"),o.remove(),r--}),a.classList.add("active"),o.appendChild(e)}),a.appendChild(o),document.addEventListener("click",function(e){a.contains(e.target)||(o.remove(),a.classList.remove("active"),r=0)})}else e.preventDefault()})});var r=0},formTabs:function(){var m=document.querySelectorAll(".modal-tabs__type-bar div"),e=document.querySelectorAll(".modal-tabs__button"),v=document.querySelectorAll(".modal-tabs__inner"),p=0;e.forEach(function(e,u){e.addEventListener("click",function(e){sessionStorage.access="confirm";var t=document.querySelector("div.modal-tabs__inner.active"),n=t.querySelectorAll(".js-input");n&&n.forEach(function(e){var t=e.closest(".modal-tabs__input");""==e.value?(t.classList.add("incorrect"),t.querySelector(".modal-tabs__prompt").innerText="Input empty",t.querySelector(".modal-tabs__prompt").classList.add("active"),sessionStorage.access="denied"):(t.classList.remove("incorrect"),t.querySelector(".modal-tabs__prompt").innerText="",t.querySelector(".modal-tabs__prompt").classList.remove("active"),sessionStorage.access="confirm")});var o=t.querySelector("select");if(o){var a=document.querySelector(".modal-tabs__select-wrapper");1==o.value?(a.querySelector(".modal-tabs__prompt").innerText="Please select",a.querySelector(".modal-tabs__prompt").classList.add("active"),o.classList.add("incorrect"),sessionStorage.access="denied"):(a.querySelector(".modal-tabs__prompt").innerText="",a.querySelector(".modal-tabs__prompt").classList.remove("active"),o.classList.remove("incorrect"))}var r,s=t.querySelector(".js-input-email");if(s){var c=s.closest(".modal-tabs__input");r=s.value,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase())?c.classList.remove("incorrect"):(c.classList.add("incorrect"),c.querySelector(".modal-tabs__prompt").innerText="Type valid email address",sessionStorage.access="denied")}var i,l=t.querySelector(".js-input-phone");if(l){var d=l.closest(".modal-tabs__input");i=l.value,/^[0-9\s]*$/.test(String(i))||(d.classList.add("incorrect"),d.querySelector(".modal-tabs__prompt").innerText="Type valid phone number",sessionStorage.access="denied")}p<2&&"confirm"==sessionStorage.access&&(e.preventDefault(),m.forEach(function(e){e.classList.remove("active")}),m[u+1].classList.add("active"),v.forEach(function(e){e.classList.remove("active")}),v[u+1].classList.add("active"),p++,sessionStorage.access="denied"),"denied"==sessionStorage.access&&2!==p?e.preventDefault():"denied"==sessionStorage.access&&e.preventDefault()})})},theme:function(){var e=document.querySelector("body"),t=document.querySelector(":root");e.classList.contains("tomato")&&(t.style.setProperty("--blue-gradient","linear-gradient(90.63deg, #FF566D 41.32%, #FFC33A 99.54%)"),t.style.setProperty("--light-blue","#F84E6C"))}};