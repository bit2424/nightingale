(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{165:function(t,n,e){"use strict";e.r(n);var r,i,a=e(0),o=e.n(a),c=e(580),l=e(710),s=e(709),u=e(589),d=e(590),f=e(708),p=function t(n,e,r){if(!(e.length<=0)){var i=!0,a=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var s=c.value;if(s.name===e[0])return void t(s.children,e.slice(1),s)}}catch(t){a=!0,o=t}finally{try{i||null==l.return||l.return()}finally{if(a)throw o}}var u={name:e[0],selected:!1,parent:r,children:[]};n.push(u),t(u.children,e.slice(1),u)}};function h(t,n){var e=t.split(", ");p(n,e)}function v(t,n,e){"number"==typeof e?e++:e=1;var r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;l.depth=e,n(l),l.children.length>0&&v(l.children,n,e)}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}}function b(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(t){return r=[],i={},fetch("https://www.ebi.ac.uk/proteins/api/proteins/interaction/".concat(t,".json")).then(function(t){return 404===t.status?null:t.ok?204===t.status?null:t.json():(console.error(new Error("Request Failed: Status = ".concat(t.status,"; URI = ").concat(url,"; Time = ").concat(new Date))),null)}).then(function(t){return function(t){if(!t)return;t=t.map(function(t){return t.interactions||(t.interactions=[]),t});var n=!0,e=!1,a=void 0;try{for(var o,c=function(){var n=o.value,e=!0,r=!1,i=void 0;try{for(var a,c=function(){var e=a.value,r=t.find(function(t){return t.accession===e.id});if(r&&!r.interactions.find(function(t){return t.id===n.accession})){var i=Object(f.a)(e);i.id=n.accession,r.interactions.push(i)}},l=n.interactions[Symbol.iterator]();!(e=(a=l.next()).done);e=!0)c()}catch(t){r=!0,i=t}finally{try{e||null==l.return||l.return()}finally{if(r)throw i}}},l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0)c()}catch(t){e=!0,a=t}finally{try{n||null==l.return||l.return()}finally{if(e)throw a}}var s=!0,u=!1,d=void 0;try{for(var p,v=t[Symbol.iterator]();!(s=(p=v.next()).done);s=!0){var b=p.value;b.filterTerms=[];var y=[],w=!0,g=!1,x=void 0;try{for(var k,O=function(){var n=k.value;"SELF"===n.interactionType?(n.source=b.accession,n.id=b.accession,m(n,y)):t.some(function(t){return t.accession===n.id})&&(n.source=b.accession,m(n,y))},j=b.interactions[Symbol.iterator]();!(w=(k=j.next()).done);w=!0)O()}catch(t){g=!0,x=t}finally{try{w||null==j.return||j.return()}finally{if(g)throw x}}if(b.interactions=y,b.subcellularLocations){var E=!0,S=!1,_=void 0;try{for(var F,A=b.subcellularLocations[Symbol.iterator]();!(E=(F=A.next()).done);E=!0){var T=F.value;if(T.locations){var I=!0,L=!1,P=void 0;try{for(var R,C=T.locations[Symbol.iterator]();!(I=(R=C.next()).done);I=!0){var D=R.value;h(D.location.value,r);var N=D.location.value.split(", ");b.filterTerms=b.filterTerms.concat(N)}}catch(t){L=!0,P=t}finally{try{I||null==C.return||C.return()}finally{if(L)throw P}}}}}catch(t){S=!0,_=t}finally{try{E||null==A.return||A.return()}finally{if(S)throw _}}}if(b.diseases){var q=!0,z=!1,M=void 0;try{for(var U,Z=b.diseases[Symbol.iterator]();!(q=(U=Z.next()).done);q=!0){var H=U.value;H.diseaseId&&(i[H.diseaseId]={name:H.diseaseId,selected:!1},b.filterTerms.push(H.diseaseId))}}catch(t){z=!0,M=t}finally{try{q||null==Z.return||Z.return()}finally{if(z)throw M}}}}}catch(t){u=!0,d=t}finally{try{s||null==v.return||v.return()}finally{if(u)throw d}}return t}(t)})}function m(t,n){var e=n.find(function(n){return t.id===n.id});e?t.isoform&&(e.isoform=t.isoform):n.push(t)}function w(t){for(var n=[],e=0,r=Object.entries(t);e<r.length;e++){var i=b(r[e],2),a=(i[0],i[1]);n.push(a)}return n}function g(){return[{name:"subcellularLocations",label:"Subcellular location",type:"tree",items:r},{name:"diseases",label:"Diseases",items:w(i)}]}e(662);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,n){return!n||"object"!==x(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function j(t){var n="function"==typeof Map?new Map:void 0;return(j=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return E(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),S(r,t)})(t)}function E(t,n,e){return(E=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&S(i,e.prototype),i}).apply(null,arguments)}function S(t,n){return(S=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var F,A=[];function T(t,n){if(t){var e="",r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;l.dbReference&&(e+='<p><a href="//www.uniprot.org/uniprot/'.concat(n,"#").concat(l.acronym,'" target="_blank">').concat(l.diseaseId,"</a></p>"))}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return e}return"N/A"}function I(t){if(t){var n='<ul class="tree-list">',e=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;if(l.locations){var s=!0,u=!1,d=void 0;try{for(var f,p=l.locations[Symbol.iterator]();!(s=(f=p.next()).done);s=!0){h(f.value.location.value,e)}}catch(t){u=!0,d=t}finally{try{s||null==p.return||p.return()}finally{if(u)throw d}}}}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return v(e,function(t){return n+='<li style="margin-left:'.concat(t.depth,'em">').concat(t.name,"</li>")}),"".concat(n,"</ul>")}return"N/A"}function L(t){return F.find(function(n){return n.accession===t})}function P(){var t=A.filter(function(t){return t.selected}),n=[];Object(c.g)(".cell").attr("opacity",function(e){var r=L(e.source),i=L(e.id),a=function(t,n,e){if(e.length<=0)return!0;var r=Object(u.a)(t.filterTerms,n.filterTerms);return Object(d.a)(r,e.map(function(t){return t.name})).length===e.length}(r,i,t);return a&&(n.push(r.accession),n.push(i.accession)),a?1:.1}),Object(c.g)(".interaction-viewer text").attr("fill-opacity",function(t){return n.includes(t.accession)?1:.1})}function R(){for(var t=0,n=A;t<n.length;t++){var e=n[t];Object(c.f)("#".concat(C(e.name))).classed("active",e.selected)}P()}function C(t){return t.toLowerCase().replace(/\s|,|^\d/g,"_")}function D(t,n){var e;Object(c.g)(".dropdown-pane").style("visibility","hidden"),A.filter(function(t){return t.type===n}).forEach(function(t){return t.selected=!1}),t.selected=!t.selected,Object(c.f)("[data-toggle=iv_".concat(n,"]")).text((e=t.name).length>25?e.substr(0,24)+"...":e),R()}function N(){var t="#".concat(Object(c.f)(this).attr("data-toggle")),n=Object(c.f)(t).style("visibility");Object(c.f)(".dropdown-pane").style("visibility","hidden"),Object(c.f)(t).style("visibility","hidden"===n?"visible":"hidden")}var q=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),O(this,_(n).call(this))}var e,r,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&S(t,n)}(n,j(HTMLElement)),e=n,i=[{key:"observedAttributes",get:function(){return["accession"]}}],(r=[{key:"connectedCallback",value:function(){this._accession=this.getAttribute("accession"),this.render()}},{key:"attributeChangedCallback",value:function(t,n,e){"accession"===t&&null!=n&&n!=e&&(this._accession=e,this.render())}},{key:"render",value:function(){var t=this;this._accession&&(this.style.display="block",this.style.minHeight="6em",Object(c.f)(this).select(".interaction-title").remove(),Object(c.f)(this).select("svg").remove(),Object(c.f)(this).select(".interaction-tooltip").remove(),Object(c.f)(this).append("div").attr("class","loader"),y(this._accession).then(function(n){!function(t,n,e){Object(c.f)(t).select(".loader").remove(),F=e;var r=Object(c.f)(t).append("div").attr("class","interaction-tooltip").style("display","none").style("opacity",0);r.append("span").attr("class","close-interaction-tooltip").text("Close ✖").on("click",function(){Object(c.g)(".interaction-tooltip").style("opacity",0).style("display","none")}),r.append("div").attr("class","tooltip-content"),Object(c.f)(t).append("p").attr("class","interaction-title").text("".concat(n," has binary interactions with ").concat(F.length-1," proteins")),function(t,n){Object(c.f)(t).selectAll(".interaction-filter-container").remove();var e=Object(c.f)(t).append("div").attr("class","interaction-filter-container"),r=!0,i=!1,a=void 0;try{for(var o,l=function(){var t=o.value;if(t.items.length>0)if((u=e.append("div").attr("class","interaction-filter")).append("a").text(t.label).attr("class","button dropdown").attr("data-toggle","iv_".concat(t.name)).on("click",N),(d=u.append("ul").attr("id","iv_".concat(t.name)).attr("class","dropdown-pane")).append("li").text("None").on("click",function(){return n=t.name,e=t.label,Object(c.g)(".dropdown-pane").style("visibility","hidden"),A.filter(function(t){return t.type===n}).forEach(function(t){return t.selected=!1}),Object(c.f)("[data-toggle=iv_".concat(n,"]")).text(e),void R();var n,e}),"tree"===t.type)v(t.items,function(n){n.type=t.name,A.push(n),d.datum(n).append("li").style("padding-left",n.depth+"em").attr("id",function(t){return C(t.name)}).text(function(t){return t.name}).on("click",function(n){return D(n,t.name)})});else{var n=!0,r=!1,i=void 0;try{for(var a,l=t.items[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value;s.type=t.name,A.push(s)}}catch(t){r=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}d.selectAll("li").data(t.items).enter().append("li").attr("id",function(t){return C(t.name)}).text(function(t){return t.name.toLowerCase()}).on("click",function(n){D(n,t.name)})}},s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u,d;l()}}catch(t){i=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e.append("button").attr("class","iv_reset").text("Reset filters").on("click",function(t){return A.filter(function(t){return t.selected}).forEach(function(t){return t.selected=!1}),g().forEach(function(t){Object(c.f)("[data-toggle=iv_".concat(t.name,"]")).text(t.label)}),R(),!1})}(t,g());var i={top:100,right:0,bottom:10,left:100},a=18*F.length,o=a,u=Object(l.a)().rangeRound([0,a]),d=Object(s.a)().range([.2,1]),f=Object(c.f)(t).append("svg").attr("width",a+i.left+i.right).attr("height",o+i.top+i.bottom).attr("class","interaction-viewer").append("g").attr("class","interaction-viewer-group").attr("transform","translate("+i.left+","+i.top+")");u.domain(F.map(function(t){return t.accession})),d.domain([0,10]);var p=f.selectAll(".interaction-row").data(F).enter().append("g").attr("class","interaction-row").attr("transform",function(t){return"translate(0,".concat(u(t.accession),")")}).each(function(t){if(!t.interactions)return;var n=Object(c.f)(this).selectAll(".cell").data(t.interactions);n.enter().append("circle").attr("class","cell").attr("cx",function(t){return u(t.id)+u.bandwidth()/2}).attr("cy",function(t){return u.bandwidth()/2}).attr("r",u.bandwidth()/3).style("fill-opacity",function(t){return d(t.experiments)}).style("display",function(n){return u(t.accession)<u(n.id)?"none":""}).on("click",m).on("mouseover",y).on("mouseout",x),n.exit().remove()});p.append("rect").attr("x",-i.left).attr("width",i.left).attr("height",u.bandwidth()).attr("class","text-highlight"),p.append("text").attr("y",u.bandwidth()/2).attr("dy",".32em").attr("text-anchor","end").text(function(t,n){return F[n].name}).attr("class",function(t,e){return F[e].accession===n?"main-accession":""});var h=f.selectAll(".column").data(F).enter().append("g").attr("class","column").attr("transform",function(t){return"translate(".concat(u(t.accession),", 0)rotate(-90)")});h.append("rect").attr("x",6).attr("width",i.top).attr("height",u.bandwidth()).attr("class","text-highlight"),h.append("text").attr("x",6).attr("y",u.bandwidth()/2).attr("dy",".32em").attr("text-anchor","start").text(function(t,n){return F[n].name}).attr("class",function(t,e){return F[e].accession===n?"main-accession":""});var b="".concat(u(F[1].accession)," 0,").concat(u(F[F.length-1].accession)," 0,").concat(u(F[F.length-1].accession)," ").concat(u(F[F.length-1].accession),",").concat(u(F[0].accession)," 0");function y(t){Object(c.f)(this).classed("active-cell",!0),Object(c.g)(".interaction-row").classed("active",function(n){return n.accession===t.id}),Object(c.g)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0").attr("x1",0).attr("y1",u(t.source)+u.bandwidth()/2).attr("x2",u(t.id)).attr("y2",u(t.source)+u.bandwidth()/2),Object(c.g)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0").attr("x1",u(t.id)+u.bandwidth()/2).attr("y1",0).attr("x2",u(t.id)+u.bandwidth()/2).attr("y2",u(t.source))}function m(n){!function(t,n){t.html("");var e=F.find(function(t){return t.accession===n.source}),r=F.find(function(t){return t.accession===n.id});t.append("h3").text("Interaction"),t.append("p").append("a").attr("href",w(n.interactor1,n.interactor2)).attr("target","_blank").text("Confirmed by ".concat(n.experiments," experiment(s)"));var i=t.append("table").attr("class","interaction-viewer-table"),a=i.append("tr");a.append("th"),a.append("th").text("Interactor 1"),a.append("th").text("Interactor 2");var o=i.append("tr");o.append("td").text("Name").attr("class","interaction-viewer-table_row-header"),o.append("td").text("".concat(e.name)),o.append("td").text("".concat(r.name));var c=i.append("tr");c.append("td").text("UniProtKB").attr("class","interaction-viewer-table_row-header"),c.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(e.accession)).text("".concat(e.accession)),c.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(r.accession)).text("".concat(r.accession));var l=i.append("tr");l.append("td").text("Pathology").attr("class","interaction-viewer-table_row-header"),l.append("td").html(T(e.diseases,e.accession)),l.append("td").html(T(r.diseases,r.accession));var s=i.append("tr");s.append("td").text("Subcellular location").attr("class","interaction-viewer-table_row-header"),s.append("td").html(I(e.subcellularLocations)),s.append("td").html(I(r.subcellularLocations));var u=i.append("tr");u.append("td").text("IntAct").attr("class","interaction-viewer-table_row-header"),u.append("td").attr("colspan",2).append("a").attr("href",w(n.interactor1,n.interactor2)).attr("target","_blank").text("".concat(n.interactor1,";").concat(n.interactor2))}(Object(c.g)(".tooltip-content"),n),r.style("opacity",.9).style("display","inline").style("left",Object(c.d)(t)[0]+10+"px").style("top",Object(c.d)(t)[1]-15+"px")}function w(t,n){return"//www.ebi.ac.uk/intact/query/id:".concat(t," AND id:").concat(n)}function x(){Object(c.g)("g").classed("active",!1),Object(c.g)("circle").classed("active-cell",!1),Object(c.g)(".active-row").remove()}f.append("polyline").attr("points",b).attr("class","hidden-side").attr("transform",function(t){return"translate(".concat(u(F[1].accession),", 0)")})}(t,t._accession,n)}))}},{key:"accession",set:function(t){this._accession=t},get:function(){return this._accession}}])&&k(e.prototype,r),i&&k(e,i),n}(),z=e(110),M=e(49),U=e(664),Z=e.n(U);n.default=function(t){return Object(z.a)("interaction-viewer",q),o.a.createElement(a.Fragment,null,o.a.createElement(M.default,{content:Z.a}),o.a.createElement("interaction-viewer",{accession:"O60941"}))}},662:function(t,n,e){var r=e(663);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(76)(r,i);r.locals&&(t.exports=r.locals)},663:function(t,n,e){(t.exports=e(75)(!1)).push([t.i,"@charset \"UTF-8\";\ninteraction-viewer {\n    position: relative;\n}\n\ninteraction-viewer text {\n    font-family: \"Open Sans\", sans-serif;\n    fill: black;\n    opacity: .75;\n    font-size: 12px;\n}\n\ninteraction-viewer .active text {\n    opacity: 1;\n}\n\ninteraction-viewer .active-row {\n    stroke: #4A90E2;\n}\n\ninteraction-viewer .interaction-tooltip {\n    z-index: 99999;\n    position: absolute;\n    background: #FFFFFF;\n    padding: 0.5em 1em;\n    border: 1px #979797 solid;\n    box-shadow: 2px 2px 2px #333333;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    transition: all 0.25s;\n    min-width: 36em;\n}\n\ninteraction-viewer .interaction-tooltip .close-interaction-tooltip {\n    cursor: pointer;\n    float: right;\n    margin-bottom: .8em;\n}\n\ninteraction-viewer .interaction-tooltip .tooltip-content {\n    clear: both;\n}\n\ninteraction-viewer .interaction-filter-container {\n    text-align: left;\n}\n\ninteraction-viewer .interaction-filter-container #filter-display .filter-selected {\n    margin: .2em .5em;\n    padding: .3em .1em;\n    background-color: #F2F2F2;\n    border: 1px solid #E8E8E8;\n    cursor: pointer;\n    white-space: nowrap;\n    display: inline-block;\n}\n\ninteraction-viewer .interaction-filter-container #filter-display .filter-selected::after {\n    content: '✖';\n    margin: 0 .3em;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter {\n    vertical-align: top;\n    margin-bottom: .5em;\n    display: inline-block;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul {\n    border: #E8E8E8 1px solid;\n    max-height: 15em;\n    overflow-y: auto;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li {\n    cursor: pointer;\n    padding: .5em .5em;\n    border-bottom: #E8E8E8 1px solid;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li:hover {\n    background-color: #F2F2F2;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li.active {\n    font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .cell {\n    fill: #4A90E2;\n}\n\ninteraction-viewer .interaction-viewer .cell.active-cell {\n    r: 0.8em;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer .hidden-side {\n    fill: #E8E8E8;\n}\n\ninteraction-viewer .interaction-viewer .main-accession {\n    font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .text-highlight {\n    fill: #FFF;\n    opacity: 0;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer-table tr:nth-child(even) {\n    background: #F2F2F2;\n}\n\ninteraction-viewer .interaction-viewer-table td,\ninteraction-viewer .interaction-viewer-table th {\n    padding: .5em;\n    text-align: center;\n}\n\ninteraction-viewer .interaction-viewer-table th {\n    background-color: #E8E8E8;\n    white-space: nowrap;\n}\n\ninteraction-viewer .interaction-viewer-table .interaction-viewer-table_row-header {\n    font-weight: bold;\n    text-align: right;\n}\n\ninteraction-viewer .button {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 1em 0 0;\n    padding: 0.85em 1em;\n    -webkit-appearance: none;\n    border: 1px solid transparent;\n    border-radius: 0;\n    -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;\n    transition: background-color 0.25s ease-out, color 0.25s ease-out;\n    line-height: 1;\n    text-align: center;\n    cursor: pointer;\n    background-color: #F2F2F2 !important;\n    color: #3a343a;\n    border: 1px solid #E8E8E8;\n}\n\ninteraction-viewer .iv_reset {\n    display: block;\n}\n\ninteraction-viewer .button:hover {\n    color: #3a343a;\n}\n\ninteraction-viewer .button.dropdown::after {\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    content: '';\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-color: #3a343a transparent transparent;\n    position: relative;\n    top: 0.4em;\n    display: inline-block;\n    float: right;\n    margin-left: 1em;\n}\n\ninteraction-viewer .dropdown-pane {\n    position: absolute;\n    z-index: 10;\n    display: block;\n    width: 300px;\n    padding: 1rem;\n    visibility: hidden;\n    border: 1px solid #cacaca;\n    border-radius: 0;\n    background-color: #fefefe;\n}\n\ninteraction-viewer .tree-list {\n    text-align: left;\n    list-style: none;\n}\n\ninteraction-viewer .tree-list li {\n    margin: .5em 0;\n}\n\n.loader,\n.loader:before,\n.loader:after {\n    background: #cbcbcb;\n    -webkit-animation: load1 1s infinite ease-in-out;\n    animation: load1 1s infinite ease-in-out;\n    width: 1em;\n    height: 4em;\n}\n\n.loader {\n    color: #cbcbcb;\n    text-indent: -9999em;\n    margin: 88px auto;\n    position: relative;\n    font-size: 11px;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n.loader:before,\n.loader:after {\n    position: absolute;\n    top: 0;\n    content: '';\n}\n\n.loader:before {\n    left: -1.5em;\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n.loader:after {\n    left: 1.5em;\n}\n\n@-webkit-keyframes load1 {\n    0%,\n    80%,\n    100% {\n        box-shadow: 0 0;\n        height: 4em;\n    }\n    40% {\n        box-shadow: 0 -2em;\n        height: 5em;\n    }\n}\n\n@keyframes load1 {\n    0%,\n    80%,\n    100% {\n        box-shadow: 0 0;\n        height: 4em;\n    }\n    40% {\n        box-shadow: 0 -2em;\n        height: 5em;\n    }\n}",""])},664:function(t,n){t.exports='<h1 id="interaction-viewer">interaction-viewer</h1>\n<p><a href="https://www.npmjs.com/package/interaction-viewer"><img src="https://img.shields.io/npm/v/interaction-viewer.svg" alt="Published on NPM"></a></p>\n<p>An adjacency graph visualisation of protein interaction data.</p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;interaction-viewer accession=&quot;O60941&quot;&gt;&lt;/interaction-viewer&gt;</code></pre>\n<h2 id="api">API</h2>\n<ul>\n<li><code>accession</code> changing the accession will cause the component to fetch the data for the given entry</li>\n</ul>\n<h2 id="dependencies">Dependencies</h2>\n<p>This component uses Custom elements V1 (<a href="https://www.webcomponents.org/polyfills/">https://www.webcomponents.org/polyfills/</a>), which requires the use of a polyfill in certain browsers.</p>\n<h1 id="contact">Contact</h1>\n<p>For support contact <a href="mailto:help@uniprot.org">help@uniprot.org</a> and please put interaction viewer in the subject line.</p>\n<h1 id="license">License</h1>\n<p>Distributed under the Apache License 2.0</p>\n'}}]);