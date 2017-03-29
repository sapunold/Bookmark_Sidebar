/*! (c) Philipp König under GPL-3.0 */
"use strict";function a(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},c=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(){var d="isDefined",e="forEach",f=function(){return function(){function b(){a(this,b)}return c(b,null,[{key:d,value:function(a){return"undefined"!=typeof a&&null!==a}},{key:e,value:function(a,b){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f=a.length;if(c){for(var g=f-1;g>=0;g--)if(this[d](a[g][e]))this[e](a[g],b,c);else if(b(a[g],g)===!1)break}else for(var h=0;h<f;h++)if(this[d](a[h][e]))this[e](a[h],b,c);else if(b(a[h],h)===!1)break}}]),b}()}(),g=function(f){var h=document,i=new WeakMap,j=new WeakMap,k=Symbol(),l="_fillNodeList",m="document",n="eq",o="get",p="length",q="remove",r="_addEventListener",s="_cloneEventListener",t="_addData",u="_cloneData",v="_cloneElement",w="clone",x="on",y="off",z="trigger",A="find",B="children",C="_htmlText",D="html",E="text",F="data",G="removeData",H="css",I="attr",J="removeAttr",K="addClass",L="removeClass",M="toggleClass",N="hasClass",O="_moveElement",P="_moveElementTo",Q="append",R="prepend",S="appendTo",T="prependTo",U="after",V="before",W="insertAfter",X="insertBefore",Y="_nextPrev",Z="next",$="prev",_="_siblings",aa="siblings",ba="nextAll",ca="prevAll",da="parent",ea="parents",fa="_realDimension",ga="realWidth",ha="realHeight";return function(){function ia(b){var c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a(this,ia);var d=b;if("string"==typeof b&&(c===!1||b.search("<")>-1)){var e=h.createElement("div");e.innerHTML=b,d=e.childNodes}this[l](d)}return c(ia,[{key:l,value:function(a){var c=this;if(f[d](a))if(a instanceof g)this[k]=a[o]();else if("string"==typeof a)this[k]=h.querySelectorAll(a);else if(a instanceof Node||a instanceof HTMLDocument||a instanceof Window)this[k]=[a];else if(a instanceof NodeList||a instanceof HTMLCollection)this[k]=a;else{if("object"!==("undefined"==typeof a?"undefined":b(a)))throw new DOMException("invalid parameter for jsu");this[k]=[],f[d](a[e])||(a=[a]),a[e](function(a){var b=function(a){c[k].indexOf(a)===-1&&c[k].push(a)};a instanceof g?a[e](b):Array.isArray(a)||a instanceof NodeList||a instanceof HTMLCollection||/^\[object (HTMLCollection|NodeList|Object)\]$/.test(a.toString())?f[e](a,b):c[k].push(a)})}else this[k]=[];this[e](function(a,b){c[b]=a})}},{key:e,value:function(a){var b=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return f[e](this[k],a,b),this}},{key:H,value:function(a,c){var g=!0,h=f[d](a),i=f[d](c),j=[];return this[e](function(d){h&&i&&"string"==typeof a?d.style[a]=c:h&&("string"==typeof a?(j.push(window.getComputedStyle(d)[a]),g=!1):"object"===("undefined"==typeof a?"undefined":b(a))&&Object.keys(a)[e](function(b){"string"==typeof b&&(d.style[b]=a[b])}))}),g?this:this[k].length>1?j:j[0]}},{key:I,value:function(a,c){var g=!0,h=f[d](a),i=f[d](c),j=[];return this[e](function(k){var l=function(a,b){f[d](k[a])?k[a]=b:k.setAttribute(a,b)},m=function(a){return f[d](k[a])?k[a]:k.getAttribute(a)};h&&i&&"string"==typeof a?l(a,c):h&&("string"==typeof a?(j.push(m(a)),g=!1):"object"===("undefined"==typeof a?"undefined":b(a))&&Object.keys(a)[e](function(b){"string"==typeof b&&l(b,a[b])}))}),g?this:this[k].length>1?j:j[0]}},{key:J,value:function(a){return this[e](function(b){b.removeAttribute(a)}),this}},{key:w,value:function(){return g[v](this)}},{key:F,value:function(a,c){var h=!0,i=f[d](a),l=f[d](c),m=[];return this[e](function(k){var n=j.get(k),o=f[d](n);i&&l?g[t](k,a,c):i?"string"==typeof a?(m.push(o?n[a]:void 0),h=!1):"object"===("undefined"==typeof a?"undefined":b(a))&&Object.keys(a)[e](function(b){"string"==typeof b&&g[t](k,b,a[b])}):(m.push(o?n:{}),h=!1)}),h?this:this[k].length>1?m:m[0]}},{key:G,value:function(a){var b=!f[d](a);return this[e](function(c){var e=j.get(c);f[d](e)&&(b?j.delete(c):f[d](e[a])&&delete e[a])}),this}},{key:x,value:function(a,b,c,d,h){var i=function(a,b){Object.keys(b)[e](function(c){try{Object.defineProperty(a,c,{value:b[c]})}catch(a){}})},j=c;"function"==typeof c?j=d:h=d,"undefined"==typeof j&&(j=null),"undefined"==typeof h&&(h=null);var k="string"==typeof b;return this[e](function(d){var l=a.split(/\s+/g);l[e](function(a){var l=function(g){i(g,{type:a}),k?f[e](d.querySelectorAll(":scope "+b),function(b){for(var e=g.target;e&&e!==d;){if(e===b){var f=new MouseEvent(a,g);i(f,{preventDefault:function(){g.preventDefault()},stopPropagation:function(){g.stopPropagation()},target:g.target,currentTarget:e}),c(f)}e=e.parentNode}}):"function"==typeof b&&b(g)};g[r](d,{event:a,fn:l,opts:j,wantsUntrusted:h})})},!0),this}},{key:y,value:function(a){return this[e](function(b){var c=i.get(b);if(f[d](c)){var g=a.split(/\s+/g);g[e](function(a){c[a]&&f[e](c[a],function(d,e){b.removeEventListener(a,d.fn),c[a].splice(e,1)},!0)})}}),this}},{key:z,value:function(a,b){var c=this,d=a.split(/\s+/g);return d[e](function(a){var d=new Event(a,b);c[e](function(a){a.dispatchEvent(d)})}),this}},{key:K,value:function(a){return this[e](function(b){b.classList.add(a)}),this}},{key:L,value:function(a){return this[e](function(b){b.classList.remove(a)}),this}},{key:M,value:function(a){return this[e](function(b){b.classList.toggle(a)}),this}},{key:N,value:function(a){var b=[];return this[e](function(c){b.push(c.classList.contains(a))}),this[k].length>1?b:b[0]}},{key:fa,value:function(a){var b=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=[],d="width",f=["left","right"];return"h"===a&&(d="height",f=["top","bottom"]),this[e](function(a){var e=a.getBoundingClientRect(),g=window.getComputedStyle(a),h=e[d];b&&(h+=parseInt(g.getPropertyValue("margin-"+f[0])),h+=parseInt(g.getPropertyValue("margin-"+f[1]))),c.push(h)}),this[k].length>1?c:c[0]}},{key:ga,value:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this[fa]("w",a)}},{key:ha,value:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this[fa]("h",a)}},{key:A,value:function(a){var b=[];return this[e](function(c){c instanceof HTMLIFrameElement?b.push(c.contentDocument.querySelectorAll(":scope "+a)):b.push(c.querySelectorAll(":scope "+a))}),new g(b)}},{key:B,value:function(a){var b=[];return this[e](function(c){b.push(c.querySelectorAll(":scope > "+a))}),new g(b)}},{key:C,value:function(a,b){var c=f[d](a),g=c?this:"";return this[e](function(d){c?d[b]=a:g+=d[b]}),g}},{key:D,value:function(a){return this[C](a,"innerHTML")}},{key:E,value:function(a){return this[C](a,"innerText")}},{key:q,value:function(){this[e](function(a){a&&a.parentElement&&(i.delete(a),j.delete(a),a.parentElement.removeChild(a))})}},{key:O,value:function(a){var b=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=arguments[2];"string"==typeof a&&a.search("<")>-1&&(b=!1);var d=new g(a,b);return this[e](function(a){var b=g[v](d);b[e](function(b){switch(c){case"append":a.appendChild(b);break;case"prepend":a.insertBefore(b,a.firstChild);break;case"before":a.parentNode.insertBefore(b,a);break;case"after":a.parentNode.insertBefore(b,a.nextSibling)}})}),d[q](),this}},{key:P,value:function(a,b){var c=this,d=[],f=new g(a);return f[e](function(a){var f=g[v](c);f[e](function(c){switch(b){case"append":a.appendChild(c);break;case"prepend":a.insertBefore(c,a.firstChild);break;case"before":a.parentNode.insertBefore(c,a);break;case"after":a.parentNode.insertBefore(c,a.nextSibling)}d.push(c)})}),this[q](),new g(d)}},{key:Q,value:function(a,b){return this[O](a,b,"append")}},{key:S,value:function(a){return this[P](a,"append")}},{key:R,value:function(a){var b=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this[O](a,b,"prepend")}},{key:T,value:function(a){return this[P](a,"prepend")}},{key:V,value:function(a){var b=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this[O](a,b,"before")}},{key:X,value:function(a){return this[P](a,"before")}},{key:U,value:function(a){var b=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this[O](a,b,"after")}},{key:W,value:function(a){return this[P](a,"after")}},{key:Y,value:function(a,b){var c=f[d](a),h=[];return this[e](function(e){var g="prev"===b?e.previousElementSibling:e.nextElementSibling;f[d](g)&&(!c||f[d](g.matches)&&g.matches(a))&&h.push(g)}),new g(h)}},{key:Z,value:function(a){return this[Y](a,"next")}},{key:$,value:function(a){return this[Y](a,"prev")}},{key:_,value:function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"siblings",c=f[d](a),h=[];return this[e](function(d){var e=null,f=[];for("siblings"===b&&d.parentNode.firstElementChild?(e=d.parentNode.firstElementChild,b="next"):"previous"!==b&&"next"!==b||(e=d[b+"ElementSibling"]);e&&e.matches;)e===d||c&&!e.matches(a)||f.push(e),e=e[b+"ElementSibling"];h.push(new g(f))}),this[k].length>1?h:h[0]}},{key:aa,value:function(a){return this[_](a)}},{key:ba,value:function(a){return this[_](a,"next")}},{key:ca,value:function(a){return this[_](a,"previous")}},{key:da,value:function(a){var b=f[d](a),c=[];return this[e](function(e){var h=e.parentNode;!b||f[d](h.matches)&&h.matches(a)||(h=null),c.push(new g(h))}),this[k].length>1?c:c[0]}},{key:ea,value:function(a){var b=this,c=f[d](a),h=[];return this[e](function(d){for(var e=[],f=d.parentNode;f&&f.matches&&f!==b;)c&&!f.matches(a)||e.push(f),f=f.parentNode;h.push(new g(e))}),this[k].length>1?h:h[0]}},{key:m,value:function(){var a=[];return this[e](function(b){a.push(new g(b.ownerDocument))}),this[k].length>1?a:a[0]}},{key:n,value:function(a){return a<0&&(a=this[k].length+a),new g(this[k][a])}},{key:o,value:function(a){return f[d](a)?(a<0&&(a=this[k].length+a),this[k][a]):this[k]}},{key:p,value:function(){return this[k].length}}],[{key:r,value:function(a,b){var c=i.get(a);f[d](c)||(c={},i.set(a,c)),c[b.event]||(c[b.event]=[]),c[b.event].push({fn:b.fn,opts:b.opts,wantsUntrusted:b.wantsUntrusted}),a.addEventListener(b.event,b.fn,b.opts,b.wantsUntrusted)}},{key:s,value:function(a,b){var c=i.get(a);f[d](c)&&Object.keys(c)[e](function(a){c[a][e](function(c){g[r](b,{event:a,fn:c.fn,opts:c.opts,wantsUntrusted:c.wantsUntrusted})})}),b.children&&f[e](b.children,function(b,c){g[s](a.children[c],b)})}},{key:t,value:function(a,b,c){var e=j.get(a);f[d](e)||(e={},j.set(a,e)),e[b]=c}},{key:u,value:function(a,b){var c=j.get(a);f[d](c)&&Object.keys(c)[e](function(a){g[t](b,a,c[a])}),b.children&&f[e](b.children,function(b,c){g[u](a.children[c],b)})}},{key:v,value:function(a){var b=[];return a[e](function(a){var c=a.cloneNode(!0);g[s](a,c),g[u](a,c),b.push(c)}),new g(b)}}]),ia}()}(f);window.jsu=function(a){return new g(a)}}();