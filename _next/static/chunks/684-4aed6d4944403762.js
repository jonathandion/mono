(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{71:function(e,t,r){"use strict";r.d(t,{k:function(){return ew}});var n=r(5250),s=r(79);let a=(0,s.createContext)(null),i=e=>{let{instance:t,children:r}=e;return(0,n.jsx)(a.Provider,{value:t,children:r})},o=()=>{let e=(0,s.useContext)(a);if(!e)throw Error("Cast instance not provided to <CastProvider />");return e},l=e=>{let[t,r]=(0,s.useState)(null),n=o();return(0,s.useEffect)(()=>{n.on(e,r)},[n,e]),t};var c=Object.defineProperty,d=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r);let h=(e,t,r,n)=>{if("length"===r||"prototype"===r||"arguments"===r||"caller"===r)return;let s=Object.getOwnPropertyDescriptor(e,r),a=Object.getOwnPropertyDescriptor(t,r);!f(s,a)&&n||Object.defineProperty(e,r,a)},f=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},m=(e,t)=>{let r=Object.getPrototypeOf(t);r!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,r)},p=(e,t)=>`/* Wrapped ${e}*/
${t}`,v=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),g=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),y=(e,t,r)=>{let n=""===r?"":`with ${r.trim()}() `,s=p.bind(null,n,t.toString());Object.defineProperty(s,"name",g),Object.defineProperty(e,"toString",{...v,value:s})},x=new WeakMap,b=(e,t)=>{switch(t.field){case"displayName":return{...e,displayName:t.value};case"imageUrl":return{...e,imageUrl:t.value};case"duration":return{...e,duration:t.value};case"title":return{...e,title:t.value};case"mediaInfo":return{...e,mediaInfo:t.value};case"volumeLevel":return{...e,volume:t.value};case"currentTime":return{...e,currentTime:t.value};case"isMuted":return{...e,isMuted:t.value};case"isMediaLoaded":return{...e,isMediaLoaded:t.value};case"playerState":return{...e,isPlaying:t.value===chrome.cast.media.PlayerState.PLAYING,isPaused:t.value===chrome.cast.media.PlayerState.PAUSED,isIdle:t.value===chrome.cast.media.PlayerState.IDLE,isBuffering:t.value===chrome.cast.media.PlayerState.BUFFERING};default:return e}},w=(e,t)=>({...e,status:t.castState,isConnecting:t.castState===cast.framework.CastState.CONNECTING,isConnected:t.castState===cast.framework.CastState.CONNECTED,noDevicesAvailable:t.castState===cast.framework.CastState.NO_DEVICES_AVAILABLE}),C="cast-session",j=e=>{sessionStorage.setItem(C,e)},N=()=>sessionStorage.getItem(C),S=()=>sessionStorage.removeItem(C);function k(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}let P=(O=function(e,t,r){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t)||!!t.async,s.src=e,t.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(s,t.attrs),t.text&&(s.text=""+t.text),("onload"in s?k:function(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}})(s,r),s.onload||k(s,r),n.appendChild(s)}).__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O,L=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((r,n)=>P(e,t,(e,t)=>{e&&n(e),r(t)}))},E="u">typeof window;var O,_,T={exports:{}},A="object"==typeof Reflect?Reflect:null,R=A&&"function"==typeof A.apply?A.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};_=A&&"function"==typeof A.ownKeys?A.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var I=Number.isNaN||function(e){return e!=e};function F(){F.init.call(this)}T.exports=F,T.exports.once=function(e,t){return new Promise(function(r,n){function s(r){e.removeListener(t,a),n(r)}function a(){"function"==typeof e.removeListener&&e.removeListener("error",s),r([].slice.call(arguments))}W(e,t,a,{once:!0}),"error"!==t&&"function"==typeof e.on&&W(e,"error",s,{once:!0})})},F.EventEmitter=F,F.prototype._events=void 0,F.prototype._eventsCount=0,F.prototype._maxListeners=void 0;var M=10;function D(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function V(e){return void 0===e._maxListeners?F.defaultMaxListeners:e._maxListeners}function B(e,t,r,n){var s,a,i;if(D(r),void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),a=e._events),i=a[t]),void 0===i)i=a[t]=r,++e._eventsCount;else if("function"==typeof i?i=a[t]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),(s=V(e))>0&&i.length>s&&!i.warned){i.warned=!0;var o=Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=e,o.type=t,o.count=i.length,console&&console.warn&&console.warn(o)}return e}function U(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function H(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},s=U.bind(n);return s.listener=r,n.wrapFn=s,s}function G(e,t,r){var n=e._events;if(void 0===n)return[];var s=n[t];return void 0===s?[]:"function"==typeof s?r?[s.listener||s]:[s]:r?function(e){for(var t=Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(s):z(s,s.length)}function Z(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function z(e,t){for(var r=Array(t),n=0;n<t;++n)r[n]=e[n];return r}function W(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else if("function"==typeof e.addEventListener)e.addEventListener(t,function s(a){n.once&&e.removeEventListener(t,s),r(a)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(F,"defaultMaxListeners",{enumerable:!0,get:function(){return M},set:function(e){if("number"!=typeof e||e<0||I(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");M=e}}),F.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},F.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||I(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},F.prototype.getMaxListeners=function(){return V(this)},F.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,s=this._events;if(void 0!==s)n=n&&void 0===s.error;else if(!n)return!1;if(n){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,i=Error("Unhandled error."+(a?" ("+a.message+")":""));throw i.context=a,i}var o=s[e];if(void 0===o)return!1;if("function"==typeof o)R(o,this,t);else for(var l=o.length,c=z(o,l),r=0;r<l;++r)R(c[r],this,t);return!0},F.prototype.addListener=function(e,t){return B(this,e,t,!1)},F.prototype.on=F.prototype.addListener,F.prototype.prependListener=function(e,t){return B(this,e,t,!0)},F.prototype.once=function(e,t){return D(t),this.on(e,H(this,e,t)),this},F.prototype.prependOnceListener=function(e,t){return D(t),this.prependListener(e,H(this,e,t)),this},F.prototype.removeListener=function(e,t){var r,n,s,a,i;if(D(t),void 0===(n=this._events)||void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(s=-1,a=r.length-1;a>=0;a--)if(r[a]===t||r[a].listener===t){i=r[a].listener,s=a;break}if(s<0)return this;0===s?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,s),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,i||t)}return this},F.prototype.off=F.prototype.removeListener,F.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0==arguments.length){var s,a=Object.keys(r);for(n=0;n<a.length;++n)"removeListener"!==(s=a[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},F.prototype.listeners=function(e){return G(this,e,!0)},F.prototype.rawListeners=function(e){return G(this,e,!1)},F.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):Z.call(e,t)},F.prototype.listenerCount=Z,F.prototype.eventNames=function(){return this._eventsCount>0?_(this._events):[]};var q=T.exports;let K=new q.EventEmitter;var J=r(2494),$=r(1018),Q=r(5706);let Y=(0,$.j)("inline-flex items-center rounded-md border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",{variants:{variant:{default:"border-transparent bg-slate-900 text-slate-50 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",secondary:"border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",destructive:"border-transparent bg-red-500 text-slate-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",outline:"text-slate-950 dark:text-slate-50"}},defaultVariants:{variant:"default"}});function X(e){let{className:t,variant:r,...s}=e;return(0,n.jsx)("div",{className:(0,Q.cn)(Y({variant:r}),t),...s})}var ee=r(466);let et=(0,$.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),er=(0,s.forwardRef)((e,t)=>{let{className:r,variant:s,size:a,asChild:i=!1,...o}=e,l=i?ee.g7:"button";return(0,n.jsx)(l,{className:(0,Q.cn)(et({variant:s,size:a,className:r})),ref:t,...o})});er.displayName="Button";var en=r(908);let es=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsxs)(en.fC,{ref:t,className:(0,Q.cn)("relative flex w-full touch-none select-none items-center",r),...s,children:[(0,n.jsx)(en.fQ,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-slate-900/20 dark:bg-slate-50/20",children:(0,n.jsx)(en.e6,{className:"absolute h-full bg-slate-900 dark:bg-slate-50"})}),(0,n.jsx)(en.bU,{className:"block h-4 w-4 rounded-full border border-slate-200 border-slate-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:border-slate-50/50 dark:bg-slate-950 dark:focus-visible:ring-slate-300"})]})});es.displayName=en.fC.displayName;var ea=r(1768);let ei=(0,$.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),eo=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(ea.f,{ref:t,className:(0,Q.cn)(ei(),r),...s})});eo.displayName=ea.f.displayName;let el=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,Q.cn)("rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",r),...s})});el.displayName="Card";let ec=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,Q.cn)("flex flex-col space-y-1.5 p-6",r),...s})});ec.displayName="CardHeader";let ed=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("h3",{ref:t,className:(0,Q.cn)("font-semibold leading-none tracking-tight",r),...s})});ed.displayName="CardTitle";let eu=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("p",{ref:t,className:(0,Q.cn)("text-sm text-slate-500 dark:text-slate-400",r),...s})});eu.displayName="CardDescription";let eh=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,Q.cn)("p-6 pt-0",r),...s})});eh.displayName="CardContent";let ef=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,Q.cn)("flex items-center p-6 pt-0",r),...s})});ef.displayName="CardFooter";var em=r(2749);let ep=em.fC,ev=em.wy,eg=em.Fw,ey=()=>(0,n.jsxs)("div",{role:"status",children:[(0,n.jsxs)("svg",{"aria-hidden":"true",className:"inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,n.jsx)("span",{className:"sr-only",children:"Loading..."})]}),ex=()=>{let{player:e,getState:t}=o(),r=t(),{isConnected:a}=r,{toggleMute:i,togglePlay:c,setVolume:d,seek:u,seekPercentage:h,getFormattedTime:f,getState:m}=e,p=m(),{volume:v,isMuted:g,currentTime:y,isBuffering:x,progress:b,duration:w,isPlaying:C,isMediaLoaded:j}=p,[N,S]=(0,s.useState)(y),[k,P]=(0,s.useState)(v);return l("playerStateChanged"),l("castStateChanged"),(0,s.useEffect)(()=>{P(v)},[v]),(0,s.useEffect)(()=>{S(b)},[b]),(0,n.jsxs)(el,{className:"!bg-inherit m-auto",children:[(0,n.jsxs)(ec,{className:"flex justify-between flex-row items-center",children:[(0,n.jsxs)("div",{className:"grid gap-2.5",children:[(0,n.jsx)(ed,{children:"Sintel (2010) "}),(0,n.jsx)(eu,{children:"Third Open Movie by Blender Foundation"}),(0,n.jsxs)("div",{className:"flex align-items",children:[(0,n.jsx)(X,{variant:"outline",className:"mr-2",children:"Animation"}),(0,n.jsx)(X,{variant:"outline",className:"mr-2",children:"Short"}),(0,n.jsx)(X,{variant:"outline",children:"Fantasy"})]})]}),(0,n.jsx)("img",{className:"w-full max-w-xs h-32 object-cover border border-slate-800 rounded-md",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",alt:"Sintel Poster"})]}),(0,n.jsxs)(eh,{children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)(er,{disabled:!a,className:"w-20",variant:"outline",onClick:()=>{e.endCast()},children:(0,n.jsx)(J.iz5,{})}),(0,n.jsx)(er,{disabled:!j,className:"w-20",variant:"outline",onClick:()=>i(),children:g?(0,n.jsx)(J.bx5,{}):(0,n.jsx)(J.gQ8,{})}),(0,n.jsxs)(er,{className:"w-20",onClick:()=>{e.startCast("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4").catch(console.error)},children:[(0,n.jsx)("span",{className:"mr-1",children:"Cast"}),(0,n.jsx)(J.Odl,{})]})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{className:"mr-4 text-xs",children:f(y)}),(0,n.jsx)(es,{defaultValue:[b],disabled:!j||x,className:"my-8",max:100,step:.01,onValueChange:e=>{let[t]=e;S(t)},onValueCommit:e=>{let[t]=e;h(t)},value:[N]}),(0,n.jsx)("span",{className:"ml-4 text-xs",children:f(w)})]}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)(er,{disabled:!j,className:"w-20",variant:"outline",onClick:()=>u(y-15),children:(0,n.jsx)(J.iZo,{})}),(0,n.jsx)(er,{disabled:!j||x,className:"w-60",variant:"outline",onClick:()=>c(),children:(0,n.jsx)(()=>x?(0,n.jsx)(ey,{}):C?(0,n.jsx)(J.fpf,{}):(0,n.jsx)(J.o1U,{}),{})}),(0,n.jsx)(er,{disabled:!j,className:"w-20",variant:"outline",onClick:()=>u(y+15),children:(0,n.jsx)(J.iZo,{className:"transform scale-x-[-1]"})})]}),(0,n.jsxs)(ep,{className:"mt-8",children:[(0,n.jsx)(ev,{asChild:!0,children:(0,n.jsx)(er,{variant:"outline",children:(0,n.jsx)(J.nWS,{})})}),(0,n.jsx)(eg,{className:"w-full",children:(0,n.jsxs)("div",{className:"grid gap-4 mt-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(eo,{children:"Volume"}),(0,n.jsx)(es,{disabled:!j,defaultValue:[v],value:[k],max:1,step:.01,onValueChange:e=>{let[t]=e;P(t)},onValueCommit:e=>{let[t]=e;d(t)}})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(eo,{children:"Cast State"}),(0,n.jsx)("pre",{className:"whitespace-pre-wrap text-sm bg-slate-800/20 rounded-md p-4 mt-4",children:JSON.stringify(r,null,2)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(eo,{children:"Player State"}),(0,n.jsx)("pre",{className:"whitespace-pre-wrap text-sm bg-slate-800/20 rounded-md p-4 mt-4",children:JSON.stringify(p,null,2)})]})]})})]})]})]})},eb=new class{constructor(e){if(u(this,"instance"),u(this,"controller"),u(this,"remotePlayer"),u(this,"state"),u(this,"options"),u(this,"requestSession",async()=>{var e,t,r;let n=null==(e=this.instance)?void 0:e.getCurrentSession();if(n)return n;try{await (null==(t=this.instance)?void 0:t.requestSession())}catch(e){if(e===chrome.cast.ErrorCode.SESSION_ERROR||e===chrome.cast.ErrorCode.CANCEL)return null;throw e}return(null==(r=this.instance)?void 0:r.getCurrentSession())??null}),u(this,"on",(e,t)=>{K.on(e,t)}),u(this,"removeListener",(e,t)=>{K.removeListener(e,t)}),u(this,"getState",()=>this.state),u(this,"player",{state:{currentTime:0,progress:0,volume:1,title:null,imageUrl:null,displayName:null,duration:0,isBuffering:!1,isIdle:!1,isMediaLoaded:!1,isMuted:!1,mediaInfo:null,isPaused:!1,isPlaying:!1},getState:()=>this.player.state,startCast:this.withLazyInit(async(e,t)=>{let r=new chrome.cast.media.MediaInfo(e,t??"video/mp4"),n=await this.requestSession(),s=new chrome.cast.media.LoadRequest(r);n&&await n.loadMedia(s)}),getProgress:()=>this.remotePlayer&&this.controller?this.controller.getSeekPosition(this.remotePlayer.currentTime,this.remotePlayer.duration):this.player.state.progress,toggleMute:()=>{var e;null==(e=this.controller)||e.muteOrUnmute()},getFormattedTime:e=>this.controller?this.controller.getFormattedTime(e):"00:00:00",togglePlay:()=>{var e;null==(e=this.controller)||e.playOrPause()},setVolume:e=>{var t;this.remotePlayer&&(this.remotePlayer.volumeLevel=e,null==(t=this.controller)||t.setVolumeLevel())},seek:e=>{this.remotePlayer&&this.controller&&(this.remotePlayer.currentTime=e,this.controller.seek())},seekPercentage:e=>{if(!this.remotePlayer||!this.controller)return;let t=this.controller.getSeekTime(e,this.remotePlayer.duration);this.remotePlayer.currentTime=t,this.controller.seek()},endCast:()=>{var e;null==(e=this.instance)||e.endCurrentSession(!0)}}),u(this,"onPlayerStateChanged",e=>{let t=b(this.player.state,e);t.progress=this.player.getProgress(),this.player.state=t,K.emit("playerStateChanged",t)}),u(this,"onCastStateChanged",e=>{var t;let r=null==(t=this.instance)?void 0:t.getCurrentSession(),n=w(this.state,e);if(this.state=n,K.emit("castStateChanged",n),r)switch(e.castState){case cast.framework.CastState.CONNECTED:j(r.getSessionId());return;case cast.framework.CastState.NOT_CONNECTED:S();return}}),u(this,"init",function(e,{cacheKey:t=([e])=>e,cache:r=new Map}={}){let n=new Map,s=function(...s){let a=t(s);if(n.has(a))return n.get(a);let i=(async()=>{try{if(r&&await r.has(a))return await r.get(a);let t=await e.apply(this,s);try{return t}finally{r&&await r.set(a,t)}}finally{n.delete(a)}})();return n.set(a,i),i};return function(e,t,{ignoreNonConfigurable:r=!1}={}){let{name:n}=e;for(let n of Reflect.ownKeys(t))h(e,t,n,r);m(e,t),y(e,t,n)}(s,e,{ignoreNonConfigurable:!0}),x.set(s,r),s}(e=>new Promise((t,r)=>{E&&(this.getIsCastApiAvailable(n=>{if(!n){let e=Error("Failed to load the Chromecast API");K.emit("status","rejected"),K.emit("error",e),r(e);return}this.instance=cast.framework.CastContext.getInstance(),this.instance.setOptions(e),this.remotePlayer=new cast.framework.RemotePlayer,this.controller=new cast.framework.RemotePlayerController(this.remotePlayer),this.controller.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE,this.onPlayerStateChanged),this.instance.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,this.onCastStateChanged),K.emit("status","resolved"),t()}),L("https:///www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1").catch(e=>{K.emit("error",Error("Failed to load the Chromecast Script")),K.emit("status","rejected"),r(e)}))}))),this.instance=null,this.controller=null,this.remotePlayer=null,this.options={receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",resumeSavedSession:!0,...e},this.state={status:"NOT_CONNECTED",isConnecting:!1,isConnected:!1,noDevicesAvailable:!1},!E)return;N()&&this.init(this.options)}withLazyInit(e){return async(...t)=>(await this.init(this.options),e(...t))}getIsCastApiAvailable(e){window.__onGCastApiAvailable=e}},ew=()=>(0,n.jsx)(i,{instance:eb,children:(0,n.jsx)(ex,{})})},3304:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5250),s=r(3083),a=r.n(s),i=r(5706);let o={Root:e=>{let{children:t,className:r,...s}=e;return(0,n.jsx)("div",{className:"-mx-6 mt-6 overflow-x-auto overscroll-x-contain px-6 ".concat(a().container),children:(0,n.jsx)("table",{className:(0,i.cn)("w-full border-collapse text-sm",r),...s,children:t})})},HeadCell:e=>{let{children:t,className:r,...s}=e;return(0,n.jsx)("th",{className:(0,i.cn)("py-2 pl-6 font-semibold first:pl-0",r),...s,children:t})},Head:e=>{let{children:t,...r}=e;return(0,n.jsx)("thead",{...r,children:t})},Row:e=>{let{children:t,className:r,...s}=e;return(0,n.jsx)("tr",{className:(0,i.cn)("border-b border-neutral-700/50 text-left",r),...s,children:t})},Cell:e=>{let{children:t,className:r,...s}=e;return(0,n.jsx)("td",{className:(0,i.cn)("whitespace-pre py-2 pl-6 font-mono text-sm leading-6 first:pl-0 first:font-semibold first:text-primary [&:nth-child(2)]:text-slate-400",r),...s,children:t})}};var l={darkMode:!1,primaryHue:48,logo:()=>(0,n.jsx)("h1",{children:"jdion"}),useNextSeoProps:()=>({titleTemplate:"%s – jdion"}),components:{table:o.Root,tr:o.Row,td:o.Cell,thead:o.Head,th:o.HeadCell},nextThemes:{defaultTheme:"dark"},gitTimestamp:(0,n.jsx)(n.Fragment,{}),project:{link:"https://github.com/jonathandion/mono"},feedback:{content:(0,n.jsx)(n.Fragment,{})},footer:{component:(0,n.jsx)(n.Fragment,{}),text:(0,n.jsx)(n.Fragment,{})},toc:{extraContent:(0,n.jsx)(n.Fragment,{})}}},3083:function(e){e.exports={container:"table_container__SLlXg"}},5706:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3230),s=r(9794);let a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,n.W)(t))}}}]);