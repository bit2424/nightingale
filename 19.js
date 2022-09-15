(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1049:function(t,e){t.exports='<h1 id="protvista-navigation">protvista-navigation</h1>\n<p><a href="https://www.npmjs.com/package/protvista-navigation"><img src="https://img.shields.io/npm/v/protvista-navigation.svg" alt="Published on NPM"></a></p>\n<p>This custom element can be used to zoom and navigate along the sequence displayed in ProtVista. When a user interacts with the component, a <code>change</code> event is triggered which <protvista-manager> uses to change <code>displaystart</code> and <code>displayend</code> values on relevant custom elements.</p>\n<p><a href="https://ebi-webcomponents.github.io/nightingale/#/navigation">Demo</a></p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;protvista-navigation\n  length=&quot;456&quot;\n  displaystart=&quot;143&quot;\n  displayend=&quot;400&quot;\n  highlightStart=&quot;23&quot;\n  highlightEnd=&quot;45&quot;\n  rulerstart=&quot;50&quot;\n/&gt;</code></pre>\n<h2 id="api-reference">API Reference</h2>\n<h4 id="length-number"><code>length: number</code></h4>\n<p>The protein or nucleic acid sequence length.</p>\n<h4 id="displaystart-number-optional"><code>displaystart: number (optional)</code></h4>\n<p>The start position of the selected region.</p>\n<h4 id="displayend-number-optional"><code>displayend: number (optional)</code></h4>\n<p>The end position of the selected region.</p>\n<h4 id="highlightstart-number-optional"><code>highlightStart: number (optional)</code></h4>\n<p>The start position of the highlighted region.</p>\n<h4 id="highlightend-number-optional"><code>highlightEnd: number (optional)</code></h4>\n<p>The end position of the highlighted region.</p>\n<h4 id="rulerstart-number-optional"><code>rulerstart: number (optional)</code></h4>\n<p>The starting coordinate of the ruler.</p>\n<h4 id="also-see-protvista-zoomable">also see <a href="https://github.com/ebi-webcomponents/nightingale/blob/master/packages/protvista-zoomable/README.md#properties">protvista-zoomable</a></h4>\n'},164:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(700),a=n(111),s=n(35),l=n(1049),h=n.n(l);e.default=function(t){return Object(a.a)("protvista-navigation",o.a),r.a.createElement(i.Fragment,null,r.a.createElement(s.default,{content:h.a}),r.a.createElement("protvista-navigation",{length:"456",displaystart:"143",displayend:"400",highlightStart:"23",highlightEnd:"45",rulerstart:"50"}))}},593:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var i,r,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(o.push(i.value),!e||o.length!==e);a=!0);}catch(t){s=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"b",(function(){return N})),n.d(e,"e",(function(){return P})),n.d(e,"a",(function(){return C})),n.d(e,"d",(function(){return F})),n.d(e,"c",(function(){return q})),n.d(e,"f",(function(){return z}));var s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.min,i=void 0===n?-1/0:n,r=e.max,a=void 0===r?1/0:r;o(this,t),this.segments=[],this.max=a,this.min=i,this.regionString=null}var e,n,r;return e=t,(n=[{key:"encode",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.segments.map((function(n){var i=n.start,r=n.end,o=n.color;if(e)return"".concat(i,":").concat(r).concat(o?":".concat(o):"");var a=i===t.min?"":i,s=r===t.max?"":r;return"".concat(a,":").concat(s).concat(o?":".concat(o):"")})).join(",")}},{key:"decode",value:function(t){var e=this;void 0!==t&&(this.regionString=t),this.regionString?this.segments=this.regionString.split(",").map((function(t){var n=i(t.split(":"),4),r=n[0],o=n[1],a=n[2];if(void 0!==n[3])throw new Error("there should be at most 2 ':' per region. Region: ".concat(t));var s=r?Number(r):e.min,l=o?Number(o):e.max,h=""!==a?a:void 0;if(s>l){var c=[l,s];s=c[0],l=c[1]}if(s<e.min&&(s=e.min),l>e.max&&(l=e.max),Number.isNaN(s))throw new Error("The parsed value of ".concat(r," is NaN. Region: ").concat(t));if(Number.isNaN(l))throw new Error("The parsed value of ".concat(o," is NaN. Region: ").concat(t));if(h&&!h.match(/^#[0-9a-f]{6,8}$/i))throw new Error("The parsed value of ".concat(a," is not a color in hex format. Region: ").concat(t));return{start:s,end:l,color:h}})):this.segments=[]}}])&&a(e.prototype,n),r&&a(e,r),t}();function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var h=function(t,e){return t?e?"".concat(t,",").concat(e):t:e},c=function(){function t(e){var n=e.element,i=e.min,r=e.max;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=n,this.element._highlightcolor="#FFEB3B66",this.region=new s({min:i,max:r}),this.fixedHighlight=null}var e,n,i;return e=t,(n=[{key:"max",set:function(t){this.region.max=t}},{key:"setAttributesInElement",value:function(){this.region.decode(this.element.getAttribute("highlight")),0===this.region.segments.length&&(this.element._highlightstart=Number(this.element.getAttribute("highlightstart")),this.element._highlightend=Number(this.element.getAttribute("highlightend")),this.element._highlightcolor=this.element.getAttribute("highlightcolor")||"#FFEB3B66",null!==this.element._highlightstart&&null!==this.element._highlightend&&"number"==typeof this.element._highlightstart&&"number"==typeof this.element._highlightend&&(this.element._highlight="".concat(this.element._highlightstart,":").concat(this.element._highlightend),this.region.decode(h(this.fixedHighlight,this.element._highlight))))}},{key:"setFloatAttribute",value:function(t,e){var n=parseFloat(e);this.element["_".concat(t)]=Number.isNaN(n)?e:n}},{key:"changedCallBack",value:function(t,e){switch(t){case"highlightstart":case"highlightend":this.setFloatAttribute(t,e),this.element._highlight=Number.isNaN(this.element._highlightstart)||Number.isNaN(this.element._highlightend)||void 0===this.element._highlightstart||void 0===this.element._highlightend||null===this.element._highlightstart||null===this.element._highlightend?"":"".concat(Math.max(this.region.min,this.element._highlightstart),":").concat(Math.min(this.region.max,this.element._highlightend));break;default:this.element._highlight=e}this.region.decode(h(this.fixedHighlight,this.element._highlight)),this.element.refresh()}},{key:"setFixedHighlight",value:function(t){this.fixedHighlight=t,this.region.decode(h(t,this.element._highlight)),this.element.refresh()}},{key:"appendHighlightTo",value:function(t){this.highlighted=t.append("g").attr("class","highlighted")}},{key:"updateHighlight",value:function(){var t=this,e=this.highlighted.selectAll("rect").data(this.region.segments);e.enter().append("rect").style("pointer-events","none").merge(e).attr("fill",(function(e){return e.color?e.color:t.element._highlightcolor})).attr("height",this.element._height).attr("x",(function(e){return t.element.getXFromSeqPosition(e.start)})).attr("width",(function(e){return t.element.getSingleBaseWidth()*(e.end-e.start+1)})),e.exit().remove()}}])&&l(e.prototype,n),i&&l(e,i),t}();function u(t){var e=document.createElement("div");return e.style.borderColor="",e.style.borderColor=t,""!==e.style.borderColor}var f=function(t){return t};function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.timeStampWheelOutside=0,this.resetScrollableTimeout=null}var e,n,i;return e=t,(n=[{key:"setElementScrollable",value:function(t){this.element.setAttribute("scrollable",t)}},{key:"startResetScrollableTimer",value:function(){var t=this;this.resetScrollableTimeout&&clearTimeout(this.resetScrollableTimeout),this.resetScrollableTimeout=setTimeout((function(){t.setElementScrollable(!0),t.resetScrollableTimeout=null}),400)}},{key:"blockScroll",value:function(t){this.timeStampWheelOutside=t,this.setElementScrollable(!1),this.startResetScrollableTimer()}},{key:"isWheelEventInsideElement",value:function(t,e){var n=this.element.getBoundingClientRect(),i=n.height,r=n.width,o=n.x,a=n.y;return t>o&&e<o+r&&e>a&&e<a+i}},{key:"wheel",value:function(t){var e=t.x,n=t.y,i=t.timeStamp;this.isWheelEventInsideElement(e,n)?i<this.timeStampWheelOutside+400?this.blockScroll(i):this.setElementScrollable(!0):this.blockScroll(i)}}])&&p(e.prototype,n),i&&p(e,i),t}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=y(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function b(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function x(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}function S(t,e,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function E(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=A(t);if(e){var r=A(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return j(this,n)}}function j(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=["left","right","top","bottom"],T=R.map((function(t){return"margin".concat(t)})),N=s,P=c,C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[],n=[];if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var i=t.split(",").map((function(t){return t.split(":")}));if(i.length<2)throw new Error("There should be at least 2 points to create a scale");e=i.map((function(t){var e=t[0].trim().toUpperCase();if(!u(e))throw new Error("The color '".concat(e," is not valid'"));return e})),n=i.map((function(t,e){var n=parseFloat(t[1]);if(Number.isNaN(n))throw new Error("The second part of every point should be a number. Error in point ".concat(e,": ").concat(t));return n}))}return{range:e,domain:n}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.keyFormatter,i=void 0===n?f:n,r=e.valueFormatter,o=void 0===r?f:r;if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var a=t.split(",").map((function(t){return t.split(":")})),s={};return a.forEach((function(t){if(2!==t.length)throw new Error("Bad block: ".concat(t.join(":"),"\n The blocks of the string should follow the format KEY:VALUE"));s[i(t[0])]=o(t[1])})),s}return{}},q=d,z=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{initialValue:{top:0,bottom:0,left:0,right:0}},i=function(t){E(i,t);var e=O(i);function i(){var t;return _(this,i),(t=e.call(this)).margin=n.initialValue,t}return x(i,[{key:"attributeChangedCallback",value:function(t,e,n){e!==n&&T.includes(t)&&(this[t]=n),S(A(i.prototype),"attributeChangedCallback",this).call(this,t,e,n)}}],[{key:"observedAttributes",get:function(){return[].concat(b(S(A(i),"observedAttributes",this)),b(T))}}]),i}(t),r=m(R);try{var o=function(){var t=e.value;Object.defineProperty(i.prototype,"margin".concat(t),{get:function(){return this.margin[t]||0},set:function(e){this.margin[t]=+e}})};for(r.s();!(e=r.n()).done;)o()}catch(t){r.e(t)}finally{r.f()}return i}},700:function(t,e,n){"use strict";var i=n(585),r=n(593);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return h(t,arguments,f(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),u(i,t)})(t)}function h(t,e,n){return(h=c()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&u(r,n.prototype),r}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(p,t);var e,n,r,o,l,h=(e=p,n=c(),function(){var t,i=f(e);if(n){var r=f(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return s(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=h.call(this))._x=null,t._padding=0,t.height=40,t.dontDispatch=!1,t}return r=p,l=[{key:"observedAttributes",get:function(){return["length","displaystart","displayend","highlightStart","highlightEnd","width","rulerstart"]}}],(o=[{key:"_refreshWidth",value:function(){this.style.display="block",this.style.width="100%",this.width=this.offsetWidth-this.margin.left-this.margin.right,this.width>0&&(this._padding=10)}},{key:"connectedCallback",value:function(){this._refreshWidth(),this.closest("protvista-manager")&&(this.manager=this.closest("protvista-manager"),this.manager.register(this)),this._length=parseFloat(this.getAttribute("length")),this._displaystart=parseFloat(this.getAttribute("displaystart"))||1,this._displayend=parseFloat(this.getAttribute("displayend"))||this._length,this._highlightStart=parseFloat(this.getAttribute("highlightStart")),this._highlightEnd=parseFloat(this.getAttribute("highlightEnd")),this._rulerstart=parseFloat(this.getAttribute("rulerStart"))||1,this._onResize=this._onResize.bind(this),this._createNavRuler()}},{key:"disconnectedCallback",value:function(){this.manager&&this.manager.unregister(this),this._ro&&this._ro.unobserve(this),window.removeEventListener("resize",this._onResize)}},{key:"attributeChangedCallback",value:function(t,e,n){e!==n&&(this["_".concat(t)]=parseFloat(n),this._updateNavRuler())}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}},{key:"_createNavRuler",value:function(){var t=this;this._x=Object(i.scaleLinear)().range([this._padding,this.width-this._padding]),this._x.domain([this._rulerstart,this._rulerstart+this._length-1]),Object(i.select)(this).selectAll("div").remove(),this._container=Object(i.select)(this).append("div").attr("class","container"),this._svg=this._container.append("svg").attr("id","").attr("width",this.width).attr("height",this.height),this._xAxis=Object(i.axisBottom)(this._x),this._displaystartLabel=this._svg.append("text").attr("class","start-label").attr("x",0).attr("y",this.height-this._padding),this._displayendLabel=this._svg.append("text").attr("class","end-label").attr("x",this.width).attr("y",this.height-this._padding).attr("text-anchor","end"),this._axis=this._svg.append("g").attr("class","x axis").call(this._xAxis),this._viewport=Object(i.brushX)().extent([[this._padding,0],[this.width-this._padding,.51*this.height]]).on("brush",(function(){i.event.selection&&(t._displaystart=Object(i.format)("d")(t._x.invert(i.event.selection[0])),t._displayend=Object(i.format)("d")(t._x.invert(i.event.selection[1])),t.dontDispatch||t.dispatchEvent(new CustomEvent("change",{detail:{displayend:t._displayend,displaystart:t._displaystart,extra:{transform:i.event.transform}},bubbles:!0,cancelable:!0})),t._updateLabels(),t._updatePolygon())})),this._brushG=this._svg.append("g").attr("class","brush").call(this._viewport),this._brushG.call(this._viewport.move,[this._x(this._displaystart),this._x(this._displayend)]),this.polygon=this._svg.append("polygon").attr("class","zoom-polygon").attr("fill","#777").attr("fill-opacity","0.3"),this._updateNavRuler(),"ResizeObserver"in window&&(this._ro=new ResizeObserver(this._onResize),this._ro.observe(this)),window.addEventListener("resize",this._onResize)}},{key:"_onResize",value:function(){this._refreshWidth(),this._x=this._x.range([this._padding,this.width-this._padding]),this._svg.attr("width",this.width),this._viewport.extent([[this._padding,0],[this.width-this._padding,.51*this.height]]),this._brushG.call(this._viewport),this._updateNavRuler()}},{key:"_updateNavRuler",value:function(){this._x&&(this._container.style("padding-left","".concat(this.margin.left,"px")).style("padding-right","".concat(this.margin.right,"px")).style("padding-top","".concat(this.margin.top,"px")).style("padding-bottom","".concat(this.margin.bottom,"px")),this._x.domain([this._rulerstart,this._rulerstart+this._length-1]),this._axis.call(this._xAxis),this._updatePolygon(),this._updateLabels(),this._brushG&&(this.dontDispatch=!0,this._brushG.call(this._viewport.move,[this._x(this._displaystart),this._x(this._displayend)]),this.dontDispatch=!1))}},{key:"_updateLabels",value:function(){this._displaystartLabel&&this._displaystartLabel.text(this._displaystart),this._displayendLabel&&this._displayendLabel.attr("x",this.width).text(this._displayend)}},{key:"_updatePolygon",value:function(){this.polygon&&this.polygon.attr("points","".concat(this._x(this._displaystart),",").concat(this.height/2,"\n        ").concat(this._x(this._displayend),",").concat(this.height/2,"\n        ").concat(this.width,",").concat(this.height,"\n        0,").concat(this.height))}}])&&a(r.prototype,o),l&&a(r,l),p}(l(HTMLElement));e.a=Object(r.f)(p)}}]);