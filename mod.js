// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;function t(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=t();function i(){return n&&"symbol"==typeof Symbol.toStringTag}var a=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function c(r,e){return null!=r&&o.call(r,e)}var s="function"==typeof Symbol?Symbol:void 0,u="function"==typeof s?s.toStringTag:"";var l=i()?function(r){var e,t,n;if(null==r)return a.call(r);t=r[u],e=c(r,u);try{r[u]=void 0}catch(e){return a.call(r)}return n=a.call(r),e?r[u]=t:delete r[u],n}:function(r){return a.call(r)};function p(r){return"[object Arguments]"===l(r)}var f=function(){return p(arguments)}(),g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function h(r){return"number"==typeof r}function b(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function v(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+b(i):b(i)+r,n&&(r="-"+r)),r}var y=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=v(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=v(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):y.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function E(r){return"string"==typeof r}var _=Math.abs,S=String.prototype.toLowerCase,j=String.prototype.toUpperCase,k=String.prototype.replace,x=/e\+(\d)$/,I=/e-(\d)$/,T=/^(\d+)$/,V=/^(\d+)e/,O=/\.0$/,A=/\.0*e/,F=/(\..*[^0])0*e/;function $(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!h(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":_(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=k.call(t,F,"$1e"),t=k.call(t,A,"e"),t=k.call(t,O,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=k.call(t,x,"e+0$1"),t=k.call(t,I,"e-0$1"),r.alternate&&(t=k.call(t,T,"$1."),t=k.call(t,V,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===j.call(r.specifier)?j.call(t):S.call(t)}function P(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function C(r,e,t){var n=e-r.length;return n<0?r:r=t?r+P(n):P(n)+r}var N=String.fromCharCode,R=isNaN,Z=Array.isArray;function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function W(r){var e,t,n,i,a,o,c,s,u;if(!Z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(E(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,R(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!R(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(a)?String(n.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function M(r){var e,t,n,i;for(t=[],i=0,n=G.exec(r);n;)(e=r.slice(i,G.lastIndex-n[0].length)).length&&t.push(e),t.push(X(n)),i=G.lastIndex,n=G.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function B(r){var e,t;if(!U(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[M(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return W.apply(null,e)}var Y,z=Object.prototype,H=z.toString,D=z.__defineGetter__,q=z.__defineSetter__,J=z.__lookupGetter__,K=z.__lookupSetter__;Y=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?d:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||K.call(r,e)?(n=r.__proto__,r.__proto__=z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&D&&D.call(r,e,t.get),o&&q&&q.call(r,e,t.set),r};var Q=Y;function rr(r,e,t){Q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function er(r){return"string"==typeof r}var tr=String.prototype.valueOf;var nr=i();function ir(r){return"object"==typeof r&&(r instanceof String||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function ar(r){return er(r)||ir(r)}function or(r){return"number"==typeof r}rr(ar,"isPrimitive",er),rr(ar,"isObject",ir);var cr=Number,sr=cr.prototype.toString;var ur=i();function lr(r){return"object"==typeof r&&(r instanceof cr||(ur?function(r){try{return sr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function pr(r){return or(r)||lr(r)}function fr(r){return r!=r}function gr(r){return or(r)&&fr(r)}function dr(r){return lr(r)&&fr(r.valueOf())}function hr(r){return gr(r)||dr(r)}rr(pr,"isPrimitive",or),rr(pr,"isObject",lr),rr(hr,"isPrimitive",gr),rr(hr,"isObject",dr);var br=Number.POSITIVE_INFINITY,vr=cr.NEGATIVE_INFINITY,yr=Math.floor;function wr(r){return yr(r)===r}function mr(r){return r<br&&r>vr&&wr(r)}function Er(r){return or(r)&&mr(r)}function _r(r){return lr(r)&&mr(r.valueOf())}function Sr(r){return Er(r)||_r(r)}rr(Sr,"isPrimitive",Er),rr(Sr,"isObject",_r);var jr=Object.prototype.propertyIsEnumerable;var kr=!jr.call("beep","0");var xr,Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};xr=f?p:function(r){return null!==r&&"object"==typeof r&&!Ir(r)&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=4294967295&&c(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=jr.call(r,e))&&kr&&ar(r)?!gr(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}(r,"callee")};var Tr=xr,Vr=Array.prototype.slice;var Or="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ar=Object.defineProperty;function Fr(r){return"number"==typeof r}function $r(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Pr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+$r(i):$r(i)+r,n&&(r="-"+r)),r}var Cr=String.prototype.toLowerCase,Nr=String.prototype.toUpperCase;function Rr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Fr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Pr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Pr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Nr.call(r.specifier)?Nr.call(t):Cr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Zr(r){return"string"==typeof r}var Lr=Math.abs,Wr=String.prototype.toLowerCase,Gr=String.prototype.toUpperCase,Xr=String.prototype.replace,Mr=/e\+(\d)$/,Ur=/e-(\d)$/,Br=/^(\d+)$/,Yr=/^(\d+)e/,zr=/\.0$/,Hr=/\.0*e/,Dr=/(\..*[^0])0*e/;function qr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Fr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Lr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Xr.call(t,Dr,"$1e"),t=Xr.call(t,Hr,"e"),t=Xr.call(t,zr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Xr.call(t,Mr,"e+0$1"),t=Xr.call(t,Ur,"e-0$1"),r.alternate&&(t=Xr.call(t,Br,"$1."),t=Xr.call(t,Yr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Gr.call(r.specifier)?Gr.call(t):Wr.call(t)}function Jr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Kr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Jr(n):Jr(n)+r}var Qr=String.fromCharCode,re=isNaN,ee=Array.isArray;function te(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ne(r){var e,t,n,i,a,o,c,s,u;if(!ee(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Zr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=te(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,re(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,re(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Rr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!re(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=re(a)?String(n.arg):Qr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=qr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Pr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Kr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var ie=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ae(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function oe(r){var e,t,n,i;for(t=[],i=0,n=ie.exec(r);n;)(e=r.slice(i,ie.lastIndex-n[0].length)).length&&t.push(e),t.push(ae(n)),i=ie.lastIndex,n=ie.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ce(r){return"string"==typeof r}function se(r){var e,t;if(!ce(r))throw new TypeError(se("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[oe(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return ne.apply(null,e)}var ue,le=Object.prototype,pe=le.toString,fe=le.__defineGetter__,ge=le.__defineSetter__,de=le.__lookupGetter__,he=le.__lookupSetter__;ue=function(){try{return Or({},"x",{}),!0}catch(r){return!1}}()?Ar:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===pe.call(r))throw new TypeError(se("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===pe.call(t))throw new TypeError(se("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(de.call(r,e)||he.call(r,e)?(n=r.__proto__,r.__proto__=le,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&fe&&fe.call(r,e,t.get),o&&ge&&ge.call(r,e,t.set),r};var be=ue;function ve(r,e,t){be(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var ye=t();function we(){return ye&&"symbol"==typeof Symbol.toStringTag}var me=Object.prototype.toString;var Ee="function"==typeof Symbol?Symbol:void 0,_e="function"==typeof Ee?Ee.toStringTag:"";var Se=we()?function(r){var e,t,n;if(null==r)return me.call(r);t=r[_e],e=c(r,_e);try{r[_e]=void 0}catch(e){return me.call(r)}return n=me.call(r),e?r[_e]=t:delete r[_e],n}:function(r){return me.call(r)};var je=Array.isArray?Array.isArray:function(r){return"[object Array]"===Se(r)};function ke(r){return null!==r&&"object"==typeof r}function xe(r){return"string"==typeof r}ve(ke,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(se("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!je(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ke));var Ie=String.prototype.valueOf;var Te=we();function Ve(r){return"object"==typeof r&&(r instanceof String||(Te?function(r){try{return Ie.call(r),!0}catch(r){return!1}}(r):"[object String]"===Se(r)))}function Oe(r){return xe(r)||Ve(r)}function Ae(r){return"number"==typeof r}ve(Oe,"isPrimitive",xe),ve(Oe,"isObject",Ve);var Fe=Number,$e=Fe.prototype.toString;var Pe=we();function Ce(r){return"object"==typeof r&&(r instanceof Fe||(Pe?function(r){try{return $e.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Se(r)))}function Ne(r){return Ae(r)||Ce(r)}function Re(r){return r!=r}function Ze(r){return Ae(r)&&Re(r)}function Le(r){return Ce(r)&&Re(r.valueOf())}function We(r){return Ze(r)||Le(r)}ve(Ne,"isPrimitive",Ae),ve(Ne,"isObject",Ce),ve(We,"isPrimitive",Ze),ve(We,"isObject",Le);var Ge=Number.POSITIVE_INFINITY,Xe=Fe.NEGATIVE_INFINITY,Me=Math.floor;function Ue(r){return Me(r)===r}function Be(r){return r<Ge&&r>Xe&&Ue(r)}function Ye(r){return Ae(r)&&Be(r)}function ze(r){return Ce(r)&&Be(r.valueOf())}function He(r){return Ye(r)||ze(r)}ve(He,"isPrimitive",Ye),ve(He,"isObject",ze);var De=Object.prototype.propertyIsEnumerable;var qe=!De.call("beep","0");function Je(r,e){var t;return null!=r&&(!(t=De.call(r,e))&&qe&&Oe(r)?!Ze(e=+e)&&Ye(e)&&e>=0&&e<r.length:t)}var Ke=Je((function(){}),"prototype"),Qe=!Je({toString:null},"toString");function rt(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ue(r.length)&&r.length>=0&&r.length<=9007199254740991}function et(r,e,t){var n,i;if(!rt(r)&&!xe(r))throw new TypeError(se("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Ye(t))throw new TypeError(se("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(We(e)){for(;i<n;i++)if(We(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var tt=/./,nt="function"==typeof Object.defineProperty?Object.defineProperty:null;var it=Object.defineProperty;function at(r){return"number"==typeof r}function ot(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ct(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ot(i):ot(i)+r,n&&(r="-"+r)),r}var st=String.prototype.toLowerCase,ut=String.prototype.toUpperCase;function lt(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!at(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ct(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ct(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ut.call(r.specifier)?ut.call(t):st.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pt(r){return"string"==typeof r}var ft=Math.abs,gt=String.prototype.toLowerCase,dt=String.prototype.toUpperCase,ht=String.prototype.replace,bt=/e\+(\d)$/,vt=/e-(\d)$/,yt=/^(\d+)$/,wt=/^(\d+)e/,mt=/\.0$/,Et=/\.0*e/,_t=/(\..*[^0])0*e/;function St(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!at(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ft(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ht.call(t,_t,"$1e"),t=ht.call(t,Et,"e"),t=ht.call(t,mt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ht.call(t,bt,"e+0$1"),t=ht.call(t,vt,"e-0$1"),r.alternate&&(t=ht.call(t,yt,"$1."),t=ht.call(t,wt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===dt.call(r.specifier)?dt.call(t):gt.call(t)}function jt(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function kt(r,e,t){var n=e-r.length;return n<0?r:r=t?r+jt(n):jt(n)+r}var xt=String.fromCharCode,It=isNaN,Tt=Array.isArray;function Vt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ot(r){var e,t,n,i,a,o,c,s,u;if(!Tt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(pt(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Vt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,It(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,It(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=lt(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!It(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=It(a)?String(n.arg):xt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=St(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ct(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=kt(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var At=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ft(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $t(r){var e,t,n,i;for(t=[],i=0,n=At.exec(r);n;)(e=r.slice(i,At.lastIndex-n[0].length)).length&&t.push(e),t.push(Ft(n)),i=At.lastIndex,n=At.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Pt(r){return"string"==typeof r}function Ct(r){var e,t;if(!Pt(r))throw new TypeError(Ct("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$t(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ot.apply(null,e)}var Nt,Rt=Object.prototype,Zt=Rt.toString,Lt=Rt.__defineGetter__,Wt=Rt.__defineSetter__,Gt=Rt.__lookupGetter__,Xt=Rt.__lookupSetter__;Nt=function(){try{return nt({},"x",{}),!0}catch(r){return!1}}()?it:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Zt.call(r))throw new TypeError(Ct("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Zt.call(t))throw new TypeError(Ct("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Gt.call(r,e)||Xt.call(r,e)?(n=r.__proto__,r.__proto__=Rt,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Lt&&Lt.call(r,e,t.get),o&&Wt&&Wt.call(r,e,t.set),r};var Mt=Nt;function Ut(r,e,t){Mt(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Bt(r){return"boolean"==typeof r}var Yt=t();function zt(){return Yt&&"symbol"==typeof Symbol.toStringTag}var Ht=Object.prototype.toString;var Dt="function"==typeof Symbol?Symbol:void 0,qt="function"==typeof Dt?Dt.toStringTag:"";var Jt=zt()?function(r){var e,t,n;if(null==r)return Ht.call(r);t=r[qt],e=c(r,qt);try{r[qt]=void 0}catch(e){return Ht.call(r)}return n=Ht.call(r),e?r[qt]=t:delete r[qt],n}:function(r){return Ht.call(r)},Kt=Boolean,Qt=Boolean.prototype.toString;var rn=zt();function en(r){return"object"==typeof r&&(r instanceof Kt||(rn?function(r){try{return Qt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Jt(r)))}function tn(r){return Bt(r)||en(r)}function nn(){return new Function("return this;")()}Ut(tn,"isPrimitive",Bt),Ut(tn,"isObject",en);var an="object"==typeof self?self:null,on="object"==typeof window?window:null,cn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},sn="object"==typeof cn?cn:null,un="object"==typeof globalThis?globalThis:null;var ln=function(r){if(arguments.length){if(!Bt(r))throw new TypeError(Ct("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nn()}if(un)return un;if(an)return an;if(on)return on;if(sn)return sn;throw new Error("unexpected error. Unable to resolve global object.")}(),pn=ln.document&&ln.document.childNodes,fn=Int8Array;function gn(){return/^\s*function\s*([^(]*)/i}var dn=/^\s*function\s*([^(]*)/i;Ut(gn,"REGEXP",dn);var hn=Array.isArray?Array.isArray:function(r){return"[object Array]"===Jt(r)};function bn(r){return null!==r&&"object"==typeof r}function vn(r){var e,t,n,i;if(("Object"===(t=Jt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dn.exec(n.toString()))return e[1]}return bn(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Ut(bn,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Ct("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!hn(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(bn));var yn="function"==typeof tt||"object"==typeof fn||"function"==typeof pn?function(r){return vn(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vn(r).toLowerCase():e};function wn(r){return r.constructor&&r.constructor.prototype===r}var mn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],En="undefined"==typeof window?void 0:window;var _n=function(){var r;if("undefined"===yn(En))return!1;for(r in En)try{-1===et(mn,r)&&c(En,r)&&null!==En[r]&&"object"===yn(En[r])&&wn(En[r])}catch(r){return!0}return!1}(),Sn="undefined"!=typeof window;var jn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var kn=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return Tr(e)?r(Vr.call(e)):r(e)}:r:function(r){var e,t,n,i,a,o,s;if(i=[],Tr(r)){for(s=0;s<r.length;s++)i.push(s.toString());return i}if("string"==typeof r){if(r.length>0&&!c(r,"0"))for(s=0;s<r.length;s++)i.push(s.toString())}else{if(!1==(n="function"==typeof r)&&!ke(r))return i;t=Ke&&n}for(a in r)t&&"prototype"===a||!c(r,a)||i.push(String(a));if(Qe)for(e=function(r){if(!1===Sn&&!_n)return wn(r);try{return wn(r)}catch(r){return!1}}(r),s=0;s<jn.length;s++)o=jn[s],e&&"constructor"===o||!c(r,o)||i.push(String(o));return i};function xn(r){return"number"==typeof r}function In(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Tn(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+In(i):In(i)+r,n&&(r="-"+r)),r}var Vn=String.prototype.toLowerCase,On=String.prototype.toUpperCase;function An(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!xn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Tn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Tn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===On.call(r.specifier)?On.call(t):Vn.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Fn(r){return"string"==typeof r}var $n=Math.abs,Pn=String.prototype.toLowerCase,Cn=String.prototype.toUpperCase,Nn=String.prototype.replace,Rn=/e\+(\d)$/,Zn=/e-(\d)$/,Ln=/^(\d+)$/,Wn=/^(\d+)e/,Gn=/\.0$/,Xn=/\.0*e/,Mn=/(\..*[^0])0*e/;function Un(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!xn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":$n(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Nn.call(t,Mn,"$1e"),t=Nn.call(t,Xn,"e"),t=Nn.call(t,Gn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Nn.call(t,Rn,"e+0$1"),t=Nn.call(t,Zn,"e-0$1"),r.alternate&&(t=Nn.call(t,Ln,"$1."),t=Nn.call(t,Wn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Cn.call(r.specifier)?Cn.call(t):Pn.call(t)}function Bn(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Yn(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Bn(n):Bn(n)+r}var zn=String.fromCharCode,Hn=isNaN,Dn=Array.isArray;function qn(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Jn(r){var e,t,n,i,a,o,c,s,u;if(!Dn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Fn(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=qn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Hn(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Hn(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=An(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Hn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Hn(a)?String(n.arg):zn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Un(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Tn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Yn(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Kn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Qn(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ri(r){var e,t,n,i;for(t=[],i=0,n=Kn.exec(r);n;)(e=r.slice(i,Kn.lastIndex-n[0].length)).length&&t.push(e),t.push(Qn(n)),i=Kn.lastIndex,n=Kn.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ei(r){return"string"==typeof r}function ti(r){var e,t,n;if(!ei(r))throw new TypeError(ti("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ri(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Jn.apply(null,t)}function ni(r,e){var t,n,i,a;if("object"!=typeof r||null===r)throw new TypeError(ti("invalid argument. First argument must be an object. Value: `%s`.",r));if("function"!==yn(e))throw new TypeError(ti("invalid argument. Second argument must be a function. Value: `%s`.",e));for(n={},t=kn(r),a=0;a<t.length;a++)e(i=t[a],r[i])||(n[i]=r[i]);return n}export{ni as default};
//# sourceMappingURL=mod.js.map
