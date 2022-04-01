// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=t,n=e,i=r;var o=function(t,e){var r,o,m,a;if("object"!=typeof t||null===t)throw new TypeError(i("invalid argument. First argument must be an object. Value: `%s`.",t));if(!n(e))throw new TypeError(i("invalid argument. Second argument must be a function. Value: `%s`.",e));for(o={},r=s(t),a=0;a<r.length;a++)e(m=r[a],t[m])||(o[m]=t[m]);return o};export{o as default};
//# sourceMappingURL=index.mjs.map
