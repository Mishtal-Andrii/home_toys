parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,c=function(){};return{s:c,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,l=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw l}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r=document.querySelector(".header__toggle"),o=document.querySelector(".toggle-menu");r.addEventListener("click",function(t){o.style="\n    visibility: visible;\n    opacity: 0.9;\n  "}),document.addEventListener("click",function(t){r.contains(t.target)||(o.style="\n      visibility: hidden;\n      opacity: 0;\n    ")});var c=document.querySelectorAll(".cards-wrapper"),l=document.querySelector(".toggle__left"),i=document.querySelector(".toggle__right"),a=document.querySelectorAll(".dots__icon"),u=document.querySelector(".discount__products"),s=document.querySelector(".cards-box"),d=window.getComputedStyle(u).width,y=0,f=0;function m(){var e,n=t(a);try{for(n.s();!(e=n.n()).done;){e.value.classList.remove("dots__icon--active"),f<0&&(f=a.length-1),f>a.length-1&&(f=0),a[f].classList.add("dots__icon--active")}}catch(r){n.e(r)}finally{n.f()}}s.style.transition="0.5s all",u.style.overflow="hidden",s.style.width=100*c.length+"%",c.forEach(function(t){t.style.width=d}),i.addEventListener("click",function(){y===+d.slice(0,d.length-2)*(c.length-1)?y=0:y+=+d.slice(0,d.length-2),s.style.transform="translateX(-".concat(y,"px)"),f++,m()}),l.addEventListener("click",function(){0===y?y=+d.slice(0,d.length-2)*(c.length-1):(y-=+d.slice(0,d.length-2),f--,m()),s.style.transform="translateX(-".concat(y,"px)")});var h=document.querySelectorAll(".comment-card"),v=document.querySelector("#btn-left"),g=document.querySelector("#btn-right"),_=document.querySelectorAll(".comment-dots__icon"),p=0,S=0;function b(){var e,n=t(_);try{for(n.s();!(e=n.n()).done;){e.value.classList.remove("comment-dots__icon--active"),S<0&&(S=_.length-1),S>_.length-1&&(S=0),_[S].classList.add("comment-dots__icon--active")}}catch(r){n.e(r)}finally{n.f()}}function q(t){t>h.length&&(p=1),t<1&&(p=h.length),h.forEach(function(t){return t.style.display="none"}),h[p-1].style.display="block"}function w(t){q(p+=t)}q(p),v.addEventListener("click",function(){w(-1),S--,b()}),g.addEventListener("click",function(){w(1),S++,b()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.41830ab1.js.map