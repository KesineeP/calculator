(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(5),a=n.n(r),i=(n(10),n(11),n(2)),s=n(4),l=n(0);function u(e){var t=e.name,n=e.areaName,c=e.onClickNumber,o={default:{gridArea:n,backgroundColor:"#3b3b3b",color:"#ffffff",border:"1px solid #3b3b3b",fontSize:"40px",borderRadius:"90px"},zero:{textAlign:"left",paddingLeft:"52px",borderRadius:"80px"}},r=o.default;return"zero"===n&&(r=Object(s.a)(Object(s.a)({},o.default),o.zero)),Object(l.jsx)("button",{style:r,className:"numButton",onClick:function(){return c(t)},children:t})}function b(e){var t=e.name,n=e.color,c=e.onClickOperation,o={backgroundColor:"#cccccc",border:"1px solid #cccccc",fontSize:"40px",borderRadius:"50%"};return"orange"===n&&(o={backgroundColor:"#ff9d00",color:"#ffffff",border:"1px solid #ff9d00",fontSize:"40px",borderRadius:"50%"}),Object(l.jsx)("button",{style:o,className:"operatorButton",onClick:function(){return c(t)},children:t})}n(13);var f=[["zero","0"],["one","1"],["two","2"],["three","3"],["four","4"],["five","5"],["six","6"],["seven","7"],["eight","8"],["nine","9"],["dot","."]],d=["C","+/-","%"],j=["/","x","-","+","="],O=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),s=a[0],O=a[1],g=Object(c.useState)(0),p=Object(i.a)(g,2),x=p[0],m=p[1],h=Object(c.useState)(n),k=Object(i.a)(h,2),v=k[0],C=k[1],N=Object(c.useState)(0),S=Object(i.a)(N,2),F=S[0],y=S[1],z=Object(c.useState)("number"),w=Object(i.a)(z,2),B=w[0],R=w[1],E=function(e){"."===e&&"."===n[n.length-1]||(o("."===e&&""===n?"0".concat(e):n.concat(e)),C(n.concat(e)),R("number"))},L=function(e){var t=parseFloat(e);if(0!==x)switch(s){case"-":m(x-t);break;case"+":m(x+t);break;case"x":m(x*t);break;case"/":m(x/t);break;case"=":break;case"%":m(x);break;default:m(t)}else m(t)},A=function(e){"C"===e?(O(""),m(0),C(0)):"+/-"===e?function(){if("number"===B)if(""===n)o("-"),C("-0");else if("-"===n)o(""),C("0");else if("-"===n[0]){var e=n.sunstring(1,n.length);o(e),C(e)}else o("-".concat(n)),C("-".concat(n));else m(-1*x)}():"%"===e?(""!==n&&function(){var e=parseFloat(n)/100;0===x?y(e):(L(x*e),y(x*e))}(),O(e)):(""!==n&&L(n),O(e),"="===e&&C(x)),"+/-"!==e&&(o(""),R("C"===e?"number":"operator"))};return Object(c.useEffect)((function(){C(x%1===0?x:x.toFixed(4))}),[x]),Object(c.useEffect)((function(){C(F%1===0?F:F.toFixed(4))}),[F]),console.log("value",n),console.log("result",x),console.log("operation",s),console.log("display",v),console.log("------------"),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("p",{className:"result",children:v||"0"}),Object(l.jsx)("div",{className:"lightgrey",children:d.map((function(e,t){return Object(l.jsx)(b,{name:e,color:"lightgrey",onClickOperation:A},t)}))}),Object(l.jsx)("div",{className:"orange",children:j.map((function(e,t){return Object(l.jsx)(b,{name:e,color:"orange",onClickOperation:A},t)}))}),Object(l.jsx)("div",{className:"darkgrey",children:f.map((function(e,t){return Object(l.jsx)(u,{name:e[1],areaName:e[0],onClickNumber:E},t)}))})]})};var g=function(){return Object(l.jsx)(O,{})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),p()}],[[14,1,2]]]);
//# sourceMappingURL=main.a9fb0308.chunk.js.map