(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1004:function(t,e){t.exports='<h1 id="interaction-viewer">interaction-viewer</h1>\n<p><a href="https://www.npmjs.com/package/interaction-viewer"><img src="https://img.shields.io/npm/v/interaction-viewer.svg" alt="Published on NPM"></a></p>\n<p>An adjacency graph visualisation of protein interaction data.</p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;interaction-viewer accession=&quot;O60941&quot;&gt;&lt;/interaction-viewer&gt;</code></pre>\n<h2 id="api">API</h2>\n<ul>\n<li><code>accession</code> changing the accession will cause the component to fetch the data for the given entry</li>\n</ul>\n<h2 id="dependencies">Dependencies</h2>\n<p>This component uses Custom elements V1 (<a href="https://www.webcomponents.org/polyfills/">https://www.webcomponents.org/polyfills/</a>), which requires the use of a polyfill in certain browsers.</p>\n<h1 id="contact">Contact</h1>\n<p>For support contact <a href="mailto:help@uniprot.org">help@uniprot.org</a> and please put interaction viewer in the subject line.</p>\n<h1 id="license">License</h1>\n<p>Distributed under the Apache License 2.0</p>\n'},171:function(t,e,n){"use strict";n.r(e);var r,o,c,i,a=n(0),s=n.n(a),l=n(35),u=n(1004),f=n.n(u),p=n(789),d=n(915);function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var j=function(t,e,n,r){var o,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":O(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(c<3?o(i):c>3?o(e,n,i):o(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(s,t);var e,n,i,a=m(s);function s(){return y(this,s),a.apply(this,arguments)}return e=s,(n=[{key:"handleChange",value:function(t){var e=t.target.value;this.dispatchEvent(new CustomEvent("filter-select",{detail:e?JSON.parse(e):[],composed:!0}))}},{key:"handleReset",value:function(){this.dispatchEvent(new CustomEvent("filter-select",{detail:[],composed:!0}))}},{key:"render",value:function(){var t,e=this;return Object(p.c)(r||(r=h(["\n      <form>\n        <fieldset>\n          <legend>Filter</legend>\n          ",'\n          <button type="reset" @click=',">Clear</button>\n        </fieldset>\n      </form>\n    "])),null===(t=this.filterConfig)||void 0===t?void 0:t.map((function(t){return Object(p.c)(o||(o=h(["\n              <label for=","\n                >","\n                <select\n                  name=","\n                  id=","\n                  @change=",'\n                >\n                  <option value="">Select...</option>\n                  ',"\n                </select>\n              </label>\n            "])),t.name,t.label,t.name,t.name,e.handleChange,Object.keys(t.items).map((function(e){return Object(p.c)(c||(c=h(["\n                      <option\n                        value=","\n                      >\n                        ","\n                      </option>\n                    "])),JSON.stringify(t.items[e]),e)})))})),this.handleReset)}}])&&b(e.prototype,n),i&&b(e,i),s}(p.a);x.styles=Object(p.b)(i||(i=h(["\n    fieldset {\n      margin: 0;\n      display: flex;\n      align-items: flex-end;\n      flex-wrap: wrap;\n      border: none;\n    }\n\n    label,\n    button {\n      margin-bottom: 0.5rem;\n    }\n\n    label {\n      font-size: 0.875rem;\n      margin-right: 1rem;\n      display: flex;\n      flex-direction: column;\n    }\n  "]))),j([Object(d.b)({type:Object})],x.prototype,"filterConfig",void 0);x=j([Object(d.a)("interaction-filters")],x);var k,S,R=n(115);function E(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=D(t);if(e){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}function I(t,e){return!e||"object"!==L(e)&&"function"!=typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var M=function(t,e,n,r){var o,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":L(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(c<3?o(i):c>3?o(e,n,i):o(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(c,t);var e,n,r,o=A(c);function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this)).visible=!1,window.customElements.get("protvista-tooltip")||window.customElements.define("protvista-tooltip",R.a),t.handleClickOutside=t.handleClickOutside.bind(T(t)),t}return e=c,(n=[{key:"handleClickOutside",value:function(t){var e=t.composedPath().map((function(t){return t.tagName}));e.includes("circle")||e.includes("PROTVISTA-TOOLTIP")||(this.visible=!1)}},{key:"connectedCallback",value:function(){_(D(c.prototype),"connectedCallback",this).call(this),document.addEventListener("click",this.handleClickOutside)}},{key:"disconnectedCallback",value:function(){_(D(c.prototype),"disconnectedCallback",this).call(this),document.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){return Object(p.c)(k||(k=E(['<protvista-tooltip\n      title="Interaction"\n      x=',"\n      y=","\n      ?visible=","\n    >\n      ","\n    </protvista-tooltip>"])),this.x,this.y,this.visible,this.content)}}])&&P(e.prototype,n),r&&P(e,r),c}(p.a);N.styles=Object(p.b)(S||(S=E(["\n    a,\n    a:link,\n    a:active,\n    a:hover {\n      color: #fff;\n    }\n\n    table {\n      color: #fff;\n    }\n  "]))),M([Object(d.b)({type:Object})],N.prototype,"content",void 0),M([Object(d.b)({type:Number})],N.prototype,"x",void 0),M([Object(d.b)({type:Number})],N.prototype,"y",void 0),M([Object(d.b)({type:Boolean})],N.prototype,"visible",void 0);N=M([Object(d.a)("interaction-tooltip")],N);var B=n(614),z=n(585),F=n(628);function J(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=U(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,c=t},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw c}}}}function q(t){return function(t){if(Array.isArray(t))return H(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||U(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(t,e){if(t){if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var V,W,$,G,K,Q=function(t,e){return t.accession>e.accession?-1:t.accession<e.accession?1:0},X=function(t,e){var n,r={},o={},c=new Map,i=new Map,a=[],s=[];t.forEach((function(t){var r={accession:t.accession,interactors:[]};t.accession===e?n=r:t.accession.startsWith(e)?a.push(r):s.push(r)}));var l=[n].concat(q(a.sort(Q)),q(s.sort(Q))),u=l.map((function(t){return t.accession}));t.forEach((function(t){if(i.set(t.accession,{name:t.name,proteinExistence:t.proteinExistence,taxonomy:t.taxonomy,diseases:t.diseases,subcellularLocations:t.subcellularLocations}),t.interactions.forEach((function(e){if(u.includes(e.accession1)&&u.includes(e.accession2)){var n="".concat(e.accession1).concat(e.accession2);c.set(n,e);var r=l.find((function(e){return e.accession===t.accession}));u.includes(e.accession1)&&u.includes(e.accession2)&&r.interactors.push(e.accession1===t.accession?e.accession2:e.accession1)}})),t.subcellularLocations&&t.subcellularLocations.filter((function(t){return t.locations})).forEach((function(e){var n,o=J(e.locations);try{for(o.s();!(n=o.n()).done;){var c=n.value;r[c.location.value]=r[c.location.value]?[].concat(q(r[c.location.value]),[t.accession]):[t.accession]}}catch(t){o.e(t)}finally{o.f()}})),t.diseases){var e,n=J(t.diseases);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.diseaseId&&(o[a.diseaseId]=o[a.diseaseId]?[].concat(q(o[a.diseaseId]),[t.accession]):[t.accession])}}catch(t){n.e(t)}finally{n.f()}}}));var f=[{name:"subcellularLocations",label:"Subcellular location",type:"tree",items:r},{name:"diseases",label:"Diseases",items:o}];return{adjacencyMap:l.filter((function(t){return!!t.interactors.length})),interactionsMap:c,entryStore:i,filterConfig:f}};function Y(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Z,tt=function(t,e){return t.dbReference?Object(p.c)(V||(V=Y(['<p>\n      <a\n        href="//www.uniprot.org/uniprot/',"#",'"\n        target="_blank"\n        >',"</a\n      >\n    </p>"])),e,t.acronym,t.diseaseId):Object(p.c)(W||(W=Y(["<p>","</p>"])),t.diseaseId)},et=function(t){return Object(p.c)($||($=Y(["",""])),t.locations.map((function(t){var e;return Object(p.c)(G||(G=Y(["<p>\n        ","","\n      </p>"])),null===(e=t.location)||void 0===e?void 0:e.value,t.topology?"(".concat(t.topology.value,")"):"")})))},nt=function(t,e,n,r,o){var c=n.adjacencyMap,i=n.entryStore,a=n.interactionsMap,s=100,l=0,u=10,f=100,d=18*c.length,h=d,y=Object(z.scaleBand)().rangeRound([0,d]),b=Object(z.scaleLinear)().range([.2,1]),v=Object(z.select)(t).append("svg").attr("width",d+f+l).attr("height",h+s+u).attr("class","interaction-viewer").append("g").attr("class","interaction-viewer-group").attr("transform","translate(".concat(f,",").concat(s,")"));y.domain(c.map((function(t){return t.accession}))),b.domain([0,10]);var m=function(t,e){var n=a.get("".concat(t).concat(e));return n||(n=a.get("".concat(e).concat(t))),n||console.error("Interaction not found for ".concat(t,":").concat(e)),n},g=function(t,e){return"//www.ebi.ac.uk/intact/query/id:".concat(t," AND id:").concat(e)},w=function(){v.selectAll(".active-group").remove()},O=function(t,e){r.x=+Object(z.mouse)(o)[0],r.y=+Object(z.mouse)(o)[1],r.content=function(t,e){var n,r,o,c,a=m(t,e),s=i.get(t),l=i.get(e);return Object(p.c)(K||(K=Y(["\n      <a\n        href=",'\n        target="_blank"\n        >Confirmed by '," experiment(s)</a\n      >\n\n      <table>\n        <thead>\n          <tr>\n            <th />\n            <th>Interactor 1</th>\n            <th>Interactor 2</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>","</td>\n            <td>",'</td>\n          </tr>\n          <tr>\n            <td>UniProt</td>\n            <td>\n              <a href="//uniprot.org/uniprot/','"\n                >','</a\n              >\n            </td>\n            <td>\n              <a href="//uniprot.org/uniprot/','"\n                >',"</a\n              >\n            </td>\n          </tr>\n          <tr>\n            <td>Chain</td>\n            <td>","</td>\n            <td>","</td>\n          </tr>\n          <tr>\n            <td>Disease association</td>\n            <td>\n              ","\n            </td>\n            <td>\n              ","\n            </td>\n          </tr>\n          <tr>\n            <td>Subcellular localisation</td>\n            <td>\n              ","\n            </td>\n            <td>\n              ",'\n            </td>\n          </tr>\n          <tr>\n            <td>Intact</td>\n            <td colspan="2">\n              <a\n                href=','\n                target="_blank"\n                >',";","</a\n              >\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    "])),g(a.interactor1,a.interactor2),a.experiments,s.name,l.name,a.accession1,a.accession1,a.accession2,a.accession2,a.chain1||"N/A",a.chain2||"N/A",null===(n=s.diseases)||void 0===n?void 0:n.map((function(t){return tt(t,a.accession1)})),null===(r=l.diseases)||void 0===r?void 0:r.map((function(t){return tt(t,a.accession2)})),null===(o=s.subcellularLocations)||void 0===o?void 0:o.map((function(t){return et(t)})),null===(c=l.subcellularLocations)||void 0===c?void 0:c.map((function(t){return et(t)})),g(a.interactor1,a.interactor2),a.interactor1,a.interactor2)}(t,e),r.visible=!0};var j=v.selectAll(".interaction-row").data(c).enter().append("g").attr("class","interaction-row").attr("transform",(function(t){return"translate(0,".concat(y(t.accession),")")})).each((function(t){var e=Object(z.select)(this).selectAll(".cell").data(t.interactors);e.enter().append("circle").attr("class","cell").attr("cx",(function(t){return y(t)+y.bandwidth()/2})).attr("cy",(function(){return y.bandwidth()/2})).attr("r",y.bandwidth()/3).style("fill-opacity",(function(e){var n=m(t.accession,e);return b(null==n?void 0:n.experiments)||1})).style("display",(function(e){return y(t.accession)<y(e)?"none":""})).on("click",(function(e){return O(t.accession,e)})).on("mouseover",(function(e){return n=t.accession,r=e,(o=v.insert("g").attr("class","active-group")).append("line").attr("class","active-row").attr("x1",0).attr("y1",y(n)+y.bandwidth()/2).attr("x2",y(r)).attr("y2",y(n)+y.bandwidth()/2),void o.append("line").attr("class","active-row").attr("x1",y(r)+y.bandwidth()/2).attr("y1",0).attr("x2",y(r)+y.bandwidth()/2).attr("y2",y(n));var n,r,o})).on("mouseout",w),e.exit().remove()}));j.append("rect").attr("x",-f).attr("width",f).attr("height",y.bandwidth()).attr("class","text-highlight"),j.append("text").attr("y",y.bandwidth()/2).attr("dy",".32em").attr("text-anchor","end").text((function(t){return i.get(t.accession).name})).attr("class",(function(t){return t.accession===e?"main-accession":""}));var x=v.selectAll(".column").data(c).enter().append("g").attr("class","column").attr("transform",(function(t){return"translate(".concat(y(t.accession),", 0)rotate(-90)")}));x.append("rect").attr("x",6).attr("width",s).attr("height",y.bandwidth()).attr("class","text-highlight"),x.append("text").attr("x",6).attr("y",y.bandwidth()/2).attr("dy",".32em").attr("text-anchor","start").text((function(t){return i.get(t.accession).name})).attr("class",(function(t){return t.accession===e?"main-accession":""}));var k="".concat(y(c[1].accession)," 0,").concat(y(c[c.length-1].accession)," 0,").concat(y(c[c.length-1].accession)," ").concat(y(c[c.length-1].accession),",").concat(y(c[0].accession)," 0");v.append("polyline").attr("points",k).attr("class","hidden-side").attr("transform",(function(){return"translate(".concat(y(c[1].accession),", 0)")}))};var rt,ot,ct,it,at=Object(p.b)(Z||(rt=['\n  :host {\n    position: relative;\n  }\n\n  :host #container {\n    margin-top: 1rem;\n  }\n\n  :host text {\n    font-family: "Open Sans", sans-serif;\n    fill: black;\n    opacity: 0.75;\n    font-size: 12px;\n  }\n\n  :host .active text {\n    opacity: 1;\n  }\n\n  :host .active-row {\n    stroke: #4a90e2;\n  }\n\n  :host .cell {\n    fill: #4a90e2;\n    cursor: pointer;\n  }\n\n  :host .cell:hover {\n    fill: red;\n    fill-opacity: 1;\n    transition: all 0.5s;\n  }\n\n  :host .hidden-side {\n    fill: #e8e8e8;\n  }\n\n  :host .main-accession {\n    font-weight: bold;\n  }\n\n  :host .text-highlight {\n    fill: #fff;\n    opacity: 0;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    transition: all 0.5s;\n  }\n'],ot||(ot=rt.slice(0)),Z=Object.freeze(Object.defineProperties(rt,{raw:{value:Object.freeze(ot)}}))));function st(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function lt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ut(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ft(t,e,n){return(ft="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=yt(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function pt(t,e){return(pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=yt(t);if(e){var o=yt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ht(this,n)}}function ht(t,e){return!e||"object"!==bt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function yt(t){return(yt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function bt(t){return(bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var vt=function(t,e,n,r){var o,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":bt(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(c<3?o(i):c>3?o(e,n,i):o(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},mt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pt(t,e)}(c,t);var e,n,r,o=dt(c);function c(){var t;return lt(this,c),(t=o.apply(this,arguments)).nodes=null,t.maxInteractors=50,t}return e=c,(n=[{key:"handleFilterSelection",value:function(t){0===t.detail.length?this.filteredAccessions=void 0:this.filteredAccessions&&0!==this.filteredAccessions.length?this.filteredAccessions=Object(F.a)(t.detail,this.filteredAccessions):this.filteredAccessions=t.detail}},{key:"connectedCallback",value:function(){ft(yt(c.prototype),"connectedCallback",this).call(this),this.addEventListener("filter-select",this.handleFilterSelection)}},{key:"disconnectedCallback",value:function(){ft(yt(c.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("filter-select",this.handleFilterSelection)}},{key:"getNodeByAccession",value:function(t){return this.nodes.find((function(e){return e.accession===t}))}},{key:"updated",value:function(t){var e=this;if(t.has("accession")){if(!this.accession)return;Object(B.b)("https://www.ebi.ac.uk/proteins/api/proteins/interaction/".concat(this.accession,".json")).then((function(t){e.processedData=X(t.payload,e.accession)}))}var n,r,o,c=this.shadowRoot.getElementById("container"),i=this.shadowRoot.getElementById("tooltip");c&&i&&(c.style.display="block",c.style.minHeight="6em",Object(z.select)(c).select(".interaction-title").remove(),Object(z.select)(c).select("svg").remove(),Object(z.select)(c).select(".interaction-tooltip").remove(),this.processedData&&(this.dispatchEvent(new CustomEvent("protvista-event",{detail:{loaded:!0,error:o},bubbles:!0})),nt(c,this.accession,Object.assign(Object.assign({},this.processedData),{adjacencyMap:(n=this.processedData.adjacencyMap,r=this.filteredAccessions,r?n.map((function(t){var e=t.accession,n=t.interactors;return{accession:e,interactors:n.filter((function(t){return r.includes(t)||r.includes(e)}))}})):n)}),i,this)))}},{key:"render",value:function(){var t,e,n=this;return this.processedData&&(e=this.processedData.adjacencyMap.filter((function(t){return!t.accession.startsWith(n.accession)})).length),e<=1||e>this.maxInteractors?Object(p.c)(ct||(ct=st([""]))):Object(p.c)(it||(it=st([' <p class="interaction-title">\n        '," has binary interactions with "," proteins\n      </p>\n\n      <interaction-filters\n        filterConfig=",'\n      ></interaction-filters>\n      <div id="container"></div>\n      <interaction-tooltip id="tooltip"></interaction-tooltip>'])),this.accession,e,JSON.stringify(null===(t=this.processedData)||void 0===t?void 0:t.filterConfig))}}])&&ut(e.prototype,n),r&&ut(e,r),c}(p.a);mt.styles=at,vt([Object(d.b)({type:String,reflect:!0})],mt.prototype,"accession",void 0),vt([Object(d.b)({type:Number,reflect:!0})],mt.prototype,"maxInteractors",void 0),vt([Object(d.c)()],mt.prototype,"processedData",void 0),vt([Object(d.c)()],mt.prototype,"filteredAccessions",void 0);mt=vt([Object(d.a)("interaction-viewer")],mt),e.default=function(t){return s.a.createElement(a.Fragment,null,s.a.createElement(l.default,{content:f.a}),s.a.createElement("interaction-viewer",{accession:"O00311"}))}},614:function(t,e,n){"use strict";n.d(e,"b",(function(){return v}));var r=n(656);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,c=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw c}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,d(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)})(t)}function u(t,e,n){return(u=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var y=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function i(t){try{s(r.next(t))}catch(t){c(t)}}function a(t){try{s(r.throw(t))}catch(t){c(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}s((r=r.apply(t,e||[])).next())}))},b=new Map,v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Headers({accept:"application/json"}),n=b.get(t);if(n)return n;var r=y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.fetch(t,{headers:e});case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Request Failed: Status = ".concat(r.status,"; URI = ").concat(t,"; Time = ").concat(new Date));case 5:if(204!==r.status){n.next=7;break}return n.abrupt("return",{payload:null,headers:r.headers});case 7:return n.next=9,r.json();case 9:return o=n.sent,n.abrupt("return",{payload:o,headers:r.headers});case 11:case"end":return n.stop()}}),n)})));return b.set(t,r),r.catch((function(){return b.delete(t)})),r},m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(b,t);var e,n,o,i,l,u=(e=b,n=f(),function(){var t,r=d(e);if(n){var o=d(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function b(){var t;return h(this,b),(t=u.call(this))._data=null,t.selector=(t.getAttribute("selector")||"").trim()||function(t){return t},t}return o=b,l=[{key:"is",get:function(){return"data-loader"}}],(i=[{key:"fetch",value:function(){return y(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,o,i,a,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=this.children,(e=Array.from(l).filter((function(t){return t.matches('source[src], script[type="application/json"]')}))).length){t.next=3;break}return t.abrupt("return");case 3:n=[],i=c(e),t.prev=5,i.s();case 7:if((a=i.n()).done){t.next=31;break}if(s=a.value,t.prev=9,!(s instanceof HTMLSourceElement)){t.next=22;break}return t.t0=Object,t.t1=Object,t.t2={},t.next=16,v(s.src);case 16:t.t3=t.sent,t.t4=t.t1.assign.call(t.t1,t.t2,t.t3),t.t5={srcElement:s,src:s.src},o=t.t0.assign.call(t.t0,t.t4,t.t5),t.next=23;break;case 22:o={payload:JSON.parse(s.textContent)};case 23:return t.abrupt("break",31);case 26:t.prev=26,t.t6=t.catch(9),n.push(t.t6);case 29:t.next=7;break;case 31:t.next=36;break;case 33:t.prev=33,t.t7=t.catch(5),i.e(t.t7);case 36:return t.prev=36,i.f(),t.finish(36);case 39:if(o){t.next=43;break}this._errors=n;try{this.dispatchEvent(new CustomEvent("error",{detail:n,bubbles:!0,cancelable:!0}))}catch(t){console.error(t)}return t.abrupt("return");case 43:"string"==typeof this.selector?this._data=Object(r.a)(o.payload,this.selector):this._data=this.selector(o.payload),o.payload=this.data,this.dispatchEvent(new CustomEvent("load",{detail:o,bubbles:!0,cancelable:!0}));case 46:case"end":return t.stop()}var l}),t,this,[[5,33,36,39],[9,26]])})))}},{key:"data",get:function(){return this._data}},{key:"loaded",get:function(){return!!this.data}},{key:"errors",get:function(){return this._errors}},{key:"selector",get:function(){return this._selector},set:function(t){this._selector=t}},{key:"connectedCallback",value:function(){this.fetch()}}])&&a(o.prototype,i),l&&a(o,l),b}(l(HTMLElement));e.a=m}}]);