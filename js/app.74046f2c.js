(function(){"use strict";var n={6572:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r=function(){var n=this,e=n._self._c;return e("div",{staticClass:"home"},[e("IconoIndice"),e("Introduccion")],1)},o=[],a=function(){var n=this,e=n._self._c;return e("div",{staticClass:"introduccion"},[n._m(0),e("br"),e("p",[n._v("En esta página encontraréis una historia interactiva donde se cuenta el primer encuentro de Gheek y Levy. "),e("br"),n._v(" ->Ir a "),e("b-link",{attrs:{to:"/Historia"}},[n._v(' "Historia" ')]),n._v("para saber más."),e("br"),e("br"),n._v(" En jugar podréis acceder al juego. "),e("br"),n._v(" ->Ir a "),e("b-link",{attrs:{to:"/jugar"}},[n._v(' "Jugar" ')]),n._v("para jugar."),e("br"),e("br"),n._v(" Si queréis saber más de los personajes. "),e("br"),n._v(" ->Ir a "),e("b-link",{attrs:{to:"/Personajes"}},[n._v(' "Personajes" ')]),n._v("para conocerlos. ")],1)])},i=[function(){var n=this,e=n._self._c;return e("h1",[n._v("Elige tu aventura con"),e("br"),n._v(" Levy y Gheek")])}],u=t(1001),c={},s=(0,u.Z)(c,a,i,!1,null,null,null),l=s.exports,p=function(){var n=this;n._self._c;return n._m(0)},f=[function(){var n=this,e=n._self._c;return e("div",{staticClass:"icono"},[e("img",{attrs:{src:t(9469),alt:"logotipo"}})])}],d={},v=(0,u.Z)(d,p,f,!1,null,null,null),h=v.exports,m={name:"Inicio",components:{Introduccion:l,IconoIndice:h}},b=m,g=(0,u.Z)(b,r,o,!1,null,null,null),_=g.exports},1481:function(n,e,t){var r=t(144),o=t(9657),a=t(3017),i=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("Menu2"),e("router-view")],1)},u=[],c=function(){var n=this,e=n._self._c;return e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[e("b-navbar-brand",[n._v("Historia interactiva; el encuentro de Levy y Gheek")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-container",[e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"navegar"},[e("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Inicio"}},[n._v("Inicio")]),e("b-nav-item",{staticClass:"nav-link",attrs:{to:"/jugar"}},[n._v("Jugar")]),e("b-nav-item",{staticClass:"nav-link",attrs:{to:"/historia"}},[n._v("Historia")]),e("b-nav-item",{staticClass:"nav-link",attrs:{to:"/personajes"}},[n._v("Personajes")])],1)],1)],1)],1)},s=[],l={},p=l,f=t(1001),d=(0,f.Z)(p,c,s,!1,null,"7c61df72",null),v=d.exports,h={name:"App",components:{Menu2:v}},m=h,b=(0,f.Z)(m,i,u,!1,null,null,null),g=b.exports,_=t(8345),y=t(6572);r["default"].use(_.ZP);const k=[{path:"/",name:"Inicio",component:y["default"]},{path:"/historia",name:"historia",component:()=>t.e(443).then(t.bind(t,7604))},{path:"/jugar",name:"jugar",component:()=>t.e(443).then(t.bind(t,1986))},{path:"/personajes",name:"personajes",component:()=>t.e(443).then(t.bind(t,2532))},{path:"/Explicacion1",name:"Explicacion1",component:()=>t.e(443).then(t.bind(t,7507))},{path:"/Explicacion2",name:"Explicacion2",component:()=>t.e(443).then(t.bind(t,6267))},{path:"/Escena1_1",name:"Escena1_1",component:()=>t.e(443).then(t.bind(t,9206))},{path:"/Escena1_2",name:"Escena1_2",component:()=>t.e(443).then(t.bind(t,1295))},{path:"/Escena2",name:"Escena2",component:()=>t.e(443).then(t.bind(t,9216))},{path:"/FinalBueno",name:"FinalBueno",component:()=>t.e(443).then(t.bind(t,1841))},{path:"/Esconderse",name:"Esconderse",component:()=>t.e(443).then(t.bind(t,5114))},{path:"/Explicacion3",name:"Explicacion3",component:()=>t.e(443).then(t.bind(t,2923))},{path:"/FinalTriste",name:"FinalTriste",component:()=>t.e(443).then(t.bind(t,9268))},{path:"/Levy",name:"Levy",component:()=>t.e(443).then(t.bind(t,7696))},{path:"/Gheek",name:"Gheek",component:()=>t.e(443).then(t.bind(t,7803))},{path:"/BosquedeGyrio",name:"BosquedeGyrio",component:()=>t.e(443).then(t.bind(t,703))},{path:"/Inicio",name:"Inicio",component:()=>t.e(443).then(t.bind(t,6572))}],E=new _.ZP({mode:"history",base:"/pra2webfinal/",routes:k});var j=E;t(7024);r["default"].config.productionTip=!1,r["default"].use(o.XG7),r["default"].use(a.A7),new r["default"]({router:j,render:n=>n(g)}).$mount("#app")},9469:function(n,e,t){n.exports=t.p+"img/logotipo.744d0383.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){n.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.eade9a58.js"}}(),function(){t.miniCssF=function(n){return"css/about.2046a5dc.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="pra2web:";t.l=function(r,o,a,i){if(n[r])n[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+a){u=p;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+a),u.src=r),n[r]=[o];var f=function(e,t){u.onerror=u.onload=null,clearTimeout(d);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(t)})),e)return e(t)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/pra2webfinal/"}(),function(){if("undefined"!==typeof document){var n=function(n,e,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=e,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===n||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===n||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(e(i,u))return o();n(r,u,null,o,a)}))},o={143:0};t.f.miniCss=function(n,e){var t={443:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(e),u=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(e&&e(r);s<i.length;s++)a=i[s],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},r=self["webpackChunkpra2web"]=self["webpackChunkpra2web"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(1481)}));r=t.O(r)})();
//# sourceMappingURL=app.74046f2c.js.map