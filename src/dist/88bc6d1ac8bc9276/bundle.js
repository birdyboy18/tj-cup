!function(){function e(t,n){n=n||l;var r;return m?(r=window.requestIdleCallback(function(r){if(r.timeRemaining()<=10&&!r.didTimeout)return e(t,n);t(r)},n),window.cancelIdleCallback.bind(window,r)):d?(r=setTimeout(t,0),clearTimeout.bind(window,r)):void 0}function t(e){e&&f(e)}function n(e){if(!(this instanceof n))return new n(e);this._name=e||"nanobus",this._starListeners=[],this._listeners={}}function r(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}function i(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(T(e,t),function(e,t){for(var n,r,s,a,u=0,c=0;n=t.childNodes[c],r=e.childNodes[c-u],n||r;c++)if(r)if(n)if(o(r,n))(s=i(r,n))!==n&&(t.replaceChild(s,n),u++);else{a=null;for(var l=c;l<t.childNodes.length;l++)if(o(t.childNodes[l],r)){a=t.childNodes[l];break}a?((s=i(r,a))!==a&&u++,t.insertBefore(s,n)):r.id||n.id?(t.insertBefore(r,n),u++):(s=i(r,n))!==n&&(t.replaceChild(s,n),u++)}else t.appendChild(r),u++;else t.removeChild(n),c--}(e,t),t):null:e}function o(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&e.type===S&&e.nodeValue===t.nodeValue}function s(){if(!(this instanceof s))return new s;this.trie={nodes:{}}}function a(e){function t(e){for(var t=new Array(arguments.length),i=1;i<t.length;i++)t[i]=arguments[i];var o=r.match(e);if(o&&o.cb){t[0]=o.params;var s=o.cb;return s.apply(s,t)}var a=r.match(n);if(a&&a.cb){t[0]=a.params;var u=a.cb;return u.apply(u,t)}throw new Error("route '"+e+"' did not match")}if(!(this instanceof a))return new a(e);var n=(e||"").replace(/^\//,""),r=I();return t._trie=r,t.emit=t,t.on=function(e,n){return e=e||"/",n.route=e,n&&n._wayfarer&&n._trie?r.mount(e,n._trie.trie):r.create(e).cb=n,t},t._wayfarer=!0,t}function u(e){if(!(this instanceof u))return new u(e);e=e||{};var t=this;this._events={DOMCONTENTLOADED:"DOMContentLoaded",DOMTITLECHANGE:"DOMTitleChange",REPLACESTATE:"replaceState",PUSHSTATE:"pushState",NAVIGATE:"navigate",POPSTATE:"popState",RENDER:"render"},this._historyEnabled=void 0===e.history||e.history,this._hrefEnabled=void 0===e.href||e.href,this._hasWindow="undefined"!=typeof window,this._createLocation=E,this._loaded=!1,this._tree=null,this.router=U({curry:!0}),this.emitter=y("choo.emit");var n={events:this._events};this._hasWindow?(this.state=window.initialState?C(window.initialState,n):n,delete window.initialState):this.state=n,this._hasWindow&&(this.state.title=document.title),this.emitter.prependListener(this._events.DOMTITLECHANGE,function(e){t.state.title=e,t._hasWindow&&(document.title=e)})}"function"==typeof Symbol&&Symbol.iterator;var c=function(e){var t=document.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);document.addEventListener("DOMContentLoaded",function(){e()})};"function"==typeof Symbol&&Symbol.iterator;var l={},d="undefined"!=typeof window,m=d&&window.requestIdleCallback,f=e;"function"==typeof Symbol&&Symbol.iterator;var h,p=!0;try{h=window.performance,p="true"===window.localStorage.DISABLE_NANOTIMING||!h.mark}catch(e){}var v=function(e){function n(t){var n="end-"+r+"-"+e;h.mark(n),f(function(){var o=e+" ["+r+"]";h.measure(o,i,n),h.clearMarks(i),h.clearMarks(n),t&&t(e)})}if(p)return t;var r=(1e4*h.now()).toFixed()%Number.MAX_SAFE_INTEGER,i="start-"+r+"-"+e;return h.mark(i),n.uuid=r,n},b=function(e,t,n){var r,i=e.length;if(!(t>=i||0===n)){var o=i-(n=t+n>i?i-t:n);for(r=t;r<o;++r)e[r]=e[r+n];e.length=o}},y={};"function"==typeof Symbol&&Symbol.iterator;y=n,n.prototype.emit=function(e){for(var t=[],n=1,r=arguments.length;n<r;n++)t.push(arguments[n]);var i=v(this._name+"('"+e+"')"),o=this._listeners[e];return o&&o.length>0&&this._emit(this._listeners[e],t),this._starListeners.length>0&&this._emit(this._starListeners,e,t,i.uuid),i(),this},n.prototype.on=n.prototype.addListener=function(e,t){return"*"===e?this._starListeners.push(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)),this},n.prototype.prependListener=function(e,t){return"*"===e?this._starListeners.unshift(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].unshift(t)),this},n.prototype.once=function(e,t){function n(){t.apply(r,arguments),r.removeListener(e,n)}var r=this;return this.on(e,n),this},n.prototype.prependOnceListener=function(e,t){function n(){t.apply(r,arguments),r.removeListener(e,n)}var r=this;return this.prependListener(e,n),this},n.prototype.removeListener=function(e,t){function n(e,t){if(e){var n=e.indexOf(t);return-1!==n?(b(e,n,1),!0):void 0}}return"*"===e?(this._starListeners=this._starListeners.slice(),n(this._starListeners,t)):(void 0!==this._listeners[e]&&(this._listeners[e]=this._listeners[e].slice()),n(this._listeners[e],t))},n.prototype.removeAllListeners=function(e){return e?"*"===e?this._starListeners=[]:this._listeners[e]=[]:(this._starListeners=[],this._listeners={}),this},n.prototype.listeners=function(e){var t="*"!==e?this._listeners[e]:this._starListeners,n=[];if(t)for(var r=t.length,i=0;i<r;i++)n.push(t[i]);return n},n.prototype._emit=function(e,t,n,r){if(void 0!==e&&0!==e.length){void 0===n&&(n=t,t=null),t&&(n=void 0!==r?[t,r].concat(n):[t].concat(n));for(var i=e.length,o=0;o<i;o++){var s=e[o];s.apply(s,n)}}},"function"==typeof Symbol&&Symbol.iterator;var w=/(noopener|noreferrer) (noopener|noreferrer)/,A=/^[\w-_]+:/;"function"==typeof Symbol&&Symbol.iterator;var E=function(){return window.location.pathname.replace(/\/$/,"")+window.location.hash.replace(/^#/,"/")},_=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"],g=_.length,T=function(e,t){var n=e.nodeType,i=e.nodeName;1===n&&function(e,t){for(var n=t.attributes,r=e.attributes,i=null,o=null,s=null,a=null,u=r.length-1;u>=0;--u)a=r[u],s=a.name,i=a.namespaceURI,o=a.value,i?(s=a.localName||s,t.getAttributeNS(i,s)!==o&&t.setAttributeNS(i,s,o)):t.hasAttribute(s)?t.getAttribute(s)!==o&&("null"===o||"undefined"===o?t.removeAttribute(s):t.setAttribute(s,o)):t.setAttribute(s,o);for(var c=n.length-1;c>=0;--c)!1!==(a=n[c]).specified&&(s=a.name,(i=a.namespaceURI)?(s=a.localName||s,e.hasAttributeNS(i,s)||t.removeAttributeNS(i,s)):e.hasAttributeNS(null,s)||t.removeAttribute(s))}(e,t),3!==n&&8!==n||t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;r(e,t,"checked"),r(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n),"null"===n&&(t.value="",t.removeAttribute("value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?r(e,t,"selected"):"TEXTAREA"===i&&function(t,n){var r=e.value;if(r!==n.value&&(n.value=r),n.firstChild&&n.firstChild.nodeValue!==r){if(""===r&&n.firstChild.nodeValue===n.placeholder)return;n.firstChild.nodeValue=r}}(0,t),function(e,t){for(var n=0;n<g;n++){var r=_[n];e[r]?t[r]=e[r]:t[r]&&(t[r]=void 0)}}(e,t)};"function"==typeof Symbol&&Symbol.iterator;var S=3,N=function(e,t){return i(t,e)};"function"==typeof Symbol&&Symbol.iterator;var L=/([^?=&]+)(=([^&]*))?/g,O=function(e){var t={};return e.replace(/^.*\?/,"").replace(L,function(e,n,r,i){t[decodeURIComponent(n)]=decodeURIComponent(i)}),t};"function"==typeof Symbol&&Symbol.iterator;var C=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)k.call(n,r)&&(e[r]=n[r])}return e},k=Object.prototype.hasOwnProperty,R=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)D.call(n,r)&&(e[r]=n[r])}return e},D=Object.prototype.hasOwnProperty,I={};"function"==typeof Symbol&&Symbol.iterator;I=s,s.prototype.create=function(e){function t(e,r){var i=n.hasOwnProperty(e)&&n[e];if(!1===i)return r;var o=null;return/^:|^\*/.test(i)?(r.nodes.hasOwnProperty("$$")?o=r.nodes.$$:(o={nodes:{}},r.nodes.$$=o),"*"===i[0]&&(r.wildcard=!0),r.name=i.replace(/^:|^\*/,"")):r.nodes.hasOwnProperty(i)?o=r.nodes[i]:(o={nodes:{}},r.nodes[i]=o),t(e+1,o)}var n=e.replace(/^\//,"").split("/");return t(0,this.trie)},s.prototype.match=function(e){function t(e,i){if(void 0!==i){var o=n[e];if(void 0===o)return i;if(i.nodes.hasOwnProperty(o))return t(e+1,i.nodes[o]);if(i.name){try{r[i.name]=decodeURIComponent(o)}catch(n){return t(e,void 0)}return t(e+1,i.nodes.$$)}if(i.wildcard){try{r.wildcard=decodeURIComponent(n.slice(e).join("/"))}catch(n){return t(e,void 0)}return i.nodes.$$}return t(e+1)}}var n=e.replace(/^\//,"").split("/"),r={},i=t(0,this.trie);if(i)return i=C(i),i.params=r,i},s.prototype.mount=function(e,t){var n=e.replace(/^\//,"").split("/"),r=null,i=null;if(1===n.length)i=n[0],r=this.create(i);else{var o=n.splice(0,n.length-1).join("/");i=n[0],r=this.create(o)}R(r.nodes,t.nodes),t.name&&(r.name=t.name),r.nodes[""]&&(Object.keys(r.nodes[""]).forEach(function(e){"nodes"!==e&&(r[e]=r.nodes[""][e])}),R(r.nodes,r.nodes[""].nodes),delete r.nodes[""].nodes)},"function"==typeof Symbol&&Symbol.iterator;var x=a,P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j=/file:\/\//.test("object"===("undefined"==typeof window?"undefined":P(window))&&window.location&&window.location.origin),V=new RegExp("^(file://|/)(.*.html?/?)?"),M=new RegExp("^(http(s)?(://))?(www.)?[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"),$=new RegExp("#"),G=new RegExp("[?].*$"),U=function(e){function t(e){return r?(e=function(e,t){return(e=j?e.replace(V,""):e.replace(M,"")).replace(G,"").replace($,"/")}(e))===o?i():(o=e,(i=n(e))()):n(e)}var n=x((e=e||{}).default||"/404"),r=e.curry||!1,i=null,o=null;return t.router=n,t.on=function(e,t){e=e.replace(/^[#/]/,""),n.on(e,t)},t};"function"==typeof Symbol&&Symbol.iterator;var q=u,H={};u.prototype.route=function(e,t){var n=this;this.router.on(e,function(r){return function(){n.state.params=r,n.state.route=e;var i=v("choo.route('"+e+"')"),o=t(n.state,function(e,t){n.emitter.emit(e,t)});return i(),o}})},u.prototype.use=function(e){var t="choo.use";t=e.storeName?t+"("+e.storeName+")":t;var n=v(t);e(this.state,this.emitter,this),n()},u.prototype.start=function(){var e=this;return this._historyEnabled&&(this.emitter.prependListener(this._events.NAVIGATE,function(){e.state.query=O(window.location.search),e._loaded&&(e.emitter.emit(e._events.RENDER),setTimeout(function(e,t){if(e)try{var n=document.querySelector(e);n&&n.scrollIntoView(t)}catch(e){}}.bind(null,window.location.hash),0))}),this.emitter.prependListener(this._events.POPSTATE,function(){e.emitter.emit(e._events.NAVIGATE)}),this.emitter.prependListener(this._events.PUSHSTATE,function(t){window.history.pushState(H,null,t),e.emitter.emit(e._events.NAVIGATE)}),this.emitter.prependListener(this._events.REPLACESTATE,function(t){window.history.replaceState(H,null,t),e.emitter.emit(e._events.NAVIGATE)}),window.onpopstate=function(){e.emitter.emit(e._events.POPSTATE)},e._hrefEnabled&&function(e,t){t=t||window.document,window.addEventListener("click",function(n){if(!(n.button&&0!==n.button||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.defaultPrevented)){var r=function e(n){if(n&&n!==t)return"a"!==n.localName||void 0===n.href?e(n.parentNode):n}(n.target);r&&(window.location.origin!==r.origin||r.hasAttribute("download")||"_blank"===r.getAttribute("target")&&w.test(r.getAttribute("rel"))||A.test(r.getAttribute("href"))||(n.preventDefault(),e(r)))}})}(function(t){var n=t.href;n!==window.location.href&&e.emitter.emit(e._events.PUSHSTATE,n)})),this.state.href=this._createLocation(),this.state.query=O(window.location.search),this._tree=this.router(this.state.href),this.emitter.prependListener(e._events.RENDER,function(e,t){t||(t=window.requestAnimationFrame);var n=!1,r=null;return function(){null!==r||n||(n=!0,t(function(){n=!1;for(var t=r.length,i=new Array(t),o=0;o<t;o++)i[o]=r[o];e.apply(e,i),r=null})),r=arguments}}(function(){var t=v("choo.render");e.state.href=e._createLocation();var n=e.router(e.state.href),r=v("choo.morph");N(e._tree,n),r(),t()})),c(function(){e.emitter.emit(e._events.DOMCONTENTLOADED),e._loaded=!0}),this._tree},u.prototype.mount=function(e){var t=this;c(function(){var n=v("choo.render"),r=t.start();t._tree="string"==typeof e?document.querySelector(e):e;var i=v("choo.morph");N(t._tree,r),i(),n()})},u.prototype.toString=function(e,t){return this.state=C(this.state,t||{}),this.state.href=e.replace(/\?.+$/,""),this.state.query=O(e),this.router(e).toString()};var K=function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];if(Array.isArray(i))e(t,i);else{if(("number"==typeof i||"boolean"==typeof i||i instanceof Date||i instanceof RegExp)&&(i=i.toString()),"string"==typeof i){if(/^[\n\r\s]+$/.test(i))continue;if(t.lastChild&&"#text"===t.lastChild.nodeName){t.lastChild.nodeValue+=i;continue}i=document.createTextNode(i)}i&&i.nodeType&&t.appendChild(i)}}},B="\ud83d\ude82\ud83d\ude8b\ud83d\ude8b - route not found",F=function(e,t){return function(){var e=document.createElement("div");e.setAttribute("class","time-item flex justify-around bg-white mv2 bb bw1 pa3");var t=document.createElement("div");t.setAttribute("class","postion"),K(t,[arguments[0]]);var n=document.createElement("div");n.setAttribute("class","name"),K(n,[arguments[1]]);var r=document.createElement("div");return r.setAttribute("class","time"),K(r,[arguments[2]]),K(e,["\n            ",t,"\n            ",n,"\n            ",r,"\n        "]),e}(t+1,e.name,e.time)},J={exports:{}},W=function(e,t){function n(){return fetch(r).then(function(e){return e.json()})}var r="api/time";e.times=[],e.newTime={name:"",time:""},t.on(e.events.DOMCONTENTLOADED,function(){t.on("newTime:update",function(t){var n=t.key,r=t.value;e.newTime[n]=r}),t.on("time:add",function(){""!==e.newTime.name&&""!==e.newTime.time&&function(e){var t={time:e.time,name:e.name},n=new Headers;return n.append("Content-Type","application/json"),fetch(r,{method:"post",headers:n,body:JSON.stringify(t)}).then(function(e){return e.json(t)})}(e.newTime).then(function(n){console.log(n),e.modalOpen=!1,t.emit("time:fetch"),t.emit(e.events.RENDER)}).catch(function(e){e&&console.log(e)})}),t.on("time:fetch",function(){n().then(function(n){e.times=n,t.emit(e.events.RENDER)})}),n().then(function(n){e.times=n,t.emit(e.events.RENDER)})})},z=q();z.use(W),z.use(function(e,t){e.modalOpen=!1,t.on(e.events.DOMCONTENTLOADED,function(n){t.on("modal:open",function(){e.modalOpen=!0,t.emit(e.events.RENDER)}),t.on("modal:close",function(){e.modalOpen=!1,t.emit(e.events.RENDER)})})}),z.route("/",function(e,t){return"TJ Cup"!==e.title&&t(e.events.DOMTITLECHANGE,"TJ Cup"),function(){var e=document.createElement("body"),t=document.createElement("div");t.setAttribute("class","container pv4");var n=document.createElement("div");n.setAttribute("class","flex flex-column justify-center items-center pa2");var r=document.createElement("img");r.setAttribute("src","assets/tj-cup-logo.png"),r.setAttribute("alt","TJ Cup Logo"),r.setAttribute("class","logo");var i=document.createElement("h1");i.setAttribute("class","f2 normal"),K(i,["Lap Times Leaderboard"]);var o=document.createElement("div");o.setAttribute("class","time-list"),K(o,["\n                    ",arguments[0],"\n                "]),K(n,["\n                ",r,"\n                ",i,"\n                ",o,"\n            "]),K(t,["\n            ",n,"\n        "]);var s=document.createElement("div");s.onclick=arguments[1],s.setAttribute("class","add-time-btn pa2 pr3 bg-white flex items-center justify-between");var a=document.createElement("img");return a.setAttribute("src","assets/clock.svg"),a.setAttribute("alt","Clock Icon"),a.setAttribute("class","icon pa1 mr2"),K(s,[a," Add Time"]),K(e,["\n        ",t,"\n        ",s,"\n        ",arguments[2],"\n    "]),e}(e.times.map(F),function(e){t("modal:open")},function(e,t){return function(){var e=document.createElement("div");e.setAttribute("class","overlay flex justify-center items-center flex-column "+arguments[6]);var t=document.createElement("div");t.onclick=arguments[0],t.setAttribute("class","close-icon pa2");var n=document.createElement("img");n.setAttribute("src","assets/close.svg"),n.setAttribute("alt","Close Icon"),K(t,[n]);var r=document.createElement("div");r.setAttribute("class","modal-content flex flex-column");var i=document.createElement("h2");i.setAttribute("class","f2 normal self-center"),K(i,["Add Time"]);var o=document.createElement("div");o.setAttribute("class","flex justify-start items-end input-wrap mv3");var s=document.createElement("label");s.setAttribute("class","tr pa3"),K(s,["Full Name:"]);var a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("placeholder","Amanda Kissandhug"),a.setAttribute("value",arguments[1]),a.onkeyup=arguments[2],a.setAttribute("class","f2 ph2"),K(o,["\n                ",s,"\n                ",a,"\n            "]);var u=document.createElement("div");u.setAttribute("class","flex justify-start items-end input-wrap mv3");var c=document.createElement("label");c.setAttribute("class","tr pa3"),K(c,["Time:"]);var l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","m.ss.ms"),l.setAttribute("value",arguments[3]),l.onkeyup=arguments[4],l.setAttribute("class","f2 ph2"),K(u,["\n                ",c,"\n                ",l,"\n            "]);var d=document.createElement("div");return d.onclick=arguments[5],d.setAttribute("class","submit-btn bg-black white self-end mt3 mr3"),K(d,["Submit"]),K(r,["\n            ",i,"\n            ",o,"\n            ",u,"\n            ",d,"\n        "]),K(e,["\n        ",t,"\n        ",r,"\n    "]),e}(function(e){t("modal:close")},e.newTime.name,function(e){t("newTime:update",{key:"name",value:this.value})},e.newTime.time,function(e){t("newTime:update",{key:"time",value:this.value})},function(){t("time:add")},e.modalOpen?"isActive":"")}(e,t))}),z.route("/*",function(e,t){return e.title!==B&&t(e.events.DOMTITLECHANGE,B),function(){var e=document.createElement("body");e.setAttribute("class","sans-serif");var t=document.createElement("h1");t.setAttribute("class","f-headline pa3 pa4-ns"),K(t,["\n        404 - route not found\n      "]);var n=document.createElement("a");return n.setAttribute("href","/"),n.setAttribute("class","link black underline"),K(n,["\n        Back to main\n      "]),K(e,["\n      ",t,"\n      ",n,"\n    "]),e}()}),z.mount("body"),J=J.exports}();
//# sourceMappingURL=bundle.js.map