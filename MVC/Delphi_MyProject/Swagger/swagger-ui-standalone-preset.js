﻿!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(function(){try{return require("esprima")}catch(t){}}()):"function"==typeof define&&define.amd?define(["esprima"],e):"object"==typeof exports?exports.SwaggerUIStandalonePreset=e(function(){try{return require("esprima")}catch(t){}}()):t.SwaggerUIStandalonePreset=e(t.esprima)}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=178)}([function(t,e,n){t.exports=function(){"use strict";var t=Array.prototype.slice;function e(t,e){e&&(t.prototype=Object.create(e.prototype)),t.prototype.constructor=t}function n(t){return u(t)?t:q(t)}function r(t){return s(t)?t:J(t)}function i(t){return a(t)?t:Z(t)}function o(t){return u(t)&&!c(t)?t:V(t)}function u(t){return!(!t||!t[l])}function s(t){return!(!t||!t[p])}function a(t){return!(!t||!t[h])}function c(t){return s(t)||a(t)}function f(t){return!(!t||!t[d])}e(r,n),e(i,n),e(o,n),n.isIterable=u,n.isKeyed=s,n.isIndexed=a,n.isAssociative=c,n.isOrdered=f,n.Keyed=r,n.Indexed=i,n.Set=o;var l="@@__IMMUTABLE_ITERABLE__@@",p="@@__IMMUTABLE_KEYED__@@",h="@@__IMMUTABLE_INDEXED__@@",d="@@__IMMUTABLE_ORDERED__@@",y=5,v=1<<y,w=v-1,g={},M={value:!1},L={value:!1};function m(t){return t.value=!1,t}function j(t){t&&(t.value=!0)}function _(){}function b(t,e){e=e||0;for(var n=Math.max(0,t.length-e),r=new Array(n),i=0;i<n;i++)r[i]=t[i+e];return r}function x(t){return void 0===t.size&&(t.size=t.__iterate(D)),t.size}function N(t,e){if("number"!=typeof e){var n=e>>>0;if(""+n!==e||4294967295===n)return NaN;e=n}return e<0?x(t)+e:e}function D(){return!0}function S(t,e,n){return(0===t||void 0!==n&&t<=-n)&&(void 0===e||void 0!==n&&e>=n)}function I(t,e){return T(t,e,0)}function C(t,e){return T(t,e,e)}function T(t,e,n){return void 0===t?n:t<0?Math.max(0,e+t):void 0===e?t:Math.min(e,t)}var A=0,E=1,O=2,z="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",Y=z||k;function U(t){this.next=t}function P(t,e,n,r){var i=0===t?e:1===t?n:[e,n];return r?r.value=i:r={value:i,done:!1},r}function R(){return{value:void 0,done:!0}}function Q(t){return!!G(t)}function F(t){return t&&"function"==typeof t.next}function B(t){var e=G(t);return e&&e.call(t)}function G(t){var e=t&&(z&&t[z]||t[k]);if("function"==typeof e)return e}function W(t){return t&&"number"==typeof t.length}function q(t){return null==t?ot():u(t)?t.toSeq():function(t){var e=at(t)||"object"==typeof t&&new et(t);if(!e)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+t);return e}(t)}function J(t){return null==t?ot().toKeyedSeq():u(t)?s(t)?t.toSeq():t.fromEntrySeq():ut(t)}function Z(t){return null==t?ot():u(t)?s(t)?t.entrySeq():t.toIndexedSeq():st(t)}function V(t){return(null==t?ot():u(t)?s(t)?t.entrySeq():t:st(t)).toSetSeq()}U.prototype.toString=function(){return"[Iterator]"},U.KEYS=A,U.VALUES=E,U.ENTRIES=O,U.prototype.inspect=U.prototype.toSource=function(){return this.toString()},U.prototype[Y]=function(){return this},e(q,n),q.of=function(){return q(arguments)},q.prototype.toSeq=function(){return this},q.prototype.toString=function(){return this.__toString("Seq {","}")},q.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toA
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function u(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,a=u(t),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))i.call(n,f)&&(a[f]=n[f]);if(r){s=r(n);for(var l=0;l<s.length;l++)o.call(n,s[l])&&(a[s[l]]=n[s[l]])}}return a}},function(t,e,n){"use strict";var r=function(t){};t.exports=function(t,e,n,i,o,u,s,a){if(r(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,i,o,u,s,a],l=0;(c=new Error(e.replace(/%s/g,function(){return f[l++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(t,e,n){var r=n(250);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(56),i=n(252),o=n(253),u="[object Null]",s="[object Undefined]",a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:u:a&&a in Object(t)?i(t):o(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){(function(t){function n(t){return Object.prototype.toString.call(t)}e.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===n(t)},e.isBoolean=function(t){return"boolean"==typeof t},e.isNull=function(t){return null===t},e.isNullOrUndefined=function(t){return null==t},e.isNumber=function(t){return"number"==typeof t},e.isString=function(t){return"string"==typeof t},e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=function(t){return void 0===t},e.isRegExp=function(t){return"[object RegExp]"===n(t)},e.isObject=function(t){return"object"==typeof t&&null!==t},e.isDate=function(t){return"[object Date]"===n(t)},e.isError=function(t){return"[object Error]"===n(t)||t instanceof Error},e.isFunction=function(t){return"function"==typeof t},e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=t.isBuffer}).call(this,n(55).Buffer)},function(t,e,n){"use strict";function r(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.toString=function(t){var e=this.name+": ";return e+=this.reason||"(unknown reason)",!t&&this.mark&&(e+=" "+this.mark.toString()),e},t.exports=r},function(t,e,n){"use strict";var r=n(35);t.exports=new r({include:[n(165)],implicit:[n(429),n(430)],explicit:[n(431),n(432),n(433),n(434)]})},function(t,e){t.exports=function(){var t={location:{},history:{},open:function(){},close:function(){},File:function(){}};if("undefined"==typeof window)return t;try{t=window;for(var e=0,n=["File","Blob","FormData"];e<n.length;e++){var r=n[e];r in window&&(t[r]=window[r])}}catch(t){console.error(t)}return t}()},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";t.exports=function(t){f
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n(232),i=n(233),o=n(134);function u(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=a.prototype:(null===t&&(t=new a(e)),t.length=e),t}function a(t,e,n){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return c(this,t,e,n)}function c(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);a.TYPED_ARRAY_SUPPORT?(t=e).__proto__=a.prototype:t=p(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!a.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|d(e,n),i=(t=s(t,r)).write(e,n);i!==r&&(t=t.slice(0,i));return t}(t,e,n):function(t,e){if(a.isBuffer(e)){var n=0|h(e.length);return 0===(t=s(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?s(t,0):p(t,e);if("Buffer"===e.type&&o(e.data))return p(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e){if(f(e),t=s(t,e<0?0:0|h(e)),!a.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function p(t,e){var n=e.length<0?0:0|h(e.length);t=s(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function h(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function d(t,e){if(a.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return Q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return F(t).length;default:if(r)return Q(t).length;e=(""+e).toLowerCase(),r=!0}}function y(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return C(this,e,n);case"utf8":case"utf-8":return N(this,e,n);case"ascii":return S(this,e,n);case"latin1":case"binary":return I(this,e,n);case"base64":return x(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function v(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function w(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=a.from(e,r)),a.isBuffer(e))return 0===e.length?-1:g(t,e,n,r,i);if("number"==typeof e)return e&=255,a.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function g(t,e,n,r,i){var o,u=1,s=t.length,a=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())|
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case l:case p:case u:case a:case s:case d:return t;default:switch(t=t&&t.$$typeof){case f:case h:case c:return t;default:return e}}case v:case y:case o:return e}}}function g(t){return w(t)===p}e.typeOf=w,e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=c,e.Element=i,e.ForwardRef=h,e.Fragment=u,e.Lazy=v,e.Memo=y,e.Portal=o,e.Profiler=a,e.StrictMode=s,e.Suspense=d,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===u||t===p||t===a||t===s||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===y||t.$$typeof===c||t.$$typeof===f||t.$$typeof===h)},e.isAsyncMode=function(t){return g(t)||w(t)===l},e.isConcurrentMode=g,e.isContextConsumer=function(t){return w(t)===f},e.isContextProvider=function(t){return w(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return w(t)===h},e.isFragment=function(t){return w(t)===u},e.isLazy=function(t){return w(t)===v},e.isMemo=function(t){return w(t)===y},e.isPortal=function(t){return w(t)===o},e.isProfiler=function(t){return w(t)===a},e.isStrictMode=function(t){return w(t)===s},e.isSuspense=function(t){return w(t)===d}},function(t,e,n){"use strict";function r(t,e,n,r,i){}r.resetWarningCache=function(){0},t.exports=r},function(t,e,n){"use strict";t.exports="15.6.2"},function(t,e,n){"use strict";var r=n(125).Component,i=n(29).isValidElement,o=n(126),u=n(229);t.exports=u(r,i,o)},function(t,e,n){"use strict";var r=n(39),i=n(129),o=n(40),u="mixins";t.exports=function(t,e,n){var s=[],a={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},c={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},f={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)p(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=r({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=r({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=d(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=r({},t.propTypes,e)},statics:function(t,e){!function(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var i=n in f;o(!i,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var u=n in t;if(u){var s=c.hasOwnProperty(n)?c[n]:null;return o("DEFINE_MANY_MERGED"===s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=d(t[n],r))}t[n]=r}}}(t,e)},autobind:function(){}};function l(t,e){var n=a.hasOwnProperty(e)?a[e]:null;M.hasOwnProperty(e)&&o("OVERRIDE_BASE"===n,"ReactClassInter
//# sourceMappingURL=swagger-ui-standalone-preset.js.map