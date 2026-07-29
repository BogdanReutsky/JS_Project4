var e,t="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},n={},o=0/0,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),f=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return o;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=a.test(e);return l||s.test(e)?c(e.slice(2),l?2:8):i.test(e)?o:+e}n=function(e,t,n){var o,r,i,a,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function g(e){var n=e-c,o=e-l;return void 0===c||n>=t||n<0||d&&o>=i}function w(){var e,n,o,r=p();if(g(r))return E(r);s=setTimeout(w,(e=r-c,n=r-l,o=t-e,d?v(o,i-n):o))}function E(e){return(s=void 0,f&&o)?h(e):(o=r=void 0,a)}function L(){var e,n=p(),i=g(n);if(o=arguments,r=this,c=n,i){if(void 0===s)return l=e=c,s=setTimeout(w,t),u?h(e):a;if(d)return s=setTimeout(w,t),h(c)}return void 0===s&&(s=setTimeout(w,t)),a}return t=y(t)||0,b(n)&&(u=!!n.leading,i=(d="maxWait"in n)?m(y(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),L.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=r=s=void 0},L.flush=function(){return void 0===s?a:E(p())},L};let h=document.querySelector(".start"),g=document.querySelector(".list"),w=document.querySelector(".country"),E=1,L="";async function $(){let e=w.value,t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${e}&apikey=Zqwp16d8s8fASQAt6sNhVwQmnMgHWNgA&keyword=${L}&page=${E}&size=20`),n=await t.json();return n._embedded?.events||[]}function _(e){let t=e.map(({id:e,name:t,dates:n,images:o,_embedded:r})=>`<li class="item">
    <img class="eventImage" src="${o[1].url}" data-id="${e}" data-src="${o[o.length-1].url}" alt="">
    <h3 class="eventName">${t}</h3>
    <p class="eventData">${n.start.localDate}</p>
    <p class="eventAdress">${r.venues[0].city?.name}</p>
    </li>`).join("");g.insertAdjacentHTML("beforeend",t)}h.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(async e=>{L=e.target.value,g.innerHTML="",_(await $())},1e3)),w.addEventListener("change",async()=>(g.innerHTML="",_(await $()))),$().then(e=>_(e));let T=document.querySelector(".element");new IntersectionObserver(e=>{e.forEach(async e=>{if(e.isIntersecting){E+=1;let e=await $();await _(e)}})},{rootMargin:"200px"}).observe(T);var S={};S=(function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var c=void 0;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var l=Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){return r(t[a][1][e]||e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n,a,s,c,l,u,d,f=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),a=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),c=(s=o('\n		<div class="basicLightbox '.concat(a.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return c.appendChild(e)}),l=r(c,"IMG"),u=r(c,"VIDEO"),d=r(c,"IFRAME"),!0===l&&s.classList.add("basicLightbox--img"),!0===u&&s.classList.add("basicLightbox--video"),!0===d&&s.classList.add("basicLightbox--iframe"),s),m=function(e){var n;return!1!==t.onClose(v)&&(n=function(){if("function"==typeof e)return e(v)},f.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===i(f)||f.parentElement.removeChild(f),n()},410),!0)};!0===t.closable&&f.addEventListener("click",function(e){e.target===f&&m()});var v={element:function(){return f},visible:function(){return i(f)},show:function(e){var n;return!1!==t.onShow(v)&&(n=function(){if("function"==typeof e)return e(v)},document.body.appendChild(f),setTimeout(function(){requestAnimationFrame(function(){return f.classList.add("basicLightbox--visible"),n()})},10),!0)},close:m};return v}},{}]},{},[1])(1);let M=document.querySelector(".list"),j=null,O="https://app.ticketmaster.com/",x="Zqwp16d8s8fASQAt6sNhVwQmnMgHWNgA";async function N(e){"Escape"===e.key&&(j.close(),j=null,document.removeEventListener("keydown",N))}async function C(e){let t=await fetch(`${O}discovery/v2/events/${e}.json?apikey=${x}`);return await t.json()}async function k(e){let t=await fetch(`${O}discovery/v2/events.json?keyword=${encodeURIComponent(e)}&apikey=${x}`),n=await t.json();return n._embedded?.events||[]}M.addEventListener("click",async e=>{if("IMG"!==e.target.nodeName)return;let t=e.target.dataset.id,n=await C(t),o=n._embedded?.attractions?.[0]?.name,r=e.target.dataset.src;(j=S.create(`
    <div class="modal">

        <button class="modal_close" type="button">&times;</button>

        <img class="modal_avatar" src="${r}" alt="">

        <div class="modal_content">

            <div class="modal_circle"></div>  

            <div class="modal_image">
                <img src="${r}" alt="#"/>
            </div>   

            <div class="modal_info">
               <h2>INFO</h2> 
               <p>${n.info??"Інформація відсутня"}</p> 
               
               <h2>WHEN</h2> 
               <p>${n.dates.start.localDate}</p> 
               <p>${n.dates.start.localTime.slice(0,5)} (${n.dates.timezone})</p> 
               
               <h2>WHERE</h2> 
               <p>${n._embedded.venues[0].city.name}, ${n._embedded.venues[0].country.name}</p> 
               <p>${n._embedded.venues[0].name}</p> 
               
               <h2>WHO</h2> 
               <p>${n._embedded?.attractions?.[0]?.name??"Невідомо"}</p> 
               
               <h2>PRICES</h2> 
                <p>#</p> 
                <a href="${n.url}">BUY TICKETS</a> 
                <p>#</p> 
                <a href="${n.url}">BUY TICKETS</a> 

            </div> 

        </div>

        
        <button class="modal_btn" type="button">MORE FROM THIS AUTHOR</button>

    </div>
    `)).show(),document.querySelector(".modal_close").addEventListener("click",()=>{j.close(),j=null,document.removeEventListener("keydown",N)}),document.querySelector(".modal_btn").addEventListener("click",async()=>{if(!o)return;let e=await k(o);M.innerHTML="",_(e),j.close()}),document.addEventListener("keydown",N)});
//# sourceMappingURL=JS_Project4.f6737d43.js.map
