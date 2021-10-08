(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{264:function(e,t,n){"use strict";n(1);var c=n(0);t.a=function(){return Object(c.jsx)("button",{style:{position:"absolute",left:"75%"},className:"print-button",children:Object(c.jsx)("span",{className:"print-icon"})})}},315:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(263),r=n.n(i),s=n(69),l=n(262),a=n(291),d=n(272),o=n.n(d),j=n(279),b=n(273),u=n(266),O=n(278),x=n(280),h=n(265),p=n(307),f=n(308),v=n(0),m=function(e){var t=e.options,n=e.children,c=e.maxHeight,i=(0,e.getValue)(),r=Object(u.a)(i,1)[0],s=55*t.indexOf(r);return Object(v.jsx)(f.a,{height:c,itemCount:n.length,itemSize:55,initialScrollOffset:s,children:function(e){var t=e.index,c=e.style;return Object(v.jsx)("div",{style:c,children:n[t]})}})},g=function(e){var t,n=e.data,i=e.unitList,r=e.selectedUnitList,s=e.addSelectedUnit,l=e.removeSelectedUnit,d=Object(O.a)(),f=Object(u.a)(d,4),g=f[0],y=f[1],S=f[2],U=f[3],N=Object(c.useState)({label:"",value:""}),C=Object(u.a)(N,2),A=C[0],F=C[1],P=Object(c.useCallback)(Object(b.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/Calculator/GetUnitInfo",Object(j.a)(Object(j.a)({},n),{},{unit:"".concat(A.label," [").concat(A.value,"]")}));case 2:t=e.sent,U&&console.error(U),y.ok&&(c={name:A.label,code:A.value,creditPoint:Number(t[0].creditpoint),fee:Number(t[0].fee)},s(c),F(null));case 5:case"end":return e.stop()}}),e)}))),[g,y,U,n,A,s]),L=function(){var e=[].concat(Object(a.a)(r),[{code:null===A||void 0===A?void 0:A.value}]),t=new Set(e.map((function(e){return e.code})));return t.size===e.length};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),U&&"Error!",S&&"Loading...",Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),L()&&P()},children:[Object(v.jsxs)("div",{className:"d-print-none",children:[Object(v.jsx)("label",{htmlFor:"unitSelect",children:"Select Your Units:"}),Object(v.jsx)("div",{className:"row",style:{width:"40%",margin:"auto"},children:Object(v.jsx)(x.a,{name:"unitSelect",inputId:"unitSelect",options:i,value:(null===A||void 0===A?void 0:A.value)?A:"",isClearable:!0,placeholder:"eg. ".concat(null===i||void 0===i||null===(t=i[0])||void 0===t?void 0:t.label),onChange:function(e){F(e)},filterOption:Object(h.b)({ignoreAccents:!1}),components:{MenuList:m}})}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{id:"nextBtn",disabled:!(null===A||void 0===A?void 0:A.value)||!L(),type:"submit",children:"Add Unit"})]}),Object(v.jsx)("br",{className:"d-print-none"}),Object(v.jsx)("h4",{className:(null===r||void 0===r?void 0:r[0])?"":"d-none",children:Object(v.jsx)("b",{children:Object(v.jsx)("u",{children:"Your Selected Units"})})}),Object(v.jsx)("br",{className:"d-print-none"}),r&&r.map((function(e,t){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{children:["".concat(e.name," [").concat(e.code,"]"),Object(v.jsx)(p.a,{onClick:function(){return l(e.code)},className:"delete-icon d-print-none"})]}),Object(v.jsxs)("p",{children:["Credit Points - ",Object(v.jsx)("b",{children:e.creditPoint}),"\u2003\u2003\u2003\u2003\u2003\u2003Fee - ",Object(v.jsxs)("b",{children:["$",e.fee]})]})]},t),Object(v.jsx)("br",{})]})}))]})]})},y=n(264);t.default=function(e){var t=e.estimatedFee,n=e.updatePage,i=e.page,a=e.data,d=e.unitList,o=e.selectedUnitList,j=e.addSelectedUnit,b=e.removeSelectedUnit,u=e.clearSelectedUnit,O=e.updateTotalFee,x=Object(c.useRef)(),h=function(){return o.length>0?o.reduce((function(e,t){return{fee:e.fee+t.fee,creditPoint:e.creditPoint+t.creditPoint}})):0};return Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)(r.a,{trigger:y.a,content:function(){return x.current}}),Object(v.jsxs)("div",{ref:x,style:{textAlign:"center"},children:[Object(v.jsx)("img",{className:"d-none d-print-block",src:s.a,width:"200",height:"50",alt:"UWA Logo"}),Object(v.jsx)("h1",{style:{fontWeight:"bold"},children:"Summary:"}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{style:{textAlign:"center"},children:["1 EFTSL is the Equivalent Full Time Study Load for a standard full time enrolment of 48 credit points per year."," "]}),Object(v.jsx)("p",{children:"If you take more/less than 48 credit points per year, your yearly fee may be different."}),Object(v.jsx)("hr",{style:{width:"50%",margin:"auto"}}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:["Course Name - ",Object(v.jsx)("b",{children:t.course_name})]}),Object(v.jsxs)("p",{children:["Course Credit Point - ",Object(v.jsx)("b",{children:t.course_credit_point})]}),Object(v.jsxs)("p",{children:["Credit Point - ",Object(v.jsx)("b",{children:t.creditpoint})]}),Object(v.jsxs)("p",{children:["**Average Annual Fee - ",Object(v.jsx)("b",{children:t.fee_median})]}),Object(v.jsxs)("p",{children:["Typical Fee Range - ",Object(v.jsx)("b",{children:t.fee_range})]}),Object(v.jsx)("h4",{className:(null===o||void 0===o?void 0:o[0])?"":"d-none",children:Object(v.jsxs)("b",{children:["Total Credit Points - ",h().creditPoint]})}),Object(v.jsx)("h2",{className:(null===o||void 0===o?void 0:o[0])?"":"d-none",children:Object(v.jsxs)("b",{children:["Total Fee - $",h().fee]})}),Object(v.jsx)(g,{data:a,unitList:d,selectedUnitList:o,addSelectedUnit:j,removeSelectedUnit:b,clearSelectedUnit:u,updateTotalFee:O}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsx)("div",{style:{overflow:"auto"},children:Object(v.jsx)("div",{style:{textAlign:"center"},children:Object(v.jsx)("button",{id:"prevBtn",type:"button",onClick:function(){n(l.a.COURSE_AND_YEAR),u()},disabled:i!==l.a.D_SUMMARY,children:"Previous"})})})]})}}}]);
//# sourceMappingURL=9.ed6de49a.chunk.js.map