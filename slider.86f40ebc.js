parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xStd":[function(require,module,exports) {
"use strict";function t(t){return n(t)||o(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return i(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var c=document.querySelector(".slider"),l=document.querySelector(".slider__slides-row"),f=document.querySelector(".slider__slide"),a=document.querySelector(".shop__slides-navigation-button--next"),s=document.querySelector(".shop__slides-navigation-button--back"),u=t(document.querySelectorAll(".shop__chapter-button")),d=[4,4,4,4],y=d.reduce(function(t,e){return t+e}),h=parseFloat(window.getComputedStyle(f).marginRight),p=(l.offsetWidth-h*(y-1))/y,m=function(){a.onclick=function(){var t=h+p,e=c.scrollLeft;c.scrollLeft=e%t<10||t-e%t<10?e+t:Math.ceil(e/t)*t},s.onclick=function(){var t=h+p,e=c.scrollLeft;c.scrollLeft=e%t<10||t-e%t<10?e-t:Math.floor(e/t)*t};for(var t=[0],e=0;e<d.length-1;e++)t.push(t[e]+d[e]*(p+h));for(var r=function(e){u[e].onclick=function(){c.scrollLeft=t[e]}},o=0;o<u.length;o++)r(o);c.onscroll=function(){for(var e={difference:1/0,position:NaN,indexOfChapter:null},r=0;r<t.length;r++)Math.abs(t[r]-c.scrollLeft)<e.difference&&(e.difference=Math.abs(t[r]-c.scrollLeft),e.position=t[r],e.indexOfChapter=r);u[e.indexOfChapter].control.checked=!0,0===c.scrollLeft?s.style.opacity="0.3":c.scrollLeft+c.offsetWidth>=l.offsetWidth?a.style.opacity="0.3":a.style.opacity=s.style.opacity="1"}};m(),window.addEventListener("resize",function(){setTimeout(function(){p=(l.offsetWidth-h*(y-1))/y,m()},1e3)});
},{}]},{},["xStd"], null)
//# sourceMappingURL=slider.86f40ebc.js.map