(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{260:function(e,t,n){"use strict";n(0);var r=n(9);t.a=function(){return Object(r.jsx)("button",{style:{position:"absolute",left:"75%"},className:"print-button",children:Object(r.jsx)("span",{className:"print-icon"})})}},261:function(e,t,n){var r,o;"undefined"!=typeof self&&self,e.exports=(r=n(0),o=n(39),function(){"use strict";var e={655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return c},__param:function(){return l},__metadata:function(){return u},__awaiter:function(){return s},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return h},__read:function(){return y},__spread:function(){return b},__spreadArrays:function(){return v},__spreadArray:function(){return m},__await:function(){return g},__asyncGenerator:function(){return w},__asyncDelegator:function(){return _},__asyncValues:function(){return j},__makeTemplateObject:function(){return P},__importStar:function(){return x},__importDefault:function(){return S},__classPrivateFieldGet:function(){return T},__classPrivateFieldSet:function(){return k}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function l(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}function m(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof g?Promise.resolve(n.value.v).then(l,u):s(i[0][2],n)}catch(e){s(i[0][3],e)}var n}function l(e){c("next",e)}function u(e){c("throw",e)}function s(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function j(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return O(t,e),t}function S(e){return e&&e.__esModule?e:{default:e}}function T(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function k(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},297:function(e){e.exports=r},268:function(e){e.exports=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=n(655),r=n(297),o=n(268),a=Object.prototype.hasOwnProperty.call(r,"createContext"),c=Object.prototype.hasOwnProperty.call(r,"useMemo")&&Object.prototype.hasOwnProperty.call(r,"useCallback"),l=a?r.createContext({}):null;e.PrintContextConsumer=l?l.Consumer:function(){return null};var u={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},s=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.startPrint=function(e){var t=n.props,r=t.onAfterPrint,o=t.onPrintError,i=t.print,a=t.suppressErrors,c=t.documentTitle;setTimeout((function(){if(e.contentWindow){if(e.contentWindow.focus(),i)i(e).then(n.handleRemoveIframe).catch((function(e){o?o("print",e):a||console.error("An error was thrown by the specified `print` function",e)}));else if(e.contentWindow.print){var t=document.title;c&&(document.title=c),e.contentWindow.print(),c&&(document.title=t),r&&r()}else a||console.error("Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes.");n.handleRemoveIframe()}else a||console.error("Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/")}),500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,o=t.onPrintError;if(r){var i=r();i&&"function"==typeof i.then?i.then((function(){n.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):n.startPrint(e)}else n.startPrint(e)},n.handleClick=function(){var e=n.props,t=e.onBeforeGetContent,r=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(n.handlePrint).catch((function(e){r&&r("onBeforeGetContent",e)})):n.handlePrint()}else n.handlePrint()},n.handlePrint=function(){var e=n.props,r=e.bodyClass,i=e.content,a=e.copyStyles,c=e.fonts,l=e.pageStyle,u=e.suppressErrors,s=e.nonce,f=i();if(void 0!==f)if(null!==f){var d=document.createElement("iframe");d.style.position="absolute",d.style.top="-1000px",d.style.left="-1000px",d.id="printWindow",d.title="Print Window";var p=o.findDOMNode(f);if(p){var h=p instanceof Text,y=document.querySelectorAll("link[rel='stylesheet']"),b=h?[]:p.querySelectorAll("img");n.linkTotal=y.length+b.length,n.linksLoaded=[],n.linksErrored=[],n.fontsLoaded=[],n.fontsErrored=[];var v=function(e,t){t?n.linksLoaded.push(e):(u||console.error('"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length+n.fontsLoaded.length+n.fontsErrored.length===n.linkTotal&&n.triggerPrint(d)};d.onload=function(){var e,o,i,f;d.onload=null;var y=d.contentDocument||(null===(o=d.contentWindow)||void 0===o?void 0:o.document);if(y){y.body.appendChild(p.cloneNode(!0)),c&&((null===(i=d.contentDocument)||void 0===i?void 0:i.fonts)&&(null===(f=d.contentWindow)||void 0===f?void 0:f.FontFace)?c.forEach((function(e){var t=new FontFace(e.family,e.source);d.contentDocument.fonts.add(t),t.loaded.then((function(e){n.fontsLoaded.push(e)})).catch((function(e){n.fontsErrored.push(t),u||console.error('"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e)}))})):u||console.error('"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API'));var m="function"==typeof l?l():l;if("string"!=typeof m)u||console.error('"react-to-print" expected a "string" from `pageStyle` but received "'+typeof m+'". Styles from `pageStyle` will not be applied.');else{var g=y.createElement("style");s&&(g.setAttribute("nonce",s),y.head.setAttribute("nonce",s)),g.appendChild(y.createTextNode(m)),y.head.appendChild(g)}if(r&&(e=y.body.classList).add.apply(e,t.__spreadArray([],t.__read(r.split(" ")))),!h){for(var w=y.querySelectorAll("canvas"),_=p.querySelectorAll("canvas"),j=0,P=w.length;j<P;++j){var O=(M=w[j]).getContext("2d");O&&O.drawImage(_[j],0,0)}for(j=0;j<b.length;j++){var x=b[j],S=x.getAttribute("src");if(S){var T=new Image;T.onload=v.bind(null,x,!0),T.onerror=v.bind(null,x,!1),T.src=S}else u||(console.warn('"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',x),v(x,!1))}var k="input",A=p.querySelectorAll(k),E=y.querySelectorAll(k);for(j=0;j<A.length;j++)E[j].value=A[j].value;var C="input[type=checkbox],input[type=radio]",R=p.querySelectorAll(C),I=y.querySelectorAll(C);for(j=0;j<R.length;j++)I[j].checked=R[j].checked;var q="select",N=p.querySelectorAll(q),D=y.querySelectorAll(q);for(j=0;j<N.length;j++)D[j].value=N[j].value}if(a)for(var W=document.querySelectorAll("style, link[rel='stylesheet']"),L=(j=0,W.length);j<L;++j){var M;if("STYLE"===(M=W[j]).tagName){var F=y.createElement(M.tagName),B=M.sheet;if(B){for(var G="",Y=0,H=B.cssRules.length;Y<H;++Y)"string"==typeof B.cssRules[Y].cssText&&(G+=B.cssRules[Y].cssText+"\r\n");F.setAttribute("id","react-to-print-"+j),s&&F.setAttribute("nonce",s),F.appendChild(y.createTextNode(G)),y.head.appendChild(F)}}else if(M.getAttribute("href")){F=y.createElement(M.tagName),Y=0;for(var J=M.attributes.length;Y<J;++Y){var U=M.attributes[Y];U&&F.setAttribute(U.nodeName,U.nodeValue||"")}F.onload=v.bind(null,F,!0),F.onerror=v.bind(null,F,!1),s&&F.setAttribute("nonce",s),y.head.appendChild(F)}else u||console.warn('"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',M),v(M,!0)}}0!==n.linkTotal&&a||n.triggerPrint(d)},n.handleRemoveIframe(!0),document.body.appendChild(d)}else u||console.error('"react-to-print" could not locate the DOM node corresponding with the `content` prop')}else u||console.error('There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.');else u||console.error('For "react-to-print" to work only Class based components can be printed.')},n.handleRemoveIframe=function(e){var t=n.props.removeAfterPrint;if(e||t){var r=document.getElementById("printWindow");r&&document.body.removeChild(r)}},n}return t.__extends(n,e),n.prototype.render=function(){var e=this.props,t=e.children,n=e.suppressErrors,o=e.trigger;if(o)return r.cloneElement(o(),{onClick:this.handleClick});if(!l)return n||console.error('"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"'),null;var i={handlePrint:this.handleClick};return r.createElement(l.Provider,{value:i},t)},n.defaultProps=u,n}(r.Component);e.default=s,e.useReactToPrint=c?function(e){var n=r.useMemo((function(){return new s(t.__assign(t.__assign({},u),e))}),[e]);return r.useCallback((function(){return n.handleClick()}),[n])}:function(e){e.suppressErrors||console.warn('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')}}(),i}())},316:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(261),i=n.n(o),a=n(259),c=n(258),l=n(260),u=n(9);t.default=function(e){var t=e.updatePage,n=e.page,o=Object(r.useRef)();return Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)(i.a,{trigger:l.a,content:function(){return o.current}}),Object(u.jsxs)("div",{ref:o,style:{textAlign:"center"},children:[Object(u.jsx)("img",{className:"d-none d-print-block",src:a.a,width:"200",height:"50",alt:"UWA Logo"}),Object(u.jsx)("h1",{style:{fontWeight:"bold"},children:"Summary:"}),Object(u.jsx)("hr",{style:{width:"50%",margin:"auto"}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:Object(u.jsxs)("span",{children:["You pay no tuition fee under the"," ",Object(u.jsx)("a",{href:"https://study.uwa.edu.au/fees-and-scholarships/research-training-program",children:"Research Training Program"})]})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{style:{overflow:"auto"},children:Object(u.jsx)("div",{style:{textAlign:"center"},children:Object(u.jsx)("button",{id:"prevBtn",type:"button",onClick:function(){return t(c.a.STUDENT_AND_YEAR)},disabled:n!==c.a.DHDR,children:"Previous"})})})]})}}}]);
//# sourceMappingURL=8.c4cf6b3f.chunk.js.map