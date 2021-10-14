(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{314:function(e,t,a){"use strict";a.r(t);var r=a(271),c=a.n(r),o=a(272),n=a(280),s=a(263),l=a(0),u=a(278),i=a(281),b=a(258),j=a(10);t.default=function(e){var t,a,r,d,O=e.data,v=e.updateData,p=e.courseList,f=e.startYearList,x=e.updateStartYearList,h=e.updateFee,m=e.prevPage,C=e.updatePage,g=e.page,y=e.updateUnitList,S=e.updateEstimatedFee,k=Object(u.a)(),w=Object(s.a)(k,4),D=w[0],Y=w[1],A=w[2],F=w[3],N=Object(l.useState)(Object(n.a)(Object(n.a)({},O),{},{courseCode:"",year:"",majorName:"DUG"!==O.feeCategory?"All majors [all]":""})),U=Object(s.a)(N,2),G=U[0],M=U[1],_=Object(l.useState)(""),E=Object(s.a)(_,2),L=E[0],P=E[1],R=Object(l.useState)([]),I=Object(s.a)(R,2),B=I[0],T=I[1],J=Object(l.useState)(!1),H=Object(s.a)(J,2),W=H[0],q=H[1],z=Object(l.useCallback)(Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/Calculator/GetUnitsForMajor",{majorName:G.majorName,feeYear:G.feeYear});case 2:t=e.sent,F&&console.error(F),Y.ok&&(a=Object.entries(t[0]).map((function(e){var t=Object(s.a)(e,2);return{value:t[0],label:t[1]}})),y(a));case 5:case"end":return e.stop()}}),e)}))),[D,Y,F,G,y]),K=Object(l.useCallback)(Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/Calculator/GetFeeForMajor",Object(n.a)(Object(n.a)({},G),{},{majorCode:"all"}));case 2:t=e.sent,F&&console.error(F),Y.ok&&(a=Object(n.a)(Object(n.a)({},t[0]),{},{course_name:L}),S(a));case 5:case"end":return e.stop()}}),e)}))),[D,Y,F,G,L,S]),Q=Object(l.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/Calculator/GetMajorsForCourse",{course:t});case 2:a=e.sent,F&&console.error(F),Y.ok&&(r=Object.entries(a[0]).map((function(e){var t=Object(s.a)(e,2),a=t[0];return{value:a,label:t[1]+" [".concat(a,"]")}})),T(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[D,Y,F,T]),V=Object(l.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/Calculator/getYearsForCourse",Object(n.a)(Object(n.a)({},G),{},{courseCode:t}));case 2:a=e.sent,F&&console.error(F),Y.ok&&(r=a.reverse().map((function(e){return{value:e,label:"Starting ".concat(e)}})),x(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[D,Y,F,G,x]),X=Object(l.useCallback)(Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("/Calculator/GetCourseFee",G);case 2:t=e.sent,F&&console.error(F),Y.ok&&(a=t[0],h(a),"INTSA"!==G.feeCategory?C(b.a.FEE_PAYING_SUMMARY):C(b.a.STUDY_ABOARD_SUMMARY));case 5:case"end":return e.stop()}}),e)}))),[D,Y,F,G,h,C]),Z=function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([K(),z()]);case 2:C(b.a.D_SUMMARY);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("h1",{style:{fontWeight:"bold"},children:"Select Your Info:"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Select your course and starting year"}),Object(j.jsx)("p",{children:'Click "Help" for descriptions.'}),Object(j.jsx)("hr",{style:{width:"50%",margin:"auto"}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),F&&"Error!",A&&"Loading...",Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),q(!0),v(G),"D"!==G.feeCategory[0]||"DFPG"===G.feeCategory?X():Z()},children:[Object(j.jsx)("label",{htmlFor:"course",children:"Select Your Course:"}),Object(j.jsx)("div",{className:"row tbox",children:Object(j.jsx)(i.a,{name:"course",inputId:"course",options:p,isClearable:!0,placeholder:"eg. ".concat(null===p||void 0===p||null===(t=p[0])||void 0===t?void 0:t.label),onChange:function(e){M((function(t){return Object(n.a)(Object(n.a)({},t),{},{courseCode:null===e||void 0===e?void 0:e.value})})),q(!1),P(null===e||void 0===e?void 0:e.label),"DUG"===G.feeCategory&&(null===e||void 0===e?void 0:e.value)?Q(e.value):(null===e||void 0===e?void 0:e.value)&&"D"!==G.feeCategory[0]&&"INTSA"!==G.feeCategory&&V(e.value)},isLoading:W||A,isDisabled:W})}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"startyear",children:"Select Your Starting Year:"}),Object(j.jsx)("div",{className:"row tbox",children:Object(j.jsx)(i.a,{name:"startyear",inputId:"startyear",options:f,isClearable:!0,placeholder:G.courseCode?"eg. ".concat(null===f||void 0===f||null===(a=f[0])||void 0===a?void 0:a.label):"Please select your course first",onChange:function(e){M((function(t){return Object(n.a)(Object(n.a)({},t),{},{year:"Starting ".concat(null===e||void 0===e?void 0:e.value)})})),q(!1)},isLoading:W||A,isDisabled:W||A||!G.courseCode})}),Object(j.jsx)("br",{}),"DUG"===O.feeCategory&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:"majorSelect",children:"Select Your Major:"}),Object(j.jsx)("div",{className:"row tbox",children:Object(j.jsx)(i.a,{name:"majorSelect",inputId:"majorSelect",options:B,isClearable:!0,placeholder:(null===B||void 0===B||null===(r=B[0])||void 0===r?void 0:r.label)?"eg. ".concat(null===B||void 0===B||null===(d=B[0])||void 0===d?void 0:d.label):"Please select your course first",isLoading:W||A,isDisabled:W||A||!G.courseCode,onChange:function(e){M((function(t){return Object(n.a)(Object(n.a)({},t),{},{majorName:null===e||void 0===e?void 0:e.label})})),q(!1)}})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{style:{overflow:"auto"},children:Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("button",{id:"prevBtn",type:"button",onClick:m,disabled:!F&&(W||g!==b.a.COURSE_AND_YEAR),children:"Previous"}),Object(j.jsx)("button",{id:"nextBtn",disabled:W||g!==b.a.COURSE_AND_YEAR||A||("DUG"!==O.feeCategory?!G.courseCode||!G.year:!G.majorName),type:"submit",children:"Next"})]})})]})]})}}}]);
//# sourceMappingURL=13.f00f59f3.chunk.js.map