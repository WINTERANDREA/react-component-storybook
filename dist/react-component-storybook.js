!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-component-storybook"]=t():e["react-component-storybook"]=t()}(window,function(){return n={},o.m=r=[function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);t.default=function(){return o.a.createElement("button",null,"Button")}},function(e,t,r){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(3),n="function"==typeof Symbol&&Symbol.for,s=n?Symbol.for("react.element"):60103,l=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,i=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function S(){}function _(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=j.prototype;var O=_.prototype=new S;O.constructor=_,a(O,j.prototype),O.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var i=Array(f),l=0;l<f;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var $=/\/+/g,C=[];function R(e,t,r,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,C.length<10&&C.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case s:case l:c=!0}}if(c)return n(o,t,""===r?"."+I(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var i=r+I(u=t[f],f);c+=e(u,i,n,o)}else if("function"==typeof(i=null!==t&&"object"==typeof t&&"function"==typeof(i=m&&t[m]||t["@@iterator"])?i:null))for(t=i.call(t),f=0;!(u=t.next()).done;)c+=e(u=u.value,i=r+I(u,f++),n,o);else if("object"===u)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,function(e){return n[e]})):t.toString(36);var r,n}function q(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n,o,u=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,u,r,function(e){return e}):null!=e&&(E(e)&&(o=c+(!(n=e).key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r,e={$$typeof:s,type:n.type,key:o,ref:n.ref,props:n.props,_owner:n._owner}),u.push(e))}function T(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),M(e,U,t=R(t,u,n,o)),A(t)}var F={current:null};function L(){var e=F.current;if(null===e)throw Error(v(321));return e}var N={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,q,t=R(null,null,t,r)),A(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return T(e,t,null,function(e){return e}),t},only:function(e){if(!E(e))throw Error(v(143));return e}},t.Component=j,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=u,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(v(267,e));var n,o=a({},e.props),u=e.key,c=e.ref,f=e._owner;if(null!=t)for(i in void 0!==t.ref&&(c=t.ref,f=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps&&(n=e.type.defaultProps),t)k.call(t,i)&&!x.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==n?n[i]:t[i]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){n=Array(i);for(var l=0;l<i;l++)n[l]=arguments[l+2];o.children=n}return{$$typeof:s,type:e.type,key:u,ref:c,props:o,_owner:f}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return L().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,r){return L().useReducer(e,t,r)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join("")?void 0:1}catch(e){return}}()?Object.assign:function(e,t){for(var r,n,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in r=Object(arguments[u]))l.call(r,c)&&(o[c]=r[c]);if(i){n=i(r);for(var f=0;f<n.length;f++)a.call(r,n[f])&&(o[n[f]]=r[n[f]])}}return o}}],o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});