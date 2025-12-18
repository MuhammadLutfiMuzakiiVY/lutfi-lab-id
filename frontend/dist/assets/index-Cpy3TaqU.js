function Nm(e,r){for(var n=0;n<r.length;n++){const a=r[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ld={exports:{}},Mi={},Ed={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),Cm=Symbol.for("react.portal"),zm=Symbol.for("react.fragment"),Tm=Symbol.for("react.strict_mode"),Lm=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Am=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),Ol=Symbol.iterator;function Im(e){return e===null||typeof e!="object"?null:(e=Ol&&e[Ol]||e["@@iterator"],typeof e=="function"?e:null)}var Md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,Dd={};function bn(e,r,n){this.props=e,this.context=r,this.refs=Dd,this.updater=n||Md}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ad(){}Ad.prototype=bn.prototype;function Ro(e,r,n){this.props=e,this.context=r,this.refs=Dd,this.updater=n||Md}var _o=Ro.prototype=new Ad;_o.constructor=Ro;Pd(_o,bn.prototype);_o.isPureReactComponent=!0;var Wl=Array.isArray,Bd=Object.prototype.hasOwnProperty,Oo={current:null},Id={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,r,n){var a,i={},s=null,o=null;if(r!=null)for(a in r.ref!==void 0&&(o=r.ref),r.key!==void 0&&(s=""+r.key),r)Bd.call(r,a)&&!Id.hasOwnProperty(a)&&(i[a]=r[a]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var l=Array(c),m=0;m<c;m++)l[m]=arguments[m+2];i.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps,c)i[a]===void 0&&(i[a]=c[a]);return{$$typeof:va,type:e,key:s,ref:o,props:i,_owner:Oo.current}}function Rm(e,r){return{$$typeof:va,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===va}function _m(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Fl=/\/+/g;function ts(e,r){return typeof e=="object"&&e!==null&&e.key!=null?_m(""+e.key):r.toString(36)}function Qa(e,r,n,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case va:case Cm:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+ts(o,0):a,Wl(i)?(n="",e!=null&&(n=e.replace(Fl,"$&/")+"/"),Qa(i,r,n,"",function(m){return m})):i!=null&&(Wo(i)&&(i=Rm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fl,"$&/")+"/")+e)),r.push(i)),1;if(o=0,a=a===""?".":a+":",Wl(e))for(var c=0;c<e.length;c++){s=e[c];var l=a+ts(s,c);o+=Qa(s,r,n,l,i)}else if(l=Im(e),typeof l=="function")for(e=l.call(e),c=0;!(s=e.next()).done;)s=s.value,l=a+ts(s,c++),o+=Qa(s,r,n,l,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(e,r,n){if(e==null)return e;var a=[],i=0;return Qa(e,a,"","",function(s){return r.call(n,s,i++)}),a}function Om(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Ka={transition:null},Wm={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Oo};function _d(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:Ca,forEach:function(e,r,n){Ca(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Ca(e,function(){r++}),r},toArray:function(e){return Ca(e,function(r){return r})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=bn;xe.Fragment=zm;xe.Profiler=Lm;xe.PureComponent=Ro;xe.StrictMode=Tm;xe.Suspense=Dm;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wm;xe.act=_d;xe.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Pd({},e.props),i=e.key,s=e.ref,o=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,o=Oo.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in r)Bd.call(r,l)&&!Id.hasOwnProperty(l)&&(a[l]=r[l]===void 0&&c!==void 0?c[l]:r[l])}var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){c=Array(l);for(var m=0;m<l;m++)c[m]=arguments[m+2];a.children=c}return{$$typeof:va,type:e.type,key:i,ref:s,props:a,_owner:o}};xe.createContext=function(e){return e={$$typeof:Mm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Em,_context:e},e.Consumer=e};xe.createElement=Rd;xe.createFactory=function(e){var r=Rd.bind(null,e);return r.type=e,r};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:Pm,render:e}};xe.isValidElement=Wo;xe.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Om}};xe.memo=function(e,r){return{$$typeof:Am,type:e,compare:r===void 0?null:r}};xe.startTransition=function(e){var r=Ka.transition;Ka.transition={};try{e()}finally{Ka.transition=r}};xe.unstable_act=_d;xe.useCallback=function(e,r){return Xe.current.useCallback(e,r)};xe.useContext=function(e){return Xe.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};xe.useEffect=function(e,r){return Xe.current.useEffect(e,r)};xe.useId=function(){return Xe.current.useId()};xe.useImperativeHandle=function(e,r,n){return Xe.current.useImperativeHandle(e,r,n)};xe.useInsertionEffect=function(e,r){return Xe.current.useInsertionEffect(e,r)};xe.useLayoutEffect=function(e,r){return Xe.current.useLayoutEffect(e,r)};xe.useMemo=function(e,r){return Xe.current.useMemo(e,r)};xe.useReducer=function(e,r,n){return Xe.current.useReducer(e,r,n)};xe.useRef=function(e){return Xe.current.useRef(e)};xe.useState=function(e){return Xe.current.useState(e)};xe.useSyncExternalStore=function(e,r,n){return Xe.current.useSyncExternalStore(e,r,n)};xe.useTransition=function(){return Xe.current.useTransition()};xe.version="18.3.1";Ed.exports=xe;var p=Ed.exports;const Od=Sm(p),Fm=Nm({__proto__:null,default:Od},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=p,Vm=Symbol.for("react.element"),Hm=Symbol.for("react.fragment"),Um=Object.prototype.hasOwnProperty,Gm=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ym={key:!0,ref:!0,__self:!0,__source:!0};function Wd(e,r,n){var a,i={},s=null,o=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(o=r.ref);for(a in r)Um.call(r,a)&&!Ym.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)i[a]===void 0&&(i[a]=r[a]);return{$$typeof:Vm,type:e,key:s,ref:o,props:i,_owner:Gm.current}}Mi.Fragment=Hm;Mi.jsx=Wd;Mi.jsxs=Wd;Ld.exports=Mi;var t=Ld.exports,Bs={},Fd={exports:{}},mt={},$d={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(P,L){var z=P.length;P.push(L);e:for(;0<z;){var V=z-1>>>1,D=P[V];if(0<i(D,L))P[V]=L,P[z]=D,z=V;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var L=P[0],z=P.pop();if(z!==L){P[0]=z;e:for(var V=0,D=P.length,B=D>>>1;V<B;){var F=2*(V+1)-1,k=P[F],H=F+1,U=P[H];if(0>i(k,z))H<D&&0>i(U,k)?(P[V]=U,P[H]=z,V=H):(P[V]=k,P[F]=z,V=F);else if(H<D&&0>i(U,z))P[V]=U,P[H]=z,V=H;else break e}}return L}function i(P,L){var z=P.sortIndex-L.sortIndex;return z!==0?z:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var l=[],m=[],h=1,x=null,g=3,E=!1,w=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var L=n(m);L!==null;){if(L.callback===null)a(m);else if(L.startTime<=P)a(m),L.sortIndex=L.expirationTime,r(l,L);else break;L=n(m)}}function j(P){if(v=!1,f(P),!w)if(n(l)!==null)w=!0,C(b);else{var L=n(m);L!==null&&A(j,L.startTime-P)}}function b(P,L){w=!1,v&&(v=!1,d(O),O=-1),E=!0;var z=g;try{for(f(L),x=n(l);x!==null&&(!(x.expirationTime>L)||P&&!q());){var V=x.callback;if(typeof V=="function"){x.callback=null,g=x.priorityLevel;var D=V(x.expirationTime<=L);L=e.unstable_now(),typeof D=="function"?x.callback=D:x===n(l)&&a(l),f(L)}else a(l);x=n(l)}if(x!==null)var B=!0;else{var F=n(m);F!==null&&A(j,F.startTime-L),B=!1}return B}finally{x=null,g=z,E=!1}}var y=!1,I=null,O=-1,R=5,W=-1;function q(){return!(e.unstable_now()-W<R)}function J(){if(I!==null){var P=e.unstable_now();W=P;var L=!0;try{L=I(!0,P)}finally{L?_():(y=!1,I=null)}}else y=!1}var _;if(typeof u=="function")_=function(){u(J)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,T=$.port2;$.port1.onmessage=J,_=function(){T.postMessage(null)}}else _=function(){N(J,0)};function C(P){I=P,y||(y=!0,_())}function A(P,L){O=N(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||E||(w=!0,C(b))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var z=g;g=L;try{return P()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=g;g=P;try{return L()}finally{g=z}},e.unstable_scheduleCallback=function(P,L,z){var V=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?V+z:V):z=V,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=z+D,P={id:h++,callback:L,priorityLevel:P,startTime:z,expirationTime:D,sortIndex:-1},z>V?(P.sortIndex=z,r(m,P),n(l)===null&&P===n(m)&&(v?(d(O),O=-1):v=!0,A(j,z-V))):(P.sortIndex=D,r(l,P),w||E||(w=!0,C(b))),P},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(P){var L=g;return function(){var z=g;g=L;try{return P.apply(this,arguments)}finally{g=z}}}})(Vd);$d.exports=Vd;var Qm=$d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=p,pt=Qm;function G(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,ea={};function Rr(e,r){un(e,r),un(e+"Capture",r)}function un(e,r){for(ea[e]=r,e=0;e<r.length;e++)Hd.add(r[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=Object.prototype.hasOwnProperty,qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$l={},Vl={};function Jm(e){return Is.call(Vl,e)?!0:Is.call($l,e)?!1:qm.test(e)?Vl[e]=!0:($l[e]=!0,!1)}function Xm(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zm(e,r,n,a){if(r===null||typeof r>"u"||Xm(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Ze(e,r,n,a,i,s,o){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Ue[r]=new Ze(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fo=/[\-:]([a-z])/g;function $o(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Fo,$o);Ue[r]=new Ze(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Fo,$o);Ue[r]=new Ze(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Fo,$o);Ue[r]=new Ze(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vo(e,r,n,a){var i=Ue.hasOwnProperty(r)?Ue[r]:null;(i!==null?i.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Zm(r,n,i,a)&&(n=null),a||i===null?Jm(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var qt=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),Ho=Symbol.for("react.strict_mode"),Rs=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),Gd=Symbol.for("react.context"),Uo=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Hl=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=Hl&&e[Hl]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,rs;function On(e){if(rs===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);rs=r&&r[1]||""}return`
`+rs+e}var ns=!1;function as(e,r){if(!e||ns)return"";ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(m){var a=m}Reflect.construct(e,[],r)}else{try{r.call()}catch(m){a=m}e.call(r.prototype)}else{try{throw Error()}catch(m){a=m}e()}}catch(m){if(m&&a&&typeof m.stack=="string"){for(var i=m.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,c=s.length-1;1<=o&&0<=c&&i[o]!==s[c];)c--;for(;1<=o&&0<=c;o--,c--)if(i[o]!==s[c]){if(o!==1||c!==1)do if(o--,c--,0>c||i[o]!==s[c]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=c);break}}}finally{ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function e0(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=as(e.type,!1),e;case 11:return e=as(e.type.render,!1),e;case 1:return e=as(e.type,!0),e;default:return""}}function Ws(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case Ur:return"Portal";case Rs:return"Profiler";case Ho:return"StrictMode";case _s:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gd:return(e.displayName||"Context")+".Consumer";case Ud:return(e._context.displayName||"Context")+".Provider";case Uo:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return r=e.displayName||null,r!==null?r:Ws(e.type)||"Memo";case er:r=e._payload,e=e._init;try{return Ws(e(r))}catch{}}return null}function t0(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ws(r);case 8:return r===Ho?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qd(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function r0(e){var r=Qd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Ta(e){e._valueTracker||(e._valueTracker=r0(e))}function Kd(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=Qd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,r){var n=r.checked;return Pe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ul(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=gr(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function qd(e,r){r=r.checked,r!=null&&Vo(e,"checked",r,!1)}function $s(e,r){qd(e,r);var n=gr(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Vs(e,r.type,n):r.hasOwnProperty("defaultValue")&&Vs(e,r.type,gr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Gl(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vs(e,r,n){(r!=="number"||si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function nn(e,r,n,a){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+gr(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Hs(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(G(91));return Pe({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yl(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(G(92));if(Wn(n)){if(1<n.length)throw Error(G(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:gr(n)}}function Jd(e,r){var n=gr(r.value),a=gr(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Ql(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Xd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Us(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Xd(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var La,Zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=La.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function ta(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){n0.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Vn[r]=Vn[e]})});function eu(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+r).trim():r+"px"}function tu(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=eu(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var a0=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(e,r){if(r){if(a0[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(G(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(G(61))}if(r.style!=null&&typeof r.style!="object")throw Error(G(62))}}function Ys(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,an=null,sn=null;function Kl(e){if(e=wa(e)){if(typeof Ks!="function")throw Error(G(280));var r=e.stateNode;r&&(r=Ii(r),Ks(e.stateNode,e.type,r))}}function ru(e){an?sn?sn.push(e):sn=[e]:an=e}function nu(){if(an){var e=an,r=sn;if(sn=an=null,Kl(e),r)for(e=0;e<r.length;e++)Kl(r[e])}}function au(e,r){return e(r)}function iu(){}var is=!1;function su(e,r,n){if(is)return e(r,n);is=!0;try{return au(e,r,n)}finally{is=!1,(an!==null||sn!==null)&&(iu(),nu())}}function ra(e,r){var n=e.stateNode;if(n===null)return null;var a=Ii(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,r,typeof n));return n}var qs=!1;if(Gt)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){qs=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{qs=!1}function i0(e,r,n,a,i,s,o,c,l){var m=Array.prototype.slice.call(arguments,3);try{r.apply(n,m)}catch(h){this.onError(h)}}var Hn=!1,oi=null,li=!1,Js=null,s0={onError:function(e){Hn=!0,oi=e}};function o0(e,r,n,a,i,s,o,c,l){Hn=!1,oi=null,i0.apply(s0,arguments)}function l0(e,r,n,a,i,s,o,c,l){if(o0.apply(this,arguments),Hn){if(Hn){var m=oi;Hn=!1,oi=null}else throw Error(G(198));li||(li=!0,Js=m)}}function _r(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ou(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function ql(e){if(_r(e)!==e)throw Error(G(188))}function c0(e){var r=e.alternate;if(!r){if(r=_r(e),r===null)throw Error(G(188));return r!==e?null:e}for(var n=e,a=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ql(i),e;if(s===a)return ql(i),r;s=s.sibling}throw Error(G(188))}if(n.return!==a.return)n=i,a=s;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,a=s;break}if(c===a){o=!0,a=i,n=s;break}c=c.sibling}if(!o){for(c=s.child;c;){if(c===n){o=!0,n=s,a=i;break}if(c===a){o=!0,a=s,n=i;break}c=c.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==a)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:r}function lu(e){return e=c0(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=cu(e);if(r!==null)return r;e=e.sibling}return null}var du=pt.unstable_scheduleCallback,Jl=pt.unstable_cancelCallback,d0=pt.unstable_shouldYield,u0=pt.unstable_requestPaint,Ae=pt.unstable_now,p0=pt.unstable_getCurrentPriorityLevel,Qo=pt.unstable_ImmediatePriority,uu=pt.unstable_UserBlockingPriority,ci=pt.unstable_NormalPriority,m0=pt.unstable_LowPriority,pu=pt.unstable_IdlePriority,Pi=null,It=null;function f0(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:x0,h0=Math.log,g0=Math.LN2;function x0(e){return e>>>=0,e===0?32:31-(h0(e)/g0|0)|0}var Ea=64,Ma=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function di(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~i;c!==0?a=Fn(c):(s&=o,s!==0&&(a=Fn(s)))}else o=n&~i,o!==0?a=Fn(o):s!==0&&(a=Fn(s));if(a===0)return 0;if(r!==0&&r!==a&&!(r&i)&&(i=a&-a,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(a&4&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-Et(r),i=1<<n,a|=e[n],r&=~i;return a}function b0(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v0(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Et(s),c=1<<o,l=i[o];l===-1?(!(c&n)||c&a)&&(i[o]=b0(c,r)):l<=r&&(e.expiredLanes|=c),s&=~c}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),e}function ss(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function ya(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Et(r),e[r]=n}function y0(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Et(n),s=1<<i;r[i]=0,a[i]=-1,e[i]=-1,n&=~s}}function Ko(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-Et(n),i=1<<a;i&r|e[a]&r&&(e[a]|=r),n&=~i}}var Ne=0;function fu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,qo,gu,xu,bu,Zs=!1,Pa=[],or=null,lr=null,cr=null,na=new Map,aa=new Map,rr=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(e,r){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":na.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(r.pointerId)}}function Ln(e,r,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},r!==null&&(r=wa(r),r!==null&&qo(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function w0(e,r,n,a,i){switch(r){case"focusin":return or=Ln(or,e,r,n,a,i),!0;case"dragenter":return lr=Ln(lr,e,r,n,a,i),!0;case"mouseover":return cr=Ln(cr,e,r,n,a,i),!0;case"pointerover":var s=i.pointerId;return na.set(s,Ln(na.get(s)||null,e,r,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,aa.set(s,Ln(aa.get(s)||null,e,r,n,a,i)),!0}return!1}function vu(e){var r=zr(e.target);if(r!==null){var n=_r(r);if(n!==null){if(r=n.tag,r===13){if(r=ou(n),r!==null){e.blockedOn=r,bu(e.priority,function(){gu(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=eo(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Qs=a,n.target.dispatchEvent(a),Qs=null}else return r=wa(n),r!==null&&qo(r),e.blockedOn=n,!1;r.shift()}return!0}function Zl(e,r,n){qa(e)&&n.delete(r)}function k0(){Zs=!1,or!==null&&qa(or)&&(or=null),lr!==null&&qa(lr)&&(lr=null),cr!==null&&qa(cr)&&(cr=null),na.forEach(Zl),aa.forEach(Zl)}function En(e,r){e.blockedOn===r&&(e.blockedOn=null,Zs||(Zs=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,k0)))}function ia(e){function r(i){return En(i,e)}if(0<Pa.length){En(Pa[0],e);for(var n=1;n<Pa.length;n++){var a=Pa[n];a.blockedOn===e&&(a.blockedOn=null)}}for(or!==null&&En(or,e),lr!==null&&En(lr,e),cr!==null&&En(cr,e),na.forEach(r),aa.forEach(r),n=0;n<rr.length;n++)a=rr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)vu(n),n.blockedOn===null&&rr.shift()}var on=qt.ReactCurrentBatchConfig,ui=!0;function N0(e,r,n,a){var i=Ne,s=on.transition;on.transition=null;try{Ne=1,Jo(e,r,n,a)}finally{Ne=i,on.transition=s}}function S0(e,r,n,a){var i=Ne,s=on.transition;on.transition=null;try{Ne=4,Jo(e,r,n,a)}finally{Ne=i,on.transition=s}}function Jo(e,r,n,a){if(ui){var i=eo(e,r,n,a);if(i===null)gs(e,r,a,pi,n),Xl(e,a);else if(w0(i,e,r,n,a))a.stopPropagation();else if(Xl(e,a),r&4&&-1<j0.indexOf(e)){for(;i!==null;){var s=wa(i);if(s!==null&&hu(s),s=eo(e,r,n,a),s===null&&gs(e,r,a,pi,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else gs(e,r,a,null,n)}}var pi=null;function eo(e,r,n,a){if(pi=null,e=Yo(a),e=zr(e),e!==null)if(r=_r(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ou(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return pi=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p0()){case Qo:return 1;case uu:return 4;case ci:case m0:return 16;case pu:return 536870912;default:return 16}default:return 16}}var ar=null,Xo=null,Ja=null;function ju(){if(Ja)return Ja;var e,r=Xo,n=r.length,a,i="value"in ar?ar.value:ar.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&r[n-a]===i[s-a];a++);return Ja=i.slice(e,1<a?1-a:void 0)}function Xa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Da(){return!0}function ec(){return!1}function ft(e){function r(n,a,i,s,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:ec,this.isPropagationStopped=ec,this}return Pe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),r}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=ft(vn),ja=Pe({},vn,{view:0,detail:0}),C0=ft(ja),os,ls,Mn,Di=Pe({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(os=e.screenX-Mn.screenX,ls=e.screenY-Mn.screenY):ls=os=0,Mn=e),os)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),tc=ft(Di),z0=Pe({},Di,{dataTransfer:0}),T0=ft(z0),L0=Pe({},ja,{relatedTarget:0}),cs=ft(L0),E0=Pe({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=ft(E0),P0=Pe({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D0=ft(P0),A0=Pe({},vn,{data:0}),rc=ft(A0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=R0[e])?!!r[e]:!1}function el(){return _0}var O0=Pe({},ja,{key:function(e){if(e.key){var r=B0[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=ft(O0),F0=Pe({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=ft(F0),$0=Pe({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),V0=ft($0),H0=Pe({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=ft(H0),G0=Pe({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=ft(G0),Q0=[9,13,27,32],tl=Gt&&"CompositionEvent"in window,Un=null;Gt&&"documentMode"in document&&(Un=document.documentMode);var K0=Gt&&"TextEvent"in window&&!Un,wu=Gt&&(!tl||Un&&8<Un&&11>=Un),ac=" ",ic=!1;function ku(e,r){switch(e){case"keyup":return Q0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yr=!1;function q0(e,r){switch(e){case"compositionend":return Nu(r);case"keypress":return r.which!==32?null:(ic=!0,ac);case"textInput":return e=r.data,e===ac&&ic?null:e;default:return null}}function J0(e,r){if(Yr)return e==="compositionend"||!tl&&ku(e,r)?(e=ju(),Ja=Xo=ar=null,Yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wu&&r.locale!=="ko"?null:r.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!X0[e.type]:r==="textarea"}function Su(e,r,n,a){ru(a),r=mi(r,"onChange"),0<r.length&&(n=new Zo("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var Gn=null,sa=null;function Z0(e){Iu(e,0)}function Ai(e){var r=qr(e);if(Kd(r))return e}function ef(e,r){if(e==="change")return r}var Cu=!1;if(Gt){var ds;if(Gt){var us="oninput"in document;if(!us){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),us=typeof oc.oninput=="function"}ds=us}else ds=!1;Cu=ds&&(!document.documentMode||9<document.documentMode)}function lc(){Gn&&(Gn.detachEvent("onpropertychange",zu),sa=Gn=null)}function zu(e){if(e.propertyName==="value"&&Ai(sa)){var r=[];Su(r,sa,e,Yo(e)),su(Z0,r)}}function tf(e,r,n){e==="focusin"?(lc(),Gn=r,sa=n,Gn.attachEvent("onpropertychange",zu)):e==="focusout"&&lc()}function rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(sa)}function nf(e,r){if(e==="click")return Ai(r)}function af(e,r){if(e==="input"||e==="change")return Ai(r)}function sf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Pt=typeof Object.is=="function"?Object.is:sf;function oa(e,r){if(Pt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Is.call(r,i)||!Pt(e[i],r[i]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,r){var n=cc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function Tu(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Tu(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Lu(){for(var e=window,r=si();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=si(e.document)}return r}function rl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function of(e){var r=Lu(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Tu(n.ownerDocument.documentElement,n)){if(a!==null&&rl(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=dc(n,s);var o=dc(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(r),e.extend(o.node,o.offset)):(r.setEnd(o.node,o.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lf=Gt&&"documentMode"in document&&11>=document.documentMode,Qr=null,to=null,Yn=null,ro=!1;function uc(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ro||Qr==null||Qr!==si(a)||(a=Qr,"selectionStart"in a&&rl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Yn&&oa(Yn,a)||(Yn=a,a=mi(to,"onSelect"),0<a.length&&(r=new Zo("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=Qr)))}function Aa(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Kr={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},ps={},Eu={};Gt&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Bi(e){if(ps[e])return ps[e];if(!Kr[e])return e;var r=Kr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Eu)return ps[e]=r[n];return e}var Mu=Bi("animationend"),Pu=Bi("animationiteration"),Du=Bi("animationstart"),Au=Bi("transitionend"),Bu=new Map,pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(e,r){Bu.set(e,r),Rr(r,[e])}for(var ms=0;ms<pc.length;ms++){var fs=pc[ms],cf=fs.toLowerCase(),df=fs[0].toUpperCase()+fs.slice(1);br(cf,"on"+df)}br(Mu,"onAnimationEnd");br(Pu,"onAnimationIteration");br(Du,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(Au,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uf=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function mc(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,l0(a,r,void 0,e),e.currentTarget=null}function Iu(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(r)for(var o=a.length-1;0<=o;o--){var c=a[o],l=c.instance,m=c.currentTarget;if(c=c.listener,l!==s&&i.isPropagationStopped())break e;mc(i,c,m),s=l}else for(o=0;o<a.length;o++){if(c=a[o],l=c.instance,m=c.currentTarget,c=c.listener,l!==s&&i.isPropagationStopped())break e;mc(i,c,m),s=l}}}if(li)throw e=Js,li=!1,Js=null,e}function ze(e,r){var n=r[oo];n===void 0&&(n=r[oo]=new Set);var a=e+"__bubble";n.has(a)||(Ru(r,e,2,!1),n.add(a))}function hs(e,r,n){var a=0;r&&(a|=4),Ru(n,e,a,r)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[Ba]){e[Ba]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(uf.has(n)||hs(n,!1,e),hs(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ba]||(r[Ba]=!0,hs("selectionchange",!1,r))}}function Ru(e,r,n,a){switch(yu(r)){case 1:var i=N0;break;case 4:i=S0;break;default:i=Jo}n=i.bind(null,r,n,e),i=void 0,!qs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function gs(e,r,n,a,i){var s=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;c!==null;){if(o=zr(c),o===null)return;if(l=o.tag,l===5||l===6){a=s=o;continue e}c=c.parentNode}}a=a.return}su(function(){var m=s,h=Yo(n),x=[];e:{var g=Bu.get(e);if(g!==void 0){var E=Zo,w=e;switch(e){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":E=W0;break;case"focusin":w="focus",E=cs;break;case"focusout":w="blur",E=cs;break;case"beforeblur":case"afterblur":E=cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=V0;break;case Mu:case Pu:case Du:E=M0;break;case Au:E=U0;break;case"scroll":E=C0;break;case"wheel":E=Y0;break;case"copy":case"cut":case"paste":E=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=nc}var v=(r&4)!==0,N=!v&&e==="scroll",d=v?g!==null?g+"Capture":null:g;v=[];for(var u=m,f;u!==null;){f=u;var j=f.stateNode;if(f.tag===5&&j!==null&&(f=j,d!==null&&(j=ra(u,d),j!=null&&v.push(ca(u,j,f)))),N)break;u=u.return}0<v.length&&(g=new E(g,w,null,n,h),x.push({event:g,listeners:v}))}}if(!(r&7)){e:{if(g=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",g&&n!==Qs&&(w=n.relatedTarget||n.fromElement)&&(zr(w)||w[Yt]))break e;if((E||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,E?(w=n.relatedTarget||n.toElement,E=m,w=w?zr(w):null,w!==null&&(N=_r(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(E=null,w=m),E!==w)){if(v=tc,j="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=nc,j="onPointerLeave",d="onPointerEnter",u="pointer"),N=E==null?g:qr(E),f=w==null?g:qr(w),g=new v(j,u+"leave",E,n,h),g.target=N,g.relatedTarget=f,j=null,zr(h)===m&&(v=new v(d,u+"enter",w,n,h),v.target=f,v.relatedTarget=N,j=v),N=j,E&&w)t:{for(v=E,d=w,u=0,f=v;f;f=Fr(f))u++;for(f=0,j=d;j;j=Fr(j))f++;for(;0<u-f;)v=Fr(v),u--;for(;0<f-u;)d=Fr(d),f--;for(;u--;){if(v===d||d!==null&&v===d.alternate)break t;v=Fr(v),d=Fr(d)}v=null}else v=null;E!==null&&fc(x,g,E,v,!1),w!==null&&N!==null&&fc(x,N,w,v,!0)}}e:{if(g=m?qr(m):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var b=ef;else if(sc(g))if(Cu)b=af;else{b=rf;var y=tf}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=nf);if(b&&(b=b(e,m))){Su(x,b,n,h);break e}y&&y(e,g,m),e==="focusout"&&(y=g._wrapperState)&&y.controlled&&g.type==="number"&&Vs(g,"number",g.value)}switch(y=m?qr(m):window,e){case"focusin":(sc(y)||y.contentEditable==="true")&&(Qr=y,to=m,Yn=null);break;case"focusout":Yn=to=Qr=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,uc(x,n,h);break;case"selectionchange":if(lf)break;case"keydown":case"keyup":uc(x,n,h)}var I;if(tl)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Yr?ku(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(wu&&n.locale!=="ko"&&(Yr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Yr&&(I=ju()):(ar=h,Xo="value"in ar?ar.value:ar.textContent,Yr=!0)),y=mi(m,O),0<y.length&&(O=new rc(O,e,null,n,h),x.push({event:O,listeners:y}),I?O.data=I:(I=Nu(n),I!==null&&(O.data=I)))),(I=K0?q0(e,n):J0(e,n))&&(m=mi(m,"onBeforeInput"),0<m.length&&(h=new rc("onBeforeInput","beforeinput",null,n,h),x.push({event:h,listeners:m}),h.data=I))}Iu(x,r)})}function ca(e,r,n){return{instance:e,listener:r,currentTarget:n}}function mi(e,r){for(var n=r+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ra(e,n),s!=null&&a.unshift(ca(e,s,i)),s=ra(e,r),s!=null&&a.push(ca(e,s,i))),e=e.return}return a}function Fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fc(e,r,n,a,i){for(var s=r._reactName,o=[];n!==null&&n!==a;){var c=n,l=c.alternate,m=c.stateNode;if(l!==null&&l===a)break;c.tag===5&&m!==null&&(c=m,i?(l=ra(n,s),l!=null&&o.unshift(ca(n,l,c))):i||(l=ra(n,s),l!=null&&o.push(ca(n,l,c)))),n=n.return}o.length!==0&&e.push({event:r,listeners:o})}var pf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function hc(e){return(typeof e=="string"?e:""+e).replace(pf,`
`).replace(mf,"")}function Ia(e,r,n){if(r=hc(r),hc(e)!==r&&n)throw Error(G(425))}function fi(){}var no=null,ao=null;function io(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,ff=typeof clearTimeout=="function"?clearTimeout:void 0,gc=typeof Promise=="function"?Promise:void 0,hf=typeof queueMicrotask=="function"?queueMicrotask:typeof gc<"u"?function(e){return gc.resolve(null).then(e).catch(gf)}:so;function gf(e){setTimeout(function(){throw e})}function xs(e,r){var n=r,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),ia(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);ia(r)}function dr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function xc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Bt="__reactFiber$"+yn,da="__reactProps$"+yn,Yt="__reactContainer$"+yn,oo="__reactEvents$"+yn,xf="__reactListeners$"+yn,bf="__reactHandles$"+yn;function zr(e){var r=e[Bt];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Yt]||n[Bt]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=xc(e);e!==null;){if(n=e[Bt])return n;e=xc(e)}return r}e=n,n=e.parentNode}return null}function wa(e){return e=e[Bt]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Ii(e){return e[da]||null}var lo=[],Jr=-1;function vr(e){return{current:e}}function Te(e){0>Jr||(e.current=lo[Jr],lo[Jr]=null,Jr--)}function Ce(e,r){Jr++,lo[Jr]=e.current,e.current=r}var xr={},Ke=vr(xr),nt=vr(!1),Pr=xr;function pn(e,r){var n=e.type.contextTypes;if(!n)return xr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function hi(){Te(nt),Te(Ke)}function bc(e,r,n){if(Ke.current!==xr)throw Error(G(168));Ce(Ke,r),Ce(nt,n)}function _u(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in r))throw Error(G(108,t0(e)||"Unknown",i));return Pe({},n,a)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xr,Pr=Ke.current,Ce(Ke,e),Ce(nt,nt.current),!0}function vc(e,r,n){var a=e.stateNode;if(!a)throw Error(G(169));n?(e=_u(e,r,Pr),a.__reactInternalMemoizedMergedChildContext=e,Te(nt),Te(Ke),Ce(Ke,e)):Te(nt),Ce(nt,n)}var Ft=null,Ri=!1,bs=!1;function Ou(e){Ft===null?Ft=[e]:Ft.push(e)}function vf(e){Ri=!0,Ou(e)}function yr(){if(!bs&&Ft!==null){bs=!0;var e=0,r=Ne;try{var n=Ft;for(Ne=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Ft=null,Ri=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),du(Qo,yr),i}finally{Ne=r,bs=!1}}return null}var Xr=[],Zr=0,xi=null,bi=0,gt=[],xt=0,Dr=null,Vt=1,Ht="";function Sr(e,r){Xr[Zr++]=bi,Xr[Zr++]=xi,xi=e,bi=r}function Wu(e,r,n){gt[xt++]=Vt,gt[xt++]=Ht,gt[xt++]=Dr,Dr=e;var a=Vt;e=Ht;var i=32-Et(a)-1;a&=~(1<<i),n+=1;var s=32-Et(r)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Vt=1<<32-Et(r)+i|n<<i|a,Ht=s+e}else Vt=1<<s|n<<i|a,Ht=e}function nl(e){e.return!==null&&(Sr(e,1),Wu(e,1,0))}function al(e){for(;e===xi;)xi=Xr[--Zr],Xr[Zr]=null,bi=Xr[--Zr],Xr[Zr]=null;for(;e===Dr;)Dr=gt[--xt],gt[xt]=null,Ht=gt[--xt],gt[xt]=null,Vt=gt[--xt],gt[xt]=null}var ut=null,dt=null,Le=!1,Lt=null;function Fu(e,r){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function yc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ut=e,dt=dr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ut=e,dt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Dr!==null?{id:Vt,overflow:Ht}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ut=e,dt=null,!0):!1;default:return!1}}function co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uo(e){if(Le){var r=dt;if(r){var n=r;if(!yc(e,r)){if(co(e))throw Error(G(418));r=dr(n.nextSibling);var a=ut;r&&yc(e,r)?Fu(a,n):(e.flags=e.flags&-4097|2,Le=!1,ut=e)}}else{if(co(e))throw Error(G(418));e.flags=e.flags&-4097|2,Le=!1,ut=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Ra(e){if(e!==ut)return!1;if(!Le)return jc(e),Le=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!io(e.type,e.memoizedProps)),r&&(r=dt)){if(co(e))throw $u(),Error(G(418));for(;r;)Fu(e,r),r=dr(r.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){dt=dr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}dt=null}}else dt=ut?dr(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=dt;e;)e=dr(e.nextSibling)}function mn(){dt=ut=null,Le=!1}function il(e){Lt===null?Lt=[e]:Lt.push(e)}var yf=qt.ReactCurrentBatchConfig;function Pn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var a=n.stateNode}if(!a)throw Error(G(147,e));var i=a,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(o){var c=i.refs;o===null?delete c[s]:c[s]=o},r._stringRef=s,r)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function _a(e,r){throw e=Object.prototype.toString.call(r),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function wc(e){var r=e._init;return r(e._payload)}function Vu(e){function r(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)r(d,u),u=u.sibling;return null}function a(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=fr(d,u),d.index=0,d.sibling=null,d}function s(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function c(d,u,f,j){return u===null||u.tag!==6?(u=Ss(f,d.mode,j),u.return=d,u):(u=i(u,f),u.return=d,u)}function l(d,u,f,j){var b=f.type;return b===Gr?h(d,u,f.props.children,j,f.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&wc(b)===u.type)?(j=i(u,f.props),j.ref=Pn(d,u,f),j.return=d,j):(j=ii(f.type,f.key,f.props,null,d.mode,j),j.ref=Pn(d,u,f),j.return=d,j)}function m(d,u,f,j){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Cs(f,d.mode,j),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function h(d,u,f,j,b){return u===null||u.tag!==7?(u=Mr(f,d.mode,j,b),u.return=d,u):(u=i(u,f),u.return=d,u)}function x(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ss(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case za:return f=ii(u.type,u.key,u.props,null,d.mode,f),f.ref=Pn(d,null,u),f.return=d,f;case Ur:return u=Cs(u,d.mode,f),u.return=d,u;case er:var j=u._init;return x(d,j(u._payload),f)}if(Wn(u)||zn(u))return u=Mr(u,d.mode,f,null),u.return=d,u;_a(d,u)}return null}function g(d,u,f,j){var b=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:c(d,u,""+f,j);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case za:return f.key===b?l(d,u,f,j):null;case Ur:return f.key===b?m(d,u,f,j):null;case er:return b=f._init,g(d,u,b(f._payload),j)}if(Wn(f)||zn(f))return b!==null?null:h(d,u,f,j,null);_a(d,f)}return null}function E(d,u,f,j,b){if(typeof j=="string"&&j!==""||typeof j=="number")return d=d.get(f)||null,c(u,d,""+j,b);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case za:return d=d.get(j.key===null?f:j.key)||null,l(u,d,j,b);case Ur:return d=d.get(j.key===null?f:j.key)||null,m(u,d,j,b);case er:var y=j._init;return E(d,u,f,y(j._payload),b)}if(Wn(j)||zn(j))return d=d.get(f)||null,h(u,d,j,b,null);_a(u,j)}return null}function w(d,u,f,j){for(var b=null,y=null,I=u,O=u=0,R=null;I!==null&&O<f.length;O++){I.index>O?(R=I,I=null):R=I.sibling;var W=g(d,I,f[O],j);if(W===null){I===null&&(I=R);break}e&&I&&W.alternate===null&&r(d,I),u=s(W,u,O),y===null?b=W:y.sibling=W,y=W,I=R}if(O===f.length)return n(d,I),Le&&Sr(d,O),b;if(I===null){for(;O<f.length;O++)I=x(d,f[O],j),I!==null&&(u=s(I,u,O),y===null?b=I:y.sibling=I,y=I);return Le&&Sr(d,O),b}for(I=a(d,I);O<f.length;O++)R=E(I,d,O,f[O],j),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?O:R.key),u=s(R,u,O),y===null?b=R:y.sibling=R,y=R);return e&&I.forEach(function(q){return r(d,q)}),Le&&Sr(d,O),b}function v(d,u,f,j){var b=zn(f);if(typeof b!="function")throw Error(G(150));if(f=b.call(f),f==null)throw Error(G(151));for(var y=b=null,I=u,O=u=0,R=null,W=f.next();I!==null&&!W.done;O++,W=f.next()){I.index>O?(R=I,I=null):R=I.sibling;var q=g(d,I,W.value,j);if(q===null){I===null&&(I=R);break}e&&I&&q.alternate===null&&r(d,I),u=s(q,u,O),y===null?b=q:y.sibling=q,y=q,I=R}if(W.done)return n(d,I),Le&&Sr(d,O),b;if(I===null){for(;!W.done;O++,W=f.next())W=x(d,W.value,j),W!==null&&(u=s(W,u,O),y===null?b=W:y.sibling=W,y=W);return Le&&Sr(d,O),b}for(I=a(d,I);!W.done;O++,W=f.next())W=E(I,d,O,W.value,j),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?O:W.key),u=s(W,u,O),y===null?b=W:y.sibling=W,y=W);return e&&I.forEach(function(J){return r(d,J)}),Le&&Sr(d,O),b}function N(d,u,f,j){if(typeof f=="object"&&f!==null&&f.type===Gr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case za:e:{for(var b=f.key,y=u;y!==null;){if(y.key===b){if(b=f.type,b===Gr){if(y.tag===7){n(d,y.sibling),u=i(y,f.props.children),u.return=d,d=u;break e}}else if(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&wc(b)===y.type){n(d,y.sibling),u=i(y,f.props),u.ref=Pn(d,y,f),u.return=d,d=u;break e}n(d,y);break}else r(d,y);y=y.sibling}f.type===Gr?(u=Mr(f.props.children,d.mode,j,f.key),u.return=d,d=u):(j=ii(f.type,f.key,f.props,null,d.mode,j),j.ref=Pn(d,u,f),j.return=d,d=j)}return o(d);case Ur:e:{for(y=f.key;u!==null;){if(u.key===y)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else r(d,u);u=u.sibling}u=Cs(f,d.mode,j),u.return=d,d=u}return o(d);case er:return y=f._init,N(d,u,y(f._payload),j)}if(Wn(f))return w(d,u,f,j);if(zn(f))return v(d,u,f,j);_a(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=Ss(f,d.mode,j),u.return=d,d=u),o(d)):n(d,u)}return N}var fn=Vu(!0),Hu=Vu(!1),vi=vr(null),yi=null,en=null,sl=null;function ol(){sl=en=yi=null}function ll(e){var r=vi.current;Te(vi),e._currentValue=r}function po(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function ln(e,r){yi=e,sl=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(rt=!0),e.firstContext=null)}function yt(e){var r=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:r,next:null},en===null){if(yi===null)throw Error(G(308));en=e,yi.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return r}var Tr=null;function cl(e){Tr===null?Tr=[e]:Tr.push(e)}function Uu(e,r,n,a){var i=r.interleaved;return i===null?(n.next=n,cl(r)):(n.next=i.next,i.next=n),r.interleaved=n,Qt(e,a)}function Qt(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ur(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,je&2){var i=a.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),a.pending=r,Qt(e,n)}return i=a.interleaved,i===null?(r.next=r,cl(a)):(r.next=i.next,i.next=r),a.interleaved=r,Qt(e,n)}function Za(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Ko(e,n)}}function kc(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function ji(e,r,n,a){var i=e.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,m=l.next;l.next=null,o===null?s=m:o.next=m,o=l;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==o&&(c===null?h.firstBaseUpdate=m:c.next=m,h.lastBaseUpdate=l))}if(s!==null){var x=i.baseState;o=0,h=m=l=null,c=s;do{var g=c.lane,E=c.eventTime;if((a&g)===g){h!==null&&(h=h.next={eventTime:E,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,v=c;switch(g=r,E=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){x=w.call(E,x,g);break e}x=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(E,x,g):w,g==null)break e;x=Pe({},x,g);break e;case 2:tr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[c]:g.push(c))}else E={eventTime:E,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(m=h=E,l=x):h=h.next=E,o|=g;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;g=c,c=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(l=x),i.baseState=l,i.firstBaseUpdate=m,i.lastBaseUpdate=h,r=i.shared.interleaved,r!==null){i=r;do o|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);Br|=o,e.lanes=o,e.memoizedState=x}}function Nc(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(G(191,i));i.call(a)}}}var ka={},Rt=vr(ka),ua=vr(ka),pa=vr(ka);function Lr(e){if(e===ka)throw Error(G(174));return e}function ul(e,r){switch(Ce(pa,r),Ce(ua,e),Ce(Rt,ka),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Us(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Us(r,e)}Te(Rt),Ce(Rt,r)}function hn(){Te(Rt),Te(ua),Te(pa)}function Yu(e){Lr(pa.current);var r=Lr(Rt.current),n=Us(r,e.type);r!==n&&(Ce(ua,e),Ce(Rt,n))}function pl(e){ua.current===e&&(Te(Rt),Te(ua))}var Ee=vr(0);function wi(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var vs=[];function ml(){for(var e=0;e<vs.length;e++)vs[e]._workInProgressVersionPrimary=null;vs.length=0}var ei=qt.ReactCurrentDispatcher,ys=qt.ReactCurrentBatchConfig,Ar=0,Me=null,Oe=null,Fe=null,ki=!1,Qn=!1,ma=0,jf=0;function Ge(){throw Error(G(321))}function fl(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Pt(e[n],r[n]))return!1;return!0}function hl(e,r,n,a,i,s){if(Ar=s,Me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ei.current=e===null||e.memoizedState===null?Sf:Cf,e=n(a,i),Qn){s=0;do{if(Qn=!1,ma=0,25<=s)throw Error(G(301));s+=1,Fe=Oe=null,r.updateQueue=null,ei.current=zf,e=n(a,i)}while(Qn)}if(ei.current=Ni,r=Oe!==null&&Oe.next!==null,Ar=0,Fe=Oe=Me=null,ki=!1,r)throw Error(G(300));return e}function gl(){var e=ma!==0;return ma=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Me.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function jt(){if(Oe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var r=Fe===null?Me.memoizedState:Fe.next;if(r!==null)Fe=r,Oe=e;else{if(e===null)throw Error(G(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Me.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function fa(e,r){return typeof r=="function"?r(e):r}function js(e){var r=jt(),n=r.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var a=Oe,i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,a=a.baseState;var c=o=null,l=null,m=s;do{var h=m.lane;if((Ar&h)===h)l!==null&&(l=l.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),a=m.hasEagerState?m.eagerState:e(a,m.action);else{var x={lane:h,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};l===null?(c=l=x,o=a):l=l.next=x,Me.lanes|=h,Br|=h}m=m.next}while(m!==null&&m!==s);l===null?o=a:l.next=c,Pt(a,r.memoizedState)||(rt=!0),r.memoizedState=a,r.baseState=o,r.baseQueue=l,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Me.lanes|=s,Br|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function ws(e){var r=jt(),n=r.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Pt(s,r.memoizedState)||(rt=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,a]}function Qu(){}function Ku(e,r){var n=Me,a=jt(),i=r(),s=!Pt(a.memoizedState,i);if(s&&(a.memoizedState=i,rt=!0),a=a.queue,xl(Xu.bind(null,n,a,e),[e]),a.getSnapshot!==r||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,ha(9,Ju.bind(null,n,a,i,r),void 0,null),$e===null)throw Error(G(349));Ar&30||qu(n,r,i)}return i}function qu(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Ju(e,r,n,a){r.value=n,r.getSnapshot=a,Zu(r)&&ep(e)}function Xu(e,r,n){return n(function(){Zu(r)&&ep(e)})}function Zu(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Pt(e,n)}catch{return!0}}function ep(e){var r=Qt(e,1);r!==null&&Mt(r,e,1,-1)}function Sc(e){var r=At();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},r.queue=e,e=e.dispatch=Nf.bind(null,Me,e),[r.memoizedState,e]}function ha(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function tp(){return jt().memoizedState}function ti(e,r,n,a){var i=At();Me.flags|=e,i.memoizedState=ha(1|r,n,void 0,a===void 0?null:a)}function _i(e,r,n,a){var i=jt();a=a===void 0?null:a;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,a!==null&&fl(a,o.deps)){i.memoizedState=ha(r,n,s,a);return}}Me.flags|=e,i.memoizedState=ha(1|r,n,s,a)}function Cc(e,r){return ti(8390656,8,e,r)}function xl(e,r){return _i(2048,8,e,r)}function rp(e,r){return _i(4,2,e,r)}function np(e,r){return _i(4,4,e,r)}function ap(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function ip(e,r,n){return n=n!=null?n.concat([e]):null,_i(4,4,ap.bind(null,r,e),n)}function bl(){}function sp(e,r){var n=jt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&fl(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function op(e,r){var n=jt();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&fl(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function lp(e,r,n){return Ar&21?(Pt(n,r)||(n=mu(),Me.lanes|=n,Br|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function wf(e,r){var n=Ne;Ne=n!==0&&4>n?n:4,e(!0);var a=ys.transition;ys.transition={};try{e(!1),r()}finally{Ne=n,ys.transition=a}}function cp(){return jt().memoizedState}function kf(e,r,n){var a=mr(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},dp(e))up(r,n);else if(n=Uu(e,r,n,a),n!==null){var i=Je();Mt(n,e,a,i),pp(n,r,a)}}function Nf(e,r,n){var a=mr(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(dp(e))up(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var o=r.lastRenderedState,c=s(o,n);if(i.hasEagerState=!0,i.eagerState=c,Pt(c,o)){var l=r.interleaved;l===null?(i.next=i,cl(r)):(i.next=l.next,l.next=i),r.interleaved=i;return}}catch{}finally{}n=Uu(e,r,i,a),n!==null&&(i=Je(),Mt(n,e,a,i),pp(n,r,a))}}function dp(e){var r=e.alternate;return e===Me||r!==null&&r===Me}function up(e,r){Qn=ki=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function pp(e,r,n){if(n&4194240){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Ko(e,n)}}var Ni={readContext:yt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Sf={readContext:yt,useCallback:function(e,r){return At().memoizedState=[e,r===void 0?null:r],e},useContext:yt,useEffect:Cc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,ti(4194308,4,ap.bind(null,r,e),n)},useLayoutEffect:function(e,r){return ti(4194308,4,e,r)},useInsertionEffect:function(e,r){return ti(4,2,e,r)},useMemo:function(e,r){var n=At();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=At();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=kf.bind(null,Me,e),[a.memoizedState,e]},useRef:function(e){var r=At();return e={current:e},r.memoizedState=e},useState:Sc,useDebugValue:bl,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Sc(!1),r=e[0];return e=wf.bind(null,e[1]),At().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=Me,i=At();if(Le){if(n===void 0)throw Error(G(407));n=n()}else{if(n=r(),$e===null)throw Error(G(349));Ar&30||qu(a,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,Cc(Xu.bind(null,a,s,e),[e]),a.flags|=2048,ha(9,Ju.bind(null,a,s,n,r),void 0,null),n},useId:function(){var e=At(),r=$e.identifierPrefix;if(Le){var n=Ht,a=Vt;n=(a&~(1<<32-Et(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=ma++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=jf++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Cf={readContext:yt,useCallback:sp,useContext:yt,useEffect:xl,useImperativeHandle:ip,useInsertionEffect:rp,useLayoutEffect:np,useMemo:op,useReducer:js,useRef:tp,useState:function(){return js(fa)},useDebugValue:bl,useDeferredValue:function(e){var r=jt();return lp(r,Oe.memoizedState,e)},useTransition:function(){var e=js(fa)[0],r=jt().memoizedState;return[e,r]},useMutableSource:Qu,useSyncExternalStore:Ku,useId:cp,unstable_isNewReconciler:!1},zf={readContext:yt,useCallback:sp,useContext:yt,useEffect:xl,useImperativeHandle:ip,useInsertionEffect:rp,useLayoutEffect:np,useMemo:op,useReducer:ws,useRef:tp,useState:function(){return ws(fa)},useDebugValue:bl,useDeferredValue:function(e){var r=jt();return Oe===null?r.memoizedState=e:lp(r,Oe.memoizedState,e)},useTransition:function(){var e=ws(fa)[0],r=jt().memoizedState;return[e,r]},useMutableSource:Qu,useSyncExternalStore:Ku,useId:cp,unstable_isNewReconciler:!1};function zt(e,r){if(e&&e.defaultProps){r=Pe({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function mo(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:Pe({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oi={isMounted:function(e){return(e=e._reactInternals)?_r(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=Je(),i=mr(e),s=Ut(a,i);s.payload=r,n!=null&&(s.callback=n),r=ur(e,s,i),r!==null&&(Mt(r,e,i,a),Za(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=Je(),i=mr(e),s=Ut(a,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=ur(e,s,i),r!==null&&(Mt(r,e,i,a),Za(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Je(),a=mr(e),i=Ut(n,a);i.tag=2,r!=null&&(i.callback=r),r=ur(e,i,a),r!==null&&(Mt(r,e,a,n),Za(r,e,a))}};function zc(e,r,n,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):r.prototype&&r.prototype.isPureReactComponent?!oa(n,a)||!oa(i,s):!0}function mp(e,r,n){var a=!1,i=xr,s=r.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=at(r)?Pr:Ke.current,a=r.contextTypes,s=(a=a!=null)?pn(e,i):xr),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Oi,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function Tc(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&Oi.enqueueReplaceState(r,r.state,null)}function fo(e,r,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},dl(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=at(r)?Pr:Ke.current,i.context=pn(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(mo(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Oi.enqueueReplaceState(i,i.state,null),ji(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,r){try{var n="",a=r;do n+=e0(a),a=a.return;while(a);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function ks(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function ho(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Tf=typeof WeakMap=="function"?WeakMap:Map;function fp(e,r,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){Ci||(Ci=!0,So=a),ho(e,r)},n}function hp(e,r,n){n=Ut(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=r.value;n.payload=function(){return a(i)},n.callback=function(){ho(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ho(e,r),typeof a!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})}),n}function Lc(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Tf;var i=new Set;a.set(r,i)}else i=a.get(r),i===void 0&&(i=new Set,a.set(r,i));i.has(n)||(i.add(n),e=$f.bind(null,e,r,n),r.then(e,e))}function Ec(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Mc(e,r,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Ut(-1,1),r.tag=2,ur(n,r,1))),n.lanes|=1),e)}var Lf=qt.ReactCurrentOwner,rt=!1;function qe(e,r,n,a){r.child=e===null?Hu(r,null,n,a):fn(r,e.child,n,a)}function Pc(e,r,n,a,i){n=n.render;var s=r.ref;return ln(r,i),a=hl(e,r,n,a,s,i),n=gl(),e!==null&&!rt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Kt(e,r,i)):(Le&&n&&nl(r),r.flags|=1,qe(e,r,a,i),r.child)}function Dc(e,r,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!Cl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,gp(e,r,s,a,i)):(e=ii(n.type,null,a,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,a)&&e.ref===r.ref)return Kt(e,r,i)}return r.flags|=1,e=fr(s,a),e.ref=r.ref,e.return=r,r.child=e}function gp(e,r,n,a,i){if(e!==null){var s=e.memoizedProps;if(oa(s,a)&&e.ref===r.ref)if(rt=!1,r.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return r.lanes=e.lanes,Kt(e,r,i)}return go(e,r,n,a,i)}function xp(e,r,n){var a=r.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(rn,ct),ct|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Ce(rn,ct),ct|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,Ce(rn,ct),ct|=a}else s!==null?(a=s.baseLanes|n,r.memoizedState=null):a=n,Ce(rn,ct),ct|=a;return qe(e,r,i,n),r.child}function bp(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function go(e,r,n,a,i){var s=at(n)?Pr:Ke.current;return s=pn(r,s),ln(r,i),n=hl(e,r,n,a,s,i),a=gl(),e!==null&&!rt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Kt(e,r,i)):(Le&&a&&nl(r),r.flags|=1,qe(e,r,n,i),r.child)}function Ac(e,r,n,a,i){if(at(n)){var s=!0;gi(r)}else s=!1;if(ln(r,i),r.stateNode===null)ri(e,r),mp(r,n,a),fo(r,n,a,i),a=!0;else if(e===null){var o=r.stateNode,c=r.memoizedProps;o.props=c;var l=o.context,m=n.contextType;typeof m=="object"&&m!==null?m=yt(m):(m=at(n)?Pr:Ke.current,m=pn(r,m));var h=n.getDerivedStateFromProps,x=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==a||l!==m)&&Tc(r,o,a,m),tr=!1;var g=r.memoizedState;o.state=g,ji(r,a,o,i),l=r.memoizedState,c!==a||g!==l||nt.current||tr?(typeof h=="function"&&(mo(r,n,h,a),l=r.memoizedState),(c=tr||zc(r,n,c,a,g,l,m))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(r.flags|=4194308)):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=l),o.props=a,o.state=l,o.context=m,a=c):(typeof o.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{o=r.stateNode,Gu(e,r),c=r.memoizedProps,m=r.type===r.elementType?c:zt(r.type,c),o.props=m,x=r.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=at(n)?Pr:Ke.current,l=pn(r,l));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==x||g!==l)&&Tc(r,o,a,l),tr=!1,g=r.memoizedState,o.state=g,ji(r,a,o,i);var w=r.memoizedState;c!==x||g!==w||nt.current||tr?(typeof E=="function"&&(mo(r,n,E,a),w=r.memoizedState),(m=tr||zc(r,n,m,a,g,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,w,l)),typeof o.componentDidUpdate=="function"&&(r.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=w),o.props=a,o.state=w,o.context=l,a=m):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(r.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(r.flags|=1024),a=!1)}return xo(e,r,n,a,s,i)}function xo(e,r,n,a,i,s){bp(e,r);var o=(r.flags&128)!==0;if(!a&&!o)return i&&vc(r,n,!1),Kt(e,r,s);a=r.stateNode,Lf.current=r;var c=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&o?(r.child=fn(r,e.child,null,s),r.child=fn(r,null,c,s)):qe(e,r,c,s),r.memoizedState=a.state,i&&vc(r,n,!0),r.child}function vp(e){var r=e.stateNode;r.pendingContext?bc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&bc(e,r.context,!1),ul(e,r.containerInfo)}function Bc(e,r,n,a,i){return mn(),il(i),r.flags|=256,qe(e,r,n,a),r.child}var bo={dehydrated:null,treeContext:null,retryLane:0};function vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function yp(e,r,n){var a=r.pendingProps,i=Ee.current,s=!1,o=(r.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Ee,i&1),e===null)return uo(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(o=a.children,e=a.fallback,s?(a=r.mode,s=r.child,o={mode:"hidden",children:o},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$i(o,a,0,null),e=Mr(e,a,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=vo(n),r.memoizedState=bo,e):vl(r,o));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Ef(e,r,o,a,c,i,n);if(s){s=a.fallback,o=r.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:a.children};return!(o&1)&&r.child!==i?(a=r.child,a.childLanes=0,a.pendingProps=l,r.deletions=null):(a=fr(i,l),a.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=fr(c,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=r,a.return=r,a.sibling=s,r.child=a,a=s,s=r.child,o=e.child.memoizedState,o=o===null?vo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,r.memoizedState=bo,a}return s=e.child,e=s.sibling,a=fr(s,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function vl(e,r){return r=$i({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Oa(e,r,n,a){return a!==null&&il(a),fn(r,e.child,null,n),e=vl(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Ef(e,r,n,a,i,s,o){if(n)return r.flags&256?(r.flags&=-257,a=ks(Error(G(422))),Oa(e,r,o,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=a.fallback,i=r.mode,a=$i({mode:"visible",children:a.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,a.return=r,s.return=r,a.sibling=s,r.child=a,r.mode&1&&fn(r,e.child,null,o),r.child.memoizedState=vo(o),r.memoizedState=bo,s);if(!(r.mode&1))return Oa(e,r,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var c=a.dgst;return a=c,s=Error(G(419)),a=ks(s,a,void 0),Oa(e,r,o,a)}if(c=(o&e.childLanes)!==0,rt||c){if(a=$e,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qt(e,i),Mt(a,e,i,-1))}return Sl(),a=ks(Error(G(421))),Oa(e,r,o,a)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Vf.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,dt=dr(i.nextSibling),ut=r,Le=!0,Lt=null,e!==null&&(gt[xt++]=Vt,gt[xt++]=Ht,gt[xt++]=Dr,Vt=e.id,Ht=e.overflow,Dr=r),r=vl(r,a.children),r.flags|=4096,r)}function Ic(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),po(e.return,r,n)}function Ns(e,r,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function jp(e,r,n){var a=r.pendingProps,i=a.revealOrder,s=a.tail;if(qe(e,r,a.children,n),a=Ee.current,a&2)a=a&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,n,r);else if(e.tag===19)Ic(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ce(Ee,a),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Ns(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ns(r,!0,n,null,s);break;case"together":Ns(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ri(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Kt(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Br|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(G(153));if(r.child!==null){for(e=r.child,n=fr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Mf(e,r,n){switch(r.tag){case 3:vp(r),mn();break;case 5:Yu(r);break;case 1:at(r.type)&&gi(r);break;case 4:ul(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,i=r.memoizedProps.value;Ce(vi,a._currentValue),a._currentValue=i;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Ce(Ee,Ee.current&1),r.flags|=128,null):n&r.child.childLanes?yp(e,r,n):(Ce(Ee,Ee.current&1),e=Kt(e,r,n),e!==null?e.sibling:null);Ce(Ee,Ee.current&1);break;case 19:if(a=(n&r.childLanes)!==0,e.flags&128){if(a)return jp(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Ee,Ee.current),a)break;return null;case 22:case 23:return r.lanes=0,xp(e,r,n)}return Kt(e,r,n)}var wp,yo,kp,Np;wp=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yo=function(){};kp=function(e,r,n,a){var i=e.memoizedProps;if(i!==a){e=r.stateNode,Lr(Rt.current);var s=null;switch(n){case"input":i=Fs(e,i),a=Fs(e,a),s=[];break;case"select":i=Pe({},i,{value:void 0}),a=Pe({},a,{value:void 0}),s=[];break;case"textarea":i=Hs(e,i),a=Hs(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=fi)}Gs(n,a);var o;n=null;for(m in i)if(!a.hasOwnProperty(m)&&i.hasOwnProperty(m)&&i[m]!=null)if(m==="style"){var c=i[m];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(ea.hasOwnProperty(m)?s||(s=[]):(s=s||[]).push(m,null));for(m in a){var l=a[m];if(c=i!=null?i[m]:void 0,a.hasOwnProperty(m)&&l!==c&&(l!=null||c!=null))if(m==="style")if(c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(m,n)),n=l;else m==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(s=s||[]).push(m,l)):m==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(m,""+l):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(ea.hasOwnProperty(m)?(l!=null&&m==="onScroll"&&ze("scroll",e),s||c===l||(s=[])):(s=s||[]).push(m,l))}n&&(s=s||[]).push("style",n);var m=s;(r.updateQueue=m)&&(r.flags|=4)}};Np=function(e,r,n,a){n!==a&&(r.flags|=4)};function Dn(e,r){if(!Le)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ye(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function Pf(e,r,n){var a=r.pendingProps;switch(al(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(r),null;case 1:return at(r.type)&&hi(),Ye(r),null;case 3:return a=r.stateNode,hn(),Te(nt),Te(Ke),ml(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ra(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Lt!==null&&(To(Lt),Lt=null))),yo(e,r),Ye(r),null;case 5:pl(r);var i=Lr(pa.current);if(n=r.type,e!==null&&r.stateNode!=null)kp(e,r,n,a,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(G(166));return Ye(r),null}if(e=Lr(Rt.current),Ra(r)){a=r.stateNode,n=r.type;var s=r.memoizedProps;switch(a[Bt]=r,a[da]=s,e=(r.mode&1)!==0,n){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(i=0;i<$n.length;i++)ze($n[i],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":Ul(a,s),ze("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},ze("invalid",a);break;case"textarea":Yl(a,s),ze("invalid",a)}Gs(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="children"?typeof c=="string"?a.textContent!==c&&(s.suppressHydrationWarning!==!0&&Ia(a.textContent,c,e),i=["children",c]):typeof c=="number"&&a.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Ia(a.textContent,c,e),i=["children",""+c]):ea.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ze("scroll",a)}switch(n){case"input":Ta(a),Gl(a,s,!0);break;case"textarea":Ta(a),Ql(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=fi)}a=i,r.updateQueue=a,a!==null&&(r.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[Bt]=r,e[da]=a,wp(e,r,!1,!1),r.stateNode=e;e:{switch(o=Ys(n,a),n){case"dialog":ze("cancel",e),ze("close",e),i=a;break;case"iframe":case"object":case"embed":ze("load",e),i=a;break;case"video":case"audio":for(i=0;i<$n.length;i++)ze($n[i],e);i=a;break;case"source":ze("error",e),i=a;break;case"img":case"image":case"link":ze("error",e),ze("load",e),i=a;break;case"details":ze("toggle",e),i=a;break;case"input":Ul(e,a),i=Fs(e,a),ze("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Pe({},a,{value:void 0}),ze("invalid",e);break;case"textarea":Yl(e,a),i=Hs(e,a),ze("invalid",e);break;default:i=a}Gs(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var l=c[s];s==="style"?tu(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zd(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(e,l):typeof l=="number"&&ta(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ze("scroll",e):l!=null&&Vo(e,s,l,o))}switch(n){case"input":Ta(e),Gl(e,a,!1);break;case"textarea":Ta(e),Ql(e);break;case"option":a.value!=null&&e.setAttribute("value",""+gr(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?nn(e,!!a.multiple,s,!1):a.defaultValue!=null&&nn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ye(r),null;case 6:if(e&&r.stateNode!=null)Np(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(G(166));if(n=Lr(pa.current),Lr(Rt.current),Ra(r)){if(a=r.stateNode,n=r.memoizedProps,a[Bt]=r,(s=a.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Ia(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ia(a.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Bt]=r,r.stateNode=a}return Ye(r),null;case 13:if(Te(Ee),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&dt!==null&&r.mode&1&&!(r.flags&128))$u(),mn(),r.flags|=98560,s=!1;else if(s=Ra(r),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[Bt]=r}else mn(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ye(r),s=!1}else Lt!==null&&(To(Lt),Lt=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(e===null||Ee.current&1?We===0&&(We=3):Sl())),r.updateQueue!==null&&(r.flags|=4),Ye(r),null);case 4:return hn(),yo(e,r),e===null&&la(r.stateNode.containerInfo),Ye(r),null;case 10:return ll(r.type._context),Ye(r),null;case 17:return at(r.type)&&hi(),Ye(r),null;case 19:if(Te(Ee),s=r.memoizedState,s===null)return Ye(r),null;if(a=(r.flags&128)!==0,o=s.rendering,o===null)if(a)Dn(s,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(o=wi(e),o!==null){for(r.flags|=128,Dn(s,!1),a=o.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)s=n,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Ee,Ee.current&1|2),r.child}e=e.sibling}s.tail!==null&&Ae()>xn&&(r.flags|=128,a=!0,Dn(s,!1),r.lanes=4194304)}else{if(!a)if(e=wi(o),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Dn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return Ye(r),null}else 2*Ae()-s.renderingStartTime>xn&&n!==1073741824&&(r.flags|=128,a=!0,Dn(s,!1),r.lanes=4194304);s.isBackwards?(o.sibling=r.child,r.child=o):(n=s.last,n!==null?n.sibling=o:r.child=o,s.last=o)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Ae(),r.sibling=null,n=Ee.current,Ce(Ee,a?n&1|2:n&1),r):(Ye(r),null);case 22:case 23:return Nl(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?ct&1073741824&&(Ye(r),r.subtreeFlags&6&&(r.flags|=8192)):Ye(r),null;case 24:return null;case 25:return null}throw Error(G(156,r.tag))}function Df(e,r){switch(al(r),r.tag){case 1:return at(r.type)&&hi(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return hn(),Te(nt),Te(Ke),ml(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return pl(r),null;case 13:if(Te(Ee),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(G(340));mn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Te(Ee),null;case 4:return hn(),null;case 10:return ll(r.type._context),null;case 22:case 23:return Nl(),null;case 24:return null;default:return null}}var Wa=!1,Qe=!1,Af=typeof WeakSet=="function"?WeakSet:Set,ee=null;function tn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){De(e,r,a)}else n.current=null}function jo(e,r,n){try{n()}catch(a){De(e,r,a)}}var Rc=!1;function Bf(e,r){if(no=ui,e=Lu(),rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,c=-1,l=-1,m=0,h=0,x=e,g=null;t:for(;;){for(var E;x!==n||i!==0&&x.nodeType!==3||(c=o+i),x!==s||a!==0&&x.nodeType!==3||(l=o+a),x.nodeType===3&&(o+=x.nodeValue.length),(E=x.firstChild)!==null;)g=x,x=E;for(;;){if(x===e)break t;if(g===n&&++m===i&&(c=o),g===s&&++h===a&&(l=o),(E=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=E}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ao={focusedElem:e,selectionRange:n},ui=!1,ee=r;ee!==null;)if(r=ee,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,ee=e;else for(;ee!==null;){r=ee;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,N=w.memoizedState,d=r.stateNode,u=d.getSnapshotBeforeUpdate(r.elementType===r.type?v:zt(r.type,v),N);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=r.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(j){De(r,r.return,j)}if(e=r.sibling,e!==null){e.return=r.return,ee=e;break}ee=r.return}return w=Rc,Rc=!1,w}function Kn(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&jo(r,n,s)}i=i.next}while(i!==a)}}function Wi(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function wo(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Sp(e){var r=e.alternate;r!==null&&(e.alternate=null,Sp(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Bt],delete r[da],delete r[oo],delete r[xf],delete r[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cp(e){return e.tag===5||e.tag===3||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=fi));else if(a!==4&&(e=e.child,e!==null))for(ko(e,r,n),e=e.sibling;e!==null;)ko(e,r,n),e=e.sibling}function No(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(No(e,r,n),e=e.sibling;e!==null;)No(e,r,n),e=e.sibling}var Ve=null,Tt=!1;function Zt(e,r,n){for(n=n.child;n!==null;)zp(e,r,n),n=n.sibling}function zp(e,r,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Pi,n)}catch{}switch(n.tag){case 5:Qe||tn(n,r);case 6:var a=Ve,i=Tt;Ve=null,Zt(e,r,n),Ve=a,Tt=i,Ve!==null&&(Tt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Tt?(e=Ve,n=n.stateNode,e.nodeType===8?xs(e.parentNode,n):e.nodeType===1&&xs(e,n),ia(e)):xs(Ve,n.stateNode));break;case 4:a=Ve,i=Tt,Ve=n.stateNode.containerInfo,Tt=!0,Zt(e,r,n),Ve=a,Tt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jo(n,r,o),i=i.next}while(i!==a)}Zt(e,r,n);break;case 1:if(!Qe&&(tn(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(c){De(n,r,c)}Zt(e,r,n);break;case 21:Zt(e,r,n);break;case 22:n.mode&1?(Qe=(a=Qe)||n.memoizedState!==null,Zt(e,r,n),Qe=a):Zt(e,r,n);break;default:Zt(e,r,n)}}function Oc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Af),r.forEach(function(a){var i=Hf.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Ct(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var s=e,o=r,c=o;e:for(;c!==null;){switch(c.tag){case 5:Ve=c.stateNode,Tt=!1;break e;case 3:Ve=c.stateNode.containerInfo,Tt=!0;break e;case 4:Ve=c.stateNode.containerInfo,Tt=!0;break e}c=c.return}if(Ve===null)throw Error(G(160));zp(s,o,i),Ve=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(m){De(i,r,m)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Tp(r,e),r=r.sibling}function Tp(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(r,e),Dt(e),a&4){try{Kn(3,e,e.return),Wi(3,e)}catch(v){De(e,e.return,v)}try{Kn(5,e,e.return)}catch(v){De(e,e.return,v)}}break;case 1:Ct(r,e),Dt(e),a&512&&n!==null&&tn(n,n.return);break;case 5:if(Ct(r,e),Dt(e),a&512&&n!==null&&tn(n,n.return),e.flags&32){var i=e.stateNode;try{ta(i,"")}catch(v){De(e,e.return,v)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&qd(i,s),Ys(c,o);var m=Ys(c,s);for(o=0;o<l.length;o+=2){var h=l[o],x=l[o+1];h==="style"?tu(i,x):h==="dangerouslySetInnerHTML"?Zd(i,x):h==="children"?ta(i,x):Vo(i,h,x,m)}switch(c){case"input":$s(i,s);break;case"textarea":Jd(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?nn(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?nn(i,!!s.multiple,s.defaultValue,!0):nn(i,!!s.multiple,s.multiple?[]:"",!1))}i[da]=s}catch(v){De(e,e.return,v)}}break;case 6:if(Ct(r,e),Dt(e),a&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){De(e,e.return,v)}}break;case 3:if(Ct(r,e),Dt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(r.containerInfo)}catch(v){De(e,e.return,v)}break;case 4:Ct(r,e),Dt(e);break;case 13:Ct(r,e),Dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wl=Ae())),a&4&&Oc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(m=Qe)||h,Ct(r,e),Qe=m):Ct(r,e),Dt(e),a&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!h&&e.mode&1)for(ee=e,h=e.child;h!==null;){for(x=ee=h;ee!==null;){switch(g=ee,E=g.child,g.tag){case 0:case 11:case 14:case 15:Kn(4,g,g.return);break;case 1:tn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){a=g,n=g.return;try{r=a,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(v){De(a,n,v)}}break;case 5:tn(g,g.return);break;case 22:if(g.memoizedState!==null){Fc(x);continue}}E!==null?(E.return=g,ee=E):Fc(x)}h=h.sibling}e:for(h=null,x=e;;){if(x.tag===5){if(h===null){h=x;try{i=x.stateNode,m?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=x.stateNode,l=x.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=eu("display",o))}catch(v){De(e,e.return,v)}}}else if(x.tag===6){if(h===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(v){De(e,e.return,v)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;h===x&&(h=null),x=x.return}h===x&&(h=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Ct(r,e),Dt(e),a&4&&Oc(e);break;case 21:break;default:Ct(r,e),Dt(e)}}function Dt(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Cp(n)){var a=n;break e}n=n.return}throw Error(G(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(ta(i,""),a.flags&=-33);var s=_c(e);No(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,c=_c(e);ko(e,c,o);break;default:throw Error(G(161))}}catch(l){De(e,e.return,l)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function If(e,r,n){ee=e,Lp(e)}function Lp(e,r,n){for(var a=(e.mode&1)!==0;ee!==null;){var i=ee,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Wa;if(!o){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Qe;c=Wa;var m=Qe;if(Wa=o,(Qe=l)&&!m)for(ee=i;ee!==null;)o=ee,l=o.child,o.tag===22&&o.memoizedState!==null?$c(i):l!==null?(l.return=o,ee=l):$c(i);for(;s!==null;)ee=s,Lp(s),s=s.sibling;ee=i,Wa=c,Qe=m}Wc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ee=s):Wc(e)}}function Wc(e){for(;ee!==null;){var r=ee;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Qe||Wi(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Qe)if(n===null)a.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:zt(r.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Nc(r,s,a);break;case 3:var o=r.updateQueue;if(o!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Nc(r,o,n)}break;case 5:var c=r.stateNode;if(n===null&&r.flags&4){n=c;var l=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var m=r.alternate;if(m!==null){var h=m.memoizedState;if(h!==null){var x=h.dehydrated;x!==null&&ia(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Qe||r.flags&512&&wo(r)}catch(g){De(r,r.return,g)}}if(r===e){ee=null;break}if(n=r.sibling,n!==null){n.return=r.return,ee=n;break}ee=r.return}}function Fc(e){for(;ee!==null;){var r=ee;if(r===e){ee=null;break}var n=r.sibling;if(n!==null){n.return=r.return,ee=n;break}ee=r.return}}function $c(e){for(;ee!==null;){var r=ee;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Wi(4,r)}catch(l){De(r,n,l)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var i=r.return;try{a.componentDidMount()}catch(l){De(r,i,l)}}var s=r.return;try{wo(r)}catch(l){De(r,s,l)}break;case 5:var o=r.return;try{wo(r)}catch(l){De(r,o,l)}}}catch(l){De(r,r.return,l)}if(r===e){ee=null;break}var c=r.sibling;if(c!==null){c.return=r.return,ee=c;break}ee=r.return}}var Rf=Math.ceil,Si=qt.ReactCurrentDispatcher,yl=qt.ReactCurrentOwner,vt=qt.ReactCurrentBatchConfig,je=0,$e=null,_e=null,He=0,ct=0,rn=vr(0),We=0,ga=null,Br=0,Fi=0,jl=0,qn=null,tt=null,wl=0,xn=1/0,Wt=null,Ci=!1,So=null,pr=null,Fa=!1,ir=null,zi=0,Jn=0,Co=null,ni=-1,ai=0;function Je(){return je&6?Ae():ni!==-1?ni:ni=Ae()}function mr(e){return e.mode&1?je&2&&He!==0?He&-He:yf.transition!==null?(ai===0&&(ai=mu()),ai):(e=Ne,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function Mt(e,r,n,a){if(50<Jn)throw Jn=0,Co=null,Error(G(185));ya(e,n,a),(!(je&2)||e!==$e)&&(e===$e&&(!(je&2)&&(Fi|=n),We===4&&nr(e,He)),it(e,a),n===1&&je===0&&!(r.mode&1)&&(xn=Ae()+500,Ri&&yr()))}function it(e,r){var n=e.callbackNode;v0(e,r);var a=di(e,e===$e?He:0);if(a===0)n!==null&&Jl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&Jl(n),r===1)e.tag===0?vf(Vc.bind(null,e)):Ou(Vc.bind(null,e)),hf(function(){!(je&6)&&yr()}),n=null;else{switch(fu(a)){case 1:n=Qo;break;case 4:n=uu;break;case 16:n=ci;break;case 536870912:n=pu;break;default:n=ci}n=Rp(n,Ep.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Ep(e,r){if(ni=-1,ai=0,je&6)throw Error(G(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var a=di(e,e===$e?He:0);if(a===0)return null;if(a&30||a&e.expiredLanes||r)r=Ti(e,a);else{r=a;var i=je;je|=2;var s=Pp();($e!==e||He!==r)&&(Wt=null,xn=Ae()+500,Er(e,r));do try{Wf();break}catch(c){Mp(e,c)}while(!0);ol(),Si.current=s,je=i,_e!==null?r=0:($e=null,He=0,r=We)}if(r!==0){if(r===2&&(i=Xs(e),i!==0&&(a=i,r=zo(e,i))),r===1)throw n=ga,Er(e,0),nr(e,a),it(e,Ae()),n;if(r===6)nr(e,a);else{if(i=e.current.alternate,!(a&30)&&!_f(i)&&(r=Ti(e,a),r===2&&(s=Xs(e),s!==0&&(a=s,r=zo(e,s))),r===1))throw n=ga,Er(e,0),nr(e,a),it(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=a,r){case 0:case 1:throw Error(G(345));case 2:Cr(e,tt,Wt);break;case 3:if(nr(e,a),(a&130023424)===a&&(r=wl+500-Ae(),10<r)){if(di(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=so(Cr.bind(null,e,tt,Wt),r);break}Cr(e,tt,Wt);break;case 4:if(nr(e,a),(a&4194240)===a)break;for(r=e.eventTimes,i=-1;0<a;){var o=31-Et(a);s=1<<o,o=r[o],o>i&&(i=o),a&=~s}if(a=i,a=Ae()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Rf(a/1960))-a,10<a){e.timeoutHandle=so(Cr.bind(null,e,tt,Wt),a);break}Cr(e,tt,Wt);break;case 5:Cr(e,tt,Wt);break;default:throw Error(G(329))}}}return it(e,Ae()),e.callbackNode===n?Ep.bind(null,e):null}function zo(e,r){var n=qn;return e.current.memoizedState.isDehydrated&&(Er(e,r).flags|=256),e=Ti(e,r),e!==2&&(r=tt,tt=n,r!==null&&To(r)),e}function To(e){tt===null?tt=e:tt.push.apply(tt,e)}function _f(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Pt(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function nr(e,r){for(r&=~jl,r&=~Fi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Et(r),a=1<<n;e[n]=-1,r&=~a}}function Vc(e){if(je&6)throw Error(G(327));cn();var r=di(e,0);if(!(r&1))return it(e,Ae()),null;var n=Ti(e,r);if(e.tag!==0&&n===2){var a=Xs(e);a!==0&&(r=a,n=zo(e,a))}if(n===1)throw n=ga,Er(e,0),nr(e,r),it(e,Ae()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Cr(e,tt,Wt),it(e,Ae()),null}function kl(e,r){var n=je;je|=1;try{return e(r)}finally{je=n,je===0&&(xn=Ae()+500,Ri&&yr())}}function Ir(e){ir!==null&&ir.tag===0&&!(je&6)&&cn();var r=je;je|=1;var n=vt.transition,a=Ne;try{if(vt.transition=null,Ne=1,e)return e()}finally{Ne=a,vt.transition=n,je=r,!(je&6)&&yr()}}function Nl(){ct=rn.current,Te(rn)}function Er(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ff(n)),_e!==null)for(n=_e.return;n!==null;){var a=n;switch(al(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&hi();break;case 3:hn(),Te(nt),Te(Ke),ml();break;case 5:pl(a);break;case 4:hn();break;case 13:Te(Ee);break;case 19:Te(Ee);break;case 10:ll(a.type._context);break;case 22:case 23:Nl()}n=n.return}if($e=e,_e=e=fr(e.current,null),He=ct=r,We=0,ga=null,jl=Fi=Br=0,tt=qn=null,Tr!==null){for(r=0;r<Tr.length;r++)if(n=Tr[r],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}n.pending=a}Tr=null}return e}function Mp(e,r){do{var n=_e;try{if(ol(),ei.current=Ni,ki){for(var a=Me.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}ki=!1}if(Ar=0,Fe=Oe=Me=null,Qn=!1,ma=0,yl.current=null,n===null||n.return===null){We=1,ga=r,_e=null;break}e:{var s=e,o=n.return,c=n,l=r;if(r=He,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var m=l,h=c,x=h.tag;if(!(h.mode&1)&&(x===0||x===11||x===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=Ec(o);if(E!==null){E.flags&=-257,Mc(E,o,c,s,r),E.mode&1&&Lc(s,m,r),r=E,l=m;var w=r.updateQueue;if(w===null){var v=new Set;v.add(l),r.updateQueue=v}else w.add(l);break e}else{if(!(r&1)){Lc(s,m,r),Sl();break e}l=Error(G(426))}}else if(Le&&c.mode&1){var N=Ec(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Mc(N,o,c,s,r),il(gn(l,c));break e}}s=l=gn(l,c),We!==4&&(We=2),qn===null?qn=[s]:qn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var d=fp(s,l,r);kc(s,d);break e;case 1:c=l;var u=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pr===null||!pr.has(f)))){s.flags|=65536,r&=-r,s.lanes|=r;var j=hp(s,c,r);kc(s,j);break e}}s=s.return}while(s!==null)}Ap(n)}catch(b){r=b,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Pp(){var e=Si.current;return Si.current=Ni,e===null?Ni:e}function Sl(){(We===0||We===3||We===2)&&(We=4),$e===null||!(Br&268435455)&&!(Fi&268435455)||nr($e,He)}function Ti(e,r){var n=je;je|=2;var a=Pp();($e!==e||He!==r)&&(Wt=null,Er(e,r));do try{Of();break}catch(i){Mp(e,i)}while(!0);if(ol(),je=n,Si.current=a,_e!==null)throw Error(G(261));return $e=null,He=0,We}function Of(){for(;_e!==null;)Dp(_e)}function Wf(){for(;_e!==null&&!d0();)Dp(_e)}function Dp(e){var r=Ip(e.alternate,e,ct);e.memoizedProps=e.pendingProps,r===null?Ap(e):_e=r,yl.current=null}function Ap(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=Df(n,r),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,_e=null;return}}else if(n=Pf(n,r,ct),n!==null){_e=n;return}if(r=r.sibling,r!==null){_e=r;return}_e=r=e}while(r!==null);We===0&&(We=5)}function Cr(e,r,n){var a=Ne,i=vt.transition;try{vt.transition=null,Ne=1,Ff(e,r,n,a)}finally{vt.transition=i,Ne=a}return null}function Ff(e,r,n,a){do cn();while(ir!==null);if(je&6)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(y0(e,s),e===$e&&(_e=$e=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,Rp(ci,function(){return cn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vt.transition,vt.transition=null;var o=Ne;Ne=1;var c=je;je|=4,yl.current=null,Bf(e,n),Tp(n,e),of(ao),ui=!!no,ao=no=null,e.current=n,If(n),u0(),je=c,Ne=o,vt.transition=s}else e.current=n;if(Fa&&(Fa=!1,ir=e,zi=i),s=e.pendingLanes,s===0&&(pr=null),f0(n.stateNode),it(e,Ae()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ci)throw Ci=!1,e=So,So=null,e;return zi&1&&e.tag!==0&&cn(),s=e.pendingLanes,s&1?e===Co?Jn++:(Jn=0,Co=e):Jn=0,yr(),null}function cn(){if(ir!==null){var e=fu(zi),r=vt.transition,n=Ne;try{if(vt.transition=null,Ne=16>e?16:e,ir===null)var a=!1;else{if(e=ir,ir=null,zi=0,je&6)throw Error(G(331));var i=je;for(je|=4,ee=e.current;ee!==null;){var s=ee,o=s.child;if(ee.flags&16){var c=s.deletions;if(c!==null){for(var l=0;l<c.length;l++){var m=c[l];for(ee=m;ee!==null;){var h=ee;switch(h.tag){case 0:case 11:case 15:Kn(8,h,s)}var x=h.child;if(x!==null)x.return=h,ee=x;else for(;ee!==null;){h=ee;var g=h.sibling,E=h.return;if(Sp(h),h===m){ee=null;break}if(g!==null){g.return=E,ee=g;break}ee=E}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ee=o;else e:for(;ee!==null;){if(s=ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kn(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ee=d;break e}ee=s.return}}var u=e.current;for(ee=u;ee!==null;){o=ee;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,ee=f;else e:for(o=u;ee!==null;){if(c=ee,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Wi(9,c)}}catch(b){De(c,c.return,b)}if(c===o){ee=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,ee=j;break e}ee=c.return}}if(je=i,yr(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Pi,e)}catch{}a=!0}return a}finally{Ne=n,vt.transition=r}}return!1}function Hc(e,r,n){r=gn(n,r),r=fp(e,r,1),e=ur(e,r,1),r=Je(),e!==null&&(ya(e,1,r),it(e,r))}function De(e,r,n){if(e.tag===3)Hc(e,e,n);else for(;r!==null;){if(r.tag===3){Hc(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pr===null||!pr.has(a))){e=gn(n,e),e=hp(r,e,1),r=ur(r,e,1),e=Je(),r!==null&&(ya(r,1,e),it(r,e));break}}r=r.return}}function $f(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=Je(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(He&n)===n&&(We===4||We===3&&(He&130023424)===He&&500>Ae()-wl?Er(e,0):jl|=n),it(e,r)}function Bp(e,r){r===0&&(e.mode&1?(r=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):r=1);var n=Je();e=Qt(e,r),e!==null&&(ya(e,r,n),it(e,n))}function Vf(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Bp(e,n)}function Hf(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(G(314))}a!==null&&a.delete(r),Bp(e,n)}var Ip;Ip=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||nt.current)rt=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return rt=!1,Mf(e,r,n);rt=!!(e.flags&131072)}else rt=!1,Le&&r.flags&1048576&&Wu(r,bi,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;ri(e,r),e=r.pendingProps;var i=pn(r,Ke.current);ln(r,n),i=hl(null,r,a,e,i,n);var s=gl();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,at(a)?(s=!0,gi(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dl(r),i.updater=Oi,r.stateNode=i,i._reactInternals=r,fo(r,a,e,n),r=xo(null,r,a,!0,s,n)):(r.tag=0,Le&&s&&nl(r),qe(null,r,i,n),r=r.child),r;case 16:a=r.elementType;e:{switch(ri(e,r),e=r.pendingProps,i=a._init,a=i(a._payload),r.type=a,i=r.tag=Gf(a),e=zt(a,e),i){case 0:r=go(null,r,a,e,n);break e;case 1:r=Ac(null,r,a,e,n);break e;case 11:r=Pc(null,r,a,e,n);break e;case 14:r=Dc(null,r,a,zt(a.type,e),n);break e}throw Error(G(306,a,""))}return r;case 0:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zt(a,i),go(e,r,a,i,n);case 1:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zt(a,i),Ac(e,r,a,i,n);case 3:e:{if(vp(r),e===null)throw Error(G(387));a=r.pendingProps,s=r.memoizedState,i=s.element,Gu(e,r),ji(r,a,null,n);var o=r.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=gn(Error(G(423)),r),r=Bc(e,r,a,n,i);break e}else if(a!==i){i=gn(Error(G(424)),r),r=Bc(e,r,a,n,i);break e}else for(dt=dr(r.stateNode.containerInfo.firstChild),ut=r,Le=!0,Lt=null,n=Hu(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),a===i){r=Kt(e,r,n);break e}qe(e,r,a,n)}r=r.child}return r;case 5:return Yu(r),e===null&&uo(r),a=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,io(a,i)?o=null:s!==null&&io(a,s)&&(r.flags|=32),bp(e,r),qe(e,r,o,n),r.child;case 6:return e===null&&uo(r),null;case 13:return yp(e,r,n);case 4:return ul(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=fn(r,null,a,n):qe(e,r,a,n),r.child;case 11:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zt(a,i),Pc(e,r,a,i,n);case 7:return qe(e,r,r.pendingProps,n),r.child;case 8:return qe(e,r,r.pendingProps.children,n),r.child;case 12:return qe(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,i=r.pendingProps,s=r.memoizedProps,o=i.value,Ce(vi,a._currentValue),a._currentValue=o,s!==null)if(Pt(s.value,o)){if(s.children===i.children&&!nt.current){r=Kt(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var c=s.dependencies;if(c!==null){o=s.child;for(var l=c.firstContext;l!==null;){if(l.context===a){if(s.tag===1){l=Ut(-1,n&-n),l.tag=2;var m=s.updateQueue;if(m!==null){m=m.shared;var h=m.pending;h===null?l.next=l:(l.next=h.next,h.next=l),m.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),po(s.return,n,r),c.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===r.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),po(o,n,r),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===r){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,a=r.pendingProps.children,ln(r,n),i=yt(i),a=a(i),r.flags|=1,qe(e,r,a,n),r.child;case 14:return a=r.type,i=zt(a,r.pendingProps),i=zt(a.type,i),Dc(e,r,a,i,n);case 15:return gp(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,i=r.pendingProps,i=r.elementType===a?i:zt(a,i),ri(e,r),r.tag=1,at(a)?(e=!0,gi(r)):e=!1,ln(r,n),mp(r,a,i),fo(r,a,i,n),xo(null,r,a,!0,e,n);case 19:return jp(e,r,n);case 22:return xp(e,r,n)}throw Error(G(156,r.tag))};function Rp(e,r){return du(e,r)}function Uf(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,r,n,a){return new Uf(e,r,n,a)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return Cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uo)return 11;if(e===Go)return 14}return 2}function fr(e,r){var n=e.alternate;return n===null?(n=bt(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ii(e,r,n,a,i,s){var o=2;if(a=e,typeof e=="function")Cl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gr:return Mr(n.children,i,s,r);case Ho:o=8,i|=8;break;case Rs:return e=bt(12,n,r,i|2),e.elementType=Rs,e.lanes=s,e;case _s:return e=bt(13,n,r,i),e.elementType=_s,e.lanes=s,e;case Os:return e=bt(19,n,r,i),e.elementType=Os,e.lanes=s,e;case Yd:return $i(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ud:o=10;break e;case Gd:o=9;break e;case Uo:o=11;break e;case Go:o=14;break e;case er:o=16,a=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return r=bt(o,n,r,i),r.elementType=e,r.type=a,r.lanes=s,r}function Mr(e,r,n,a){return e=bt(7,e,a,r),e.lanes=n,e}function $i(e,r,n,a){return e=bt(22,e,a,r),e.elementType=Yd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ss(e,r,n){return e=bt(6,e,null,r),e.lanes=n,e}function Cs(e,r,n){return r=bt(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Yf(e,r,n,a,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ss(0),this.expirationTimes=ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zl(e,r,n,a,i,s,o,c,l){return e=new Yf(e,r,n,c,l),r===1?(r=1,s===!0&&(r|=8)):r=0,s=bt(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(s),e}function Qf(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function _p(e){if(!e)return xr;e=e._reactInternals;e:{if(_r(e)!==e||e.tag!==1)throw Error(G(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(at(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(at(n))return _u(e,n,r)}return r}function Op(e,r,n,a,i,s,o,c,l){return e=zl(n,a,!0,e,i,s,o,c,l),e.context=_p(null),n=e.current,a=Je(),i=mr(n),s=Ut(a,i),s.callback=r??null,ur(n,s,i),e.current.lanes=i,ya(e,i,a),it(e,a),e}function Vi(e,r,n,a){var i=r.current,s=Je(),o=mr(i);return n=_p(n),r.context===null?r.context=n:r.pendingContext=n,r=Ut(s,o),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=ur(i,r,o),e!==null&&(Mt(e,i,o,s),Za(e,i,o)),o}function Li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Tl(e,r){Uc(e,r),(e=e.alternate)&&Uc(e,r)}function Kf(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}Hi.prototype.render=Ll.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(G(409));Vi(e,r,null,null)};Hi.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Ir(function(){Vi(null,e,null,null)}),r[Yt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var r=xu();e={blockedOn:null,target:e,priority:r};for(var n=0;n<rr.length&&r!==0&&r<rr[n].priority;n++);rr.splice(n,0,e),n===0&&vu(e)}};function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function qf(e,r,n,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var m=Li(o);s.call(m)}}var o=Op(r,a,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=o,e[Yt]=o.current,la(e.nodeType===8?e.parentNode:e),Ir(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var c=a;a=function(){var m=Li(l);c.call(m)}}var l=zl(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=l,e[Yt]=l.current,la(e.nodeType===8?e.parentNode:e),Ir(function(){Vi(r,l,n,a)}),l}function Gi(e,r,n,a,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var c=i;i=function(){var l=Li(o);c.call(l)}}Vi(r,o,e,i)}else o=qf(n,r,e,i,a);return Li(o)}hu=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Fn(r.pendingLanes);n!==0&&(Ko(r,n|1),it(r,Ae()),!(je&6)&&(xn=Ae()+500,yr()))}break;case 13:Ir(function(){var a=Qt(e,1);if(a!==null){var i=Je();Mt(a,e,1,i)}}),Tl(e,1)}};qo=function(e){if(e.tag===13){var r=Qt(e,134217728);if(r!==null){var n=Je();Mt(r,e,134217728,n)}Tl(e,134217728)}};gu=function(e){if(e.tag===13){var r=mr(e),n=Qt(e,r);if(n!==null){var a=Je();Mt(n,e,r,a)}Tl(e,r)}};xu=function(){return Ne};bu=function(e,r){var n=Ne;try{return Ne=e,r()}finally{Ne=n}};Ks=function(e,r,n){switch(r){case"input":if($s(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var i=Ii(a);if(!i)throw Error(G(90));Kd(a),$s(a,i)}}}break;case"textarea":Jd(e,n);break;case"select":r=n.value,r!=null&&nn(e,!!n.multiple,r,!1)}};au=kl;iu=Ir;var Jf={usingClientEntryPoint:!1,Events:[wa,qr,Ii,ru,nu,kl]},An={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Pi=$a.inject(Xf),It=$a}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;mt.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!El(r))throw Error(G(200));return Qf(e,r,null,n)};mt.createRoot=function(e,r){if(!El(e))throw Error(G(299));var n=!1,a="",i=Wp;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=zl(e,1,!1,null,null,n,!1,a,i),e[Yt]=r.current,la(e.nodeType===8?e.parentNode:e),new Ll(r)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=lu(r),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return Ir(e)};mt.hydrate=function(e,r,n){if(!Ui(r))throw Error(G(200));return Gi(null,e,r,!0,n)};mt.hydrateRoot=function(e,r,n){if(!El(e))throw Error(G(405));var a=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),r=Op(r,null,e,1,n??null,i,!1,s,o),e[Yt]=r.current,la(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new Hi(r)};mt.render=function(e,r,n){if(!Ui(r))throw Error(G(200));return Gi(null,e,r,!1,n)};mt.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(G(40));return e._reactRootContainer?(Ir(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};mt.unstable_batchedUpdates=kl;mt.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!Ui(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Gi(e,r,n,!1,a)};mt.version="18.3.1-next-f1338f8080-20240426";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),Fd.exports=mt;var Zf=Fd.exports,Yc=Zf;Bs.createRoot=Yc.createRoot,Bs.hydrateRoot=Yc.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},xa.apply(this,arguments)}var sr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sr||(sr={}));const Qc="popstate";function eh(e){e===void 0&&(e={});function r(a,i){let{pathname:s,search:o,hash:c}=a.location;return Lo("",{pathname:s,search:o,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){return typeof i=="string"?i:Ei(i)}return rh(r,n,null,e)}function Be(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Ml(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function th(){return Math.random().toString(36).substr(2,8)}function Kc(e,r){return{usr:e.state,key:e.key,idx:r}}function Lo(e,r,n,a){return n===void 0&&(n=null),xa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?jn(r):r,{state:n,key:r&&r.key||a||th()})}function Ei(e){let{pathname:r="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function jn(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(r.search=e.substr(a),e=e.substr(0,a)),e&&(r.pathname=e)}return r}function rh(e,r,n,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,o=i.history,c=sr.Pop,l=null,m=h();m==null&&(m=0,o.replaceState(xa({},o.state,{idx:m}),""));function h(){return(o.state||{idx:null}).idx}function x(){c=sr.Pop;let N=h(),d=N==null?null:N-m;m=N,l&&l({action:c,location:v.location,delta:d})}function g(N,d){c=sr.Push;let u=Lo(v.location,N,d);m=h()+1;let f=Kc(u,m),j=v.createHref(u);try{o.pushState(f,"",j)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(j)}s&&l&&l({action:c,location:v.location,delta:1})}function E(N,d){c=sr.Replace;let u=Lo(v.location,N,d);m=h();let f=Kc(u,m),j=v.createHref(u);o.replaceState(f,"",j),s&&l&&l({action:c,location:v.location,delta:0})}function w(N){let d=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof N=="string"?N:Ei(N);return u=u.replace(/ $/,"%20"),Be(d,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,d)}let v={get action(){return c},get location(){return e(i,o)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qc,x),l=N,()=>{i.removeEventListener(Qc,x),l=null}},createHref(N){return r(i,N)},createURL:w,encodeLocation(N){let d=w(N);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:E,go(N){return o.go(N)}};return v}var qc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qc||(qc={}));function nh(e,r,n){return n===void 0&&(n="/"),ah(e,r,n)}function ah(e,r,n,a){let i=typeof r=="string"?jn(r):r,s=Pl(i.pathname||"/",n);if(s==null)return null;let o=$p(e);ih(o);let c=null;for(let l=0;c==null&&l<o.length;++l){let m=xh(s);c=fh(o[l],m)}return c}function $p(e,r,n,a){r===void 0&&(r=[]),n===void 0&&(n=[]),a===void 0&&(a="");let i=(s,o,c)=>{let l={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Be(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let m=hr([a,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),$p(s.children,r,h,m)),!(s.path==null&&!s.index)&&r.push({path:m,score:ph(m,s.index),routesMeta:h})};return e.forEach((s,o)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,o);else for(let l of Vp(s.path))i(s,o,l)}),r}function Vp(e){let r=e.split("/");if(r.length===0)return[];let[n,...a]=r,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let o=Vp(a.join("/")),c=[];return c.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&c.push(...o),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function ih(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:mh(r.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const sh=/^:[\w-]+$/,oh=3,lh=2,ch=1,dh=10,uh=-2,Jc=e=>e==="*";function ph(e,r){let n=e.split("/"),a=n.length;return n.some(Jc)&&(a+=uh),r&&(a+=lh),n.filter(i=>!Jc(i)).reduce((i,s)=>i+(sh.test(s)?oh:s===""?ch:dh),a)}function mh(e,r){return e.length===r.length&&e.slice(0,-1).every((a,i)=>a===r[i])?e[e.length-1]-r[r.length-1]:0}function fh(e,r,n){let{routesMeta:a}=e,i={},s="/",o=[];for(let c=0;c<a.length;++c){let l=a[c],m=c===a.length-1,h=s==="/"?r:r.slice(s.length)||"/",x=hh({path:l.relativePath,caseSensitive:l.caseSensitive,end:m},h),g=l.route;if(!x)return null;Object.assign(i,x.params),o.push({params:i,pathname:hr([s,x.pathname]),pathnameBase:wh(hr([s,x.pathnameBase])),route:g}),x.pathnameBase!=="/"&&(s=hr([s,x.pathnameBase]))}return o}function hh(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=gh(e.path,e.caseSensitive,e.end),i=r.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:a.reduce((m,h,x)=>{let{paramName:g,isOptional:E}=h;if(g==="*"){let v=c[x]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const w=c[x];return E&&!w?m[g]=void 0:m[g]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:s,pathnameBase:o,pattern:e}}function gh(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),Ml(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(a.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),a]}function xh(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ml(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function Pl(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vh=e=>bh.test(e);function yh(e,r){r===void 0&&(r="/");let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?jn(e):e,s;if(n)if(vh(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Ml(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Xc(n.substring(1),"/"):s=Xc(n,r)}else s=r;return{pathname:s,search:kh(a),hash:Nh(i)}}function Xc(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zs(e,r,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jh(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function Dl(e,r){let n=jh(e);return r?n.map((a,i)=>i===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Al(e,r,n,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=jn(e):(i=xa({},e),Be(!i.pathname||!i.pathname.includes("?"),zs("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),zs("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),zs("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,c;if(o==null)c=n;else{let x=r.length-1;if(!a&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),x-=1;i.pathname=g.join("/")}c=x>=0?r[x]:"/"}let l=yh(i,c),m=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(m||h)&&(l.pathname+="/"),l}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),wh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hp=["post","put","patch","delete"];new Set(Hp);const Ch=["get",...Hp];new Set(Ch);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ba.apply(this,arguments)}const Bl=p.createContext(null),zh=p.createContext(null),jr=p.createContext(null),Yi=p.createContext(null),wr=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Up=p.createContext(null);function Th(e,r){let{relative:n}=r===void 0?{}:r;wn()||Be(!1);let{basename:a,navigator:i}=p.useContext(jr),{hash:s,pathname:o,search:c}=Yp(e,{relative:n}),l=o;return a!=="/"&&(l=o==="/"?a:hr([a,o])),i.createHref({pathname:l,search:c,hash:s})}function wn(){return p.useContext(Yi)!=null}function kn(){return wn()||Be(!1),p.useContext(Yi).location}function Gp(e){p.useContext(jr).static||p.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=p.useContext(wr);return e?Fh():Lh()}function Lh(){wn()||Be(!1);let e=p.useContext(Bl),{basename:r,future:n,navigator:a}=p.useContext(jr),{matches:i}=p.useContext(wr),{pathname:s}=kn(),o=JSON.stringify(Dl(i,n.v7_relativeSplatPath)),c=p.useRef(!1);return Gp(()=>{c.current=!0}),p.useCallback(function(m,h){if(h===void 0&&(h={}),!c.current)return;if(typeof m=="number"){a.go(m);return}let x=Al(m,JSON.parse(o),s,h.relative==="path");e==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:hr([r,x.pathname])),(h.replace?a.replace:a.push)(x,h.state,h)},[r,a,o,s,e])}function Yp(e,r){let{relative:n}=r===void 0?{}:r,{future:a}=p.useContext(jr),{matches:i}=p.useContext(wr),{pathname:s}=kn(),o=JSON.stringify(Dl(i,a.v7_relativeSplatPath));return p.useMemo(()=>Al(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Eh(e,r){return Mh(e,r)}function Mh(e,r,n,a){wn()||Be(!1);let{navigator:i}=p.useContext(jr),{matches:s}=p.useContext(wr),o=s[s.length-1],c=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let m=kn(),h;if(r){var x;let N=typeof r=="string"?jn(r):r;l==="/"||(x=N.pathname)!=null&&x.startsWith(l)||Be(!1),h=N}else h=m;let g=h.pathname||"/",E=g;if(l!=="/"){let N=l.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let w=nh(e,{pathname:E}),v=Ih(w&&w.map(N=>Object.assign({},N,{params:Object.assign({},c,N.params),pathname:hr([l,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:hr([l,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,a);return r&&v?p.createElement(Yi.Provider,{value:{location:ba({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:sr.Pop}},v):v}function Ph(){let e=Wh(),r=Sh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},r),n?p.createElement("pre",{style:i},n):null,null)}const Dh=p.createElement(Ph,null);class Ah extends p.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?p.createElement(wr.Provider,{value:this.props.routeContext},p.createElement(Up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bh(e){let{routeContext:r,match:n,children:a}=e,i=p.useContext(Bl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),p.createElement(wr.Provider,{value:r},a)}function Ih(e,r,n,a){var i;if(r===void 0&&(r=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=a)!=null&&s.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let h=o.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);h>=0||Be(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,m=-1;if(n&&a&&a.v7_partialHydration)for(let h=0;h<o.length;h++){let x=o[h];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=h),x.route.id){let{loaderData:g,errors:E}=n,w=x.route.loader&&g[x.route.id]===void 0&&(!E||E[x.route.id]===void 0);if(x.route.lazy||w){l=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((h,x,g)=>{let E,w=!1,v=null,N=null;n&&(E=c&&x.route.id?c[x.route.id]:void 0,v=x.route.errorElement||Dh,l&&(m<0&&g===0?($h("route-fallback"),w=!0,N=null):m===g&&(w=!0,N=x.route.hydrateFallbackElement||null)));let d=r.concat(o.slice(0,g+1)),u=()=>{let f;return E?f=v:w?f=N:x.route.Component?f=p.createElement(x.route.Component,null):x.route.element?f=x.route.element:f=h,p.createElement(Bh,{match:x,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:f})};return n&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?p.createElement(Ah,{location:n.location,revalidation:n.revalidation,component:v,error:E,children:u(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):u()},null)}var Qp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qp||{}),Kp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kp||{});function Rh(e){let r=p.useContext(Bl);return r||Be(!1),r}function _h(e){let r=p.useContext(zh);return r||Be(!1),r}function Oh(e){let r=p.useContext(wr);return r||Be(!1),r}function qp(e){let r=Oh(),n=r.matches[r.matches.length-1];return n.route.id||Be(!1),n.route.id}function Wh(){var e;let r=p.useContext(Up),n=_h(),a=qp();return r!==void 0?r:(e=n.errors)==null?void 0:e[a]}function Fh(){let{router:e}=Rh(Qp.UseNavigateStable),r=qp(Kp.UseNavigateStable),n=p.useRef(!1);return Gp(()=>{n.current=!0}),p.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ba({fromRouteId:r},s)))},[e,r])}const Zc={};function $h(e,r,n){Zc[e]||(Zc[e]=!0)}function Vh(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jp(e){let{to:r,replace:n,state:a,relative:i}=e;wn()||Be(!1);let{future:s,static:o}=p.useContext(jr),{matches:c}=p.useContext(wr),{pathname:l}=kn(),m=_t(),h=Al(r,Dl(c,s.v7_relativeSplatPath),l,i==="path"),x=JSON.stringify(h);return p.useEffect(()=>m(JSON.parse(x),{replace:n,state:a,relative:i}),[m,x,i,n,a]),null}function Ot(e){Be(!1)}function Hh(e){let{basename:r="/",children:n=null,location:a,navigationType:i=sr.Pop,navigator:s,static:o=!1,future:c}=e;wn()&&Be(!1);let l=r.replace(/^\/*/,"/"),m=p.useMemo(()=>({basename:l,navigator:s,static:o,future:ba({v7_relativeSplatPath:!1},c)}),[l,c,s,o]);typeof a=="string"&&(a=jn(a));let{pathname:h="/",search:x="",hash:g="",state:E=null,key:w="default"}=a,v=p.useMemo(()=>{let N=Pl(h,l);return N==null?null:{location:{pathname:N,search:x,hash:g,state:E,key:w},navigationType:i}},[l,h,x,g,E,w,i]);return v==null?null:p.createElement(jr.Provider,{value:m},p.createElement(Yi.Provider,{children:n,value:v}))}function Uh(e){let{children:r,location:n}=e;return Eh(Eo(r),n)}new Promise(()=>{});function Eo(e,r){r===void 0&&(r=[]);let n=[];return p.Children.forEach(e,(a,i)=>{if(!p.isValidElement(a))return;let s=[...r,i];if(a.type===p.Fragment){n.push.apply(n,Eo(a.props.children,s));return}a.type!==Ot&&Be(!1),!a.props.index||!a.props.children||Be(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Eo(a.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Mo.apply(this,arguments)}function Gh(e,r){if(e==null)return{};var n={},a=Object.keys(e),i,s;for(s=0;s<a.length;s++)i=a[s],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Yh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qh(e,r){return e.button===0&&(!r||r==="_self")&&!Yh(e)}function Po(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((r,n)=>{let a=e[n];return r.concat(Array.isArray(a)?a.map(i=>[n,i]):[[n,a]])},[]))}function Kh(e,r){let n=Po(e);return r&&r.forEach((a,i)=>{n.has(i)||r.getAll(i).forEach(s=>{n.append(i,s)})}),n}const qh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jh="6";try{window.__reactRouterVersion=Jh}catch{}const Xh="startTransition",ed=Fm[Xh];function Zh(e){let{basename:r,children:n,future:a,window:i}=e,s=p.useRef();s.current==null&&(s.current=eh({window:i,v5Compat:!0}));let o=s.current,[c,l]=p.useState({action:o.action,location:o.location}),{v7_startTransition:m}=a||{},h=p.useCallback(x=>{m&&ed?ed(()=>l(x)):l(x)},[l,m]);return p.useLayoutEffect(()=>o.listen(h),[o,h]),p.useEffect(()=>Vh(a),[a]),p.createElement(Hh,{basename:r,children:n,location:c.location,navigationType:c.action,navigator:o,future:a})}const eg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Do=p.forwardRef(function(r,n){let{onClick:a,relative:i,reloadDocument:s,replace:o,state:c,target:l,to:m,preventScrollReset:h,viewTransition:x}=r,g=Gh(r,qh),{basename:E}=p.useContext(jr),w,v=!1;if(typeof m=="string"&&tg.test(m)&&(w=m,eg))try{let f=new URL(window.location.href),j=m.startsWith("//")?new URL(f.protocol+m):new URL(m),b=Pl(j.pathname,E);j.origin===f.origin&&b!=null?m=b+j.search+j.hash:v=!0}catch{}let N=Th(m,{relative:i}),d=rg(m,{replace:o,state:c,target:l,preventScrollReset:h,relative:i,viewTransition:x});function u(f){a&&a(f),f.defaultPrevented||d(f)}return p.createElement("a",Mo({},g,{href:w||N,onClick:v||s?a:u,ref:n,target:l}))});var td;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(td||(td={}));var rd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rd||(rd={}));function rg(e,r){let{target:n,replace:a,state:i,preventScrollReset:s,relative:o,viewTransition:c}=r===void 0?{}:r,l=_t(),m=kn(),h=Yp(e,{relative:o});return p.useCallback(x=>{if(Qh(x,n)){x.preventDefault();let g=a!==void 0?a:Ei(m)===Ei(h);l(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:c})}},[m,l,h,a,i,n,e,s,o,c])}function Xp(e){let r=p.useRef(Po(e)),n=p.useRef(!1),a=kn(),i=p.useMemo(()=>Kh(a.search,n.current?null:r.current),[a.search]),s=_t(),o=p.useCallback((c,l)=>{const m=Po(typeof c=="function"?c(i):c);n.current=!0,s("?"+m,l)},[s,i]);return[i,o]}const Zp=p.createContext(null);function ng({children:e}){const[r,n]=p.useState(null),[a,i]=p.useState(null),[s,o]=p.useState(null),[c,l]=p.useState(!0),[m,h]=p.useState(null);p.useEffect(()=>{const d=localStorage.getItem("user"),u=localStorage.getItem("accessToken"),f=localStorage.getItem("refreshToken");d&&u&&(n(JSON.parse(d)),i(u),o(f)),l(!1)},[]);const x=async(d,u)=>{l(!0),h(null);try{const f=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,password:u})}),j=await f.json();if(!f.ok)throw new Error(j.message||"Login failed");return j}catch(f){throw h(f.message),f}finally{l(!1)}},g=async(d,u)=>{l(!0),h(null);try{const f=await fetch("/api/auth/verify-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,code:u})}),j=await f.json();if(!f.ok)throw new Error(j.message||"Verification failed");return n(j.user),i(j.accessToken),o(j.refreshToken),localStorage.setItem("user",JSON.stringify(j.user)),localStorage.setItem("accessToken",j.accessToken),localStorage.setItem("refreshToken",j.refreshToken),j}catch(f){throw h(f.message),f}finally{l(!1)}},E=async(d,u,f)=>{l(!0),h(null);try{const j=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,password:u,name:f})}),b=await j.json();if(!j.ok)throw new Error(b.message||"Registration failed");return b}catch(j){throw h(j.message),j}finally{l(!1)}},w=async()=>{l(!0);try{a&&await fetch("/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${a}`}})}catch(d){console.error("Logout error:",d)}finally{n(null),i(null),o(null),localStorage.removeItem("user"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),l(!1)}},N={user:r,setUser:n,accessToken:a,setAccessToken:i,refreshToken:s,setRefreshToken:o,loading:c,error:m,login:x,verifyCode:g,register:E,logout:w,refreshAccessToken:async()=>{if(!s)return null;try{const d=await fetch("/api/auth/refresh",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:s})}),u=await d.json();if(!d.ok)throw new Error("Token refresh failed");return i(u.accessToken),o(u.refreshToken),localStorage.setItem("accessToken",u.accessToken),localStorage.setItem("refreshToken",u.refreshToken),u.accessToken}catch{return w(),null}},isAuthenticated:!!r};return t.jsx(Zp.Provider,{value:N,children:e})}function kr(){const e=p.useContext(Zp);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}const Xn=[{code:"id",name:"Indonesia",flag:"🇮🇩",native:"Bahasa Indonesia"},{code:"en",name:"English",flag:"🇺🇸",native:"English"},{code:"zh",name:"Chinese",flag:"🇨🇳",native:"中文"},{code:"ja",name:"Japanese",flag:"🇯🇵",native:"日本語"},{code:"ko",name:"Korean",flag:"🇰🇷",native:"한국어"},{code:"ar",name:"Arabic",flag:"🇸🇦",native:"العربية"},{code:"hi",name:"Hindi",flag:"🇮🇳",native:"हिन्दी"},{code:"es",name:"Spanish",flag:"🇪🇸",native:"Español"},{code:"fr",name:"French",flag:"🇫🇷",native:"Français"},{code:"de",name:"German",flag:"🇩🇪",native:"Deutsch"},{code:"pt",name:"Portuguese",flag:"🇧🇷",native:"Português"},{code:"ru",name:"Russian",flag:"🇷🇺",native:"Русский"},{code:"it",name:"Italian",flag:"🇮🇹",native:"Italiano"},{code:"nl",name:"Dutch",flag:"🇳🇱",native:"Nederlands"},{code:"th",name:"Thai",flag:"🇹🇭",native:"ไทย"},{code:"vi",name:"Vietnamese",flag:"🇻🇳",native:"Tiếng Việt"},{code:"ms",name:"Malay",flag:"🇲🇾",native:"Bahasa Melayu"},{code:"tr",name:"Turkish",flag:"🇹🇷",native:"Türkçe"},{code:"pl",name:"Polish",flag:"🇵🇱",native:"Polski"},{code:"uk",name:"Ukrainian",flag:"🇺🇦",native:"Українська"}],Zn={id:{dashboard:"Dashboard",overview:"Ikhtisar",taskManager:"Manajer Tugas",pomodoro:"Pomodoro",analytics:"Analitik",activityLogs:"Log Aktivitas",weather:"Cuaca",miniTools:"Mini Tools",linkManager:"Manajer Link",archive:"Arsip",chessGame:"Permainan Catur",ticTacToe:"Tic-Tac-Toe",memoryGame:"Permainan Memori",snakeGame:"Permainan Ular",hackerTerminal:"Terminal Hacker",supportCenter:"Pusat Bantuan",settings:"Pengaturan",userManagement:"Manajemen Pengguna",overviewDesc:"Selamat datang di Dashboard Anda",taskManagerDesc:"Kelola tugas dan proyek Anda",pomodoroDesc:"Teknik fokus produktivitas 25/5 menit",analyticsDesc:"Lihat statistik produktivitas dan performa Anda",activityLogsDesc:"Riwayat aktivitas dan log sistem",weatherDesc:"Cuaca real-time untuk kota Anda",miniToolsDesc:"Berbagai alat mini yang berguna",linkManagerDesc:"Kelola tautan dan bookmark Anda",archiveDesc:"Arsip dan penyimpanan dokumen",chessGameDesc:"Main catur melawan AI yang cerdas!",ticTacToeDesc:"Game klasik X dan O - Main sendiri atau lawan AI!",memoryGameDesc:"Cocokkan kartu dengan tema Cybersecurity & Hacking Tools!",snakeGameDesc:"Game klasik - Makan makanan dan jangan tabrak diri sendiri!",hackerTerminalDesc:"Simulasi terminal hacking - Free-Hack, Puzzle & Typing Challenge!",supportCenterDesc:"Bantuan dan dukungan teknis",settingsDesc:"Kelola semua preferensi dan konfigurasi akun Anda",userManagementDesc:"Kelola semua pengguna platform",welcome:"Selamat Datang",logout:"Keluar",search:"Cari...",searchPlaceholder:"Cari user, pengaturan, atau fitur...",save:"Simpan",cancel:"Batal",delete:"Hapus",edit:"Ubah",add:"Tambah",create:"Buat",close:"Tutup",loading:"Memuat...",online:"Online",offline:"Offline",today:"Hari ini",yesterday:"Kemarin",tomorrow:"Besok",activeProjects:"Proyek Aktif",security:"Keamanan",efficiency:"Efisiensi",uptime:"Waktu Aktif",todoToday:"To-Do Hari Ini",remaining:"tersisa",addNewTask:"Tambah tugas baru...",eventSchedule:"Jadwal Event",event:"event",focusSummary:"Ringkasan Fokus",nextEvent:"EVENT BERIKUTNYA",meeting:"Meeting",days:"Hari",hours:"Jam",minutes:"Menit",seconds:"Detik",language:"Bahasa",theme:"Tema",notifications:"Notifikasi",account:"Akun",play:"Main",pause:"Jeda",restart:"Mulai Ulang",score:"Skor",highScore:"Skor Tertinggi",focus:"Fokus",shortBreak:"Istirahat Pendek",longBreak:"Istirahat Panjang",sessions:"Sesi",temperature:"Suhu",humidity:"Kelembaban",wind:"Angin",forecast:"Prakiraan"},en:{dashboard:"Dashboard",overview:"Overview",taskManager:"Task Manager",pomodoro:"Pomodoro",analytics:"Analytics",activityLogs:"Activity Logs",weather:"Weather",miniTools:"Mini Tools",linkManager:"Link Manager",archive:"Archive",chessGame:"Chess Game",ticTacToe:"Tic-Tac-Toe",memoryGame:"Memory Game",snakeGame:"Snake Game",hackerTerminal:"Hacker Terminal",supportCenter:"Support Center",settings:"Settings",userManagement:"User Management",overviewDesc:"Welcome to your Dashboard",taskManagerDesc:"Manage your tasks and projects",pomodoroDesc:"Productivity focus technique 25/5 minutes",analyticsDesc:"View your productivity statistics and performance",activityLogsDesc:"Activity history and system logs",weatherDesc:"Real-time weather for your city",miniToolsDesc:"Various useful mini tools",linkManagerDesc:"Manage your links and bookmarks",archiveDesc:"Archive and document storage",chessGameDesc:"Play chess against a smart AI!",ticTacToeDesc:"Classic X and O game - Play solo or against AI!",memoryGameDesc:"Match cards with Cybersecurity & Hacking Tools theme!",snakeGameDesc:"Classic game - Eat food and don't hit yourself!",hackerTerminalDesc:"Hacking terminal simulation - Free-Hack, Puzzle & Typing Challenge!",supportCenterDesc:"Help and technical support",settingsDesc:"Manage all your preferences and account settings",userManagementDesc:"Manage all platform users",welcome:"Welcome",logout:"Logout",search:"Search...",searchPlaceholder:"Search users, settings, or features...",save:"Save",cancel:"Cancel",delete:"Delete",edit:"Edit",add:"Add",create:"Create",close:"Close",loading:"Loading...",online:"Online",offline:"Offline",today:"Today",yesterday:"Yesterday",tomorrow:"Tomorrow",activeProjects:"Active Projects",security:"Security",efficiency:"Efficiency",uptime:"Uptime",todoToday:"To-Do Today",remaining:"remaining",addNewTask:"Add new task...",eventSchedule:"Event Schedule",event:"event",focusSummary:"Focus Summary",nextEvent:"NEXT EVENT",meeting:"Meeting",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds",language:"Language",theme:"Theme",notifications:"Notifications",account:"Account",play:"Play",pause:"Pause",restart:"Restart",score:"Score",highScore:"High Score",focus:"Focus",shortBreak:"Short Break",longBreak:"Long Break",sessions:"Sessions",temperature:"Temperature",humidity:"Humidity",wind:"Wind",forecast:"Forecast"},zh:{dashboard:"仪表板",overview:"概览",taskManager:"任务管理",pomodoro:"番茄钟",analytics:"分析",activityLogs:"活动日志",weather:"天气",miniTools:"迷你工具",linkManager:"链接管理",archive:"档案",chessGame:"国际象棋",ticTacToe:"井字棋",memoryGame:"记忆游戏",snakeGame:"贪吃蛇",hackerTerminal:"黑客终端",supportCenter:"支持中心",settings:"设置",userManagement:"用户管理",welcome:"欢迎",logout:"登出",search:"搜索...",save:"保存",cancel:"取消",delete:"删除",edit:"编辑",add:"添加",create:"创建",close:"关闭",loading:"加载中...",today:"今天",yesterday:"昨天",tomorrow:"明天",activeProjects:"活跃项目",security:"安全",efficiency:"效率",uptime:"运行时间",language:"语言",theme:"主题",notifications:"通知",account:"账户",play:"播放",pause:"暂停",restart:"重新开始",score:"分数",highScore:"最高分",focus:"专注",shortBreak:"短休息",longBreak:"长休息",sessions:"会话",temperature:"温度",humidity:"湿度",wind:"风",forecast:"预报"},ja:{dashboard:"ダッシュボード",overview:"概要",taskManager:"タスク管理",pomodoro:"ポモドーロ",analytics:"分析",activityLogs:"アクティビティログ",weather:"天気",miniTools:"ミニツール",linkManager:"リンク管理",archive:"アーカイブ",chessGame:"チェス",ticTacToe:"三目並べ",memoryGame:"神経衰弱",snakeGame:"スネークゲーム",hackerTerminal:"ハッカーターミナル",supportCenter:"サポートセンター",settings:"設定",userManagement:"ユーザー管理",welcome:"ようこそ",logout:"ログアウト",search:"検索...",save:"保存",cancel:"キャンセル",delete:"削除",edit:"編集",add:"追加",create:"作成",close:"閉じる",loading:"読み込み中...",today:"今日",yesterday:"昨日",tomorrow:"明日",activeProjects:"アクティブプロジェクト",security:"セキュリティ",efficiency:"効率",uptime:"稼働時間",language:"言語",theme:"テーマ",notifications:"通知",account:"アカウント",play:"再生",pause:"一時停止",restart:"リスタート",score:"スコア",highScore:"ハイスコア",focus:"集中",shortBreak:"小休憩",longBreak:"長休憩",sessions:"セッション",temperature:"気温",humidity:"湿度",wind:"風",forecast:"予報"},ko:{dashboard:"대시보드",overview:"개요",taskManager:"작업 관리",pomodoro:"포모도로",analytics:"분석",activityLogs:"활동 로그",weather:"날씨",miniTools:"미니 도구",linkManager:"링크 관리",archive:"보관함",chessGame:"체스",ticTacToe:"틱택토",memoryGame:"메모리 게임",snakeGame:"스네이크 게임",hackerTerminal:"해커 터미널",supportCenter:"지원 센터",settings:"설정",userManagement:"사용자 관리",welcome:"환영합니다",logout:"로그아웃",search:"검색...",save:"저장",cancel:"취소",delete:"삭제",edit:"편집",add:"추가",create:"생성",close:"닫기",loading:"로딩 중...",today:"오늘",yesterday:"어제",tomorrow:"내일",activeProjects:"활성 프로젝트",security:"보안",efficiency:"효율",uptime:"가동 시간",language:"언어",theme:"테마",notifications:"알림",account:"계정",play:"재생",pause:"일시정지",restart:"다시 시작",score:"점수",highScore:"최고 점수",focus:"집중",shortBreak:"짧은 휴식",longBreak:"긴 휴식",sessions:"세션",temperature:"온도",humidity:"습도",wind:"바람",forecast:"예보"},ar:{dashboard:"لوحة التحكم",overview:"نظرة عامة",taskManager:"إدارة المهام",pomodoro:"بومودورو",analytics:"التحليلات",activityLogs:"سجل النشاط",weather:"الطقس",miniTools:"أدوات صغيرة",linkManager:"إدارة الروابط",archive:"الأرشيف",chessGame:"الشطرنج",ticTacToe:"إكس أو",memoryGame:"لعبة الذاكرة",snakeGame:"لعبة الثعبان",hackerTerminal:"طرفية القراصنة",supportCenter:"مركز الدعم",settings:"الإعدادات",userManagement:"إدارة المستخدمين",welcome:"مرحباً",logout:"تسجيل الخروج",search:"بحث...",save:"حفظ",cancel:"إلغاء",delete:"حذف",edit:"تعديل",add:"إضافة",create:"إنشاء",close:"إغلاق",loading:"جار التحميل...",today:"اليوم",yesterday:"أمس",tomorrow:"غداً",activeProjects:"المشاريع النشطة",security:"الأمان",efficiency:"الكفاءة",uptime:"وقت التشغيل",language:"اللغة",theme:"السمة",notifications:"الإشعارات",account:"الحساب",play:"تشغيل",pause:"إيقاف مؤقت",restart:"إعادة البدء",score:"النتيجة",highScore:"أعلى نتيجة",focus:"تركيز",shortBreak:"استراحة قصيرة",longBreak:"استراحة طويلة",sessions:"الجلسات",temperature:"درجة الحرارة",humidity:"الرطوبة",wind:"الرياح",forecast:"التوقعات"},es:{dashboard:"Tablero",overview:"Resumen",taskManager:"Gestor de Tareas",pomodoro:"Pomodoro",analytics:"Analíticas",activityLogs:"Registro de Actividad",weather:"Clima",miniTools:"Mini Herramientas",linkManager:"Gestor de Enlaces",archive:"Archivo",chessGame:"Ajedrez",ticTacToe:"Tres en Raya",memoryGame:"Juego de Memoria",snakeGame:"Serpiente",hackerTerminal:"Terminal Hacker",supportCenter:"Centro de Soporte",settings:"Configuración",userManagement:"Gestión de Usuarios",welcome:"Bienvenido",logout:"Cerrar Sesión",search:"Buscar...",save:"Guardar",cancel:"Cancelar",delete:"Eliminar",edit:"Editar",add:"Añadir",create:"Crear",close:"Cerrar",loading:"Cargando...",today:"Hoy",yesterday:"Ayer",tomorrow:"Mañana",activeProjects:"Proyectos Activos",security:"Seguridad",efficiency:"Eficiencia",uptime:"Tiempo Activo",language:"Idioma",theme:"Tema",notifications:"Notificaciones",account:"Cuenta",play:"Jugar",pause:"Pausar",restart:"Reiniciar",score:"Puntuación",highScore:"Puntuación Máxima",focus:"Enfoque",shortBreak:"Descanso Corto",longBreak:"Descanso Largo",sessions:"Sesiones",temperature:"Temperatura",humidity:"Humedad",wind:"Viento",forecast:"Pronóstico"},fr:{dashboard:"Tableau de bord",overview:"Aperçu",taskManager:"Gestionnaire de Tâches",pomodoro:"Pomodoro",analytics:"Analytiques",activityLogs:"Journal d'activité",weather:"Météo",miniTools:"Mini Outils",linkManager:"Gestionnaire de Liens",archive:"Archives",chessGame:"Échecs",ticTacToe:"Morpion",memoryGame:"Jeu de Mémoire",snakeGame:"Serpent",hackerTerminal:"Terminal Hacker",supportCenter:"Centre d'aide",settings:"Paramètres",userManagement:"Gestion des Utilisateurs",welcome:"Bienvenue",logout:"Déconnexion",search:"Rechercher...",save:"Enregistrer",cancel:"Annuler",delete:"Supprimer",edit:"Modifier",add:"Ajouter",create:"Créer",close:"Fermer",loading:"Chargement...",today:"Aujourd'hui",yesterday:"Hier",tomorrow:"Demain",activeProjects:"Projets Actifs",security:"Sécurité",efficiency:"Efficacité",uptime:"Temps de fonctionnement",language:"Langue",theme:"Thème",notifications:"Notifications",account:"Compte",play:"Jouer",pause:"Pause",restart:"Redémarrer",score:"Score",highScore:"Meilleur Score",focus:"Concentration",shortBreak:"Pause Courte",longBreak:"Pause Longue",sessions:"Sessions",temperature:"Température",humidity:"Humidité",wind:"Vent",forecast:"Prévisions"},de:{dashboard:"Dashboard",overview:"Übersicht",taskManager:"Aufgabenverwaltung",pomodoro:"Pomodoro",analytics:"Analysen",activityLogs:"Aktivitätsprotokoll",weather:"Wetter",miniTools:"Mini-Tools",linkManager:"Link-Verwaltung",archive:"Archiv",chessGame:"Schach",ticTacToe:"Tic-Tac-Toe",memoryGame:"Memory-Spiel",snakeGame:"Snake",hackerTerminal:"Hacker-Terminal",supportCenter:"Support-Center",settings:"Einstellungen",userManagement:"Benutzerverwaltung",welcome:"Willkommen",logout:"Abmelden",search:"Suchen...",save:"Speichern",cancel:"Abbrechen",delete:"Löschen",edit:"Bearbeiten",add:"Hinzufügen",create:"Erstellen",close:"Schließen",loading:"Lädt...",today:"Heute",yesterday:"Gestern",tomorrow:"Morgen",activeProjects:"Aktive Projekte",security:"Sicherheit",efficiency:"Effizienz",uptime:"Betriebszeit",language:"Sprache",theme:"Thema",notifications:"Benachrichtigungen",account:"Konto",play:"Spielen",pause:"Pause",restart:"Neustart",score:"Punktzahl",highScore:"Höchstpunktzahl",focus:"Fokus",shortBreak:"Kurze Pause",longBreak:"Lange Pause",sessions:"Sitzungen",temperature:"Temperatur",humidity:"Luftfeuchtigkeit",wind:"Wind",forecast:"Vorhersage"},pt:{dashboard:"Painel",overview:"Visão Geral",taskManager:"Gerenciador de Tarefas",pomodoro:"Pomodoro",analytics:"Análises",activityLogs:"Registro de Atividades",weather:"Clima",miniTools:"Mini Ferramentas",linkManager:"Gerenciador de Links",archive:"Arquivo",chessGame:"Xadrez",ticTacToe:"Jogo da Velha",memoryGame:"Jogo da Memória",snakeGame:"Cobrinha",hackerTerminal:"Terminal Hacker",supportCenter:"Central de Suporte",settings:"Configurações",userManagement:"Gerenciamento de Usuários",welcome:"Bem-vindo",logout:"Sair",search:"Pesquisar...",save:"Salvar",cancel:"Cancelar",delete:"Excluir",edit:"Editar",add:"Adicionar",create:"Criar",close:"Fechar",loading:"Carregando...",today:"Hoje",yesterday:"Ontem",tomorrow:"Amanhã",activeProjects:"Projetos Ativos",security:"Segurança",efficiency:"Eficiência",uptime:"Tempo de Atividade",language:"Idioma",theme:"Tema",notifications:"Notificações",account:"Conta",play:"Jogar",pause:"Pausar",restart:"Reiniciar",score:"Pontuação",highScore:"Maior Pontuação",focus:"Foco",shortBreak:"Pausa Curta",longBreak:"Pausa Longa",sessions:"Sessões",temperature:"Temperatura",humidity:"Umidade",wind:"Vento",forecast:"Previsão"},ru:{dashboard:"Панель",overview:"Обзор",taskManager:"Менеджер Задач",pomodoro:"Помодоро",analytics:"Аналитика",activityLogs:"Журнал Активности",weather:"Погода",miniTools:"Мини Инструменты",linkManager:"Менеджер Ссылок",archive:"Архив",chessGame:"Шахматы",ticTacToe:"Крестики-нолики",memoryGame:"Игра на Память",snakeGame:"Змейка",hackerTerminal:"Хакерский Терминал",supportCenter:"Центр Поддержки",settings:"Настройки",userManagement:"Управление Пользователями",welcome:"Добро пожаловать",logout:"Выход",search:"Поиск...",save:"Сохранить",cancel:"Отмена",delete:"Удалить",edit:"Редактировать",add:"Добавить",create:"Создать",close:"Закрыть",loading:"Загрузка...",today:"Сегодня",yesterday:"Вчера",tomorrow:"Завтра",activeProjects:"Активные Проекты",security:"Безопасность",efficiency:"Эффективность",uptime:"Время Работы",language:"Язык",theme:"Тема",notifications:"Уведомления",account:"Аккаунт",play:"Играть",pause:"Пауза",restart:"Перезапуск",score:"Счёт",highScore:"Рекорд",focus:"Фокус",shortBreak:"Короткий Перерыв",longBreak:"Длинный Перерыв",sessions:"Сессии",temperature:"Температура",humidity:"Влажность",wind:"Ветер",forecast:"Прогноз"}};Xn.forEach(e=>{Zn[e.code]||(Zn[e.code]=Zn.en)});const em=p.createContext();function ag({children:e}){const[r,n]=p.useState(()=>localStorage.getItem("lutfi-lab-language")||"id");p.useEffect(()=>{localStorage.setItem("lutfi-lab-language",r),document.documentElement.lang=r,document.documentElement.dir=r==="ar"?"rtl":"ltr"},[r]);const a=s=>{var o;return((o=Zn[r])==null?void 0:o[s])||Zn.en[s]||s},i=Xn.find(s=>s.code===r)||Xn[0];return t.jsx(em.Provider,{value:{language:r,setLanguage:n,t:a,currentLanguage:i,languages:Xn},children:e})}function Nr(){const e=p.useContext(em);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e}const ig=p.createContext(),Bn={dark:{id:"dark",name:"Dark Mode",icon:"🌙",colors:{background:"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",surface:"rgba(15, 23, 42, 0.95)",surfaceHover:"rgba(30, 41, 59, 0.95)",primary:"#6366f1",primaryGradient:"linear-gradient(135deg, #6366f1, #8b5cf6)",secondary:"#a855f7",accent:"#00f5ff",text:"#ffffff",textSecondary:"#94a3b8",textMuted:"#64748b",border:"rgba(99, 102, 241, 0.3)",success:"#22c55e",warning:"#f59e0b",error:"#ef4444",info:"#0ea5e9"}},light:{id:"light",name:"Light Mode",icon:"☀️",colors:{background:"linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",surface:"rgba(255, 255, 255, 0.95)",surfaceHover:"rgba(241, 245, 249, 0.95)",primary:"#4f46e5",primaryGradient:"linear-gradient(135deg, #4f46e5, #7c3aed)",secondary:"#9333ea",accent:"#0891b2",text:"#0f172a",textSecondary:"#475569",textMuted:"#94a3b8",border:"rgba(99, 102, 241, 0.2)",success:"#16a34a",warning:"#d97706",error:"#dc2626",info:"#0284c7"}},midnight:{id:"midnight",name:"Midnight Blue",icon:"🌌",colors:{background:"linear-gradient(135deg, #020617 0%, #0f172a 100%)",surface:"rgba(2, 6, 23, 0.95)",surfaceHover:"rgba(15, 23, 42, 0.95)",primary:"#3b82f6",primaryGradient:"linear-gradient(135deg, #3b82f6, #6366f1)",secondary:"#60a5fa",accent:"#38bdf8",text:"#f1f5f9",textSecondary:"#cbd5e1",textMuted:"#64748b",border:"rgba(59, 130, 246, 0.3)",success:"#22c55e",warning:"#fbbf24",error:"#f87171",info:"#38bdf8"}},cyberpunk:{id:"cyberpunk",name:"Cyberpunk",icon:"🔮",colors:{background:"linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 100%)",surface:"rgba(10, 10, 10, 0.95)",surfaceHover:"rgba(26, 10, 46, 0.95)",primary:"#ff00ff",primaryGradient:"linear-gradient(135deg, #ff00ff, #00ffff)",secondary:"#00ffff",accent:"#ffff00",text:"#ffffff",textSecondary:"#e879f9",textMuted:"#a855f7",border:"rgba(255, 0, 255, 0.4)",success:"#00ff88",warning:"#ffff00",error:"#ff0055",info:"#00ffff"}},forest:{id:"forest",name:"Forest Green",icon:"🌲",colors:{background:"linear-gradient(135deg, #052e16 0%, #14532d 100%)",surface:"rgba(5, 46, 22, 0.95)",surfaceHover:"rgba(20, 83, 45, 0.95)",primary:"#22c55e",primaryGradient:"linear-gradient(135deg, #22c55e, #16a34a)",secondary:"#4ade80",accent:"#86efac",text:"#f0fdf4",textSecondary:"#bbf7d0",textMuted:"#4ade80",border:"rgba(34, 197, 94, 0.3)",success:"#4ade80",warning:"#fbbf24",error:"#f87171",info:"#38bdf8"}},sunset:{id:"sunset",name:"Sunset Orange",icon:"🌅",colors:{background:"linear-gradient(135deg, #1c1917 0%, #292524 100%)",surface:"rgba(28, 25, 23, 0.95)",surfaceHover:"rgba(41, 37, 36, 0.95)",primary:"#f97316",primaryGradient:"linear-gradient(135deg, #f97316, #ea580c)",secondary:"#fb923c",accent:"#fbbf24",text:"#fef3c7",textSecondary:"#fed7aa",textMuted:"#fdba74",border:"rgba(249, 115, 22, 0.3)",success:"#84cc16",warning:"#fbbf24",error:"#ef4444",info:"#38bdf8"}}},sg=({children:e})=>{const[r,n]=p.useState(()=>{const o=localStorage.getItem("app_theme");return o&&Bn[o]?o:"dark"}),a=Bn[r];p.useEffect(()=>{localStorage.setItem("app_theme",r);const o=document.documentElement;Object.entries(a.colors).forEach(([c,l])=>{o.style.setProperty(`--color-${c}`,l)}),document.body.style.background=a.colors.background,document.body.style.color=a.colors.text,document.body.style.transition="background 0.3s ease, color 0.3s ease"},[r,a]),p.useEffect(()=>{const o=window.matchMedia("(prefers-color-scheme: dark)"),c=l=>{localStorage.getItem("app_theme")||n(l.matches?"dark":"light")};return o.addEventListener("change",c),()=>o.removeEventListener("change",c)},[]);const i=o=>{Bn[o]&&n(o)},s=()=>{const o=Object.keys(Bn),l=(o.indexOf(r)+1)%o.length;n(o[l])};return t.jsx(ig.Provider,{value:{theme:a,currentTheme:r,themes:Bn,changeTheme:i,toggleTheme:s},children:e})},nd=({className:e,style:r})=>t.jsxs("svg",{className:e,style:r,viewBox:"0 0 200 280",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"hairGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#1a1a2e"}),t.jsx("stop",{offset:"100%",stopColor:"#16213e"})]}),t.jsxs("linearGradient",{id:"skinGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#fce5d8"}),t.jsx("stop",{offset:"100%",stopColor:"#f5d0c5"})]}),t.jsxs("linearGradient",{id:"shirtGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),t.jsx("stop",{offset:"100%",stopColor:"#4f46e5"})]}),t.jsxs("linearGradient",{id:"glowGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),t.jsx("stop",{offset:"50%",stopColor:"#8b5cf6"}),t.jsx("stop",{offset:"100%",stopColor:"#d946ef"})]}),t.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[t.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{in:"coloredBlur"}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),t.jsxs("filter",{id:"softGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[t.jsx("feGaussianBlur",{stdDeviation:"2",result:"blur"}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{in:"blur"}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),t.jsxs("g",{transform:"translate(130, 140)",filter:"url(#glow)",children:[t.jsx("path",{d:"M0 -40 L35 -25 L35 15 C35 35 0 55 0 55 C0 55 -35 35 -35 15 L-35 -25 Z",fill:"url(#shirtGradient)",opacity:"0.9",stroke:"#22d3ee",strokeWidth:"2"}),t.jsx("rect",{x:"-12",y:"-5",width:"24",height:"20",rx:"3",fill:"#0a0a1a"}),t.jsx("path",{d:"M-8 -5 L-8 -12 C-8 -20 8 -20 8 -12 L8 -5",stroke:"#22d3ee",strokeWidth:"3",fill:"none"}),t.jsx("circle",{cx:"0",cy:"5",r:"3",fill:"#22d3ee"})]}),t.jsxs("g",{transform:"translate(100, 100)",children:[t.jsx("path",{d:"M-45 80 C-45 60 -35 50 -20 45 L20 45 C35 50 45 60 45 80 L45 140 L-45 140 Z",fill:"#1e1e3f",stroke:"#6366f1",strokeWidth:"1"}),t.jsx("ellipse",{cx:"0",cy:"50",rx:"50",ry:"20",fill:"#1e1e3f"}),t.jsx("path",{d:"M0 50 L0 140",stroke:"#6366f1",strokeWidth:"1",opacity:"0.5"}),t.jsx("path",{d:"M-20 70 L-20 100",stroke:"#8b5cf6",strokeWidth:"2",opacity:"0.6"}),t.jsx("path",{d:"M20 70 L20 100",stroke:"#8b5cf6",strokeWidth:"2",opacity:"0.6"}),t.jsx("path",{d:"M-40 90 L-25 85 L-25 120",stroke:"#22d3ee",strokeWidth:"1.5",fill:"none",filter:"url(#softGlow)",opacity:"0.8"}),t.jsx("path",{d:"M40 90 L25 85 L25 120",stroke:"#22d3ee",strokeWidth:"1.5",fill:"none",filter:"url(#softGlow)",opacity:"0.8"})]}),t.jsxs("g",{transform:"translate(100, 85)",children:[t.jsx("ellipse",{cx:"0",cy:"0",rx:"35",ry:"40",fill:"url(#skinGradient)"}),t.jsxs("g",{transform:"translate(-12, -5)",children:[t.jsx("ellipse",{cx:"0",cy:"0",rx:"8",ry:"10",fill:"white"}),t.jsx("ellipse",{cx:"1",cy:"0",rx:"5",ry:"6",fill:"#4a3728"}),t.jsx("ellipse",{cx:"2",cy:"-1",rx:"2",ry:"2.5",fill:"#1a1a2e"}),t.jsx("ellipse",{cx:"3",cy:"-3",rx:"1.5",ry:"1.5",fill:"white",opacity:"0.9"})]}),t.jsxs("g",{transform:"translate(12, -5)",children:[t.jsx("ellipse",{cx:"0",cy:"0",rx:"8",ry:"10",fill:"white"}),t.jsx("ellipse",{cx:"1",cy:"0",rx:"5",ry:"6",fill:"#4a3728"}),t.jsx("ellipse",{cx:"2",cy:"-1",rx:"2",ry:"2.5",fill:"#1a1a2e"}),t.jsx("ellipse",{cx:"3",cy:"-3",rx:"1.5",ry:"1.5",fill:"white",opacity:"0.9"})]}),t.jsx("path",{d:"M-20 -18 Q-12 -22 -5 -18",stroke:"#1a1a2e",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M5 -18 Q12 -22 20 -18",stroke:"#1a1a2e",strokeWidth:"2",fill:"none"}),t.jsx("ellipse",{cx:"-22",cy:"8",rx:"6",ry:"3",fill:"#ffb3b3",opacity:"0.5"}),t.jsx("ellipse",{cx:"22",cy:"8",rx:"6",ry:"3",fill:"#ffb3b3",opacity:"0.5"}),t.jsx("path",{d:"M-8 18 Q0 24 8 18",stroke:"#c4a4a4",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M0 5 L0 12",stroke:"#e8c4b8",strokeWidth:"2",strokeLinecap:"round"})]}),t.jsxs("g",{transform:"translate(100, 60)",children:[t.jsx("ellipse",{cx:"0",cy:"0",rx:"45",ry:"35",fill:"url(#hairGradient)"}),t.jsx("path",{d:"M-40 10 Q-50 40 -45 80",stroke:"#1a1a2e",strokeWidth:"8",fill:"none"}),t.jsx("path",{d:"M40 10 Q50 40 45 80",stroke:"#1a1a2e",strokeWidth:"8",fill:"none"}),t.jsx("path",{d:"M-30 15 Q-25 35 -15 25",fill:"#16213e"}),t.jsx("path",{d:"M-20 10 Q-10 30 0 20",fill:"#1a1a2e"}),t.jsx("path",{d:"M0 10 Q10 30 20 20",fill:"#16213e"}),t.jsx("path",{d:"M15 15 Q25 35 30 25",fill:"#1a1a2e"}),t.jsx("path",{d:"M-15 -10 Q-5 -15 5 -10",stroke:"#4a4a8a",strokeWidth:"3",fill:"none",opacity:"0.5"}),t.jsx("rect",{x:"20",y:"20",width:"12",height:"6",rx:"2",fill:"#22d3ee",filter:"url(#softGlow)"})]}),t.jsxs("g",{transform:"translate(35, 130)",children:[t.jsx("ellipse",{cx:"0",cy:"40",rx:"12",ry:"15",fill:"url(#skinGradient)"}),t.jsx("rect",{x:"-4",y:"0",width:"8",height:"35",rx:"4",fill:"url(#skinGradient)"}),t.jsx("ellipse",{cx:"8",cy:"38",rx:"5",ry:"8",fill:"url(#skinGradient)"}),t.jsx("ellipse",{cx:"-8",cy:"40",rx:"5",ry:"7",fill:"url(#skinGradient)"})]}),t.jsxs("g",{transform:"translate(25, 50)",filter:"url(#softGlow)",children:[t.jsx("circle",{cx:"0",cy:"0",r:"12",stroke:"#22d3ee",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"0",cy:"0",rx:"12",ry:"5",stroke:"#22d3ee",strokeWidth:"1",fill:"none"}),t.jsx("line",{x1:"0",y1:"-12",x2:"0",y2:"12",stroke:"#22d3ee",strokeWidth:"1"}),t.jsx("line",{x1:"-12",y1:"0",x2:"12",y2:"0",stroke:"#22d3ee",strokeWidth:"1"})]}),t.jsxs("g",{transform:"translate(30, 180)",filter:"url(#softGlow)",children:[t.jsx("rect",{x:"-8",y:"0",width:"16",height:"12",rx:"2",fill:"#6366f1"}),t.jsx("path",{d:"M-5 0 L-5 -5 C-5 -10 5 -10 5 -5 L5 0",stroke:"#6366f1",strokeWidth:"2",fill:"none"}),t.jsx("circle",{cx:"0",cy:"5",r:"2",fill:"#22d3ee"})]}),t.jsxs("g",{transform:"translate(170, 220)",filter:"url(#softGlow)",children:[t.jsx("circle",{cx:"0",cy:"0",r:"10",fill:"#22d3ee",opacity:"0.3"}),t.jsx("path",{d:"M-5 0 L-2 4 L6 -4",stroke:"#22d3ee",strokeWidth:"2",fill:"none"})]}),t.jsxs("g",{fill:"#d946ef",opacity:"0.8",children:[t.jsx("circle",{cx:"60",cy:"40",r:"2"}),t.jsx("circle",{cx:"150",cy:"60",r:"1.5"}),t.jsx("circle",{cx:"170",cy:"180",r:"2"}),t.jsx("circle",{cx:"40",cy:"230",r:"1.5"})]}),t.jsx("text",{x:"100",y:"25",textAnchor:"middle",fill:"url(#glowGradient)",fontSize:"14",fontWeight:"bold",fontFamily:"Inter, sans-serif",filter:"url(#softGlow)",children:"CYBER SECURITY"})]}),og=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),lg=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),cg=()=>t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"16 18 22 12 16 6"}),t.jsx("polyline",{points:"8 6 2 12 8 18"})]}),dg=()=>t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),ug=()=>t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"})});function Qi(){return t.jsxs("footer",{className:"credit-footer",children:[t.jsxs("div",{className:"footer-container",children:[t.jsxs("div",{className:"footer-section",children:[t.jsx("span",{className:"label-text",children:"Powered by"}),t.jsxs("a",{href:"https://github.com/MuhammadLutfiMuzakiiVY",target:"_blank",rel:"noopener noreferrer",className:"developer-link",children:[t.jsx(og,{}),t.jsx("span",{className:"developer-name",children:"Muhammad Lutfi Muzaki"})]})]}),t.jsx("div",{className:"footer-section center-section",children:t.jsxs("div",{className:"pro-title-container",children:[t.jsxs("div",{className:"pro-title jedag-jedug",children:[t.jsx("div",{className:"title-icon code-icon",children:t.jsx(cg,{})}),t.jsx("span",{className:"title-text",children:"Developer & Software Engineer"}),t.jsx("span",{className:"title-divider",children:"×"}),t.jsx("div",{className:"title-icon shield-icon",children:t.jsx(dg,{})}),t.jsx("span",{className:"title-text cyber-text",children:"Cybersecurity Professional"})]}),t.jsx("div",{className:"glow-effect"})]})}),t.jsx("div",{className:"footer-section",children:t.jsx("div",{className:"made-with-container",children:t.jsxs("div",{className:"made-with jedag-jedug-alt",children:[t.jsx("span",{className:"crafted-text",children:"Crafted with"}),t.jsxs("div",{className:"heart-container",children:[t.jsx(lg,{}),t.jsx("div",{className:"heart-ring"})]}),t.jsx("span",{className:"in-text",children:"&"}),t.jsx(ug,{}),t.jsxs("span",{className:"location-text",children:[t.jsx("span",{className:"in-word",children:"in"}),t.jsx("span",{className:"country",children:"Indonesia"}),t.jsx("span",{className:"flag",children:"🇮🇩"})]})]})})})]}),t.jsx("style",{children:`
                .credit-footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(180deg, rgba(8, 8, 18, 0.9), rgba(12, 12, 28, 0.98));
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border-top: 1px solid rgba(99, 102, 241, 0.2);
                    padding: 0.875rem 2rem;
                    z-index: 1000;
                    overflow: hidden;
                }

                .credit-footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.5), transparent);
                    animation: borderGlow 3s ease-in-out infinite;
                }

                .footer-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1400px;
                    margin: 0 auto;
                    gap: 2rem;
                }

                .footer-section {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .center-section {
                    flex: 1;
                    justify-content: center;
                }

                /* Left Section - Developer */
                .label-text {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.7rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .developer-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-decoration: none;
                    padding: 0.4rem 0.875rem;
                    border-radius: 24px;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.12));
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .developer-link:hover {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
                    border-color: rgba(168, 85, 247, 0.4);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.25);
                }

                .developer-link svg {
                    color: #a78bfa;
                    transition: all 0.4s ease;
                }

                .developer-link:hover svg {
                    color: #c4b5fd;
                    transform: rotate(360deg);
                }

                .developer-name {
                    font-size: 0.8rem;
                    font-weight: 700;
                    background: linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6);
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s ease-in-out infinite;
                }

                /* Center Section - Pro Title with Jedag Jedug */
                .pro-title-container {
                    position: relative;
                }

                .pro-title {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    padding: 0.5rem 1.25rem;
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 211, 238, 0.1));
                    border: 1px solid rgba(16, 185, 129, 0.25);
                    border-radius: 30px;
                    position: relative;
                    z-index: 1;
                }

                .pro-title.jedag-jedug {
                    animation: jedagJedug 1.5s ease-in-out infinite;
                }

                .title-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                }

                .code-icon {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: white;
                    animation: iconPop 1.5s ease-in-out infinite;
                }

                .shield-icon {
                    background: linear-gradient(135deg, #10b981, #14b8a6);
                    color: white;
                    animation: iconPop 1.5s ease-in-out infinite 0.2s;
                }

                .title-text {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                    letter-spacing: 0.3px;
                }

                .cyber-text {
                    background: linear-gradient(90deg, #10b981, #22d3ee);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .title-divider {
                    color: rgba(255, 255, 255, 0.3);
                    font-weight: 300;
                    font-size: 0.875rem;
                }

                .glow-effect {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(ellipse, rgba(16, 185, 129, 0.2), transparent 70%);
                    border-radius: 30px;
                    animation: glowPulse 1.5s ease-in-out infinite;
                    pointer-events: none;
                }

                /* Right Section - Made with Love Jedag Jedug */
                .made-with-container {
                    position: relative;
                }

                .made-with {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1));
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    border-radius: 24px;
                    font-size: 0.75rem;
                }

                .made-with.jedag-jedug-alt {
                    animation: jedagJedugAlt 1.5s ease-in-out infinite 0.3s;
                }

                .crafted-text {
                    color: rgba(255, 255, 255, 0.6);
                    font-weight: 500;
                }

                .heart-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .heart-container svg {
                    color: #ef4444;
                    animation: heartBeat 0.8s ease-in-out infinite;
                    filter: drop-shadow(0 0 6px rgba(239, 68, 68, 0.6));
                    z-index: 1;
                }

                .heart-ring {
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border: 2px solid rgba(239, 68, 68, 0.4);
                    border-radius: 50%;
                    animation: ringExpand 1.5s ease-out infinite;
                }

                .in-text {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.7rem;
                }

                .made-with svg:not(.heart-container svg) {
                    color: #fbbf24;
                    animation: sparkle 1s ease-in-out infinite;
                }

                .location-text {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .in-word {
                    color: rgba(255, 255, 255, 0.5);
                }

                .country {
                    font-weight: 700;
                    background: linear-gradient(90deg, #ef4444, #fbbf24);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: textPulse 1.5s ease-in-out infinite;
                }

                .flag {
                    font-size: 0.875rem;
                    animation: flagWave 2s ease-in-out infinite;
                }

                /* Jedag Jedug Animations */
                @keyframes jedagJedug {
                    0%, 100% { 
                        transform: scale(1) translateY(0);
                        box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
                    }
                    10% { 
                        transform: scale(1.03) translateY(-3px);
                        box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
                    }
                    20% { 
                        transform: scale(0.98) translateY(1px);
                    }
                    30% { 
                        transform: scale(1.02) translateY(-2px);
                        box-shadow: 0 6px 25px rgba(34, 211, 238, 0.3);
                    }
                    40% { 
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes jedagJedugAlt {
                    0%, 100% { 
                        transform: scale(1) translateY(0);
                        box-shadow: 0 0 15px rgba(239, 68, 68, 0.15);
                    }
                    15% { 
                        transform: scale(1.04) translateY(-4px);
                        box-shadow: 0 10px 35px rgba(239, 68, 68, 0.35);
                    }
                    30% { 
                        transform: scale(0.97) translateY(2px);
                    }
                    45% { 
                        transform: scale(1.02) translateY(-2px);
                        box-shadow: 0 6px 25px rgba(251, 146, 60, 0.3);
                    }
                    60% { 
                        transform: scale(1) translateY(0);
                    }
                }

                @keyframes iconPop {
                    0%, 100% { transform: scale(1); }
                    20% { transform: scale(1.15); }
                    40% { transform: scale(1); }
                }

                @keyframes heartBeat {
                    0%, 100% { transform: scale(1); }
                    15% { transform: scale(1.25); }
                    30% { transform: scale(1); }
                    45% { transform: scale(1.2); }
                    60% { transform: scale(1); }
                }

                @keyframes ringExpand {
                    0% { 
                        width: 16px; 
                        height: 16px; 
                        opacity: 0.8;
                    }
                    100% { 
                        width: 40px; 
                        height: 40px; 
                        opacity: 0;
                    }
                }

                @keyframes glowPulse {
                    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
                }

                @keyframes sparkle {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
                    50% { transform: scale(1.2) rotate(180deg); opacity: 0.7; }
                }

                @keyframes textPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; filter: brightness(1.2); }
                }

                @keyframes flagWave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(8deg); }
                    75% { transform: rotate(-8deg); }
                }

                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes borderGlow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .footer-container {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .center-section {
                        order: -1;
                    }
                }

                @media (max-width: 600px) {
                    .credit-footer {
                        padding: 0.75rem 1rem;
                    }

                    .pro-title {
                        padding: 0.4rem 0.875rem;
                        gap: 0.4rem;
                    }

                    .title-text {
                        font-size: 0.65rem;
                    }

                    .title-icon {
                        width: 22px;
                        height: 22px;
                    }

                    .made-with {
                        padding: 0.4rem 0.75rem;
                        font-size: 0.65rem;
                    }

                    .developer-name {
                        font-size: 0.7rem;
                    }
                }
            `})]})}const pg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),t.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ad=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),t.jsx("polyline",{points:"22,6 12,13 2,6"})]}),id=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"})}),mg=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})}),fg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),t.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),hg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),t.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),In=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),gg=()=>t.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:[t.jsx("path",{fill:"#EA4335",d:"M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"}),t.jsx("path",{fill:"#34A853",d:"M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"}),t.jsx("path",{fill:"#4A90E2",d:"M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"})]}),Ts="/api/auth",xg="http://localhost:3000/api/auth";function bg(){const e=_t(),[r]=Xp(),{setUser:n,setAccessToken:a,setRefreshToken:i}=kr(),[s,o]=p.useState("credentials"),[c,l]=p.useState("email"),[m,h]=p.useState({email:"",phone:"",password:"",verificationCode:""}),[x,g]=p.useState(!1),[E,w]=p.useState(!1),[v,N]=p.useState({}),[d,u]=p.useState(!1),[f,j]=p.useState(""),[b,y]=p.useState(0);p.useEffect(()=>{r.get("error")&&j("Login dengan OAuth gagal. Silakan coba lagi.")},[r]),p.useEffect(()=>{if(b>0){const _=setTimeout(()=>y(b-1),1e3);return()=>clearTimeout(_)}},[b]);const I=()=>{const _={};return c==="email"?m.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email)||(_.email="Format email tidak valid"):_.email="Email wajib diisi":m.phone?/^(\+62|62|0)[0-9]{9,12}$/.test(m.phone.replace(/\s/g,""))||(_.phone="Format nomor HP tidak valid"):_.phone="Nomor HP wajib diisi",m.password?m.password.length<6&&(_.password="Password minimal 6 karakter"):_.password="Password wajib diisi",N(_),Object.keys(_).length===0},O=_=>{const{name:$,value:T}=_.target;h(C=>({...C,[$]:T})),v[$]&&N(C=>({...C,[$]:""})),j("")},R=async _=>{if(_.preventDefault(),!!I()){u(!0),j("");try{const $=await fetch(`${Ts}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c==="email"?m.email:m.phone,password:m.password})}),T=await $.json();if(!$.ok)throw new Error(T.message||"Login gagal");o("verification"),y(60)}catch($){j($.message)}finally{u(!1)}}},W=async _=>{if(_.preventDefault(),m.verificationCode.length!==7){N({verificationCode:"Kode harus 7 digit"});return}u(!0),j("");try{const $=await fetch(`${Ts}/verify-code`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c==="email"?m.email:m.phone,code:m.verificationCode})}),T=await $.json();if(!$.ok)throw new Error(T.message||"Kode tidak valid");a(T.accessToken),i(T.refreshToken),n(T.user),E&&(localStorage.setItem("accessToken",T.accessToken),localStorage.setItem("refreshToken",T.refreshToken),localStorage.setItem("user",JSON.stringify(T.user))),e("/dashboard")}catch($){j($.message)}finally{u(!1)}},q=async()=>{if(!(b>0)){u(!0);try{(await fetch(`${Ts}/resend-code`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c==="email"?m.email:m.phone})})).ok&&(y(60),j(""))}catch{j("Gagal mengirim ulang kode")}finally{u(!1)}}},J=_=>{window.location.href=`${xg}/${_}`};return t.jsxs("div",{className:"login-container",children:[t.jsx("div",{className:"animated-bg"}),t.jsx("div",{className:"grid-overlay"}),t.jsxs("div",{className:"orbs",children:[t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"})]}),t.jsx("div",{className:"particles",children:[...Array(12)].map((_,$)=>t.jsx("div",{className:"particle"},$))}),t.jsx("div",{className:"decoration-dots top-right"}),t.jsx("div",{className:"decoration-dots bottom-left"}),t.jsx("div",{className:"scanlines"}),t.jsx("div",{className:"crt-flicker"}),t.jsx("div",{className:"shock-wave"}),t.jsx("div",{className:"shock-wave"}),t.jsx("div",{className:"shock-wave"}),t.jsx("div",{className:"shock-wave"}),t.jsxs("div",{className:"lightning-container",children:[t.jsx("div",{className:"lightning"}),t.jsx("div",{className:"lightning"}),t.jsx("div",{className:"lightning"}),t.jsx("div",{className:"lightning"}),t.jsx("div",{className:"lightning"}),t.jsx("div",{className:"lightning"})]}),t.jsx("div",{className:"lightning-flash"}),t.jsxs("div",{className:"sparks",children:[t.jsx("div",{className:"spark"}),t.jsx("div",{className:"spark"}),t.jsx("div",{className:"spark"}),t.jsx("div",{className:"spark"}),t.jsx("div",{className:"spark"}),t.jsx("div",{className:"spark"})]}),t.jsxs("div",{className:"anime-particles left",children:[t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"})]}),t.jsx("div",{className:"anime-character anime-character-left",children:t.jsx(nd,{})}),t.jsx("div",{className:"anime-speech left",children:"⚡ Selamat datang di Lutfi-Lab.ID!"}),t.jsxs("div",{className:"anime-particles right",children:[t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"}),t.jsx("div",{className:"anime-particle"})]}),t.jsx("div",{className:"anime-character anime-character-right",children:t.jsx(nd,{})}),t.jsx("div",{className:"anime-speech right",children:"🔐 Keamanan adalah prioritas!"}),t.jsxs("div",{className:"glass-card login-card",children:[t.jsx("div",{className:"corner-decoration top-left"}),t.jsx("div",{className:"corner-decoration bottom-right"}),t.jsxs("div",{className:"login-brand",children:[t.jsx("div",{className:"brand-logo",children:t.jsx(pg,{})}),t.jsxs("h1",{className:"brand-name",children:[t.jsx("span",{className:"text-gradient",children:"Lutfi-Lab"}),".ID"]}),t.jsx("p",{className:"brand-tagline",children:"Platform Teknologi & Keamanan Siber"}),t.jsxs("div",{className:"developer-credit",children:[t.jsx("span",{className:"credit-name",children:"MUHAMMAD LUTFI MUZAKI"}),t.jsx("span",{className:"credit-role",children:"DEVELOPER & CYBERSECURITY"})]})]}),t.jsxs("div",{className:"login-header",children:[t.jsx("h2",{children:s==="credentials"?"Selamat Datang!":"🔐 Verifikasi Email"}),t.jsx("p",{children:s==="credentials"?"Pilih metode login yang Anda inginkan":"Masukkan kode 7 digit yang dikirim ke email Anda"})]}),f&&t.jsxs("div",{className:"alert alert-error",children:[t.jsx(In,{}),t.jsx("span",{children:f})]}),s==="credentials"?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"social-login-grid",children:t.jsxs("button",{className:"social-btn-full google",type:"button",onClick:()=>J("google"),children:[t.jsx(gg,{}),t.jsx("span",{children:"Lanjutkan dengan Google"})]})}),t.jsx("div",{className:"login-divider",children:t.jsx("span",{children:"atau login dengan"})}),t.jsxs("div",{className:"login-method-toggle",children:[t.jsxs("button",{type:"button",className:`method-btn ${c==="email"?"active":""}`,onClick:()=>l("email"),children:[t.jsx(ad,{}),"Email"]}),t.jsxs("button",{type:"button",className:`method-btn ${c==="phone"?"active":""}`,onClick:()=>l("phone"),children:[t.jsx(id,{}),"Nomor HP"]})]}),t.jsxs("form",{onSubmit:R,children:[c==="email"?t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"email",children:"Email"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(ad,{})}),t.jsx("input",{type:"email",id:"email",name:"email",className:`form-input ${v.email?"error":""}`,placeholder:"email@example.com",value:m.email,onChange:O})]}),v.email&&t.jsxs("p",{className:"form-error",children:[t.jsx(In,{}),v.email]})]}):t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"phone",children:"Nomor HP"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(id,{})}),t.jsx("input",{type:"tel",id:"phone",name:"phone",className:`form-input ${v.phone?"error":""}`,placeholder:"+62 812 3456 7890",value:m.phone,onChange:O})]}),v.phone&&t.jsxs("p",{className:"form-error",children:[t.jsx(In,{}),v.phone]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(mg,{})}),t.jsx("input",{type:x?"text":"password",id:"password",name:"password",className:`form-input ${v.password?"error":""}`,placeholder:"••••••••",value:m.password,onChange:O}),t.jsx("button",{type:"button",className:"password-toggle",onClick:()=>g(!x),children:x?t.jsx(hg,{}):t.jsx(fg,{})})]}),v.password&&t.jsxs("p",{className:"form-error",children:[t.jsx(In,{}),v.password]})]}),t.jsxs("div",{className:"form-options",children:[t.jsxs("label",{className:"remember-me",children:[t.jsx("input",{type:"checkbox",checked:E,onChange:_=>w(_.target.checked)}),"Ingat saya"]}),t.jsx(Do,{to:"/forgot-password",className:"forgot-password",children:"Lupa password?"})]}),t.jsx("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:d,children:d?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"spinner"}),"Memverifikasi..."]}):"Lanjutkan"})]})]}):t.jsxs("form",{onSubmit:W,children:[t.jsx("div",{className:"verification-info",children:t.jsxs("p",{children:["📧 Kode dikirim ke: ",t.jsx("strong",{children:m.email||m.phone})]})}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"verificationCode",children:"Kode Verifikasi (7 digit)"}),t.jsx("input",{type:"text",id:"verificationCode",name:"verificationCode",className:`form-input verification-input ${v.verificationCode?"error":""}`,placeholder:"0000000",value:m.verificationCode,onChange:O,maxLength:7,style:{textAlign:"center",fontSize:"1.5rem",letterSpacing:"0.5rem"}}),v.verificationCode&&t.jsxs("p",{className:"form-error",children:[t.jsx(In,{}),v.verificationCode]})]}),t.jsx("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:d,children:d?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"spinner"}),"Memverifikasi..."]}):"Verifikasi & Masuk"}),t.jsxs("div",{className:"resend-section",children:[t.jsx("button",{type:"button",className:"resend-btn",onClick:q,disabled:b>0||d,children:b>0?`Kirim ulang dalam ${b}s`:"Kirim ulang kode"}),t.jsx("button",{type:"button",className:"back-btn",onClick:()=>o("credentials"),children:"← Kembali"})]})]}),t.jsxs("div",{className:"login-footer",children:["Belum punya akun? ",t.jsx(Do,{to:"/register",children:"Daftar sekarang"})]})]}),t.jsx("style",{children:`
                .social-row {
                    display: flex;
                    gap: 0.75rem;
                }
                
                .social-btn-small {
                    flex: 1;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: var(--border-radius-md);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .social-btn-small:hover {
                    transform: translateY(-2px);
                    border-color: rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.06);
                }
                
                .verification-info {
                    text-align: center;
                    padding: 1rem;
                    background: rgba(99, 102, 241, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: var(--border-radius-md);
                    margin-bottom: 1.5rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }
                
                .verification-info strong {
                    color: var(--text-primary);
                }
                
                .resend-section {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1.5rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }
                
                .resend-btn, .back-btn {
                    background: none;
                    border: none;
                    color: var(--color-primary-light);
                    cursor: pointer;
                    font-size: 0.875rem;
                    font-family: var(--font-family);
                    transition: all 0.3s ease;
                }
                
                .resend-btn:hover:not(:disabled), .back-btn:hover {
                    color: var(--color-primary);
                }
                
                .resend-btn:disabled {
                    color: var(--text-muted);
                    cursor: not-allowed;
                }
            `}),t.jsx(Qi,{})]})}const vg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"8"}),t.jsx("path",{d:"m21 21-4.35-4.35"})]}),yg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),jg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"3 6 5 6 21 6"}),t.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),wg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]}),kg=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),t.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Ls=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Ng=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"23 4 23 10 17 10"}),t.jsx("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),$r="/api/users";function Sg(){const{accessToken:e,user:r}=kr(),[n,a]=p.useState([]),[i,s]=p.useState(!0),[o,c]=p.useState(""),[l,m]=p.useState(null),[h,x]=p.useState(1),[g,E]=p.useState(1),[w,v]=p.useState(0),[N,d]=p.useState(""),[u,f]=p.useState(""),[j,b]=p.useState(""),[y,I]=p.useState(null),[O,R]=p.useState(null),[W,q]=p.useState(null),[J,_]=p.useState({name:"",email:"",role:"",isVerified:!1}),[$,T]=p.useState(""),C=p.useCallback(async()=>{s(!0),c("");try{const k=new URLSearchParams({page:h.toString(),limit:"10"});N&&k.append("search",N),u&&k.append("role",u),j&&k.append("status",j);const H=await fetch(`${$r}?${k}`,{headers:{Authorization:`Bearer ${e}`}});if(!H.ok)throw new Error("Failed to fetch users");const U=await H.json();a(U.users),E(U.totalPages),v(U.total)}catch(k){c(k.message)}finally{s(!1)}},[e,h,N,u,j]),A=p.useCallback(async()=>{try{const k=await fetch(`${$r}/stats`,{headers:{Authorization:`Bearer ${e}`}});if(k.ok){const H=await k.json();m(H)}}catch(k){console.error("Failed to fetch stats:",k)}},[e]);p.useEffect(()=>{C(),A()},[C,A]);const P=k=>{_({name:k.name,email:k.email,role:k.role,isVerified:k.isVerified}),I(k)},L=async()=>{try{if(!(await fetch(`${$r}/${y._id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(J)})).ok)throw new Error("Failed to update user");I(null),C(),A()}catch(k){c(k.message)}},z=async()=>{try{if(!(await fetch(`${$r}/${O._id}`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}})).ok)throw new Error("Failed to delete user");R(null),C(),A()}catch(k){c(k.message)}},V=async()=>{try{if(!(await fetch(`${$r}/${W._id}/ban`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({reason:$})})).ok)throw new Error("Failed to ban user");q(null),T(""),C(),A()}catch(k){c(k.message)}},D=async k=>{try{if(!(await fetch(`${$r}/${k}/unban`,{method:"PATCH",headers:{Authorization:`Bearer ${e}`}})).ok)throw new Error("Failed to unban user");C(),A()}catch(H){c(H.message)}},B=k=>k?new Date(k).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Never",F=k=>({admin:"badge-admin",user:"badge-user",guest:"badge-guest"})[k]||"badge-user";return t.jsxs("div",{className:"user-management",children:[l&&t.jsxs("div",{className:"stats-grid",children:[t.jsxs("div",{className:"stat-card",children:[t.jsx("div",{className:"stat-value",children:l.total}),t.jsx("div",{className:"stat-label",children:"Total Users"})]}),t.jsxs("div",{className:"stat-card verified",children:[t.jsx("div",{className:"stat-value",children:l.verified}),t.jsx("div",{className:"stat-label",children:"Verified"})]}),t.jsxs("div",{className:"stat-card banned",children:[t.jsx("div",{className:"stat-value",children:l.banned}),t.jsx("div",{className:"stat-label",children:"Banned"})]}),t.jsxs("div",{className:"stat-card active",children:[t.jsx("div",{className:"stat-value",children:l.activeToday}),t.jsx("div",{className:"stat-label",children:"Active Today"})]})]}),t.jsxs("div",{className:"filters-bar",children:[t.jsxs("div",{className:"search-box",children:[t.jsx(vg,{}),t.jsx("input",{type:"text",placeholder:"Search users...",value:N,onChange:k=>{d(k.target.value),x(1)}})]}),t.jsxs("select",{value:u,onChange:k=>{f(k.target.value),x(1)},children:[t.jsx("option",{value:"",children:"All Roles"}),t.jsx("option",{value:"admin",children:"Admin"}),t.jsx("option",{value:"user",children:"User"}),t.jsx("option",{value:"guest",children:"Guest"})]}),t.jsxs("select",{value:j,onChange:k=>{b(k.target.value),x(1)},children:[t.jsx("option",{value:"",children:"All Status"}),t.jsx("option",{value:"verified",children:"Verified"}),t.jsx("option",{value:"unverified",children:"Unverified"}),t.jsx("option",{value:"banned",children:"Banned"})]}),t.jsx("button",{className:"btn-icon",onClick:()=>{C(),A()},children:t.jsx(Ng,{})})]}),o&&t.jsx("div",{className:"alert alert-error",children:o}),t.jsx("div",{className:"table-container",children:i?t.jsx("div",{className:"loading-state",children:"Loading..."}):n.length===0?t.jsx("div",{className:"empty-state",children:"No users found"}):t.jsxs("table",{className:"users-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"User"}),t.jsx("th",{children:"Role"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Verified"}),t.jsx("th",{children:"Last Login"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:n.map(k=>{var H,U;return t.jsxs("tr",{className:k.isBanned?"banned-row":"",children:[t.jsx("td",{children:t.jsxs("div",{className:"user-cell",children:[t.jsx("div",{className:"user-avatar",children:k.avatar?t.jsx("img",{src:k.avatar,alt:k.name}):t.jsx("span",{children:(U=(H=k.name)==null?void 0:H.charAt(0))==null?void 0:U.toUpperCase()})}),t.jsxs("div",{className:"user-info",children:[t.jsx("div",{className:"user-name",children:k.name}),t.jsx("div",{className:"user-email",children:k.email})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`badge ${F(k.role)}`,children:k.role})}),t.jsx("td",{children:k.isBanned?t.jsx("span",{className:"status-banned",children:"🚫 Banned"}):k.isActive?t.jsx("span",{className:"status-active",children:"✅ Active"}):t.jsx("span",{className:"status-inactive",children:"⏸️ Inactive"})}),t.jsx("td",{children:k.isVerified?t.jsx("span",{className:"verified-yes",children:"✓ Verified"}):t.jsx("span",{className:"verified-no",children:"✗ Unverified"})}),t.jsx("td",{className:"date-cell",children:B(k.lastLogin)}),t.jsx("td",{children:t.jsxs("div",{className:"action-buttons",children:[t.jsx("button",{className:"btn-action edit",onClick:()=>P(k),title:"Edit",children:t.jsx(yg,{})}),k.isBanned?t.jsx("button",{className:"btn-action unban",onClick:()=>D(k._id),title:"Unban",children:t.jsx(kg,{})}):t.jsx("button",{className:"btn-action ban",onClick:()=>q(k),title:"Ban",disabled:k._id===(r==null?void 0:r.id),children:t.jsx(wg,{})}),t.jsx("button",{className:"btn-action delete",onClick:()=>R(k),title:"Delete",disabled:k._id===(r==null?void 0:r.id),children:t.jsx(jg,{})})]})})]},k._id)})})]})}),g>1&&t.jsxs("div",{className:"pagination",children:[t.jsx("button",{disabled:h<=1,onClick:()=>x(k=>k-1),children:"Previous"}),t.jsxs("span",{children:["Page ",h," of ",g," (",w," users)"]}),t.jsx("button",{disabled:h>=g,onClick:()=>x(k=>k+1),children:"Next"})]}),y&&t.jsx("div",{className:"modal-overlay",onClick:()=>I(null),children:t.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{children:"Edit User"}),t.jsx("button",{className:"modal-close",onClick:()=>I(null),children:t.jsx(Ls,{})})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Name"}),t.jsx("input",{type:"text",value:J.name,onChange:k=>_({...J,name:k.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:J.email,onChange:k=>_({...J,email:k.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Role"}),t.jsxs("select",{value:J.role,onChange:k=>_({...J,role:k.target.value}),children:[t.jsx("option",{value:"admin",children:"Admin"}),t.jsx("option",{value:"user",children:"User"}),t.jsx("option",{value:"guest",children:"Guest"})]})]}),t.jsx("div",{className:"form-group checkbox",children:t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:J.isVerified,onChange:k=>_({...J,isVerified:k.target.checked})}),"Verified"]})})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"btn-secondary",onClick:()=>I(null),children:"Cancel"}),t.jsx("button",{className:"btn-primary",onClick:L,children:"Save Changes"})]})]})}),O&&t.jsx("div",{className:"modal-overlay",onClick:()=>R(null),children:t.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{children:"Delete User"}),t.jsx("button",{className:"modal-close",onClick:()=>R(null),children:t.jsx(Ls,{})})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("p",{children:["Are you sure you want to delete ",t.jsx("strong",{children:O.name}),"?"]}),t.jsx("p",{className:"warning-text",children:"This action cannot be undone."})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"btn-secondary",onClick:()=>R(null),children:"Cancel"}),t.jsx("button",{className:"btn-danger",onClick:z,children:"Delete"})]})]})}),W&&t.jsx("div",{className:"modal-overlay",onClick:()=>q(null),children:t.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{children:"Ban User"}),t.jsx("button",{className:"modal-close",onClick:()=>q(null),children:t.jsx(Ls,{})})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("p",{children:["Ban ",t.jsx("strong",{children:W.name}),"?"]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Reason (optional)"}),t.jsx("textarea",{value:$,onChange:k=>T(k.target.value),placeholder:"Enter ban reason..."})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"btn-secondary",onClick:()=>q(null),children:"Cancel"}),t.jsx("button",{className:"btn-danger",onClick:V,children:"Ban User"})]})]})}),t.jsx("style",{children:`
                .user-management {
                    padding: 1.5rem;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .stat-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 1.25rem;
                    text-align: center;
                }
                
                .stat-card.verified { border-color: rgba(52, 211, 153, 0.3); background: rgba(52, 211, 153, 0.1); }
                .stat-card.banned { border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.1); }
                .stat-card.active { border-color: rgba(99, 102, 241, 0.3); background: rgba(99, 102, 241, 0.1); }
                
                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }
                
                .stat-label {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    margin-top: 0.25rem;
                }
                
                .filters-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }
                
                .search-box {
                    flex: 1;
                    min-width: 200px;
                    position: relative;
                }
                
                .search-box svg {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-muted);
                }
                
                .search-box input {
                    width: 100%;
                    padding: 0.75rem 1rem 0.75rem 2.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }
                
                .search-box input:focus {
                    outline: none;
                    border-color: var(--primary);
                }
                
                .filters-bar select {
                    padding: 0.75rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    cursor: pointer;
                }
                
                .btn-icon {
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .btn-icon:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                
                .table-container {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    overflow: hidden;
                }
                
                .users-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                .users-table th,
                .users-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .users-table th {
                    background: rgba(255, 255, 255, 0.05);
                    font-weight: 600;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-secondary);
                }
                
                .users-table tbody tr:hover {
                    background: rgba(255, 255, 255, 0.03);
                }
                
                .banned-row {
                    opacity: 0.6;
                    background: rgba(239, 68, 68, 0.05);
                }
                
                .user-cell {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    color: white;
                    overflow: hidden;
                }
                
                .user-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .user-name {
                    font-weight: 500;
                    color: var(--text-primary);
                }
                
                .user-email {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }
                
                .badge {
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: capitalize;
                }
                
                .badge-admin { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
                .badge-user { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
                .badge-guest { background: rgba(156, 163, 175, 0.2); color: #9ca3af; }
                
                .status-active { color: #34d399; }
                .status-inactive { color: #9ca3af; }
                .status-banned { color: #f87171; }
                
                .verified-yes { color: #34d399; }
                .verified-no { color: #f87171; }
                
                .date-cell {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .btn-action {
                    padding: 0.5rem;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .btn-action:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }
                
                .btn-action.edit { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
                .btn-action.edit:hover:not(:disabled) { background: rgba(59, 130, 246, 0.3); }
                
                .btn-action.ban { background: rgba(251, 191, 36, 0.2); color: #fbbf24; }
                .btn-action.ban:hover:not(:disabled) { background: rgba(251, 191, 36, 0.3); }
                
                .btn-action.unban { background: rgba(52, 211, 153, 0.2); color: #34d399; }
                .btn-action.unban:hover:not(:disabled) { background: rgba(52, 211, 153, 0.3); }
                
                .btn-action.delete { background: rgba(239, 68, 68, 0.2); color: #f87171; }
                .btn-action.delete:hover:not(:disabled) { background: rgba(239, 68, 68, 0.3); }
                
                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .pagination button {
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    color: var(--text-primary);
                    cursor: pointer;
                }
                
                .pagination button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .pagination span {
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                }
                
                .loading-state,
                .empty-state {
                    text-align: center;
                    padding: 3rem;
                    color: var(--text-muted);
                }
                
                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                
                .modal {
                    background: var(--bg-secondary);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    width: 100%;
                    max-width: 420px;
                    margin: 1rem;
                }
                
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .modal-header h3 {
                    margin: 0;
                    font-size: 1.125rem;
                }
                
                .modal-close {
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    cursor: pointer;
                    padding: 0.25rem;
                }
                
                .modal-body {
                    padding: 1.25rem;
                }
                
                .modal-body .form-group {
                    margin-bottom: 1rem;
                }
                
                .modal-body label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }
                
                .modal-body input,
                .modal-body select,
                .modal-body textarea {
                    width: 100%;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }
                
                .modal-body textarea {
                    min-height: 80px;
                    resize: vertical;
                }
                
                .form-group.checkbox label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                }
                
                .form-group.checkbox input {
                    width: auto;
                }
                
                .warning-text {
                    color: #f87171;
                    font-size: 0.875rem;
                }
                
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.75rem;
                    padding: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .btn-secondary {
                    padding: 0.75rem 1.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                }
                
                .btn-primary {
                    padding: 0.75rem 1.5rem;
                    background: var(--primary);
                    border: none;
                    border-radius: 8px;
                    color: white;
                    cursor: pointer;
                }
                
                .btn-danger {
                    padding: 0.75rem 1.5rem;
                    background: #ef4444;
                    border: none;
                    border-radius: 8px;
                    color: white;
                    cursor: pointer;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .user-management {
                        padding: 1rem;
                    }

                    .users-table {
                        display: block;
                        overflow-x: auto;
                    }
                    
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.75rem;
                    }

                    .stat-card {
                        padding: 1rem;
                    }

                    .stat-value {
                        font-size: 1.5rem;
                    }

                    .filters-bar {
                        gap: 0.75rem;
                    }

                    .filters-bar select {
                        padding: 0.625rem 0.75rem;
                        font-size: 0.8rem;
                    }

                    .search-box {
                        min-width: 100%;
                    }

                    .pagination {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .pagination button {
                        width: 100%;
                    }
                }

                @media (max-width: 500px) {
                    .user-management {
                        padding: 0.75rem;
                    }

                    .stats-grid {
                        gap: 0.5rem;
                    }

                    .stat-card {
                        padding: 0.75rem;
                    }

                    .stat-value {
                        font-size: 1.25rem;
                    }

                    .stat-label {
                        font-size: 0.75rem;
                    }

                    .users-table th,
                    .users-table td {
                        padding: 0.75rem 0.5rem;
                        font-size: 0.8rem;
                    }

                    .user-cell {
                        min-width: 150px;
                    }

                    .user-avatar {
                        width: 32px;
                        height: 32px;
                        font-size: 0.75rem;
                    }

                    .user-name {
                        font-size: 0.875rem;
                    }

                    .user-email {
                        font-size: 0.7rem;
                    }

                    .date-cell {
                        font-size: 0.75rem;
                        white-space: nowrap;
                    }

                    .action-buttons {
                        gap: 0.25rem;
                    }

                    .btn-action {
                        padding: 0.375rem;
                    }

                    .modal {
                        margin: 0.5rem;
                        max-width: calc(100vw - 1rem);
                    }

                    .modal-header {
                        padding: 1rem;
                    }

                    .modal-body {
                        padding: 1rem;
                    }

                    .modal-footer {
                        padding: 1rem;
                        flex-direction: column;
                    }

                    .modal-footer button {
                        width: 100%;
                    }
                }

                @media (max-width: 375px) {
                    .stat-value {
                        font-size: 1.1rem;
                    }

                    .users-table th,
                    .users-table td {
                        padding: 0.5rem 0.375rem;
                        font-size: 0.75rem;
                    }
                }
            `})]})}const Va={wK:"♔",wQ:"♕",wR:"♖",wB:"♗",wN:"♘",wP:"♙",bK:"♚",bQ:"♛",bR:"♜",bB:"♝",bN:"♞",bP:"♟"},Cg={P:100,N:320,B:330,R:500,Q:900,K:2e4},zg=[[0,0,0,0,0,0,0,0],[50,50,50,50,50,50,50,50],[10,10,20,30,30,20,10,10],[5,5,10,25,25,10,5,5],[0,0,0,20,20,0,0,0],[5,-5,-10,0,0,-10,-5,5],[5,10,10,-20,-20,10,10,5],[0,0,0,0,0,0,0,0]],Tg=[[-50,-40,-30,-30,-30,-30,-40,-50],[-40,-20,0,0,0,0,-20,-40],[-30,0,10,15,15,10,0,-30],[-30,5,15,20,20,15,5,-30],[-30,0,15,20,20,15,0,-30],[-30,5,10,15,15,10,5,-30],[-40,-20,0,5,5,0,-20,-40],[-50,-40,-30,-30,-30,-30,-40,-50]],Lg=[[-20,-10,-10,-10,-10,-10,-10,-20],[-10,0,0,0,0,0,0,-10],[-10,0,5,10,10,5,0,-10],[-10,5,5,10,10,5,5,-10],[-10,0,10,10,10,10,0,-10],[-10,10,10,10,10,10,10,-10],[-10,5,0,0,0,0,5,-10],[-20,-10,-10,-10,-10,-10,-10,-20]],Eg=[[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-20,-30,-30,-40,-40,-30,-30,-20],[-10,-20,-20,-20,-20,-20,-20,-10],[20,20,0,0,0,0,20,20],[20,30,10,0,0,10,30,20]],sd=[["bR","bN","bB","bQ","bK","bB","bN","bR"],["bP","bP","bP","bP","bP","bP","bP","bP"],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["wP","wP","wP","wP","wP","wP","wP","wP"],["wR","wN","wB","wQ","wK","wB","wN","wR"]];function Mg(){const[e,r]=p.useState(sd.map(L=>[...L])),[n,a]=p.useState(null),[i,s]=p.useState([]),[o,c]=p.useState("w"),[l,m]=p.useState("playing"),[h,x]=p.useState([]),[g,E]=p.useState({w:[],b:[]}),[w,v]=p.useState(!1),[N,d]=p.useState(4),u=(L,z)=>L>=0&&L<8&&z>=0&&z<8,f=L=>L?L[0]:null,j=L=>L?L[1]:null,b=L=>L.map(z=>[...z]),y=p.useCallback((L,z)=>{for(let V=0;V<8;V++)for(let D=0;D<8;D++)if(L[V][D]===z+"K")return[V,D];return null},[]),I=p.useCallback((L,z,V,D)=>{const B=D==="w"?1:-1;if(u(z+B,V-1)&&L[z+B][V-1]===D+"P"||u(z+B,V+1)&&L[z+B][V+1]===D+"P")return!0;const F=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const[Y,ae]of F){const ne=z+Y,pe=V+ae;if(u(ne,pe)&&L[ne][pe]===D+"N")return!0}const k=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[Y,ae]of k){const ne=z+Y,pe=V+ae;if(u(ne,pe)&&L[ne][pe]===D+"K")return!0}const H=[[-1,0],[1,0],[0,-1],[0,1]];for(const[Y,ae]of H){let ne=z+Y,pe=V+ae;for(;u(ne,pe);){const ce=L[ne][pe];if(ce){if(f(ce)===D&&(ce[1]==="R"||ce[1]==="Q"))return!0;break}ne+=Y,pe+=ae}}const U=[[-1,-1],[-1,1],[1,-1],[1,1]];for(const[Y,ae]of U){let ne=z+Y,pe=V+ae;for(;u(ne,pe);){const ce=L[ne][pe];if(ce){if(f(ce)===D&&(ce[1]==="B"||ce[1]==="Q"))return!0;break}ne+=Y,pe+=ae}}return!1},[]),O=p.useCallback((L,z)=>{const V=y(L,z);if(!V)return!1;const D=z==="w"?"b":"w";return I(L,V[0],V[1],D)},[y,I]),R=p.useCallback((L,z,V,D=!0)=>{var Y,ae;const B=L[z][V];if(!B)return[];const F=f(B),k=j(B),H=[],U=(ne,pe)=>{if(!u(ne,pe))return;const ce=L[ne][pe];if(!(ce&&f(ce)===F)){if(D){const fe=b(L);if(fe[ne][pe]=B,fe[z][V]=null,O(fe,F))return}H.push([ne,pe])}};if(k==="P"){const ne=F==="w"?-1:1,pe=F==="w"?6:1;(Y=L[z+ne])!=null&&Y[V]||(U(z+ne,V),z===pe&&!((ae=L[z+2*ne])!=null&&ae[V])&&U(z+2*ne,V));for(const ce of[-1,1]){const fe=V+ce;u(z+ne,fe)&&L[z+ne][fe]&&f(L[z+ne][fe])!==F&&U(z+ne,fe)}}else if(k==="N"){const ne=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const[pe,ce]of ne)U(z+pe,V+ce)}else if(k==="K"){const ne=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[pe,ce]of ne)U(z+pe,V+ce)}else if(k==="R"||k==="Q"){const ne=[[-1,0],[1,0],[0,-1],[0,1]];for(const[pe,ce]of ne){let fe=z+pe,ke=V+ce;for(;u(fe,ke);){const M=L[fe][ke];if(M){f(M)!==F&&U(fe,ke);break}U(fe,ke),fe+=pe,ke+=ce}}}if(k==="B"||k==="Q"){const ne=[[-1,-1],[-1,1],[1,-1],[1,1]];for(const[pe,ce]of ne){let fe=z+pe,ke=V+ce;for(;u(fe,ke);){const M=L[fe][ke];if(M){f(M)!==F&&U(fe,ke);break}U(fe,ke),fe+=pe,ke+=ce}}}return H},[O]),W=p.useCallback((L,z)=>{const V=[];for(let D=0;D<8;D++)for(let B=0;B<8;B++)if(L[D][B]&&f(L[D][B])===z){const F=R(L,D,B,!0);for(const[k,H]of F)V.push({from:[D,B],to:[k,H],piece:L[D][B]})}return V},[R]),q=p.useCallback(L=>{let z=0;for(let V=0;V<8;V++)for(let D=0;D<8;D++){const B=L[V][D];if(!B)continue;const F=f(B),k=j(B),H=F==="b"?1:-1;z+=Cg[k]*H;const U=F==="b"?V:7-V;k==="P"?z+=zg[U][D]*H:k==="N"?z+=Tg[U][D]*H:k==="B"?z+=Lg[U][D]*H:k==="K"&&(z+=Eg[U][D]*H)}return z},[]),J=p.useCallback((L,z,V,D,B)=>{if(z===0)return q(L);const F=B?"b":"w",k=W(L,F);if(k.length===0)return O(L,F)?B?-99999:99999:0;if(B){let H=-1/0;for(const U of k){const Y=b(L);Y[U.to[0]][U.to[1]]=U.piece,Y[U.from[0]][U.from[1]]=null,U.piece==="bP"&&U.to[0]===7&&(Y[U.to[0]][U.to[1]]="bQ");const ae=J(Y,z-1,V,D,!1);if(H=Math.max(H,ae),V=Math.max(V,ae),D<=V)break}return H}else{let H=1/0;for(const U of k){const Y=b(L);Y[U.to[0]][U.to[1]]=U.piece,Y[U.from[0]][U.from[1]]=null,U.piece==="wP"&&U.to[0]===0&&(Y[U.to[0]][U.to[1]]="wQ");const ae=J(Y,z-1,V,D,!0);if(H=Math.min(H,ae),D=Math.min(D,ae),D<=V)break}return H}},[q,W,O]),_=p.useCallback(()=>{const L=W(e,"b");if(L.length===0)return;let z=null,V=-1/0;for(const D of L){const B=b(e);B[D.to[0]][D.to[1]]=D.piece,B[D.from[0]][D.from[1]]=null,D.piece==="bP"&&D.to[0]===7&&(B[D.to[0]][D.to[1]]="bQ");const F=J(B,N-1,-1/0,1/0,!1);F>V&&(V=F,z=D)}if(z){const D=b(e),B=D[z.to[0]][z.to[1]];D[z.to[0]][z.to[1]]=z.piece,D[z.from[0]][z.from[1]]=null,z.piece==="bP"&&z.to[0]===7&&(D[z.to[0]][z.to[1]]="bQ"),B&&E(H=>({...H,b:[...H.b,B]})),r(D),x(H=>[...H,{piece:z.piece,from:z.from,to:z.to,captured:B}]),c("w");const F=O(D,"w");W(D,"w").length===0?m(F?"checkmate":"stalemate"):m(F?"check":"playing")}v(!1)},[e,N,W,J,O]);p.useEffect(()=>{(o==="b"&&l==="playing"||l==="check")&&o==="b"&&(v(!0),setTimeout(_,500))},[o,l,_]);const $=(L,z)=>{if(o!=="w"||w||l==="checkmate"||l==="stalemate")return;const V=e[L][z];if(n){const[D,B]=n;if(i.some(([k,H])=>k===L&&H===z)){const k=b(e),H=k[D][B],U=k[L][z];k[L][z]=H,k[D][B]=null,H==="wP"&&L===0&&(k[L][z]="wQ"),U&&E(ne=>({...ne,w:[...ne.w,U]})),r(k),x(ne=>[...ne,{piece:H,from:[D,B],to:[L,z],captured:U}]),a(null),s([]),c("b");const Y=O(k,"b");W(k,"b").length===0?m(Y?"checkmate":"stalemate"):m(Y?"check":"playing")}else V&&f(V)==="w"?(a([L,z]),s(R(e,L,z))):(a(null),s([]))}else V&&f(V)==="w"&&(a([L,z]),s(R(e,L,z)))},T=()=>{r(sd.map(L=>[...L])),a(null),s([]),c("w"),m("playing"),x([]),E({w:[],b:[]}),v(!1)},C=(L,z)=>(L+z)%2===0?"light":"dark",A=(L,z)=>n&&n[0]===L&&n[1]===z,P=(L,z)=>i.some(([V,D])=>V===L&&D===z);return t.jsxs("div",{className:"chess-game",children:[t.jsxs("div",{className:"chess-container",children:[t.jsxs("div",{className:"game-info",children:[t.jsxs("div",{className:"game-header",children:[t.jsx("h2",{children:"♟️ Chess vs AI"}),t.jsxs("select",{value:N,onChange:L=>d(Number(L.target.value)),disabled:h.length>0,children:[t.jsx("option",{value:2,children:"Easy"}),t.jsx("option",{value:3,children:"Medium"}),t.jsx("option",{value:4,children:"Hard"}),t.jsx("option",{value:5,children:"Expert"})]})]}),t.jsx("div",{className:"game-status",children:w?t.jsxs("div",{className:"thinking",children:[t.jsx("div",{className:"thinking-spinner"}),t.jsx("span",{children:"AI sedang berpikir..."})]}):l==="checkmate"?t.jsxs("div",{className:"status checkmate",children:["🏆 ",o==="w"?"AI Menang!":"Anda Menang!"]}):l==="stalemate"?t.jsx("div",{className:"status stalemate",children:"🤝 Seri (Stalemate)"}):l==="check"?t.jsx("div",{className:"status check",children:"⚠️ Check!"}):t.jsx("div",{className:"status",children:o==="w"?"⚪ Giliran Anda":"⚫ Giliran AI"})}),t.jsxs("div",{className:"captured",children:[t.jsxs("div",{className:"captured-row",children:[t.jsx("span",{children:"Anda tangkap:"}),t.jsx("div",{className:"captured-pieces",children:g.w.map((L,z)=>t.jsx("span",{className:"captured-piece",children:Va[L]},z))})]}),t.jsxs("div",{className:"captured-row",children:[t.jsx("span",{children:"AI tangkap:"}),t.jsx("div",{className:"captured-pieces",children:g.b.map((L,z)=>t.jsx("span",{className:"captured-piece",children:Va[L]},z))})]})]}),t.jsx("button",{className:"reset-btn",onClick:T,children:"🔄 Mulai Ulang"})]}),t.jsxs("div",{className:"chess-board",children:[e.map((L,z)=>t.jsxs("div",{className:"board-row",children:[t.jsx("span",{className:"coord-label row-label",children:8-z}),L.map((V,D)=>t.jsxs("div",{className:`square ${C(z,D)} 
                                        ${A(z,D)?"selected":""} 
                                        ${P(z,D)?"valid-move":""}
                                        ${V&&P(z,D)?"can-capture":""}`,onClick:()=>$(z,D),children:[V&&t.jsx("span",{className:`piece ${f(V)}`,children:Va[V]}),P(z,D)&&!V&&t.jsx("div",{className:"move-indicator"})]},D))]},z)),t.jsxs("div",{className:"board-row coord-row",children:[t.jsx("span",{className:"coord-label"}),["a","b","c","d","e","f","g","h"].map(L=>t.jsx("span",{className:"coord-label col-label",children:L},L))]})]}),t.jsxs("div",{className:"move-history",children:[t.jsx("h3",{children:"📜 Riwayat"}),t.jsx("div",{className:"moves-list",children:h.length===0?t.jsx("p",{className:"no-moves",children:"Belum ada gerakan"}):h.map((L,z)=>t.jsxs("div",{className:`move-item ${f(L.piece)}`,children:[t.jsxs("span",{className:"move-num",children:[Math.floor(z/2)+1,"."]}),t.jsx("span",{className:"move-piece",children:Va[L.piece]}),t.jsxs("span",{className:"move-notation",children:[String.fromCharCode(97+L.from[1]),8-L.from[0],L.captured?"x":"→",String.fromCharCode(97+L.to[1]),8-L.to[0]]})]},z))})]})]}),t.jsx("style",{children:`
                .chess-game {
                    padding: 1.5rem;
                }

                .chess-container {
                    display: grid;
                    grid-template-columns: 200px 1fr 180px;
                    gap: 1.5rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .game-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .game-header {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .game-header h2 {
                    font-size: 1.25rem;
                    margin: 0;
                }

                .game-header select {
                    padding: 0.5rem;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }

                .game-status {
                    padding: 1rem;
                    background: rgba(255,255,255,0.05);
                    border-radius: 10px;
                    text-align: center;
                }

                .game-status .status {
                    font-weight: 600;
                }

                .status.check { color: #f59e0b; }
                .status.checkmate { color: #ef4444; }
                .status.stalemate { color: #6b7280; }

                .thinking {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .thinking-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255,255,255,0.2);
                    border-top-color: var(--primary);
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                .captured {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .captured-row {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .captured-pieces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.25rem;
                    min-height: 24px;
                }

                .captured-piece {
                    font-size: 1rem;
                }

                .reset-btn {
                    padding: 0.75rem;
                    background: var(--gradient-primary);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .reset-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
                }

                .chess-board {
                    background: #1a1a2e;
                    border-radius: 12px;
                    padding: 0.5rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                }

                .board-row {
                    display: flex;
                    align-items: center;
                }

                .coord-label {
                    width: 20px;
                    text-align: center;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .col-label {
                    flex: 1;
                    text-align: center;
                }

                .coord-row {
                    margin-top: 4px;
                }

                .square {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.15s ease;
                }

                .square.light { background: #eeeed2; }
                .square.dark { background: #769656; }

                .square.selected {
                    background: #f6f669 !important;
                }

                .square.valid-move {
                    cursor: pointer;
                }

                .square.can-capture {
                    background: #ff6b6b !important;
                }

                .square:hover {
                    filter: brightness(1.1);
                }

                .move-indicator {
                    width: 14px;
                    height: 14px;
                    background: rgba(0,0,0,0.2);
                    border-radius: 50%;
                }

                .piece {
                    font-size: 2.25rem;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
                    user-select: none;
                    transition: transform 0.1s ease;
                }

                .piece.w { color: #fff; text-shadow: 0 0 3px #000, 0 0 3px #000; }
                .piece.b { color: #000; }

                .square:hover .piece {
                    transform: scale(1.1);
                }

                .move-history {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 12px;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                }

                .move-history h3 {
                    font-size: 0.875rem;
                    margin: 0 0 0.75rem 0;
                    color: var(--text-secondary);
                }

                .moves-list {
                    flex: 1;
                    overflow-y: auto;
                    max-height: 350px;
                }

                .no-moves {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-style: italic;
                }

                .move-item {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.25rem 0.5rem;
                    font-size: 0.75rem;
                    border-radius: 4px;
                    margin-bottom: 0.25rem;
                }

                .move-item.w { background: rgba(255,255,255,0.1); }
                .move-item.b { background: rgba(0,0,0,0.3); }

                .move-num { 
                    color: var(--text-muted); 
                    min-width: 20px;
                }

                .move-piece {
                    font-size: 1rem;
                }

                .move-notation {
                    color: var(--text-secondary);
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* Tablet */
                @media (max-width: 900px) {
                    .chess-container {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .game-info {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 0.75rem;
                    }

                    .game-header {
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;
                    }

                    .chess-board {
                        justify-self: center;
                    }

                    .move-history {
                        max-height: 120px;
                    }
                }

                /* Mobile Large (iPhone 14 Pro Max, etc) */
                @media (max-width: 768px) {
                    .chess-game {
                        padding: 0.5rem;
                    }

                    .game-info {
                        gap: 0.5rem;
                    }

                    .game-header h2 {
                        font-size: 1rem;
                    }

                    .game-status {
                        padding: 0.75rem;
                    }

                    .captured {
                        display: none;
                    }

                    .reset-btn {
                        padding: 0.5rem 1rem;
                        font-size: 0.875rem;
                    }
                }

                /* Mobile Medium (iPhone 12, 13, 14 - 430px) */
                @media (max-width: 500px) {
                    .chess-game {
                        padding: 0.25rem;
                    }

                    .chess-board {
                        padding: 0.25rem;
                    }

                    .square {
                        width: calc((100vw - 60px) / 8);
                        height: calc((100vw - 60px) / 8);
                        max-width: 40px;
                        max-height: 40px;
                    }

                    .piece {
                        font-size: 1.5rem;
                    }

                    .coord-label {
                        width: 14px;
                        font-size: 0.6rem;
                    }

                    .game-header {
                        flex-direction: column;
                        gap: 0.5rem;
                    }

                    .game-header h2 {
                        font-size: 0.9rem;
                    }

                    .game-header select {
                        padding: 0.375rem;
                        font-size: 0.75rem;
                    }

                    .game-status {
                        padding: 0.5rem;
                        font-size: 0.8rem;
                    }

                    .thinking span {
                        font-size: 0.75rem;
                    }

                    .move-history {
                        padding: 0.5rem;
                        max-height: 100px;
                    }

                    .move-history h3 {
                        font-size: 0.75rem;
                    }

                    .move-item {
                        font-size: 0.65rem;
                        padding: 0.2rem 0.4rem;
                    }
                }

                /* Mobile Small (iPhone SE, older phones - 375px) */
                @media (max-width: 375px) {
                    .square {
                        width: calc((100vw - 50px) / 8);
                        height: calc((100vw - 50px) / 8);
                        max-width: 36px;
                        max-height: 36px;
                    }

                    .piece {
                        font-size: 1.25rem;
                    }

                    .coord-label {
                        width: 12px;
                        font-size: 0.5rem;
                    }

                    .game-header h2 {
                        font-size: 0.8rem;
                    }

                    .move-history {
                        display: none;
                    }
                }
            `})]})}const Pg=[{combo:[0,1,2],line:"row-1"},{combo:[3,4,5],line:"row-2"},{combo:[6,7,8],line:"row-3"},{combo:[0,3,6],line:"col-1"},{combo:[1,4,7],line:"col-2"},{combo:[2,5,8],line:"col-3"},{combo:[0,4,8],line:"diag-1"},{combo:[2,4,6],line:"diag-2"}],Dg=()=>t.jsxs("svg",{viewBox:"0 0 100 100",className:"x-icon",children:[t.jsx("line",{x1:"20",y1:"20",x2:"80",y2:"80",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"}),t.jsx("line",{x1:"80",y1:"20",x2:"20",y2:"80",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"})]}),Ag=()=>t.jsx("svg",{viewBox:"0 0 100 100",className:"o-icon",children:t.jsx("circle",{cx:"50",cy:"50",r:"35",stroke:"currentColor",strokeWidth:"12",fill:"none"})}),od=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M1 4v6h6"}),t.jsx("path",{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"})]}),Es=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Bg=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),t.jsx("circle",{cx:"12",cy:"5",r:"2"}),t.jsx("path",{d:"M12 7v4"}),t.jsx("line",{x1:"8",y1:"16",x2:"8",y2:"16",strokeWidth:"3",strokeLinecap:"round"}),t.jsx("line",{x1:"16",y1:"16",x2:"16",y2:"16",strokeWidth:"3",strokeLinecap:"round"})]}),ld=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),t.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),cd=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),t.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),t.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}),dd=()=>t.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]});function Ig(){const[e,r]=p.useState(Array(9).fill(null)),[n,a]=p.useState(!0),[i,s]=p.useState(null),[o,c]=p.useState(null),[l,m]=p.useState([]),[h,x]=p.useState(null),[g,E]=p.useState("medium"),[w,v]=p.useState({x:0,o:0,draws:0}),[N,d]=p.useState(!1),[u,f]=p.useState(!0),[j,b]=p.useState(!1),[y,I]=p.useState({x:"Player 1",o:"Player 2"}),[O,R]=p.useState(null),[W,q]=p.useState(""),J=p.useRef(null);p.useEffect(()=>(J.current=new(window.AudioContext||window.webkitAudioContext),()=>{J.current&&J.current.close()}),[]);const _=p.useCallback(D=>{if(!u||!J.current)return;const B=J.current,F=B.createOscillator(),k=B.createGain();F.connect(k),k.connect(B.destination),D==="tap"?(F.frequency.setValueAtTime(800,B.currentTime),F.frequency.exponentialRampToValueAtTime(600,B.currentTime+.1),k.gain.setValueAtTime(.1,B.currentTime),k.gain.exponentialRampToValueAtTime(.01,B.currentTime+.1),F.start(B.currentTime),F.stop(B.currentTime+.1)):D==="win"?(F.frequency.setValueAtTime(523,B.currentTime),F.frequency.setValueAtTime(659,B.currentTime+.15),F.frequency.setValueAtTime(784,B.currentTime+.3),k.gain.setValueAtTime(.15,B.currentTime),k.gain.exponentialRampToValueAtTime(.01,B.currentTime+.5),F.start(B.currentTime),F.stop(B.currentTime+.5)):D==="draw"&&(F.frequency.setValueAtTime(400,B.currentTime),F.frequency.setValueAtTime(350,B.currentTime+.15),F.frequency.setValueAtTime(300,B.currentTime+.3),k.gain.setValueAtTime(.1,B.currentTime),k.gain.exponentialRampToValueAtTime(.01,B.currentTime+.4),F.start(B.currentTime),F.stop(B.currentTime+.4))},[u]),$=p.useCallback(D=>{for(let{combo:B,line:F}of Pg){const[k,H,U]=B;if(D[k]&&D[k]===D[H]&&D[k]===D[U])return{winner:D[k],line:F,cells:B}}return D.every(B=>B!==null)?{winner:"draw",line:null,cells:[]}:null},[]),T=p.useCallback((D,B)=>{const F=D.map((Y,ae)=>Y===null?ae:null).filter(Y=>Y!==null);if(F.length===0)return null;if(B==="easy"||B==="medium"&&Math.random()<.4)return F[Math.floor(Math.random()*F.length)];const k=(Y,ae,ne)=>{const pe=$(Y);if(pe)return pe.winner==="O"?10-ae:pe.winner==="X"?ae-10:0;if(ne){let ce=-1/0;for(let fe=0;fe<9;fe++)if(Y[fe]===null){Y[fe]="O";const ke=k(Y,ae+1,!1);Y[fe]=null,ce=Math.max(ke,ce)}return ce}else{let ce=1/0;for(let fe=0;fe<9;fe++)if(Y[fe]===null){Y[fe]="X";const ke=k(Y,ae+1,!0);Y[fe]=null,ce=Math.min(ke,ce)}return ce}};let H=null,U=-1/0;for(let Y=0;Y<9;Y++)if(D[Y]===null){D[Y]="O";const ae=k(D,0,!1);D[Y]=null,ae>U&&(U=ae,H=Y)}return H},[$]);p.useEffect(()=>{if(h==="pve"&&!n&&!i){d(!0);const D=setTimeout(()=>{const B=T([...e],g);if(B!==null){_("tap");const F=[...e];F[B]="O",r(F);const k=$(F);k&&(s(k.winner),c(k.line),m(k.cells),b(!0),k.winner==="O"?(v(H=>({...H,o:H.o+1})),_("win")):k.winner==="draw"&&(v(H=>({...H,draws:H.draws+1})),_("draw"))),a(!0)}d(!1)},600);return()=>clearTimeout(D)}},[n,h,i,e,g,T,$,_]);const C=D=>{if(e[D]||i||h==="pve"&&!n||N)return;_("tap");const B=[...e];B[D]=n?"X":"O",r(B);const F=$(B);F&&(s(F.winner),c(F.line),m(F.cells),b(!0),F.winner==="X"?(v(k=>({...k,x:k.x+1})),_("win")):F.winner==="O"?(v(k=>({...k,o:k.o+1})),_("win")):(v(k=>({...k,draws:k.draws+1})),_("draw"))),a(!n)},A=()=>{r(Array(9).fill(null)),a(!0),s(null),c(null),m([]),b(!1)},P=()=>{A(),v({x:0,o:0,draws:0}),x(null)},L=D=>{R(D),q(y[D])},z=()=>{W.trim()&&I(D=>({...D,[O]:W.trim()})),R(null),q("")};if(!h)return t.jsxs("div",{className:"tictactoe-container",children:[t.jsxs("div",{className:"mode-selection",children:[t.jsx("h2",{children:"🎮 Tic-Tac-Toe"}),t.jsx("p",{children:"Pilih mode permainan"}),t.jsxs("div",{className:"mode-buttons",children:[t.jsxs("button",{className:"mode-btn pvp",onClick:()=>{x("pvp"),I({x:"Player 1",o:"Player 2"})},children:[t.jsxs("div",{className:"mode-icon",children:[t.jsx(Es,{}),t.jsx("span",{children:"vs"}),t.jsx(Es,{})]}),t.jsx("span",{className:"mode-label",children:"Player vs Player"}),t.jsx("span",{className:"mode-desc",children:"Main dengan teman"})]}),t.jsxs("button",{className:"mode-btn pve",onClick:()=>{x("pve"),I({x:"You",o:"AI"})},children:[t.jsxs("div",{className:"mode-icon",children:[t.jsx(Es,{}),t.jsx("span",{children:"vs"}),t.jsx(Bg,{})]}),t.jsx("span",{className:"mode-label",children:"Player vs AI"}),t.jsx("span",{className:"mode-desc",children:"Tantang komputer"})]})]}),t.jsxs("div",{className:"difficulty-section",children:[t.jsx("p",{children:"Tingkat kesulitan AI:"}),t.jsx("div",{className:"difficulty-buttons",children:["easy","medium","hard"].map(D=>t.jsx("button",{className:`diff-btn ${g===D?"active":""}`,onClick:()=>E(D),children:D==="easy"?"😊 Mudah":D==="medium"?"🤔 Sedang":"😈 Sulit"},D))})]}),t.jsx("div",{className:"sound-toggle",children:t.jsxs("button",{onClick:()=>f(!u),className:"sound-btn",children:[u?t.jsx(ld,{}):t.jsx(cd,{}),t.jsx("span",{children:u?"Sound ON":"Sound OFF"})]})})]}),t.jsx("style",{children:ud})]});const V=()=>i==="draw"?"🤝 Seri!":i?`🎉 ${i==="X"?y.x:y.o} Menang!`:N?"🤖 AI sedang berpikir...":`Giliran: ${n?y.x:y.o} (${n?"X":"O"})`;return t.jsxs("div",{className:"tictactoe-container",children:[j&&t.jsx("div",{className:"win-popup-overlay",onClick:()=>b(!1),children:t.jsxs("div",{className:"win-popup",onClick:D=>D.stopPropagation(),children:[i==="draw"?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"popup-icon",children:"🤝"}),t.jsx("h3",{children:"Seri!"}),t.jsx("p",{children:"Tidak ada pemenang"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"popup-icon",children:"🏆"}),t.jsxs("h3",{children:[i==="X"?y.x:y.o," Menang!"]}),t.jsx("p",{children:"Selamat kepada pemenang!"})]}),t.jsxs("button",{className:"popup-btn",onClick:A,children:[t.jsx(od,{})," Main Lagi"]})]})}),t.jsxs("div",{className:"game-header",children:[t.jsx("h3",{children:"🎮 Tic-Tac-Toe"}),t.jsxs("div",{className:"header-controls",children:[t.jsx("button",{onClick:()=>f(!u),className:"icon-btn",title:u?"Mute":"Unmute",children:u?t.jsx(ld,{}):t.jsx(cd,{})}),t.jsx("span",{className:"mode-badge",children:h==="pvp"?"👥 PvP":`🤖 ${g}`})]})]}),t.jsxs("div",{className:"scoreboard",children:[t.jsxs("div",{className:"score-item x-score",children:[t.jsx("div",{className:"score-label-row",children:O==="x"?t.jsx("input",{type:"text",value:W,onChange:D=>q(D.target.value),onBlur:z,onKeyDown:D=>D.key==="Enter"&&z(),autoFocus:!0,className:"name-input",maxLength:10}):t.jsxs("span",{className:"score-label",onClick:()=>h==="pvp"&&L("x"),children:[y.x," (X)",h==="pvp"&&t.jsx(dd,{})]})}),t.jsx("span",{className:"score-value",children:w.x})]}),t.jsxs("div",{className:"score-item draw-score",children:[t.jsx("span",{className:"score-label",children:"Seri"}),t.jsx("span",{className:"score-value",children:w.draws})]}),t.jsxs("div",{className:"score-item o-score",children:[t.jsx("div",{className:"score-label-row",children:O==="o"?t.jsx("input",{type:"text",value:W,onChange:D=>q(D.target.value),onBlur:z,onKeyDown:D=>D.key==="Enter"&&z(),autoFocus:!0,className:"name-input",maxLength:10}):t.jsxs("span",{className:"score-label",onClick:()=>h==="pvp"&&L("o"),children:[y.o," (O)",h==="pvp"&&t.jsx(dd,{})]})}),t.jsx("span",{className:"score-value",children:w.o})]})]}),t.jsx("div",{className:`game-status ${i?i==="draw"?"draw":"winner":""}`,children:V()}),t.jsxs("div",{className:`game-board ${i?"game-over":""}`,children:[e.map((D,B)=>t.jsxs("button",{className:`cell ${D?"filled":""} ${l.includes(B)?"winning":""}`,onClick:()=>C(B),disabled:!!D||!!i||N,children:[D==="X"&&t.jsx(Dg,{}),D==="O"&&t.jsx(Ag,{})]},B)),o&&t.jsx("div",{className:`win-line ${o}`})]}),t.jsxs("div",{className:"game-controls",children:[t.jsxs("button",{className:"control-btn restart",onClick:A,children:[t.jsx(od,{}),t.jsx("span",{children:"Main Lagi"})]}),t.jsx("button",{className:"control-btn back",onClick:P,children:t.jsx("span",{children:"← Ganti Mode"})})]}),t.jsx("style",{children:ud})]})}const ud=`
    .tictactoe-container {
        background: linear-gradient(145deg, rgba(15, 15, 35, 0.9), rgba(25, 25, 50, 0.85));
        border-radius: 24px;
        padding: 1.5rem;
        border: 1px solid rgba(99, 102, 241, 0.25);
        max-width: 400px;
        margin: 0 auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .mode-selection {
        text-align: center;
    }

    .mode-selection h2 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1.75rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .mode-selection > p {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
    }

    .mode-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .mode-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1.25rem 1.5rem;
        border-radius: 16px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 140px;
    }

    .mode-btn.pvp {
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(99, 102, 241, 0.15));
        border-color: rgba(34, 211, 238, 0.3);
    }

    .mode-btn.pvp:hover {
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(99, 102, 241, 0.25));
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(34, 211, 238, 0.2);
    }

    .mode-btn.pve {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15));
        border-color: rgba(168, 85, 247, 0.3);
    }

    .mode-btn.pve:hover {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.25));
        border-color: rgba(168, 85, 247, 0.5);
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2);
    }

    .mode-icon {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-size: 0.75rem;
    }

    .mode-label {
        color: white;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .mode-desc {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.7rem;
    }

    .difficulty-section {
        margin-bottom: 1rem;
    }

    .difficulty-section > p {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0.5rem;
    }

    .difficulty-buttons {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }

    .diff-btn {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .diff-btn:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .diff-btn.active {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-color: transparent;
        color: white;
    }

    .sound-toggle {
        margin-top: 1rem;
    }

    .sound-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .sound-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }

    /* Win Popup */
    .win-popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1100;
        animation: fadeIn 0.3s ease;
    }

    .win-popup {
        background: linear-gradient(145deg, rgba(25, 25, 55, 0.98), rgba(35, 35, 70, 0.98));
        border-radius: 24px;
        padding: 2rem;
        text-align: center;
        border: 2px solid rgba(99, 102, 241, 0.3);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .popup-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        animation: bounce 0.6s ease infinite alternate;
    }

    .win-popup h3 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .win-popup p {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 1.5rem;
    }

    .popup-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border: none;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .popup-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes popIn {
        from { transform: scale(0.5); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }

    @keyframes bounce {
        from { transform: scale(1); }
        to { transform: scale(1.1); }
    }

    /* Game Header */
    .game-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .game-header h3 {
        color: white;
        margin: 0;
        font-size: 1.1rem;
    }

    .header-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .icon-btn {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 8px;
        padding: 0.4rem;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
    }

    .icon-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        color: white;
    }

    .mode-badge {
        font-size: 0.7rem;
        padding: 0.25rem 0.625rem;
        background: rgba(99, 102, 241, 0.2);
        border-radius: 20px;
        color: #a78bfa;
    }

    /* Scoreboard */
    .scoreboard {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        gap: 0.5rem;
    }

    .score-item {
        flex: 1;
        text-align: center;
        padding: 0.75rem 0.5rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
    }

    .score-item.x-score {
        border-left: 3px solid #22d3ee;
    }

    .score-item.o-score {
        border-left: 3px solid #f472b6;
    }

    .score-item.draw-score {
        border-left: 3px solid #fbbf24;
    }

    .score-label-row {
        display: flex;
        justify-content: center;
    }

    .score-label {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.65rem;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0.25rem;
        cursor: pointer;
    }

    .score-label:hover svg {
        opacity: 1;
    }

    .score-label svg {
        opacity: 0.5;
        transition: opacity 0.2s;
    }

    .name-input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(99, 102, 241, 0.5);
        border-radius: 4px;
        padding: 0.2rem 0.4rem;
        font-size: 0.65rem;
        color: white;
        width: 80px;
        text-align: center;
        outline: none;
    }

    .score-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
    }

    /* Status */
    .game-status {
        text-align: center;
        padding: 0.75rem;
        margin-bottom: 1rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.8);
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.3s ease;
    }

    .game-status.winner {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(34, 211, 238, 0.25));
        border: 1px solid rgba(16, 185, 129, 0.3);
        animation: celebrate 0.5s ease-in-out;
    }

    .game-status.draw {
        background: linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(251, 146, 60, 0.25));
        border: 1px solid rgba(251, 191, 36, 0.3);
    }

    @keyframes celebrate {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
    }

    /* Board */
    .game-board {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 1rem;
        position: relative;
        padding: 5px;
    }

    .cell {
        aspect-ratio: 1;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18%;
    }

    .cell:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(99, 102, 241, 0.5);
        transform: scale(1.03);
    }

    .cell:disabled {
        cursor: not-allowed;
    }

    .cell.filled {
        animation: pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .cell.winning {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(34, 211, 238, 0.35));
        border-color: #10b981;
        animation: pulse-win 1s ease-in-out infinite;
    }

    @keyframes pop {
        0% { transform: scale(0); }
        70% { transform: scale(1.15); }
        100% { transform: scale(1); }
    }

    @keyframes pulse-win {
        0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
        50% { box-shadow: 0 0 25px 8px rgba(16, 185, 129, 0.3); }
    }

    .x-icon {
        width: 100%;
        height: 100%;
        color: #22d3ee;
        filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.6));
    }

    .o-icon {
        width: 100%;
        height: 100%;
        color: #f472b6;
        filter: drop-shadow(0 0 10px rgba(244, 114, 182, 0.6));
    }

    /* Win Line */
    .win-line {
        position: absolute;
        background: linear-gradient(90deg, #10b981, #22d3ee);
        border-radius: 4px;
        z-index: 10;
    }

    .win-line.row-1 {
        width: calc(100% - 10px);
        height: 6px;
        top: calc(16.67% + 2.5px);
        left: 5px;
        animation: drawLine 0.5s ease forwards;
    }

    .win-line.row-2 {
        width: calc(100% - 10px);
        height: 6px;
        top: calc(50%);
        left: 5px;
        animation: drawLine 0.5s ease forwards;
    }

    .win-line.row-3 {
        width: calc(100% - 10px);
        height: 6px;
        top: calc(83.33% - 2.5px);
        left: 5px;
        animation: drawLine 0.5s ease forwards;
    }

    .win-line.col-1 {
        width: 6px;
        height: calc(100% - 10px);
        left: calc(16.67% + 2.5px);
        top: 5px;
        animation: drawLineVertical 0.5s ease forwards;
    }

    .win-line.col-2 {
        width: 6px;
        height: calc(100% - 10px);
        left: calc(50%);
        top: 5px;
        animation: drawLineVertical 0.5s ease forwards;
    }

    .win-line.col-3 {
        width: 6px;
        height: calc(100% - 10px);
        left: calc(83.33% - 2.5px);
        top: 5px;
        animation: drawLineVertical 0.5s ease forwards;
    }

    .win-line.diag-1 {
        width: 6px;
        height: 140%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        animation: drawLineDiag 0.5s ease forwards;
    }

    .win-line.diag-2 {
        width: 6px;
        height: 140%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        animation: drawLineDiag 0.5s ease forwards;
    }

    @keyframes drawLine {
        from { width: 0; }
        to { width: calc(100% - 10px); }
    }

    @keyframes drawLineVertical {
        from { height: 0; }
        to { height: calc(100% - 10px); }
    }

    @keyframes drawLineDiag {
        from { height: 0; }
        to { height: 140%; }
    }

    /* Controls */
    .game-controls {
        display: flex;
        gap: 0.75rem;
    }

    .control-btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.875rem;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 600;
        transition: all 0.2s;
    }

    .control-btn.restart {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
    }

    .control-btn.restart:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }

    .control-btn.back {
        background: rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .control-btn.back:hover {
        background: rgba(255, 255, 255, 0.12);
        color: white;
    }

    /* Responsive */
    @media (max-width: 420px) {
        .tictactoe-container {
            padding: 1rem;
            border-radius: 20px;
        }

        .mode-buttons {
            flex-direction: column;
        }

        .mode-btn {
            width: 100%;
        }

        .cell {
            border-radius: 10px;
        }
    }
`,Ao={nmap:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("circle",{cx:"32",cy:"32",r:"28",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("circle",{cx:"32",cy:"32",r:"6",fill:"currentColor"}),t.jsx("line",{x1:"32",y1:"6",x2:"32",y2:"20",stroke:"currentColor",strokeWidth:"2"}),t.jsx("line",{x1:"32",y1:"44",x2:"32",y2:"58",stroke:"currentColor",strokeWidth:"2"}),t.jsx("line",{x1:"6",y1:"32",x2:"20",y2:"32",stroke:"currentColor",strokeWidth:"2"}),t.jsx("line",{x1:"44",y1:"32",x2:"58",y2:"32",stroke:"currentColor",strokeWidth:"2"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"8",fill:"currentColor",children:"NMAP"})]}),burpsuite:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("circle",{cx:"32",cy:"24",r:"16",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M20 36 L20 52 Q20 56 24 56 L40 56 Q44 56 44 52 L44 36",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("circle",{cx:"32",cy:"24",r:"6",fill:"currentColor"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"8",fill:"currentColor",children:"BURP"})]}),metasploit:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("polygon",{points:"32,4 58,20 58,44 32,60 6,44 6,20",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("polygon",{points:"32,14 48,24 48,40 32,50 16,40 16,24",fill:"currentColor",opacity:"0.3"}),t.jsx("circle",{cx:"32",cy:"32",r:"8",fill:"currentColor"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"6",fill:"currentColor",children:"METASPLOIT"})]}),hydra:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("path",{d:"M32 8 L32 56",stroke:"currentColor",strokeWidth:"3"}),t.jsx("path",{d:"M20 20 L32 32 L44 20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M16 32 L32 32 L32 48",stroke:"currentColor",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M48 32 L32 32",stroke:"currentColor",strokeWidth:"2"}),t.jsx("circle",{cx:"20",cy:"20",r:"4",fill:"currentColor"}),t.jsx("circle",{cx:"44",cy:"20",r:"4",fill:"currentColor"}),t.jsx("circle",{cx:"16",cy:"32",r:"4",fill:"currentColor"}),t.jsx("circle",{cx:"48",cy:"32",r:"4",fill:"currentColor"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"8",fill:"currentColor",children:"HYDRA"})]}),wireshark:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("path",{d:"M8 32 Q20 16 32 32 Q44 48 56 32",stroke:"currentColor",strokeWidth:"3",fill:"none"}),t.jsx("circle",{cx:"32",cy:"32",r:"6",fill:"currentColor"}),t.jsx("path",{d:"M26 26 L20 20",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M38 26 L44 20",stroke:"currentColor",strokeWidth:"2"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"6",fill:"currentColor",children:"WIRESHARK"})]}),firewall:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("rect",{x:"8",y:"12",width:"48",height:"40",rx:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("line",{x1:"8",y1:"24",x2:"56",y2:"24",stroke:"currentColor",strokeWidth:"2"}),t.jsx("line",{x1:"8",y1:"40",x2:"56",y2:"40",stroke:"currentColor",strokeWidth:"2"}),t.jsx("circle",{cx:"20",cy:"32",r:"4",fill:"currentColor"}),t.jsx("circle",{cx:"32",cy:"32",r:"4",fill:"#22d3ee"}),t.jsx("circle",{cx:"44",cy:"32",r:"4",fill:"currentColor"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"7",fill:"currentColor",children:"FIREWALL"})]}),terminal:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("rect",{x:"6",y:"10",width:"52",height:"44",rx:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M14 28 L22 34 L14 40",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),t.jsx("line",{x1:"28",y1:"40",x2:"42",y2:"40",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"7",fill:"currentColor",children:"TERMINAL"})]}),encryption:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("rect",{x:"16",y:"28",width:"32",height:"26",rx:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M22 28 L22 18 Q22 8 32 8 Q42 8 42 18 L42 28",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("circle",{cx:"32",cy:"40",r:"4",fill:"currentColor"}),t.jsx("line",{x1:"32",y1:"44",x2:"32",y2:"48",stroke:"currentColor",strokeWidth:"2"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"6",fill:"currentColor",children:"ENCRYPT"})]}),malware:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("circle",{cx:"32",cy:"32",r:"20",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M32 12 L32 4",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M32 52 L32 60",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M12 32 L4 32",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M52 32 L60 32",stroke:"currentColor",strokeWidth:"2"}),t.jsx("circle",{cx:"26",cy:"28",r:"3",fill:"currentColor"}),t.jsx("circle",{cx:"38",cy:"28",r:"3",fill:"currentColor"}),t.jsx("path",{d:"M24 40 Q32 48 40 40",stroke:"currentColor",strokeWidth:"2",fill:"none"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"7",fill:"currentColor",children:"MALWARE"})]}),anonymous:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("ellipse",{cx:"32",cy:"32",rx:"22",ry:"26",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M14 28 L50 28",stroke:"currentColor",strokeWidth:"6",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"28",r:"4",fill:"#0a0a0a"}),t.jsx("circle",{cx:"40",cy:"28",r:"4",fill:"#0a0a0a"}),t.jsx("path",{d:"M20 42 Q32 50 44 42",stroke:"currentColor",strokeWidth:"2",fill:"none"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"6",fill:"currentColor",children:"ANONYMOUS"})]}),shield:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("path",{d:"M32 6 L54 16 L54 34 Q54 50 32 58 Q10 50 10 34 L10 16 Z",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("path",{d:"M24 32 L30 38 L42 26",stroke:"currentColor",strokeWidth:"3",fill:"none",strokeLinecap:"round"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"7",fill:"currentColor",children:"SHIELD"})]}),sqlinjection:()=>t.jsxs("svg",{viewBox:"0 0 64 64",className:"card-icon",children:[t.jsx("rect",{x:"10",y:"14",width:"44",height:"36",rx:"3",fill:"none",stroke:"currentColor",strokeWidth:"2"}),t.jsx("line",{x1:"10",y1:"26",x2:"54",y2:"26",stroke:"currentColor",strokeWidth:"2"}),t.jsx("text",{x:"32",y:"40",textAnchor:"middle",fontSize:"10",fill:"currentColor",fontFamily:"monospace",children:"SQL"}),t.jsx("path",{d:"M44 44 L52 52",stroke:"#ef4444",strokeWidth:"3"}),t.jsx("text",{x:"32",y:"68",textAnchor:"middle",fontSize:"6",fill:"currentColor",children:"SQL INJECT"})]})},pd=Object.keys(Ao),md=e=>{const r=[...e];for(let n=r.length-1;n>0;n--){const a=Math.floor(Math.random()*(n+1));[r[n],r[a]]=[r[a],r[n]]}return r},Rn={easy:{pairs:4,cols:4,name:"Easy",emoji:"😊"},medium:{pairs:8,cols:4,name:"Medium",emoji:"🤔"},hard:{pairs:12,cols:6,name:"Hard",emoji:"😈"}};function Rg(){const[e,r]=p.useState("menu"),[n,a]=p.useState("easy"),[i,s]=p.useState([]),[o,c]=p.useState([]),[l,m]=p.useState([]),[h,x]=p.useState(0),[g,E]=p.useState(0),[w,v]=p.useState(!1),[N,d]=p.useState({easy:null,medium:null,hard:null}),[u,f]=p.useState(!0),[j,b]=p.useState(!1),[y,I]=p.useState(0),O=p.useRef(null),R=p.useRef(null);p.useEffect(()=>(O.current=new(window.AudioContext||window.webkitAudioContext),()=>{O.current&&O.current.close(),R.current&&clearInterval(R.current)}),[]),p.useEffect(()=>(w?R.current=setInterval(()=>{E(C=>C+1)},1e3):R.current&&clearInterval(R.current),()=>{R.current&&clearInterval(R.current)}),[w]);const W=p.useCallback(C=>{if(!u||!O.current)return;const A=O.current,P=A.createOscillator(),L=A.createGain();P.connect(L),L.connect(A.destination),C==="flip"?(P.frequency.setValueAtTime(600,A.currentTime),P.frequency.exponentialRampToValueAtTime(800,A.currentTime+.05),L.gain.setValueAtTime(.08,A.currentTime),L.gain.exponentialRampToValueAtTime(.01,A.currentTime+.08),P.start(A.currentTime),P.stop(A.currentTime+.08)):C==="match"?(P.frequency.setValueAtTime(523,A.currentTime),P.frequency.setValueAtTime(659,A.currentTime+.1),P.frequency.setValueAtTime(784,A.currentTime+.2),L.gain.setValueAtTime(.12,A.currentTime),L.gain.exponentialRampToValueAtTime(.01,A.currentTime+.35),P.start(A.currentTime),P.stop(A.currentTime+.35)):C==="nomatch"?(P.frequency.setValueAtTime(300,A.currentTime),P.frequency.setValueAtTime(250,A.currentTime+.1),L.gain.setValueAtTime(.08,A.currentTime),L.gain.exponentialRampToValueAtTime(.01,A.currentTime+.15),P.start(A.currentTime),P.stop(A.currentTime+.15)):C==="win"&&[523,659,784,1047].forEach((V,D)=>{const B=A.createOscillator(),F=A.createGain();B.connect(F),F.connect(A.destination),B.frequency.setValueAtTime(V,A.currentTime+D*.15),F.gain.setValueAtTime(.1,A.currentTime+D*.15),F.gain.exponentialRampToValueAtTime(.01,A.currentTime+D*.15+.2),B.start(A.currentTime+D*.15),B.stop(A.currentTime+D*.15+.2)})},[u]),q=C=>{const{pairs:A}=Rn[C],P=md(pd).slice(0,A),L=[...P,...P].map((z,V)=>({id:V,type:z,icon:Ao[z]}));s(md(L)),c([]),m([]),x(0),E(0),I(0),a(C),r("playing"),v(!0)},J=C=>{if(o.length===2||o.includes(C)||l.includes(C))return;W("flip");const A=[...o,C];if(c(A),A.length===2){x(D=>D+1);const[P,L]=A,z=i.find(D=>D.id===P),V=i.find(D=>D.id===L);if(z.type===V.type){W("match");const D=[...l,P,L];m(D),c([]),D.length===i.length&&(v(!1),r("won"),W("win"),(!N[n]||g<N[n])&&d(B=>({...B,[n]:g})))}else W("nomatch"),setTimeout(()=>c([]),1e3)}},_=()=>{j||(b(!0),I(C=>C+1),setTimeout(()=>b(!1),1500))},$=C=>{const A=Math.floor(C/60),P=C%60;return`${A.toString().padStart(2,"0")}:${P.toString().padStart(2,"0")}`},T=()=>{const A=g*2,P=h*5,L=y*50,z=n==="hard"?500:n==="medium"?250:0;return Math.max(0,1e3-A-P-L+z)};return e==="menu"?t.jsxs("div",{className:"memory-game-container",children:[t.jsxs("div",{className:"menu-screen",children:[t.jsx("h2",{children:"🎴 Memory Card Game"}),t.jsx("p",{className:"subtitle",children:"Tema: Cybersecurity & Hacking Tools"}),t.jsxs("div",{className:"level-selection",children:[t.jsx("p",{children:"Pilih Level:"}),Object.entries(Rn).map(([C,{name:A,emoji:P,pairs:L}])=>t.jsxs("button",{className:`level-btn ${C}`,onClick:()=>q(C),children:[t.jsx("span",{className:"level-emoji",children:P}),t.jsx("span",{className:"level-name",children:A}),t.jsxs("span",{className:"level-info",children:[L," pasang"]}),N[C]&&t.jsxs("span",{className:"best-time",children:["🏆 ",$(N[C])]})]},C))]}),t.jsx("div",{className:"menu-options",children:t.jsx("button",{className:`option-btn ${u?"active":""}`,onClick:()=>f(!u),children:u?"🔊 Sound ON":"🔇 Sound OFF"})}),t.jsxs("div",{className:"card-preview",children:[t.jsx("p",{children:"Icon yang tersedia:"}),t.jsx("div",{className:"preview-icons",children:pd.slice(0,6).map(C=>t.jsx("div",{className:"preview-icon",children:Ao[C]()},C))})]})]}),t.jsx("style",{children:Ms})]}):e==="won"?t.jsxs("div",{className:"memory-game-container",children:[t.jsxs("div",{className:"win-screen",children:[t.jsx("div",{className:"confetti",children:[...Array(20)].map((C,A)=>t.jsx("div",{className:"confetti-piece",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,backgroundColor:["#22d3ee","#a78bfa","#f472b6","#fbbf24","#10b981"][Math.floor(Math.random()*5)]}},A))}),t.jsxs("div",{className:"win-content",children:[t.jsx("div",{className:"trophy",children:"🏆"}),t.jsx("h2",{children:"All Cards Matched!"}),t.jsxs("div",{className:"stats",children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Time"}),t.jsx("span",{className:"stat-value",children:$(g)})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Moves"}),t.jsx("span",{className:"stat-value",children:h})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Score"}),t.jsx("span",{className:"stat-value score",children:T()})]})]}),N[n]===g&&t.jsx("div",{className:"new-record",children:"🎉 New Best Time!"}),t.jsxs("div",{className:"win-actions",children:[t.jsx("button",{className:"action-btn primary",onClick:()=>q(n),children:"🔄 Play Again"}),t.jsx("button",{className:"action-btn secondary",onClick:()=>r("menu"),children:"📋 Menu"})]})]})]}),t.jsx("style",{children:Ms})]}):t.jsxs("div",{className:"memory-game-container",children:[t.jsxs("div",{className:"game-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("h3",{children:"🎴 Memory Game"}),t.jsxs("span",{className:"level-badge",children:[Rn[n].emoji," ",Rn[n].name]})]}),t.jsx("button",{className:"back-btn",onClick:()=>{v(!1),r("menu")},children:"← Menu"})]}),t.jsxs("div",{className:"stats-bar",children:[t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-icon",children:"⏱️"}),t.jsx("span",{className:"stat-val",children:$(g)})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-icon",children:"👆"}),t.jsxs("span",{className:"stat-val",children:[h," moves"]})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-icon",children:"✅"}),t.jsxs("span",{className:"stat-val",children:[l.length/2," / ",i.length/2]})]}),t.jsxs("button",{className:"hint-btn",onClick:_,disabled:j,children:["💡 Hint (",3-y,")"]})]}),t.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${Rn[n].cols}, 1fr)`},children:i.map(C=>{const A=o.includes(C.id)||l.includes(C.id)||j,P=l.includes(C.id);return t.jsx("div",{className:`card ${A?"flipped":""} ${P?"matched":""}`,onClick:()=>!A&&J(C.id),children:t.jsxs("div",{className:"card-inner",children:[t.jsx("div",{className:"card-front",children:t.jsx("div",{className:"card-pattern",children:t.jsx("span",{children:"🔐"})})}),t.jsx("div",{className:"card-back",children:C.icon()})]})},C.id)})}),t.jsxs("div",{className:"game-controls",children:[t.jsx("button",{className:"control-btn",onClick:()=>q(n),children:"🔄 Restart"}),t.jsx("button",{className:`control-btn sound ${u?"on":"off"}`,onClick:()=>f(!u),children:u?"🔊":"🔇"})]}),t.jsx("style",{children:Ms})]})}const Ms=`
    .memory-game-container {
        background: linear-gradient(145deg, rgba(15, 15, 35, 0.9), rgba(25, 25, 50, 0.85));
        border-radius: 20px;
        padding: 1.25rem;
        border: 1px solid rgba(99, 102, 241, 0.25);
        max-width: 600px;
        margin: 0 auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    /* Menu Screen */
    .menu-screen {
        text-align: center;
        padding: 1rem;
    }

    .menu-screen h2 {
        color: white;
        font-size: 1.75rem;
        margin-bottom: 0.25rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.8rem;
        margin-bottom: 1.5rem;
    }

    .level-selection {
        margin-bottom: 1.5rem;
    }

    .level-selection > p {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
    }

    .level-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.875rem 1rem;
        margin-bottom: 0.5rem;
        border-radius: 12px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.05);
    }

    .level-btn.easy {
        border-color: rgba(34, 211, 238, 0.3);
    }
    .level-btn.easy:hover {
        background: rgba(34, 211, 238, 0.15);
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateX(5px);
    }

    .level-btn.medium {
        border-color: rgba(168, 85, 247, 0.3);
    }
    .level-btn.medium:hover {
        background: rgba(168, 85, 247, 0.15);
        border-color: rgba(168, 85, 247, 0.5);
        transform: translateX(5px);
    }

    .level-btn.hard {
        border-color: rgba(239, 68, 68, 0.3);
    }
    .level-btn.hard:hover {
        background: rgba(239, 68, 68, 0.15);
        border-color: rgba(239, 68, 68, 0.5);
        transform: translateX(5px);
    }

    .level-emoji {
        font-size: 1.5rem;
    }

    .level-name {
        color: white;
        font-weight: 600;
        font-size: 1rem;
        flex: 1;
        text-align: left;
        margin-left: 0.75rem;
    }

    .level-info {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        margin-right: 0.5rem;
    }

    .best-time {
        color: #fbbf24;
        font-size: 0.7rem;
        font-weight: 600;
    }

    .menu-options {
        margin-bottom: 1.5rem;
    }

    .option-btn {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .option-btn.active {
        background: rgba(34, 211, 238, 0.2);
        border-color: rgba(34, 211, 238, 0.5);
        color: #22d3ee;
    }

    .card-preview {
        padding: 1rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    .card-preview p {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .preview-icons {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .preview-icon {
        width: 48px;
        height: 48px;
        color: #22d3ee;
    }

    /* Win Screen */
    .win-screen {
        text-align: center;
        padding: 2rem 1rem;
        position: relative;
        overflow: hidden;
    }

    .confetti {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
    }

    .confetti-piece {
        position: absolute;
        width: 10px;
        height: 10px;
        top: -10px;
        animation: fall 3s linear infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(400px) rotate(720deg);
            opacity: 0;
        }
    }

    .win-content {
        position: relative;
        z-index: 1;
    }

    .trophy {
        font-size: 4rem;
        animation: bounce 0.6s ease infinite alternate;
        margin-bottom: 1rem;
    }

    @keyframes bounce {
        to { transform: scale(1.1); }
    }

    .win-screen h2 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .stats {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
    }

    .stat {
        text-align: center;
    }

    .stat-label {
        display: block;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
    }

    .stat-value {
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .stat-value.score {
        color: #fbbf24;
    }

    .new-record {
        color: #10b981;
        font-weight: 600;
        margin-bottom: 1.5rem;
        animation: pulse 1s ease infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
    }

    .win-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
    }

    .action-btn {
        padding: 0.75rem 1.5rem;
        border-radius: 12px;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    .action-btn.primary {
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
    }

    .action-btn.primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }

    .action-btn.secondary {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.8);
    }

    .action-btn.secondary:hover {
        background: rgba(255, 255, 255, 0.15);
    }

    /* Game Header */
    .game-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .game-header h3 {
        color: white;
        margin: 0;
        font-size: 1rem;
    }

    .level-badge {
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
        background: rgba(99, 102, 241, 0.2);
        border-radius: 12px;
        color: #a78bfa;
    }

    .back-btn {
        padding: 0.4rem 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .back-btn:hover {
        background: rgba(255, 255, 255, 0.15);
        color: white;
    }

    /* Stats Bar */
    .stats-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        padding: 0.625rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin-bottom: 0.75rem;
    }

    .stat-item {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .stat-icon {
        font-size: 0.875rem;
    }

    .hint-btn {
        padding: 0.375rem 0.75rem;
        background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 146, 60, 0.2));
        border: 1px solid rgba(251, 191, 36, 0.3);
        border-radius: 8px;
        color: #fbbf24;
        font-size: 0.7rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .hint-btn:hover:not(:disabled) {
        background: rgba(251, 191, 36, 0.3);
    }

    .hint-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Game Board */
    .game-board {
        display: grid;
        gap: 8px;
        margin-bottom: 0.75rem;
    }

    .card {
        aspect-ratio: 1;
        perspective: 1000px;
        cursor: pointer;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-front {
        background: linear-gradient(145deg, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4));
        border: 2px solid rgba(99, 102, 241, 0.4);
    }

    .card-pattern {
        font-size: 1.5rem;
        opacity: 0.8;
    }

    .card-back {
        background: linear-gradient(145deg, rgba(15, 15, 35, 0.95), rgba(25, 25, 50, 0.95));
        border: 2px solid rgba(34, 211, 238, 0.4);
        transform: rotateY(180deg);
        color: #22d3ee;
        padding: 12%;
    }

    .card.matched .card-back {
        border-color: #10b981;
        background: linear-gradient(145deg, rgba(16, 185, 129, 0.15), rgba(34, 211, 238, 0.15));
    }

    .card:not(.flipped):not(.matched):hover .card-inner {
        transform: scale(1.03);
    }

    .card-icon {
        width: 100%;
        height: 100%;
    }

    /* Controls */
    .game-controls {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
    }

    .control-btn {
        padding: 0.625rem 1.25rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .control-btn:hover {
        background: rgba(255, 255, 255, 0.15);
        color: white;
    }

    .control-btn.sound {
        width: 44px;
        padding: 0.625rem;
    }

    /* Responsive */
    @media (max-width: 500px) {
        .memory-game-container {
            padding: 1rem;
        }

        .game-board {
            gap: 6px;
        }

        .stats-bar {
            flex-wrap: wrap;
            gap: 0.4rem;
        }

        .stat-item {
            font-size: 0.65rem;
        }

        .card-pattern {
            font-size: 1rem;
        }
    }
`,Ps={help:`
╔═══════════════════════════════════════════════════════════════╗
║                    AVAILABLE COMMANDS                          ║
╠═══════════════════════════════════════════════════════════════╣
║  help          - Show this help menu                          ║
║  clear         - Clear terminal screen                        ║
║  scan          - Scan target for vulnerabilities              ║
║  port-scan     - Scan open ports                              ║
║  net-scan      - Scan network devices                         ║
║  connect       - Connect to target server                     ║
║  exploit       - Run exploit module                           ║
║  decrypt       - Decrypt encoded message                      ║
║  hash-crack    - Crack password hash                          ║
║  firewall      - Check firewall status                        ║
║  inject        - Inject payload                               ║
║  status        - Show system status                           ║
║  logs          - View access logs                             ║
║  puzzle        - Start puzzle mode                            ║
║  typing        - Start typing challenge                       ║
╚═══════════════════════════════════════════════════════════════╝`,status:`
┌─────────────────────────────────────────┐
│ SYSTEM STATUS                           │
├─────────────────────────────────────────┤
│ CPU Usage:     ████████░░ 78%           │
│ Memory:        ██████░░░░ 62%           │
│ Network:       ████░░░░░░ 45%           │
│ Firewall:      ACTIVE                   │
│ Encryption:    AES-256                  │
│ Connection:    SECURE                   │
│ Uptime:        14d 7h 32m               │
└─────────────────────────────────────────┘`,logs:`
[2024-12-11 22:15:32] INFO  - Connection established from 192.168.1.105
[2024-12-11 22:15:34] WARN  - Failed login attempt from 10.0.0.45
[2024-12-11 22:15:36] INFO  - Firewall rule updated
[2024-12-11 22:15:38] ERROR - Unauthorized access detected at port 8080
[2024-12-11 22:15:40] INFO  - SSH session started for user admin
[2024-12-11 22:15:42] WARN  - Suspicious packet detected
[2024-12-11 22:15:44] INFO  - System backup completed successfully`},_n=[{type:"base64",question:"Decode Base64: U2t5Q3liZXJfU2VjdXJpdHk=",answer:"SkyCyber_Security",hint:"Use Base64 decoding"},{type:"hex",question:"Decode Hex: 48 41 43 4B 45 52",answer:"HACKER",hint:"Convert hex to ASCII"},{type:"rot13",question:"Decode ROT13: Plorefrphevgl",answer:"Cybersecurity",hint:"Shift each letter by 13"},{type:"password",question:"Password clue: First 4 digits of PI + year of first iPhone",answer:"31412007",hint:"3.141... + 2007"},{type:"port",question:"Which port is used for HTTPS?",answer:"443",hint:"Secure web traffic"},{type:"sql",question:"Safe SQL: SELECT * FROM users WHERE id = ?",answer:"parameterized",hint:"Type how this query is called"}],fd=["nmap -sV -sC target.com","sqlmap -u 'http://target.com?id=1' --dbs","hydra -l admin -P wordlist.txt ssh://target","msfconsole -q -x 'use exploit/multi/handler'","nikto -h http://target.com -ssl","gobuster dir -u http://target.com -w wordlist.txt"];function _g(){const[e,r]=p.useState("menu"),[n,a]=p.useState([]),[i,s]=p.useState(""),[o,c]=p.useState(!1),[l,m]=p.useState(!0),[h,x]=p.useState("green"),[g,E]=p.useState(!0),[w,v]=p.useState(!1),[N,d]=p.useState(0),[u,f]=p.useState(0),[j,b]=p.useState(0),[y,I]=p.useState(!1),[O,R]=p.useState(!1),[W,q]=p.useState(""),[J,_]=p.useState(""),[$,T]=p.useState({wpm:0,accuracy:0}),[C,A]=p.useState(null),[P,L]=p.useState(!1),[z,V]=p.useState(0),[D,B]=p.useState([]),F=p.useRef(null),k=p.useRef(null),H=p.useRef(null),U=p.useRef(null);p.useEffect(()=>(H.current=new(window.AudioContext||window.webkitAudioContext),()=>{H.current&&H.current.close(),U.current&&clearInterval(U.current)}),[]),p.useEffect(()=>{const K=setInterval(()=>{m(Z=>!Z)},530);return()=>clearInterval(K)},[]),p.useEffect(()=>(y?U.current=setInterval(()=>{b(K=>K+1)},1e3):U.current&&clearInterval(U.current),()=>{U.current&&clearInterval(U.current)}),[y]),p.useEffect(()=>{F.current&&(F.current.scrollTop=F.current.scrollHeight)},[n]);const Y=p.useCallback(K=>{if(!g||!H.current)return;const Z=H.current,be=Z.createOscillator(),ie=Z.createGain();be.connect(ie),ie.connect(Z.destination),K==="key"?(be.frequency.setValueAtTime(800+Math.random()*200,Z.currentTime),ie.gain.setValueAtTime(.03,Z.currentTime),ie.gain.exponentialRampToValueAtTime(.001,Z.currentTime+.05),be.start(Z.currentTime),be.stop(Z.currentTime+.05)):K==="enter"?(be.frequency.setValueAtTime(600,Z.currentTime),be.frequency.exponentialRampToValueAtTime(400,Z.currentTime+.1),ie.gain.setValueAtTime(.05,Z.currentTime),ie.gain.exponentialRampToValueAtTime(.001,Z.currentTime+.1),be.start(Z.currentTime),be.stop(Z.currentTime+.1)):K==="success"?[523,659,784].forEach((ve,ye)=>{const st=Z.createOscillator(),wt=Z.createGain();st.connect(wt),wt.connect(Z.destination),st.frequency.setValueAtTime(ve,Z.currentTime+ye*.1),wt.gain.setValueAtTime(.08,Z.currentTime+ye*.1),wt.gain.exponentialRampToValueAtTime(.001,Z.currentTime+ye*.1+.15),st.start(Z.currentTime+ye*.1),st.stop(Z.currentTime+ye*.1+.15)}):K==="error"&&(be.frequency.setValueAtTime(200,Z.currentTime),ie.gain.setValueAtTime(.05,Z.currentTime),ie.gain.exponentialRampToValueAtTime(.001,Z.currentTime+.2),be.start(Z.currentTime),be.stop(Z.currentTime+.2))},[g]),ae=p.useCallback(async(K,Z=20)=>{c(!0);for(let be=0;be<=K.length;be++)await new Promise(ie=>setTimeout(ie,Z)),a(ie=>{const ve=[...ie];return ve[ve.length-1]={...ve[ve.length-1],output:K.substring(0,be)},ve});c(!1)},[]),ne=()=>{const K=[21,22,80,443,3306,8080,8443],Z=["open","filtered","closed"],be=["ftp","ssh","http","https","mysql","http-proxy","https-alt"];let ie=`
Starting Nmap scan...
Host is up (0.032s latency).

PORT      STATE    SERVICE
`;return K.forEach((ve,ye)=>{const st=Z[Math.floor(Math.random()*Z.length)];ie+=`${ve}/tcp   ${st.padEnd(8)} ${be[ye]}
`}),ie+=`
Scan completed: 1 IP address scanned in 4.52 seconds`,ie},pe=()=>`
[*] Started reverse TCP handler on 192.168.1.100:4444
[*] Sending exploit payload...
[*] Exploit running as background job.

[+] ════════════════════════════════════════════════════
[+]  EXPLOIT SUCCESSFUL!
[+]  Session established with target
[+]  Access Level: USER
[+] ════════════════════════════════════════════════════

meterpreter > `,ce=async K=>{const ie=K.toLowerCase().trim().split(" ")[0];let ve="";switch(ie){case"help":ve=Ps.help;break;case"clear":a([]);return;case"status":ve=Ps.status;break;case"logs":ve=Ps.logs;break;case"scan":case"port-scan":case"net-scan":a(ye=>[...ye,{type:"output",output:`
[*] Initializing scan module...`}]),await new Promise(ye=>setTimeout(ye,500)),a(ye=>[...ye,{type:"output",output:"[*] Scanning target..."}]),await new Promise(ye=>setTimeout(ye,1e3)),ve=ne();break;case"connect":ve=`
[*] Establishing SSH connection...
[*] Authenticating...
[+] Connection established!
[+] Welcome to target-server
Last login: Wed Dec 11 22:30:15 2024 from 192.168.1.100
target@server:~$ `;break;case"exploit":case"inject":a(ye=>[...ye,{type:"output",output:`
[*] Loading exploit module...`}]),await new Promise(ye=>setTimeout(ye,800)),a(ye=>[...ye,{type:"output",output:"[*] Checking target vulnerability..."}]),await new Promise(ye=>setTimeout(ye,600)),ve=pe(),Y("success");break;case"decrypt":ve=`
[*] Decryption module loaded
[*] Analyzing encryption type...
[*] Detected: AES-256-CBC
[*] Attempting decryption...
████████████████████████████░░░░ 85%
[+] Decryption successful!
[+] Output: FLAG{SKYCYBER_TERMINAL_MASTER}`,Y("success");break;case"hash-crack":ve=`
[*] Loading wordlist...
[*] Hash type detected: MD5
[*] Starting brute force attack...
Progress: ████████████████████ 100%
[+] Password found: admin123
[+] Time elapsed: 2.4 seconds`;break;case"firewall":ve=`
┌──────────────────────────────────────┐
│ FIREWALL STATUS                      │
├──────────────────────────────────────┤
│ Status:      ACTIVE                  │
│ Rules:       47 active               │
│ Blocked IPs: 128                     │
│ Last update: 2 hours ago             │
│ Mode:        Strict                  │
└──────────────────────────────────────┘`;break;case"puzzle":r("puzzle"),ke();return;case"typing":r("typing"),te();return;case"matrix":v(!w),ve=w?"[*] Matrix rain disabled":"[*] Matrix rain enabled";break;default:ve=`bash: ${ie}: command not found. Type 'help' for available commands.`,Y("error")}a(ye=>[...ye,{type:"output",output:""}]),await ae(ve,5)},fe=async K=>{if(K.key==="Enter"&&i.trim()){Y("enter");const Z=i;a(be=>[...be,{type:"command",text:Z}]),s(""),await ce(Z)}else K.key!=="Enter"&&Y("key")},ke=()=>{d(0),f(0),b(0),I(!0),R(!1)},M=K=>{const Z=_n[N];if(K.toLowerCase().trim()===Z.answer.toLowerCase()){Y("success");const ie=100+Math.max(0,100-j*2);f(ve=>ve+ie),V(ve=>ve+ie),N<_n.length-1?(d(ve=>ve+1),b(0),R(!1)):(I(!1),j<120&&B(ve=>[...ve,"🚀 Fast Hacker"]))}else Y("error")},te=()=>{const K=fd[Math.floor(Math.random()*fd.length)];q(K),_(""),A(null),L(!1),T({wpm:0,accuracy:0})},de=K=>{const Z=K.target.value;if(!C&&Z.length===1&&A(Date.now()),_(Z),Z===W){const ie=(Date.now()-C)/6e4,ve=W.split(" ").length,ye=Math.round(ve/ie);let st=0;for(let ot=0;ot<Z.length;ot++)Z[ot]===W[ot]&&st++;const wt=Math.round(st/W.length*100);T({wpm:ye,accuracy:wt}),L(!0),V(ot=>ot+ye+wt),Y("success"),ye>=100&&B(ot=>[...ot,"⚡ Speed Typer"])}},me=()=>({green:"#00ff00",cyan:"#22d3ee",purple:"#a78bfa",red:"#ef4444"})[h];if(e==="menu")return t.jsxs("div",{className:"hacker-terminal",style:{"--theme-color":me()},children:[w&&t.jsx(Ha,{}),t.jsxs("div",{className:"terminal-header",children:[t.jsxs("div",{className:"header-title",children:[t.jsx("span",{className:"blink",children:"█"})," SkyCyber Terminal v1.0"]}),t.jsxs("div",{className:"header-info",children:[t.jsx("span",{children:"User: Muhammad Lutfi Muzaki"}),t.jsx("span",{children:"Mode: Simulation"})]})]}),t.jsxs("div",{className:"menu-content",children:[t.jsx("pre",{className:"ascii-art",children:`
   _____ _          _____      _               
  / ____| |        / ____|    | |              
 | (___ | | ___  _| |    _   _| |__   ___ _ __ 
  \\___ \\| |/ / || | |   | | | | '_ \\ / _ \\ '__|
  ____) |   <| || | |___| |_| | |_) |  __/ |   
 |_____/|_|\\_\\\\__, \\_____\\__, |_.__/ \\___|_|   
               __/ |      __/ |                
              |___/      |___/   TERMINAL GAME
                    `}),t.jsxs("div",{className:"menu-buttons",children:[t.jsxs("button",{onClick:()=>{r("terminal"),a([{type:"system",text:'Welcome to SkyCyber Terminal. Type "help" for commands.'}])},children:[t.jsx("span",{className:"icon",children:"💻"}),t.jsx("span",{className:"label",children:"Free-Hack Mode"}),t.jsx("span",{className:"desc",children:"Explore terminal commands"})]}),t.jsxs("button",{onClick:()=>{r("puzzle"),ke()},children:[t.jsx("span",{className:"icon",children:"🧩"}),t.jsx("span",{className:"label",children:"Puzzle Challenge"}),t.jsx("span",{className:"desc",children:"Decrypt & solve puzzles"})]}),t.jsxs("button",{onClick:()=>{r("typing"),te()},children:[t.jsx("span",{className:"icon",children:"⌨️"}),t.jsx("span",{className:"label",children:"Typing Speed"}),t.jsx("span",{className:"desc",children:"Test your hacking speed"})]})]}),t.jsxs("div",{className:"menu-options",children:[t.jsxs("div",{className:"theme-selector",children:[t.jsx("span",{children:"Theme:"}),["green","cyan","purple","red"].map(K=>t.jsx("button",{className:`theme-btn ${h===K?"active":""}`,style:{backgroundColor:K==="green"?"#00ff00":K==="cyan"?"#22d3ee":K==="purple"?"#a78bfa":"#ef4444"},onClick:()=>x(K)},K))]}),t.jsx("button",{className:"option-btn",onClick:()=>E(!g),children:g?"🔊 Sound ON":"🔇 Sound OFF"}),t.jsx("button",{className:"option-btn",onClick:()=>v(!w),children:w?"🌧️ Matrix ON":"🌧️ Matrix OFF"})]}),t.jsxs("div",{className:"stats-display",children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Total Score"}),t.jsx("span",{className:"stat-value",children:z})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Achievements"}),t.jsx("span",{className:"stat-value",children:D.length})]})]}),D.length>0&&t.jsx("div",{className:"achievements-list",children:D.map((K,Z)=>t.jsx("span",{children:K},Z))})]}),t.jsx("style",{children:Ua})]});if(e==="puzzle"){const K=_n[N];return t.jsxs("div",{className:"hacker-terminal",style:{"--theme-color":me()},children:[w&&t.jsx(Ha,{}),t.jsxs("div",{className:"terminal-header",children:[t.jsxs("div",{className:"header-title",children:[t.jsx("span",{className:"blink",children:"█"})," PUZZLE MODE - Level ",N+1,"/",_n.length]}),t.jsx("button",{className:"back-btn",onClick:()=>r("menu"),children:"← Back"})]}),t.jsxs("div",{className:"puzzle-content",children:[t.jsxs("div",{className:"puzzle-stats",children:[t.jsxs("span",{children:["⏱️ ",j,"s"]}),t.jsxs("span",{children:["🎯 Score: ",u]}),t.jsxs("span",{children:["📊 ",K.type.toUpperCase()]})]}),y?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"puzzle-question",children:t.jsx("pre",{children:K.question})}),t.jsx("input",{type:"text",className:"puzzle-input",placeholder:"Enter your answer...",onKeyDown:Z=>Z.key==="Enter"&&M(Z.target.value),autoFocus:!0}),t.jsxs("div",{className:"puzzle-actions",children:[t.jsxs("button",{onClick:()=>R(!0),disabled:O,children:["💡 ",O?K.hint:"Show Hint"]}),t.jsx("button",{onClick:()=>d(Z=>Math.min(_n.length-1,Z+1)),children:"Skip →"})]})]}):t.jsxs("div",{className:"puzzle-complete",children:[t.jsx("h2",{children:"🎉 All Puzzles Complete!"}),t.jsxs("div",{className:"final-score",children:[t.jsxs("span",{children:["Final Score: ",u]}),t.jsxs("span",{children:["Time: ",j,"s"]})]}),t.jsx("button",{onClick:ke,children:"Play Again"})]})]}),t.jsx("style",{children:Ua})]})}return e==="typing"?t.jsxs("div",{className:"hacker-terminal",style:{"--theme-color":me()},children:[w&&t.jsx(Ha,{}),t.jsxs("div",{className:"terminal-header",children:[t.jsxs("div",{className:"header-title",children:[t.jsx("span",{className:"blink",children:"█"})," TYPING CHALLENGE"]}),t.jsx("button",{className:"back-btn",onClick:()=>r("menu"),children:"← Back"})]}),t.jsxs("div",{className:"typing-content",children:[t.jsxs("div",{className:"typing-display",children:[t.jsx("span",{className:"typing-prompt",children:"$ "}),W.split("").map((K,Z)=>{let be="";return Z<J.length&&(be=J[Z]===K?"correct":"incorrect"),t.jsx("span",{className:be,children:K},Z)})]}),t.jsx("input",{type:"text",className:"typing-input",value:J,onChange:de,placeholder:"Start typing...",disabled:P,autoFocus:!0}),P?t.jsxs("div",{className:"typing-results",children:[t.jsx("h3",{children:"✅ Complete!"}),t.jsxs("div",{className:"typing-stats",children:[t.jsxs("div",{className:"typing-stat",children:[t.jsx("span",{className:"stat-label",children:"WPM"}),t.jsx("span",{className:"stat-value",children:$.wpm})]}),t.jsxs("div",{className:"typing-stat",children:[t.jsx("span",{className:"stat-label",children:"Accuracy"}),t.jsxs("span",{className:"stat-value",children:[$.accuracy,"%"]})]})]}),t.jsx("button",{onClick:te,children:"Try Again"})]}):t.jsx("div",{className:"typing-hint",children:"Type the command exactly as shown above"})]}),t.jsx("style",{children:Ua})]}):t.jsxs("div",{className:"hacker-terminal",style:{"--theme-color":me()},onClick:()=>{var K;return(K=k.current)==null?void 0:K.focus()},children:[w&&t.jsx(Ha,{}),t.jsxs("div",{className:"terminal-header",children:[t.jsxs("div",{className:"header-title",children:[t.jsx("span",{className:"blink",children:"█"})," SkyCyber Terminal v1.0"]}),t.jsx("div",{className:"header-controls",children:t.jsx("button",{className:"back-btn",onClick:()=>r("menu"),children:"← Menu"})})]}),t.jsxs("div",{className:"terminal-body",ref:F,children:[n.map((K,Z)=>t.jsxs("div",{className:`terminal-line ${K.type}`,children:[K.type==="command"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"prompt",children:"root@skycyber:~$ "}),K.text]}),K.type==="output"&&t.jsx("pre",{children:K.output}),K.type==="system"&&t.jsxs("span",{className:"system-msg",children:["[SYSTEM] ",K.text]})]},Z)),t.jsxs("div",{className:"terminal-input-line",children:[t.jsx("span",{className:"prompt",children:"root@skycyber:~$ "}),t.jsx("input",{ref:k,type:"text",value:i,onChange:K=>s(K.target.value),onKeyDown:fe,disabled:o,autoFocus:!0}),t.jsx("span",{className:`cursor ${l?"visible":""}`,children:"█"})]})]}),t.jsx("style",{children:Ua})]})}function Ha(){const e=p.useRef(null);return p.useEffect(()=>{const r=e.current,n=r.getContext("2d");r.width=r.offsetWidth,r.height=r.offsetHeight;const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*",i=14,s=r.width/i,o=Array(Math.floor(s)).fill(1),l=setInterval(()=>{n.fillStyle="rgba(0, 0, 0, 0.05)",n.fillRect(0,0,r.width,r.height),n.fillStyle="#00ff0033",n.font=`${i}px monospace`;for(let m=0;m<o.length;m++){const h=a[Math.floor(Math.random()*a.length)];n.fillText(h,m*i,o[m]*i),o[m]*i>r.height&&Math.random()>.975&&(o[m]=0),o[m]++}},50);return()=>clearInterval(l)},[]),t.jsx("canvas",{ref:e,className:"matrix-canvas"})}const Ua=`
    .hacker-terminal {
        background: #000000;
        border-radius: 12px;
        overflow: hidden;
        font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
        border: 1px solid var(--theme-color, #00ff00);
        box-shadow: 0 0 30px rgba(0, 255, 0, 0.2), inset 0 0 100px rgba(0, 0, 0, 0.9);
        position: relative;
        min-height: 500px;
        display: flex;
        flex-direction: column;
    }

    .matrix-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.3;
    }

    .terminal-header {
        background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
        padding: 0.75rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--theme-color);
        position: relative;
        z-index: 1;
    }

    .header-title {
        color: var(--theme-color);
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .blink {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }

    .header-info {
        display: flex;
        gap: 1.5rem;
        font-size: 0.7rem;
        color: var(--theme-color);
        opacity: 0.7;
    }

    .back-btn {
        background: transparent;
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.375rem 0.75rem;
        border-radius: 4px;
        font-size: 0.75rem;
        cursor: pointer;
        font-family: inherit;
        transition: all 0.2s;
    }

    .back-btn:hover {
        background: var(--theme-color);
        color: #000;
    }

    /* Menu styles */
    .menu-content {
        padding: 1.5rem;
        text-align: center;
        position: relative;
        z-index: 1;
    }

    .ascii-art {
        color: var(--theme-color);
        font-size: 0.5rem;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        text-shadow: 0 0 10px var(--theme-color);
    }

    .menu-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        max-width: 400px;
        margin: 0 auto 1.5rem;
    }

    .menu-buttons button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: rgba(0, 255, 0, 0.05);
        border: 1px solid var(--theme-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        text-align: left;
    }

    .menu-buttons button:hover {
        background: rgba(0, 255, 0, 0.15);
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
        transform: translateX(5px);
    }

    .menu-buttons .icon {
        font-size: 1.5rem;
    }

    .menu-buttons .label {
        color: var(--theme-color);
        font-weight: 600;
        font-size: 0.95rem;
        display: block;
    }

    .menu-buttons .desc {
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.7rem;
    }

    .menu-options {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }

    .theme-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--theme-color);
        font-size: 0.8rem;
    }

    .theme-btn {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.2s;
    }

    .theme-btn.active {
        border-color: white;
        transform: scale(1.2);
    }

    .option-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.75rem;
        cursor: pointer;
        font-family: inherit;
    }

    .option-btn:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .stats-display {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .stats-display .stat {
        text-align: center;
    }

    .stats-display .stat-label {
        display: block;
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.7rem;
        margin-bottom: 0.25rem;
    }

    .stats-display .stat-value {
        color: var(--theme-color);
        font-size: 1.5rem;
        font-weight: 700;
    }

    .achievements-list {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .achievements-list span {
        background: rgba(0, 255, 0, 0.1);
        padding: 0.375rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        color: var(--theme-color);
        border: 1px solid var(--theme-color);
    }

    /* Terminal styles */
    .terminal-body {
        flex: 1;
        padding: 1rem;
        overflow-y: auto;
        position: relative;
        z-index: 1;
    }

    .terminal-line {
        margin-bottom: 0.25rem;
        line-height: 1.4;
    }

    .terminal-line pre {
        margin: 0;
        white-space: pre-wrap;
        font-family: inherit;
        font-size: 0.8rem;
        color: var(--theme-color);
    }

    .prompt {
        color: var(--theme-color);
        font-weight: 600;
    }

    .terminal-line.command {
        color: white;
        font-size: 0.85rem;
    }

    .terminal-line.output {
        color: var(--theme-color);
        opacity: 0.9;
    }

    .system-msg {
        color: #fbbf24;
        font-size: 0.8rem;
    }

    .terminal-input-line {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
    }

    .terminal-input-line input {
        background: transparent;
        border: none;
        color: white;
        font-family: inherit;
        font-size: 0.85rem;
        outline: none;
        flex: 1;
        caret-color: transparent;
    }

    .cursor {
        color: var(--theme-color);
        font-size: 0.85rem;
        opacity: 0;
    }

    .cursor.visible {
        opacity: 1;
    }

    /* Puzzle styles */
    .puzzle-content {
        padding: 1.5rem;
        position: relative;
        z-index: 1;
    }

    .puzzle-stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        color: var(--theme-color);
        font-size: 0.85rem;
        margin-bottom: 1.5rem;
    }

    .puzzle-question {
        background: rgba(0, 255, 0, 0.05);
        border: 1px solid var(--theme-color);
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
    }

    .puzzle-question pre {
        color: var(--theme-color);
        font-size: 1rem;
        margin: 0;
        text-align: center;
        word-break: break-all;
    }

    .puzzle-input {
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.875rem;
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        outline: none;
    }

    .puzzle-input:focus {
        box-shadow: 0 0 10px var(--theme-color);
    }

    .puzzle-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .puzzle-actions button {
        background: transparent;
        border: 1px solid var(--theme-color);
        color: var(--theme-color);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
        font-size: 0.8rem;
        transition: all 0.2s;
    }

    .puzzle-actions button:hover:not(:disabled) {
        background: var(--theme-color);
        color: #000;
    }

    .puzzle-actions button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .puzzle-complete {
        text-align: center;
        padding: 2rem;
    }

    .puzzle-complete h2 {
        color: var(--theme-color);
        margin-bottom: 1rem;
    }

    .final-score {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: var(--theme-color);
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }

    .puzzle-complete button {
        background: var(--theme-color);
        border: none;
        color: #000;
        padding: 0.75rem 2rem;
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 600;
    }

    /* Typing styles */
    .typing-content {
        padding: 1.5rem;
        position: relative;
        z-index: 1;
    }

    .typing-display {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--theme-color);
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
    }

    .typing-prompt {
        color: var(--theme-color);
    }

    .typing-display span {
        color: rgba(255, 255, 255, 0.3);
    }

    .typing-display span.correct {
        color: var(--theme-color);
    }

    .typing-display span.incorrect {
        color: #ef4444;
        text-decoration: underline;
    }

    .typing-input {
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--theme-color);
        color: white;
        padding: 0.875rem;
        border-radius: 4px;
        font-family: inherit;
        font-size: 1rem;
        margin-bottom: 1rem;
        outline: none;
    }

    .typing-input:focus {
        box-shadow: 0 0 10px var(--theme-color);
    }

    .typing-hint {
        text-align: center;
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.8rem;
    }

    .typing-results {
        text-align: center;
        padding: 1rem;
    }

    .typing-results h3 {
        color: var(--theme-color);
        margin-bottom: 1rem;
    }

    .typing-stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 1.5rem;
    }

    .typing-stat {
        text-align: center;
    }

    .typing-stat .stat-label {
        display: block;
        color: var(--theme-color);
        opacity: 0.6;
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
    }

    .typing-stat .stat-value {
        color: var(--theme-color);
        font-size: 2rem;
        font-weight: 700;
    }

    .typing-results button {
        background: var(--theme-color);
        border: none;
        color: #000;
        padding: 0.75rem 2rem;
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 600;
    }

    /* Responsive */
    @media (max-width: 500px) {
        .hacker-terminal {
            min-height: 400px;
            font-size: 0.85rem;
        }

        .ascii-art {
            font-size: 0.35rem;
        }

        .header-info {
            display: none;
        }

        .menu-options {
            flex-direction: column;
            align-items: center;
        }
    }
`,et=[{id:"_SCdj9d8SUQ",title:"Track 1"},{id:"cSLAO7zxS2M",title:"Track 2"},{id:"2tqQcIBhSOE",title:"Track 3"},{id:"ccu6JuC21rk",title:"Track 4"},{id:"2Vv-BfVoq4g",title:"Track 5"},{id:"pRfmrE0ToTo",title:"Track 6"},{id:"RBumgq5yVrA",title:"Track 7"},{id:"RgKAFK5djSk",title:"Track 8 - See You Again"},{id:"JGwWNGJdvx8",title:"Track 9 - Shape of You"},{id:"09R8_2nJtjg",title:"Track 10 - Sugar"},{id:"Il-an3K9pjg",title:"Track 11"},{id:"WXBHCQYxwr0",title:"Track 12"},{id:"SxGLPVvNjvY",title:"Track 13"},{id:"89S-RbszwJE",title:"Track 14"},{id:"fRh_vgS2dFE",title:"Track 15 - Sorry"},{id:"oyEuk8j8imI",title:"Track 16"}],Og=()=>t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M8 5v14l11-7z"})}),Wg=()=>t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}),Fg=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"})}),$g=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M6 6h2v12H6zm3.5 6l8.5 6V6z"})}),Vg=()=>t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"})}),Hg=()=>t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})}),Ug=()=>t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"})}),Gg=()=>t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"})}),hd=()=>t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 100 100",fill:"none",children:[t.jsxs("g",{transform:"rotate(45 50 50)",children:[t.jsx("rect",{x:"18",y:"22",width:"64",height:"64",rx:"8",fill:"#e57373"}),t.jsx("rect",{x:"18",y:"18",width:"64",height:"64",rx:"8",fill:"#f8bbd9"})]}),t.jsxs("g",{transform:"translate(25, 28)",children:[t.jsx("ellipse",{cx:"18",cy:"48",rx:"10",ry:"7",fill:"#e57373"}),t.jsx("ellipse",{cx:"42",cy:"44",rx:"10",ry:"7",fill:"#e57373"}),t.jsx("rect",{x:"26",y:"15",width:"4",height:"35",fill:"#e57373"}),t.jsx("rect",{x:"50",y:"11",width:"4",height:"35",fill:"#e57373"}),t.jsx("path",{d:"M26 15 L26 22 L54 15 L54 11 Z",fill:"#e57373"})]})]});function Yg(){const[e,r]=p.useState(0),[n,a]=p.useState(!1),[i,s]=p.useState(50),[o,c]=p.useState(!1),[l,m]=p.useState(!1),[h,x]=p.useState(!1),[g,E]=p.useState(!1),[w,v]=p.useState(!1),[N,d]=p.useState(!1),u=p.useRef(null),f=p.useRef(null);p.useEffect(()=>{if(window.YT)j();else{const _=document.createElement("script");_.src="https://www.youtube.com/iframe_api";const $=document.getElementsByTagName("script")[0];$.parentNode.insertBefore(_,$),window.onYouTubeIframeAPIReady=()=>{j()}}return()=>{u.current&&u.current.destroy()}},[]);const j=()=>{u.current=new window.YT.Player("youtube-player",{height:"0",width:"0",videoId:et[0].id,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,modestbranding:1,rel:0},events:{onReady:b,onStateChange:y}})},b=_=>{d(!0),_.target.setVolume(i)},y=_=>{_.data===window.YT.PlayerState.ENDED&&R(),_.data===window.YT.PlayerState.PLAYING&&a(!0),_.data===window.YT.PlayerState.PAUSED&&a(!1)},I=()=>{!u.current||!N||(n?u.current.pauseVideo():u.current.playVideo())},O=()=>{if(!u.current||!N)return;let _;h?_=Math.floor(Math.random()*et.length):_=e===0?et.length-1:e-1,r(_),u.current.loadVideoById(et[_].id)},R=()=>{if(!u.current||!N)return;let _;h?_=Math.floor(Math.random()*et.length):g&&e===et.length-1?_=0:_=(e+1)%et.length,r(_),u.current.loadVideoById(et[_].id)},W=_=>{const $=parseInt(_.target.value);s($),u.current&&N&&u.current.setVolume($),c($===0)},q=()=>{!u.current||!N||(o?(u.current.unMute(),u.current.setVolume(i||50),c(!1)):(u.current.mute(),c(!0)))},J=_=>{!u.current||!N||(r(_),u.current.loadVideoById(et[_].id),v(!1))};return l?t.jsxs("div",{className:"music-player-mini",onClick:()=>m(!1),children:[t.jsx("div",{className:"mini-icon",children:t.jsx(hd,{})}),t.jsxs("div",{className:`mini-visualizer ${n?"playing":""}`,children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),t.jsx("style",{children:Qg})]}):t.jsxs("div",{className:"music-player",ref:f,children:[t.jsx("div",{id:"youtube-player",style:{display:"none"}}),t.jsxs("div",{className:"player-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx(hd,{}),t.jsx("span",{children:"Music Player"})]}),t.jsx("div",{className:"header-actions",children:t.jsx("button",{className:"minimize-btn",onClick:()=>m(!0),children:t.jsx("span",{children:"−"})})})]}),t.jsxs("div",{className:"now-playing",children:[t.jsxs("div",{className:"album-art",children:[t.jsx("img",{src:`https://img.youtube.com/vi/${et[e].id}/mqdefault.jpg`,alt:"Album Art"}),t.jsxs("div",{className:`visualizer ${n?"playing":""}`,children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]})]}),t.jsxs("div",{className:"track-info",children:[t.jsx("div",{className:"track-title",children:et[e].title}),t.jsxs("div",{className:"track-number",children:["Track ",e+1," of ",et.length]})]})]}),t.jsxs("div",{className:"player-controls",children:[t.jsx("button",{className:`control-btn small ${h?"active":""}`,onClick:()=>x(!h),title:"Shuffle",children:t.jsx(Ug,{})}),t.jsx("button",{className:"control-btn",onClick:O,title:"Previous",children:t.jsx($g,{})}),t.jsx("button",{className:"control-btn play-btn",onClick:I,title:n?"Pause":"Play",children:n?t.jsx(Wg,{}):t.jsx(Og,{})}),t.jsx("button",{className:"control-btn",onClick:R,title:"Next",children:t.jsx(Fg,{})}),t.jsx("button",{className:`control-btn small ${g?"active":""}`,onClick:()=>E(!g),title:"Repeat",children:t.jsx(Gg,{})})]}),t.jsxs("div",{className:"volume-control",children:[t.jsx("button",{className:"volume-btn",onClick:q,children:o||i===0?t.jsx(Hg,{}):t.jsx(Vg,{})}),t.jsx("input",{type:"range",min:"0",max:"100",value:o?0:i,onChange:W,className:"volume-slider"}),t.jsxs("span",{className:"volume-value",children:[o?0:i,"%"]})]}),t.jsxs("button",{className:"playlist-toggle",onClick:()=>v(!w),children:[w?"Hide Playlist":"Show Playlist"," (",et.length," tracks)"]}),w&&t.jsx("div",{className:"playlist",children:et.map((_,$)=>t.jsxs("div",{className:`playlist-item ${$===e?"active":""}`,onClick:()=>J($),children:[t.jsx("span",{className:"track-num",children:$+1}),t.jsx("img",{src:`https://img.youtube.com/vi/${_.id}/default.jpg`,alt:"",className:"thumb"}),t.jsx("span",{className:"track-name",children:_.title}),$===e&&n&&t.jsxs("div",{className:"playing-indicator",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]})]},_.id))}),t.jsx("style",{children:Kg})]})}const Qg=`
    .music-player-mini {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #f8bbd9, #f48fb1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(244, 143, 177, 0.5);
        z-index: 1000;
        transition: all 0.3s ease;
        animation: pulse-glow-pink 2s ease-in-out infinite;
        border: 3px solid rgba(255, 255, 255, 0.3);
    }

    .music-player-mini:hover {
        transform: scale(1.15);
        box-shadow: 0 8px 35px rgba(244, 143, 177, 0.7);
    }

    .mini-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mini-icon svg {
        width: 40px;
        height: 40px;
    }

    .mini-visualizer {
        position: absolute;
        bottom: -10px;
        display: flex;
        gap: 3px;
        align-items: flex-end;
        height: 14px;
    }

    .mini-visualizer span {
        width: 4px;
        background: linear-gradient(to top, #e57373, #f48fb1);
        border-radius: 2px;
        height: 4px;
    }

    .mini-visualizer.playing span {
        animation: miniBar 0.5s ease-in-out infinite alternate;
    }

    .mini-visualizer.playing span:nth-child(2) { animation-delay: 0.1s; }
    .mini-visualizer.playing span:nth-child(3) { animation-delay: 0.2s; }

    @keyframes miniBar {
        to { height: 14px; }
    }

    @keyframes pulse-glow-pink {
        0%, 100% { 
            box-shadow: 0 4px 20px rgba(244, 143, 177, 0.5);
            transform: scale(1);
        }
        50% { 
            box-shadow: 0 6px 30px rgba(229, 115, 115, 0.6);
            transform: scale(1.05);
        }
    }
`,Kg=`
    .music-player {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 320px;
        background: rgba(15, 15, 30, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 16px;
        border: 1px solid rgba(99, 102, 241, 0.2);
        padding: 1rem;
        z-index: 1000;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    }

    .player-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #a78bfa;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .header-actions {
        display: flex;
        gap: 0.5rem;
    }

    .minimize-btn {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        line-height: 1;
        transition: all 0.2s;
    }

    .minimize-btn:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .now-playing {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .album-art {
        width: 80px;
        height: 80px;
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
    }

    .album-art img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .visualizer {
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 3px;
        align-items: flex-end;
        height: 20px;
    }

    .visualizer span {
        width: 4px;
        background: linear-gradient(to top, #22d3ee, #a78bfa);
        border-radius: 2px;
        height: 4px;
    }

    .visualizer.playing span {
        animation: bar 0.4s ease-in-out infinite alternate;
    }

    .visualizer.playing span:nth-child(1) { animation-delay: 0s; }
    .visualizer.playing span:nth-child(2) { animation-delay: 0.1s; }
    .visualizer.playing span:nth-child(3) { animation-delay: 0.2s; }
    .visualizer.playing span:nth-child(4) { animation-delay: 0.3s; }
    .visualizer.playing span:nth-child(5) { animation-delay: 0.4s; }

    @keyframes bar {
        to { height: 20px; }
    }

    .track-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
    }

    .track-title {
        font-weight: 600;
        color: white;
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.25rem;
    }

    .track-number {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .player-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .control-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }

    .control-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }

    .control-btn.small {
        width: 32px;
        height: 32px;
    }

    .control-btn.small.active {
        color: #22d3ee;
        background: rgba(34, 211, 238, 0.2);
    }

    .control-btn.play-btn {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    }

    .control-btn.play-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
    }

    .volume-control {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .volume-btn {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        padding: 0;
        display: flex;
    }

    .volume-btn:hover {
        color: white;
    }

    .volume-slider {
        flex: 1;
        height: 4px;
        -webkit-appearance: none;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        outline: none;
    }

    .volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 14px;
        height: 14px;
        background: #6366f1;
        border-radius: 50%;
        cursor: pointer;
    }

    .volume-value {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.5);
        min-width: 32px;
        text-align: right;
    }

    .playlist-toggle {
        width: 100%;
        padding: 0.625rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .playlist-toggle:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }

    .playlist {
        margin-top: 0.75rem;
        max-height: 200px;
        overflow-y: auto;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.2);
    }

    .playlist::-webkit-scrollbar {
        width: 4px;
    }

    .playlist::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
    }

    .playlist-item {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 6px;
    }

    .playlist-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .playlist-item.active {
        background: rgba(99, 102, 241, 0.2);
    }

    .track-num {
        width: 20px;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.4);
        text-align: center;
    }

    .thumb {
        width: 36px;
        height: 36px;
        border-radius: 4px;
        object-fit: cover;
    }

    .track-name {
        flex: 1;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.8);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .playlist-item.active .track-name {
        color: #a78bfa;
    }

    .playing-indicator {
        display: flex;
        gap: 2px;
        align-items: flex-end;
        height: 14px;
    }

    .playing-indicator span {
        width: 3px;
        background: #22d3ee;
        border-radius: 1px;
        animation: bar 0.4s ease-in-out infinite alternate;
    }

    .playing-indicator span:nth-child(2) { animation-delay: 0.1s; }
    .playing-indicator span:nth-child(3) { animation-delay: 0.2s; }

    @media (max-width: 400px) {
        .music-player {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
        }
    }
`,qg=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Jg=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),Xg=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"})}),Zg=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),t.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),ex=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),t.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),tx=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),t.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),t.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),t.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),t.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),t.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),t.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),t.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]}),rx=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("line",{x1:"6",y1:"12",x2:"10",y2:"12"}),t.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"14"}),t.jsx("line",{x1:"15",y1:"13",x2:"15.01",y2:"13"}),t.jsx("line",{x1:"18",y1:"11",x2:"18.01",y2:"11"}),t.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"})]}),nx=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),t.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),t.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),ax=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),t.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ix=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),t.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),sx=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),t.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),t.jsx("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),t.jsx("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),t.jsx("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),t.jsx("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),t.jsx("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),t.jsx("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),t.jsx("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),t.jsx("line",{x1:"1",y1:"14",x2:"4",y2:"14"})]}),ox=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),t.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),lx=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),cx=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),dx=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})}),ux=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),t.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),t.jsx("polyline",{points:"7 3 7 8 15 8"})]}),px=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),t.jsx("circle",{cx:"12",cy:"13",r:"4"})]});function mx(){var w,v,N;const{user:e}=kr(),[r,n]=p.useState("account"),[a,i]=p.useState(!1),[s,o]=p.useState(""),c=p.useRef(null),[l,m]=p.useState({name:(e==null?void 0:e.name)||"",username:((w=e==null?void 0:e.email)==null?void 0:w.split("@")[0])||"",email:(e==null?void 0:e.email)||"",password:"",twoFactor:!1,sessionTimeout:30,loginNotifications:!0,allowMultiDevice:!0,themeMode:"dark",accentColor:"cyan",cardStyle:"rounded",enableAnimations:!0,compactMode:!1,fontSize:"medium",language:"id",dateFormat:"DD/MM/YYYY",timeZone:"Asia/Jakarta",emailNotif:!0,pushNotif:!0,soundEffects:!0,promoEmails:!1,startPage:"overview",autoRefresh:!0,keyboardShortcuts:!0,gameDifficulty:"normal",showHints:!0,gameSound:!0,autoBackup:!0,dataRetention:"30days",publicProfile:!1,showOnlineStatus:!0,allowTracking:!1,apiKeyOpenAI:"",githubToken:"",debugMode:!1,betaFeatures:!1,rating:0,feedbackText:""}),h=(d,u)=>{m(f=>({...f,[d]:u}))},x=()=>{localStorage.setItem("enhanced_settings",JSON.stringify(l)),i(!0),setTimeout(()=>i(!1),2e3)};p.useEffect(()=>{const d=localStorage.getItem("enhanced_settings");d&&m(u=>({...u,...JSON.parse(d)}))},[]);const g=[{id:"account",label:"Akun",icon:qg,desc:"Profil & Identitas"},{id:"security",label:"Keamanan",icon:Jg,desc:"Password & Sesi"},{id:"theme",label:"Tema & Tampilan",icon:Xg,desc:"Warna & Layout"},{id:"language",label:"Bahasa",icon:Zg,desc:"Lokalisasi & Waktu"},{id:"notifications",label:"Notifikasi",icon:ex,desc:"Email & Push"},{id:"preferences",label:"Preferensi",icon:tx,desc:"Pengaturan Dasar"},{id:"games",label:"Mini Games",icon:rx,desc:"Config Game"},{id:"data",label:"Data",icon:nx,desc:"Backup & Storage"},{id:"privacy",label:"Privasi",icon:ax,desc:"Visibilitas"},{id:"integrations",label:"Integrasi",icon:ix,desc:"API & 3rd Party"},{id:"system",label:"Sistem",icon:sx,desc:"Info & Debug"},{id:"help",label:"Bantuan",icon:ox,desc:"FAQ & Support"},{id:"feedback",label:"Feedback",icon:lx,desc:"Kritik & Saran"},{id:"credits",label:"Credits",icon:cx,desc:"Tentang Aplikasi"}],E=g.filter(d=>d.label.toLowerCase().includes(s.toLowerCase())||d.desc.toLowerCase().includes(s.toLowerCase()));return t.jsxs("div",{className:"settings-container",children:[t.jsxs("div",{className:"settings-sidebar",children:[t.jsx("div",{className:"settings-search",children:t.jsx("input",{type:"text",placeholder:"Cari pengaturan...",value:s,onChange:d=>o(d.target.value)})}),t.jsx("div",{className:"settings-nav-list",children:E.map(d=>t.jsxs("button",{className:`nav-btn ${r===d.id?"active":""}`,onClick:()=>n(d.id),children:[t.jsx("div",{className:"nav-icon",children:t.jsx(d.icon,{})}),t.jsxs("div",{className:"nav-text",children:[t.jsx("span",{className:"nav-label",children:d.label}),t.jsx("span",{className:"nav-desc",children:d.desc})]})]},d.id))})]}),t.jsxs("div",{className:"settings-content-area",children:[t.jsxs("div",{className:"content-header",children:[t.jsxs("div",{className:"header-title",children:[t.jsx("h2",{children:(v=g.find(d=>d.id===r))==null?void 0:v.label}),t.jsx("p",{children:(N=g.find(d=>d.id===r))==null?void 0:N.desc})]}),t.jsx("button",{className:`btn-save ${a?"saved":""}`,onClick:x,children:a?t.jsxs(t.Fragment,{children:[t.jsx(dx,{})," Tersimpan"]}):t.jsxs(t.Fragment,{children:[t.jsx(ux,{})," Simpan Perubahan"]})})]}),t.jsxs("div",{className:"content-body animate-fade",children:[r==="account"&&t.jsxs("div",{className:"settings-grid",children:[t.jsxs("div",{className:"section-card profile-card",children:[t.jsx("h3",{children:"Profil Pengguna"}),t.jsxs("div",{className:"profile-edit",children:[t.jsxs("div",{className:"avatar-wrapper",children:[t.jsx("div",{className:"avatar-placeholder",children:l.name.charAt(0)}),t.jsx("button",{className:"btn-camera",onClick:()=>{var d;return(d=c.current)==null?void 0:d.click()},children:t.jsx(px,{})}),t.jsx("input",{type:"file",ref:c,hidden:!0})]}),t.jsxs("div",{className:"profile-inputs",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Nama Lengkap"}),t.jsx("input",{type:"text",value:l.name,onChange:d=>h("name",d.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Username"}),t.jsx("input",{type:"text",value:l.username,onChange:d=>h("username",d.target.value)})]})]})]})]}),t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Info Kontak"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:l.email,onChange:d=>h("email",d.target.value)})]})]})]}),r==="security"&&t.jsxs("div",{className:"settings-grid",children:[t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Password & Autentikasi"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Ganti Password"}),t.jsx("input",{type:"password",placeholder:"Password Baru",onChange:d=>h("password",d.target.value)})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Two-Factor Authentication (2FA)"}),t.jsx("p",{children:"Verifikasi tambahan via aplikasi authenticator"})]}),t.jsx(ht,{checked:l.twoFactor,onChange:d=>h("twoFactor",d)})]})]}),t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Sesi Login"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Session Timeout (Menit)"}),t.jsx("input",{type:"number",value:l.sessionTimeout,onChange:d=>h("sessionTimeout",d.target.value)})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Login Notifications"}),t.jsx("p",{children:"Terima email saat ada login dari perangkat baru"})]}),t.jsx(ht,{checked:l.loginNotifications,onChange:d=>h("loginNotifications",d)})]})]})]}),r==="theme"&&t.jsxs("div",{className:"settings-grid",children:[t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Mode Tampilan"}),t.jsx("div",{className:"theme-options",children:["dark","light","system"].map(d=>t.jsx("button",{className:`theme-btn-opt ${l.themeMode===d?"active":""}`,onClick:()=>h("themeMode",d),children:d==="dark"?"🌙 Dark":d==="light"?"☀️ Light":"💻 System"},d))})]}),t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Warna Aksen"}),t.jsx("div",{className:"color-options",children:[{id:"cyan",color:"#22d3ee"},{id:"purple",color:"#a78bfa"},{id:"green",color:"#10b981"},{id:"orange",color:"#f97316"},{id:"pink",color:"#f472b6"},{id:"blue",color:"#3b82f6"},{id:"red",color:"#ef4444"},{id:"yellow",color:"#eab308"}].map(d=>t.jsx("button",{className:`color-btn ${l.accentColor===d.id?"active":""}`,style:{backgroundColor:d.color},onClick:()=>h("accentColor",d.id)},d.id))})]}),t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Interface"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Gaya Kartu"}),t.jsxs("select",{value:l.cardStyle,onChange:d=>h("cardStyle",d.target.value),children:[t.jsx("option",{value:"rounded",children:"Rounded (Melengkung)"}),t.jsx("option",{value:"sharp",children:"Sharp (Tajam)"}),t.jsx("option",{value:"glass",children:"Glassmorphism"})]})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Enable Animations"}),t.jsx("p",{children:"Efek transisi halus antar halaman"})]}),t.jsx(ht,{checked:l.enableAnimations,onChange:d=>h("enableAnimations",d)})]})]})]}),r==="language"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Lokalisasi"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Bahasa Aplikasi"}),t.jsxs("select",{value:l.language,onChange:d=>h("language",d.target.value),children:[t.jsx("option",{value:"id",children:"Bahasa Indonesia"}),t.jsx("option",{value:"en",children:"English (US)"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Zona Waktu"}),t.jsxs("select",{value:l.timeZone,onChange:d=>h("timeZone",d.target.value),children:[t.jsx("option",{value:"Asia/Jakarta",children:"WIB (Jakarta)"}),t.jsx("option",{value:"Asia/Makassar",children:"WITA (Makassar)"}),t.jsx("option",{value:"Asia/Jayapura",children:"WIT (Jayapura)"}),t.jsx("option",{value:"UTC",children:"UTC"})]})]})]})}),r==="notifications"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Channel Notifikasi"}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Email Notifications"}),t.jsx("p",{children:"Update penting via email"})]}),t.jsx(ht,{checked:l.emailNotif,onChange:d=>h("emailNotif",d)})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Push Notifications"}),t.jsx("p",{children:"Notifikasi browser"})]}),t.jsx(ht,{checked:l.pushNotif,onChange:d=>h("pushNotif",d)})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Sound Effects"}),t.jsx("p",{children:"Suara saat notifikasi masuk"})]}),t.jsx(ht,{checked:l.soundEffects,onChange:d=>h("soundEffects",d)})]})]})}),r==="preferences"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"General Preferences"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Halaman Awal"}),t.jsxs("select",{value:l.startPage,onChange:d=>h("startPage",d.target.value),children:[t.jsx("option",{value:"overview",children:"Dashboard Overview"}),t.jsx("option",{value:"terminal",children:"Hacker Terminal"}),t.jsx("option",{value:"games",children:"Games"})]})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Auto Refresh Data"}),t.jsx("p",{children:"Perbarui data dashboard otomatis"})]}),t.jsx(ht,{checked:l.autoRefresh,onChange:d=>h("autoRefresh",d)})]})]})}),r==="games"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Konfigurasi Game"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Tingkat Kesulitan AI"}),t.jsxs("select",{value:l.gameDifficulty,onChange:d=>h("gameDifficulty",d.target.value),children:[t.jsx("option",{value:"easy",children:"Easy (Pemula)"}),t.jsx("option",{value:"normal",children:"Normal (Menengah)"}),t.jsx("option",{value:"hard",children:"Hard (Ahli)"}),t.jsx("option",{value:"impossible",children:"Impossible (Hacker Mode)"})]})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Show Hints"}),t.jsx("p",{children:"Tampilkan bantuan langkah terbaik"})]}),t.jsx(ht,{checked:l.showHints,onChange:d=>h("showHints",d)})]})]})}),r==="data"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Manajemen Data"}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Auto Backup"}),t.jsx("p",{children:"Backup data harian otomatis"})]}),t.jsx(ht,{checked:l.autoBackup,onChange:d=>h("autoBackup",d)})]}),t.jsxs("div",{className:"btn-group",children:[t.jsx("button",{className:"btn-secondary",children:"Export Data (JSON)"}),t.jsx("button",{className:"btn-secondary danger",children:"Clear Cache"})]})]})}),r==="privacy"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Privasi Akun"}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Public Profile"}),t.jsx("p",{children:"Izinkan orang lain melihat profil"})]}),t.jsx(ht,{checked:l.publicProfile,onChange:d=>h("publicProfile",d)})]}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Show Online Status"}),t.jsx("p",{children:"Tampilkan indikator online"})]}),t.jsx(ht,{checked:l.showOnlineStatus,onChange:d=>h("showOnlineStatus",d)})]})]})}),r==="integrations"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"API Keys"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"OpenAI API Key"}),t.jsx("input",{type:"password",value:l.apiKeyOpenAI,onChange:d=>h("apiKeyOpenAI",d.target.value),placeholder:"sk-..."})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"GitHub Token"}),t.jsx("input",{type:"password",value:l.githubToken,onChange:d=>h("githubToken",d.target.value),placeholder:"ghp_..."})]})]})}),r==="system"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"System Info"}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{children:"App Version"})," ",t.jsx("span",{children:"v2.5.0"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{children:"Build"})," ",t.jsx("span",{children:"Production"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{children:"React Version"})," ",t.jsx("span",{children:"18.2.0"})]}),t.jsx("div",{className:"divider"}),t.jsxs("div",{className:"setting-toggle",children:[t.jsxs("div",{children:[t.jsx("h4",{children:"Debug Mode"}),t.jsx("p",{children:"Tampilkan log detail di console"})]}),t.jsx(ht,{checked:l.debugMode,onChange:d=>h("debugMode",d)})]})]})}),r==="help"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Pusat Bantuan"}),t.jsxs("div",{className:"help-links",children:[t.jsx("a",{href:"#",className:"help-link",children:"📘 Dokumentasi Pengguna"}),t.jsx("a",{href:"#",className:"help-link",children:"🎥 Video Tutorial"}),t.jsx("a",{href:"#",className:"help-link",children:"💬 Hubungi Support"}),t.jsx("a",{href:"#",className:"help-link",children:"🐛 Laporkan Bug"})]})]})}),r==="feedback"&&t.jsx("div",{className:"settings-grid",children:t.jsxs("div",{className:"section-card",children:[t.jsx("h3",{children:"Kirim Masukan"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Bagaimana pengalaman Anda?"}),t.jsx("div",{className:"rating-stars",children:[1,2,3,4,5].map(d=>t.jsx("span",{className:`star ${l.rating>=d?"filled":""}`,onClick:()=>h("rating",d),children:"★"},d))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Saran & Kritik"}),t.jsx("textarea",{rows:"4",placeholder:"Tuliskan masukan Anda disini...",value:l.feedbackText,onChange:d=>h("feedbackText",d.target.value)})]}),t.jsx("button",{className:"btn-secondary",children:"Kirim Feedback"})]})}),r==="credits"&&t.jsxs("div",{className:"credits-view",children:[t.jsxs("div",{className:"credits-header",children:[t.jsx("h1",{children:"Lutfi-Lab.ID"}),t.jsx("p",{children:"Cybersecurity & Learning Platform"})]}),t.jsxs("div",{className:"credits-content",children:[t.jsx("div",{className:"credit-role",children:"Created by"}),t.jsx("div",{className:"credit-name",children:"Muhammad Lutfi Muzaki"}),t.jsx("div",{className:"credit-role",children:"Version"}),t.jsx("div",{className:"credit-version",children:"2.5.0 (2025)"}),t.jsxs("div",{className:"tech-stack",children:[t.jsx("span",{children:"React"}),t.jsx("span",{children:"Node.js"}),t.jsx("span",{children:"NestJS"}),t.jsx("span",{children:"MongoDB"})]}),t.jsx("div",{className:"copyright",children:"© 2025 Lutfi-Lab.ID. All rights reserved."})]})]})]})]}),t.jsx("style",{children:fx})]})}function ht({checked:e,onChange:r}){return t.jsx("div",{className:`toggle-switch ${e?"checked":""}`,onClick:()=>r(!e),children:t.jsx("div",{className:"toggle-thumb"})})}const fx=`
    .settings-container {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 0;
        height: calc(100vh - 140px);
        background: rgba(15, 15, 25, 0.4);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        overflow: hidden;
    }

    /* Sidebar */
    .settings-sidebar {
        background: rgba(0, 0, 0, 0.2);
        border-right: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        flex-direction: column;
    }

    .settings-search {
        padding: 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .settings-search input {
        width: 100%;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.75rem 1rem;
        border-radius: 10px;
        color: white;
        font-size: 0.9rem;
    }

    .settings-search input:focus {
        outline: none;
        border-color: #22d3ee;
        background: rgba(34, 211, 238, 0.05);
    }

    .settings-nav-list {
        padding: 1rem;
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .settings-nav-list::-webkit-scrollbar {
        width: 4px;
    }

    .settings-nav-list::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    .nav-btn {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.875rem 1rem;
        background: transparent;
        border: none;
        border-radius: 12px;
        text-align: left;
        cursor: pointer;
        transition: all 0.2s;
        color: rgba(255, 255, 255, 0.6);
        width: 100%;
    }

    .nav-btn:hover {
        background: rgba(255, 255, 255, 0.05);
        color: white;
    }

    .nav-btn.active {
        background: linear-gradient(90deg, rgba(34, 211, 238, 0.1), transparent);
        border-left: 3px solid #22d3ee;
        color: white;
    }

    .nav-icon {
        color: #22d3ee;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
    }

    .nav-text {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .nav-label {
        font-weight: 500;
        font-size: 0.9rem;
    }

    .nav-desc {
        font-size: 0.7rem;
        opacity: 0.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Content Area */
    .settings-content-area {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.1);
    }

    .content-header {
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        z-index: 10;
    }

    .header-title h2 {
        font-size: 1.5rem;
        margin: 0;
        color: white;
    }

    .header-title p {
        margin: 0.25rem 0 0;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
    }

    .content-body {
        flex: 1;
        overflow-y: auto;
        padding: 2rem;
    }

    .content-body::-webkit-scrollbar {
        width: 8px;
    }

    .content-body::-webkit-scrollbar-track {
        background: transparent;
    }

    .content-body::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    /* Grid Layout */
    .settings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1.5rem;
    }

    .section-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        transition: all 0.3s;
    }

    .section-card:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }

    .section-card h3 {
        font-size: 1.1rem;
        color: #22d3ee;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Form Elements */
    .form-group {
        margin-bottom: 1.25rem;
    }

    .form-group label {
        display: block;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
    }

    .form-group input, 
    .form-group select, 
    .form-group textarea {
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.75rem 1rem;
        border-radius: 8px;
        color: white;
        font-size: 0.95rem;
        transition: border-color 0.2s;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #22d3ee;
    }

    /* Toggles */
    .setting-toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
    }

    .setting-toggle:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .setting-toggle h4 {
        font-size: 0.95rem;
        color: white;
        margin-bottom: 0.25rem;
    }

    .setting-toggle p {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .toggle-switch {
        width: 48px;
        height: 26px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        cursor: pointer;
        position: relative;
        transition: background 0.3s;
        flex-shrink: 0;
    }

    .toggle-switch.checked {
        background: #22d3ee;
    }

    .toggle-thumb {
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 3px;
        left: 3px;
        transition: transform 0.3s;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .toggle-switch.checked .toggle-thumb {
        transform: translateX(22px);
    }

    /* Buttons */
    .btn-save {
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #10b981, #22d3ee);
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s;
        box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);
    }

    .btn-save.saved {
        background: #10b981;
    }

    .btn-save:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(34, 211, 238, 0.4);
    }

    .btn-secondary {
        padding: 0.6rem 1rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.15);
    }

    .btn-secondary.danger {
        background: rgba(239, 68, 68, 0.1);
        border-color: rgba(239, 68, 68, 0.3);
        color: #ef4444;
    }
    
    .btn-group {
        display: flex;
        gap: 0.75rem;
    }

    /* Custom Profile */
    .profile-edit {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
    }

    .avatar-wrapper {
        position: relative;
    }

    .avatar-placeholder {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #a78bfa);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        color: white;
        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }

    .btn-camera {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #22d3ee;
        border: 2px solid #0f0f1e;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: black;
        transition: transform 0.2s;
    }

    .btn-camera:hover {
        transform: scale(1.1);
    }

    .profile-inputs {
        flex: 1;
        width: 100%;
    }

    /* Theme Options */
    .theme-options {
        display: flex;
        gap: 0.75rem;
    }

    .theme-btn-opt {
        flex: 1;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    .theme-btn-opt.active {
        border-color: #22d3ee;
        background: rgba(34, 211, 238, 0.1);
        color: #22d3ee;
    }

    .color-options {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .color-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 3px solid transparent;
        cursor: pointer;
        transition: transform 0.2s;
    }

    .color-btn.active {
        border-color: white;
        transform: scale(1.15);
    }

    /* Feedback Stars */
    .rating-stars {
        display: flex;
        gap: 0.5rem;
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }

    .rating-stars .star {
        transition: color 0.2s;
    }

    .rating-stars .star:hover,
    .rating-stars .star.filled {
        color: #fbbf24;
    }
    
    /* Help Links */
    .help-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .help-link {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        color: white;
        text-decoration: none;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .help-link:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(4px);
    }

    /* Credits */
    .credits-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        min-height: 400px;
    }

    .credits-header h1 {
        font-size: 2.5rem;
        background: linear-gradient(135deg, #22d3ee, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
    }

    .credits-header p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.1rem;
    }

    .credits-content {
        margin-top: 3rem;
        background: rgba(255, 255, 255, 0.03);
        padding: 2rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        min-width: 300px;
    }

    .credit-role {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0.25rem;
    }

    .credit-name {
        font-size: 1.25rem;
        color: white;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
    
    .credit-version {
        font-size: 1rem;
        color: #22d3ee;
        margin-bottom: 1.5rem;
    }

    .tech-stack {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }

    .tech-stack span {
        padding: 0.25rem 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .copyright {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 1rem;
    }
    
    /* Animation */
    .animate-fade {
        animation: fadeIn 0.4s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
    @media (max-width: 900px) {
        .settings-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        .settings-container {
            grid-template-columns: 1fr;
            height: auto;
        }
        
        .settings-sidebar {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            max-height: 250px;
        }

        .settings-nav-list {
            flex-direction: row;
            overflow-x: auto;
            border-bottom: none;
        }
        
        .nav-text {
            display: none;
        }
        
        .nav-btn {
            width: auto;
            padding: 1rem;
        }
        
        .content-body {
            padding: 1rem;
        }
    }
`,hx=()=>{const[e,r]=p.useState([{id:1,title:"Review Security Vulnerabilities",description:"Analyze and document all security vulnerabilities from the latest penetration test.",deadline:new Date(Date.now()+1728e5),category:"work",priority:"critical",status:"in-progress",subtasks:[{id:1,text:"Review network scan results",completed:!0},{id:2,text:"Document SQL injection findings",completed:!0},{id:3,text:"Create remediation plan",completed:!1},{id:4,text:"Prepare executive summary",completed:!1}],attachments:[],links:["https://owasp.org/Top10"],estimatedDuration:240,comments:[],colorTag:"#ef4444",assignee:null,location:null,createdAt:new Date(Date.now()-2592e5),updatedAt:new Date},{id:2,title:"Update Firewall Rules",description:"Configure new firewall rules for the production environment.",deadline:new Date(Date.now()+432e6),category:"work",priority:"high",status:"todo",subtasks:[{id:1,text:"Backup current configuration",completed:!1},{id:2,text:"Add new IP whitelist",completed:!1},{id:3,text:"Test connectivity",completed:!1}],attachments:[],links:[],estimatedDuration:120,comments:[],colorTag:"#f59e0b",assignee:null,location:null,createdAt:new Date(Date.now()-864e5),updatedAt:new Date},{id:3,title:"Complete React Course",description:"Finish the advanced React patterns course on Udemy.",deadline:new Date(Date.now()+12096e5),category:"campus",priority:"medium",status:"todo",subtasks:[{id:1,text:"Watch Module 5",completed:!1},{id:2,text:"Complete practice exercises",completed:!1},{id:3,text:"Build mini project",completed:!1}],attachments:[],links:["https://udemy.com"],estimatedDuration:480,comments:[],colorTag:"#6366f1",assignee:null,location:null,createdAt:new Date(Date.now()-6048e5),updatedAt:new Date},{id:4,title:"Team Meeting Preparation",description:"Prepare presentation slides for the weekly security review meeting.",deadline:new Date(Date.now()+864e5),category:"work",priority:"high",status:"review",subtasks:[{id:1,text:"Create presentation outline",completed:!0},{id:2,text:"Add security metrics",completed:!0},{id:3,text:"Review with manager",completed:!1}],attachments:[],links:[],estimatedDuration:90,comments:[],colorTag:"#10b981",assignee:null,location:"Conference Room A",createdAt:new Date(Date.now()-1728e5),updatedAt:new Date},{id:5,title:"Setup Personal VPN",description:"Configure personal VPN server for secure browsing.",deadline:new Date(Date.now()-864e5),category:"personal",priority:"low",status:"done",subtasks:[{id:1,text:"Choose VPN provider",completed:!0},{id:2,text:"Configure server",completed:!0},{id:3,text:"Test connection",completed:!0}],attachments:[],links:[],estimatedDuration:60,comments:[],colorTag:"#8b5cf6",assignee:null,location:null,createdAt:new Date(Date.now()-864e6),updatedAt:new Date,completedAt:new Date}]),[n,a]=p.useState(!1),[i,s]=p.useState(null),[o,c]=p.useState("list"),[l,m]=p.useState(null),[h,x]=p.useState(new Set),[g,E]=p.useState({status:"all",priority:"all",category:"all",search:"",colorTag:"all"}),[w,v]=p.useState("deadline"),[N,d]=p.useState("asc"),[u,f]=p.useState({title:"",description:"",deadline:"",category:"work",priority:"medium",status:"todo",subtasks:[],links:[],estimatedDuration:60,colorTag:"#6366f1",location:""}),[j,b]=p.useState(""),[y,I]=p.useState(""),O=[{id:"work",label:"Kerja",icon:"💼"},{id:"campus",label:"Kampus",icon:"🎓"},{id:"project",label:"Project",icon:"🚀"},{id:"personal",label:"Pribadi",icon:"👤"},{id:"other",label:"Lainnya",icon:"📌"}],R=[{id:"low",label:"Low",color:"#6b7280",icon:"▽"},{id:"medium",label:"Medium",color:"#3b82f6",icon:"◇"},{id:"high",label:"High",color:"#f59e0b",icon:"△"},{id:"critical",label:"Critical",color:"#ef4444",icon:"⚠"}],W=[{id:"todo",label:"To-Do",color:"#6b7280"},{id:"in-progress",label:"In Progress",color:"#3b82f6"},{id:"review",label:"Review",color:"#f59e0b"},{id:"done",label:"Done",color:"#10b981"}],q=["#ef4444","#f59e0b","#10b981","#3b82f6","#6366f1","#8b5cf6","#ec4899","#6b7280"],J=M=>{if(!M||M.length===0)return 0;const te=M.filter(de=>de.completed).length;return Math.round(te/M.length*100)},_=M=>{const me=(M-new Date)/(1e3*60*60);return me<0?{status:"overdue",label:"Overdue",color:"#ef4444"}:me<24?{status:"critical",label:"Today",color:"#ef4444"}:me<72?{status:"soon",label:"Soon",color:"#f59e0b"}:{status:"safe",label:"On Track",color:"#10b981"}},$=M=>{const de=M-new Date;if(de<0){const Z=Math.floor(Math.abs(de)/864e5);return Z===0?"Today":`${Z}d ago`}const me=Math.floor(de/(1e3*60*60*24)),K=Math.floor(de%(1e3*60*60*24)/(1e3*60*60));return me===0?`${K}h`:`${me}d ${K}h`},T=M=>{const te=Math.floor(M/60),de=M%60;return te===0?`${de}m`:de===0?`${te}h`:`${te}h ${de}m`},C=p.useCallback(()=>{let M=[...e];if(g.status!=="all"&&(M=M.filter(te=>te.status===g.status)),g.priority!=="all"&&(M=M.filter(te=>te.priority===g.priority)),g.category!=="all"&&(M=M.filter(te=>te.category===g.category)),g.colorTag!=="all"&&(M=M.filter(te=>te.colorTag===g.colorTag)),g.search){const te=g.search.toLowerCase();M=M.filter(de=>de.title.toLowerCase().includes(te)||de.description.toLowerCase().includes(te))}return M.sort((te,de)=>{let me=0;switch(w){case"deadline":me=new Date(te.deadline)-new Date(de.deadline);break;case"priority":const K={critical:0,high:1,medium:2,low:3};me=K[te.priority]-K[de.priority];break;case"created":me=new Date(te.createdAt)-new Date(de.createdAt);break;case"title":me=te.title.localeCompare(de.title);break}return N==="asc"?me:-me}),M},[e,g,w,N]),A=()=>{if(!u.title.trim())return;const M={id:Date.now(),...u,deadline:u.deadline?new Date(u.deadline):new Date(Date.now()+7*24*60*60*1e3),attachments:[],comments:[],assignee:null,createdAt:new Date,updatedAt:new Date};r([...e,M]),z(),a(!1)},P=(M,te)=>{r(e.map(de=>de.id===M?{...de,...te,updatedAt:new Date}:de))},L=M=>{r(e.filter(te=>te.id!==M))},z=()=>{f({title:"",description:"",deadline:"",category:"work",priority:"medium",status:"todo",subtasks:[],links:[],estimatedDuration:60,colorTag:"#6366f1",location:""}),b(""),I("")},V=()=>{j.trim()&&(f({...u,subtasks:[...u.subtasks,{id:Date.now(),text:j,completed:!1}]}),b(""))},D=M=>{f({...u,subtasks:u.subtasks.filter(te=>te.id!==M)})},B=(M,te)=>{r(e.map(de=>de.id!==M?de:{...de,subtasks:de.subtasks.map(me=>me.id===te?{...me,completed:!me.completed}:me),updatedAt:new Date}))},F=()=>{y.trim()&&(f({...u,links:[...u.links,y]}),I(""))},k=M=>{f({...u,links:u.links.filter((te,de)=>de!==M)})},H=(M,te)=>{P(M,{status:te,...te==="done"?{completedAt:new Date}:{completedAt:null}})},U=(M,te)=>{m(te),M.dataTransfer.effectAllowed="move"},Y=M=>{M.preventDefault(),M.dataTransfer.dropEffect="move"},ae=(M,te)=>{M.preventDefault(),l&&l.status!==te&&H(l.id,te),m(null)},ne=M=>{const te=new Set(h);te.has(M)?te.delete(M):te.add(M),x(te)},pe=M=>{var be;const te=J(M.subtasks),de=_(new Date(M.deadline)),me=R.find(ie=>ie.id===M.priority),K=O.find(ie=>ie.id===M.category),Z=h.has(M.id);return t.jsxs("div",{className:`task-card ${M.status} ${(l==null?void 0:l.id)===M.id?"dragging":""}`,draggable:!0,onDragStart:ie=>U(ie,M),style:{borderLeftColor:M.colorTag},children:[t.jsxs("div",{className:"task-card-header",children:[t.jsxs("div",{className:"task-meta-row",children:[t.jsx("span",{className:"category-badge",title:K==null?void 0:K.label,children:K==null?void 0:K.icon}),t.jsxs("span",{className:`priority-indicator ${M.priority}`,style:{color:me==null?void 0:me.color},title:me==null?void 0:me.label,children:[me==null?void 0:me.icon," ",me==null?void 0:me.label]}),t.jsxs("span",{className:`deadline-badge ${de.status}`,style:{color:de.color},children:["⏰ ",$(new Date(M.deadline))]})]}),t.jsxs("div",{className:"task-actions",children:[t.jsx("button",{className:"task-action-btn expand",onClick:()=>ne(M.id),title:Z?"Collapse":"Expand",children:Z?"▲":"▼"}),t.jsx("button",{className:"task-action-btn delete",onClick:()=>L(M.id),title:"Delete",children:"×"})]})]}),t.jsx("h4",{className:"task-title",children:M.title}),M.description&&t.jsx("p",{className:"task-description",children:M.description}),M.subtasks.length>0&&t.jsxs("div",{className:"task-progress",children:[t.jsx("div",{className:"progress-bar-container",children:t.jsx("div",{className:"progress-bar-fill",style:{width:`${te}%`,background:M.colorTag}})}),t.jsxs("span",{className:"progress-text",children:[te,"%"]})]}),Z&&M.subtasks.length>0&&t.jsx("div",{className:"task-subtasks",children:M.subtasks.map(ie=>t.jsxs("div",{className:`subtask-item ${ie.completed?"completed":""}`,onClick:()=>B(M.id,ie.id),children:[t.jsx("span",{className:"subtask-check",children:ie.completed?"✓":"○"}),t.jsx("span",{className:"subtask-text",children:ie.text})]},ie.id))}),t.jsxs("div",{className:"task-footer",children:[t.jsxs("div",{className:"task-info-row",children:[M.estimatedDuration&&t.jsxs("span",{className:"info-tag duration",title:"Estimated Duration",children:["⏱ ",T(M.estimatedDuration)]}),M.subtasks.length>0&&t.jsxs("span",{className:"info-tag subtasks",title:"Subtasks",children:["☑ ",M.subtasks.filter(ie=>ie.completed).length,"/",M.subtasks.length]}),M.links.length>0&&t.jsxs("span",{className:"info-tag links",title:"Links",children:["🔗 ",M.links.length]}),M.location&&t.jsxs("span",{className:"info-tag location",title:"Location",children:["📍 ",M.location]})]}),t.jsx("select",{className:"status-select",value:M.status,onChange:ie=>H(M.id,ie.target.value),style:{borderColor:(be=W.find(ie=>ie.id===M.status))==null?void 0:be.color},children:W.map(ie=>t.jsx("option",{value:ie.id,children:ie.label},ie.id))})]})]},M.id)},ce=()=>t.jsx("div",{className:"kanban-board",children:W.map(M=>{const te=C().filter(de=>de.status===M.id);return t.jsxs("div",{className:`kanban-column ${l?"drop-target":""}`,onDragOver:Y,onDrop:de=>ae(de,M.id),children:[t.jsxs("div",{className:"kanban-column-header",style:{borderTopColor:M.color},children:[t.jsx("h3",{children:M.label}),t.jsx("span",{className:"task-count",children:te.length})]}),t.jsx("div",{className:"kanban-column-content",children:te.map(de=>pe(de))})]},M.id)})}),fe=()=>t.jsx("div",{className:"task-list",children:C().map(M=>pe(M))}),ke={total:e.length,todo:e.filter(M=>M.status==="todo").length,inProgress:e.filter(M=>M.status==="in-progress").length,review:e.filter(M=>M.status==="review").length,done:e.filter(M=>M.status==="done").length,overdue:e.filter(M=>new Date(M.deadline)<new Date&&M.status!=="done").length};return t.jsxs("div",{className:"task-manager",children:[t.jsxs("div",{className:"task-manager-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("h2",{children:"📋 Task Manager"}),t.jsxs("p",{className:"task-summary",children:[ke.total," tasks • ",ke.done," completed • ",ke.overdue>0&&t.jsxs("span",{className:"overdue-count",children:["⚠ ",ke.overdue," overdue"]})]})]}),t.jsxs("div",{className:"header-right",children:[t.jsxs("div",{className:"view-toggles",children:[t.jsx("button",{className:`view-btn ${o==="list"?"active":""}`,onClick:()=>c("list"),title:"List View",children:"≡"}),t.jsx("button",{className:`view-btn ${o==="kanban"?"active":""}`,onClick:()=>c("kanban"),title:"Kanban View",children:"⊞"})]}),t.jsx("button",{className:"add-task-btn",onClick:()=>a(!0),children:"+ New Task"})]})]}),t.jsx("div",{className:"stats-bar",children:W.map(M=>t.jsxs("div",{className:"stat-item",style:{"--stat-color":M.color},children:[t.jsx("span",{className:"stat-value",children:ke[M.id==="in-progress"?"inProgress":M.id]}),t.jsx("span",{className:"stat-label",children:M.label})]},M.id))}),t.jsxs("div",{className:"filters-bar",children:[t.jsxs("div",{className:"search-box",children:[t.jsx("span",{className:"search-icon",children:"🔍"}),t.jsx("input",{type:"text",placeholder:"Search tasks...",value:g.search,onChange:M=>E({...g,search:M.target.value})})]}),t.jsxs("div",{className:"filter-group",children:[t.jsxs("select",{value:g.status,onChange:M=>E({...g,status:M.target.value}),children:[t.jsx("option",{value:"all",children:"All Status"}),W.map(M=>t.jsx("option",{value:M.id,children:M.label},M.id))]}),t.jsxs("select",{value:g.priority,onChange:M=>E({...g,priority:M.target.value}),children:[t.jsx("option",{value:"all",children:"All Priority"}),R.map(M=>t.jsxs("option",{value:M.id,children:[M.icon," ",M.label]},M.id))]}),t.jsxs("select",{value:g.category,onChange:M=>E({...g,category:M.target.value}),children:[t.jsx("option",{value:"all",children:"All Categories"}),O.map(M=>t.jsxs("option",{value:M.id,children:[M.icon," ",M.label]},M.id))]}),t.jsxs("select",{value:w,onChange:M=>v(M.target.value),children:[t.jsx("option",{value:"deadline",children:"Sort: Deadline"}),t.jsx("option",{value:"priority",children:"Sort: Priority"}),t.jsx("option",{value:"created",children:"Sort: Created"}),t.jsx("option",{value:"title",children:"Sort: Title"})]}),t.jsx("button",{className:"sort-order-btn",onClick:()=>d(N==="asc"?"desc":"asc"),title:N==="asc"?"Ascending":"Descending",children:N==="asc"?"↑":"↓"})]})]}),t.jsx("div",{className:"task-content",children:o==="kanban"?ce():fe()}),n&&t.jsx("div",{className:"modal-overlay",onClick:()=>a(!1),children:t.jsxs("div",{className:"task-modal",onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{children:i?"Edit Task":"✨ Create New Task"}),t.jsx("button",{className:"close-modal",onClick:()=>a(!1),children:"×"})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"✏️ Title *"}),t.jsx("input",{type:"text",placeholder:"Enter task title...",value:u.title,onChange:M=>f({...u,title:M.target.value}),autoFocus:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"📄 Description"}),t.jsx("textarea",{placeholder:"Enter task description...",value:u.description,onChange:M=>f({...u,description:M.target.value}),rows:3})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"📆 Deadline"}),t.jsx("input",{type:"datetime-local",value:u.deadline,onChange:M=>f({...u,deadline:M.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"🎯 Duration (minutes)"}),t.jsx("input",{type:"number",min:"5",step:"5",value:u.estimatedDuration,onChange:M=>f({...u,estimatedDuration:parseInt(M.target.value)})})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"🏷️ Category"}),t.jsx("select",{value:u.category,onChange:M=>f({...u,category:M.target.value}),children:O.map(M=>t.jsxs("option",{value:M.id,children:[M.icon," ",M.label]},M.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"🔥 Priority"}),t.jsx("select",{value:u.priority,onChange:M=>f({...u,priority:M.target.value}),children:R.map(M=>t.jsxs("option",{value:M.id,children:[M.icon," ",M.label]},M.id))})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"🖼️ Color Tag"}),t.jsx("div",{className:"color-tags",children:q.map(M=>t.jsx("button",{className:`color-tag-btn ${u.colorTag===M?"active":""}`,style:{background:M},onClick:()=>f({...u,colorTag:M})},M))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"📍 Location (optional)"}),t.jsx("input",{type:"text",placeholder:"e.g., Conference Room A",value:u.location,onChange:M=>f({...u,location:M.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"🧩 Subtasks / Checklist"}),t.jsxs("div",{className:"add-subtask-row",children:[t.jsx("input",{type:"text",placeholder:"Add a subtask...",value:j,onChange:M=>b(M.target.value),onKeyPress:M=>M.key==="Enter"&&V()}),t.jsx("button",{onClick:V,children:"+"})]}),u.subtasks.length>0&&t.jsx("div",{className:"subtask-list",children:u.subtasks.map(M=>t.jsxs("div",{className:"subtask-preview",children:[t.jsxs("span",{children:["○ ",M.text]}),t.jsx("button",{onClick:()=>D(M.id),children:"×"})]},M.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"🔗 Important Links"}),t.jsxs("div",{className:"add-link-row",children:[t.jsx("input",{type:"url",placeholder:"https://...",value:y,onChange:M=>I(M.target.value),onKeyPress:M=>M.key==="Enter"&&F()}),t.jsx("button",{onClick:F,children:"+"})]}),u.links.length>0&&t.jsx("div",{className:"link-list",children:u.links.map((M,te)=>t.jsxs("div",{className:"link-preview",children:[t.jsxs("span",{children:["🔗 ",M]}),t.jsx("button",{onClick:()=>k(te),children:"×"})]},te))})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"cancel-btn",onClick:()=>a(!1),children:"Cancel"}),t.jsx("button",{className:"save-btn",onClick:A,disabled:!u.title.trim(),children:i?"Update Task":"Create Task"})]})]})}),t.jsx("style",{children:`
                .task-manager {
                    padding: 0;
                }

                .task-manager-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .header-left h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.75rem;
                    color: #fff;
                }

                .task-summary {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.9rem;
                    margin: 0;
                }

                .overdue-count {
                    color: #ef4444;
                    font-weight: 600;
                }

                .header-right {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }

                .view-toggles {
                    display: flex;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    padding: 4px;
                }

                .view-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1.25rem;
                    width: 36px;
                    height: 32px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .view-btn.active {
                    background: rgba(99, 102, 241, 0.3);
                    color: #fff;
                }

                .add-task-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .add-task-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                }

                /* Stats Bar */
                .stats-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .stat-item {
                    background: rgba(0, 0, 0, 0.3);
                    padding: 0.75rem 1.25rem;
                    border-radius: 10px;
                    border-left: 3px solid var(--stat-color);
                    display: flex;
                    flex-direction: column;
                    min-width: 80px;
                }

                .stat-value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Filters */
                .filters-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    padding: 0 1rem;
                    flex: 1;
                    min-width: 200px;
                }

                .search-box .search-icon {
                    margin-right: 0.5rem;
                }

                .search-box input {
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.75rem 0;
                    width: 100%;
                    font-size: 0.9rem;
                }

                .search-box input:focus {
                    outline: none;
                }

                .filter-group {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .filter-group select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    padding: 0.6rem 0.75rem;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    cursor: pointer;
                }

                .sort-order-btn {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .sort-order-btn:hover {
                    background: rgba(99, 102, 241, 0.2);
                }

                /* Task Content */
                .task-content {
                    min-height: 300px;
                }

                /* List View */
                .task-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                /* Kanban View */
                .kanban-board {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                    overflow-x: auto;
                }

                .kanban-column {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 12px;
                    min-height: 400px;
                    display: flex;
                    flex-direction: column;
                }

                .kanban-column.drop-target {
                    background: rgba(99, 102, 241, 0.1);
                }

                .kanban-column-header {
                    padding: 1rem;
                    border-top: 3px solid transparent;
                    border-radius: 12px 12px 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.2);
                }

                .kanban-column-header h3 {
                    margin: 0;
                    font-size: 0.9rem;
                    color: #fff;
                }

                .task-count {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.25rem 0.5rem;
                    border-radius: 6px;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .kanban-column-content {
                    padding: 0.75rem;
                    flex: 1;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                /* Task Card */
                .task-card {
                    background: rgba(30, 30, 50, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-left: 4px solid #6366f1;
                    border-radius: 12px;
                    padding: 1rem;
                    cursor: grab;
                    transition: all 0.2s ease;
                }

                .task-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                .task-card.dragging {
                    opacity: 0.5;
                    cursor: grabbing;
                }

                .task-card.done {
                    opacity: 0.7;
                }

                .task-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 0.5rem;
                }

                .task-meta-row {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .category-badge {
                    font-size: 1rem;
                }

                .priority-indicator {
                    font-size: 0.7rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    background: rgba(0, 0, 0, 0.3);
                }

                .priority-indicator.critical {
                    animation: pulse-priority 1.5s infinite;
                }

                @keyframes pulse-priority {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.6; }
                }

                .deadline-badge {
                    font-size: 0.7rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    background: rgba(0, 0, 0, 0.3);
                }

                .task-actions {
                    display: flex;
                    gap: 0.25rem;
                }

                .task-action-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.9rem;
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .task-action-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                }

                .task-action-btn.delete:hover {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                }

                .task-title {
                    margin: 0 0 0.5rem 0;
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 600;
                }

                .task-description {
                    margin: 0 0 0.75rem 0;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.6);
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Progress */
                .task-progress {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.75rem;
                }

                .progress-bar-container {
                    flex: 1;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .progress-bar-fill {
                    height: 100%;
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .progress-text {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    min-width: 35px;
                    text-align: right;
                }

                /* Subtasks */
                .task-subtasks {
                    margin-bottom: 0.75rem;
                    padding: 0.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                }

                .subtask-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.375rem 0;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .subtask-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                    margin: 0 -0.5rem;
                    padding: 0.375rem 0.5rem;
                    border-radius: 4px;
                }

                .subtask-check {
                    color: rgba(255, 255, 255, 0.4);
                }

                .subtask-item.completed .subtask-check {
                    color: #10b981;
                }

                .subtask-item.completed .subtask-text {
                    text-decoration: line-through;
                    color: rgba(255, 255, 255, 0.4);
                }

                .subtask-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                /* Footer */
                .task-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .task-info-row {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .info-tag {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    background: rgba(0, 0, 0, 0.2);
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                }

                .status-select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid;
                    color: #fff;
                    padding: 0.4rem 0.6rem;
                    border-radius: 6px;
                    font-size: 0.75rem;
                    cursor: pointer;
                }

                /* Modal */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: 1rem;
                }

                .task-modal {
                    background: linear-gradient(135deg, rgba(30, 30, 50, 0.95), rgba(20, 20, 40, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    width: 100%;
                    max-width: 600px;
                    max-height: 90vh;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .modal-header h3 {
                    margin: 0;
                    color: #fff;
                    font-size: 1.25rem;
                }

                .close-modal {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1.5rem;
                    cursor: pointer;
                    width: 32px;
                    height: 32px;
                    border-radius: 6px;
                    transition: all 0.2s ease;
                }

                .close-modal:hover {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                }

                .modal-body {
                    padding: 1.25rem;
                    overflow-y: auto;
                    flex: 1;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group label {
                    display: block;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.85rem;
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group textarea,
                .form-group select {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    padding: 0.75rem;
                    border-radius: 8px;
                    font-size: 0.9rem;
                }

                .form-group input:focus,
                .form-group textarea:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .color-tags {
                    display: flex;
                    gap: 0.5rem;
                }

                .color-tag-btn {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .color-tag-btn:hover,
                .color-tag-btn.active {
                    transform: scale(1.2);
                    border-color: #fff;
                }

                .add-subtask-row,
                .add-link-row {
                    display: flex;
                    gap: 0.5rem;
                }

                .add-subtask-row button,
                .add-link-row button {
                    background: rgba(99, 102, 241, 0.3);
                    border: none;
                    color: #fff;
                    width: 40px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1.25rem;
                }

                .subtask-list,
                .link-list {
                    margin-top: 0.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .subtask-preview,
                .link-preview {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 0.5rem 0.75rem;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                .subtask-preview button,
                .link-preview button {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.4);
                    cursor: pointer;
                    font-size: 1rem;
                    padding: 0;
                }

                .subtask-preview button:hover,
                .link-preview button:hover {
                    color: #ef4444;
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    padding: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .cancel-btn {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .cancel-btn:hover {
                    background: rgba(255, 255, 255, 0.15);
                }

                .save-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .save-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                }

                .save-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Responsive */
                @media (max-width: 1200px) {
                    .kanban-board {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .task-manager-header {
                        flex-direction: column;
                    }

                    .header-right {
                        width: 100%;
                        justify-content: space-between;
                    }

                    .filters-bar {
                        flex-direction: column;
                    }

                    .filter-group {
                        width: 100%;
                    }

                    .filter-group select {
                        flex: 1;
                    }

                    .kanban-board {
                        grid-template-columns: 1fr;
                    }

                    .form-row {
                        grid-template-columns: 1fr;
                    }

                    .stats-bar {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 480px) {
                    .stats-bar {
                        grid-template-columns: 1fr;
                    }

                    .task-meta-row {
                        flex-direction: column;
                        gap: 0.25rem;
                    }

                    .task-footer {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .status-select {
                        width: 100%;
                    }
                }
            `})]})},gx=({isOpen:e,onClose:r,onNavigate:n})=>{const[a,i]=p.useState(""),[s,o]=p.useState(0),c=p.useRef(null),l={tasks:[{id:1,type:"task",title:"Review Security Vulnerabilities",status:"in-progress",icon:"📋"},{id:2,type:"task",title:"Update Firewall Rules",status:"todo",icon:"📋"},{id:3,type:"task",title:"Complete React Course",status:"todo",icon:"📋"},{id:4,type:"task",title:"Team Meeting Preparation",status:"review",icon:"📋"}],projects:[{id:1,type:"project",title:"Lutfi-Lab.ID Dashboard",status:"active",icon:"🚀"},{id:2,type:"project",title:"Security Audit 2024",status:"active",icon:"🚀"},{id:3,type:"project",title:"Portfolio Website",status:"completed",icon:"🚀"}],notes:[{id:1,type:"note",title:"Meeting Notes - Sprint Planning",icon:"📝"},{id:2,type:"note",title:"Ideas for New Features",icon:"📝"},{id:3,type:"note",title:"Learning Resources",icon:"📝"}],events:[{id:1,type:"event",title:"Team Standup",date:"Today 10:00",icon:"📅"},{id:2,type:"event",title:"Client Meeting",date:"Tomorrow 14:00",icon:"📅"},{id:3,type:"event",title:"Workshop React",date:"Fri 09:00",icon:"📅"}],settings:[{id:1,type:"setting",title:"Account Settings",action:"settings",icon:"⚙️"},{id:2,type:"setting",title:"Theme & Appearance",action:"settings",icon:"🎨"},{id:3,type:"setting",title:"Notifications",action:"settings",icon:"🔔"},{id:4,type:"setting",title:"Privacy & Security",action:"settings",icon:"🔒"}],actions:[{id:1,type:"action",title:"Create New Task",action:"create-task",icon:"➕"},{id:2,type:"action",title:"Create New Project",action:"create-project",icon:"📁"},{id:3,type:"action",title:"Start Focus Timer",action:"start-focus",icon:"⏱️"},{id:4,type:"action",title:"Add Calendar Event",action:"create-event",icon:"📆"}]},m=p.useCallback(()=>[...l.actions,...l.tasks,...l.projects,...l.notes,...l.events,...l.settings],[]),x=p.useCallback(()=>{if(!a.trim())return l.actions;const v=a.toLowerCase();return m().filter(d=>d.title.toLowerCase().includes(v)||d.type.toLowerCase().includes(v))},[a,m])();p.useEffect(()=>{e&&c.current&&(c.current.focus(),i(""),o(0))},[e]),p.useEffect(()=>{const v=N=>{if(e)switch(N.key){case"ArrowDown":N.preventDefault(),o(d=>Math.min(d+1,x.length-1));break;case"ArrowUp":N.preventDefault(),o(d=>Math.max(d-1,0));break;case"Enter":N.preventDefault(),x[s]&&g(x[s]);break;case"Escape":r();break}};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[e,x,s,r]);const g=v=>{v.action?n(v.action):v.type==="task"?n("tasks"):v.type==="project"||v.type==="note"||v.type==="event"?n("overview"):v.type==="setting"&&n("settings"),r()},E=v=>({task:"Task",project:"Project",note:"Note",event:"Event",setting:"Setting",action:"Quick Action"})[v]||v,w=v=>({task:"#6366f1",project:"#10b981",note:"#f59e0b",event:"#ec4899",setting:"#8b5cf6",action:"#22d3ee"})[v]||"#6b7280";return e?t.jsxs("div",{className:"global-search-overlay",onClick:r,children:[t.jsxs("div",{className:"global-search-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"search-input-container",children:[t.jsx("span",{className:"search-icon",children:"🔍"}),t.jsx("input",{ref:c,type:"text",placeholder:"Search tasks, projects, notes, settings... (Esc to close)",value:a,onChange:v=>{i(v.target.value),o(0)},className:"search-input"}),t.jsxs("div",{className:"search-shortcut",children:[t.jsx("kbd",{children:"Ctrl"}),t.jsx("span",{children:"+"}),t.jsx("kbd",{children:"K"})]})]}),t.jsx("div",{className:"search-results",children:x.length===0?t.jsxs("div",{className:"no-results",children:[t.jsx("span",{className:"no-results-icon",children:"🔎"}),t.jsxs("p",{children:['No results found for "',a,'"']}),t.jsx("span",{className:"no-results-hint",children:"Try different keywords"})]}):t.jsxs(t.Fragment,{children:[!a&&t.jsx("div",{className:"results-section-label",children:"Quick Actions"}),x.map((v,N)=>t.jsxs("div",{className:`search-result-item ${N===s?"active":""}`,onClick:()=>g(v),onMouseEnter:()=>o(N),children:[t.jsx("span",{className:"result-icon",children:v.icon}),t.jsxs("div",{className:"result-content",children:[t.jsx("span",{className:"result-title",children:v.title}),t.jsxs("span",{className:"result-type",style:{color:w(v.type)},children:[E(v.type),v.status&&` • ${v.status}`,v.date&&` • ${v.date}`]})]}),N===s&&t.jsx("span",{className:"result-enter",children:"↵ Enter"})]},`${v.type}-${v.id}`))]})}),t.jsx("div",{className:"search-footer",children:t.jsxs("div",{className:"search-tips",children:[t.jsxs("span",{children:[t.jsx("kbd",{children:"↑↓"})," Navigate"]}),t.jsxs("span",{children:[t.jsx("kbd",{children:"↵"})," Select"]}),t.jsxs("span",{children:[t.jsx("kbd",{children:"Esc"})," Close"]})]})})]}),t.jsx("style",{children:`
                .global-search-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 15vh;
                    z-index: 9999;
                    animation: fadeIn 0.15s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .global-search-modal {
                    width: 100%;
                    max-width: 640px;
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.15);
                    overflow: hidden;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from { 
                        opacity: 0;
                        transform: translateY(-20px) scale(0.98);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .search-input-container {
                    display: flex;
                    align-items: center;
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    gap: 0.75rem;
                }

                .search-icon {
                    font-size: 1.25rem;
                }

                .search-input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 1.1rem;
                    outline: none;
                }

                .search-input::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }

                .search-shortcut {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.75rem;
                }

                .search-shortcut kbd {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    padding: 0.15rem 0.4rem;
                    font-family: inherit;
                }

                .search-results {
                    max-height: 400px;
                    overflow-y: auto;
                    padding: 0.5rem;
                }

                .results-section-label {
                    padding: 0.5rem 0.75rem;
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.4);
                    letter-spacing: 0.5px;
                }

                .search-result-item {
                    display: flex;
                    align-items: center;
                    gap: 0.875rem;
                    padding: 0.75rem;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }

                .search-result-item:hover,
                .search-result-item.active {
                    background: rgba(99, 102, 241, 0.15);
                }

                .search-result-item.active {
                    border-left: 3px solid #6366f1;
                    margin-left: -3px;
                }

                .result-icon {
                    font-size: 1.25rem;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                }

                .result-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .result-title {
                    color: #fff;
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .result-type {
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .result-enter {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.4);
                    background: rgba(99, 102, 241, 0.2);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }

                .no-results {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    text-align: center;
                }

                .no-results-icon {
                    font-size: 2.5rem;
                    margin-bottom: 0.75rem;
                    opacity: 0.5;
                }

                .no-results p {
                    color: rgba(255, 255, 255, 0.7);
                    margin: 0;
                }

                .no-results-hint {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.85rem;
                    margin-top: 0.25rem;
                }

                .search-footer {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.75rem 1rem;
                }

                .search-tips {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .search-tips kbd {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    padding: 0.1rem 0.3rem;
                    margin-right: 0.25rem;
                }

                @media (max-width: 768px) {
                    .global-search-overlay {
                        padding: 1rem;
                        padding-top: 10vh;
                    }

                    .global-search-modal {
                        max-width: 100%;
                    }

                    .search-shortcut {
                        display: none;
                    }

                    .search-tips {
                        gap: 0.75rem;
                        flex-wrap: wrap;
                    }
                }
            `})]}):null},xx=({onAction:e})=>{const[r,n]=p.useState(!1),a=p.useRef(null),i=[{id:"create-task",label:"Add Task",icon:"📋",shortcut:"T",color:"#6366f1"},{id:"create-event",label:"Add Event",icon:"📅",shortcut:"E",color:"#ec4899"},{id:"create-note",label:"New Note",icon:"📝",shortcut:"N",color:"#f59e0b"},{id:"create-project",label:"New Project",icon:"🚀",shortcut:"P",color:"#10b981"},{id:"start-focus",label:"Start Focus",icon:"⏱️",shortcut:"F",color:"#8b5cf6"},{id:"upload-file",label:"Upload File",icon:"📁",shortcut:"U",color:"#22d3ee"}];p.useEffect(()=>{const o=c=>{a.current&&!a.current.contains(c.target)&&n(!1)};return r&&document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[r]),p.useEffect(()=>{const o=c=>{if(!(c.target.tagName==="INPUT"||c.target.tagName==="TEXTAREA")&&r){const l=i.find(m=>m.shortcut.toLowerCase()===c.key.toLowerCase());l&&(c.preventDefault(),s(l.id))}};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[r]);const s=o=>{n(!1),e&&e(o)};return t.jsxs("div",{className:"quick-actions-container",ref:a,children:[t.jsx("button",{className:`fab-button ${r?"active":""}`,onClick:()=>n(!r),title:"Quick Actions (Click to open)",children:t.jsx("span",{className:"fab-icon",children:r?"×":"+"})}),r&&t.jsxs("div",{className:"quick-actions-menu",children:[t.jsxs("div",{className:"menu-header",children:[t.jsx("span",{className:"menu-title",children:"Quick Actions"}),t.jsx("span",{className:"menu-hint",children:"Press letter key"})]}),t.jsx("div",{className:"menu-items",children:i.map((o,c)=>t.jsxs("button",{className:"action-item",onClick:()=>s(o.id),style:{"--action-color":o.color,animationDelay:`${c*.05}s`},children:[t.jsx("span",{className:"action-icon",children:o.icon}),t.jsx("span",{className:"action-label",children:o.label}),t.jsx("kbd",{className:"action-shortcut",children:o.shortcut})]},o.id))})]}),t.jsx("style",{children:`
                .quick-actions-container {
                    position: fixed;
                    bottom: 80px;
                    right: 24px;
                    z-index: 999;
                }

                .fab-button {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    font-size: 1.75rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .fab-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 30px rgba(99, 102, 241, 0.5);
                }

                .fab-button.active {
                    background: linear-gradient(135deg, #ef4444, #f97316);
                    transform: rotate(45deg);
                }

                .fab-icon {
                    transition: transform 0.3s ease;
                    line-height: 1;
                }

                .quick-actions-menu {
                    position: absolute;
                    bottom: 70px;
                    right: 0;
                    width: 240px;
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
                    overflow: hidden;
                    animation: slideUp 0.2s ease;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .menu-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .menu-title {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #fff;
                }

                .menu-hint {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .menu-items {
                    padding: 0.5rem;
                }

                .action-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.625rem 0.75rem;
                    background: transparent;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    animation: fadeInAction 0.2s ease forwards;
                    opacity: 0;
                }

                @keyframes fadeInAction {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .action-item:hover {
                    background: rgba(99, 102, 241, 0.15);
                }

                .action-icon {
                    font-size: 1.1rem;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    border-left: 3px solid var(--action-color);
                }

                .action-label {
                    flex: 1;
                    text-align: left;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .action-shortcut {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 4px;
                    padding: 0.15rem 0.4rem;
                    font-size: 0.7rem;
                    font-family: inherit;
                    color: rgba(255, 255, 255, 0.5);
                }

                @media (max-width: 768px) {
                    .quick-actions-container {
                        bottom: 100px;
                        right: 16px;
                    }

                    .fab-button {
                        width: 48px;
                        height: 48px;
                        font-size: 1.5rem;
                    }

                    .quick-actions-menu {
                        width: 200px;
                        right: 0;
                    }
                }
            `})]})},bx=({notifications:e=[],onMarkRead:r,onDismissAll:n,onNotificationClick:a})=>{const[i,s]=p.useState(!1),o=p.useRef(null),c=[{id:1,type:"deadline",title:"Task Deadline",message:"Review Security Vulnerabilities - due in 2 hours",time:"2 hours ago",read:!1,priority:"high"},{id:2,type:"reminder",title:"Meeting Reminder",message:"Team Standup starts in 30 minutes",time:"30 min",read:!1,priority:"medium"},{id:3,type:"focus",title:"Focus Timer Complete",message:"You completed 25 minutes of focus time! 🎉",time:"1 hour ago",read:!1,priority:"low"},{id:4,type:"system",title:"Task Completed",message:"Setup Personal VPN has been marked as done",time:"3 hours ago",read:!0,priority:"low"},{id:5,type:"deadline",title:"Overdue Task",message:"Update Firewall Rules is overdue!",time:"1 day ago",read:!1,priority:"critical"}],l=e.length>0?e:c,m=l.filter(w=>!w.read).length;p.useEffect(()=>{const w=v=>{o.current&&!o.current.contains(v.target)&&s(!1)};return i&&document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[i]);const h=w=>({deadline:"⏰",reminder:"🔔",focus:"⏱️",system:"💻",task:"📋",project:"🚀"})[w]||"📌",x=w=>({deadline:"#ef4444",reminder:"#f59e0b",focus:"#10b981",system:"#6366f1",task:"#8b5cf6",project:"#22d3ee"})[w]||"#6b7280",g=w=>w==="critical"?{borderLeft:"3px solid #ef4444",background:"rgba(239, 68, 68, 0.1)"}:w==="high"?{borderLeft:"3px solid #f59e0b"}:{},E=w=>{a&&a(w),r&&r(w.id)};return t.jsxs("div",{className:"notification-center",ref:o,children:[t.jsxs("button",{className:`notification-bell ${m>0?"has-unread":""}`,onClick:()=>s(!i),title:"Notifications",children:[t.jsx("span",{className:"bell-icon",children:"🔔"}),m>0&&t.jsx("span",{className:"badge",children:m>9?"9+":m})]}),i&&t.jsxs("div",{className:"notification-panel",children:[t.jsxs("div",{className:"panel-header",children:[t.jsx("h3",{children:"Notifications"}),m>0&&t.jsx("button",{className:"mark-all-btn",onClick:()=>n&&n(),children:"Clear All"})]}),t.jsx("div",{className:"notification-list",children:l.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("span",{className:"empty-icon",children:"🔕"}),t.jsx("p",{children:"No notifications"})]}):l.map(w=>t.jsxs("div",{className:`notification-item ${w.read?"read":"unread"}`,style:g(w.priority),onClick:()=>E(w),children:[t.jsx("div",{className:"notif-icon",style:{background:`${x(w.type)}20`,color:x(w.type)},children:h(w.type)}),t.jsxs("div",{className:"notif-content",children:[t.jsxs("div",{className:"notif-header",children:[t.jsx("span",{className:"notif-title",children:w.title}),t.jsx("span",{className:"notif-time",children:w.time})]}),t.jsx("p",{className:"notif-message",children:w.message})]}),!w.read&&t.jsx("div",{className:"unread-dot"})]},w.id))}),t.jsx("div",{className:"panel-footer",children:t.jsx("button",{className:"view-all-btn",children:"View All Notifications"})})]}),t.jsx("style",{children:`
                .notification-center {
                    position: relative;
                }

                .notification-bell {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 10px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.2s ease;
                }

                .notification-bell:hover {
                    background: rgba(99, 102, 241, 0.2);
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .notification-bell.has-unread .bell-icon {
                    animation: bellShake 0.5s ease-in-out infinite;
                }

                @keyframes bellShake {
                    0%, 100% { transform: rotate(0); }
                    25% { transform: rotate(10deg); }
                    75% { transform: rotate(-10deg); }
                }

                .bell-icon {
                    font-size: 1.1rem;
                }

                .badge {
                    position: absolute;
                    top: -4px;
                    right: -4px;
                    background: linear-gradient(135deg, #ef4444, #f97316);
                    color: #fff;
                    font-size: 0.65rem;
                    font-weight: 700;
                    min-width: 18px;
                    height: 18px;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 4px;
                    animation: popIn 0.3s ease;
                }

                @keyframes popIn {
                    from { transform: scale(0); }
                    to { transform: scale(1); }
                }

                .notification-panel {
                    position: absolute;
                    top: 50px;
                    right: 0;
                    width: 360px;
                    max-height: 480px;
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
                    overflow: hidden;
                    z-index: 1000;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .panel-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .panel-header h3 {
                    margin: 0;
                    font-size: 1rem;
                    color: #fff;
                }

                .mark-all-btn {
                    background: transparent;
                    border: none;
                    color: #6366f1;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: color 0.2s ease;
                }

                .mark-all-btn:hover {
                    color: #818cf8;
                }

                .notification-list {
                    max-height: 340px;
                    overflow-y: auto;
                }

                .notification-item {
                    display: flex;
                    gap: 0.75rem;
                    padding: 0.875rem 1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    position: relative;
                }

                .notification-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .notification-item.read {
                    opacity: 0.6;
                }

                .notif-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    flex-shrink: 0;
                }

                .notif-content {
                    flex: 1;
                    min-width: 0;
                }

                .notif-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.25rem;
                }

                .notif-title {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #fff;
                }

                .notif-time {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .notif-message {
                    margin: 0;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.7);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .unread-dot {
                    width: 8px;
                    height: 8px;
                    background: #6366f1;
                    border-radius: 50%;
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .empty-icon {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    opacity: 0.5;
                }

                .empty-state p {
                    margin: 0;
                }

                .panel-footer {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.75rem;
                }

                .view-all-btn {
                    width: 100%;
                    background: rgba(99, 102, 241, 0.15);
                    border: none;
                    color: #a5b4fc;
                    padding: 0.625rem;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .view-all-btn:hover {
                    background: rgba(99, 102, 241, 0.25);
                }

                @media (max-width: 768px) {
                    .notification-panel {
                        position: fixed;
                        top: 60px;
                        right: 10px;
                        left: 10px;
                        width: auto;
                    }
                }
            `})]})},vx=()=>{const[e,r]=p.useState("stopwatch"),[n,a]=p.useState(0),[i,s]=p.useState(!1),[o,c]=p.useState([]),l=p.useRef(null),[m,h]=p.useState(25),[x,g]=p.useState(0),[E,w]=p.useState(25*60),[v,N]=p.useState(!1),[d,u]=p.useState(!1),f=p.useRef(null),[j,b]=p.useState("0"),[y,I]=p.useState(null),[O,R]=p.useState(null),[W,q]=p.useState(!1),[J,_]=p.useState(""),[$,T]=p.useState(!0),[C,A]=p.useState(""),[P,L]=p.useState(!1),[z,V]=p.useState("length"),[D,B]=p.useState(""),[F,k]=p.useState("m"),[H,U]=p.useState("km"),Y=[{id:"stopwatch",label:"Stopwatch",icon:"⏱️"},{id:"timer",label:"Timer",icon:"⏳"},{id:"calculator",label:"Calculator",icon:"🧮"},{id:"notepad",label:"Notepad",icon:"📝"},{id:"qrcode",label:"QR Code",icon:"📱"},{id:"converter",label:"Converter",icon:"🔄"}];p.useEffect(()=>(i?l.current=setInterval(()=>{a(X=>X+10)},10):clearInterval(l.current),()=>clearInterval(l.current)),[i]);const ae=X=>{const Se=Math.floor(X/6e4),kt=Math.floor(X%6e4/1e3),Nt=Math.floor(X%1e3/10);return`${Se.toString().padStart(2,"0")}:${kt.toString().padStart(2,"0")}.${Nt.toString().padStart(2,"0")}`},ne=()=>s(!0),pe=()=>s(!1),ce=()=>{s(!1),a(0),c([])},fe=()=>{c([...o,n])};p.useEffect(()=>(v&&E>0?f.current=setInterval(()=>{w(X=>X-1)},1e3):E===0&&v&&(N(!1),u(!0)),()=>clearInterval(f.current)),[v,E]);const ke=X=>{const Se=Math.floor(X/60),kt=X%60;return`${Se.toString().padStart(2,"0")}:${kt.toString().padStart(2,"0")}`},M=()=>{E===0&&w(m*60+x),N(!0),u(!1)},te=()=>N(!1),de=()=>{N(!1),w(m*60+x),u(!1)},me=()=>{w(m*60+x),u(!1)},K=X=>{W?(b(X),q(!1)):b(j==="0"?X:j+X)},Z=()=>{W?(b("0."),q(!1)):j.includes(".")||b(j+".")},be=X=>{const Se=parseFloat(j);if(y===null)I(Se);else if(O){const kt=y||0;let Nt;switch(O){case"+":Nt=kt+Se;break;case"-":Nt=kt-Se;break;case"×":Nt=kt*Se;break;case"÷":Nt=Se!==0?kt/Se:"Error";break;default:Nt=Se}b(String(Nt)),I(Nt)}q(!0),R(X)},ie=()=>{O&&y!==null&&(be(null),R(null),I(null))},ve=()=>{b("0"),I(null),R(null),q(!1)},ye=()=>{b(String(parseFloat(j)/100))},st=()=>{b(String(parseFloat(j)*-1))},wt=()=>{localStorage.setItem("minitools_notepad",J),T(!0)},ot=()=>{const X=localStorage.getItem("minitools_notepad");X&&_(X)},Na=()=>{navigator.clipboard.writeText(J)},Ki=()=>{_(""),T(!1)};p.useEffect(()=>{ot()},[]);const Jt={length:{m:1,km:.001,cm:100,mm:1e3,mi:621371e-9,ft:3.28084,in:39.3701},weight:{kg:1,g:1e3,mg:1e6,lb:2.20462,oz:35.274},temperature:{c:"celsius",f:"fahrenheit",k:"kelvin"},time:{s:1,min:1/60,hr:1/3600,day:1/86400}},qi=()=>{if(!D||isNaN(D))return"0";const X=parseFloat(D);if(z==="temperature"){let Se;return F==="c"?Se=X:F==="f"?Se=(X-32)*5/9:Se=X-273.15,H==="c"?Se.toFixed(2):H==="f"?(Se*9/5+32).toFixed(2):(Se+273.15).toFixed(2)}else{const Se=Jt[z];return(X/Se[F]*Se[H]).toFixed(6).replace(/\.?0+$/,"")}},Sa=()=>t.jsxs("div",{className:"tool-content stopwatch",children:[t.jsx("div",{className:"time-display large",children:ae(n)}),t.jsxs("div",{className:"control-buttons",children:[i?t.jsx("button",{className:"btn warning",onClick:pe,children:"⏸ Pause"}):t.jsx("button",{className:"btn primary",onClick:ne,children:"▶ Start"}),t.jsx("button",{className:"btn secondary",onClick:fe,disabled:!i,children:"🏁 Lap"}),t.jsx("button",{className:"btn danger",onClick:ce,children:"↺ Reset"})]}),o.length>0&&t.jsx("div",{className:"laps-list",children:o.map((X,Se)=>t.jsxs("div",{className:"lap-item",children:[t.jsxs("span",{children:["Lap ",Se+1]}),t.jsx("span",{children:ae(X)})]},Se))})]}),Ji=()=>t.jsxs("div",{className:"tool-content timer",children:[t.jsx("div",{className:`time-display large ${d?"complete":""}`,children:ke(E)}),d&&t.jsx("div",{className:"timer-complete-msg",children:"⏰ Time's Up!"}),t.jsxs("div",{className:"timer-setup",children:[t.jsxs("div",{className:"timer-input-group",children:[t.jsx("label",{children:"Minutes"}),t.jsx("input",{type:"number",min:"0",max:"99",value:m,onChange:X=>h(parseInt(X.target.value)||0),disabled:v})]}),t.jsx("span",{className:"timer-separator",children:":"}),t.jsxs("div",{className:"timer-input-group",children:[t.jsx("label",{children:"Seconds"}),t.jsx("input",{type:"number",min:"0",max:"59",value:x,onChange:X=>g(parseInt(X.target.value)||0),disabled:v})]}),t.jsx("button",{className:"btn small",onClick:me,disabled:v,children:"Set"})]}),t.jsxs("div",{className:"control-buttons",children:[v?t.jsx("button",{className:"btn warning",onClick:te,children:"⏸ Pause"}):t.jsx("button",{className:"btn primary",onClick:M,children:"▶ Start"}),t.jsx("button",{className:"btn danger",onClick:de,children:"↺ Reset"})]}),t.jsx("div",{className:"quick-presets",children:[5,10,15,25,30,45,60].map(X=>t.jsxs("button",{className:"preset-btn",onClick:()=>{h(X),g(0),w(X*60)},disabled:v,children:[X,"m"]},X))})]}),Xi=()=>t.jsxs("div",{className:"tool-content calculator",children:[t.jsx("div",{className:"calc-display",children:j}),t.jsxs("div",{className:"calc-buttons",children:[t.jsx("button",{className:"calc-btn func",onClick:ve,children:"AC"}),t.jsx("button",{className:"calc-btn func",onClick:st,children:"±"}),t.jsx("button",{className:"calc-btn func",onClick:ye,children:"%"}),t.jsx("button",{className:"calc-btn operator",onClick:()=>be("÷"),children:"÷"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("7"),children:"7"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("8"),children:"8"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("9"),children:"9"}),t.jsx("button",{className:"calc-btn operator",onClick:()=>be("×"),children:"×"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("4"),children:"4"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("5"),children:"5"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("6"),children:"6"}),t.jsx("button",{className:"calc-btn operator",onClick:()=>be("-"),children:"−"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("1"),children:"1"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("2"),children:"2"}),t.jsx("button",{className:"calc-btn",onClick:()=>K("3"),children:"3"}),t.jsx("button",{className:"calc-btn operator",onClick:()=>be("+"),children:"+"}),t.jsx("button",{className:"calc-btn zero",onClick:()=>K("0"),children:"0"}),t.jsx("button",{className:"calc-btn",onClick:Z,children:"."}),t.jsx("button",{className:"calc-btn equals",onClick:ie,children:"="})]})]}),Zi=()=>t.jsxs("div",{className:"tool-content notepad",children:[t.jsxs("div",{className:"notepad-header",children:[t.jsx("span",{className:`save-status ${$?"saved":"unsaved"}`,children:$?"✓ Saved":"● Unsaved"}),t.jsxs("span",{className:"char-count",children:[J.length," chars"]})]}),t.jsx("textarea",{value:J,onChange:X=>{_(X.target.value),T(!1)},placeholder:"Write your notes here..."}),t.jsxs("div",{className:"notepad-actions",children:[t.jsx("button",{className:"btn primary",onClick:wt,children:"💾 Save"}),t.jsx("button",{className:"btn secondary",onClick:Na,children:"📋 Copy"}),t.jsx("button",{className:"btn danger",onClick:Ki,children:"🗑️ Clear"})]})]}),Nn=()=>t.jsxs("div",{className:"tool-content qrcode",children:[t.jsxs("div",{className:"qr-input-area",children:[t.jsx("input",{type:"text",value:C,onChange:X=>{A(X.target.value),L(!1)},placeholder:"Enter text or URL..."}),t.jsx("button",{className:"btn primary",onClick:()=>L(!0),disabled:!C.trim(),children:"Generate QR"})]}),P&&C&&t.jsxs("div",{className:"qr-result",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(C)}`,alt:"QR Code",className:"qr-image"}),t.jsx("p",{className:"qr-text",children:C})]})]}),es=()=>t.jsxs("div",{className:"tool-content converter",children:[t.jsx("div",{className:"converter-type-select",children:Object.keys(Jt).map(X=>t.jsx("button",{className:`type-btn ${z===X?"active":""}`,onClick:()=>{V(X),k(Object.keys(Jt[X])[0]),U(Object.keys(Jt[X])[1])},children:X.charAt(0).toUpperCase()+X.slice(1)},X))}),t.jsxs("div",{className:"converter-inputs",children:[t.jsxs("div",{className:"converter-row",children:[t.jsx("input",{type:"number",value:D,onChange:X=>B(X.target.value),placeholder:"Enter value"}),t.jsx("select",{value:F,onChange:X=>k(X.target.value),children:Object.keys(Jt[z]).map(X=>t.jsx("option",{value:X,children:X.toUpperCase()},X))})]}),t.jsx("div",{className:"converter-arrow",children:"↓"}),t.jsxs("div",{className:"converter-row result",children:[t.jsx("div",{className:"result-value",children:qi()}),t.jsx("select",{value:H,onChange:X=>U(X.target.value),children:Object.keys(Jt[z]).map(X=>t.jsx("option",{value:X,children:X.toUpperCase()},X))})]})]}),t.jsx("button",{className:"btn secondary swap-btn",onClick:()=>{const X=F;k(H),U(X)},children:"⇅ Swap Units"})]}),Or=()=>{switch(e){case"stopwatch":return Sa();case"timer":return Ji();case"calculator":return Xi();case"notepad":return Zi();case"qrcode":return Nn();case"converter":return es();default:return null}};return t.jsxs("div",{className:"mini-tools",children:[t.jsxs("div",{className:"tools-header",children:[t.jsx("h2",{children:"🧰 Mini Tools"}),t.jsx("p",{children:"Productivity utilities at your fingertips"})]}),t.jsx("div",{className:"tools-nav",children:Y.map(X=>t.jsxs("button",{className:`tool-tab ${e===X.id?"active":""}`,onClick:()=>r(X.id),children:[t.jsx("span",{className:"tool-icon",children:X.icon}),t.jsx("span",{className:"tool-label",children:X.label})]},X.id))}),t.jsx("div",{className:"tools-container",children:Or()}),t.jsx("style",{children:`
                .mini-tools {
                    padding: 0;
                }

                .tools-header {
                    margin-bottom: 1.5rem;
                }

                .tools-header h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .tools-header p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }

                .tools-nav {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .tool-tab {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .tool-tab:hover {
                    background: rgba(99, 102, 241, 0.2);
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .tool-tab.active {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
                    border-color: #6366f1;
                    color: #fff;
                }

                .tool-icon {
                    font-size: 1.1rem;
                }

                .tool-label {
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .tools-container {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    padding: 1.5rem;
                    min-height: 350px;
                }

                .tool-content {
                    animation: fadeIn 0.2s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Common Elements */
                .time-display {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 3rem;
                    font-weight: 700;
                    text-align: center;
                    color: #fff;
                    margin-bottom: 1.5rem;
                }

                .time-display.complete {
                    color: #10b981;
                    animation: pulse 1s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .control-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .btn {
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 10px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn.primary {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: #fff;
                }

                .btn.secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                }

                .btn.warning {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                    color: #fff;
                }

                .btn.danger {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                }

                .btn.small {
                    padding: 0.5rem 1rem;
                    font-size: 0.8rem;
                }

                .btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                }

                .btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Stopwatch */
                .laps-list {
                    max-height: 150px;
                    overflow-y: auto;
                    margin-top: 1rem;
                }

                .lap-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 6px;
                    margin-bottom: 0.5rem;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.8);
                }

                /* Timer */
                .timer-complete-msg {
                    text-align: center;
                    font-size: 1.5rem;
                    color: #10b981;
                    margin-bottom: 1rem;
                    animation: bounce 0.5s ease infinite alternate;
                }

                @keyframes bounce {
                    from { transform: translateY(0); }
                    to { transform: translateY(-5px); }
                }

                .timer-setup {
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .timer-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .timer-input-group label {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-align: center;
                }

                .timer-input-group input {
                    width: 60px;
                    padding: 0.5rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    color: #fff;
                    text-align: center;
                    font-size: 1.25rem;
                    font-family: 'JetBrains Mono', monospace;
                }

                .timer-separator {
                    font-size: 1.5rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.5rem;
                }

                .quick-presets {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    flex-wrap: wrap;
                }

                .preset-btn {
                    padding: 0.4rem 0.75rem;
                    background: rgba(99, 102, 241, 0.2);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 6px;
                    color: #a5b4fc;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .preset-btn:hover:not(:disabled) {
                    background: rgba(99, 102, 241, 0.3);
                }

                /* Calculator */
                .calc-display {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 2.5rem;
                    text-align: right;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 10px;
                    margin-bottom: 1rem;
                    color: #fff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .calc-buttons {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.5rem;
                }

                .calc-btn {
                    padding: 1rem;
                    font-size: 1.25rem;
                    border: none;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.15s ease;
                }

                .calc-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .calc-btn.func {
                    background: rgba(99, 102, 241, 0.3);
                    color: #a5b4fc;
                }

                .calc-btn.operator {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                    color: #fff;
                }

                .calc-btn.equals {
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: #fff;
                }

                .calc-btn.zero {
                    grid-column: span 2;
                }

                /* Notepad */
                .notepad-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.75rem;
                    font-size: 0.8rem;
                }

                .save-status.saved { color: #10b981; }
                .save-status.unsaved { color: #f59e0b; }
                .char-count { color: rgba(255, 255, 255, 0.5); }

                .notepad textarea {
                    width: 100%;
                    height: 200px;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 0.95rem;
                    resize: vertical;
                    font-family: inherit;
                }

                .notepad textarea:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .notepad-actions {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }

                /* QR Code */
                .qr-input-area {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .qr-input-area input {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 0.95rem;
                }

                .qr-result {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .qr-image {
                    background: #fff;
                    padding: 1rem;
                    border-radius: 12px;
                }

                .qr-text {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.85rem;
                    word-break: break-all;
                    text-align: center;
                }

                /* Converter */
                .converter-type-select {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .type-btn {
                    padding: 0.5rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .type-btn.active {
                    background: rgba(99, 102, 241, 0.3);
                    border-color: #6366f1;
                    color: #fff;
                }

                .converter-inputs {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .converter-row {
                    display: flex;
                    gap: 0.75rem;
                }

                .converter-row input,
                .converter-row select {
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 1rem;
                }

                .converter-row input {
                    flex: 1;
                }

                .converter-row.result .result-value {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    background: rgba(16, 185, 129, 0.2);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    border-radius: 10px;
                    color: #10b981;
                    font-size: 1.1rem;
                    font-weight: 600;
                    font-family: 'JetBrains Mono', monospace;
                }

                .converter-arrow {
                    text-align: center;
                    font-size: 1.5rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .swap-btn {
                    width: 100%;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .tools-nav {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 0.5rem;
                    }

                    .tool-tab {
                        flex-shrink: 0;
                    }

                    .tool-label {
                        display: none;
                    }

                    .time-display {
                        font-size: 2.5rem;
                    }

                    .calc-buttons {
                        gap: 0.375rem;
                    }

                    .calc-btn {
                        padding: 0.75rem;
                        font-size: 1rem;
                    }
                }
            `})]})},yx=()=>{const[e,r]=p.useState([{id:1,url:"https://github.com",title:"GitHub",category:"tools",favorite:!0,icon:"🐱"},{id:2,url:"https://stackoverflow.com",title:"Stack Overflow",category:"tools",favorite:!0,icon:"📚"},{id:3,url:"https://notion.so",title:"Notion",category:"work",favorite:!1,icon:"📝"},{id:4,url:"https://udemy.com",title:"Udemy",category:"study",favorite:!0,icon:"🎓"},{id:5,url:"https://figma.com",title:"Figma",category:"tools",favorite:!1,icon:"🎨"},{id:6,url:"https://vercel.com",title:"Vercel",category:"tools",favorite:!1,icon:"▲"},{id:7,url:"https://docs.google.com",title:"Google Docs",category:"work",favorite:!0,icon:"📄"},{id:8,url:"https://chatgpt.com",title:"ChatGPT",category:"tools",favorite:!0,icon:"🤖"}]),[n,a]=p.useState("all"),[i,s]=p.useState(""),[o,c]=p.useState(!1),[l,m]=p.useState(null),[h,x]=p.useState({url:"",title:"",category:"tools",icon:"🔗"}),g=[{id:"all",label:"All Links",icon:"📌",color:"#6366f1"},{id:"work",label:"Work",icon:"💼",color:"#10b981"},{id:"study",label:"Study",icon:"🎓",color:"#f59e0b"},{id:"tools",label:"Tools",icon:"🔧",color:"#8b5cf6"},{id:"favorite",label:"Favorites",icon:"⭐",color:"#ec4899"}],E=["🔗","📌","💻","🚀","📚","🎨","🎯","💡","🔥","⚡","🌐","📱","🎬","🎵","📊","✨"],w=()=>{if(!h.url.trim()||!h.title.trim())return;const b={id:Date.now(),...h,favorite:!1};r([...e,b]),x({url:"",title:"",category:"tools",icon:"🔗"}),c(!1)},v=()=>{l&&(r(e.map(b=>b.id===l.id?l:b)),m(null))},N=b=>{r(e.filter(y=>y.id!==b))},d=b=>{r(e.map(y=>y.id===b?{...y,favorite:!y.favorite}:y))},u=b=>{window.open(b,"_blank","noopener,noreferrer")},f=e.filter(b=>{const y=n==="all"||(n==="favorite"?b.favorite:b.category===n),I=b.title.toLowerCase().includes(i.toLowerCase())||b.url.toLowerCase().includes(i.toLowerCase());return y&&I}),j=b=>b==="all"?e.length:b==="favorite"?e.filter(y=>y.favorite).length:e.filter(y=>y.category===b).length;return t.jsxs("div",{className:"link-manager",children:[t.jsxs("div",{className:"manager-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("h2",{children:"🔗 Link Manager"}),t.jsxs("p",{children:[e.length," bookmarks saved"]})]}),t.jsx("button",{className:"add-btn",onClick:()=>c(!0),children:"+ Add Link"})]}),t.jsx("div",{className:"categories-bar",children:g.map(b=>t.jsxs("button",{className:`category-btn ${n===b.id?"active":""}`,onClick:()=>a(b.id),style:{"--cat-color":b.color},children:[t.jsx("span",{className:"cat-icon",children:b.icon}),t.jsx("span",{className:"cat-label",children:b.label}),t.jsx("span",{className:"cat-count",children:j(b.id)})]},b.id))}),t.jsxs("div",{className:"search-bar",children:[t.jsx("span",{className:"search-icon",children:"🔍"}),t.jsx("input",{type:"text",placeholder:"Search links...",value:i,onChange:b=>s(b.target.value)})]}),t.jsx("div",{className:"links-grid",children:f.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("span",{className:"empty-icon",children:"🔗"}),t.jsx("p",{children:"No links found"}),t.jsx("button",{onClick:()=>c(!0),children:"Add your first link"})]}):f.map(b=>{var y,I;return t.jsxs("div",{className:"link-card",children:[t.jsxs("div",{className:"link-header",children:[t.jsx("span",{className:"link-icon",children:b.icon}),t.jsx("button",{className:`favorite-btn ${b.favorite?"active":""}`,onClick:()=>d(b.id),title:b.favorite?"Remove from favorites":"Add to favorites",children:b.favorite?"⭐":"☆"})]}),t.jsx("h3",{className:"link-title",children:b.title}),t.jsx("p",{className:"link-url",children:b.url.replace(/^https?:\/\//,"").split("/")[0]}),t.jsxs("div",{className:"link-footer",children:[t.jsxs("span",{className:"category-tag",style:{background:((y=g.find(O=>O.id===b.category))==null?void 0:y.color)+"20"},children:[(I=g.find(O=>O.id===b.category))==null?void 0:I.icon," ",b.category]}),t.jsxs("div",{className:"link-actions",children:[t.jsx("button",{onClick:()=>u(b.url),title:"Open",children:"🔗"}),t.jsx("button",{onClick:()=>m(b),title:"Edit",children:"✏️"}),t.jsx("button",{onClick:()=>N(b.id),title:"Delete",children:"🗑️"})]})]})]},b.id)})}),(o||l)&&t.jsx("div",{className:"modal-overlay",onClick:()=>{c(!1),m(null)},children:t.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h3",{children:l?"✏️ Edit Link":"➕ Add New Link"}),t.jsx("button",{className:"close-btn",onClick:()=>{c(!1),m(null)},children:"×"})]}),t.jsxs("div",{className:"modal-body",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"URL *"}),t.jsx("input",{type:"url",placeholder:"https://example.com",value:l?l.url:h.url,onChange:b=>l?m({...l,url:b.target.value}):x({...h,url:b.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Title *"}),t.jsx("input",{type:"text",placeholder:"Link title",value:l?l.title:h.title,onChange:b=>l?m({...l,title:b.target.value}):x({...h,title:b.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Category"}),t.jsx("select",{value:l?l.category:h.category,onChange:b=>l?m({...l,category:b.target.value}):x({...h,category:b.target.value}),children:g.filter(b=>b.id!=="all"&&b.id!=="favorite").map(b=>t.jsxs("option",{value:b.id,children:[b.icon," ",b.label]},b.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Icon"}),t.jsx("div",{className:"emoji-picker",children:E.map(b=>t.jsx("button",{type:"button",className:`emoji-btn ${(l?l.icon:h.icon)===b?"active":""}`,onClick:()=>l?m({...l,icon:b}):x({...h,icon:b}),children:b},b))})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"cancel-btn",onClick:()=>{c(!1),m(null)},children:"Cancel"}),t.jsx("button",{className:"save-btn",onClick:l?v:w,disabled:l?!l.url.trim()||!l.title.trim():!h.url.trim()||!h.title.trim(),children:l?"Update":"Add Link"})]})]})}),t.jsx("style",{children:`
                .link-manager {
                    padding: 0;
                }

                .manager-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }

                .header-left h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .header-left p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }

                .add-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .add-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                }

                /* Categories */
                .categories-bar {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }

                .category-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .category-btn:hover {
                    border-color: var(--cat-color);
                }

                .category-btn.active {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
                    border-color: var(--cat-color);
                    color: #fff;
                }

                .cat-icon { font-size: 1rem; }
                .cat-label { font-size: 0.85rem; font-weight: 500; }
                .cat-count {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.15rem 0.5rem;
                    border-radius: 10px;
                    font-size: 0.75rem;
                }

                /* Search */
                .search-bar {
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    padding: 0 1rem;
                    margin-bottom: 1.5rem;
                }

                .search-bar .search-icon {
                    margin-right: 0.5rem;
                }

                .search-bar input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.75rem 0;
                    font-size: 0.95rem;
                }

                .search-bar input:focus { outline: none; }

                /* Links Grid */
                .links-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 1rem;
                }

                .link-card {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 1rem;
                    transition: all 0.2s ease;
                }

                .link-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    transform: translateY(-2px);
                }

                .link-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.75rem;
                }

                .link-icon {
                    font-size: 1.5rem;
                }

                .favorite-btn {
                    background: transparent;
                    border: none;
                    font-size: 1.25rem;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: all 0.2s ease;
                }

                .favorite-btn:hover, .favorite-btn.active {
                    opacity: 1;
                }

                .link-title {
                    margin: 0 0 0.25rem 0;
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 600;
                }

                .link-url {
                    margin: 0 0 0.75rem 0;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.5);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .link-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .category-tag {
                    font-size: 0.7rem;
                    padding: 0.25rem 0.5rem;
                    border-radius: 6px;
                    color: rgba(255, 255, 255, 0.8);
                }

                .link-actions {
                    display: flex;
                    gap: 0.25rem;
                }

                .link-actions button {
                    background: transparent;
                    border: none;
                    font-size: 0.9rem;
                    cursor: pointer;
                    padding: 0.25rem;
                    opacity: 0.5;
                    transition: all 0.2s ease;
                }

                .link-actions button:hover {
                    opacity: 1;
                }

                /* Empty State */
                .empty-state {
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 3rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .empty-icon {
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 1rem;
                    opacity: 0.5;
                }

                .empty-state button {
                    margin-top: 1rem;
                    background: rgba(99, 102, 241, 0.2);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    color: #a5b4fc;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                }

                /* Modal */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: 1rem;
                }

                .modal {
                    background: linear-gradient(135deg, rgba(20, 20, 35, 0.98), rgba(30, 30, 50, 0.98));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 16px;
                    width: 100%;
                    max-width: 450px;
                    overflow: hidden;
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .modal-header h3 {
                    margin: 0;
                    color: #fff;
                    font-size: 1.1rem;
                }

                .close-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1.5rem;
                    cursor: pointer;
                }

                .modal-body {
                    padding: 1.25rem;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group label {
                    display: block;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.85rem;
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group select {
                    width: 100%;
                    padding: 0.75rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    font-size: 0.95rem;
                }

                .form-group input:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .emoji-picker {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .emoji-btn {
                    width: 36px;
                    height: 36px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    background: rgba(0, 0, 0, 0.2);
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .emoji-btn:hover, .emoji-btn.active {
                    border-color: #6366f1;
                    background: rgba(99, 102, 241, 0.2);
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.75rem;
                    padding: 1rem 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .cancel-btn {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                    padding: 0.6rem 1.25rem;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .save-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    padding: 0.6rem 1.25rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .save-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .manager-header {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .add-btn {
                        width: 100%;
                    }

                    .categories-bar {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 0.5rem;
                    }

                    .category-btn {
                        flex-shrink: 0;
                    }

                    .cat-label {
                        display: none;
                    }

                    .links-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})},jx=()=>{const[e,r]=p.useState([{id:1,type:"task",title:"Complete React Course",archivedDate:"2024-11-15",originalDate:"2024-10-01",status:"completed"},{id:2,type:"project",title:"Portfolio Website v1",archivedDate:"2024-11-10",originalDate:"2024-08-15",status:"completed"},{id:3,type:"note",title:"Meeting Notes - Q3 Planning",archivedDate:"2024-10-28",originalDate:"2024-09-20",status:"archived"},{id:4,type:"task",title:"Setup Development Environment",archivedDate:"2024-10-20",originalDate:"2024-10-05",status:"completed"},{id:5,type:"project",title:"E-commerce Prototype",archivedDate:"2024-09-30",originalDate:"2024-07-01",status:"cancelled"},{id:6,type:"note",title:"Research - Cybersecurity Trends",archivedDate:"2024-09-15",originalDate:"2024-09-01",status:"archived"},{id:7,type:"task",title:"Database Migration Script",archivedDate:"2024-08-25",originalDate:"2024-08-10",status:"completed"},{id:8,type:"project",title:"Internal Dashboard v1",archivedDate:"2024-08-10",originalDate:"2024-05-01",status:"completed"}]),[n,a]=p.useState("all"),[i,s]=p.useState(""),[o,c]=p.useState("archivedDate"),[l,m]=p.useState("desc"),[h,x]=p.useState([]),g=[{id:"all",label:"All",icon:"📦",color:"#6366f1"},{id:"task",label:"Tasks",icon:"✅",color:"#10b981"},{id:"project",label:"Projects",icon:"🚀",color:"#f59e0b"},{id:"note",label:"Notes",icon:"📝",color:"#ec4899"}],E={completed:{bg:"rgba(16, 185, 129, 0.2)",color:"#10b981",label:"Completed"},archived:{bg:"rgba(99, 102, 241, 0.2)",color:"#6366f1",label:"Archived"},cancelled:{bg:"rgba(239, 68, 68, 0.2)",color:"#ef4444",label:"Cancelled"}},w=y=>{r(e.filter(I=>I.id!==y))},v=y=>{r(e.filter(I=>I.id!==y))},N=()=>{r(e.filter(y=>!h.includes(y.id))),x([])},d=y=>{x(I=>I.includes(y)?I.filter(O=>O!==y):[...I,y])},u=()=>{h.length===f.length?x([]):x(f.map(y=>y.id))},f=e.filter(y=>{const I=n==="all"||y.type===n,O=y.title.toLowerCase().includes(i.toLowerCase());return I&&O}).sort((y,I)=>{const O=o==="title"?y.title:y[o],R=o==="title"?I.title:I[o];return l==="asc"?O>R?1:-1:O<R?1:-1}),j=y=>y==="all"?e.length:e.filter(I=>I.type===y).length,b=y=>new Date(y).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});return t.jsxs("div",{className:"archive-center",children:[t.jsxs("div",{className:"archive-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("h2",{children:"🗂️ Archive Center"}),t.jsxs("p",{children:[e.length," items archived"]})]}),h.length>0&&t.jsxs("div",{className:"bulk-actions",children:[t.jsxs("span",{className:"selected-count",children:[h.length," selected"]}),t.jsx("button",{className:"danger-btn",onClick:N,children:"🗑️ Delete Selected"})]})]}),t.jsx("div",{className:"type-filters",children:g.map(y=>t.jsxs("button",{className:`type-btn ${n===y.id?"active":""}`,onClick:()=>a(y.id),style:{"--type-color":y.color},children:[t.jsx("span",{className:"type-icon",children:y.icon}),t.jsx("span",{className:"type-label",children:y.label}),t.jsx("span",{className:"type-count",children:j(y.id)})]},y.id))}),t.jsxs("div",{className:"controls-bar",children:[t.jsxs("div",{className:"search-box",children:[t.jsx("span",{className:"search-icon",children:"🔍"}),t.jsx("input",{type:"text",placeholder:"Search archives...",value:i,onChange:y=>s(y.target.value)})]}),t.jsxs("div",{className:"sort-controls",children:[t.jsxs("select",{value:o,onChange:y=>c(y.target.value),children:[t.jsx("option",{value:"archivedDate",children:"Archived Date"}),t.jsx("option",{value:"originalDate",children:"Original Date"}),t.jsx("option",{value:"title",children:"Title"})]}),t.jsx("button",{className:"sort-order-btn",onClick:()=>m(l==="asc"?"desc":"asc"),children:l==="asc"?"↑":"↓"})]})]}),t.jsx("div",{className:"archive-list",children:f.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("span",{className:"empty-icon",children:"📦"}),t.jsx("p",{children:"No archived items found"})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"list-header",children:[t.jsx("label",{className:"checkbox-cell",children:t.jsx("input",{type:"checkbox",checked:h.length===f.length&&f.length>0,onChange:u})}),t.jsx("span",{className:"col-title",children:"Title"}),t.jsx("span",{className:"col-type",children:"Type"}),t.jsx("span",{className:"col-status",children:"Status"}),t.jsx("span",{className:"col-date",children:"Archived"}),t.jsx("span",{className:"col-actions",children:"Actions"})]}),f.map(y=>{var I,O;return t.jsxs("div",{className:`archive-item ${h.includes(y.id)?"selected":""}`,children:[t.jsx("label",{className:"checkbox-cell",children:t.jsx("input",{type:"checkbox",checked:h.includes(y.id),onChange:()=>d(y.id)})}),t.jsxs("div",{className:"col-title",children:[t.jsx("span",{className:"item-icon",children:(I=g.find(R=>R.id===y.type))==null?void 0:I.icon}),t.jsx("span",{className:"item-title",children:y.title})]}),t.jsx("span",{className:"col-type",children:t.jsx("span",{className:"type-badge",style:{background:((O=g.find(R=>R.id===y.type))==null?void 0:O.color)+"20"},children:y.type})}),t.jsx("span",{className:"col-status",children:t.jsx("span",{className:"status-badge",style:{background:E[y.status].bg,color:E[y.status].color},children:E[y.status].label})}),t.jsx("span",{className:"col-date",children:b(y.archivedDate)}),t.jsxs("div",{className:"col-actions",children:[t.jsx("button",{className:"action-btn restore",onClick:()=>w(y.id),title:"Restore",children:"↩️"}),t.jsx("button",{className:"action-btn delete",onClick:()=>v(y.id),title:"Delete Permanently",children:"🗑️"})]})]},y.id)})]})}),t.jsxs("div",{className:"storage-info",children:[t.jsx("div",{className:"storage-bar",children:t.jsx("div",{className:"storage-used",style:{width:`${e.length/100*100}%`}})}),t.jsxs("span",{className:"storage-text",children:[e.length," of 100 archive slots used"]})]}),t.jsx("style",{children:`
                .archive-center {
                    padding: 0;
                }

                .archive-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .header-left h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .header-left p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }

                .bulk-actions {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .selected-count {
                    color: #6366f1;
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .danger-btn {
                    background: rgba(239, 68, 68, 0.2);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    color: #ef4444;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .danger-btn:hover {
                    background: rgba(239, 68, 68, 0.3);
                }

                /* Type Filters */
                .type-filters {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }

                .type-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .type-btn:hover {
                    border-color: var(--type-color);
                }

                .type-btn.active {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
                    border-color: var(--type-color);
                    color: #fff;
                }

                .type-icon { font-size: 1rem; }
                .type-label { font-size: 0.85rem; font-weight: 500; }
                .type-count {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.15rem 0.5rem;
                    border-radius: 10px;
                    font-size: 0.75rem;
                }

                /* Controls */
                .controls-bar {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .search-box {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    padding: 0 1rem;
                }

                .search-box .search-icon {
                    margin-right: 0.5rem;
                }

                .search-box input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.75rem 0;
                    font-size: 0.95rem;
                }

                .search-box input:focus { outline: none; }

                .sort-controls {
                    display: flex;
                    gap: 0.5rem;
                }

                .sort-controls select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    padding: 0.5rem 1rem;
                }

                .sort-order-btn {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    padding: 0.5rem 0.75rem;
                    cursor: pointer;
                    font-size: 1rem;
                }

                /* Archive List */
                .archive-list {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .list-header {
                    display: grid;
                    grid-template-columns: 40px 1fr 100px 100px 120px 100px;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .archive-item {
                    display: grid;
                    grid-template-columns: 40px 1fr 100px 100px 120px 100px;
                    padding: 0.75rem 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    align-items: center;
                    transition: all 0.15s ease;
                }

                .archive-item:hover {
                    background: rgba(99, 102, 241, 0.05);
                }

                .archive-item.selected {
                    background: rgba(99, 102, 241, 0.1);
                }

                .checkbox-cell {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .checkbox-cell input[type="checkbox"] {
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                }

                .col-title {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .item-icon { font-size: 1.1rem; }
                .item-title {
                    color: #fff;
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                .type-badge, .status-badge {
                    font-size: 0.75rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    text-transform: capitalize;
                }

                .col-date {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.85rem;
                }

                .col-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .action-btn {
                    background: transparent;
                    border: none;
                    font-size: 1rem;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: all 0.2s ease;
                }

                .action-btn:hover {
                    opacity: 1;
                }

                /* Empty State */
                .empty-state {
                    text-align: center;
                    padding: 3rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .empty-icon {
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 1rem;
                    opacity: 0.5;
                }

                /* Storage Info */
                .storage-info {
                    margin-top: 1.5rem;
                    text-align: center;
                }

                .storage-bar {
                    height: 6px;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 3px;
                    overflow: hidden;
                    margin-bottom: 0.5rem;
                }

                .storage-used {
                    height: 100%;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .storage-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .list-header,
                    .archive-item {
                        grid-template-columns: 40px 1fr 80px 80px;
                    }

                    .col-date,
                    .col-type {
                        display: none;
                    }
                }

                @media (max-width: 600px) {
                    .controls-bar {
                        flex-direction: column;
                    }

                    .type-filters {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 0.5rem;
                    }

                    .type-btn {
                        flex-shrink: 0;
                    }

                    .type-label {
                        display: none;
                    }

                    .list-header,
                    .archive-item {
                        grid-template-columns: 40px 1fr 80px;
                    }

                    .col-status {
                        display: none;
                    }
                }
            `})]})},tm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),t.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),wx=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"8",y:"6",width:"8",height:"14",rx:"4"}),t.jsx("path",{d:"M19 9h-3"}),t.jsx("path",{d:"M8 9H5"}),t.jsx("path",{d:"M19 13h-3"}),t.jsx("path",{d:"M8 13H5"}),t.jsx("path",{d:"M19 17h-3"}),t.jsx("path",{d:"M8 17H5"}),t.jsx("path",{d:"M12 6V2"})]}),kx=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Nx=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),t.jsx("polyline",{points:"22,6 12,13 2,6"})]}),rm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}),t.jsx("path",{d:"M13 5v2"}),t.jsx("path",{d:"M13 17v2"}),t.jsx("path",{d:"M13 11v2"})]}),Sx=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),t.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),Cx=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})}),Ga="muhammadlutfimuzaki.devopssec@gmail.com",zx=[{id:"help",label:"Help & Support",icon:tm,color:"#6366f1",description:"Butuh bantuan menggunakan aplikasi"},{id:"bug",label:"Bug Report",icon:wx,color:"#ef4444",description:"Laporkan error atau masalah teknis"},{id:"feedback",label:"Feedback",icon:kx,color:"#10b981",description:"Saran untuk meningkatkan aplikasi"},{id:"contact",label:"Contact Developer",icon:Nx,color:"#f59e0b",description:"Hubungi developer langsung"},{id:"ticket",label:"Support Ticket",icon:rm,color:"#8b5cf6",description:"Buat tiket dukungan formal"}],Tx=[{id:"low",label:"Low",color:"#22c55e"},{id:"medium",label:"Medium",color:"#f59e0b"},{id:"high",label:"High",color:"#f97316"},{id:"critical",label:"Critical",color:"#ef4444"}],Lx=[{q:"Bagaimana cara menggunakan Music Player?",a:"Klik icon musik di pojok kanan bawah untuk membuka player. Anda bisa play/pause, skip track, dan mengatur volume."},{q:"Bagaimana cara bermain Chess vs AI?",a:'Pilih menu "Chess Game" di sidebar. Pilih difficulty level, lalu mulai bermain dengan menggerakkan bidak putih.'},{q:"Bagaimana cara menambah task baru?",a:'Buka menu "Task Manager", klik tombol "New Task", isi detail task, lalu klik "Create Task".'},{q:"Bagaimana cara mengubah theme/tema?",a:'Buka menu "Pengaturan" > "Theme" untuk mengubah warna dan tampilan dashboard.'},{q:"Bagaimana cara logout?",a:"Klik tombol logout di bagian bawah sidebar (icon keluar)."}];function Ex(){const{user:e}=kr(),[r,n]=p.useState("help"),[a,i]=p.useState(null),[s,o]=p.useState({subject:"",message:"",priority:"medium",category:"",browserInfo:navigator.userAgent,timestamp:""}),[c,l]=p.useState(!1),[m,h]=p.useState(!1),[x,g]=p.useState(null),[E,w]=p.useState([{id:"TKT-001",type:"bug",subject:"Sample: Loading issue",status:"open",date:"2024-12-10",priority:"high"}]),v=b=>{const{name:y,value:I}=b.target;o(O=>({...O,[y]:I}))},N=async b=>{b.preventDefault(),l(!0);const y=encodeURIComponent(`[Lutfi-Lab.ID ${(a==null?void 0:a.label)||"Support"}] ${s.subject}`),I=encodeURIComponent(`=== SUPPORT REQUEST ===
Type: ${(a==null?void 0:a.label)||"General"}
Priority: ${s.priority.toUpperCase()}
Date: ${new Date().toLocaleString("id-ID")}

--- USER INFO ---
Name: ${(e==null?void 0:e.name)||"Anonymous"}
Email: ${(e==null?void 0:e.email)||"N/A"}

--- MESSAGE ---
${s.message}

--- TECHNICAL INFO ---
Browser: ${s.browserInfo}
URL: ${window.location.href}
Screen: ${window.innerWidth}x${window.innerHeight}

---
Sent from Lutfi-Lab.ID Support Center
`),O=`mailto:${Ga}?subject=${y}&body=${I}`;window.location.href=O;const R={id:`TKT-${String(E.length+1).padStart(3,"0")}`,type:(a==null?void 0:a.id)||"help",subject:s.subject,status:"open",date:new Date().toISOString().split("T")[0],priority:s.priority};w(W=>[R,...W]),setTimeout(()=>{l(!1),h(!0),setTimeout(()=>{h(!1),i(null),o({subject:"",message:"",priority:"medium",category:"",browserInfo:navigator.userAgent,timestamp:""})},3e3)},1e3)},d=()=>t.jsxs("div",{className:"type-selector",children:[t.jsx("h3",{children:"Pilih Jenis Bantuan"}),t.jsx("div",{className:"type-grid",children:zx.map(b=>t.jsxs("button",{className:`type-card ${(a==null?void 0:a.id)===b.id?"active":""}`,onClick:()=>i(b),style:{"--card-color":b.color},children:[t.jsx("div",{className:"type-icon",children:t.jsx(b.icon,{})}),t.jsx("span",{className:"type-label",children:b.label}),t.jsx("span",{className:"type-desc",children:b.description})]},b.id))})]}),u=()=>{var b;return t.jsxs("div",{className:"support-form-container",children:[t.jsx("button",{className:"back-btn",onClick:()=>i(null),children:"← Kembali"}),t.jsx("div",{className:"form-header",children:t.jsxs("div",{className:"form-type-badge",style:{background:a.color},children:[t.jsx(a.icon,{}),t.jsx("span",{children:a.label})]})}),m?t.jsxs("div",{className:"success-message",children:[t.jsx("div",{className:"success-icon",children:t.jsx(Cx,{})}),t.jsx("h3",{children:"Terkirim!"}),t.jsx("p",{children:"Email client Anda akan terbuka. Silakan kirim email tersebut."}),t.jsxs("p",{className:"success-note",children:["Tiket #",(b=E[0])==null?void 0:b.id," telah dibuat"]})]}):t.jsxs("form",{onSubmit:N,className:"support-form",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Subjek *"}),t.jsx("input",{type:"text",name:"subject",value:s.subject,onChange:v,placeholder:"Ringkasan masalah atau pertanyaan Anda",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Prioritas"}),t.jsx("div",{className:"priority-selector",children:Tx.map(y=>t.jsx("button",{type:"button",className:`priority-btn ${s.priority===y.id?"active":""}`,onClick:()=>o(I=>({...I,priority:y.id})),style:{"--priority-color":y.color},children:y.label},y.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Pesan *"}),t.jsx("textarea",{name:"message",value:s.message,onChange:v,placeholder:a.id==="bug"?`Jelaskan bug yang Anda temukan:
1. Langkah untuk mereproduksi
2. Apa yang terjadi
3. Apa yang seharusnya terjadi`:a.id==="feedback"?"Berikan saran atau masukan Anda...":"Jelaskan pertanyaan atau masalah Anda secara detail...",rows:6,required:!0})]}),t.jsxs("div",{className:"form-info",children:[t.jsxs("p",{children:["📧 Email akan dikirim ke: ",t.jsx("strong",{children:Ga})]}),t.jsxs("p",{children:["👤 Dikirim oleh: ",t.jsx("strong",{children:(e==null?void 0:e.name)||"Anonymous"})]})]}),t.jsx("button",{type:"submit",className:"submit-btn",disabled:c,children:c?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"spinner"}),"Mengirim..."]}):t.jsxs(t.Fragment,{children:[t.jsx(Sx,{}),"Kirim Laporan"]})})]})]})},f=()=>t.jsxs("div",{className:"faq-section",children:[t.jsx("h3",{children:"❓ Pertanyaan Umum (FAQ)"}),t.jsx("div",{className:"faq-list",children:Lx.map((b,y)=>t.jsxs("div",{className:`faq-item ${x===y?"expanded":""}`,children:[t.jsxs("button",{className:"faq-question",onClick:()=>g(x===y?null:y),children:[t.jsx("span",{children:b.q}),t.jsx("span",{className:"faq-toggle",children:x===y?"−":"+"})]}),x===y&&t.jsx("div",{className:"faq-answer",children:b.a})]},y))})]}),j=()=>t.jsxs("div",{className:"tickets-section",children:[t.jsx("h3",{children:"🎫 Tiket Saya"}),E.length===0?t.jsx("p",{className:"no-tickets",children:"Belum ada tiket support."}):t.jsx("div",{className:"tickets-list",children:E.map(b=>t.jsxs("div",{className:`ticket-item ${b.status}`,children:[t.jsxs("div",{className:"ticket-header",children:[t.jsx("span",{className:"ticket-id",children:b.id}),t.jsx("span",{className:`ticket-status ${b.status}`,children:b.status==="open"?"🟢 Open":b.status==="pending"?"🟡 Pending":"✅ Closed"})]}),t.jsx("div",{className:"ticket-subject",children:b.subject}),t.jsxs("div",{className:"ticket-meta",children:[t.jsx("span",{className:`ticket-priority ${b.priority}`,children:b.priority}),t.jsx("span",{className:"ticket-date",children:b.date})]})]},b.id))})]});return t.jsxs("div",{className:"support-center",children:[t.jsxs("div",{className:"support-header",children:[t.jsx("h1",{children:"🛟 Support Center"}),t.jsx("p",{children:"Butuh bantuan? Kami siap membantu Anda!"})]}),t.jsxs("div",{className:"support-tabs",children:[t.jsxs("button",{className:`tab-btn ${r==="help"?"active":""}`,onClick:()=>n("help"),children:[t.jsx(tm,{})," Help & Report"]}),t.jsx("button",{className:`tab-btn ${r==="faq"?"active":""}`,onClick:()=>n("faq"),children:"❓ FAQ"}),t.jsxs("button",{className:`tab-btn ${r==="tickets"?"active":""}`,onClick:()=>n("tickets"),children:[t.jsx(rm,{})," My Tickets"]})]}),t.jsxs("div",{className:"support-content",children:[r==="help"&&(a?u():d()),r==="faq"&&f(),r==="tickets"&&j()]}),t.jsxs("div",{className:"support-footer",children:[t.jsxs("p",{children:["📧 Developer: ",t.jsx("a",{href:`mailto:${Ga}`,children:Ga})]}),t.jsx("p",{children:"💡 Response time: Biasanya dalam 24-48 jam"})]}),t.jsx("style",{children:`
                .support-center {
                    padding: 1.5rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .support-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .support-header h1 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .support-header p {
                    color: var(--text-secondary);
                }

                .support-tabs {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.5rem;
                    border-radius: 12px;
                }

                .tab-btn {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1rem;
                    background: transparent;
                    border: none;
                    border-radius: 8px;
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .tab-btn:hover {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-primary);
                }

                .tab-btn.active {
                    background: var(--gradient-primary);
                    color: white;
                }

                .support-content {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.5rem;
                    min-height: 400px;
                }

                /* Type Selector */
                .type-selector h3 {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    color: var(--text-primary);
                }

                .type-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 1rem;
                }

                .type-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1.5rem 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s;
                    text-align: center;
                }

                .type-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: var(--card-color);
                    transform: translateY(-4px);
                }

                .type-card.active {
                    background: color-mix(in srgb, var(--card-color) 15%, transparent);
                    border-color: var(--card-color);
                    box-shadow: 0 4px 20px color-mix(in srgb, var(--card-color) 30%, transparent);
                }

                .type-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: color-mix(in srgb, var(--card-color) 20%, transparent);
                    border-radius: 12px;
                    color: var(--card-color);
                }

                .type-icon svg {
                    width: 24px;
                    height: 24px;
                }

                .type-label {
                    font-weight: 600;
                    color: var(--text-primary);
                    font-size: 0.9rem;
                }

                .type-desc {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    line-height: 1.4;
                }

                /* Form */
                .support-form-container {
                    animation: fadeIn 0.3s ease;
                }

                .back-btn {
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    cursor: pointer;
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    transition: color 0.2s;
                }

                .back-btn:hover {
                    color: var(--text-primary);
                }

                .form-header {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }

                .form-type-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.625rem 1.25rem;
                    border-radius: 20px;
                    color: white;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .support-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--text-secondary);
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    color: var(--text-primary);
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    resize: vertical;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #6366f1;
                    background: rgba(255, 255, 255, 0.08);
                }

                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: var(--text-muted);
                }

                .priority-selector {
                    display: flex;
                    gap: 0.5rem;
                }

                .priority-btn {
                    flex: 1;
                    padding: 0.625rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .priority-btn:hover {
                    background: rgba(255, 255, 255, 0.08);
                }

                .priority-btn.active {
                    background: color-mix(in srgb, var(--priority-color) 20%, transparent);
                    border-color: var(--priority-color);
                    color: var(--priority-color);
                }

                .form-info {
                    background: rgba(99, 102, 241, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 10px;
                    padding: 1rem;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .form-info p {
                    margin: 0.25rem 0;
                }

                .form-info strong {
                    color: var(--text-primary);
                }

                .submit-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background: var(--gradient-primary);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* Success Message */
                .success-message {
                    text-align: center;
                    padding: 3rem 2rem;
                    animation: fadeIn 0.3s ease;
                }

                .success-icon {
                    width: 64px;
                    height: 64px;
                    background: linear-gradient(135deg, #10b981, #34d399);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                    color: white;
                    animation: pop 0.3s ease;
                }

                @keyframes pop {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }

                .success-message h3 {
                    color: #10b981;
                    margin-bottom: 0.5rem;
                }

                .success-message p {
                    color: var(--text-secondary);
                    margin-bottom: 0.25rem;
                }

                .success-note {
                    margin-top: 1rem;
                    padding: 0.75rem;
                    background: rgba(16, 185, 129, 0.1);
                    border-radius: 8px;
                    color: #10b981;
                    font-weight: 500;
                }

                /* FAQ */
                .faq-section h3 {
                    margin-bottom: 1rem;
                }

                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .faq-question {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: none;
                    border: none;
                    color: var(--text-primary);
                    font-size: 0.9rem;
                    text-align: left;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .faq-question:hover {
                    background: rgba(255, 255, 255, 0.03);
                }

                .faq-toggle {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(99, 102, 241, 0.2);
                    border-radius: 50%;
                    color: #6366f1;
                    font-weight: bold;
                }

                .faq-answer {
                    padding: 0 1rem 1rem;
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                    line-height: 1.6;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Tickets */
                .tickets-section h3 {
                    margin-bottom: 1rem;
                }

                .no-tickets {
                    text-align: center;
                    color: var(--text-muted);
                    padding: 2rem;
                }

                .tickets-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .ticket-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 10px;
                    padding: 1rem;
                    transition: all 0.2s;
                }

                .ticket-item:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                .ticket-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .ticket-id {
                    font-family: monospace;
                    font-size: 0.8rem;
                    color: #6366f1;
                    background: rgba(99, 102, 241, 0.1);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }

                .ticket-status {
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .ticket-subject {
                    font-weight: 500;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                }

                .ticket-meta {
                    display: flex;
                    gap: 1rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .ticket-priority {
                    text-transform: uppercase;
                    font-weight: 600;
                }

                .ticket-priority.low { color: #22c55e; }
                .ticket-priority.medium { color: #f59e0b; }
                .ticket-priority.high { color: #f97316; }
                .ticket-priority.critical { color: #ef4444; }

                /* Footer */
                .support-footer {
                    margin-top: 2rem;
                    text-align: center;
                    padding: 1.5rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .support-footer p {
                    margin: 0.25rem 0;
                }

                .support-footer a {
                    color: #6366f1;
                    text-decoration: none;
                }

                .support-footer a:hover {
                    text-decoration: underline;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .support-center {
                        padding: 1rem;
                    }

                    .type-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .support-tabs {
                        flex-direction: column;
                    }

                    .priority-selector {
                        flex-wrap: wrap;
                    }

                    .priority-btn {
                        flex: 1 1 40%;
                    }
                }
            `})]})}const Mx=()=>{const[e]=p.useState([{id:1,type:"login",user:"Muhammad Lutfi",action:"User logged in",ip:"192.168.1.100",device:"Chrome/Windows",timestamp:new Date(Date.now()-3e5)},{id:2,type:"data",user:"Muhammad Lutfi",action:"Created new task: Review Security",ip:"192.168.1.100",device:"Chrome/Windows",timestamp:new Date(Date.now()-9e5)},{id:3,type:"data",user:"Muhammad Lutfi",action:"Updated project status to Active",ip:"192.168.1.100",device:"Chrome/Windows",timestamp:new Date(Date.now()-18e5)},{id:4,type:"system",user:"System",action:"Backup completed successfully",ip:"localhost",device:"Server",timestamp:new Date(Date.now()-36e5)},{id:5,type:"error",user:"System",action:"Failed to connect to API endpoint",ip:"localhost",device:"Server",timestamp:new Date(Date.now()-72e5)},{id:6,type:"security",user:"Unknown",action:"Failed login attempt detected",ip:"45.33.32.156",device:"Unknown",timestamp:new Date(Date.now()-108e5)},{id:7,type:"login",user:"Admin",action:"Admin user logged in",ip:"192.168.1.1",device:"Firefox/MacOS",timestamp:new Date(Date.now()-144e5)},{id:8,type:"logout",user:"Admin",action:"Admin user logged out",ip:"192.168.1.1",device:"Firefox/MacOS",timestamp:new Date(Date.now()-18e6)},{id:9,type:"data",user:"Muhammad Lutfi",action:"Deleted old archived items (5 items)",ip:"192.168.1.100",device:"Chrome/Windows",timestamp:new Date(Date.now()-864e5)},{id:10,type:"system",user:"System",action:"Scheduled maintenance completed",ip:"localhost",device:"Server",timestamp:new Date(Date.now()-1728e5)}]),[r,n]=p.useState("all"),[a,i]=p.useState("all"),[s,o]=p.useState(""),[c,l]=p.useState("all"),m=[{id:"all",label:"All",icon:"📋",color:"#6366f1"},{id:"login",label:"Login",icon:"🔑",color:"#10b981"},{id:"logout",label:"Logout",icon:"🚪",color:"#f59e0b"},{id:"data",label:"Data",icon:"📊",color:"#8b5cf6"},{id:"system",label:"System",icon:"⚙️",color:"#22d3ee"},{id:"error",label:"Error",icon:"❌",color:"#ef4444"},{id:"security",label:"Security",icon:"🛡️",color:"#ec4899"}],h=[{id:"all",label:"All Time"},{id:"today",label:"Today"},{id:"week",label:"This Week"},{id:"month",label:"This Month"}],x=p.useMemo(()=>{const d=new Set(e.map(u=>u.user));return["all",...Array.from(d)]},[e]),g=p.useMemo(()=>e.filter(d=>{if(r!=="all"&&d.type!==r||a!=="all"&&d.user!==a||s&&!d.action.toLowerCase().includes(s.toLowerCase())&&!d.user.toLowerCase().includes(s.toLowerCase())&&!d.ip.includes(s))return!1;const u=new Date,f=new Date(d.timestamp);if(c==="today"){if(f.toDateString()!==u.toDateString())return!1}else if(c==="week"){const j=new Date(u.getTime()-6048e5);if(f<j)return!1}else if(c==="month"){const j=new Date(u.getTime()-2592e6);if(f<j)return!1}return!0}).sort((d,u)=>u.timestamp-d.timestamp),[e,r,a,s,c]),E=d=>{const f=new Date-d;return f<60*1e3?"Just now":f<60*60*1e3?`${Math.floor(f/(60*1e3))}m ago`:f<24*60*60*1e3?`${Math.floor(f/(60*60*1e3))}h ago`:f<48*60*60*1e3?"Yesterday":d.toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})},w=d=>{const u=m.find(f=>f.id===d);return{bg:(u==null?void 0:u.color)+"20",color:u==null?void 0:u.color,icon:u==null?void 0:u.icon}},N=(()=>{const d=new Date;return d.setHours(0,0,0,0),{total:e.length,today:e.filter(u=>new Date(u.timestamp)>=d).length,errors:e.filter(u=>u.type==="error").length,security:e.filter(u=>u.type==="security").length}})();return t.jsxs("div",{className:"activity-logs",children:[t.jsxs("div",{className:"logs-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("h2",{children:"📋 Activity Logs"}),t.jsx("p",{children:"Monitor all system activities"})]}),t.jsx("button",{className:"export-btn",children:"📥 Export Logs"})]}),t.jsxs("div",{className:"stats-grid",children:[t.jsxs("div",{className:"stat-card",children:[t.jsx("span",{className:"stat-icon",children:"📊"}),t.jsxs("div",{className:"stat-info",children:[t.jsx("span",{className:"stat-value",children:N.total}),t.jsx("span",{className:"stat-label",children:"Total Logs"})]})]}),t.jsxs("div",{className:"stat-card",children:[t.jsx("span",{className:"stat-icon",children:"📅"}),t.jsxs("div",{className:"stat-info",children:[t.jsx("span",{className:"stat-value",children:N.today}),t.jsx("span",{className:"stat-label",children:"Today"})]})]}),t.jsxs("div",{className:"stat-card warning",children:[t.jsx("span",{className:"stat-icon",children:"❌"}),t.jsxs("div",{className:"stat-info",children:[t.jsx("span",{className:"stat-value",children:N.errors}),t.jsx("span",{className:"stat-label",children:"Errors"})]})]}),t.jsxs("div",{className:"stat-card danger",children:[t.jsx("span",{className:"stat-icon",children:"🛡️"}),t.jsxs("div",{className:"stat-info",children:[t.jsx("span",{className:"stat-value",children:N.security}),t.jsx("span",{className:"stat-label",children:"Security"})]})]})]}),t.jsxs("div",{className:"filters-bar",children:[t.jsx("div",{className:"type-filters",children:m.map(d=>t.jsxs("button",{className:`type-btn ${r===d.id?"active":""}`,onClick:()=>n(d.id),style:{"--type-color":d.color},children:[t.jsx("span",{children:d.icon}),t.jsx("span",{className:"type-label",children:d.label})]},d.id))}),t.jsxs("div",{className:"filter-controls",children:[t.jsxs("div",{className:"search-box",children:[t.jsx("span",{children:"🔍"}),t.jsx("input",{type:"text",placeholder:"Search logs...",value:s,onChange:d=>o(d.target.value)})]}),t.jsx("select",{value:a,onChange:d=>i(d.target.value),children:x.map(d=>t.jsx("option",{value:d,children:d==="all"?"All Users":d},d))}),t.jsx("select",{value:c,onChange:d=>l(d.target.value),children:h.map(d=>t.jsx("option",{value:d.id,children:d.label},d.id))})]})]}),t.jsx("div",{className:"logs-list",children:g.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("span",{className:"empty-icon",children:"📋"}),t.jsx("p",{children:"No logs found"})]}):g.map(d=>{const u=w(d.type);return t.jsxs("div",{className:"log-item",children:[t.jsx("div",{className:"log-type",style:{background:u.bg,color:u.color},children:u.icon}),t.jsxs("div",{className:"log-content",children:[t.jsxs("div",{className:"log-main",children:[t.jsx("span",{className:"log-action",children:d.action}),t.jsx("span",{className:"log-time",children:E(d.timestamp)})]}),t.jsxs("div",{className:"log-meta",children:[t.jsxs("span",{className:"meta-item",children:[t.jsx("span",{className:"meta-icon",children:"👤"}),d.user]}),t.jsxs("span",{className:"meta-item",children:[t.jsx("span",{className:"meta-icon",children:"🌐"}),d.ip]}),t.jsxs("span",{className:"meta-item",children:[t.jsx("span",{className:"meta-icon",children:"💻"}),d.device]})]})]})]},d.id)})}),t.jsx("style",{children:`
                .activity-logs {
                    padding: 0;
                }

                .logs-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }

                .header-left h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .header-left p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }

                .export-btn {
                    background: rgba(99, 102, 241, 0.2);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    color: #a5b4fc;
                    padding: 0.6rem 1.25rem;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }

                .export-btn:hover {
                    background: rgba(99, 102, 241, 0.3);
                }

                /* Stats Grid */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .stat-card {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                }

                .stat-card.warning {
                    border-color: rgba(245, 158, 11, 0.3);
                }

                .stat-card.danger {
                    border-color: rgba(239, 68, 68, 0.3);
                }

                .stat-icon {
                    font-size: 1.5rem;
                }

                .stat-info {
                    display: flex;
                    flex-direction: column;
                }

                .stat-value {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Filters */
                .filters-bar {
                    margin-bottom: 1.5rem;
                }

                .type-filters {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                }

                .type-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    padding: 0.4rem 0.75rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    font-size: 0.8rem;
                    transition: all 0.2s ease;
                }

                .type-btn:hover {
                    border-color: var(--type-color);
                }

                .type-btn.active {
                    background: rgba(99, 102, 241, 0.2);
                    border-color: var(--type-color);
                    color: #fff;
                }

                .type-label {
                    display: none;
                }

                @media (min-width: 768px) {
                    .type-label {
                        display: inline;
                    }
                }

                .filter-controls {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }

                .search-box {
                    flex: 1;
                    min-width: 200px;
                    display: flex;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0 0.75rem;
                }

                .search-box input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #fff;
                    padding: 0.6rem 0;
                    margin-left: 0.5rem;
                    font-size: 0.9rem;
                }

                .search-box input:focus { outline: none; }

                .filter-controls select {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: #fff;
                    padding: 0.6rem 1rem;
                    font-size: 0.9rem;
                }

                /* Logs List */
                .logs-list {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .log-item {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    transition: background 0.15s ease;
                }

                .log-item:hover {
                    background: rgba(99, 102, 241, 0.05);
                }

                .log-item:last-child {
                    border-bottom: none;
                }

                .log-type {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    flex-shrink: 0;
                }

                .log-content {
                    flex: 1;
                    min-width: 0;
                }

                .log-main {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 0.375rem;
                }

                .log-action {
                    color: #fff;
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                .log-time {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.8rem;
                    white-space: nowrap;
                }

                .log-meta {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                }

                .meta-icon {
                    font-size: 0.7rem;
                }

                /* Empty State */
                .empty-state {
                    text-align: center;
                    padding: 3rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .empty-icon {
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 1rem;
                    opacity: 0.5;
                }

                /* Responsive */
                @media (max-width: 600px) {
                    .logs-header {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .export-btn {
                        width: 100%;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .log-main {
                        flex-direction: column;
                        gap: 0.25rem;
                    }
                }
            `})]})},Px=()=>{const[e]=p.useState({productivity:{daily:[65,72,80,75,85,90,78],labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},tasksCompleted:{weekly:[12,8,15,10,18,6,9],total:78},focusTime:{daily:[120,90,150,180,160,45,110],average:122},categories:[{name:"Kerja",value:35,color:"#6366f1"},{name:"Kampus",value:25,color:"#10b981"},{name:"Project",value:20,color:"#f59e0b"},{name:"Pribadi",value:15,color:"#ec4899"},{name:"Lainnya",value:5,color:"#8b5cf6"}],streaks:{current:7,best:14},overview:{totalTasks:156,completedTasks:142,activeProjects:4,focusHours:32}}),[r,n]=p.useState({}),[a,i]=p.useState("week");p.useEffect(()=>{const m=setTimeout(()=>{n({productivity:!0,tasks:!0,focus:!0,pie:!0})},100);return()=>clearTimeout(m)},[]);const s=(m,h,x=100,g="#6366f1")=>t.jsx("div",{className:"bar-chart",children:m.map((E,w)=>t.jsxs("div",{className:"bar-wrapper",children:[t.jsx("div",{className:"bar",style:{height:r.productivity?`${E/x*100}%`:"0%",background:`linear-gradient(180deg, ${g}, ${g}80)`,transitionDelay:`${w*.05}s`},children:t.jsx("span",{className:"bar-value",children:E})}),t.jsx("span",{className:"bar-label",children:h[w]})]},w))}),o=m=>{let h=0;const x=m.map(g=>{const E={...g,start:h,end:h+g.value};return h+=g.value,E});return t.jsxs("div",{className:"pie-chart-container",children:[t.jsx("div",{className:"pie-chart",style:{background:`conic-gradient(${x.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`},children:t.jsxs("div",{className:"pie-center",children:[t.jsx("span",{className:"pie-total",children:e.overview.totalTasks}),t.jsx("span",{className:"pie-label",children:"Total"})]})}),t.jsx("div",{className:"pie-legend",children:m.map((g,E)=>t.jsxs("div",{className:"legend-item",children:[t.jsx("span",{className:"legend-color",style:{background:g.color}}),t.jsx("span",{className:"legend-name",children:g.name}),t.jsxs("span",{className:"legend-value",children:[g.value,"%"]})]},E))})]})},c=(m,h="#10b981")=>{const x=Math.max(...m),g=m.map((v,N)=>({x:N/(m.length-1)*100,y:100-v/x*80})),E=`M 0 100 L ${g.map(v=>`${v.x} ${v.y}`).join(" L ")} L 100 100 Z`,w=`M ${g.map(v=>`${v.x} ${v.y}`).join(" L ")}`;return t.jsxs("div",{className:"area-chart",children:[t.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"areaGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.5"}),t.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0"})]})}),t.jsx("path",{d:E,fill:"url(#areaGradient)",className:r.focus?"visible":""}),t.jsx("path",{d:w,fill:"none",stroke:h,strokeWidth:"0.5",className:r.focus?"visible":""}),g.map((v,N)=>t.jsx("circle",{cx:v.x,cy:v.y,r:"1.5",fill:h,className:r.focus?"visible":"",style:{transitionDelay:`${N*.05}s`}},N))]}),t.jsx("div",{className:"area-labels",children:e.productivity.labels.map((v,N)=>t.jsx("span",{children:v},N))})]})},l=(m,h,x="#6366f1",g=80)=>{const E=m/h*100,w=2*Math.PI*35,v=w-w*E/100;return t.jsxs("div",{className:"progress-ring",style:{width:g,height:g},children:[t.jsxs("svg",{viewBox:"0 0 80 80",children:[t.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"6"}),t.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:x,strokeWidth:"6",strokeLinecap:"round",strokeDasharray:w,strokeDashoffset:r.tasks?v:w,transform:"rotate(-90 40 40)",style:{transition:"stroke-dashoffset 1s ease"}})]}),t.jsxs("div",{className:"ring-value",children:[Math.round(E),"%"]})]})};return t.jsxs("div",{className:"analytics-dashboard",children:[t.jsxs("div",{className:"analytics-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("h2",{children:"📊 Analytics Dashboard"}),t.jsx("p",{children:"Track your productivity metrics"})]}),t.jsx("div",{className:"time-range",children:["day","week","month"].map(m=>t.jsx("button",{className:`range-btn ${a===m?"active":""}`,onClick:()=>i(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),t.jsxs("div",{className:"quick-stats",children:[t.jsxs("div",{className:"quick-stat",children:[t.jsx("span",{className:"qs-icon",children:"📋"}),t.jsxs("div",{className:"qs-info",children:[t.jsxs("span",{className:"qs-value",children:[e.overview.completedTasks,"/",e.overview.totalTasks]}),t.jsx("span",{className:"qs-label",children:"Tasks Completed"})]}),l(e.overview.completedTasks,e.overview.totalTasks,"#10b981",50)]}),t.jsxs("div",{className:"quick-stat",children:[t.jsx("span",{className:"qs-icon",children:"🔥"}),t.jsxs("div",{className:"qs-info",children:[t.jsxs("span",{className:"qs-value",children:[e.streaks.current," days"]}),t.jsx("span",{className:"qs-label",children:"Current Streak"})]})]}),t.jsxs("div",{className:"quick-stat",children:[t.jsx("span",{className:"qs-icon",children:"⏱️"}),t.jsxs("div",{className:"qs-info",children:[t.jsxs("span",{className:"qs-value",children:[e.overview.focusHours,"h"]}),t.jsx("span",{className:"qs-label",children:"Focus Time"})]})]}),t.jsxs("div",{className:"quick-stat",children:[t.jsx("span",{className:"qs-icon",children:"🚀"}),t.jsxs("div",{className:"qs-info",children:[t.jsx("span",{className:"qs-value",children:e.overview.activeProjects}),t.jsx("span",{className:"qs-label",children:"Active Projects"})]})]})]}),t.jsxs("div",{className:"charts-grid",children:[t.jsxs("div",{className:"chart-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"📈 Productivity Score"}),t.jsx("span",{className:"badge success",children:"+12% vs last week"})]}),s(e.productivity.daily,e.productivity.labels)]}),t.jsxs("div",{className:"chart-card",children:[t.jsx("div",{className:"card-header",children:t.jsx("h3",{children:"🏷️ Task Categories"})}),o(e.categories)]}),t.jsxs("div",{className:"chart-card wide",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"⏱️ Focus Time (minutes)"}),t.jsxs("span",{className:"badge",children:["Avg: ",e.focusTime.average,"min"]})]}),c(e.focusTime.daily)]}),t.jsxs("div",{className:"chart-card",children:[t.jsx("div",{className:"card-header",children:t.jsx("h3",{children:"✅ Tasks Completed"})}),s(e.tasksCompleted.weekly,e.productivity.labels,20,"#10b981")]}),t.jsxs("div",{className:"chart-card",children:[t.jsx("div",{className:"card-header",children:t.jsx("h3",{children:"🕐 Most Productive Hours"})}),t.jsxs("div",{className:"best-hours",children:[t.jsxs("div",{className:"hour-item best",children:[t.jsx("span",{className:"hour-time",children:"09:00 - 11:00"}),t.jsx("div",{className:"hour-bar",style:{width:"90%"}}),t.jsx("span",{className:"hour-label",children:"Peak Performance"})]}),t.jsxs("div",{className:"hour-item",children:[t.jsx("span",{className:"hour-time",children:"14:00 - 16:00"}),t.jsx("div",{className:"hour-bar",style:{width:"70%"}})]}),t.jsxs("div",{className:"hour-item",children:[t.jsx("span",{className:"hour-time",children:"20:00 - 22:00"}),t.jsx("div",{className:"hour-bar",style:{width:"55%"}})]})]})]})]}),t.jsx("style",{children:`
                .analytics-dashboard {
                    padding: 0;
                }

                .analytics-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .header-left h2 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                    color: #fff;
                }

                .header-left p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }

                .time-range {
                    display: flex;
                    gap: 0.25rem;
                    background: rgba(0, 0, 0, 0.3);
                    padding: 0.25rem;
                    border-radius: 10px;
                }

                .range-btn {
                    padding: 0.5rem 1rem;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.6);
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.2s ease;
                }

                .range-btn.active {
                    background: #6366f1;
                    color: #fff;
                }

                /* Quick Stats */
                .quick-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .quick-stat {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                }

                .qs-icon {
                    font-size: 1.5rem;
                }

                .qs-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .qs-value {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #fff;
                }

                .qs-label {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Progress Ring */
                .progress-ring {
                    position: relative;
                }

                .ring-value {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: #fff;
                }

                /* Charts Grid */
                .charts-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1rem;
                }

                .chart-card {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    padding: 1.25rem;
                }

                .chart-card.wide {
                    grid-column: span 2;
                }

                @media (max-width: 900px) {
                    .chart-card.wide {
                        grid-column: span 1;
                    }
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .card-header h3 {
                    margin: 0;
                    font-size: 0.95rem;
                    color: #fff;
                    font-weight: 600;
                }

                .badge {
                    font-size: 0.7rem;
                    padding: 0.25rem 0.5rem;
                    background: rgba(99, 102, 241, 0.2);
                    color: #a5b4fc;
                    border-radius: 6px;
                }

                .badge.success {
                    background: rgba(16, 185, 129, 0.2);
                    color: #6ee7b7;
                }

                /* Bar Chart */
                .bar-chart {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    height: 150px;
                    gap: 0.5rem;
                }

                .bar-wrapper {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                }

                .bar {
                    width: 100%;
                    max-width: 30px;
                    border-radius: 4px 4px 0 0;
                    transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    display: flex;
                    justify-content: center;
                }

                .bar-value {
                    position: absolute;
                    top: -20px;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.7);
                }

                .bar-label {
                    margin-top: 0.5rem;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Pie Chart */
                .pie-chart-container {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .pie-chart {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    position: relative;
                }

                .pie-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 60%;
                    height: 60%;
                    background: rgba(20, 20, 35, 1);
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .pie-total {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                }

                .pie-label {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .pie-legend {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                }

                .legend-color {
                    width: 10px;
                    height: 10px;
                    border-radius: 2px;
                }

                .legend-name {
                    flex: 1;
                    color: rgba(255, 255, 255, 0.7);
                }

                .legend-value {
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Area Chart */
                .area-chart {
                    height: 120px;
                }

                .area-chart svg {
                    width: 100%;
                    height: 100px;
                }

                .area-chart path,
                .area-chart circle {
                    opacity: 0;
                    transition: opacity 0.8s ease;
                }

                .area-chart path.visible,
                .area-chart circle.visible {
                    opacity: 1;
                }

                .area-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-top: 0.25rem;
                }

                /* Best Hours */
                .best-hours {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .hour-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .hour-time {
                    width: 100px;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.7);
                }

                .hour-bar {
                    height: 8px;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border-radius: 4px;
                    transition: width 0.8s ease;
                }

                .hour-item.best .hour-bar {
                    background: linear-gradient(90deg, #10b981, #22d3ee);
                }

                .hour-label {
                    font-size: 0.7rem;
                    color: #10b981;
                    background: rgba(16, 185, 129, 0.2);
                    padding: 0.15rem 0.4rem;
                    border-radius: 4px;
                }

                /* Responsive */
                @media (max-width: 600px) {
                    .quick-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .charts-grid {
                        grid-template-columns: 1fr;
                    }

                    .pie-chart-container {
                        flex-direction: column;
                    }
                }
            `})]})};function Dx(){const[e,r]=p.useState("focus"),[n,a]=p.useState(25*60),[i,s]=p.useState(!1),[o,c]=p.useState(0),[l,m]=p.useState(0),h={focus:{duration:25*60,label:"🎯 Focus",color:"#ef4444"},shortBreak:{duration:5*60,label:"☕ Short Break",color:"#10b981"},longBreak:{duration:15*60,label:"🌴 Long Break",color:"#3b82f6"}};p.useEffect(()=>{let u=null;return i&&n>0?u=setInterval(()=>{a(f=>f-1),e==="focus"&&m(f=>f+1)},1e3):n===0&&(x(),e==="focus"?(c(f=>f+1),(o+1)%4===0?g("longBreak"):g("shortBreak")):g("focus")),()=>clearInterval(u)},[i,n,e,o]);const x=()=>{try{const u=new(window.AudioContext||window.webkitAudioContext),f=u.createOscillator(),j=u.createGain();f.connect(j),j.connect(u.destination),f.frequency.value=800,f.type="sine",j.gain.setValueAtTime(.3,u.currentTime),f.start(),f.stop(u.currentTime+.3)}catch{console.log("Audio not supported")}},g=u=>{r(u),a(h[u].duration),s(!1)},E=()=>{s(u=>!u)},w=()=>{s(!1),a(h[e].duration)},v=u=>{const f=Math.floor(u/60),j=u%60;return`${f.toString().padStart(2,"0")}:${j.toString().padStart(2,"0")}`},N=u=>{const f=Math.floor(u/3600),j=Math.floor(u%3600/60);return f>0?`${f}h ${j}m`:`${j}m`},d=(h[e].duration-n)/h[e].duration*100;return t.jsxs("div",{className:"pomodoro-timer",children:[t.jsxs("div",{className:"timer-header",children:[t.jsx("h2",{children:"⏱️ Pomodoro Timer"}),t.jsx("p",{className:"timer-desc",children:"Teknik fokus 25 menit + istirahat"})]}),t.jsx("div",{className:"mode-selector",children:Object.entries(h).map(([u,f])=>t.jsx("button",{className:`mode-btn ${e===u?"active":""}`,onClick:()=>g(u),style:{"--mode-color":f.color},children:f.label},u))}),t.jsxs("div",{className:"timer-display",style:{"--timer-color":h[e].color},children:[t.jsxs("svg",{className:"progress-ring",viewBox:"0 0 200 200",children:[t.jsx("circle",{className:"progress-ring-bg",cx:"100",cy:"100",r:"90",fill:"none",strokeWidth:"8"}),t.jsx("circle",{className:"progress-ring-fill",cx:"100",cy:"100",r:"90",fill:"none",strokeWidth:"8",strokeDasharray:565.48,strokeDashoffset:565.48-565.48*d/100,style:{stroke:h[e].color}})]}),t.jsx("div",{className:"timer-time",children:v(n)}),t.jsx("div",{className:"timer-mode-label",children:h[e].label})]}),t.jsxs("div",{className:"timer-controls",children:[t.jsx("button",{className:"control-btn reset",onClick:w,title:"Reset",children:"🔄"}),t.jsx("button",{className:`control-btn main ${i?"pause":"play"}`,onClick:E,style:{"--btn-color":h[e].color},children:i?"⏸️":"▶️"}),t.jsx("button",{className:"control-btn skip",onClick:()=>{g(e==="focus"?"shortBreak":"focus")},title:"Skip",children:"⏭️"})]}),t.jsxs("div",{className:"timer-stats",children:[t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Sessions Today"}),t.jsxs("span",{className:"stat-value",children:[o," 🍅"]})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Total Focus"}),t.jsx("span",{className:"stat-value",children:N(l)})]})]}),t.jsx("div",{className:"session-indicators",children:[1,2,3,4].map(u=>t.jsx("div",{className:`session-dot ${o%4>=u?"completed":""}`,title:`Session ${u}`,children:"🍅"},u))}),t.jsx("style",{children:`
                .pomodoro-timer {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 2rem;
                    background: rgba(15, 15, 30, 0.8);
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                }

                .timer-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                }

                .timer-desc {
                    color: var(--text-muted);
                    font-size: 0.85rem;
                    margin-top: 0.5rem;
                }

                .mode-selector {
                    display: flex;
                    gap: 0.5rem;
                    margin: 1.5rem 0;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.4rem;
                    border-radius: 12px;
                }

                .mode-btn {
                    flex: 1;
                    padding: 0.75rem 0.5rem;
                    background: transparent;
                    border: none;
                    border-radius: 8px;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .mode-btn:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                .mode-btn.active {
                    background: var(--mode-color);
                    color: white;
                    font-weight: 600;
                }

                .timer-display {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    margin: 2rem auto;
                }

                .progress-ring {
                    position: absolute;
                    transform: rotate(-90deg);
                }

                .progress-ring-bg {
                    stroke: rgba(255, 255, 255, 0.1);
                }

                .progress-ring-fill {
                    transition: stroke-dashoffset 0.3s ease;
                    stroke-linecap: round;
                }

                .timer-time {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 3rem;
                    font-weight: 700;
                    font-family: monospace;
                    color: var(--timer-color);
                }

                .timer-mode-label {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .timer-controls {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin: 1.5rem 0;
                }

                .control-btn {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255, 255, 255, 0.1);
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .control-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.1);
                }

                .control-btn.main {
                    width: 70px;
                    height: 70px;
                    background: var(--btn-color);
                    font-size: 2rem;
                }

                .control-btn.main:hover {
                    filter: brightness(1.2);
                }

                .timer-stats {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin: 1.5rem 0;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                }

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .stat-value {
                    font-size: 1.25rem;
                    font-weight: 600;
                }

                .session-indicators {
                    display: flex;
                    justify-content: center;
                    gap: 0.75rem;
                }

                .session-dot {
                    font-size: 1.5rem;
                    opacity: 0.3;
                    transition: all 0.3s;
                }

                .session-dot.completed {
                    opacity: 1;
                    transform: scale(1.1);
                }
            `})]})}function Ax(){const e=p.useRef(null),[r,n]=p.useState("idle"),[a,i]=p.useState(0),[s,o]=p.useState(()=>parseInt(localStorage.getItem("snakeHighScore")||"0")),[c,l]=p.useState("normal"),m={slow:150,normal:100,fast:60},h=20,x=400,g=p.useRef({snake:[{x:10,y:10}],food:{x:15,y:15},direction:{x:1,y:0},nextDirection:{x:1,y:0}}),E=p.useCallback(()=>{g.current={snake:[{x:10,y:10}],food:w([{x:10,y:10}]),direction:{x:1,y:0},nextDirection:{x:1,y:0}},i(0),n("playing")},[]),w=N=>{let d;do d={x:Math.floor(Math.random()*h),y:Math.floor(Math.random()*h)};while(N.some(u=>u.x===d.x&&u.y===d.y));return d},v=p.useCallback(()=>{if(r!=="playing")return;const N=g.current;N.direction=N.nextDirection;const d={x:(N.snake[0].x+N.direction.x+h)%h,y:(N.snake[0].y+N.direction.y+h)%h};if(N.snake.some(y=>y.x===d.x&&y.y===d.y)){n("gameOver"),a>s&&(o(a),localStorage.setItem("snakeHighScore",a.toString()));return}const u=[d,...N.snake];d.x===N.food.x&&d.y===N.food.y?(i(y=>y+10),N.food=w(u)):u.pop(),N.snake=u;const f=e.current;if(!f)return;const j=f.getContext("2d"),b=x/h;j.fillStyle="#0f0f1e",j.fillRect(0,0,x,x),j.strokeStyle="rgba(99, 102, 241, 0.1)";for(let y=0;y<=h;y++)j.beginPath(),j.moveTo(y*b,0),j.lineTo(y*b,x),j.stroke(),j.beginPath(),j.moveTo(0,y*b),j.lineTo(x,y*b),j.stroke();j.fillStyle="#ef4444",j.beginPath(),j.arc(N.food.x*b+b/2,N.food.y*b+b/2,b/2-2,0,Math.PI*2),j.fill(),N.snake.forEach((y,I)=>{const O=j.createLinearGradient(y.x*b,y.y*b,y.x*b+b,y.y*b+b);O.addColorStop(0,I===0?"#10b981":"#22d3ee"),O.addColorStop(1,I===0?"#059669":"#0891b2"),j.fillStyle=O,j.fillRect(y.x*b+1,y.y*b+1,b-2,b-2),I===0&&(j.fillStyle="white",j.beginPath(),j.arc(y.x*b+b*.3,y.y*b+b*.35,3,0,Math.PI*2),j.fill(),j.beginPath(),j.arc(y.x*b+b*.7,y.y*b+b*.35,3,0,Math.PI*2),j.fill())})},[r,a,s]);return p.useEffect(()=>{if(r!=="playing")return;const N=setInterval(v,m[c]);return()=>clearInterval(N)},[r,v,c]),p.useEffect(()=>{const N=d=>{if(r!=="playing")return;const u=g.current;switch(d.key){case"ArrowUp":case"w":u.direction.y!==1&&(u.nextDirection={x:0,y:-1});break;case"ArrowDown":case"s":u.direction.y!==-1&&(u.nextDirection={x:0,y:1});break;case"ArrowLeft":case"a":u.direction.x!==1&&(u.nextDirection={x:-1,y:0});break;case"ArrowRight":case"d":u.direction.x!==-1&&(u.nextDirection={x:1,y:0});break;case" ":n(f=>f==="playing"?"paused":"playing");break}};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[r]),p.useEffect(()=>{const N=e.current;if(!N)return;const d=N.getContext("2d");d.fillStyle="#0f0f1e",d.fillRect(0,0,x,x)},[]),t.jsxs("div",{className:"snake-game",children:[t.jsx("div",{className:"game-header",children:t.jsxs("div",{className:"score-display",children:[t.jsxs("div",{className:"score-item",children:[t.jsx("span",{className:"score-label",children:"Score"}),t.jsx("span",{className:"score-value",children:a})]}),t.jsxs("div",{className:"score-item",children:[t.jsx("span",{className:"score-label",children:"High Score"}),t.jsx("span",{className:"score-value high",children:s})]})]})}),t.jsxs("div",{className:"game-container",children:[t.jsx("canvas",{ref:e,width:x,height:x,className:"game-canvas"}),r==="idle"&&t.jsxs("div",{className:"game-overlay",children:[t.jsx("h3",{children:"🐍 Snake Game"}),t.jsx("p",{children:"Gunakan Arrow Keys atau WASD untuk bergerak"}),t.jsxs("div",{className:"speed-selector",children:[t.jsx("span",{children:"Speed:"}),["slow","normal","fast"].map(N=>t.jsx("button",{className:`speed-btn ${c===N?"active":""}`,onClick:()=>l(N),children:N},N))]}),t.jsx("button",{className:"start-btn",onClick:E,children:"▶️ Start Game"})]}),r==="paused"&&t.jsxs("div",{className:"game-overlay",children:[t.jsx("h3",{children:"⏸️ Paused"}),t.jsx("button",{className:"start-btn",onClick:()=>n("playing"),children:"▶️ Resume"})]}),r==="gameOver"&&t.jsxs("div",{className:"game-overlay gameover",children:[t.jsx("h3",{children:"💀 Game Over!"}),t.jsxs("p",{children:["Score: ",a]}),a>=s&&a>0&&t.jsx("p",{className:"new-high",children:"🎉 New High Score!"}),t.jsx("button",{className:"start-btn",onClick:E,children:"🔄 Play Again"})]})]}),t.jsx("div",{className:"game-controls",children:t.jsx("p",{children:"⬆️⬇️⬅️➡️ atau WASD untuk bergerak | SPACE untuk pause"})}),t.jsx("style",{children:`
                .snake-game {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.5rem;
                }

                .game-header {
                    width: 100%;
                    max-width: 400px;
                    margin-bottom: 1rem;
                }

                .score-display {
                    display: flex;
                    justify-content: space-around;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    padding: 1rem;
                }

                .score-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .score-label {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .score-value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #22d3ee;
                }

                .score-value.high {
                    color: #f59e0b;
                }

                .game-container {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                }

                .game-canvas {
                    display: block;
                    border: 2px solid rgba(99, 102, 241, 0.3);
                    border-radius: 12px;
                }

                .game-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 15, 30, 0.95);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    text-align: center;
                    padding: 2rem;
                }

                .game-overlay h3 {
                    font-size: 1.75rem;
                    margin: 0;
                }

                .game-overlay p {
                    color: var(--text-secondary);
                    margin: 0;
                }

                .game-overlay.gameover h3 {
                    color: #ef4444;
                }

                .new-high {
                    color: #f59e0b !important;
                    font-weight: 600;
                }

                .speed-selector {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin: 0.5rem 0;
                }

                .speed-btn {
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    border-radius: 8px;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.2s;
                    text-transform: capitalize;
                }

                .speed-btn.active {
                    background: #6366f1;
                    color: white;
                }

                .start-btn {
                    margin-top: 1rem;
                    padding: 1rem 2rem;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .start-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 5px 20px rgba(16, 185, 129, 0.4);
                }

                .game-controls {
                    margin-top: 1rem;
                    color: var(--text-muted);
                    font-size: 0.8rem;
                }
            `})]})}function Bx(){const[e,r]=p.useState(null),[n,a]=p.useState(!0),[i,s]=p.useState(null),[o,c]=p.useState("Jakarta"),[l,m]=p.useState(""),h=async w=>{a(!0),s(null);try{const v=await fetch(`https://wttr.in/${encodeURIComponent(w)}?format=j1`);if(!v.ok)throw new Error("City not found");const N=await v.json(),d=N.current_condition[0],u=N.nearest_area[0];r({city:u.areaName[0].value,country:u.country[0].value,temp:d.temp_C,feelsLike:d.FeelsLikeC,humidity:d.humidity,windSpeed:d.windspeedKmph,description:d.weatherDesc[0].value,icon:x(d.weatherDesc[0].value),visibility:d.visibility,uvIndex:d.uvIndex,pressure:d.pressure,forecast:N.weather.slice(0,3).map(f=>{var j,b;return{date:f.date,maxTemp:f.maxtempC,minTemp:f.mintempC,description:((b=(j=f.hourly[4])==null?void 0:j.weatherDesc[0])==null?void 0:b.value)||"Clear"}})})}catch(v){s("Tidak dapat memuat data cuaca. Coba lagi."),console.error("Weather fetch error:",v)}finally{a(!1)}},x=w=>{const v=w.toLowerCase();return v.includes("clear")||v.includes("sunny")?"☀️":v.includes("cloud")||v.includes("overcast")?"☁️":v.includes("rain")||v.includes("shower")?"🌧️":v.includes("thunder")?"⛈️":v.includes("snow")?"❄️":v.includes("fog")||v.includes("mist")||v.includes("haze")?"🌫️":v.includes("partly")?"⛅":"🌤️"};p.useEffect(()=>{h(o)},[o]);const g=w=>{w.preventDefault(),l.trim()&&(c(l.trim()),m(""))},E=w=>new Date(w).toLocaleDateString("id-ID",{weekday:"short",day:"numeric"});return t.jsxs("div",{className:"weather-widget",children:[t.jsxs("div",{className:"weather-header",children:[t.jsx("h2",{children:"🌤️ Weather Widget"}),t.jsxs("form",{onSubmit:g,className:"search-form",children:[t.jsx("input",{type:"text",value:l,onChange:w=>m(w.target.value),placeholder:"Search city...",className:"search-input"}),t.jsx("button",{type:"submit",className:"search-btn",children:"🔍"})]})]}),n?t.jsxs("div",{className:"weather-loading",children:[t.jsx("div",{className:"loading-spinner"}),t.jsx("p",{children:"Loading weather data..."})]}):i?t.jsxs("div",{className:"weather-error",children:[t.jsxs("p",{children:["❌ ",i]}),t.jsx("button",{onClick:()=>h(o),className:"retry-btn",children:"🔄 Retry"})]}):e&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"current-weather",children:[t.jsxs("div",{className:"weather-main",children:[t.jsx("span",{className:"weather-icon",children:e.icon}),t.jsxs("div",{className:"temp-container",children:[t.jsxs("span",{className:"temperature",children:[e.temp,"°C"]}),t.jsxs("span",{className:"feels-like",children:["Feels like ",e.feelsLike,"°C"]})]})]}),t.jsxs("div",{className:"weather-info",children:[t.jsx("h3",{children:e.city}),t.jsx("p",{className:"country",children:e.country}),t.jsx("p",{className:"description",children:e.description})]})]}),t.jsxs("div",{className:"weather-details",children:[t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-icon",children:"💧"}),t.jsxs("div",{className:"detail-text",children:[t.jsx("span",{className:"detail-label",children:"Humidity"}),t.jsxs("span",{className:"detail-value",children:[e.humidity,"%"]})]})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-icon",children:"💨"}),t.jsxs("div",{className:"detail-text",children:[t.jsx("span",{className:"detail-label",children:"Wind"}),t.jsxs("span",{className:"detail-value",children:[e.windSpeed," km/h"]})]})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-icon",children:"👁️"}),t.jsxs("div",{className:"detail-text",children:[t.jsx("span",{className:"detail-label",children:"Visibility"}),t.jsxs("span",{className:"detail-value",children:[e.visibility," km"]})]})]}),t.jsxs("div",{className:"detail-item",children:[t.jsx("span",{className:"detail-icon",children:"☀️"}),t.jsxs("div",{className:"detail-text",children:[t.jsx("span",{className:"detail-label",children:"UV Index"}),t.jsx("span",{className:"detail-value",children:e.uvIndex})]})]})]}),t.jsxs("div",{className:"forecast",children:[t.jsx("h4",{children:"3-Day Forecast"}),t.jsx("div",{className:"forecast-cards",children:e.forecast.map((w,v)=>t.jsxs("div",{className:"forecast-card",children:[t.jsx("span",{className:"forecast-date",children:E(w.date)}),t.jsx("span",{className:"forecast-icon",children:x(w.description)}),t.jsxs("div",{className:"forecast-temps",children:[t.jsxs("span",{className:"max",children:[w.maxTemp,"°"]}),t.jsxs("span",{className:"min",children:[w.minTemp,"°"]})]})]},v))})]})]}),t.jsx("style",{children:`
                .weather-widget {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 1.5rem;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .weather-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .weather-header h2 {
                    margin: 0;
                    font-size: 1.25rem;
                }

                .search-form {
                    display: flex;
                    gap: 0.5rem;
                }

                .search-input {
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    width: 150px;
                }

                .search-input::placeholder {
                    color: var(--text-muted);
                }

                .search-btn {
                    padding: 0.5rem 0.75rem;
                    background: #6366f1;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .weather-loading, .weather-error {
                    text-align: center;
                    padding: 3rem;
                    color: var(--text-secondary);
                }

                .loading-spinner {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(255, 255, 255, 0.1);
                    border-top-color: #6366f1;
                    border-radius: 50%;
                    margin: 0 auto 1rem;
                    animation: spin 1s linear infinite;
                }

                .retry-btn {
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: #6366f1;
                    border: none;
                    border-radius: 8px;
                    color: white;
                    cursor: pointer;
                }

                .current-weather {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .weather-main {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .weather-icon {
                    font-size: 4rem;
                }

                .temp-container {
                    display: flex;
                    flex-direction: column;
                }

                .temperature {
                    font-size: 2.5rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .feels-like {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .weather-info h3 {
                    margin: 0;
                    font-size: 1.25rem;
                }

                .weather-info .country {
                    margin: 0.25rem 0;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }

                .weather-info .description {
                    margin: 0;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    text-transform: capitalize;
                }

                .weather-details {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                    margin-bottom: 1.5rem;
                }

                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .detail-icon {
                    font-size: 1.25rem;
                }

                .detail-text {
                    display: flex;
                    flex-direction: column;
                }

                .detail-label {
                    font-size: 0.7rem;
                    color: var(--text-muted);
                }

                .detail-value {
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .forecast h4 {
                    margin: 0 0 1rem;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }

                .forecast-cards {
                    display: flex;
                    gap: 0.75rem;
                }

                .forecast-card {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    transition: all 0.2s;
                }

                .forecast-card:hover {
                    background: rgba(255, 255, 255, 0.08);
                }

                .forecast-date {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .forecast-icon {
                    font-size: 1.75rem;
                }

                .forecast-temps {
                    display: flex;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                }

                .forecast-temps .max {
                    font-weight: 600;
                }

                .forecast-temps .min {
                    color: var(--text-muted);
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 480px) {
                    .current-weather {
                        flex-direction: column;
                        text-align: center;
                    }

                    .weather-details {
                        grid-template-columns: 1fr 1fr;
                    }
                }
            `})]})}function Ix({compact:e=!1}){const{language:r,setLanguage:n,currentLanguage:a}=Nr(),[i,s]=p.useState(!1),[o,c]=p.useState(""),l=p.useRef(null);p.useEffect(()=>{const x=g=>{l.current&&!l.current.contains(g.target)&&s(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const m=Xn.filter(x=>x.name.toLowerCase().includes(o.toLowerCase())||x.native.toLowerCase().includes(o.toLowerCase())||x.code.toLowerCase().includes(o.toLowerCase())),h=x=>{n(x),s(!1),c("")};return t.jsxs("div",{className:`language-selector ${e?"compact":""}`,ref:l,children:[t.jsxs("button",{className:"lang-trigger",onClick:()=>s(!i),title:"Change Language",children:[t.jsx("span",{className:"current-flag",children:a.flag}),!e&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"current-name",children:a.native}),t.jsx("span",{className:"dropdown-arrow",children:i?"▲":"▼"})]})]}),i&&t.jsxs("div",{className:"lang-dropdown",children:[t.jsx("div",{className:"search-box",children:t.jsx("input",{type:"text",placeholder:"Search language...",value:o,onChange:x=>c(x.target.value),autoFocus:!0})}),t.jsxs("div",{className:"lang-list",children:[m.map(x=>t.jsxs("button",{className:`lang-option ${r===x.code?"active":""}`,onClick:()=>h(x.code),children:[t.jsx("span",{className:"lang-flag",children:x.flag}),t.jsxs("div",{className:"lang-info",children:[t.jsx("span",{className:"lang-native",children:x.native}),t.jsx("span",{className:"lang-english",children:x.name})]}),r===x.code&&t.jsx("span",{className:"check-mark",children:"✓"})]},x.code)),m.length===0&&t.jsx("div",{className:"no-results",children:"No languages found"})]})]}),t.jsx("style",{children:`
                .language-selector {
                    position: relative;
                    z-index: 1000;
                }

                .lang-trigger {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 0.9rem;
                }

                .language-selector.compact .lang-trigger {
                    padding: 0.5rem;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    justify-content: center;
                }

                .lang-trigger:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .current-flag {
                    font-size: 1.25rem;
                }

                .current-name {
                    font-weight: 500;
                }

                .dropdown-arrow {
                    font-size: 0.6rem;
                    color: var(--text-muted);
                    margin-left: 0.25rem;
                }

                .lang-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    width: 280px;
                    max-height: 400px;
                    background: rgba(15, 15, 30, 0.98);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                    overflow: hidden;
                    animation: slideDown 0.2s ease;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .search-box {
                    padding: 0.75rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .search-box input {
                    width: 100%;
                    padding: 0.625rem 0.875rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }

                .search-box input::placeholder {
                    color: var(--text-muted);
                }

                .search-box input:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .lang-list {
                    max-height: 320px;
                    overflow-y: auto;
                    padding: 0.5rem;
                }

                .lang-list::-webkit-scrollbar {
                    width: 4px;
                }

                .lang-list::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                }

                .lang-option {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.75rem;
                    background: transparent;
                    border: none;
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.15s;
                }

                .lang-option:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                .lang-option.active {
                    background: rgba(99, 102, 241, 0.15);
                }

                .lang-flag {
                    font-size: 1.5rem;
                    line-height: 1;
                }

                .lang-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .lang-native {
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                .lang-english {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .check-mark {
                    color: #10b981;
                    font-weight: bold;
                }

                .no-results {
                    padding: 1rem;
                    text-align: center;
                    color: var(--text-muted);
                    font-size: 0.875rem;
                }

                @media (max-width: 480px) {
                    .lang-dropdown {
                        width: calc(100vw - 40px);
                        max-width: 300px;
                    }
                }
            `})]})}const dn={I:{shape:[[1,1,1,1]],color:"#00f5ff"},O:{shape:[[1,1],[1,1]],color:"#ffd700"},T:{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},S:{shape:[[0,1,1],[1,1,0]],color:"#22c55e"},Z:{shape:[[1,1,0],[0,1,1]],color:"#ef4444"},J:{shape:[[1,0,0],[1,1,1]],color:"#3b82f6"},L:{shape:[[0,0,1],[1,1,1]],color:"#f97316"}},$t=10,Hr=20,Ds=28,gd=()=>Array.from({length:Hr},()=>Array($t).fill(null)),Ya=()=>{const e=Object.keys(dn),r=e[Math.floor(Math.random()*e.length)];return{type:r,shape:dn[r].shape,color:dn[r].color,x:Math.floor($t/2)-1,y:0}},Rx=()=>{const{t:e}=Nr(),[r,n]=p.useState(gd()),[a,i]=p.useState(null),[s,o]=p.useState(null),[c,l]=p.useState(null),[m,h]=p.useState(!0),[x,g]=p.useState(0),[E,w]=p.useState(1),[v,N]=p.useState(0),[d,u]=p.useState(!1),[f,j]=p.useState(!1),[b,y]=p.useState(!1),[I,O]=p.useState(()=>{const B=localStorage.getItem("tetris_highscore");return B?parseInt(B):0}),R=p.useRef(null),W=p.useRef(null),q=B=>{const F=B.shape[0].map((k,H)=>B.shape.map(U=>U[H]).reverse());return{...B,shape:F}},J=p.useCallback((B,F,k=0,H=0)=>{for(let U=0;U<B.shape.length;U++)for(let Y=0;Y<B.shape[U].length;Y++)if(B.shape[U][Y]){const ae=B.x+Y+k,ne=B.y+U+H;if(ae<0||ae>=$t||ne>=Hr||ne>=0&&F[ne][ae])return!0}return!1},[]),_=p.useCallback((B,F)=>{const k=F.map(H=>[...H]);for(let H=0;H<B.shape.length;H++)for(let U=0;U<B.shape[H].length;U++)if(B.shape[H][U]){const Y=B.y+H,ae=B.x+U;Y>=0&&Y<Hr&&ae>=0&&ae<$t&&(k[Y][ae]=B.color)}return k},[]),$=p.useCallback(B=>{let F=0;const k=B.filter(H=>{const U=H.every(Y=>Y!==null);return U&&F++,!U});for(;k.length<Hr;)k.unshift(Array($t).fill(null));return{newBoard:k,clearedLines:F}},[]),T=(B,F)=>[0,100,300,500,800][B]*F,C=p.useCallback((B,F)=>{if(!(!a||d||f)){if(!J(a,r,B,F))i(k=>({...k,x:k.x+B,y:k.y+F}));else if(F>0){const k=_(a,r),{newBoard:H,clearedLines:U}=$(k);n(H),N(Y=>Y+U),g(Y=>{const ae=Y+T(U,E);return ae>I&&(O(ae),localStorage.setItem("tetris_highscore",ae.toString())),ae}),Math.floor((v+U)/10)>Math.floor(v/10)&&w(Y=>Math.min(Y+1,20)),s&&J(s,H)?(u(!0),y(!1)):(i(s),o(Ya()),h(!0))}}},[a,r,d,f,J,_,$,E,v,I,s]),A=p.useCallback(()=>{if(!a||d||f)return;const B=q(a),F=[0,1,-1,2,-2];for(const k of F)if(!J({...B,x:B.x+k},r)){i({...B,x:B.x+k});break}},[a,d,f,J,r]),P=p.useCallback(()=>{if(!a||d||f)return;let B=0;for(;!J(a,r,0,B+1);)B++;i(F=>({...F,y:F.y+B})),g(F=>F+B*2)},[a,d,f,J,r]),L=p.useCallback(()=>{if(!(!a||!m||d||f)){if(c){const B={...c,x:Math.floor($t/2)-1,y:0};l({type:a.type,shape:dn[a.type].shape,color:a.color}),i(B)}else l({type:a.type,shape:dn[a.type].shape,color:a.color}),i(s),o(Ya());h(!1)}},[a,c,m,d,f,s]);p.useEffect(()=>{const B=F=>{if(b)switch(F.key){case"ArrowLeft":F.preventDefault(),C(-1,0);break;case"ArrowRight":F.preventDefault(),C(1,0);break;case"ArrowDown":F.preventDefault(),C(0,1);break;case"ArrowUp":F.preventDefault(),A();break;case" ":F.preventDefault(),P();break;case"c":case"C":F.preventDefault(),L();break;case"p":case"P":F.preventDefault(),j(k=>!k);break}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[b,C,A,P,L]),p.useEffect(()=>{if(!b||f||d){R.current&&clearInterval(R.current);return}const B=Math.max(100,1e3-(E-1)*50);return R.current=setInterval(()=>{C(0,1)},B),()=>{R.current&&clearInterval(R.current)}},[b,f,d,E,C]);const z=()=>{var B;n(gd()),i(Ya()),o(Ya()),l(null),h(!0),g(0),w(1),N(0),u(!1),j(!1),y(!0),(B=W.current)==null||B.focus()},V=(B,F=20)=>{var H;if(!B)return null;const k=B.shape||((H=dn[B.type])==null?void 0:H.shape);return k?t.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${k[0].length}, ${F}px)`,gap:"1px"},children:k.map((U,Y)=>U.map((ae,ne)=>t.jsx("div",{style:{width:F,height:F,background:ae?B.color:"transparent",borderRadius:"2px",boxShadow:ae?`0 0 5px ${B.color}`:"none"}},`${Y}-${ne}`)))}):null},D=()=>{const B=r.map(F=>[...F]);if(a){let F=0;for(;!J(a,r,0,F+1);)F++;for(let k=0;k<a.shape.length;k++)for(let H=0;H<a.shape[k].length;H++)if(a.shape[k][H]){const U=a.y+k+F,Y=a.x+H;U>=0&&U<Hr&&Y>=0&&Y<$t&&(B[U][Y]||(B[U][Y]=`${a.color}33`))}for(let k=0;k<a.shape.length;k++)for(let H=0;H<a.shape[k].length;H++)if(a.shape[k][H]){const U=a.y+k,Y=a.x+H;U>=0&&U<Hr&&Y>=0&&Y<$t&&(B[U][Y]=a.color)}}return B};return t.jsxs("div",{style:oe.container,children:[t.jsxs("div",{style:oe.header,children:[t.jsx("h2",{style:oe.title,children:"🎮 TETRIS"}),t.jsx("p",{style:oe.subtitle,children:"Classic Block Puzzle Game"})]}),t.jsxs("div",{style:oe.gameWrapper,children:[t.jsxs("div",{style:oe.sidePanel,children:[t.jsxs("div",{style:oe.previewBox,children:[t.jsx("span",{style:oe.previewLabel,children:"HOLD"}),t.jsx("div",{style:oe.previewContent,children:c?V(c):t.jsx("span",{style:oe.emptyText,children:"Press C"})})]}),t.jsxs("div",{style:oe.statsBox,children:[t.jsxs("div",{style:oe.stat,children:[t.jsx("span",{style:oe.statLabel,children:"SCORE"}),t.jsx("span",{style:oe.statValue,children:x.toLocaleString()})]}),t.jsxs("div",{style:oe.stat,children:[t.jsx("span",{style:oe.statLabel,children:"LEVEL"}),t.jsx("span",{style:oe.statValue,children:E})]}),t.jsxs("div",{style:oe.stat,children:[t.jsx("span",{style:oe.statLabel,children:"LINES"}),t.jsx("span",{style:oe.statValue,children:v})]}),t.jsxs("div",{style:oe.stat,children:[t.jsx("span",{style:oe.statLabel,children:"HIGH"}),t.jsx("span",{style:oe.statValueHigh,children:I.toLocaleString()})]})]})]}),t.jsxs("div",{ref:W,tabIndex:0,style:oe.boardContainer,children:[t.jsx("div",{style:oe.board,children:D().map((B,F)=>B.map((k,H)=>t.jsx("div",{style:{...oe.cell,background:k||"rgba(255,255,255,0.02)",boxShadow:k&&!k.includes("33")?`0 0 8px ${k}, inset 0 0 3px rgba(255,255,255,0.3)`:"none",border:k&&!k.includes("33")?`1px solid ${k}88`:"1px solid rgba(255,255,255,0.05)"}},`${F}-${H}`)))}),!b&&!d&&t.jsxs("div",{style:oe.overlay,children:[t.jsx("button",{onClick:z,style:oe.startButton,children:"▶ START GAME"}),t.jsxs("div",{style:oe.controls,children:[t.jsx("p",{children:"← → : Move"}),t.jsx("p",{children:"↑ : Rotate"}),t.jsx("p",{children:"↓ : Soft Drop"}),t.jsx("p",{children:"Space : Hard Drop"}),t.jsx("p",{children:"C : Hold"}),t.jsx("p",{children:"P : Pause"})]})]}),f&&t.jsxs("div",{style:oe.overlay,children:[t.jsx("h2",{style:oe.pauseText,children:"⏸ PAUSED"}),t.jsx("button",{onClick:()=>j(!1),style:oe.resumeButton,children:"RESUME"})]}),d&&t.jsxs("div",{style:oe.overlay,children:[t.jsx("h2",{style:oe.gameOverText,children:"GAME OVER"}),t.jsxs("p",{style:oe.finalScore,children:["Score: ",x.toLocaleString()]}),x>=I&&x>0&&t.jsx("p",{style:oe.newHighScore,children:"🏆 NEW HIGH SCORE!"}),t.jsx("button",{onClick:z,style:oe.restartButton,children:"🔄 PLAY AGAIN"})]})]}),t.jsxs("div",{style:oe.sidePanel,children:[t.jsxs("div",{style:oe.previewBox,children:[t.jsx("span",{style:oe.previewLabel,children:"NEXT"}),t.jsx("div",{style:oe.previewContent,children:s?V(s):null})]}),t.jsxs("div",{style:oe.mobileControls,children:[t.jsx("button",{onClick:()=>A(),style:oe.mobileBtn,children:"↻"}),t.jsxs("div",{style:oe.mobileRow,children:[t.jsx("button",{onClick:()=>C(-1,0),style:oe.mobileBtn,children:"←"}),t.jsx("button",{onClick:()=>P(),style:oe.mobileBtnDrop,children:"⬇"}),t.jsx("button",{onClick:()=>C(1,0),style:oe.mobileBtn,children:"→"})]}),t.jsx("button",{onClick:()=>C(0,1),style:oe.mobileBtn,children:"↓"})]})]})]})]})},oe={container:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",borderRadius:"20px",padding:"25px",border:"1px solid rgba(99, 102, 241, 0.3)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",maxWidth:"700px",margin:"0 auto"},header:{textAlign:"center",marginBottom:"20px"},title:{fontSize:"28px",fontWeight:"700",background:"linear-gradient(135deg, #00f5ff, #a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"5px"},subtitle:{color:"#94a3b8",fontSize:"14px"},gameWrapper:{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:"20px",flexWrap:"wrap"},sidePanel:{display:"flex",flexDirection:"column",gap:"15px",minWidth:"100px"},previewBox:{background:"rgba(0, 0, 0, 0.4)",borderRadius:"12px",padding:"15px",border:"1px solid rgba(99, 102, 241, 0.2)",textAlign:"center"},previewLabel:{fontSize:"12px",fontWeight:"600",color:"#00f5ff",letterSpacing:"2px",display:"block",marginBottom:"10px"},previewContent:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60px"},emptyText:{color:"#64748b",fontSize:"12px"},statsBox:{background:"rgba(0, 0, 0, 0.4)",borderRadius:"12px",padding:"15px",border:"1px solid rgba(99, 102, 241, 0.2)"},stat:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"12px"},statLabel:{fontSize:"10px",color:"#94a3b8",letterSpacing:"1px"},statValue:{fontSize:"20px",fontWeight:"700",color:"#fff",fontFamily:"monospace"},statValueHigh:{fontSize:"18px",fontWeight:"700",color:"#ffd700",fontFamily:"monospace"},boardContainer:{position:"relative",outline:"none"},board:{display:"grid",gridTemplateColumns:`repeat(${$t}, ${Ds}px)`,gap:"1px",background:"rgba(0, 0, 0, 0.6)",padding:"10px",borderRadius:"12px",border:"2px solid rgba(99, 102, 241, 0.4)",boxShadow:"inset 0 0 30px rgba(0, 0, 0, 0.5)"},cell:{width:Ds,height:Ds,borderRadius:"3px",transition:"all 0.05s"},overlay:{position:"absolute",inset:0,background:"rgba(0, 0, 0, 0.85)",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"15px",backdropFilter:"blur(5px)"},startButton:{background:"linear-gradient(135deg, #6366f1, #8b5cf6)",color:"#fff",border:"none",padding:"15px 40px",borderRadius:"12px",fontSize:"18px",fontWeight:"600",cursor:"pointer",boxShadow:"0 10px 30px rgba(99, 102, 241, 0.4)",transition:"all 0.3s"},controls:{color:"#94a3b8",fontSize:"12px",textAlign:"center",lineHeight:"1.8"},pauseText:{fontSize:"32px",color:"#ffd700",fontWeight:"700"},resumeButton:{background:"linear-gradient(135deg, #22c55e, #16a34a)",color:"#fff",border:"none",padding:"12px 30px",borderRadius:"10px",fontSize:"16px",fontWeight:"600",cursor:"pointer"},gameOverText:{fontSize:"32px",color:"#ef4444",fontWeight:"700"},finalScore:{fontSize:"20px",color:"#fff"},newHighScore:{fontSize:"18px",color:"#ffd700",animation:"pulse 1s infinite"},restartButton:{background:"linear-gradient(135deg, #6366f1, #8b5cf6)",color:"#fff",border:"none",padding:"12px 30px",borderRadius:"10px",fontSize:"16px",fontWeight:"600",cursor:"pointer"},mobileControls:{display:"none",flexDirection:"column",alignItems:"center",gap:"8px",marginTop:"10px"},mobileRow:{display:"flex",gap:"8px"},mobileBtn:{width:"50px",height:"50px",background:"rgba(99, 102, 241, 0.3)",border:"1px solid rgba(99, 102, 241, 0.5)",borderRadius:"10px",color:"#fff",fontSize:"20px",cursor:"pointer"},mobileBtnDrop:{width:"50px",height:"50px",background:"rgba(239, 68, 68, 0.3)",border:"1px solid rgba(239, 68, 68, 0.5)",borderRadius:"10px",color:"#fff",fontSize:"20px",cursor:"pointer"}},Bo=document.createElement("style");Bo.textContent=`
    @media (max-width: 600px) {
        .tetris-mobile-controls {
            display: flex !important;
        }
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;document.getElementById("tetris-styles")||(Bo.id="tetris-styles",document.head.appendChild(Bo));const lt=4,xd=12,_x=()=>{const{t:e}=Nr(),[r,n]=p.useState(()=>E()),[a,i]=p.useState(0),[s,o]=p.useState(()=>{const _=localStorage.getItem("2048_bestscore");return _?parseInt(_):0}),[c,l]=p.useState(!1),[m,h]=p.useState(!1),[x,g]=p.useState(!1);function E(){const _=Array(lt).fill(null).map(()=>Array(lt).fill(0));return w(_),w(_),_}function w(_){const $=[];for(let T=0;T<lt;T++)for(let C=0;C<lt;C++)_[T][C]===0&&$.push({r:T,c:C});if($.length>0){const{r:T,c:C}=$[Math.floor(Math.random()*$.length)];_[T][C]=Math.random()<.9?2:4}}const v=_=>{let $=_.filter(A=>A!==0);const T=lt-$.length;return Array(T).fill(0).concat($)},N=_=>{let $=0;for(let T=lt-1;T>0;T--)_[T]===_[T-1]&&_[T]!==0&&(_[T]*=2,$+=_[T],_[T-1]=0,_[T]===2048&&!m&&!x&&h(!0));return{row:_,scoreGain:$}},d=p.useCallback(_=>{let $=!1,T=0;return{newGrid:_.map(A=>{const P=[...A];let L=v(A);const{row:z,scoreGain:V}=N(L);return T+=V,L=v(z),JSON.stringify(P)!==JSON.stringify(L)&&($=!0),L}),moved:$,totalScore:T}},[m,x]),u=p.useCallback(_=>{const $=_.map(P=>[...P].reverse()),{newGrid:T,moved:C,totalScore:A}=d($);return{newGrid:T.map(P=>P.reverse()),moved:C,totalScore:A}},[d]),f=p.useCallback(_=>{const $=b(_),{newGrid:T,moved:C,totalScore:A}=u($);return{newGrid:b(T),moved:C,totalScore:A}},[u]),j=p.useCallback(_=>{const $=b(_),{newGrid:T,moved:C,totalScore:A}=d($);return{newGrid:b(T),moved:C,totalScore:A}},[d]);function b(_){return _[0].map(($,T)=>_.map(C=>C[T]))}const y=p.useCallback(_=>{for(let $=0;$<lt;$++)for(let T=0;T<lt;T++)if(_[$][T]===0)return!1;for(let $=0;$<lt;$++)for(let T=0;T<lt;T++){const C=_[$][T];if(T<lt-1&&C===_[$][T+1]||$<lt-1&&C===_[$+1][T])return!1}return!0},[]),I=p.useCallback(_=>{if(c||m&&!x)return;let $;switch(_){case"up":$=f(r);break;case"down":$=j(r);break;case"left":$=u(r);break;case"right":$=d(r);break;default:return}if($.moved){const T=$.newGrid.map(A=>[...A]);w(T),n(T);const C=a+$.totalScore;i(C),C>s&&(o(C),localStorage.setItem("2048_bestscore",C.toString())),y(T)&&l(!0)}},[r,a,s,c,m,x,f,j,u,d,y]);p.useEffect(()=>{const _=$=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes($.key)){$.preventDefault();const T=$.key.replace("Arrow","").toLowerCase();I(T)}};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[I]),p.useEffect(()=>{let _=0,$=0;const T=P=>{_=P.touches[0].clientX,$=P.touches[0].clientY},C=P=>{const L=P.changedTouches[0].clientX,z=P.changedTouches[0].clientY,V=L-_,D=z-$,B=50;Math.abs(V)>Math.abs(D)?Math.abs(V)>B&&I(V>0?"right":"left"):Math.abs(D)>B&&I(D>0?"down":"up")},A=document.getElementById("game-2048-container");return A&&(A.addEventListener("touchstart",T),A.addEventListener("touchend",C)),()=>{A&&(A.removeEventListener("touchstart",T),A.removeEventListener("touchend",C))}},[I]);const O=()=>{n(E()),i(0),l(!1),h(!1),g(!1)},R=()=>{g(!0),h(!1)},W=_=>({0:"rgba(238, 228, 218, 0.35)",2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#f59563",32:"#f67c5f",64:"#f65e3b",128:"#edcf72",256:"#edcc61",512:"#edc850",1024:"#edc53f",2048:"#edc22e",4096:"#3c3a32",8192:"#3c3a32"})[_]||"#3c3a32",q=_=>_<=4?"#776e65":"#f9f6f2",J=_=>_>=1e3?"28px":_>=100?"36px":"44px";return t.jsxs("div",{style:we.container,id:"game-2048-container",children:[t.jsxs("div",{style:we.header,children:[t.jsx("h2",{style:we.title,children:"2048"}),t.jsx("p",{style:we.subtitle,children:"Join the tiles, get to 2048!"})]}),t.jsxs("div",{style:we.scoreContainer,children:[t.jsxs("div",{style:we.scoreBox,children:[t.jsx("span",{style:we.scoreLabel,children:"SCORE"}),t.jsx("span",{style:we.scoreValue,children:a.toLocaleString()})]}),t.jsxs("div",{style:we.scoreBox,children:[t.jsx("span",{style:we.scoreLabel,children:"BEST"}),t.jsx("span",{style:we.bestValue,children:s.toLocaleString()})]})]}),t.jsx("button",{onClick:O,style:we.newGameBtn,children:"🔄 New Game"}),t.jsxs("div",{style:we.gridContainer,children:[t.jsx("div",{style:we.grid,children:r.map((_,$)=>_.map((T,C)=>t.jsx("div",{style:{...we.cell,background:W(T),color:q(T),fontSize:J(T),boxShadow:T>0?"0 4px 10px rgba(0,0,0,0.15)":"none",transform:T>0?"scale(1)":"scale(0.9)",transition:"all 0.15s ease"},children:T>0?T:""},`${$}-${C}`)))}),c&&t.jsxs("div",{style:we.overlay,children:[t.jsx("h2",{style:we.gameOverText,children:"Game Over!"}),t.jsxs("p",{style:we.finalScore,children:["Final Score: ",a.toLocaleString()]}),t.jsx("button",{onClick:O,style:we.tryAgainBtn,children:"Try Again"})]}),m&&!x&&t.jsxs("div",{style:we.winOverlay,children:[t.jsx("h2",{style:we.winText,children:"🎉 You Win!"}),t.jsxs("p",{style:we.winScore,children:["Score: ",a.toLocaleString()]}),t.jsxs("div",{style:we.winButtons,children:[t.jsx("button",{onClick:R,style:we.continueBtn,children:"Keep Playing"}),t.jsx("button",{onClick:O,style:we.newGameBtnSmall,children:"New Game"})]})]})]}),t.jsxs("div",{style:we.instructions,children:[t.jsxs("p",{children:["Use ",t.jsx("strong",{children:"Arrow Keys"})," or ",t.jsx("strong",{children:"Swipe"})," to move tiles"]}),t.jsxs("p",{children:["Merge same numbers to reach ",t.jsx("strong",{style:{color:"#edc22e"},children:"2048"}),"!"]})]}),t.jsxs("div",{style:we.mobileControls,children:[t.jsx("button",{onClick:()=>I("up"),style:we.mobileBtn,children:"↑"}),t.jsxs("div",{style:we.mobileRow,children:[t.jsx("button",{onClick:()=>I("left"),style:we.mobileBtn,children:"←"}),t.jsx("button",{onClick:()=>I("down"),style:we.mobileBtn,children:"↓"}),t.jsx("button",{onClick:()=>I("right"),style:we.mobileBtn,children:"→"})]})]})]})},we={container:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",borderRadius:"20px",padding:"25px",border:"1px solid rgba(237, 194, 46, 0.3)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",maxWidth:"450px",margin:"0 auto",touchAction:"none"},header:{textAlign:"center",marginBottom:"20px"},title:{fontSize:"48px",fontWeight:"800",background:"linear-gradient(135deg, #edc22e, #f59563)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"5px"},subtitle:{color:"#94a3b8",fontSize:"14px"},scoreContainer:{display:"flex",justifyContent:"center",gap:"15px",marginBottom:"20px"},scoreBox:{background:"rgba(187, 173, 160, 0.3)",borderRadius:"10px",padding:"10px 25px",textAlign:"center",minWidth:"100px"},scoreLabel:{display:"block",fontSize:"12px",color:"#eee4da",fontWeight:"600",letterSpacing:"1px"},scoreValue:{display:"block",fontSize:"24px",fontWeight:"700",color:"#fff"},bestValue:{display:"block",fontSize:"24px",fontWeight:"700",color:"#edc22e"},newGameBtn:{display:"block",width:"100%",background:"linear-gradient(135deg, #8f7a66, #bbada0)",color:"#f9f6f2",border:"none",padding:"12px",borderRadius:"10px",fontSize:"16px",fontWeight:"600",cursor:"pointer",marginBottom:"20px",transition:"all 0.3s"},gridContainer:{position:"relative",marginBottom:"20px"},grid:{display:"grid",gridTemplateColumns:`repeat(${lt}, 1fr)`,gap:`${xd}px`,background:"rgba(187, 173, 160, 0.4)",padding:`${xd}px`,borderRadius:"12px"},cell:{aspectRatio:"1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",fontWeight:"700",userSelect:"none"},overlay:{position:"absolute",inset:0,background:"rgba(15, 23, 42, 0.9)",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"15px",backdropFilter:"blur(5px)"},gameOverText:{fontSize:"32px",color:"#ef4444",fontWeight:"700"},finalScore:{fontSize:"18px",color:"#fff"},tryAgainBtn:{background:"linear-gradient(135deg, #8f7a66, #bbada0)",color:"#f9f6f2",border:"none",padding:"12px 30px",borderRadius:"10px",fontSize:"16px",fontWeight:"600",cursor:"pointer"},winOverlay:{position:"absolute",inset:0,background:"rgba(237, 194, 46, 0.95)",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"15px"},winText:{fontSize:"36px",color:"#f9f6f2",fontWeight:"700"},winScore:{fontSize:"20px",color:"#fff"},winButtons:{display:"flex",gap:"10px"},continueBtn:{background:"linear-gradient(135deg, #22c55e, #16a34a)",color:"#fff",border:"none",padding:"12px 20px",borderRadius:"10px",fontSize:"14px",fontWeight:"600",cursor:"pointer"},newGameBtnSmall:{background:"linear-gradient(135deg, #8f7a66, #6d5d4e)",color:"#f9f6f2",border:"none",padding:"12px 20px",borderRadius:"10px",fontSize:"14px",fontWeight:"600",cursor:"pointer"},instructions:{textAlign:"center",color:"#94a3b8",fontSize:"13px",lineHeight:"1.8"},mobileControls:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",marginTop:"20px"},mobileRow:{display:"flex",gap:"8px"},mobileBtn:{width:"60px",height:"60px",background:"rgba(187, 173, 160, 0.4)",border:"1px solid rgba(187, 173, 160, 0.6)",borderRadius:"12px",color:"#f9f6f2",fontSize:"24px",cursor:"pointer",transition:"all 0.2s",display:"flex",justifyContent:"center",alignItems:"center"}},Ox=()=>{const{t:e}=Nr(),[r,n]=p.useState("0"),[a,i]=p.useState(null),[s,o]=p.useState(null),[c,l]=p.useState(!1),[m,h]=p.useState([]),[x,g]=p.useState(!1),[E,w]=p.useState(0),v=C=>{c?(n(C),l(!1)):n(r==="0"?C:r+C)},N=()=>{c?(n("0."),l(!1)):r.includes(".")||n(r+".")},d=()=>{n("0"),i(null),o(null),l(!1)},u=()=>{n("0")},f=()=>{n(String(-parseFloat(r)))},j=()=>{const C=parseFloat(r)/100;n(String(C))},b=C=>{const A=parseFloat(r);if(a===null)i(A);else if(s){const P=y(a,A,s);n(String(P)),i(P);const L=`${a} ${I(s)} ${A} = ${P}`;h(z=>[L,...z.slice(0,9)])}l(!0),o(C)},y=(C,A,P)=>{switch(P){case"+":return C+A;case"-":return C-A;case"*":return C*A;case"/":return A!==0?C/A:"Error";case"^":return Math.pow(C,A);default:return A}},I=C=>({"+":"+","-":"−","*":"×","/":"÷","^":"^"})[C]||C,O=()=>{if(s&&a!==null){const C=parseFloat(r),A=y(a,C,s),P=`${a} ${I(s)} ${C} = ${A}`;h(L=>[P,...L.slice(0,9)]),n(String(A)),i(null),o(null),l(!0)}},R=C=>{const A=parseFloat(r);let P;switch(C){case"sin":P=Math.sin(A*Math.PI/180);break;case"cos":P=Math.cos(A*Math.PI/180);break;case"tan":P=Math.tan(A*Math.PI/180);break;case"sqrt":P=Math.sqrt(A);break;case"log":P=Math.log10(A);break;case"ln":P=Math.log(A);break;case"x2":P=Math.pow(A,2);break;case"x3":P=Math.pow(A,3);break;case"1/x":P=1/A;break;case"abs":P=Math.abs(A);break;case"exp":P=Math.exp(A);break;case"pi":P=Math.PI;break;case"e":P=Math.E;break;case"fact":P=W(A);break;default:P=A}n(String(P)),l(!0)},W=C=>{if(C<0)return"Error";if(C===0||C===1)return 1;let A=1;for(let P=2;P<=C;P++)A*=P;return A},q=()=>w(E+parseFloat(r)),J=()=>w(E-parseFloat(r)),_=()=>n(String(E)),$=()=>w(0);p.useEffect(()=>{const C=A=>{A.key>="0"&&A.key<="9"?v(A.key):A.key==="."?N():A.key==="+"?b("+"):A.key==="-"?b("-"):A.key==="*"?b("*"):A.key==="/"?(A.preventDefault(),b("/")):A.key==="Enter"||A.key==="="?O():A.key==="Escape"?d():A.key==="Backspace"&&n(r.length>1?r.slice(0,-1):"0")};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)});const T=({onClick:C,children:A,style:P,className:L=""})=>t.jsx("button",{onClick:C,style:{...re.button,...P},className:L,children:A});return t.jsxs("div",{style:re.container,children:[t.jsxs("div",{style:re.header,children:[t.jsx("h2",{style:re.title,children:"🧮 Calculator"}),t.jsx("button",{onClick:()=>g(!x),style:re.modeToggle,children:x?"Basic":"Scientific"})]}),t.jsxs("div",{style:re.displayContainer,children:[s&&t.jsxs("div",{style:re.operationDisplay,children:[a," ",I(s)]}),t.jsx("div",{style:re.display,children:r})]}),E!==0&&t.jsxs("div",{style:re.memoryIndicator,children:["M = ",E]}),t.jsxs("div",{style:re.buttonGrid,children:[t.jsxs("div",{style:re.memoryRow,children:[t.jsx(T,{onClick:$,style:re.memoryBtn,children:"MC"}),t.jsx(T,{onClick:_,style:re.memoryBtn,children:"MR"}),t.jsx(T,{onClick:q,style:re.memoryBtn,children:"M+"}),t.jsx(T,{onClick:J,style:re.memoryBtn,children:"M-"})]}),x&&t.jsxs("div",{style:re.scientificRow,children:[t.jsx(T,{onClick:()=>R("sin"),style:re.sciBtn,children:"sin"}),t.jsx(T,{onClick:()=>R("cos"),style:re.sciBtn,children:"cos"}),t.jsx(T,{onClick:()=>R("tan"),style:re.sciBtn,children:"tan"}),t.jsx(T,{onClick:()=>R("sqrt"),style:re.sciBtn,children:"√"}),t.jsx(T,{onClick:()=>R("log"),style:re.sciBtn,children:"log"}),t.jsx(T,{onClick:()=>R("ln"),style:re.sciBtn,children:"ln"}),t.jsx(T,{onClick:()=>R("x2"),style:re.sciBtn,children:"x²"}),t.jsx(T,{onClick:()=>R("x3"),style:re.sciBtn,children:"x³"}),t.jsx(T,{onClick:()=>b("^"),style:re.sciBtn,children:"xʸ"}),t.jsx(T,{onClick:()=>R("1/x"),style:re.sciBtn,children:"1/x"}),t.jsx(T,{onClick:()=>R("pi"),style:re.sciBtn,children:"π"}),t.jsx(T,{onClick:()=>R("e"),style:re.sciBtn,children:"e"}),t.jsx(T,{onClick:()=>R("fact"),style:re.sciBtn,children:"n!"}),t.jsx(T,{onClick:()=>R("abs"),style:re.sciBtn,children:"|x|"}),t.jsx(T,{onClick:()=>R("exp"),style:re.sciBtn,children:"eˣ"})]}),t.jsxs("div",{style:re.mainButtons,children:[t.jsx(T,{onClick:d,style:re.clearBtn,children:"AC"}),t.jsx(T,{onClick:u,style:re.clearBtn,children:"CE"}),t.jsx(T,{onClick:f,style:re.funcBtn,children:"±"}),t.jsx(T,{onClick:()=>b("/"),style:re.opBtn,children:"÷"}),t.jsx(T,{onClick:()=>v("7"),style:re.numBtn,children:"7"}),t.jsx(T,{onClick:()=>v("8"),style:re.numBtn,children:"8"}),t.jsx(T,{onClick:()=>v("9"),style:re.numBtn,children:"9"}),t.jsx(T,{onClick:()=>b("*"),style:re.opBtn,children:"×"}),t.jsx(T,{onClick:()=>v("4"),style:re.numBtn,children:"4"}),t.jsx(T,{onClick:()=>v("5"),style:re.numBtn,children:"5"}),t.jsx(T,{onClick:()=>v("6"),style:re.numBtn,children:"6"}),t.jsx(T,{onClick:()=>b("-"),style:re.opBtn,children:"−"}),t.jsx(T,{onClick:()=>v("1"),style:re.numBtn,children:"1"}),t.jsx(T,{onClick:()=>v("2"),style:re.numBtn,children:"2"}),t.jsx(T,{onClick:()=>v("3"),style:re.numBtn,children:"3"}),t.jsx(T,{onClick:()=>b("+"),style:re.opBtn,children:"+"}),t.jsx(T,{onClick:j,style:re.funcBtn,children:"%"}),t.jsx(T,{onClick:()=>v("0"),style:re.numBtn,children:"0"}),t.jsx(T,{onClick:N,style:re.numBtn,children:"."}),t.jsx(T,{onClick:O,style:re.equalBtn,children:"="})]})]}),m.length>0&&t.jsxs("div",{style:re.historyContainer,children:[t.jsxs("div",{style:re.historyHeader,children:[t.jsx("span",{children:"History"}),t.jsx("button",{onClick:()=>h([]),style:re.clearHistory,children:"Clear"})]}),t.jsx("div",{style:re.historyList,children:m.map((C,A)=>t.jsx("div",{style:re.historyItem,children:C},A))})]})]})},re={container:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",borderRadius:"20px",padding:"25px",border:"1px solid rgba(99, 102, 241, 0.3)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",maxWidth:"400px",margin:"0 auto"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},title:{fontSize:"24px",fontWeight:"700",background:"linear-gradient(135deg, #6366f1, #a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},modeToggle:{background:"rgba(99, 102, 241, 0.2)",color:"#a5b4fc",border:"1px solid rgba(99, 102, 241, 0.4)",padding:"8px 16px",borderRadius:"8px",cursor:"pointer",fontSize:"12px",fontWeight:"600"},displayContainer:{background:"rgba(0, 0, 0, 0.4)",borderRadius:"12px",padding:"20px",marginBottom:"15px",border:"1px solid rgba(99, 102, 241, 0.2)"},operationDisplay:{color:"#94a3b8",fontSize:"14px",textAlign:"right",marginBottom:"5px"},display:{color:"#fff",fontSize:"36px",fontWeight:"600",textAlign:"right",fontFamily:"monospace",wordBreak:"break-all"},memoryIndicator:{color:"#6366f1",fontSize:"12px",textAlign:"right",marginBottom:"10px"},buttonGrid:{display:"flex",flexDirection:"column",gap:"8px"},memoryRow:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px"},scientificRow:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"6px",marginBottom:"8px"},mainButtons:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px"},button:{padding:"18px",borderRadius:"12px",border:"none",cursor:"pointer",fontSize:"20px",fontWeight:"600",transition:"all 0.2s",display:"flex",justifyContent:"center",alignItems:"center"},numBtn:{background:"rgba(255, 255, 255, 0.1)",color:"#fff"},opBtn:{background:"rgba(99, 102, 241, 0.3)",color:"#a5b4fc"},funcBtn:{background:"rgba(148, 163, 184, 0.2)",color:"#94a3b8"},clearBtn:{background:"rgba(239, 68, 68, 0.3)",color:"#fca5a5"},equalBtn:{background:"linear-gradient(135deg, #6366f1, #8b5cf6)",color:"#fff"},memoryBtn:{background:"rgba(34, 197, 94, 0.2)",color:"#86efac",padding:"10px",fontSize:"12px"},sciBtn:{background:"rgba(168, 85, 247, 0.2)",color:"#c4b5fd",padding:"12px 8px",fontSize:"13px"},historyContainer:{marginTop:"20px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"12px",padding:"15px",maxHeight:"150px",overflowY:"auto"},historyHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",color:"#94a3b8",fontSize:"12px"},clearHistory:{background:"transparent",border:"none",color:"#ef4444",cursor:"pointer",fontSize:"12px"},historyList:{display:"flex",flexDirection:"column",gap:"5px"},historyItem:{color:"#64748b",fontSize:"13px",fontFamily:"monospace",padding:"5px",borderRadius:"4px",background:"rgba(255, 255, 255, 0.02)"}},Wx=()=>{const{t:e}=Nr(),[r,n]=p.useState(0),[a,i]=p.useState(!1),[s,o]=p.useState([]),c=p.useRef(null);p.useEffect(()=>(a?c.current=setInterval(()=>{n(d=>d+10)},10):clearInterval(c.current),()=>clearInterval(c.current)),[a]);const l=d=>{const u=Math.floor(d/36e5),f=Math.floor(d%36e5/6e4),j=Math.floor(d%6e4/1e3),b=Math.floor(d%1e3/10);return u>0?`${u.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}:${j.toString().padStart(2,"0")}.${b.toString().padStart(2,"0")}`:`${f.toString().padStart(2,"0")}:${j.toString().padStart(2,"0")}.${b.toString().padStart(2,"0")}`},m=()=>{i(!0)},h=()=>{i(!1)},x=()=>{i(!1),n(0),o([])},g=()=>{const d=s.length>0?s[0].totalTime:0,u=r-d;o([{id:s.length+1,lapTime:u,totalTime:r},...s])},E=()=>{if(s.length<2)return{fastest:null,slowest:null};const d=s.map(j=>j.lapTime),u=Math.min(...d),f=Math.max(...d);return{fastest:u,slowest:f}},w=()=>{if(s.length===0)return;const d=s.map(b=>`Lap ${b.id}: ${l(b.lapTime)} (Total: ${l(b.totalTime)})`).join(`
`),u=new Blob([d],{type:"text/plain"}),f=URL.createObjectURL(u),j=document.createElement("a");j.href=f,j.download=`stopwatch-laps-${new Date().toISOString().slice(0,10)}.txt`,j.click(),URL.revokeObjectURL(f)},{fastest:v,slowest:N}=E();return t.jsxs("div",{style:ge.container,children:[t.jsxs("div",{style:ge.header,children:[t.jsx("h2",{style:ge.title,children:"⏱️ Stopwatch"}),t.jsx("p",{style:ge.subtitle,children:"Precision timing with lap tracking"})]}),t.jsxs("div",{style:ge.displayContainer,children:[t.jsx("div",{style:ge.timeDisplay,children:l(r)}),t.jsx("div",{style:ge.timeHint,children:"Hours : Minutes : Seconds . Centiseconds"})]}),t.jsxs("div",{style:ge.progressRing,children:[t.jsxs("svg",{width:"200",height:"200",viewBox:"0 0 200 200",children:[t.jsx("circle",{cx:"100",cy:"100",r:"90",fill:"none",stroke:"rgba(99, 102, 241, 0.2)",strokeWidth:"8"}),t.jsx("circle",{cx:"100",cy:"100",r:"90",fill:"none",stroke:"url(#gradient)",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:`${r%6e4/6e4*565.48} 565.48`,transform:"rotate(-90 100 100)",style:{transition:"stroke-dasharray 0.1s"}}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),t.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})})]}),t.jsxs("div",{style:ge.ringCenter,children:[t.jsx("span",{style:ge.ringTime,children:Math.floor(r%6e4/1e3)}),t.jsx("span",{style:ge.ringLabel,children:"sec"})]})]}),t.jsxs("div",{style:ge.controls,children:[a?t.jsx("button",{onClick:h,style:ge.stopBtn,children:"⏸ Stop"}):t.jsx("button",{onClick:m,style:ge.startBtn,children:"▶ Start"}),t.jsx("button",{onClick:g,style:ge.lapBtn,disabled:!a,children:"🏁 Lap"}),t.jsx("button",{onClick:x,style:ge.resetBtn,children:"🔄 Reset"})]}),s.length>0&&t.jsxs("div",{style:ge.lapsContainer,children:[t.jsxs("div",{style:ge.lapsHeader,children:[t.jsxs("span",{children:["Lap Times (",s.length,")"]}),t.jsx("button",{onClick:w,style:ge.exportBtn,children:"📥 Export"})]}),t.jsx("div",{style:ge.lapsList,children:s.map(d=>{const u=d.lapTime===v&&s.length>1,f=d.lapTime===N&&s.length>1;return t.jsxs("div",{style:{...ge.lapItem,...u?ge.fastestLap:{},...f?ge.slowestLap:{}},children:[t.jsxs("div",{style:ge.lapInfo,children:[t.jsxs("span",{style:ge.lapNumber,children:["Lap ",d.id]}),u&&t.jsx("span",{style:ge.fastestBadge,children:"🏆 Fastest"}),f&&t.jsx("span",{style:ge.slowestBadge,children:"🐢 Slowest"})]}),t.jsxs("div",{style:ge.lapTimes,children:[t.jsx("span",{style:ge.lapTime,children:l(d.lapTime)}),t.jsx("span",{style:ge.totalTime,children:l(d.totalTime)})]})]},d.id)})})]}),s.length>1&&t.jsxs("div",{style:ge.statsContainer,children:[t.jsxs("div",{style:ge.statBox,children:[t.jsx("span",{style:ge.statLabel,children:"Average"}),t.jsx("span",{style:ge.statValue,children:l(Math.floor(s.reduce((d,u)=>d+u.lapTime,0)/s.length))})]}),t.jsxs("div",{style:ge.statBox,children:[t.jsx("span",{style:ge.statLabel,children:"Fastest"}),t.jsx("span",{style:{...ge.statValue,color:"#22c55e"},children:l(v)})]}),t.jsxs("div",{style:ge.statBox,children:[t.jsx("span",{style:ge.statLabel,children:"Slowest"}),t.jsx("span",{style:{...ge.statValue,color:"#ef4444"},children:l(N)})]})]})]})},ge={container:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",borderRadius:"20px",padding:"25px",border:"1px solid rgba(99, 102, 241, 0.3)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",maxWidth:"450px",margin:"0 auto"},header:{textAlign:"center",marginBottom:"20px"},title:{fontSize:"28px",fontWeight:"700",background:"linear-gradient(135deg, #6366f1, #a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},subtitle:{color:"#94a3b8",fontSize:"14px",marginTop:"5px"},displayContainer:{background:"rgba(0, 0, 0, 0.4)",borderRadius:"16px",padding:"25px",textAlign:"center",marginBottom:"20px",border:"1px solid rgba(99, 102, 241, 0.2)"},timeDisplay:{fontSize:"48px",fontWeight:"700",fontFamily:"monospace",color:"#fff",letterSpacing:"2px",textShadow:"0 0 20px rgba(99, 102, 241, 0.5)"},timeHint:{fontSize:"11px",color:"#64748b",marginTop:"10px"},progressRing:{display:"flex",justifyContent:"center",position:"relative",marginBottom:"25px"},ringCenter:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},ringTime:{fontSize:"42px",fontWeight:"700",color:"#fff",display:"block"},ringLabel:{fontSize:"14px",color:"#94a3b8"},controls:{display:"flex",justifyContent:"center",gap:"12px",marginBottom:"25px"},startBtn:{background:"linear-gradient(135deg, #22c55e, #16a34a)",color:"#fff",border:"none",padding:"15px 30px",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s",boxShadow:"0 8px 25px rgba(34, 197, 94, 0.3)"},stopBtn:{background:"linear-gradient(135deg, #ef4444, #dc2626)",color:"#fff",border:"none",padding:"15px 30px",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s",boxShadow:"0 8px 25px rgba(239, 68, 68, 0.3)"},lapBtn:{background:"rgba(99, 102, 241, 0.3)",color:"#a5b4fc",border:"1px solid rgba(99, 102, 241, 0.5)",padding:"15px 30px",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s"},resetBtn:{background:"rgba(148, 163, 184, 0.2)",color:"#94a3b8",border:"1px solid rgba(148, 163, 184, 0.3)",padding:"15px 30px",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s"},lapsContainer:{background:"rgba(0, 0, 0, 0.3)",borderRadius:"12px",padding:"15px",maxHeight:"250px",overflowY:"auto"},lapsHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px",color:"#fff",fontSize:"14px",fontWeight:"600"},exportBtn:{background:"rgba(99, 102, 241, 0.2)",color:"#a5b4fc",border:"none",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",cursor:"pointer"},lapsList:{display:"flex",flexDirection:"column",gap:"8px"},lapItem:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 15px",background:"rgba(255, 255, 255, 0.05)",borderRadius:"10px",borderLeft:"3px solid transparent"},fastestLap:{background:"rgba(34, 197, 94, 0.1)",borderLeftColor:"#22c55e"},slowestLap:{background:"rgba(239, 68, 68, 0.1)",borderLeftColor:"#ef4444"},lapInfo:{display:"flex",alignItems:"center",gap:"10px"},lapNumber:{color:"#94a3b8",fontSize:"14px",fontWeight:"600"},fastestBadge:{fontSize:"10px",color:"#22c55e",background:"rgba(34, 197, 94, 0.2)",padding:"2px 6px",borderRadius:"4px"},slowestBadge:{fontSize:"10px",color:"#ef4444",background:"rgba(239, 68, 68, 0.2)",padding:"2px 6px",borderRadius:"4px"},lapTimes:{display:"flex",flexDirection:"column",alignItems:"flex-end"},lapTime:{color:"#fff",fontSize:"16px",fontWeight:"600",fontFamily:"monospace"},totalTime:{color:"#64748b",fontSize:"12px",fontFamily:"monospace"},statsContainer:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px",marginTop:"20px"},statBox:{background:"rgba(99, 102, 241, 0.1)",borderRadius:"10px",padding:"12px",textAlign:"center"},statLabel:{display:"block",color:"#94a3b8",fontSize:"11px",marginBottom:"5px"},statValue:{color:"#fff",fontSize:"14px",fontWeight:"600",fontFamily:"monospace"}},Fx=()=>{const{t:e}=Nr(),[r,n]=p.useState(()=>{const R=localStorage.getItem("habitTracker_habits");return R?JSON.parse(R):[{id:1,name:"💪 Exercise",color:"#22c55e",completedDates:[],streak:0},{id:2,name:"📚 Read 30 min",color:"#6366f1",completedDates:[],streak:0},{id:3,name:"💧 Drink 8 glasses",color:"#0ea5e9",completedDates:[],streak:0},{id:4,name:"🧘 Meditate",color:"#a855f7",completedDates:[],streak:0}]}),[a,i]=p.useState(""),[s,o]=p.useState("#6366f1"),[c,l]=p.useState(!1),[m,h]=p.useState("week"),x=["#22c55e","#6366f1","#0ea5e9","#a855f7","#f59e0b","#ef4444","#ec4899","#14b8a6"];p.useEffect(()=>{localStorage.setItem("habitTracker_habits",JSON.stringify(r))},[r]);const g=R=>R.toISOString().split("T")[0],E=g(new Date),w=R=>{n(r.map(W=>{if(W.id===R){const J=W.completedDates.includes(E)?W.completedDates.filter($=>$!==E):[...W.completedDates,E],_=v(J);return{...W,completedDates:J,streak:_}}return W}))},v=R=>{if(!R.length)return 0;[...R].sort().reverse();let W=0,q=new Date;for(R.includes(g(q))||q.setDate(q.getDate()-1);R.includes(g(q));)W++,q.setDate(q.getDate()-1);return W},N=()=>{if(!a.trim())return;const R={id:Date.now(),name:a.trim(),color:s,completedDates:[],streak:0};n([...r,R]),i(""),l(!1)},d=R=>{confirm("Delete this habit?")&&n(r.filter(W=>W.id!==R))},u=()=>{const R=[],W=new Date;W.setDate(W.getDate()-W.getDay());for(let q=0;q<7;q++){const J=new Date(W);J.setDate(W.getDate()+q),R.push({date:g(J),dayName:J.toLocaleDateString("id-ID",{weekday:"short"}),dayNum:J.getDate(),isToday:g(J)===E})}return R},f=()=>{const R=[],W=new Date;W.setDate(W.getDate()-30);for(let q=0;q<=30;q++){const J=new Date(W);J.setDate(W.getDate()+q),R.push({date:g(J),isToday:g(J)===E})}return R},j=R=>{const q=u().map(J=>J.date).filter(J=>R.completedDates.includes(J)).length;return Math.round(q/7*100)},b=()=>({completed:r.filter(W=>W.completedDates.includes(E)).length,total:r.length}),y=u(),I=f(),O=b();return t.jsxs("div",{style:le.container,children:[t.jsxs("div",{style:le.header,children:[t.jsx("h2",{style:le.title,children:"📅 Habit Tracker"}),t.jsx("p",{style:le.subtitle,children:"Build better habits, one day at a time"})]}),t.jsxs("div",{style:le.progressCard,children:[t.jsxs("div",{style:le.progressCircle,children:[t.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[t.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"rgba(99, 102, 241, 0.2)",strokeWidth:"8"}),t.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#6366f1",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:`${O.completed/O.total*251.2} 251.2`,transform:"rotate(-90 50 50)"})]}),t.jsxs("div",{style:le.progressText,children:[t.jsxs("span",{style:le.progressNum,children:[O.completed,"/",O.total]}),t.jsx("span",{style:le.progressLabel,children:"Today"})]})]}),t.jsxs("div",{style:le.progressStats,children:[t.jsxs("div",{style:le.statItem,children:[t.jsx("span",{style:le.statValue,children:Math.max(...r.map(R=>R.streak))}),t.jsx("span",{style:le.statLabel,children:"🔥 Best Streak"})]}),t.jsxs("div",{style:le.statItem,children:[t.jsxs("span",{style:le.statValue,children:[Math.round(r.reduce((R,W)=>R+j(W),0)/r.length||0),"%"]}),t.jsx("span",{style:le.statLabel,children:"📊 Weekly Avg"})]})]})]}),t.jsxs("div",{style:le.viewToggle,children:[t.jsx("button",{onClick:()=>h("week"),style:{...le.viewBtn,...m==="week"?le.viewBtnActive:{}},children:"Week"}),t.jsx("button",{onClick:()=>h("month"),style:{...le.viewBtn,...m==="month"?le.viewBtnActive:{}},children:"Month"})]}),t.jsx("div",{style:le.habitsList,children:r.map(R=>t.jsxs("div",{style:le.habitCard,children:[t.jsxs("div",{style:le.habitHeader,children:[t.jsxs("div",{style:le.habitInfo,children:[t.jsx("div",{style:{...le.habitDot,background:R.color}}),t.jsx("span",{style:le.habitName,children:R.name})]}),t.jsxs("div",{style:le.habitActions,children:[t.jsxs("span",{style:le.streakBadge,children:["🔥 ",R.streak]}),t.jsx("button",{onClick:()=>d(R.id),style:le.deleteBtn,children:"×"})]})]}),m==="week"?t.jsx("div",{style:le.weekGrid,children:y.map(W=>{const q=R.completedDates.includes(W.date);return t.jsxs("div",{onClick:()=>W.date<=E&&w(R.id),style:{...le.dayCell,...W.isToday?le.todayCell:{},cursor:W.date<=E?"pointer":"default",opacity:W.date>E?.3:1},children:[t.jsx("span",{style:le.dayName,children:W.dayName}),t.jsx("div",{style:{...le.dayCheck,background:q?R.color:"rgba(255,255,255,0.1)",boxShadow:q?`0 0 10px ${R.color}`:"none"},children:q&&"✓"}),t.jsx("span",{style:le.dayNum,children:W.dayNum})]},W.date)})}):t.jsx("div",{style:le.heatmapGrid,children:I.map(W=>{const q=R.completedDates.includes(W.date);return t.jsx("div",{style:{...le.heatmapCell,background:q?R.color:"rgba(255,255,255,0.1)",boxShadow:q?`0 0 5px ${R.color}40`:"none",border:W.isToday?`2px solid ${R.color}`:"none"},title:W.date},W.date)})}),t.jsx("div",{style:le.habitFooter,children:t.jsxs("span",{style:le.completionRate,children:[j(R),"% this week"]})})]},R.id))}),c?t.jsxs("div",{style:le.addForm,children:[t.jsx("input",{type:"text",value:a,onChange:R=>i(R.target.value),placeholder:"New habit name...",style:le.addInput,autoFocus:!0}),t.jsx("div",{style:le.colorPicker,children:x.map(R=>t.jsx("button",{onClick:()=>o(R),style:{...le.colorBtn,background:R,border:s===R?"3px solid #fff":"none"}},R))}),t.jsxs("div",{style:le.addFormActions,children:[t.jsx("button",{onClick:N,style:le.confirmBtn,children:"Add Habit"}),t.jsx("button",{onClick:()=>l(!1),style:le.cancelBtn,children:"Cancel"})]})]}):t.jsx("button",{onClick:()=>l(!0),style:le.addBtn,children:"+ Add New Habit"})]})},le={container:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",borderRadius:"20px",padding:"25px",border:"1px solid rgba(99, 102, 241, 0.3)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",maxWidth:"550px",margin:"0 auto"},header:{textAlign:"center",marginBottom:"25px"},title:{fontSize:"28px",fontWeight:"700",background:"linear-gradient(135deg, #22c55e, #6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},subtitle:{color:"#94a3b8",fontSize:"14px",marginTop:"5px"},progressCard:{background:"rgba(0, 0, 0, 0.3)",borderRadius:"16px",padding:"20px",display:"flex",alignItems:"center",gap:"25px",marginBottom:"20px"},progressCircle:{position:"relative"},progressText:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},progressNum:{display:"block",fontSize:"22px",fontWeight:"700",color:"#fff"},progressLabel:{fontSize:"12px",color:"#94a3b8"},progressStats:{flex:1,display:"flex",flexDirection:"column",gap:"15px"},statItem:{display:"flex",alignItems:"center",gap:"10px"},statValue:{fontSize:"24px",fontWeight:"700",color:"#fff"},statLabel:{fontSize:"13px",color:"#94a3b8"},viewToggle:{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"20px"},viewBtn:{background:"rgba(255, 255, 255, 0.05)",color:"#94a3b8",border:"none",padding:"8px 20px",borderRadius:"8px",cursor:"pointer",fontSize:"14px",transition:"all 0.2s"},viewBtnActive:{background:"rgba(99, 102, 241, 0.3)",color:"#a5b4fc"},habitsList:{display:"flex",flexDirection:"column",gap:"15px",marginBottom:"20px"},habitCard:{background:"rgba(0, 0, 0, 0.3)",borderRadius:"14px",padding:"15px"},habitHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"},habitInfo:{display:"flex",alignItems:"center",gap:"10px"},habitDot:{width:"12px",height:"12px",borderRadius:"50%"},habitName:{color:"#fff",fontSize:"16px",fontWeight:"600"},habitActions:{display:"flex",alignItems:"center",gap:"10px"},streakBadge:{background:"rgba(249, 115, 22, 0.2)",color:"#fb923c",padding:"4px 10px",borderRadius:"20px",fontSize:"12px",fontWeight:"600"},deleteBtn:{background:"transparent",border:"none",color:"#ef4444",fontSize:"18px",cursor:"pointer",opacity:.6,transition:"opacity 0.2s"},weekGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px"},dayCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},todayCell:{background:"rgba(99, 102, 241, 0.1)",borderRadius:"8px",padding:"5px"},dayName:{fontSize:"10px",color:"#64748b"},dayCheck:{width:"32px",height:"32px",borderRadius:"8px",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",fontWeight:"700",transition:"all 0.2s"},dayNum:{fontSize:"11px",color:"#94a3b8"},heatmapGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"4px"},heatmapCell:{aspectRatio:"1",borderRadius:"4px",transition:"all 0.2s"},habitFooter:{marginTop:"12px",textAlign:"right"},completionRate:{fontSize:"12px",color:"#64748b"},addForm:{background:"rgba(99, 102, 241, 0.1)",borderRadius:"12px",padding:"15px"},addInput:{width:"100%",background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"8px",padding:"12px",color:"#fff",fontSize:"14px",marginBottom:"10px",outline:"none"},colorPicker:{display:"flex",gap:"8px",marginBottom:"15px"},colorBtn:{width:"28px",height:"28px",borderRadius:"50%",cursor:"pointer",transition:"transform 0.2s"},addFormActions:{display:"flex",gap:"10px"},confirmBtn:{flex:1,background:"linear-gradient(135deg, #22c55e, #16a34a)",color:"#fff",border:"none",padding:"10px",borderRadius:"8px",fontWeight:"600",cursor:"pointer"},cancelBtn:{flex:1,background:"rgba(148, 163, 184, 0.2)",color:"#94a3b8",border:"none",padding:"10px",borderRadius:"8px",fontWeight:"600",cursor:"pointer"},addBtn:{width:"100%",background:"rgba(99, 102, 241, 0.2)",color:"#a5b4fc",border:"2px dashed rgba(99, 102, 241, 0.4)",padding:"15px",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.2s"}},$x=()=>{const{t:e}=Nr(),[r,n]=p.useState(()=>{const T=localStorage.getItem("kanban_columns");return T?JSON.parse(T):{todo:{id:"todo",title:"📋 To Do",color:"#6366f1",cards:[{id:1,title:"Research project requirements",priority:"high",labels:["research"]},{id:2,title:"Design system architecture",priority:"medium",labels:["design"]}]},inProgress:{id:"inProgress",title:"🔄 In Progress",color:"#f59e0b",cards:[{id:3,title:"Implement user authentication",priority:"high",labels:["backend"]}]},review:{id:"review",title:"👀 Review",color:"#a855f7",cards:[]},done:{id:"done",title:"✅ Done",color:"#22c55e",cards:[{id:4,title:"Setup project structure",priority:"low",labels:["setup"]}]}}}),[a,i]=p.useState(null),[s,o]=p.useState(null),[c,l]=p.useState(null),[m,h]=p.useState(null),[x,g]=p.useState(""),[E,w]=p.useState("medium"),[v,N]=p.useState(""),[d,u]=p.useState("all"),f=[{value:"low",label:"Low",color:"#22c55e"},{value:"medium",label:"Medium",color:"#f59e0b"},{value:"high",label:"High",color:"#ef4444"}],j=["frontend","backend","design","research","bug","feature","setup","docs"];p.useEffect(()=>{localStorage.setItem("kanban_columns",JSON.stringify(r))},[r]);const b=(T,C,A)=>{i(C),o(A),T.dataTransfer.effectAllowed="move"},y=T=>{T.preventDefault(),T.dataTransfer.dropEffect="move"},I=(T,C)=>{if(T.preventDefault(),!a||s===C){i(null),o(null);return}n(A=>{const P={...A};return P[s]={...P[s],cards:P[s].cards.filter(L=>L.id!==a.id)},P[C]={...P[C],cards:[...P[C].cards,a]},P}),i(null),o(null)},O=T=>{if(!x.trim())return;const C={id:Date.now(),title:x.trim(),priority:E,labels:[],createdAt:new Date().toISOString()};n(A=>({...A,[T]:{...A[T],cards:[...A[T].cards,C]}})),g(""),w("medium"),h(null)},R=(T,C)=>{n(A=>({...A,[T]:{...A[T],cards:A[T].cards.filter(P=>P.id!==C)}}))},W=(T,C,A)=>{n(P=>({...P,[T]:{...P[T],cards:P[T].cards.map(L=>L.id===C?{...L,...A}:L)}}))},q=(T,C,A)=>{n(P=>({...P,[T]:{...P[T],cards:P[T].cards.map(L=>{if(L.id===C){const z=L.labels.includes(A)?L.labels.filter(V=>V!==A):[...L.labels,A];return{...L,labels:z}}return L})}}))},J=T=>T.filter(C=>{const A=C.title.toLowerCase().includes(v.toLowerCase())||C.labels.some(L=>L.toLowerCase().includes(v.toLowerCase())),P=d==="all"||C.priority===d;return A&&P}),$=(()=>{const T=Object.values(r).flatMap(C=>C.cards);return{total:T.length,todo:r.todo.cards.length,inProgress:r.inProgress.cards.length,done:r.done.cards.length,highPriority:T.filter(C=>C.priority==="high").length}})();return t.jsxs("div",{style:se.container,children:[t.jsxs("div",{style:se.header,children:[t.jsx("h2",{style:se.title,children:"📌 Kanban Board"}),t.jsx("p",{style:se.subtitle,children:"Organize your tasks visually"})]}),t.jsxs("div",{style:se.statsBar,children:[t.jsxs("div",{style:se.stat,children:[t.jsx("span",{style:se.statNum,children:$.total}),t.jsx("span",{style:se.statLabel,children:"Total"})]}),t.jsxs("div",{style:se.stat,children:[t.jsx("span",{style:{...se.statNum,color:"#6366f1"},children:$.todo}),t.jsx("span",{style:se.statLabel,children:"To Do"})]}),t.jsxs("div",{style:se.stat,children:[t.jsx("span",{style:{...se.statNum,color:"#f59e0b"},children:$.inProgress}),t.jsx("span",{style:se.statLabel,children:"In Progress"})]}),t.jsxs("div",{style:se.stat,children:[t.jsx("span",{style:{...se.statNum,color:"#22c55e"},children:$.done}),t.jsx("span",{style:se.statLabel,children:"Done"})]})]}),t.jsxs("div",{style:se.filters,children:[t.jsx("input",{type:"text",placeholder:"Search tasks...",value:v,onChange:T=>N(T.target.value),style:se.searchInput}),t.jsxs("select",{value:d,onChange:T=>u(T.target.value),style:se.filterSelect,children:[t.jsx("option",{value:"all",children:"All Priorities"}),f.map(T=>t.jsx("option",{value:T.value,children:T.label},T.value))]})]}),t.jsx("div",{style:se.board,children:Object.values(r).map(T=>t.jsxs("div",{style:se.column,onDragOver:y,onDrop:C=>I(C,T.id),children:[t.jsxs("div",{style:{...se.columnHeader,borderTopColor:T.color},children:[t.jsx("span",{style:se.columnTitle,children:T.title}),t.jsx("span",{style:se.cardCount,children:T.cards.length})]}),t.jsx("div",{style:se.cardList,children:J(T.cards).map(C=>{var A,P,L;return t.jsx("div",{draggable:!0,onDragStart:z=>b(z,C,T.id),style:{...se.card,borderLeftColor:(A=f.find(z=>z.value===C.priority))==null?void 0:A.color,opacity:(a==null?void 0:a.id)===C.id?.5:1},children:c===C.id?t.jsxs("div",{style:se.editForm,children:[t.jsx("input",{type:"text",value:C.title,onChange:z=>W(T.id,C.id,{title:z.target.value}),style:se.editInput,autoFocus:!0}),t.jsx("select",{value:C.priority,onChange:z=>W(T.id,C.id,{priority:z.target.value}),style:se.editSelect,children:f.map(z=>t.jsx("option",{value:z.value,children:z.label},z.value))}),t.jsx("div",{style:se.labelPicker,children:j.map(z=>t.jsx("button",{onClick:()=>q(T.id,C.id,z),style:{...se.labelBtn,background:C.labels.includes(z)?"rgba(99, 102, 241, 0.4)":"rgba(255, 255, 255, 0.1)"},children:z},z))}),t.jsx("button",{onClick:()=>l(null),style:se.saveBtn,children:"Save"})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:se.cardHeader,children:[t.jsx("span",{style:se.cardTitle,children:C.title}),t.jsxs("div",{style:se.cardActions,children:[t.jsx("button",{onClick:()=>l(C.id),style:se.actionBtn,children:"✏️"}),t.jsx("button",{onClick:()=>R(T.id,C.id),style:se.actionBtn,children:"🗑️"})]})]}),C.labels.length>0&&t.jsx("div",{style:se.cardLabels,children:C.labels.map(z=>t.jsx("span",{style:se.cardLabel,children:z},z))}),t.jsx("div",{style:se.cardFooter,children:t.jsx("span",{style:{...se.priorityBadge,background:((P=f.find(z=>z.value===C.priority))==null?void 0:P.color)+"33",color:(L=f.find(z=>z.value===C.priority))==null?void 0:L.color},children:C.priority})})]})},C.id)})}),m===T.id?t.jsxs("div",{style:se.addCardForm,children:[t.jsx("input",{type:"text",placeholder:"Enter card title...",value:x,onChange:C=>g(C.target.value),style:se.addCardInput,autoFocus:!0,onKeyDown:C=>C.key==="Enter"&&O(T.id)}),t.jsx("select",{value:E,onChange:C=>w(C.target.value),style:se.prioritySelect,children:f.map(C=>t.jsx("option",{value:C.value,children:C.label},C.value))}),t.jsxs("div",{style:se.addCardActions,children:[t.jsx("button",{onClick:()=>O(T.id),style:se.addConfirmBtn,children:"Add"}),t.jsx("button",{onClick:()=>h(null),style:se.addCancelBtn,children:"Cancel"})]})]}):t.jsx("button",{onClick:()=>h(T.id),style:se.addCardBtn,children:"+ Add Card"})]},T.id))})]})},se={container:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",borderRadius:"20px",padding:"25px",border:"1px solid rgba(99, 102, 241, 0.3)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.5)",overflowX:"auto"},header:{textAlign:"center",marginBottom:"20px"},title:{fontSize:"28px",fontWeight:"700",background:"linear-gradient(135deg, #6366f1, #a855f7)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},subtitle:{color:"#94a3b8",fontSize:"14px",marginTop:"5px"},statsBar:{display:"flex",justifyContent:"center",gap:"30px",marginBottom:"20px",padding:"15px",background:"rgba(0, 0, 0, 0.3)",borderRadius:"12px"},stat:{textAlign:"center"},statNum:{display:"block",fontSize:"24px",fontWeight:"700",color:"#fff"},statLabel:{fontSize:"12px",color:"#64748b"},filters:{display:"flex",gap:"12px",marginBottom:"20px"},searchInput:{flex:1,background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"10px",padding:"12px 15px",color:"#fff",fontSize:"14px",outline:"none"},filterSelect:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"10px",padding:"12px 15px",color:"#fff",fontSize:"14px",outline:"none",cursor:"pointer"},board:{display:"grid",gridTemplateColumns:"repeat(4, minmax(220px, 1fr))",gap:"15px",minWidth:"max-content"},column:{background:"rgba(0, 0, 0, 0.3)",borderRadius:"12px",padding:"12px",minHeight:"400px",display:"flex",flexDirection:"column"},columnHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px",paddingBottom:"10px",borderTop:"3px solid",paddingTop:"10px"},columnTitle:{color:"#fff",fontSize:"14px",fontWeight:"600"},cardCount:{background:"rgba(255, 255, 255, 0.1)",color:"#94a3b8",padding:"2px 8px",borderRadius:"10px",fontSize:"12px"},cardList:{flex:1,display:"flex",flexDirection:"column",gap:"10px"},card:{background:"rgba(255, 255, 255, 0.05)",borderRadius:"10px",padding:"12px",borderLeft:"3px solid",cursor:"grab",transition:"all 0.2s"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},cardTitle:{color:"#fff",fontSize:"14px",lineHeight:"1.4",flex:1},cardActions:{display:"flex",gap:"4px",opacity:.5,transition:"opacity 0.2s"},actionBtn:{background:"transparent",border:"none",cursor:"pointer",fontSize:"12px",padding:"2px"},cardLabels:{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:"8px"},cardLabel:{background:"rgba(99, 102, 241, 0.3)",color:"#a5b4fc",padding:"2px 8px",borderRadius:"4px",fontSize:"10px"},cardFooter:{display:"flex",justifyContent:"flex-end"},priorityBadge:{padding:"3px 8px",borderRadius:"4px",fontSize:"10px",fontWeight:"600",textTransform:"uppercase"},editForm:{display:"flex",flexDirection:"column",gap:"8px"},editInput:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"6px",padding:"8px",color:"#fff",fontSize:"13px",outline:"none"},editSelect:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"6px",padding:"8px",color:"#fff",fontSize:"12px",outline:"none"},labelPicker:{display:"flex",flexWrap:"wrap",gap:"4px"},labelBtn:{border:"none",padding:"3px 8px",borderRadius:"4px",fontSize:"10px",color:"#fff",cursor:"pointer"},saveBtn:{background:"#6366f1",color:"#fff",border:"none",padding:"8px",borderRadius:"6px",fontSize:"12px",cursor:"pointer"},addCardForm:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"10px"},addCardInput:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"8px",padding:"10px",color:"#fff",fontSize:"13px",outline:"none"},prioritySelect:{background:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(99, 102, 241, 0.3)",borderRadius:"8px",padding:"8px",color:"#fff",fontSize:"12px",outline:"none"},addCardActions:{display:"flex",gap:"8px"},addConfirmBtn:{flex:1,background:"#6366f1",color:"#fff",border:"none",padding:"8px",borderRadius:"6px",fontSize:"12px",cursor:"pointer"},addCancelBtn:{flex:1,background:"rgba(148, 163, 184, 0.2)",color:"#94a3b8",border:"none",padding:"8px",borderRadius:"6px",fontSize:"12px",cursor:"pointer"},addCardBtn:{background:"transparent",border:"2px dashed rgba(99, 102, 241, 0.3)",borderRadius:"8px",padding:"10px",color:"#64748b",fontSize:"13px",cursor:"pointer",marginTop:"10px",transition:"all 0.2s"}},Vx=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),t.jsx("polyline",{points:"16 17 21 12 16 7"}),t.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),bd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),vd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"9",cy:"7",r:"4"}),t.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),t.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Hx=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),t.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Ux=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"8"}),t.jsx("path",{d:"m21 21-4.35-4.35"})]}),yd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("polyline",{points:"12 6 12 12 16 14"})]}),jd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),t.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Gx=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"9 18 15 12 9 6"})}),Yx=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),t.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),t.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),wd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),t.jsx("polyline",{points:"9 12 11 14 15 10"})]}),Qx=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),As=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]});function Kx(){var Rl;const{user:e,logout:r,loading:n}=kr(),{t:a}=Nr(),i=_t(),[s,o]=p.useState("overview"),[c,l]=p.useState(!1),[m,h]=p.useState(!1),[x,g]=p.useState(""),[E,w]=p.useState(!1),[v,N]=p.useState(!1),[d,u]=p.useState(new Date),[f,j]=p.useState(""),[b,y]=p.useState({city:"Memuat...",country:""}),[I,O]=p.useState(navigator.onLine),[R,W]=p.useState([{id:1,text:"Review security vulnerabilities",status:"in-progress",priority:"critical"},{id:2,text:"Update firewall rules",status:"not-started",priority:"high"},{id:3,text:"Team meeting preparation",status:"done",priority:"medium"},{id:4,text:"Read documentation",status:"not-started",priority:"low"}]),[q,J]=p.useState(""),[_,$]=p.useState(null),[T]=p.useState([{id:1,title:"Security Audit Meeting",datetime:new Date(Date.now()+2*60*60*1e3),type:"meeting"},{id:2,title:"Cybersecurity Workshop",datetime:new Date(Date.now()+5*60*60*1e3),type:"class"},{id:3,title:"Project Deadline",datetime:new Date(Date.now()+24*60*60*1e3),type:"deadline"}]),[C,A]=p.useState({days:0,hours:0,minutes:0,seconds:0}),[P]=p.useState({totalFocus:185,breakTime:35,dailyStats:[45,60,30,75,50,65,40]}),[L]=p.useState([{id:1,name:"Security Audit System",progress:75,status:"on-track",eta:new Date(Date.now()+3*24*60*60*1e3),color:"#6366f1",subtasks:[{id:1,name:"Vulnerability scanning",done:!0},{id:2,name:"Penetration testing",done:!0},{id:3,name:"Report generation",done:!1},{id:4,name:"Client review",done:!1}]},{id:2,name:"Firewall Configuration",progress:45,status:"delay",eta:new Date(Date.now()+1.5*24*60*60*1e3),color:"#f59e0b",subtasks:[{id:1,name:"Rule analysis",done:!0},{id:2,name:"New rules implementation",done:!1},{id:3,name:"Testing",done:!1}]},{id:3,name:"API Authentication",progress:20,status:"overdue",eta:new Date(Date.now()-1*24*60*60*1e3),color:"#ef4444",subtasks:[{id:1,name:"OAuth2 setup",done:!0},{id:2,name:"JWT implementation",done:!1},{id:3,name:"Session handling",done:!1},{id:4,name:"Testing & QA",done:!1}]}]),[z,V]=p.useState(null),[D]=p.useState([{id:1,name:"Submit Security Report",project:"Audit",deadline:new Date(Date.now()+18*60*60*1e3),progress:85},{id:2,name:"Deploy Hotfix",project:"Backend",deadline:new Date(Date.now()+2.5*24*60*60*1e3),progress:60},{id:3,name:"Client Presentation",project:"Sales",deadline:new Date(Date.now()+5*24*60*60*1e3),progress:40},{id:4,name:"Code Review",project:"Dev",deadline:new Date(Date.now()+8*24*60*60*1e3),progress:25}].sort((S,Q)=>S.deadline-Q.deadline)),[B,F]=p.useState([{id:1,type:"schedule",text:"Team standup in 30 minutes",time:"09:30",dismissed:!1},{id:2,type:"health",text:"Time to drink water 💧",time:"Every 2 hours",dismissed:!1},{id:3,type:"work",text:"3 pending code reviews",time:"Today",dismissed:!1},{id:4,type:"ai",text:"Based on your pattern, consider taking a break after 2 more tasks",time:"Suggestion",dismissed:!1}]),[k,H]=p.useState([{id:1,text:"Check server logs for errors",color:"#6366f1",pinned:!0},{id:2,text:`**Meeting notes:**
- Discuss API changes
- Review budget`,color:"#10b981",pinned:!1},{id:3,text:"Call client tomorrow at 10 AM",color:"#f59e0b",pinned:!1}]),[U,Y]=p.useState(""),[ae,ne]=p.useState("#6366f1"),pe=["#6366f1","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"],[ce,fe]=p.useState(null),[ke,M]=p.useState(""),[te]=p.useState([{day:"Sen",mood:4,emoji:"😄"},{day:"Sel",mood:3,emoji:"🙂"},{day:"Rab",mood:2,emoji:"😐"},{day:"Kam",mood:4,emoji:"😄"},{day:"Jum",mood:3,emoji:"🙂"},{day:"Sab",mood:5,emoji:"😄"},{day:"Min",mood:null,emoji:null}]),de=[{emoji:"😄",label:"Sangat Baik",value:5},{emoji:"🙂",label:"Baik",value:4},{emoji:"😐",label:"Biasa",value:3},{emoji:"😟",label:"Kurang",value:2},{emoji:"😢",label:"Sedih",value:1},{emoji:"😡",label:"Marah",value:0}],me=(e==null?void 0:e.role)==="admin";p.useEffect(()=>{const S=setInterval(()=>{u(new Date)},1e3),Q=Intl.DateTimeFormat().resolvedOptions().timeZone;return j(Q),()=>clearInterval(S)},[]),p.useEffect(()=>{"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(async S=>{var Q,he,Ie,Re,St,Wr;try{const{latitude:Sn,longitude:Cn}=S.coords,Xt=await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${Sn}&lon=${Cn}&format=json`)).json();y({city:((Q=Xt.address)==null?void 0:Q.city)||((he=Xt.address)==null?void 0:he.town)||((Ie=Xt.address)==null?void 0:Ie.village)||"Unknown",country:((Re=Xt.address)==null?void 0:Re.country)||"",district:((St=Xt.address)==null?void 0:St.suburb)||((Wr=Xt.address)==null?void 0:Wr.district)||""})}catch{y({city:"Indonesia",country:"ID"})}},S=>{console.log("Geolocation error:",S),y({city:"Indonesia",country:"ID"})},{enableHighAccuracy:!0,timeout:1e4})},[]),p.useEffect(()=>{const S=()=>O(!0),Q=()=>O(!1);return window.addEventListener("online",S),window.addEventListener("offline",Q),()=>{window.removeEventListener("online",S),window.removeEventListener("offline",Q)}},[]),p.useEffect(()=>{const S=Q=>{(Q.ctrlKey||Q.metaKey)&&Q.key==="k"&&(Q.preventDefault(),N(he=>!he))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[]),p.useEffect(()=>{const S=()=>{if(T.length===0)return;const he=T[0],Ie=new Date,Re=he.datetime-Ie;if(Re>0){const St=Math.floor(Re/864e5),Wr=Math.floor(Re%(1e3*60*60*24)/(1e3*60*60)),Sn=Math.floor(Re%(1e3*60*60)/(1e3*60)),Cn=Math.floor(Re%(1e3*60)/1e3);A({days:St,hours:Wr,minutes:Sn,seconds:Cn})}};S();const Q=setInterval(S,1e3);return()=>clearInterval(Q)},[T]);const K=()=>{if(!q.trim())return;const S={id:Date.now(),text:q.trim(),status:"not-started",priority:"medium"};W([...R,S]),J("")},Z=S=>{W(R.map(Q=>{if(Q.id===S){const he=["not-started","in-progress","done"],Re=(he.indexOf(Q.status)+1)%he.length;return{...Q,status:he[Re]}}return Q}))},be=S=>{W(R.filter(Q=>Q.id!==S))},ie=(S,Q)=>{W(R.map(he=>he.id===S?{...he,priority:Q}:he))},ve=(S,Q)=>{$(Q),S.dataTransfer.effectAllowed="move"},ye=S=>{S.preventDefault(),S.dataTransfer.dropEffect="move"},st=(S,Q)=>{if(S.preventDefault(),!_||_.id===Q.id)return;const he=[...R],Ie=he.findIndex(St=>St.id===_.id),Re=he.findIndex(St=>St.id===Q.id);he.splice(Ie,1),he.splice(Re,0,_),W(he),$(null)},wt=()=>{$(null)},ot=S=>{const Q=Math.floor(S/60),he=S%60;return Q>0?`${Q}h ${he}m`:`${he}m`},Na=S=>{if(!S||S.length===0)return"";const Q=Math.max(...S),he=Math.min(...S),Ie=Q-he||1,Re=100,St=30,Wr=Re/(S.length-1);return`M${S.map((Cn,_l)=>{const Xt=_l*Wr,km=St-(Cn-he)/Ie*St;return`${Xt},${km}`}).join(" L")}`},Ki=S=>{const Ie=(S-new Date)/(1e3*60*60);return Ie<24?{bg:"rgba(239, 68, 68, 0.2)",border:"#ef4444",text:"#f87171",label:"Kritis"}:Ie<72?{bg:"rgba(249, 115, 22, 0.2)",border:"#f97316",text:"#fb923c",label:"Segera"}:Ie<168?{bg:"rgba(234, 179, 8, 0.2)",border:"#eab308",text:"#fde047",label:"Perhatikan"}:{bg:"rgba(34, 197, 94, 0.2)",border:"#22c55e",text:"#4ade80",label:"Aman"}},Jt=S=>{const he=S-new Date;if(he<0)return"Overdue";const Ie=Math.floor(he/(1e3*60*60*24)),Re=Math.floor(he%(1e3*60*60*24)/(1e3*60*60));return Ie>0?`${Ie}d ${Re}h`:`${Re}h`},qi=S=>{F(B.map(Q=>Q.id===S?{...Q,dismissed:!0}:Q))},Sa=()=>{if(!U.trim())return;const S={id:Date.now(),text:U.trim(),color:ae,pinned:!1};H([...k,S]),Y("")},Ji=S=>{H(k.map(Q=>Q.id===S?{...Q,pinned:!Q.pinned}:Q))},Xi=S=>{H(k.filter(Q=>Q.id!==S))},Zi=S=>{fe(S)},Nn=()=>ce?{5:{text:"Luar biasa! Energi positif Anda tinggi. Waktu yang tepat untuk menyelesaikan tugas yang menantang.",activity:"🎯 Fokus pada proyek besar"},4:{text:"Mood bagus! Pertahankan dengan aktivitas produktif namun seimbang.",activity:"📚 Belajar skill baru"},3:{text:"Hari biasa saja. Cobalah aktivitas kecil yang menyenangkan.",activity:"🎵 Dengarkan musik favorit"},2:{text:"Sepertinya kurang semangat. Istirahat sebentar mungkin membantu.",activity:"🚶 Jalan-jalan sebentar"},1:{text:"Sedang merasa sedih? Tidak apa-apa. Luangkan waktu untuk diri sendiri.",activity:"☕ Break dengan secangkir teh"},0:{text:"Marah bisa melelahkan. Coba tarik napas dalam dan lepaskan perlahan.",activity:"🧘 Latihan pernapasan 5 menit"}}[ce.value]:null,es=async()=>{try{await r(),i("/login")}catch(S){console.error("Logout failed:",S)}},Or=p.useCallback(S=>{o(S),h(!1)},[]),X=S=>S.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),Se=S=>S.toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),kt=[{label:"Proyek Aktif",value:"12",icon:Qx,color:"#6366f1"},{label:"Keamanan",value:"98%",icon:wd,color:"#10b981"},{label:"Pengaturan",value:"5",icon:As,color:"#f59e0b"}],Nt=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16"}),t.jsx("path",{d:"M8.5 14h7M9 6v.5a2.5 2.5 0 1 0 5 0V6"}),t.jsx("rect",{x:"9",y:"5",width:"6",height:"2"}),t.jsx("path",{d:"M12 8v2"}),t.jsx("path",{d:"M10 10h4l2 4H8l2-4z"})]}),nm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"4",y1:"4",x2:"10",y2:"10"}),t.jsx("line",{x1:"10",y1:"4",x2:"4",y2:"10"}),t.jsx("circle",{cx:"17",cy:"7",r:"3",fill:"none"}),t.jsx("line",{x1:"4",y1:"14",x2:"10",y2:"20"}),t.jsx("line",{x1:"10",y1:"14",x2:"4",y2:"20"}),t.jsx("circle",{cx:"17",cy:"17",r:"3",fill:"none"})]}),am=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"4",width:"8",height:"10",rx:"1"}),t.jsx("rect",{x:"14",y:"4",width:"8",height:"10",rx:"1"}),t.jsx("rect",{x:"2",y:"16",width:"8",height:"4",rx:"1"}),t.jsx("rect",{x:"14",y:"16",width:"8",height:"4",rx:"1"})]}),im=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),t.jsx("path",{d:"M6 9l3 3-3 3"}),t.jsx("line",{x1:"12",y1:"15",x2:"18",y2:"15"})]}),sm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M9 11l3 3L22 4"}),t.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),om=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})}),lm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),t.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),cm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"21 8 21 21 3 21 3 8"}),t.jsx("rect",{x:"1",y:"3",width:"22",height:"5"}),t.jsx("line",{x1:"10",y1:"12",x2:"14",y2:"12"})]}),dm=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),um=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),t.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),t.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]}),pm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),t.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),mm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("polyline",{points:"12 6 12 12 16 14"})]}),fm=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"})}),hm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M12 8a4 4 0 0 1 4 4c0 2.5-2 4-4 6-2-2-4-3.5-4-6a4 4 0 0 1 4-4z"}),t.jsx("path",{d:"M12 8V4"}),t.jsx("circle",{cx:"12",cy:"12",r:"1"})]}),gm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"6",height:"6"}),t.jsx("rect",{x:"9",y:"3",width:"6",height:"6"}),t.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),t.jsx("rect",{x:"9",y:"15",width:"6",height:"6"})]}),xm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),t.jsx("rect",{x:"6",y:"6",width:"5",height:"5",rx:"1"}),t.jsx("rect",{x:"13",y:"6",width:"5",height:"5",rx:"1"}),t.jsx("rect",{x:"6",y:"13",width:"5",height:"5",rx:"1"}),t.jsx("rect",{x:"13",y:"13",width:"5",height:"5",rx:"1"})]}),bm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),t.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),t.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10"}),t.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10"}),t.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10"}),t.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14"}),t.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14"}),t.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14"}),t.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18"}),t.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18"}),t.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18"})]}),vm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"13",r:"8"}),t.jsx("path",{d:"M12 9v4l2 2"}),t.jsx("path",{d:"M9 2h6"}),t.jsx("path",{d:"M12 2v3"})]}),ym=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),t.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),jm=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"5",height:"18",rx:"1"}),t.jsx("rect",{x:"10",y:"3",width:"5",height:"12",rx:"1"}),t.jsx("rect",{x:"17",y:"3",width:"5",height:"8",rx:"1"})]}),Il=[{id:"overview",label:a("overview"),icon:Hx},{id:"tasks",label:a("taskManager"),icon:sm},{id:"kanban",label:"Kanban",icon:jm},{id:"pomodoro",label:a("pomodoro"),icon:mm},{id:"stopwatch",label:"Stopwatch",icon:vm},{id:"habits",label:"Habits",icon:ym},{id:"analytics",label:a("analytics"),icon:um},{id:"activity",label:a("activityLogs"),icon:dm},{id:"weather",label:a("weather"),icon:fm},{id:"tools",label:a("miniTools"),icon:om},{id:"calculator",label:"Calculator",icon:bm},{id:"links",label:a("linkManager"),icon:lm},{id:"archive",label:a("archive"),icon:cm},{id:"chess",label:a("chessGame"),icon:Nt},{id:"tictactoe",label:a("ticTacToe"),icon:nm},{id:"memory",label:a("memoryGame"),icon:am},{id:"snake",label:a("snakeGame"),icon:hm},{id:"tetris",label:"Tetris",icon:gm},{id:"game2048",label:"2048",icon:xm},{id:"terminal",label:a("hackerTerminal"),icon:im},{id:"support",label:a("supportCenter"),icon:pm},{id:"settings",label:a("settings"),icon:As},...me?[{id:"users",label:a("userManagement"),icon:vd}]:[]],wm=()=>{const S=[{label:"Dashboard",id:null}],Q=Il.find(he=>he.id===s);return Q&&S.push({label:Q.label,id:s}),S};return t.jsxs("div",{className:"dashboard-layout",children:[t.jsx("div",{className:"animated-bg"}),t.jsx("div",{className:"grid-overlay"}),t.jsxs("div",{className:"orbs",children:[t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"})]}),t.jsx("div",{className:"particles",children:[...Array(12)].map((S,Q)=>t.jsx("div",{className:"particle"},Q))}),t.jsx("div",{className:`sidebar-overlay ${m?"active":""}`,onClick:()=>h(!1)}),t.jsxs("aside",{className:`dashboard-sidebar ${c?"collapsed":""} ${m?"mobile-open":""}`,children:[t.jsxs("div",{className:"sidebar-brand",children:[t.jsx("div",{className:"brand-logo",children:t.jsx("img",{src:"/logo.png",alt:"Lutfi-Lab.ID",style:{width:"28px",height:"28px",objectFit:"contain"}})}),t.jsxs("span",{className:"brand-text",children:["Lutfi-Lab",t.jsx("span",{className:"text-gradient",children:".ID"})]})]}),t.jsx("nav",{className:"sidebar-nav",children:Il.map((S,Q)=>t.jsxs("button",{className:`nav-item ${s===S.id?"active":""}`,onClick:()=>Or(S.id),style:{animationDelay:`${Q*.1}s`},children:[t.jsx("div",{className:"nav-icon",children:t.jsx(S.icon,{})}),t.jsx("span",{className:"nav-label",children:S.label}),s===S.id&&t.jsx("div",{className:"nav-indicator"})]},S.id))}),t.jsxs("div",{className:"sidebar-info",children:[t.jsxs("div",{className:"info-item clock",children:[t.jsx(yd,{}),t.jsxs("div",{className:"info-content",children:[t.jsx("span",{className:"info-value",children:X(d)}),t.jsx("span",{className:"info-label",children:f})]})]}),t.jsxs("div",{className:"info-item location",children:[t.jsx(jd,{}),t.jsxs("div",{className:"info-content",children:[t.jsx("span",{className:"info-value",children:b.city}),t.jsx("span",{className:"info-label",children:b.district||b.country})]})]})]}),t.jsxs("div",{className:"sidebar-footer",children:[t.jsxs("div",{className:"user-mini",children:[t.jsxs("div",{className:"user-avatar-mini",children:[e!=null&&e.avatar?t.jsx("img",{src:e.avatar,alt:e.name}):t.jsx(bd,{}),t.jsx("div",{className:`status-dot ${I?"online":"offline"}`})]}),t.jsxs("div",{className:"user-mini-info",children:[t.jsx("span",{className:"user-mini-name",children:(e==null?void 0:e.name)||"User"}),t.jsx("span",{className:"user-mini-role",children:(e==null?void 0:e.role)||"user"})]})]}),t.jsx("button",{className:"logout-btn",onClick:es,disabled:n,title:"Logout",children:t.jsx(Vx,{})})]})]}),t.jsxs("main",{className:`dashboard-main ${c?"expanded":""}`,children:[t.jsxs("header",{className:"dashboard-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsx("button",{className:"menu-toggle",onClick:()=>{window.innerWidth<=768?h(!m):l(!c)},children:t.jsx(Yx,{})}),t.jsx("nav",{className:"breadcrumbs",children:wm().map((S,Q,he)=>t.jsxs("span",{className:"breadcrumb-item",children:[t.jsx("span",{className:`breadcrumb-link ${Q===he.length-1?"active":""}`,onClick:()=>S.id&&Or(S.id),children:S.label}),Q<he.length-1&&t.jsx(Gx,{})]},Q))})]}),t.jsx("div",{className:"header-center",children:t.jsxs("div",{className:`global-search ${E?"focused":""}`,children:[t.jsx(Ux,{}),t.jsx("input",{type:"text",placeholder:a("searchPlaceholder"),value:x,onChange:S=>g(S.target.value),onFocus:()=>w(!0),onBlur:()=>w(!1)}),t.jsx("kbd",{className:"search-shortcut",children:"⌘K"})]})}),t.jsxs("div",{className:"header-right",children:[t.jsx(Ix,{compact:!0}),t.jsx(bx,{}),t.jsxs("div",{className:`status-indicator ${I?"online":"offline"}`,children:[t.jsx("div",{className:"status-dot-large"}),t.jsx("span",{children:a(I?"online":"offline")})]}),t.jsxs("div",{className:"date-display",children:[t.jsx("span",{className:"time-large",children:X(d)}),t.jsx("span",{className:"date-text",children:Se(d)})]})]})]}),t.jsxs("div",{className:"page-content",children:[s==="overview"&&t.jsxs("div",{className:"overview-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:[a("welcome"),", ",((Rl=e==null?void 0:e.name)==null?void 0:Rl.split(" ")[0])||"User","! 👋"]}),t.jsx("p",{children:a("overviewDesc")})]}),t.jsx("div",{className:"dashboard-stats-grid",children:kt.map((S,Q)=>t.jsxs("div",{className:"stat-card",style:{animationDelay:`${Q*.15}s`},children:[t.jsx("div",{className:"stat-icon",style:{background:`${S.color}20`,color:S.color},children:t.jsx(S.icon,{})}),t.jsxs("div",{className:"stat-content",children:[t.jsx("span",{className:"stat-value",children:S.value}),t.jsx("span",{className:"stat-label",children:S.label})]})]},Q))}),t.jsxs("div",{className:"daily-overview-grid",children:[t.jsxs("div",{className:"overview-card todo-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("h3",{children:["📋 ",a("todoToday")]}),t.jsxs("span",{className:"task-count",children:[R.filter(S=>S.status!=="done").length," ",a("remaining")]})]}),t.jsxs("div",{className:"add-todo",children:[t.jsx("input",{type:"text",placeholder:a("addNewTask"),value:q,onChange:S=>J(S.target.value),onKeyPress:S=>S.key==="Enter"&&K()}),t.jsx("button",{onClick:K,children:"+"})]}),t.jsx("div",{className:"todo-list",children:R.map(S=>t.jsxs("div",{className:`todo-item ${S.status} ${(_==null?void 0:_.id)===S.id?"dragging":""}`,draggable:!0,onDragStart:Q=>ve(Q,S),onDragOver:ye,onDrop:Q=>st(Q,S),onDragEnd:wt,children:[t.jsx("div",{className:"todo-drag-handle",children:"⋮⋮"}),t.jsx("button",{className:`todo-checkbox ${S.status}`,onClick:()=>Z(S.id),children:S.status==="done"?"✓":S.status==="in-progress"?"◐":"○"}),t.jsx("span",{className:"todo-text",children:S.text}),t.jsxs("select",{className:`priority-badge ${S.priority}`,value:S.priority,onChange:Q=>ie(S.id,Q.target.value),children:[t.jsx("option",{value:"low",children:"Low"}),t.jsx("option",{value:"medium",children:"Medium"}),t.jsx("option",{value:"high",children:"High"}),t.jsx("option",{value:"critical",children:"Critical"})]}),t.jsx("button",{className:"todo-delete",onClick:()=>be(S.id),children:"×"})]},S.id))})]}),t.jsxs("div",{className:"overview-card events-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("h3",{children:["📅 ",a("eventSchedule")]}),t.jsxs("span",{className:"event-count",children:[T.length," ",a("event")]})]}),T.length>0&&t.jsxs("div",{className:"next-event",children:[t.jsxs("div",{className:"next-event-header",children:[t.jsx("span",{className:"next-label",children:a("nextEvent")}),t.jsxs("span",{className:`event-type ${T[0].type}`,children:[T[0].type==="meeting"?"👥":T[0].type==="class"?"📚":"⏰",T[0].type]})]}),t.jsx("h4",{className:"event-title",children:T[0].title}),t.jsxs("div",{className:"countdown-timer",children:[t.jsxs("div",{className:"countdown-unit",children:[t.jsx("span",{className:"countdown-value",children:C.days}),t.jsx("span",{className:"countdown-label",children:a("days")})]}),t.jsx("span",{className:"countdown-separator",children:":"}),t.jsxs("div",{className:"countdown-unit",children:[t.jsx("span",{className:"countdown-value",children:String(C.hours).padStart(2,"0")}),t.jsx("span",{className:"countdown-label",children:a("hours")})]}),t.jsx("span",{className:"countdown-separator",children:":"}),t.jsxs("div",{className:"countdown-unit",children:[t.jsx("span",{className:"countdown-value",children:String(C.minutes).padStart(2,"0")}),t.jsx("span",{className:"countdown-label",children:a("minutes")})]}),t.jsx("span",{className:"countdown-separator",children:":"}),t.jsxs("div",{className:"countdown-unit",children:[t.jsx("span",{className:"countdown-value",children:String(C.seconds).padStart(2,"0")}),t.jsx("span",{className:"countdown-label",children:a("seconds")})]})]})]}),t.jsx("div",{className:"events-list",children:T.slice(1).map(S=>t.jsxs("div",{className:`event-item ${S.type}`,children:[t.jsx("span",{className:"event-icon",children:S.type==="meeting"?"👥":S.type==="class"?"📚":"⏰"}),t.jsxs("div",{className:"event-info",children:[t.jsx("span",{className:"event-name",children:S.title}),t.jsx("span",{className:"event-time",children:S.datetime.toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})]})]},S.id))})]}),t.jsxs("div",{className:"overview-card focus-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"🎯 Focus Summary"}),t.jsx("span",{className:"focus-day",children:"Hari Ini"})]}),t.jsxs("div",{className:"focus-stats",children:[t.jsxs("div",{className:"focus-stat main",children:[t.jsx("div",{className:"focus-icon pomodoro",children:"🍅"}),t.jsxs("div",{className:"focus-info",children:[t.jsx("span",{className:"focus-value",children:ot(P.totalFocus)}),t.jsx("span",{className:"focus-label",children:"Deep Work"})]})]}),t.jsxs("div",{className:"focus-stat",children:[t.jsx("div",{className:"focus-icon break",children:"☕"}),t.jsxs("div",{className:"focus-info",children:[t.jsx("span",{className:"focus-value",children:ot(P.breakTime)}),t.jsx("span",{className:"focus-label",children:"Break Time"})]})]})]}),t.jsxs("div",{className:"sparkline-container",children:[t.jsx("span",{className:"sparkline-label",children:"Aktivitas 7 Hari Terakhir"}),t.jsxs("svg",{className:"sparkline",viewBox:"0 0 100 30",preserveAspectRatio:"none",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"sparklineGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#6366f1",stopOpacity:"0.3"}),t.jsx("stop",{offset:"100%",stopColor:"#6366f1",stopOpacity:"0"})]})}),t.jsx("path",{d:Na(P.dailyStats),fill:"none",stroke:"#6366f1",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:`${Na(P.dailyStats)} L100,30 L0,30 Z`,fill:"url(#sparklineGradient)"})]}),t.jsx("div",{className:"sparkline-days",children:["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map((S,Q)=>t.jsx("span",{className:Q===6?"active":"",children:S},S))})]})]})]}),t.jsxs("div",{className:"extended-features-grid",children:[t.jsxs("div",{className:"extended-card progress-monitoring-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"📊 Progress Task"}),t.jsxs("span",{className:"project-count",children:[L.length," proyek"]})]}),t.jsx("div",{className:"projects-list",children:L.map(S=>t.jsxs("div",{className:`project-item ${S.status}`,children:[t.jsxs("div",{className:"project-header",onClick:()=>V(z===S.id?null:S.id),children:[t.jsxs("div",{className:"project-info",children:[t.jsxs("div",{className:"circular-progress",style:{"--progress":S.progress,"--color":S.color},children:[t.jsxs("svg",{viewBox:"0 0 36 36",children:[t.jsx("circle",{cx:"18",cy:"18",r:"16",fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"3"}),t.jsx("circle",{cx:"18",cy:"18",r:"16",fill:"none",stroke:S.color,strokeWidth:"3",strokeDasharray:`${S.progress}, 100`,strokeLinecap:"round",transform:"rotate(-90 18 18)"})]}),t.jsxs("span",{className:"progress-text",children:[S.progress,"%"]})]}),t.jsxs("div",{className:"project-details",children:[t.jsx("span",{className:"project-name",children:S.name}),t.jsxs("div",{className:"project-meta",children:[t.jsx("span",{className:`status-badge ${S.status}`,children:S.status==="on-track"?"✓ On Track":S.status==="delay"?"⚠ Delay":"✗ Overdue"}),t.jsxs("span",{className:"eta",children:["ETA: ",Jt(S.eta)]})]})]})]}),t.jsx("span",{className:"expand-icon",children:z===S.id?"▲":"▼"})]}),z===S.id&&t.jsx("div",{className:"subtasks-list",children:S.subtasks.map(Q=>t.jsxs("div",{className:`subtask-item ${Q.done?"done":""}`,children:[t.jsx("span",{className:"subtask-check",children:Q.done?"✓":"○"}),t.jsx("span",{className:"subtask-name",children:Q.name})]},Q.id))})]},S.id))})]}),t.jsxs("div",{className:"extended-card deadline-alert-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"⏳ Deadline Alert"}),t.jsxs("span",{className:"alert-count",children:[D.filter(S=>S.deadline-new Date<72*60*60*1e3).length," urgent"]})]}),t.jsx("div",{className:"deadlines-list",children:D.map(S=>{const Q=Ki(S.deadline),he=S.deadline-new Date,Ie=Math.floor(he/(1e3*60*60)),Re=Math.floor(Ie/24);return t.jsxs("div",{className:"deadline-item",style:{background:Q.bg,borderColor:Q.border},children:[t.jsxs("div",{className:"deadline-header",children:[t.jsx("span",{className:"deadline-name",children:S.name}),t.jsx("span",{className:"deadline-tag",style:{background:Q.bg,color:Q.text},children:S.project})]}),t.jsxs("div",{className:"deadline-footer",children:[t.jsxs("div",{className:"deadline-progress",children:[t.jsx("div",{className:"mini-progress-bar",children:t.jsx("div",{className:"mini-progress-fill",style:{width:`${S.progress}%`,background:Q.border}})}),t.jsxs("span",{className:"progress-percent",children:[S.progress,"%"]})]}),t.jsx("span",{className:"deadline-countdown",style:{color:Q.text},children:Re>0?`${Re}d ${Ie%24}h`:`${Ie}h`})]})]},S.id)})})]}),t.jsxs("div",{className:"extended-card smart-reminder-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"🔔 Smart Reminder"}),t.jsxs("span",{className:"reminder-count",children:[B.filter(S=>!S.dismissed).length," aktif"]})]}),t.jsx("div",{className:"reminders-list",children:B.filter(S=>!S.dismissed).map(S=>t.jsxs("div",{className:`reminder-item ${S.type}`,children:[t.jsx("span",{className:"reminder-icon",children:S.type==="schedule"?"📅":S.type==="health"?"💧":S.type==="work"?"📋":"🤖"}),t.jsxs("div",{className:"reminder-content",children:[t.jsx("span",{className:"reminder-text",children:S.text}),t.jsx("span",{className:"reminder-time",children:S.time})]}),t.jsx("button",{className:"dismiss-btn",onClick:()=>qi(S.id),children:"×"})]},S.id))})]}),t.jsxs("div",{className:"extended-card quick-notes-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"📝 Quick Notes"}),t.jsxs("span",{className:"notes-count",children:[k.length," note"]})]}),t.jsxs("div",{className:"add-note",children:[t.jsx("input",{type:"text",placeholder:"Tambah catatan...",value:U,onChange:S=>Y(S.target.value),onKeyPress:S=>S.key==="Enter"&&Sa()}),t.jsx("div",{className:"note-color-picker",children:pe.map(S=>t.jsx("button",{className:`color-btn ${ae===S?"active":""}`,style:{background:S},onClick:()=>ne(S)},S))}),t.jsx("button",{className:"add-note-btn",onClick:Sa,children:"+"})]}),t.jsx("div",{className:"notes-grid",children:[...k].sort((S,Q)=>Q.pinned-S.pinned).map(S=>t.jsxs("div",{className:`note-card ${S.pinned?"pinned":""}`,style:{borderColor:S.color},children:[t.jsxs("div",{className:"note-actions",children:[t.jsx("button",{className:`pin-btn ${S.pinned?"active":""}`,onClick:()=>Ji(S.id),children:"📌"}),t.jsx("button",{className:"delete-note-btn",onClick:()=>Xi(S.id),children:"×"})]}),t.jsx("p",{className:"note-text",children:S.text.split(`
`).map((Q,he)=>t.jsxs("span",{children:[Q,t.jsx("br",{})]},he))}),t.jsx("div",{className:"note-indicator",style:{background:S.color}})]},S.id))})]}),t.jsxs("div",{className:"extended-card mood-tracker-card",children:[t.jsxs("div",{className:"card-header",children:[t.jsx("h3",{children:"❤️ Mood Tracker"}),t.jsx("span",{className:"mood-date",children:"Hari Ini"})]}),t.jsxs("div",{className:"mood-selector",children:[t.jsx("span",{className:"mood-question",children:"Bagaimana perasaan Anda?"}),t.jsx("div",{className:"mood-emojis",children:de.map(S=>t.jsx("button",{className:`mood-emoji ${(ce==null?void 0:ce.value)===S.value?"selected":""}`,onClick:()=>Zi(S),title:S.label,children:S.emoji},S.value))})]}),t.jsx("input",{type:"text",className:"mood-note-input",placeholder:"Apa yang ada di pikiran Anda? (opsional)",value:ke,onChange:S=>M(S.target.value)}),ce&&Nn()&&t.jsxs("div",{className:"ai-insight",children:[t.jsx("div",{className:"insight-header",children:t.jsx("span",{className:"ai-badge",children:"🤖 AI Insight"})}),t.jsx("p",{className:"insight-text",children:Nn().text}),t.jsxs("div",{className:"suggested-activity",children:[t.jsx("span",{className:"activity-label",children:"Aktivitas yang disarankan:"}),t.jsx("span",{className:"activity-value",children:Nn().activity})]})]}),t.jsxs("div",{className:"mood-chart",children:[t.jsx("span",{className:"chart-label",children:"Mood Minggu Ini"}),t.jsx("div",{className:"mood-bars",children:te.map((S,Q)=>t.jsxs("div",{className:"mood-bar-container",children:[t.jsx("div",{className:"mood-bar",style:{height:S.mood?`${S.mood/5*100}%`:"0%",background:S.mood?S.mood>=4?"#10b981":S.mood>=3?"#f59e0b":"#ef4444":"transparent"},children:S.emoji&&t.jsx("span",{className:"bar-emoji",children:S.emoji})}),t.jsx("span",{className:"bar-day",children:S.day})]},Q))})]})]})]}),t.jsxs("div",{className:"quick-actions-section",children:[t.jsx("h3",{children:"Aksi Cepat"}),t.jsxs("div",{className:"quick-action-buttons",children:[t.jsxs("button",{className:"action-btn",children:[t.jsx(wd,{}),t.jsx("span",{children:"Cek Keamanan"})]}),t.jsxs("button",{className:"action-btn",children:[t.jsx(As,{}),t.jsx("span",{children:"Pengaturan"})]}),me&&t.jsxs("button",{className:"action-btn admin",onClick:()=>o("users"),children:[t.jsx(vd,{}),t.jsx("span",{children:"Kelola User"})]})]})]}),t.jsxs("div",{className:"user-info-card",children:[t.jsx("div",{className:"user-avatar-large",children:e!=null&&e.avatar?t.jsx("img",{src:e.avatar,alt:e.name}):t.jsx(bd,{})}),t.jsxs("div",{className:"user-details",children:[t.jsx("h2",{children:(e==null?void 0:e.name)||"User"}),t.jsx("p",{className:"user-email",children:(e==null?void 0:e.email)||"user@example.com"}),t.jsxs("div",{className:"user-badges",children:[t.jsx("span",{className:`badge role-${(e==null?void 0:e.role)||"user"}`,children:(e==null?void 0:e.role)||"user"}),(e==null?void 0:e.isVerified)&&t.jsx("span",{className:"badge verified",children:"Verified"})]})]}),t.jsxs("div",{className:"user-location-info",children:[t.jsxs("div",{className:"location-item",children:[t.jsx(jd,{}),t.jsxs("span",{children:[b.city,", ",b.country]})]}),t.jsxs("div",{className:"location-item",children:[t.jsx(yd,{}),t.jsx("span",{children:f})]})]})]})]}),s==="chess"&&t.jsxs("div",{className:"chess-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:"♟️ Chess vs AI"}),t.jsx("p",{children:"Main catur melawan AI yang cerdas!"})]}),t.jsx(Mg,{})]}),s==="tasks"&&t.jsx("div",{className:"tasks-content animate-in",children:t.jsx(hx,{})}),s==="analytics"&&t.jsxs("div",{className:"analytics-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["📊 ",a("analytics")]}),t.jsx("p",{children:a("analyticsDesc")})]}),t.jsx(Px,{})]}),s==="activity"&&t.jsxs("div",{className:"activity-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["📋 ",a("activityLogs")]}),t.jsx("p",{children:a("activityLogsDesc")})]}),t.jsx(Mx,{})]}),s==="pomodoro"&&t.jsxs("div",{className:"pomodoro-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["⏱️ ",a("pomodoro")]}),t.jsx("p",{children:a("pomodoroDesc")})]}),t.jsx(Dx,{})]}),s==="weather"&&t.jsxs("div",{className:"weather-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["🌤️ ",a("weather")]}),t.jsx("p",{children:a("weatherDesc")})]}),t.jsx(Bx,{})]}),s==="tools"&&t.jsx("div",{className:"tools-content animate-in",children:t.jsx(vx,{})}),s==="links"&&t.jsx("div",{className:"links-content animate-in",children:t.jsx(yx,{})}),s==="archive"&&t.jsx("div",{className:"archive-content animate-in",children:t.jsx(jx,{})}),s==="users"&&me&&t.jsxs("div",{className:"users-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:a("userManagement")}),t.jsx("p",{children:a("userManagementDesc")})]}),t.jsx(Sg,{})]}),s==="tictactoe"&&t.jsxs("div",{className:"tictactoe-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["⭕ ",a("ticTacToe")]}),t.jsx("p",{children:a("ticTacToeDesc")})]}),t.jsx(Ig,{})]}),s==="memory"&&t.jsxs("div",{className:"memory-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["🎴 ",a("memoryGame")]}),t.jsx("p",{children:a("memoryGameDesc")})]}),t.jsx(Rg,{})]}),s==="snake"&&t.jsxs("div",{className:"snake-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["🐍 ",a("snakeGame")]}),t.jsx("p",{children:a("snakeGameDesc")})]}),t.jsx(Ax,{})]}),s==="tetris"&&t.jsxs("div",{className:"tetris-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:"🎮 Tetris"}),t.jsx("p",{children:"Classic block puzzle game - Stack and clear lines!"})]}),t.jsx(Rx,{})]}),s==="game2048"&&t.jsxs("div",{className:"game2048-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:"🔢 2048"}),t.jsx("p",{children:"Slide and merge tiles to reach 2048!"})]}),t.jsx(_x,{})]}),s==="calculator"&&t.jsxs("div",{className:"calculator-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:"🧮 Calculator"}),t.jsx("p",{children:"Basic and scientific calculator with history"})]}),t.jsx(Ox,{})]}),s==="stopwatch"&&t.jsxs("div",{className:"stopwatch-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:"⏱️ Stopwatch"}),t.jsx("p",{children:"Precision timing with lap tracking"})]}),t.jsx(Wx,{})]}),s==="habits"&&t.jsxs("div",{className:"habits-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:"📅 Habit Tracker"}),t.jsx("p",{children:"Build better habits, one day at a time"})]}),t.jsx(Fx,{})]}),s==="kanban"&&t.jsxs("div",{className:"kanban-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsx("h1",{children:"📌 Kanban Board"}),t.jsx("p",{children:"Organize your tasks visually with drag and drop"})]}),t.jsx($x,{})]}),s==="terminal"&&t.jsxs("div",{className:"terminal-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["💻 ",a("hackerTerminal")]}),t.jsx("p",{children:a("hackerTerminalDesc")})]}),t.jsx(_g,{})]}),s==="support"&&t.jsx("div",{className:"support-content animate-in",children:t.jsx(Ex,{})}),s==="settings"&&t.jsxs("div",{className:"settings-content animate-in",children:[t.jsxs("div",{className:"page-title",children:[t.jsxs("h1",{children:["⚙️ ",a("settings")]}),t.jsx("p",{children:a("settingsDesc")})]}),t.jsx(mx,{})]})]})]}),t.jsx(gx,{isOpen:v,onClose:()=>N(!1),onNavigate:S=>{(S==="tasks"||S==="settings"||S==="overview")&&Or(S)}}),t.jsx(xx,{onAction:S=>{console.log("Quick action:",S),S==="create-task"?Or("tasks"):S==="start-focus"&&console.log("Starting focus timer...")}}),t.jsx(Yg,{}),t.jsx(Qi,{}),t.jsx("style",{children:`
                /* ═══════════════════════════════════════════════════════════════
                   PROFESSIONAL CYBERSECURITY BOOT SCREEN
                   Neon Blue + Green | Terminal Style | Fully Responsive
                   ═══════════════════════════════════════════════════════════════ */
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;700;900&display=swap');

                /* Main Boot Screen Container */
                .cyber-boot-screen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: #0a0f1c;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    animation: boot-fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes boot-fade-in {
                    0% { opacity: 0; transform: scale(0.98); }
                    100% { opacity: 1; transform: scale(1); }
                }

                .cyber-boot-screen.fade-out {
                    animation: boot-fade-out 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                @keyframes boot-fade-out {
                    0% { opacity: 1; transform: scale(1); filter: brightness(1); }
                    30% { opacity: 1; transform: scale(1.01); filter: brightness(1.2); }
                    100% { opacity: 0; transform: scale(1.03); filter: brightness(1.5); pointer-events: none; }
                }

                /* Glitch Effect - Subtle & Clean */
                .cyber-boot-screen.glitch {
                    animation: glitch-effect 0.15s ease-in-out;
                }

                .cyber-boot-screen.glitch::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(
                        90deg,
                        rgba(0, 212, 255, 0.05) 0%,
                        rgba(0, 255, 136, 0.05) 50%,
                        rgba(0, 212, 255, 0.05) 100%
                    );
                    animation: glitch-color 0.1s ease-out;
                    z-index: 1000;
                    pointer-events: none;
                }

                @keyframes glitch-color {
                    0% { opacity: 0; }
                    50% { opacity: 0.3; }
                    100% { opacity: 0; }
                }

                @keyframes glitch-effect {
                    0%, 100% { 
                        transform: translate(0); 
                        filter: brightness(1);
                    }
                    25% { 
                        transform: translate(-1px, 1px); 
                        filter: brightness(1.1);
                    }
                    50% { 
                        transform: translate(1px, -1px); 
                        filter: brightness(1.2);
                    }
                    75% { 
                        transform: translate(-0.5px, 0.5px); 
                        filter: brightness(1.05);
                    }
                }

                /* Glitch Text Effect */
                .cyber-boot-screen.glitch .terminal-text {
                    animation: text-glitch 0.2s ease-in-out;
                }

                @keyframes text-glitch {
                    0%, 100% { text-shadow: 0 0 8px rgba(0, 212, 255, 0.5); }
                    25% { text-shadow: -2px 0 #ff0040, 2px 0 #00ff88; }
                    50% { text-shadow: 2px 0 #ff0040, -2px 0 #00d4ff; }
                    75% { text-shadow: -1px 0 #00ff88, 1px 0 #ff0040; }
                }

                /* Background Gradient - Enhanced */
                .cyber-boot-bg {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: 
                        radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.2) 0%, transparent 40%),
                        radial-gradient(ellipse at 80% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 40%),
                        radial-gradient(ellipse at 50% 50%, rgba(0, 100, 200, 0.08) 0%, transparent 60%),
                        linear-gradient(135deg, #050810 0%, #0a0f1c 25%, #0d1421 50%, #0a0f1c 75%, #050810 100%);
                    z-index: 0;
                    animation: bg-breathe 4s ease-in-out infinite;
                }

                @keyframes bg-breathe {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.85; }
                }

                /* Scanlines Overlay */
                .scanlines {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(0, 0, 0, 0.1) 2px,
                        rgba(0, 0, 0, 0.1) 4px
                    );
                    pointer-events: none;
                    z-index: 100;
                    animation: scanline-move 10s linear infinite;
                }

                @keyframes scanline-move {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100%; }
                }

                /* Cyber Grid */
                .cyber-grid {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-image:
                        linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    z-index: 1;
                    animation: grid-pulse 4s ease-in-out infinite;
                }

                @keyframes grid-pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }

                /* Floating Particles */
                .cyber-particles {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    z-index: 2;
                    pointer-events: none;
                }

                .cyber-particle {
                    position: absolute;
                    background: radial-gradient(circle, rgba(0, 255, 136, 0.8) 0%, rgba(0, 212, 255, 0.4) 50%, transparent 70%);
                    border-radius: 50%;
                    animation: particle-float 4s ease-in-out infinite;
                    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
                }

                @keyframes particle-float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0.3;
                    }
                    25% {
                        transform: translateY(-30px) translateX(10px) scale(1.2);
                        opacity: 0.8;
                    }
                    50% { 
                        transform: translateY(-50px) translateX(-10px) scale(0.8);
                        opacity: 1;
                    }
                    75% {
                        transform: translateY(-20px) translateX(5px) scale(1.1);
                        opacity: 0.6;
                    }
                }

                /* Main Container - PERFECTLY CENTERED */
                .cyber-boot-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    z-index: 10;
                    padding: 2rem;
                    max-width: 90vw;
                    width: 100%;
                    max-width: 600px;
                    gap: 1.5rem;
                }

                /* Logo with Spinning Rings */
                .cyber-logo {
                    width: 120px;
                    height: 120px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1rem;
                }

                .logo-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 2px solid transparent;
                }

                .logo-ring.outer {
                    width: 100%;
                    height: 100%;
                    border-top-color: #00d4ff;
                    border-right-color: #00d4ff;
                    animation: ring-spin 3s linear infinite;
                    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.1);
                }

                .logo-ring.middle {
                    width: 75%;
                    height: 75%;
                    border-bottom-color: #00ff88;
                    border-left-color: #00ff88;
                    animation: ring-spin 2s linear infinite reverse;
                    box-shadow: 0 0 15px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.1);
                }

                .logo-ring.inner {
                    width: 50%;
                    height: 50%;
                    border-top-color: #00d4ff;
                    border-right-color: #00ff88;
                    animation: ring-spin 1.5s linear infinite;
                    box-shadow: 0 0 10px rgba(0, 212, 255, 0.4);
                }

                @keyframes ring-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .logo-core {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #00ff88;
                    animation: core-glow 2s ease-in-out infinite;
                }

                .logo-core svg {
                    width: 35px;
                    height: 35px;
                    filter: drop-shadow(0 0 10px #00ff88) drop-shadow(0 0 20px #00d4ff);
                }

                @keyframes core-glow {
                    0%, 100% { 
                        filter: drop-shadow(0 0 10px #00ff88) drop-shadow(0 0 20px #00d4ff);
                        transform: scale(1);
                    }
                    50% { 
                        filter: drop-shadow(0 0 20px #00ff88) drop-shadow(0 0 40px #00d4ff);
                        transform: scale(1.1);
                    }
                }

                /* Terminal Window */
                .terminal-window {
                    width: 100%;
                    background: rgba(10, 15, 28, 0.9);
                    border: 1px solid rgba(0, 212, 255, 0.3);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 
                        0 0 30px rgba(0, 212, 255, 0.2),
                        inset 0 0 30px rgba(0, 0, 0, 0.5);
                }

                .terminal-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 15px;
                    background: rgba(0, 0, 0, 0.4);
                    border-bottom: 1px solid rgba(0, 212, 255, 0.2);
                }

                .terminal-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                }

                .terminal-dot.red { background: #ff5f56; box-shadow: 0 0 8px #ff5f56; }
                .terminal-dot.yellow { background: #ffbd2e; box-shadow: 0 0 8px #ffbd2e; }
                .terminal-dot.green { background: #27ca40; box-shadow: 0 0 8px #27ca40; }

                .terminal-title {
                    margin-left: auto;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 1px;
                }

                .terminal-body {
                    padding: 1rem 1.25rem;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.85rem;
                    min-height: 180px;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .terminal-line {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    animation: line-appear 0.3s ease-out;
                }

                @keyframes line-appear {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .terminal-prompt {
                    color: #00ff88;
                    font-weight: bold;
                    text-shadow: 0 0 10px #00ff88;
                    flex-shrink: 0;
                }

                .terminal-line.success .terminal-prompt {
                    color: #00ff88;
                }

                .terminal-text {
                    color: #00d4ff;
                    text-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
                    line-height: 1.5;
                }

                .terminal-line.success .terminal-text {
                    color: #00ff88;
                    text-shadow: 0 0 10px #00ff88;
                    font-weight: bold;
                }

                .terminal-line.complete {
                    opacity: 0.7;
                }

                .cursor {
                    color: #00ff88;
                    animation: cursor-blink 0.6s step-end infinite;
                }

                @keyframes cursor-blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }

                /* Progress Section */
                .cyber-progress-section {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .progress-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .progress-label {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: rgba(0, 212, 255, 0.8);
                    letter-spacing: 2px;
                }

                .progress-value {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 1.25rem;
                    font-weight: 900;
                    color: #00ff88;
                    text-shadow: 0 0 15px #00ff88;
                }

                .cyber-progress-bar {
                    width: 100%;
                }

                .progress-track {
                    height: 6px;
                    background: rgba(0, 212, 255, 0.1);
                    border: 1px solid rgba(0, 212, 255, 0.3);
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #00d4ff 0%, #00ff88 50%, #00d4ff 100%);
                    background-size: 200% 100%;
                    border-radius: 10px;
                    transition: width 0.1s ease-out;
                    position: relative;
                    animation: progress-shine 1.5s linear infinite;
                    box-shadow: 0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 212, 255, 0.3);
                }

                @keyframes progress-shine {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                .progress-glow {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 20px;
                    height: 20px;
                    background: #00ff88;
                    border-radius: 50%;
                    filter: blur(10px);
                    animation: glow-pulse 0.5s ease-in-out infinite alternate;
                }

                @keyframes glow-pulse {
                    from { opacity: 0.5; transform: translateY(-50%) scale(0.8); }
                    to { opacity: 1; transform: translateY(-50%) scale(1.2); }
                }

                .progress-status {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 1px;
                    text-align: center;
                }

                /* Footer */
                .cyber-boot-footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                }

                .footer-item {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 0.65rem;
                    font-weight: 500;
                    color: rgba(0, 212, 255, 0.6);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .footer-separator {
                    color: rgba(0, 255, 136, 0.4);
                    font-size: 0.5rem;
                }

                /* ═══════════════════════════════════════════════════════════
                   FULLY RESPONSIVE DESIGN - All Devices
                   ══════════════════════════════════════════════════════════ */

                /* Large Desktop (1400px+) */
                @media (min-width: 1400px) {
                    .cyber-boot-container {
                        max-width: 700px;
                        gap: 2rem;
                    }

                    .cyber-logo {
                        width: 140px;
                        height: 140px;
                    }

                    .logo-core svg {
                        width: 45px;
                        height: 45px;
                    }

                    .terminal-body {
                        font-size: 0.95rem;
                        min-height: 220px;
                        padding: 1.5rem;
                    }

                    .progress-value {
                        font-size: 1.5rem;
                    }

                    .footer-item {
                        font-size: 0.75rem;
                    }
                }

                /* Desktop (1200px - 1399px) */
                @media (min-width: 1200px) and (max-width: 1399px) {
                    .cyber-boot-container {
                        max-width: 650px;
                        gap: 1.75rem;
                    }

                    .cyber-logo {
                        width: 130px;
                        height: 130px;
                    }

                    .terminal-body {
                        font-size: 0.9rem;
                        min-height: 200px;
                    }
                }

                /* Laptop (992px - 1199px) */
                @media (min-width: 992px) and (max-width: 1199px) {
                    .cyber-boot-container {
                        max-width: 600px;
                        gap: 1.5rem;
                        padding: 1.75rem;
                    }

                    .cyber-logo {
                        width: 115px;
                        height: 115px;
                    }

                    .logo-core svg {
                        width: 32px;
                        height: 32px;
                    }

                    .terminal-body {
                        font-size: 0.85rem;
                        min-height: 180px;
                    }
                }

                /* Tablet (768px - 991px) */
                @media (min-width: 768px) and (max-width: 991px) {
                    .cyber-boot-container {
                        max-width: 550px;
                        padding: 1.5rem;
                        gap: 1.25rem;
                    }

                    .cyber-logo {
                        width: 100px;
                        height: 100px;
                        margin-bottom: 0.75rem;
                    }

                    .logo-core {
                        width: 42px;
                        height: 42px;
                    }

                    .logo-core svg {
                        width: 28px;
                        height: 28px;
                    }

                    .terminal-body {
                        font-size: 0.8rem;
                        min-height: 165px;
                        padding: 1rem 1.25rem;
                    }

                    .terminal-title {
                        font-size: 0.65rem;
                    }

                    .progress-label {
                        font-size: 0.7rem;
                        letter-spacing: 1.5px;
                    }

                    .progress-value {
                        font-size: 1.1rem;
                    }

                    .footer-item {
                        font-size: 0.6rem;
                    }
                }

                /* Mobile Landscape / Small Tablet (576px - 767px) */
                @media (min-width: 576px) and (max-width: 767px) {
                    .cyber-boot-container {
                        max-width: 95vw;
                        padding: 1.25rem;
                        gap: 1rem;
                    }

                    .cyber-logo {
                        width: 90px;
                        height: 90px;
                        margin-bottom: 0.5rem;
                    }

                    .logo-ring {
                        border-width: 1.5px;
                    }

                    .logo-core {
                        width: 38px;
                        height: 38px;
                    }

                    .logo-core svg {
                        width: 24px;
                        height: 24px;
                    }

                    .terminal-window {
                        border-radius: 6px;
                    }

                    .terminal-header {
                        padding: 8px 12px;
                    }

                    .terminal-dot {
                        width: 10px;
                        height: 10px;
                    }

                    .terminal-title {
                        display: none;
                    }

                    .terminal-body {
                        font-size: 0.72rem;
                        min-height: 145px;
                        padding: 0.85rem 1rem;
                        gap: 0.4rem;
                    }

                    .terminal-line {
                        gap: 0.5rem;
                    }

                    .progress-header {
                        flex-direction: row;
                    }

                    .progress-label {
                        font-size: 0.65rem;
                        letter-spacing: 1px;
                    }

                    .progress-value {
                        font-size: 1rem;
                    }

                    .progress-track {
                        height: 5px;
                    }

                    .progress-status {
                        font-size: 0.7rem;
                    }

                    .cyber-boot-footer {
                        gap: 0.5rem;
                        margin-top: 0.75rem;
                    }

                    .footer-item {
                        font-size: 0.55rem;
                        letter-spacing: 1px;
                    }

                    .footer-separator {
                        font-size: 0.4rem;
                    }
                }

                /* Mobile Portrait (480px - 575px) */
                @media (min-width: 480px) and (max-width: 575px) {
                    .cyber-boot-container {
                        max-width: 95vw;
                        padding: 1rem;
                        gap: 0.85rem;
                    }

                    .cyber-logo {
                        width: 80px;
                        height: 80px;
                        margin-bottom: 0.5rem;
                    }

                    .logo-ring {
                        border-width: 1.5px;
                    }

                    .logo-core {
                        width: 34px;
                        height: 34px;
                    }

                    .logo-core svg {
                        width: 22px;
                        height: 22px;
                    }

                    .terminal-window {
                        border-radius: 5px;
                    }

                    .terminal-header {
                        padding: 7px 10px;
                    }

                    .terminal-dot {
                        width: 9px;
                        height: 9px;
                    }

                    .terminal-title {
                        display: none;
                    }

                    .terminal-body {
                        font-size: 0.65rem;
                        min-height: 130px;
                        padding: 0.75rem 0.85rem;
                        gap: 0.35rem;
                    }

                    .terminal-prompt {
                        font-size: 0.65rem;
                    }

                    .cursor {
                        font-size: 0.65rem;
                    }

                    .progress-label {
                        font-size: 0.6rem;
                        letter-spacing: 1px;
                    }

                    .progress-value {
                        font-size: 0.95rem;
                    }

                    .progress-track {
                        height: 4px;
                    }

                    .progress-glow {
                        width: 15px;
                        height: 15px;
                    }

                    .progress-status {
                        font-size: 0.65rem;
                    }

                    .cyber-boot-footer {
                        gap: 0.4rem;
                        margin-top: 0.5rem;
                    }

                    .footer-item {
                        font-size: 0.5rem;
                        letter-spacing: 1px;
                    }

                    .footer-separator {
                        font-size: 0.35rem;
                    }
                }

                /* Small Mobile (< 480px) */
                @media (max-width: 479px) {
                    .cyber-boot-screen {
                        padding: 0.5rem;
                    }

                    .cyber-boot-container {
                        max-width: 98vw;
                        padding: 0.75rem;
                        gap: 0.7rem;
                    }

                    .cyber-logo {
                        width: 65px;
                        height: 65px;
                        margin-bottom: 0.25rem;
                    }

                    .logo-ring {
                        border-width: 1px;
                    }

                    .logo-core {
                        width: 28px;
                        height: 28px;
                    }

                    .logo-core svg {
                        width: 18px;
                        height: 18px;
                    }

                    .terminal-window {
                        border-radius: 4px;
                    }

                    .terminal-header {
                        padding: 5px 8px;
                    }

                    .terminal-dot {
                        width: 7px;
                        height: 7px;
                    }

                    .terminal-title {
                        display: none;
                    }

                    .terminal-body {
                        font-size: 0.55rem;
                        min-height: 105px;
                        padding: 0.6rem 0.7rem;
                        gap: 0.25rem;
                    }

                    .terminal-line {
                        gap: 0.35rem;
                    }

                    .terminal-prompt {
                        font-size: 0.55rem;
                    }

                    .cursor {
                        font-size: 0.55rem;
                    }

                    .cyber-progress-section {
                        gap: 0.5rem;
                    }

                    .progress-label {
                        font-size: 0.5rem;
                        letter-spacing: 0.5px;
                    }

                    .progress-value {
                        font-size: 0.85rem;
                    }

                    .progress-track {
                        height: 3px;
                        border-radius: 5px;
                    }

                    .progress-fill {
                        border-radius: 5px;
                    }

                    .progress-glow {
                        width: 10px;
                        height: 10px;
                        filter: blur(6px);
                    }

                    .progress-status {
                        font-size: 0.55rem;
                    }

                    .cyber-boot-footer {
                        gap: 0.3rem;
                        margin-top: 0.4rem;
                    }

                    .footer-item {
                        font-size: 0.45rem;
                        letter-spacing: 0.5px;
                    }

                    .footer-separator {
                        font-size: 0.3rem;
                    }

                    /* Reduce particles on small screens for performance */
                    .cyber-particle {
                        opacity: 0.5;
                    }

                    /* Reduce grid visibility on small screens */
                    .cyber-grid {
                        opacity: 0.3;
                    }
                }

                /* Extra Small Mobile (< 360px) */
                @media (max-width: 359px) {
                    .cyber-boot-container {
                        padding: 0.5rem;
                        gap: 0.5rem;
                    }

                    .cyber-logo {
                        width: 55px;
                        height: 55px;
                    }

                    .logo-core {
                        width: 24px;
                        height: 24px;
                    }

                    .logo-core svg {
                        width: 15px;
                        height: 15px;
                    }

                    .terminal-body {
                        font-size: 0.5rem;
                        min-height: 90px;
                        padding: 0.5rem;
                    }

                    .progress-value {
                        font-size: 0.75rem;
                    }

                    .cyber-boot-footer {
                        display: none;
                    }
                }

                /* Landscape Mode Optimization */
                @media (max-height: 500px) and (orientation: landscape) {
                    .cyber-boot-container {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        max-width: 95vw;
                        gap: 1rem;
                    }

                    .cyber-logo {
                        width: 70px;
                        height: 70px;
                        margin: 0;
                    }

                    .terminal-window {
                        flex: 1;
                        min-width: 250px;
                        max-width: 400px;
                    }

                    .terminal-body {
                        min-height: 100px;
                        font-size: 0.65rem;
                    }

                    .cyber-progress-section {
                        width: 100%;
                        max-width: 350px;
                    }

                    .cyber-boot-footer {
                        width: 100%;
                    }
                }

                /* ═══ MAIN INTERFACE ═══ */
                .boot-main-interface {
                    position: relative;
                    z-index: 10;
                    display: grid;
                    grid-template-columns: 200px 550px 200px;
                    gap: 2rem;
                    align-items: center;
                    max-width: 1100px;
                    width: 95%;
                }

                /* ═══ HUD PANELS ═══ */
                .hud-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    align-items: center;
                }

                /* Neural Sphere */
                .neural-sphere {
                    width: 100px;
                    height: 100px;
                    position: relative;
                    perspective: 800px;
                    transform-style: preserve-3d;
                }

                .sphere-orbit {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 2px solid transparent;
                    border-radius: 50%;
                }

                .orbit-1 { border-color: #00ff9d; animation: orbit-spin-x 3s linear infinite; box-shadow: 0 0 10px #00ff9d; }
                .orbit-2 { border-color: #00f0ff; animation: orbit-spin-y 4s linear infinite; box-shadow: 0 0 10px #00f0ff; }
                .orbit-3 { border-color: #ff00ff; animation: orbit-spin-z 5s linear infinite; box-shadow: 0 0 10px #ff00ff; }

                .sphere-core {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 30px;
                    height: 30px;
                    background: radial-gradient(circle, #fff 0%, #00f0ff 50%, transparent 70%);
                    border-radius: 50%;
                    animation: core-pulse 1.5s ease-in-out infinite alternate;
                    box-shadow: 0 0 30px #00f0ff;
                }

                @keyframes orbit-spin-x { from { transform: rotateX(0deg) rotateY(60deg); } to { transform: rotateX(360deg) rotateY(60deg); } }
                @keyframes orbit-spin-y { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
                @keyframes orbit-spin-z { from { transform: rotateZ(0deg) rotateX(60deg); } to { transform: rotateZ(360deg) rotateX(60deg); } }
                @keyframes core-pulse { from { box-shadow: 0 0 20px #00f0ff; } to { box-shadow: 0 0 50px #00f0ff; } }

                /* Radar */
                .radar-container {
                    width: 100px;
                    height: 100px;
                    border: 2px solid rgba(0, 255, 157, 0.3);
                    border-radius: 50%;
                    position: relative;
                    background: rgba(0, 20, 10, 0.4);
                    overflow: hidden;
                }

                .radar-grid-lines {
                    position: absolute;
                    width: 100%; height: 100%;
                    background: 
                        linear-gradient(rgba(0, 255, 157, 0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 157, 0.15) 1px, transparent 1px);
                    background-size: 20px 20px;
                }

                .radar-sweep {
                    position: absolute;
                    width: 100%; height: 100%;
                    background: conic-gradient(transparent 250deg, rgba(0, 255, 157, 0.5) 360deg);
                    animation: radar-rotate 2s linear infinite;
                }

                .radar-blip {
                    position: absolute;
                    width: 6px; height: 6px;
                    background: #00ff9d;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #00ff9d;
                    animation: blip-pulse 1s infinite;
                }
                .blip-1 { top: 30%; left: 60%; }
                .blip-2 { top: 65%; left: 35%; animation-delay: 0.5s; }

                @keyframes radar-rotate { to { transform: rotate(360deg); } }
                @keyframes blip-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

                /* Waveform */
                .waveform-analyzer {
                    display: flex;
                    gap: 3px;
                    align-items: flex-end;
                    height: 50px;
                    padding: 5px;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(0, 255, 157, 0.2);
                    border-radius: 4px;
                }

                .wave-bar {
                    width: 4px;
                    background: linear-gradient(to top, #00ff9d, #00f0ff);
                    animation: wave-dance 0.5s ease-in-out infinite alternate;
                    box-shadow: 0 0 5px #00ff9d;
                }

                @keyframes wave-dance {
                    from { height: 10px; }
                    to { height: 40px; }
                }

                /* ═══ TERMINAL ═══ */
                .boot-terminal {
                    background: rgba(5, 5, 10, 0.95);
                    border: 1px solid rgba(0, 255, 157, 0.3);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 0 40px rgba(0, 255, 157, 0.1);
                }

                .terminal-header {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    background: rgba(0, 255, 157, 0.1);
                    border-bottom: 1px solid rgba(0, 255, 157, 0.2);
                }

                .terminal-buttons { display: flex; gap: 6px; }
                .terminal-buttons span { width: 12px; height: 12px; border-radius: 50%; }
                .btn-red { background: #ff5f56; }
                .btn-yellow { background: #ffbd2e; }
                .btn-green { background: #27ca40; }

                .terminal-title {
                    flex: 1;
                    text-align: center;
                    color: #00ff9d;
                    font-family: 'Orbitron', sans-serif;
                    font-size: 0.9rem;
                    letter-spacing: 2px;
                }

                .header-icon { width: 20px; height: 20px; color: #00ff9d; }

                .terminal-body {
                    padding: 1rem;
                    height: 300px;
                    overflow-y: auto;
                    font-size: 0.8rem;
                    color: #00ff9d;
                }

                .terminal-body::-webkit-scrollbar { width: 4px; }
                .terminal-body::-webkit-scrollbar-thumb { background: #00ff9d; }

                .boot-ascii {
                    color: #00f0ff;
                    font-size: 0.55rem;
                    line-height: 1.2;
                    margin-bottom: 0.5rem;
                    white-space: pre;
                    text-shadow: 0 0 10px #00f0ff;
                }

                .boot-subtitle {
                    color: #888;
                    font-size: 0.7rem;
                    margin-bottom: 0.5rem;
                    letter-spacing: 3px;
                }

                .log-divider { color: #333; margin-bottom: 0.5rem; }

                .log-entry {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 0.3rem;
                    opacity: 0;
                    animation: log-appear 0.3s forwards;
                }

                .log-timestamp { color: #555; }
                .log-status { color: #00ff9d; font-weight: bold; }
                .log-message { color: #aaa; }
                .log-entry.success .log-status { color: #00f0ff; text-shadow: 0 0 10px #00f0ff; }
                .log-entry.success .log-message { color: #fff; font-weight: bold; }

                .terminal-cursor { animation: cursor-blink 0.5s step-end infinite; color: #00ff9d; }

                @keyframes log-appear { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes cursor-blink { 50% { opacity: 0; } }

                .terminal-footer {
                    padding: 1rem;
                    border-top: 1px solid rgba(0, 255, 157, 0.2);
                    background: rgba(0, 0, 0, 0.3);
                }

                .progress-info {
                    display: flex;
                    justify-content: space-between;
                    color: #00ff9d;
                    font-size: 0.75rem;
                    margin-bottom: 0.5rem;
                }

                .progress-percent { color: #00f0ff; font-weight: bold; }

                .neon-progress-track {
                    height: 8px;
                    background: #111;
                    border: 1px solid #333;
                    border-radius: 4px;
                    overflow: hidden;
                }

                .neon-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #00ff9d, #00f0ff);
                    position: relative;
                    transition: width 0.1s linear;
                    box-shadow: 0 0 15px #00ff9d;
                }

                .progress-spark {
                    position: absolute;
                    right: 0; top: -3px; bottom: -3px;
                    width: 3px;
                    background: #fff;
                    box-shadow: 0 0 15px #fff;
                }

                /* ═══ RIGHT PANEL ═══ */
                .system-stats { width: 100%; }

                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.75rem;
                    font-size: 0.7rem;
                }

                .stat-label { color: #888; width: 30px; }
                .stat-bar { flex: 1; height: 6px; background: #222; border-radius: 3px; overflow: hidden; }
                .stat-fill { height: 100%; background: linear-gradient(90deg, #00ff9d, #00f0ff); box-shadow: 0 0 5px #00ff9d; }
                .stat-value { color: #00ff9d; width: 40px; text-align: right; }

                .hex-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 4px;
                }

                .hex-cell {
                    width: 20px; height: 20px;
                    background: rgba(0, 255, 157, 0.1);
                    border: 1px solid rgba(0, 255, 157, 0.3);
                    animation: hex-pulse 2s infinite;
                }

                .hex-cell:nth-child(odd) { animation-delay: 0.5s; }

                @keyframes hex-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

                .threat-level {
                    text-align: center;
                    padding: 0.75rem;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(0, 255, 157, 0.2);
                    border-radius: 4px;
                }

                .threat-label { color: #888; font-size: 0.6rem; letter-spacing: 2px; }
                .threat-value { color: #00ff9d; font-size: 1rem; font-weight: bold; margin: 0.25rem 0; }
                .threat-indicator { width: 10px; height: 10px; border-radius: 50%; margin: 0 auto; }
                .threat-indicator.green { background: #00ff9d; box-shadow: 0 0 10px #00ff9d; animation: indicator-pulse 1s infinite; }

                @keyframes indicator-pulse { 0%, 100% { box-shadow: 0 0 5px #00ff9d; } 50% { box-shadow: 0 0 20px #00ff9d; } }

                /* ═══ CORNER HUD ═══ */
                .corner-hud {
                    position: absolute;
                    padding: 0.5rem 1rem;
                    border: 1px solid rgba(0, 255, 157, 0.3);
                    font-size: 0.7rem;
                    color: rgba(0, 255, 157, 0.7);
                    letter-spacing: 1px;
                    z-index: 50;
                }

                .corner-hud.top-left { top: 20px; left: 20px; border-right: none; border-bottom: none; }
                .corner-hud.top-right { top: 20px; right: 20px; border-left: none; border-bottom: none; }
                .corner-hud.bottom-left { bottom: 20px; left: 20px; border-right: none; border-top: none; }
                .corner-hud.bottom-right { bottom: 20px; right: 20px; border-left: none; border-top: none; }

                /* ═══ PARTICLES ═══ */
                .particle-container { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 5; }

                .particle-pulse {
                    position: absolute;
                    width: 4px; height: 4px;
                    background: #00ff9d;
                    border-radius: 50%;
                    animation: particle-float 4s ease-in-out infinite;
                    opacity: 0.6;
                }

                @keyframes particle-float {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-30px) scale(1.5); opacity: 1; }
                }

                /* ═══ GLITCH OUT TRANSITION ═══ */
                @keyframes glitch-out {
                    0% { opacity: 1; filter: none; }
                    10% { transform: translateX(-5px); filter: hue-rotate(90deg); }
                    20% { transform: translateX(5px); filter: hue-rotate(-90deg); }
                    30% { transform: translateX(-3px); clip-path: inset(20% 0 40% 0); }
                    40% { transform: translateX(3px); clip-path: inset(60% 0 10% 0); }
                    50% { transform: translateX(0); clip-path: none; }
                    100% { opacity: 0; filter: blur(10px); transform: scale(1.1); }
                }

                /* ═══ RESPONSIVE ═══ */
                @media (max-width: 1024px) {
                    .boot-main-interface { grid-template-columns: 1fr; gap: 1rem; padding: 1rem; }
                    .hud-panel { flex-direction: row; justify-content: center; flex-wrap: wrap; }
                    .boot-terminal { max-width: 100%; }
                    .corner-hud { display: none; }
                }
                
                /* Layout */
                .dashboard-layout {
                    display: flex;
                    min-height: 100vh;
                    position: relative;
                }
                
                /* Animated Sidebar */
                .dashboard-sidebar {
                    width: 280px;
                    background: rgba(15, 15, 25, 0.95);
                    backdrop-filter: blur(20px);
                    border-right: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    flex-direction: column;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    z-index: 100;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .dashboard-sidebar.collapsed {
                    width: 80px;
                }
                
                .dashboard-sidebar.collapsed .brand-text,
                .dashboard-sidebar.collapsed .nav-label,
                .dashboard-sidebar.collapsed .user-mini-info,
                .dashboard-sidebar.collapsed .info-content {
                    opacity: 0;
                    width: 0;
                    overflow: hidden;
                }
                
                .sidebar-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }
                
                .brand-logo {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    background: var(--gradient-primary);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                
                .brand-logo:hover {
                    transform: rotate(-5deg) scale(1.05);
                }
                
                .brand-logo svg {
                    width: 24px;
                    height: 24px;
                    color: white;
                }
                
                .brand-text {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    white-space: nowrap;
                    transition: opacity 0.3s ease;
                }
                
                /* Navigation */
                .sidebar-nav {
                    flex: 1;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    overflow-y: auto;
                }
                
                .nav-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.875rem 1rem;
                    background: transparent;
                    border: none;
                    border-radius: 12px;
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-align: left;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    animation: slideIn 0.5s ease forwards;
                    opacity: 0;
                }
                
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .nav-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: var(--gradient-primary);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 12px;
                    z-index: -1;
                }
                
                .nav-item:hover {
                    color: var(--text-primary);
                    transform: translateX(4px);
                }
                
                .nav-item:hover::before {
                    opacity: 0.1;
                }
                
                .nav-item.active {
                    color: white;
                    background: var(--gradient-primary);
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                }
                
                .nav-item.active:hover {
                    transform: translateX(0);
                }
                
                .nav-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 24px;
                }
                
                .nav-label {
                    white-space: nowrap;
                    transition: opacity 0.3s ease, width 0.3s ease;
                }
                
                .nav-indicator {
                    position: absolute;
                    right: 8px;
                    width: 6px;
                    height: 6px;
                    background: white;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }
                
                /* Sidebar Info (Clock & Location) */
                .sidebar-info {
                    padding: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }
                
                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 10px;
                    margin-bottom: 0.5rem;
                }
                
                .info-item svg {
                    min-width: 16px;
                    color: var(--primary);
                }
                
                .info-content {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transition: opacity 0.3s ease, width 0.3s ease;
                }
                
                .info-value {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    white-space: nowrap;
                }
                
                .info-label {
                    font-size: 0.7rem;
                    color: var(--text-muted);
                    white-space: nowrap;
                }
                
                /* Sidebar Footer */
                .sidebar-footer {
                    padding: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .user-mini {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    min-width: 0;
                }
                
                .user-avatar-mini {
                    width: 40px;
                    height: 40px;
                    min-width: 40px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    position: relative;
                }
                
                .user-avatar-mini img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .user-avatar-mini svg {
                    width: 20px;
                    height: 20px;
                    color: white;
                }
                
                .status-dot {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid var(--bg-primary);
                }
                
                .status-dot.online {
                    background: #22c55e;
                    animation: statusPulse 2s ease-in-out infinite;
                }
                
                .status-dot.offline {
                    background: #ef4444;
                }
                
                @keyframes statusPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
                    50% { box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1); }
                }
                
                .user-mini-info {
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transition: opacity 0.3s ease, width 0.3s ease;
                }
                
                .user-mini-name {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                
                .user-mini-role {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    text-transform: capitalize;
                }
                
                .logout-btn {
                    padding: 0.625rem;
                    background: rgba(239, 68, 68, 0.1);
                    border: none;
                    border-radius: 10px;
                    color: #f87171;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .logout-btn:hover {
                    background: rgba(239, 68, 68, 0.2);
                    transform: scale(1.05);
                }
                
                /* Main Content */
                .dashboard-main {
                    flex: 1;
                    margin-left: 280px;
                    min-height: 100vh;
                    position: relative;
                    z-index: 1;
                    transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .dashboard-main.expanded {
                    margin-left: 80px;
                }
                
                /* Header */
                .dashboard-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 2rem;
                    background: rgba(15, 15, 25, 0.8);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                
                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .menu-toggle {
                    padding: 0.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .menu-toggle:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--text-primary);
                }
                
                /* Breadcrumbs */
                .breadcrumbs {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .breadcrumb-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .breadcrumb-link {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    cursor: pointer;
                    transition: color 0.2s;
                }
                
                .breadcrumb-link:hover {
                    color: var(--text-primary);
                }
                
                .breadcrumb-link.active {
                    color: var(--text-primary);
                    font-weight: 500;
                }
                
                .breadcrumb-item svg {
                    color: var(--text-muted);
                }
                
                /* Global Search */
                .header-center {
                    flex: 1;
                    max-width: 500px;
                    margin: 0 2rem;
                }
                
                .global-search {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.625rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }
                
                .global-search:hover,
                .global-search.focused {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: var(--primary);
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
                }
                
                .global-search svg {
                    color: var(--text-muted);
                    min-width: 18px;
                }
                
                .global-search input {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    outline: none;
                }
                
                .global-search input::placeholder {
                    color: var(--text-muted);
                }
                
                .search-shortcut {
                    padding: 0.25rem 0.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-family: monospace;
                }
                
                /* Header Right */
                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                
                .status-indicator {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                
                .status-indicator.online {
                    color: #22c55e;
                }
                
                .status-indicator.offline {
                    color: #ef4444;
                }
                
                .status-dot-large {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: currentColor;
                    animation: statusPulse 2s ease-in-out infinite;
                }
                
                .date-display {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                
                .time-large {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    font-family: 'JetBrains Mono', monospace;
                }
                
                .date-text {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }
                
                /* Page Content */
                .page-content {
                    padding: 2rem;
                    padding-bottom: 5rem; /* Space for footer */
                }
                
                .animate-in {
                    animation: fadeSlideIn 0.5s ease forwards;
                }
                
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .page-title {
                    margin-bottom: 2rem;
                }
                
                .page-title h1 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                
                .page-title p {
                    color: var(--text-muted);
                }
                
                /* Stats Grid */
                .dashboard-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                
                .stat-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.3s ease;
                    animation: fadeSlideIn 0.5s ease forwards;
                    opacity: 0;
                }
                
                .stat-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                }
                
                .stat-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .stat-icon svg {
                    width: 28px;
                    height: 28px;
                }
                
                .stat-content {
                    display: flex;
                    flex-direction: column;
                }
                
                .stat-value {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }
                
                .stat-label {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                /* Quick Actions */
                .quick-actions-section {
                    margin-bottom: 2rem;
                }
                
                .quick-actions-section h3 {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 1rem;
                }
                
                .quick-action-buttons {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                
                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.25rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .action-btn:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: var(--primary);
                    transform: translateY(-2px);
                }
                
                .action-btn.admin {
                    border-color: rgba(139, 92, 246, 0.3);
                    background: rgba(139, 92, 246, 0.1);
                }
                
                .action-btn svg {
                    width: 18px;
                    height: 18px;
                }
                
                /* User Info Card */
                .user-info-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }
                
                .user-avatar-large {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
                    overflow: hidden;
                }
                
                .user-avatar-large img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .user-avatar-large svg {
                    width: 36px;
                    height: 36px;
                    color: white;
                }
                
                .user-details {
                    flex: 1;
                }
                
                .user-details h2 {
                    font-size: 1.5rem;
                    margin-bottom: 0.25rem;
                }
                
                .user-details .user-email {
                    color: var(--text-muted);
                    margin-bottom: 0.75rem;
                }
                
                .user-badges {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .badge {
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    text-transform: capitalize;
                }
                
                .badge.role-admin { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
                .badge.role-user { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
                .badge.role-guest { background: rgba(156, 163, 175, 0.2); color: #9ca3af; }
                .badge.verified { background: rgba(52, 211, 153, 0.2); color: #34d399; }
                
                .user-location-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .location-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                
                .location-item svg {
                    color: var(--primary);
                }
                
                .users-content,
                .chess-content {
                    max-width: 1200px;
                }

                /* ═══════════════════════════════════════════════════════════
                   DAILY OVERVIEW STYLES
                   ══════════════════════════════════════════════════════════ */
                
                .daily-overview-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .overview-card {
                    background: rgba(30, 30, 50, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.25rem;
                    transition: all 0.3s ease;
                }

                .overview-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
                    transform: translateY(-2px);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .card-header h3 {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #fff;
                }

                .task-count, .event-count, .focus-day {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                    background: rgba(99, 102, 241, 0.2);
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                }

                /* ═══ TO-DO LIST STYLES ═══ */
                .add-todo {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .add-todo input {
                    flex: 1;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0.6rem 0.875rem;
                    color: #fff;
                    font-size: 0.85rem;
                    transition: all 0.2s ease;
                }

                .add-todo input:focus {
                    outline: none;
                    border-color: #6366f1;
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
                }

                .add-todo button {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 1.25rem;
                    width: 40px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .add-todo button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
                }

                .todo-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    max-height: 250px;
                    overflow-y: auto;
                }

                .todo-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 0.625rem 0.75rem;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    cursor: grab;
                }

                .todo-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .todo-item.dragging {
                    opacity: 0.5;
                    background: rgba(99, 102, 241, 0.2);
                    cursor: grabbing;
                }

                .todo-item.done {
                    opacity: 0.6;
                }

                .todo-item.done .todo-text {
                    text-decoration: line-through;
                    color: rgba(255, 255, 255, 0.5);
                }

                .todo-drag-handle {
                    color: rgba(255, 255, 255, 0.3);
                    cursor: grab;
                    font-size: 0.875rem;
                    user-select: none;
                }

                .todo-checkbox {
                    background: transparent;
                    border: none;
                    font-size: 1rem;
                    cursor: pointer;
                    color: rgba(255, 255, 255, 0.5);
                    transition: all 0.2s ease;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .todo-checkbox.done {
                    color: #10b981;
                }

                .todo-checkbox.in-progress {
                    color: #f59e0b;
                }

                .todo-text {
                    flex: 1;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .priority-badge {
                    background: transparent;
                    border: 1px solid;
                    border-radius: 12px;
                    padding: 0.2rem 0.5rem;
                    font-size: 0.7rem;
                    font-weight: 500;
                    cursor: pointer;
                    text-transform: capitalize;
                }

                .priority-badge.low {
                    border-color: rgba(107, 114, 128, 0.5);
                    color: #9ca3af;
                }

                .priority-badge.medium {
                    border-color: rgba(59, 130, 246, 0.5);
                    color: #60a5fa;
                }

                .priority-badge.high {
                    border-color: rgba(249, 115, 22, 0.5);
                    color: #fb923c;
                }

                .priority-badge.critical {
                    border-color: rgba(239, 68, 68, 0.5);
                    color: #f87171;
                    animation: pulse-critical 2s infinite;
                }

                @keyframes pulse-critical {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                .todo-delete {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.3);
                    cursor: pointer;
                    font-size: 1.1rem;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                    border-radius: 4px;
                }

                .todo-delete:hover {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.1);
                }

                /* ═══ CALENDAR EVENTS STYLES ═══ */
                .next-event {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 12px;
                    padding: 1rem;
                    margin-bottom: 1rem;
                }

                .next-event-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .next-label {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: rgba(255, 255, 255, 0.5);
                }

                .event-type {
                    font-size: 0.7rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 8px;
                    text-transform: capitalize;
                }

                .event-type.meeting {
                    background: rgba(59, 130, 246, 0.2);
                    color: #60a5fa;
                }

                .event-type.class {
                    background: rgba(16, 185, 129, 0.2);
                    color: #34d399;
                }

                .event-type.deadline {
                    background: rgba(239, 68, 68, 0.2);
                    color: #f87171;
                }

                .event-title {
                    margin: 0 0 0.75rem 0;
                    font-size: 0.95rem;
                    color: #fff;
                    font-weight: 600;
                }

                .countdown-timer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                }

                .countdown-unit {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.3);
                    padding: 0.5rem 0.6rem;
                    border-radius: 8px;
                    min-width: 45px;
                }

                .countdown-value {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #6366f1;
                    font-family: 'JetBrains Mono', monospace;
                }

                .countdown-label {
                    font-size: 0.6rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                }

                .countdown-separator {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.3);
                    font-weight: 700;
                }

                .events-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .event-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.625rem 0.75rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                    border-left: 3px solid transparent;
                    transition: all 0.2s ease;
                }

                .event-item.meeting { border-left-color: #60a5fa; }
                .event-item.class { border-left-color: #34d399; }
                .event-item.deadline { border-left-color: #f87171; }

                .event-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .event-icon {
                    font-size: 1.25rem;
                }

                .event-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .event-name {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .event-time {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* ═══ FOCUS SUMMARY STYLES ═══ */
                .focus-stats {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .focus-stat {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.875rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                }

                .focus-stat.main {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
                    border: 1px solid rgba(99, 102, 241, 0.2);
                }

                .focus-icon {
                    font-size: 1.5rem;
                }

                .focus-info {
                    display: flex;
                    flex-direction: column;
                }

                .focus-value {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #fff;
                }

                .focus-label {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .sparkline-container {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    padding: 0.875rem;
                }

                .sparkline-label {
                    display: block;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.5rem;
                }

                .sparkline {
                    width: 100%;
                    height: 40px;
                    margin-bottom: 0.5rem;
                }

                .sparkline-days {
                    display: flex;
                    justify-content: space-between;
                }

                .sparkline-days span {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.3);
                }

                .sparkline-days span.active {
                    color: #6366f1;
                    font-weight: 600;
                }

                /* Daily Overview Responsive */
                @media (max-width: 1200px) {
                    .daily-overview-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .focus-card {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 768px) {
                    .daily-overview-grid {
                        grid-template-columns: 1fr;
                    }
                    .focus-card {
                        grid-column: span 1;
                    }
                    .countdown-unit {
                        min-width: 40px;
                        padding: 0.4rem 0.5rem;
                    }
                    .countdown-value {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .overview-card {
                        padding: 1rem;
                    }
                    .card-header h3 {
                        font-size: 0.9rem;
                    }
                    .focus-stats {
                        flex-direction: column;
                    }
                    .todo-text {
                        font-size: 0.8rem;
                    }
                    .priority-badge {
                        font-size: 0.65rem;
                        padding: 0.15rem 0.4rem;
                    }
                }

                /* ═══════════════════════════════════════════════════════════
                   EXTENDED FEATURES STYLES
                   ══════════════════════════════════════════════════════════ */
                
                .extended-features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .extended-card {
                    background: rgba(30, 30, 50, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.25rem;
                    transition: all 0.3s ease;
                }

                .extended-card:hover {
                    border-color: rgba(99, 102, 241, 0.3);
                    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
                }

                /* Progress Task Monitoring */
                .projects-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .project-item {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    transition: all 0.2s ease;
                }

                .project-item.overdue { border-left: 3px solid #ef4444; }
                .project-item.delay { border-left: 3px solid #f59e0b; }
                .project-item.on-track { border-left: 3px solid #10b981; }

                .project-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.875rem;
                    cursor: pointer;
                }

                .project-header:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .project-info {
                    display: flex;
                    align-items: center;
                    gap: 0.875rem;
                }

                .circular-progress {
                    width: 45px;
                    height: 45px;
                    position: relative;
                }

                .circular-progress svg {
                    width: 100%;
                    height: 100%;
                }

                .progress-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 0.65rem;
                    font-weight: 600;
                    color: #fff;
                }

                .project-details {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .project-name {
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: #fff;
                }

                .project-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .status-badge {
                    font-size: 0.65rem;
                    padding: 0.15rem 0.4rem;
                    border-radius: 8px;
                }

                .status-badge.on-track { background: rgba(16, 185, 129, 0.2); color: #34d399; }
                .status-badge.delay { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }
                .status-badge.overdue { background: rgba(239, 68, 68, 0.2); color: #f87171; }

                .eta {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .expand-icon {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.4);
                }

                .subtasks-list {
                    padding: 0 0.875rem 0.875rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.375rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 0.5rem;
                    margin-top: 0.25rem;
                }

                .subtask-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.7);
                    padding: 0.25rem 0;
                }

                .subtask-item.done {
                    color: rgba(255, 255, 255, 0.4);
                    text-decoration: line-through;
                }

                .subtask-check {
                    color: #10b981;
                }

                /* Deadline Alert */
                .deadlines-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .deadline-item {
                    padding: 0.75rem;
                    border-radius: 8px;
                    border-left: 3px solid;
                }

                .deadline-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                .deadline-name {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: #fff;
                }

                .deadline-tag {
                    font-size: 0.65rem;
                    padding: 0.15rem 0.4rem;
                    border-radius: 6px;
                    font-weight: 500;
                }

                .deadline-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .deadline-progress {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    flex: 1;
                }

                .mini-progress-bar {
                    flex: 1;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                }

                .mini-progress-fill {
                    height: 100%;
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }

                .progress-percent {
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.5);
                    min-width: 30px;
                }

                .deadline-countdown {
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                /* Smart Reminder */
                .reminders-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .reminder-item {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    padding: 0.625rem 0.75rem;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }

                .reminder-item:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .reminder-item.ai { border-left: 3px solid #8b5cf6; }
                .reminder-item.health { border-left: 3px solid #10b981; }
                .reminder-item.schedule { border-left: 3px solid #6366f1; }
                .reminder-item.work { border-left: 3px solid #f59e0b; }

                .reminder-icon {
                    font-size: 1.1rem;
                }

                .reminder-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.125rem;
                }

                .reminder-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                .reminder-time {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .dismiss-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 1rem;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                }

                .dismiss-btn:hover {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.1);
                }

                /* Quick Notes */
                .add-note {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.75rem;
                }

                .add-note input {
                    flex: 1;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0.5rem 0.75rem;
                    color: #fff;
                    font-size: 0.8rem;
                }

                .add-note input:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .note-color-picker {
                    display: flex;
                    gap: 0.25rem;
                }

                .color-btn {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .color-btn:hover, .color-btn.active {
                    transform: scale(1.2);
                    border-color: #fff;
                }

                .add-note-btn {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    color: #fff;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                }

                .notes-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.5rem;
                    max-height: 200px;
                    overflow-y: auto;
                }

                .note-card {
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    padding: 0.625rem;
                    border-left: 3px solid;
                    position: relative;
                }

                .note-card.pinned {
                    background: rgba(99, 102, 241, 0.1);
                }

                .note-actions {
                    display: flex;
                    gap: 0.25rem;
                    position: absolute;
                    top: 0.375rem;
                    right: 0.375rem;
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }

                .note-card:hover .note-actions {
                    opacity: 1;
                }

                .pin-btn, .delete-note-btn {
                    background: transparent;
                    border: none;
                    font-size: 0.75rem;
                    cursor: pointer;
                    padding: 0.125rem;
                    border-radius: 4px;
                }

                .pin-btn { color: rgba(255, 255, 255, 0.4); }
                .pin-btn.active { color: #fbbf24; }
                .delete-note-btn { color: rgba(255, 255, 255, 0.3); }
                .delete-note-btn:hover { color: #ef4444; }

                .note-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.85);
                    margin: 0;
                    padding-right: 2rem;
                }

                /* Mood Tracker */
                .mood-selector {
                    text-align: center;
                    margin-bottom: 0.75rem;
                }

                .mood-question {
                    display: block;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 0.625rem;
                }

                .mood-emojis {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .mood-emoji {
                    font-size: 1.5rem;
                    background: rgba(0, 0, 0, 0.2);
                    border: 2px solid transparent;
                    border-radius: 50%;
                    width: 42px;
                    height: 42px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .mood-emoji:hover {
                    background: rgba(99, 102, 241, 0.2);
                    transform: scale(1.1);
                }

                .mood-emoji.selected {
                    border-color: #6366f1;
                    background: rgba(99, 102, 241, 0.3);
                    transform: scale(1.15);
                }

                .mood-note-input {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 0.5rem 0.75rem;
                    color: #fff;
                    font-size: 0.8rem;
                    margin-bottom: 0.75rem;
                }

                .mood-note-input:focus {
                    outline: none;
                    border-color: #6366f1;
                }

                .ai-insight {
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.1));
                    border: 1px solid rgba(139, 92, 246, 0.3);
                    border-radius: 10px;
                    padding: 0.75rem;
                    margin-bottom: 0.75rem;
                }

                .ai-badge {
                    font-size: 0.7rem;
                    background: rgba(139, 92, 246, 0.3);
                    padding: 0.2rem 0.5rem;
                    border-radius: 6px;
                    color: #c4b5fd;
                }

                .insight-text {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.8);
                    margin: 0.5rem 0;
                }

                .suggested-activity {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }

                .activity-label {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .activity-value {
                    font-size: 0.75rem;
                    color: #a78bfa;
                    font-weight: 500;
                }

                .mood-chart {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    padding: 0.75rem;
                }

                .chart-label {
                    display: block;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.5rem;
                }

                .mood-bars {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    height: 60px;
                    gap: 0.25rem;
                }

                .mood-bar-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex: 1;
                    height: 100%;
                }

                .mood-bar {
                    width: 100%;
                    max-width: 24px;
                    border-radius: 4px 4px 0 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 0.125rem;
                    transition: height 0.3s ease;
                }

                .bar-emoji {
                    font-size: 0.75rem;
                }

                .bar-day {
                    font-size: 0.6rem;
                    color: rgba(255, 255, 255, 0.4);
                    margin-top: 0.25rem;
                }

                /* Extended Features Responsive */
                @media (max-width: 1200px) {
                    .extended-features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .mood-tracker-card {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 768px) {
                    .extended-features-grid {
                        grid-template-columns: 1fr;
                    }
                    .mood-tracker-card {
                        grid-column: span 1;
                    }
                    .mood-emoji {
                        width: 36px;
                        height: 36px;
                        font-size: 1.25rem;
                    }
                }

                @media (max-width: 480px) {
                    .extended-card {
                        padding: 1rem;
                    }
                    .project-header {
                        padding: 0.75rem;
                    }
                    .circular-progress {
                        width: 38px;
                        height: 38px;
                    }
                    .mood-emojis {
                        gap: 0.375rem;
                    }
                    .mood-emoji {
                        width: 32px;
                        height: 32px;
                        font-size: 1rem;
                    }
                }
                
                /* ═══════════════════════════════════════════════════════════
                   ENHANCED RESPONSIVE DASHBOARD STYLES - All Devices
                   ══════════════════════════════════════════════════════════ */

                /* Large Desktop / Ultra-wide (1600px+) */
                @media (min-width: 1600px) {
                    .dashboard-main {
                        margin-left: 300px;
                    }
                    
                    .dashboard-sidebar {
                        width: 300px;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 2rem;
                    }
                    
                    .stat-card {
                        padding: 2rem;
                    }
                    
                    .stat-value {
                        font-size: 2.5rem;
                    }
                    
                    .page-content {
                        padding: 2.5rem;
                    }
                    
                    .page-title h1 {
                        font-size: 2rem;
                    }
                }

                /* Desktop (1200px - 1599px) */
                @media (min-width: 1200px) and (max-width: 1599px) {
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }
                    
                    .page-content {
                        padding: 2rem;
                    }
                }

                /* Laptop / Small Desktop (1024px - 1199px) */
                @media (min-width: 1024px) and (max-width: 1199px) {
                    .dashboard-sidebar {
                        width: 240px;
                    }
                    
                    .dashboard-sidebar.collapsed {
                        width: 70px;
                    }
                    
                    .dashboard-main {
                        margin-left: 240px;
                    }
                    
                    .dashboard-main.expanded {
                        margin-left: 70px;
                    }
                    
                    .header-center {
                        max-width: 280px;
                        margin: 0 1rem;
                    }
                    
                    .date-display {
                        display: none;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.25rem;
                    }
                    
                    .page-content {
                        padding: 1.5rem;
                    }

                    .brand-text {
                        font-size: 1.1rem;
                    }
                    
                    .nav-item {
                        padding: 0.75rem 0.875rem;
                        font-size: 0.8rem;
                    }
                }

                /* Tablet Landscape (768px - 1023px) */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .dashboard-sidebar {
                        width: 220px;
                    }
                    
                    .dashboard-sidebar.collapsed {
                        width: 65px;
                    }
                    
                    .dashboard-main {
                        margin-left: 220px;
                    }
                    
                    .dashboard-main.expanded {
                        margin-left: 65px;
                    }
                    
                    .header-center {
                        max-width: 220px;
                        margin: 0 0.75rem;
                    }
                    
                    .global-search {
                        padding: 0.5rem 0.75rem;
                    }
                    
                    .global-search input {
                        font-size: 0.8rem;
                    }
                    
                    .search-shortcut {
                        display: none;
                    }
                    
                    .date-display {
                        display: none;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    
                    .stat-card {
                        padding: 1.25rem;
                    }
                    
                    .stat-value {
                        font-size: 1.75rem;
                    }
                    
                    .stat-icon {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .page-content {
                        padding: 1.25rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.4rem;
                    }
                    
                    .quick-action-buttons {
                        flex-wrap: wrap;
                    }
                    
                    .action-btn {
                        flex: 1 1 calc(50% - 0.5rem);
                        min-width: 140px;
                    }
                    
                    .user-info-card {
                        padding: 1.25rem;
                    }
                    
                    .brand-text {
                        font-size: 1rem;
                    }
                    
                    .nav-item {
                        padding: 0.7rem 0.75rem;
                        font-size: 0.8rem;
                    }
                    
                    .sidebar-info {
                        padding: 0.75rem;
                    }
                    
                    .info-item {
                        padding: 0.5rem;
                    }
                    
                    .info-value {
                        font-size: 0.8rem;
                    }
                }

                /* Tablet Portrait / Mobile Landscape (576px - 767px) */
                @media (min-width: 576px) and (max-width: 767px) {
                    .dashboard-sidebar {
                        position: fixed;
                        left: -100%;
                        width: 280px;
                        transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        z-index: 100;
                    }
                    
                    .dashboard-sidebar.mobile-open {
                        left: 0;
                    }
                    
                    .sidebar-overlay {
                        display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.6);
                        backdrop-filter: blur(4px);
                        z-index: 99;
                        transition: opacity 0.3s ease;
                    }
                    
                    .sidebar-overlay.active {
                        display: block;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                        width: 100%;
                    }
                    
                    .dashboard-header {
                        padding: 0.75rem 1rem;
                        flex-wrap: nowrap;
                        gap: 0.75rem;
                    }
                    
                    .header-left {
                        flex: 0 0 auto;
                    }
                    
                    .header-center {
                        flex: 1;
                        max-width: none;
                        margin: 0;
                    }
                    
                    .global-search {
                        padding: 0.5rem 0.75rem;
                    }
                    
                    .search-shortcut {
                        display: none;
                    }
                    
                    .header-right {
                        gap: 0.5rem;
                    }
                    
                    .status-indicator span {
                        display: none;
                    }
                    
                    .status-indicator {
                        padding: 0.5rem;
                        border-radius: 50%;
                    }
                    
                    .page-content {
                        padding: 1rem;
                    }
                    
                    .page-title {
                        margin-bottom: 1.25rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.3rem;
                    }
                    
                    .page-title p {
                        font-size: 0.85rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.875rem;
                    }
                    
                    .stat-card {
                        padding: 1rem;
                    }
                    
                    .stat-icon {
                        width: 44px;
                        height: 44px;
                    }
                    
                    .stat-icon svg {
                        width: 22px;
                        height: 22px;
                    }
                    
                    .stat-value {
                        font-size: 1.5rem;
                    }
                    
                    .stat-label {
                        font-size: 0.8rem;
                    }
                    
                    .quick-action-buttons {
                        flex-wrap: wrap;
                    }
                    
                    .action-btn {
                        flex: 1 1 100%;
                        justify-content: center;
                    }
                    
                    .user-info-card {
                        flex-direction: row;
                        padding: 1.25rem;
                        gap: 1rem;
                    }
                    
                    .user-avatar-large {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .user-details h2 {
                        font-size: 1.15rem;
                    }
                    
                    .breadcrumbs {
                        display: none;
                    }
                    
                    .menu-toggle {
                        display: flex;
                    }
                }

                /* Mobile Large (480px - 575px) */
                @media (min-width: 480px) and (max-width: 575px) {
                    .dashboard-sidebar {
                        position: fixed;
                        left: -100%;
                        width: 260px;
                        transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        z-index: 100;
                    }
                    
                    .dashboard-sidebar.mobile-open {
                        left: 0;
                    }
                    
                    .sidebar-overlay {
                        display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.6);
                        z-index: 99;
                    }
                    
                    .sidebar-overlay.active {
                        display: block;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                        width: 100%;
                    }
                    
                    .dashboard-header {
                        padding: 0.625rem 0.875rem;
                    }
                    
                    .header-center {
                        display: none;
                    }
                    
                    .header-right {
                        gap: 0.375rem;
                    }
                    
                    .page-content {
                        padding: 0.875rem;
                    }
                    
                    .page-title {
                        margin-bottom: 1rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.2rem;
                    }
                    
                    .page-title p {
                        font-size: 0.8rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }
                    
                    .stat-card {
                        padding: 0.875rem;
                        flex-direction: row;
                        align-items: center;
                    }
                    
                    .stat-icon {
                        width: 42px;
                        height: 42px;
                    }
                    
                    .stat-icon svg {
                        width: 20px;
                        height: 20px;
                    }
                    
                    .stat-info {
                        flex: 1;
                    }
                    
                    .stat-value {
                        font-size: 1.4rem;
                    }
                    
                    .stat-label {
                        font-size: 0.75rem;
                    }
                    
                    .quick-action-buttons {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .action-btn {
                        justify-content: center;
                        width: 100%;
                        padding: 0.75rem 1rem;
                        font-size: 0.8rem;
                    }
                    
                    .user-info-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 1.25rem;
                        gap: 0.875rem;
                    }
                    
                    .user-avatar-large {
                        width: 65px;
                        height: 65px;
                    }
                    
                    .user-details h2 {
                        font-size: 1.1rem;
                    }
                    
                    .user-details .user-email {
                        font-size: 0.8rem;
                    }
                    
                    .user-location-info {
                        align-items: center;
                    }
                    
                    .breadcrumbs {
                        display: none;
                    }
                    
                    .menu-toggle {
                        display: flex;
                    }

                    .badge {
                        font-size: 0.65rem;
                        padding: 0.2rem 0.5rem;
                    }
                }

                /* Mobile Medium - iPhone 12/13/14 (430px - 479px) */
                @media (min-width: 430px) and (max-width: 479px) {
                    .dashboard-sidebar {
                        position: fixed;
                        left: -100%;
                        width: 250px;
                        z-index: 100;
                    }
                    
                    .dashboard-sidebar.mobile-open {
                        left: 0;
                    }
                    
                    .sidebar-overlay.active {
                        display: block;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                    }
                    
                    .dashboard-header {
                        padding: 0.5rem 0.75rem;
                    }
                    
                    .header-center {
                        display: none;
                    }
                    
                    .page-content {
                        padding: 0.75rem;
                    }
                    
                    .page-title {
                        margin-bottom: 0.875rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1.1rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: 1fr;
                        gap: 0.625rem;
                    }
                    
                    .stat-card {
                        padding: 0.75rem;
                    }
                    
                    .stat-icon {
                        width: 40px;
                        height: 40px;
                    }
                    
                    .stat-icon svg {
                        width: 18px;
                        height: 18px;
                    }
                    
                    .stat-value {
                        font-size: 1.25rem;
                    }
                    
                    .stat-label {
                        font-size: 0.7rem;
                    }
                    
                    .quick-actions-section h3 {
                        font-size: 0.85rem;
                    }
                    
                    .action-btn {
                        padding: 0.625rem 0.875rem;
                        font-size: 0.75rem;
                    }
                    
                    .user-info-card {
                        padding: 1rem;
                    }
                    
                    .user-avatar-large {
                        width: 55px;
                        height: 55px;
                    }
                    
                    .user-details h2 {
                        font-size: 1rem;
                    }
                    
                    .user-details .user-email {
                        font-size: 0.75rem;
                    }
                    
                    .location-item {
                        font-size: 0.7rem;
                    }
                }

                /* Mobile Small - Standard (375px - 429px) */
                @media (min-width: 375px) and (max-width: 429px) {
                    .dashboard-sidebar {
                        width: 240px;
                    }
                    
                    .dashboard-header {
                        padding: 0.5rem 0.625rem;
                    }
                    
                    .page-content {
                        padding: 0.625rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1rem;
                    }
                    
                    .page-title p {
                        font-size: 0.75rem;
                    }
                    
                    .dashboard-stats-grid {
                        gap: 0.5rem;
                    }
                    
                    .stat-card {
                        padding: 0.625rem;
                        gap: 0.625rem;
                    }
                    
                    .stat-icon {
                        width: 36px;
                        height: 36px;
                    }
                    
                    .stat-icon svg {
                        width: 16px;
                        height: 16px;
                    }
                    
                    .stat-value {
                        font-size: 1.15rem;
                    }
                    
                    .stat-label {
                        font-size: 0.65rem;
                    }
                    
                    .user-avatar-large {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .user-avatar-large svg {
                        width: 24px;
                        height: 24px;
                    }
                    
                    .user-details h2 {
                        font-size: 0.95rem;
                    }
                    
                    .action-btn {
                        padding: 0.5rem 0.75rem;
                        font-size: 0.7rem;
                    }
                    
                    .badge {
                        font-size: 0.6rem;
                        padding: 0.15rem 0.4rem;
                    }
                }

                /* Mobile Extra Small - iPhone SE (< 375px) */
                @media (max-width: 374px) {
                    .dashboard-sidebar {
                        width: 220px;
                    }
                    
                    .sidebar-brand {
                        padding: 0.75rem;
                    }
                    
                    .brand-text {
                        font-size: 0.9rem;
                    }
                    
                    .nav-item {
                        padding: 0.5rem 0.625rem;
                        font-size: 0.75rem;
                    }
                    
                    .dashboard-header {
                        padding: 0.375rem 0.5rem;
                    }
                    
                    .menu-toggle {
                        padding: 0.375rem;
                    }
                    
                    .page-content {
                        padding: 0.5rem;
                    }
                    
                    .page-title {
                        margin-bottom: 0.625rem;
                    }
                    
                    .page-title h1 {
                        font-size: 0.9rem;
                    }
                    
                    .page-title p {
                        font-size: 0.7rem;
                    }
                    
                    .dashboard-stats-grid {
                        gap: 0.375rem;
                    }
                    
                    .stat-card {
                        padding: 0.5rem;
                        gap: 0.5rem;
                    }
                    
                    .stat-icon {
                        width: 32px;
                        height: 32px;
                    }
                    
                    .stat-icon svg {
                        width: 14px;
                        height: 14px;
                    }
                    
                    .stat-value {
                        font-size: 1rem;
                    }
                    
                    .stat-label {
                        font-size: 0.6rem;
                    }
                    
                    .quick-actions-section h3 {
                        font-size: 0.75rem;
                    }
                    
                    .action-btn {
                        padding: 0.4rem 0.625rem;
                        font-size: 0.65rem;
                    }
                    
                    .user-info-card {
                        padding: 0.75rem;
                        gap: 0.625rem;
                    }
                    
                    .user-avatar-large {
                        width: 45px;
                        height: 45px;
                    }
                    
                    .user-avatar-large svg {
                        width: 20px;
                        height: 20px;
                    }
                    
                    .user-details h2 {
                        font-size: 0.875rem;
                    }
                    
                    .user-details .user-email {
                        font-size: 0.65rem;
                    }
                    
                    .badge {
                        font-size: 0.55rem;
                        padding: 0.1rem 0.3rem;
                    }
                    
                    .location-item {
                        font-size: 0.6rem;
                    }
                    
                    .header-right {
                        gap: 0.25rem;
                    }
                    
                    .status-indicator {
                        padding: 0.25rem;
                    }
                }

                /* Landscape Mode for Mobile */
                @media (max-height: 480px) and (orientation: landscape) {
                    .dashboard-header {
                        padding: 0.375rem 0.75rem;
                    }
                    
                    .page-content {
                        padding: 0.5rem 1rem;
                    }
                    
                    .page-title {
                        margin-bottom: 0.5rem;
                    }
                    
                    .page-title h1 {
                        font-size: 1rem;
                    }
                    
                    .dashboard-stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 0.5rem;
                    }
                    
                    .stat-card {
                        padding: 0.5rem;
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .stat-icon {
                        width: 30px;
                        height: 30px;
                    }
                    
                    .stat-value {
                        font-size: 1rem;
                    }
                    
                    .stat-label {
                        font-size: 0.6rem;
                    }
                    
                    .user-info-card {
                        flex-direction: row;
                        padding: 0.75rem;
                    }
                    
                    .quick-action-buttons {
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    
                    .action-btn {
                        flex: 1 1 auto;
                        min-width: 100px;
                    }
                }

                /* Chess/Game Responsive */
                @media (max-width: 768px) {
                    .chess-game,
                    .tictactoe-game,
                    .memory-game {
                        padding: 0.5rem;
                    }
                }

                /* Print Styles */
                @media print {
                    .dashboard-sidebar,
                    .sidebar-overlay,
                    .header-right,
                    .menu-toggle {
                        display: none !important;
                    }
                    
                    .dashboard-main {
                        margin-left: 0 !important;
                    }
                    
                    .page-content {
                        padding: 0;
                    }
                }
            `})]})}const qx=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),kd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),t.jsx("polyline",{points:"22,6 12,13 2,6"})]}),Nd=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),Sd=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})}),Jx=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),Cd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),t.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),zd=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),t.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),Vr=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),Td=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})}),Xx=()=>t.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:[t.jsx("path",{fill:"#EA4335",d:"M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"}),t.jsx("path",{fill:"#34A853",d:"M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"}),t.jsx("path",{fill:"#4A90E2",d:"M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"})]});function Zx(){const e=_t(),{register:r,loading:n,error:a}=kr(),[i,s]=p.useState("email"),[o,c]=p.useState({name:"",email:"",phone:"",password:"",confirmPassword:""}),[l,m]=p.useState(!1),[h,x]=p.useState(!1),[g,E]=p.useState({}),[w,v]=p.useState(!1),N=[{label:"Minimal 8 karakter",test:y=>y.length>=8},{label:"Mengandung huruf besar",test:y=>/[A-Z]/.test(y)},{label:"Mengandung huruf kecil",test:y=>/[a-z]/.test(y)},{label:"Mengandung angka",test:y=>/[0-9]/.test(y)},{label:"Mengandung karakter spesial",test:y=>/[!@#$%^&*]/.test(y)}],d=()=>{const y={};return o.name?o.name.length<2&&(y.name="Nama minimal 2 karakter"):y.name="Nama wajib diisi",i==="email"?o.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(y.email="Format email tidak valid"):y.email="Email wajib diisi":o.phone?/^(\+62|62|0)[0-9]{9,12}$/.test(o.phone.replace(/\s/g,""))||(y.phone="Format nomor HP tidak valid"):y.phone="Nomor HP wajib diisi",o.password?o.password.length<8&&(y.password="Password minimal 8 karakter"):y.password="Password wajib diisi",o.confirmPassword?o.password!==o.confirmPassword&&(y.confirmPassword="Password tidak cocok"):y.confirmPassword="Konfirmasi password",E(y),Object.keys(y).length===0},u=y=>{const{name:I,value:O}=y.target;c(R=>({...R,[I]:O})),g[I]&&E(R=>({...R,[I]:""}))},f=async y=>{if(y.preventDefault(),!!d())try{const I=i==="email"?o.email:o.phone;await r(I,o.password,o.name),v(!0),setTimeout(()=>{e("/login")},2e3)}catch(I){console.error("Registration failed:",I)}},j="http://localhost:3000/api/auth",b=y=>{window.location.href=`${j}/${y}`};return w?t.jsxs("div",{className:"login-container",children:[t.jsx("div",{className:"animated-bg"}),t.jsx("div",{className:"grid-overlay"}),t.jsx("div",{className:"orbs",children:[...Array(4)].map((y,I)=>t.jsx("div",{className:"orb"},I))}),t.jsx("div",{className:"particles",children:[...Array(12)].map((y,I)=>t.jsx("div",{className:"particle"},I))}),t.jsxs("div",{className:"glass-card login-card",children:[t.jsx("div",{className:"corner-decoration top-left"}),t.jsx("div",{className:"corner-decoration bottom-right"}),t.jsxs("div",{className:"login-success",children:[t.jsx("div",{className:"success-icon",children:t.jsx(Td,{})}),t.jsx("h2",{children:"Pendaftaran Berhasil!"}),t.jsx("p",{className:"mt-2",style:{color:"var(--text-secondary)"},children:"Mengalihkan ke halaman login..."})]})]})]}):t.jsxs("div",{className:"login-container",children:[t.jsx("div",{className:"animated-bg"}),t.jsx("div",{className:"grid-overlay"}),t.jsxs("div",{className:"orbs",children:[t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"})]}),t.jsx("div",{className:"particles",children:[...Array(12)].map((y,I)=>t.jsx("div",{className:"particle"},I))}),t.jsx("div",{className:"decoration-dots top-right"}),t.jsx("div",{className:"decoration-dots bottom-left"}),t.jsxs("div",{className:"glass-card login-card",children:[t.jsx("div",{className:"corner-decoration top-left"}),t.jsx("div",{className:"corner-decoration bottom-right"}),t.jsxs("div",{className:"login-brand",children:[t.jsx("div",{className:"brand-logo",children:t.jsx(Jx,{})}),t.jsxs("h1",{className:"brand-name",children:[t.jsx("span",{className:"text-gradient",children:"Lutfi-Lab"}),".ID"]}),t.jsx("p",{className:"brand-tagline",children:"Buat Akun Baru"})]}),a&&t.jsxs("div",{className:"alert alert-error",children:[t.jsx(Vr,{}),t.jsx("span",{children:a})]}),t.jsx("div",{className:"social-login-grid",children:t.jsxs("button",{className:"social-btn-full google",type:"button",onClick:()=>b("google"),children:[t.jsx(Xx,{}),t.jsx("span",{children:"Daftar dengan Google"})]})}),t.jsx("div",{className:"login-divider",children:t.jsx("span",{children:"atau daftar dengan email"})}),t.jsxs("div",{className:"login-method-toggle",children:[t.jsxs("button",{type:"button",className:`method-btn ${i==="email"?"active":""}`,onClick:()=>s("email"),children:[t.jsx(kd,{}),"Email"]}),t.jsxs("button",{type:"button",className:`method-btn ${i==="phone"?"active":""}`,onClick:()=>s("phone"),children:[t.jsx(Nd,{}),"Nomor HP"]})]}),t.jsxs("form",{onSubmit:f,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"name",children:"Nama Lengkap"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(qx,{})}),t.jsx("input",{type:"text",id:"name",name:"name",className:`form-input ${g.name?"error":""}`,placeholder:"Muhammad Lutfi",value:o.name,onChange:u,autoComplete:"name"})]}),g.name&&t.jsxs("p",{className:"form-error",children:[t.jsx(Vr,{}),g.name]})]}),i==="email"?t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"email",children:"Alamat Email"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(kd,{})}),t.jsx("input",{type:"email",id:"email",name:"email",className:`form-input ${g.email?"error":""}`,placeholder:"email@example.com",value:o.email,onChange:u,autoComplete:"email"})]}),g.email&&t.jsxs("p",{className:"form-error",children:[t.jsx(Vr,{}),g.email]})]}):t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"phone",children:"Nomor HP"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(Nd,{})}),t.jsx("input",{type:"tel",id:"phone",name:"phone",className:`form-input ${g.phone?"error":""}`,placeholder:"+62 812 3456 7890",value:o.phone,onChange:u,autoComplete:"tel"})]}),g.phone&&t.jsxs("p",{className:"form-error",children:[t.jsx(Vr,{}),g.phone]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"password",children:"Password"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(Sd,{})}),t.jsx("input",{type:l?"text":"password",id:"password",name:"password",className:`form-input ${g.password?"error":""}`,placeholder:"••••••••",value:o.password,onChange:u,autoComplete:"new-password"}),t.jsx("button",{type:"button",className:"password-toggle",onClick:()=>m(!l),children:l?t.jsx(zd,{}):t.jsx(Cd,{})})]}),g.password&&t.jsxs("p",{className:"form-error",children:[t.jsx(Vr,{}),g.password]}),o.password&&t.jsx("div",{style:{marginTop:"0.75rem"},children:N.map((y,I)=>t.jsxs("div",{style:{fontSize:"0.75rem",display:"flex",alignItems:"center",gap:"0.5rem",color:y.test(o.password)?"#34d399":"var(--text-muted)",marginBottom:"0.25rem"},children:[y.test(o.password)?t.jsx(Td,{}):t.jsx("span",{style:{width:18},children:"○"}),y.label]},I))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",htmlFor:"confirmPassword",children:"Konfirmasi Password"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("span",{className:"form-icon",children:t.jsx(Sd,{})}),t.jsx("input",{type:h?"text":"password",id:"confirmPassword",name:"confirmPassword",className:`form-input ${g.confirmPassword?"error":""}`,placeholder:"••••••••",value:o.confirmPassword,onChange:u,autoComplete:"new-password"}),t.jsx("button",{type:"button",className:"password-toggle",onClick:()=>x(!h),children:h?t.jsx(zd,{}):t.jsx(Cd,{})})]}),g.confirmPassword&&t.jsxs("p",{className:"form-error",children:[t.jsx(Vr,{}),g.confirmPassword]})]}),t.jsx("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:n,children:n?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"spinner"}),"Mendaftarkan..."]}):"Buat Akun"})]}),t.jsxs("div",{className:"login-footer",children:["Sudah punya akun? ",t.jsx(Do,{to:"/login",children:"Masuk"})]})]}),t.jsx(Qi,{})]})}function e1(){const e=_t(),[r]=Xp(),{setUser:n,setAccessToken:a,setRefreshToken:i}=kr();return p.useEffect(()=>{const s=r.get("token"),o=r.get("refresh");if(r.get("error")){e("/login?error=oauth_failed");return}s&&o?(a(s),i(o),localStorage.setItem("accessToken",s),localStorage.setItem("refreshToken",o),fetch("/api/auth/profile",{headers:{Authorization:`Bearer ${s}`}}).then(l=>l.json()).then(l=>{n(l),localStorage.setItem("user",JSON.stringify(l)),e("/dashboard")}).catch(()=>{e("/login?error=profile_failed")})):e("/login?error=missing_tokens")},[r,e,n,a,i]),t.jsxs("div",{className:"login-container",children:[t.jsx("div",{className:"animated-bg"}),t.jsx("div",{className:"grid-overlay"}),t.jsxs("div",{className:"orbs",children:[t.jsx("div",{className:"orb"}),t.jsx("div",{className:"orb"})]}),t.jsx("div",{className:"particles",children:[...Array(8)].map((s,o)=>t.jsx("div",{className:"particle"},o))}),t.jsxs("div",{className:"glass-card login-card",style:{textAlign:"center",padding:"3rem"},children:[t.jsx("div",{className:"spinner",style:{width:40,height:40,margin:"0 auto 1.5rem",borderWidth:3}}),t.jsx("h2",{style:{marginBottom:"0.5rem"},children:"Memproses Login..."}),t.jsx("p",{style:{color:"var(--text-muted)"},children:"Mohon tunggu sebentar"})]}),t.jsx(Qi,{})]})}function t1({children:e}){const{isAuthenticated:r,loading:n}=kr();return n?t.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0f1a"},children:t.jsx("div",{style:{color:"#6366f1",fontFamily:"monospace"},children:"Loading..."})}):r?e:t.jsx(Jp,{to:"/login",replace:!0})}const r1=()=>{const e=_t();return t.jsxs("div",{style:ue.container,children:[t.jsxs("div",{style:ue.content,children:[t.jsx("div",{style:ue.glitchContainer,children:t.jsx("h1",{style:ue.errorCode,"data-text":"404",children:"404"})}),t.jsx("div",{style:ue.iconContainer,children:t.jsxs("svg",{viewBox:"0 0 24 24",style:ue.icon,children:[t.jsx("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",style:{opacity:.2}}),t.jsx("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"})]})}),t.jsx("h2",{style:ue.title,children:"Page Not Found"}),t.jsx("p",{style:ue.description,children:"Oops! The page you're looking for doesn't exist or has been moved."}),t.jsxs("div",{style:ue.actions,children:[t.jsx("button",{onClick:()=>e(-1),style:ue.backBtn,children:"← Go Back"}),t.jsx("button",{onClick:()=>e("/dashboard"),style:ue.homeBtn,children:"🏠 Dashboard"})]}),t.jsxs("div",{style:ue.terminal,children:[t.jsxs("div",{style:ue.terminalHeader,children:[t.jsx("span",{style:ue.terminalDot}),t.jsx("span",{style:{...ue.terminalDot,background:"#fbbf24"}}),t.jsx("span",{style:{...ue.terminalDot,background:"#22c55e"}})]}),t.jsxs("div",{style:ue.terminalBody,children:[t.jsxs("p",{children:[t.jsx("span",{style:ue.prompt,children:"$"})," fetch('/page')"]}),t.jsx("p",{style:ue.error,children:"Error: 404 - Resource not found"}),t.jsxs("p",{children:[t.jsx("span",{style:ue.prompt,children:"$"})," ",t.jsx("span",{style:ue.cursor,children:"_"})]})]})]})]}),t.jsx("div",{style:ue.particles,children:[...Array(20)].map((r,n)=>t.jsx("div",{style:{...ue.particle,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`}},n))})]})},n1=()=>{const e=_t();return t.jsx("div",{style:{...ue.container,background:"linear-gradient(135deg, #1a0a0a 0%, #2a1515 100%)"},children:t.jsxs("div",{style:ue.content,children:[t.jsx("div",{style:ue.glitchContainer,children:t.jsx("h1",{style:{...ue.errorCode,color:"#ef4444"},"data-text":"500",children:"500"})}),t.jsx("div",{style:{...ue.iconContainer,color:"#ef4444"},children:t.jsx("svg",{viewBox:"0 0 24 24",style:ue.icon,children:t.jsx("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),t.jsx("h2",{style:ue.title,children:"Server Error"}),t.jsx("p",{style:ue.description,children:"Something went wrong on our end. Our team has been notified and is working on it."}),t.jsxs("div",{style:ue.actions,children:[t.jsx("button",{onClick:()=>window.location.reload(),style:{...ue.backBtn,background:"rgba(239, 68, 68, 0.2)",borderColor:"rgba(239, 68, 68, 0.4)"},children:"🔄 Retry"}),t.jsx("button",{onClick:()=>e("/dashboard"),style:ue.homeBtn,children:"🏠 Dashboard"})]})]})})},a1=()=>{const e=_t();return t.jsx("div",{style:{...ue.container,background:"linear-gradient(135deg, #0a1a0a 0%, #152515 100%)"},children:t.jsxs("div",{style:ue.content,children:[t.jsx("div",{style:ue.glitchContainer,children:t.jsx("h1",{style:{...ue.errorCode,color:"#f59e0b"},"data-text":"403",children:"403"})}),t.jsx("div",{style:{...ue.iconContainer,color:"#f59e0b"},children:t.jsx("svg",{viewBox:"0 0 24 24",style:ue.icon,children:t.jsx("path",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),t.jsx("h2",{style:ue.title,children:"Access Forbidden"}),t.jsx("p",{style:ue.description,children:"You don't have permission to access this resource. Please contact an administrator."}),t.jsxs("div",{style:ue.actions,children:[t.jsx("button",{onClick:()=>e(-1),style:{...ue.backBtn,background:"rgba(245, 158, 11, 0.2)",borderColor:"rgba(245, 158, 11, 0.4)"},children:"← Go Back"}),t.jsx("button",{onClick:()=>e("/login"),style:ue.homeBtn,children:"🔐 Login"})]})]})})},ue={container:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",position:"relative",overflow:"hidden",padding:"20px"},content:{textAlign:"center",zIndex:1,maxWidth:"500px"},glitchContainer:{marginBottom:"20px"},errorCode:{fontSize:"120px",fontWeight:"900",color:"#6366f1",textShadow:"0 0 40px rgba(99, 102, 241, 0.5)",margin:0,lineHeight:1,fontFamily:"monospace",animation:"glitch 2s infinite"},iconContainer:{color:"#6366f1",marginBottom:"25px"},icon:{width:"80px",height:"80px"},title:{fontSize:"28px",fontWeight:"700",color:"#fff",marginBottom:"15px"},description:{fontSize:"16px",color:"#94a3b8",marginBottom:"30px",lineHeight:"1.6"},actions:{display:"flex",justifyContent:"center",gap:"15px",marginBottom:"40px",flexWrap:"wrap"},backBtn:{background:"rgba(99, 102, 241, 0.2)",color:"#a5b4fc",border:"1px solid rgba(99, 102, 241, 0.4)",padding:"12px 25px",borderRadius:"10px",fontSize:"14px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s"},homeBtn:{background:"linear-gradient(135deg, #6366f1, #8b5cf6)",color:"#fff",border:"none",padding:"12px 25px",borderRadius:"10px",fontSize:"14px",fontWeight:"600",cursor:"pointer",boxShadow:"0 10px 30px rgba(99, 102, 241, 0.3)",transition:"all 0.3s"},terminal:{background:"rgba(0, 0, 0, 0.5)",borderRadius:"12px",overflow:"hidden",textAlign:"left",border:"1px solid rgba(99, 102, 241, 0.3)"},terminalHeader:{display:"flex",gap:"8px",padding:"12px 15px",background:"rgba(0, 0, 0, 0.3)"},terminalDot:{width:"12px",height:"12px",borderRadius:"50%",background:"#ef4444"},terminalBody:{padding:"15px",fontFamily:"monospace",fontSize:"13px",color:"#94a3b8"},prompt:{color:"#22c55e"},error:{color:"#ef4444"},cursor:{animation:"blink 1s infinite"},particles:{position:"absolute",inset:0,pointerEvents:"none"},particle:{position:"absolute",width:"4px",height:"4px",background:"rgba(99, 102, 241, 0.5)",borderRadius:"50%",animation:"float 5s ease-in-out infinite"}},Io=document.createElement("style");Io.textContent=`
    @keyframes glitch {
        0%, 100% { text-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
        25% { text-shadow: -3px 0 40px rgba(255, 0, 255, 0.5), 3px 0 40px rgba(0, 255, 255, 0.5); }
        50% { text-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
        75% { text-shadow: 3px 0 40px rgba(255, 0, 255, 0.5), -3px 0 40px rgba(0, 255, 255, 0.5); }
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
`;document.getElementById("error-page-styles")||(Io.id="error-page-styles",document.head.appendChild(Io));function i1(){return t.jsx(sg,{children:t.jsx(ag,{children:t.jsx(ng,{children:t.jsx(Zh,{children:t.jsxs(Uh,{children:[t.jsx(Ot,{path:"/login",element:t.jsx(bg,{})}),t.jsx(Ot,{path:"/register",element:t.jsx(Zx,{})}),t.jsx(Ot,{path:"/oauth-callback",element:t.jsx(e1,{})}),t.jsx(Ot,{path:"/dashboard",element:t.jsx(t1,{children:t.jsx(Kx,{})})}),t.jsx(Ot,{path:"/",element:t.jsx(Jp,{to:"/login",replace:!0})}),t.jsx(Ot,{path:"/403",element:t.jsx(a1,{})}),t.jsx(Ot,{path:"/500",element:t.jsx(n1,{})}),t.jsx(Ot,{path:"*",element:t.jsx(r1,{})})]})})})})})}Bs.createRoot(document.getElementById("root")).render(t.jsx(Od.StrictMode,{children:t.jsx(i1,{})}));
