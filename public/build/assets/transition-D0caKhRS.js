import{r as i,U as E,t as ae}from"./app-DqhGHzoz.js";var Re=Object.defineProperty,Ae=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t,n)=>(Ae(e,typeof t!="symbol"?t+"":t,n),n);let Pe=class{constructor(){G(this,"current",this.detect()),G(this,"handoffState","pending"),G(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},I=new Pe;function ke(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function q(){let e=[],t={addEventListener(n,r,l,s){return n.addEventListener(r,l,s),t.add(()=>n.removeEventListener(r,l,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return ke(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function ce(){let[e]=i.useState(q);return i.useEffect(()=>()=>e.dispose(),[e]),e}let O=(e,t)=>{I.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function de(e){let t=i.useRef(e);return O(()=>{t.current=e},[e]),t}let $=function(e){let t=de(e);return E.useCallback((...n)=>t.current(...n),[t])};function X(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function D(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}var pe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(pe||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function me(){let e=xe();return i.useCallback(t=>Ne({mergeRefs:e,...t}),[e])}function Ne({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:s=!0,name:o,mergeRefs:a}){a=a??He;let u=he(t,e);if(s)return M(u,n,r,o,a);let p=l??0;if(p&2){let{static:c=!1,...h}=u;if(c)return M(h,n,r,o,a)}if(p&1){let{unmount:c=!0,...h}=u;return D(c?0:1,{0(){return null},1(){return M({...h,hidden:!0,style:{display:"none"}},n,r,o,a)}})}return M(u,n,r,o,a)}function M(e,t={},n,r,l){let{as:s=n,children:o,refName:a="ref",...u}=Q(e,["unmount","static"]),p=e.ref!==void 0?{[a]:e.ref}:{},c=typeof o=="function"?o(t):o;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(t)),u["aria-labelledby"]&&u["aria-labelledby"]===u.id&&(u["aria-labelledby"]=void 0);let h={};if(t){let v=!1,d=[];for(let[f,g]of Object.entries(t))typeof g=="boolean"&&(v=!0),g===!0&&d.push(f.replace(/([A-Z])/g,m=>`-${m.toLowerCase()}`));if(v){h["data-headlessui-state"]=d.join(" ");for(let f of d)h[`data-${f}`]=""}}if(s===i.Fragment&&(Object.keys(R(u)).length>0||Object.keys(R(h)).length>0))if(!i.isValidElement(c)||Array.isArray(c)&&c.length>1){if(Object.keys(R(u)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(R(u)).concat(Object.keys(R(h))).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`))}else{let v=c.props,d=v==null?void 0:v.className,f=typeof d=="function"?(...C)=>X(d(...C),u.className):X(d,u.className),g=f?{className:f}:{},m=he(c.props,R(Q(u,["ref"])));for(let C in h)C in m&&delete h[C];return i.cloneElement(c,Object.assign({},m,h,p,{ref:l(Le(c),p.ref)},g))}return i.createElement(s,Object.assign({},Q(u,["ref"]),s!==i.Fragment&&p,s!==i.Fragment&&h),c)}function xe(){let e=i.useRef([]),t=i.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function He(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function he(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[l=>{var s;return(s=l==null?void 0:l.preventDefault)==null?void 0:s.call(l)}]);for(let r in n)Object.assign(t,{[r](l,...s){let o=n[r];for(let a of o){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;a(l,...s)}}});return t}function ee(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function R(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Q(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Le(e){return E.version.split(".")[0]>="19"?e.props.ref:e.ref}let ge=Symbol();function rt(e,t=!0){return Object.assign(e,{[ge]:t})}function ve(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=$(r=>{for(let l of t.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return e.every(r=>r==null||(r==null?void 0:r[ge]))?void 0:n}function Ue(e=0){let[t,n]=i.useState(e),r=i.useCallback(u=>n(u),[t]),l=i.useCallback(u=>n(p=>p|u),[t]),s=i.useCallback(u=>(t&u)===u,[t]),o=i.useCallback(u=>n(p=>p&~u),[n]),a=i.useCallback(u=>n(p=>p^u),[n]);return{flags:t,setFlag:r,addFlag:l,hasFlag:s,removeFlag:o,toggleFlag:a}}var Me={},oe,fe;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((oe=process==null?void 0:Me)==null?void 0:oe.NODE_ENV)==="test"&&typeof((fe=Element==null?void 0:Element.prototype)==null?void 0:fe.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var Ie=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(Ie||{});function qe(e){let t={};for(let n in e)e[n]===!0&&(t[`data-${n}`]="");return t}function De(e,t,n,r){let[l,s]=i.useState(n),{hasFlag:o,addFlag:a,removeFlag:u}=Ue(e&&l?3:0),p=i.useRef(!1),c=i.useRef(!1),h=ce();return O(()=>{var v;if(e){if(n&&s(!0),!t){n&&a(3);return}return(v=r==null?void 0:r.start)==null||v.call(r,n),Ve(t,{inFlight:p,prepare(){c.current?c.current=!1:c.current=p.current,p.current=!0,!c.current&&(n?(a(3),u(4)):(a(4),u(2)))},run(){c.current?n?(u(3),a(4)):(u(4),a(3)):n?u(1):a(1)},done(){var d;c.current&&typeof t.getAnimations=="function"&&t.getAnimations().length>0||(p.current=!1,u(7),n||s(!1),(d=r==null?void 0:r.end)==null||d.call(r,n))}})}},[e,n,t,h]),e?[l,{closed:o(1),enter:o(2),leave:o(4),transition:o(2)||o(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Ve(e,{prepare:t,run:n,done:r,inFlight:l}){let s=q();return Ke(e,{prepare:t,inFlight:l}),s.nextFrame(()=>{n(),s.requestAnimationFrame(()=>{s.add(ze(e,r))})}),s.dispose}function ze(e,t){var n,r;let l=q();if(!e)return l.dispose;let s=!1;l.add(()=>{s=!0});let o=(r=(n=e.getAnimations)==null?void 0:n.call(e).filter(a=>a instanceof CSSTransition))!=null?r:[];return o.length===0?(t(),l.dispose):(Promise.allSettled(o.map(a=>a.finished)).then(()=>{s||t()}),l.dispose)}function Ke(e,{inFlight:t,prepare:n}){if(t!=null&&t.current){n();return}let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}let V=i.createContext(null);V.displayName="OpenClosedContext";var A=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(A||{});function ye(){return i.useContext(V)}function _e({value:e,children:t}){return E.createElement(V.Provider,{value:e},t)}function lt({children:e}){return E.createElement(V.Provider,{value:null},e)}function Be(){let e=typeof document>"u";return"useSyncExternalStore"in ae?(t=>t.useSyncExternalStore)(ae)(()=>()=>{},()=>!1,()=>!e):!1}function be(){let e=Be(),[t,n]=i.useState(I.isHandoffComplete);return t&&I.isHandoffComplete===!1&&n(!1),i.useEffect(()=>{t!==!0&&n(!0)},[t]),i.useEffect(()=>I.handoff(),[]),e?!1:t}function We(){let e=i.useRef(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ee(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:Fe)!==i.Fragment||E.Children.count(e.children)===1}let z=i.createContext(null);z.displayName="TransitionContext";var Ye=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ye||{});function Ze(){let e=i.useContext(z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ge(){let e=i.useContext(K);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let K=i.createContext(null);K.displayName="NestingContext";function _(e){return"children"in e?_(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ce(e,t){let n=de(e),r=i.useRef([]),l=We(),s=ce(),o=$((d,f=T.Hidden)=>{let g=r.current.findIndex(({el:m})=>m===d);g!==-1&&(D(f,{[T.Unmount](){r.current.splice(g,1)},[T.Hidden](){r.current[g].state="hidden"}}),s.microTask(()=>{var m;!_(r)&&l.current&&((m=n.current)==null||m.call(n))}))}),a=$(d=>{let f=r.current.find(({el:g})=>g===d);return f?f.state!=="visible"&&(f.state="visible"):r.current.push({el:d,state:"visible"}),()=>o(d,T.Unmount)}),u=i.useRef([]),p=i.useRef(Promise.resolve()),c=i.useRef({enter:[],leave:[]}),h=$((d,f,g)=>{u.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([m])=>m!==d)),t==null||t.chains.current[f].push([d,new Promise(m=>{u.current.push(m)})]),t==null||t.chains.current[f].push([d,new Promise(m=>{Promise.all(c.current[f].map(([C,P])=>P)).then(()=>m())})]),f==="enter"?p.current=p.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(f)):g(f)}),v=$((d,f,g)=>{Promise.all(c.current[f].splice(0).map(([m,C])=>C)).then(()=>{var m;(m=u.current.shift())==null||m()}).then(()=>g(f))});return i.useMemo(()=>({children:r,register:a,unregister:o,onStart:h,onStop:v,wait:p,chains:c}),[a,o,r,h,v,c,p])}let Fe=i.Fragment,$e=pe.RenderStrategy;function Qe(e,t){var n,r;let{transition:l=!0,beforeEnter:s,afterEnter:o,beforeLeave:a,afterLeave:u,enter:p,enterFrom:c,enterTo:h,entered:v,leave:d,leaveFrom:f,leaveTo:g,...m}=e,[C,P]=i.useState(null),y=i.useRef(null),w=Ee(e),j=ve(...w?[y,t,P]:t===null?[]:[t]),te=(n=m.unmount)==null||n?T.Unmount:T.Hidden,{show:F,appear:ne,initial:re}=Ze(),[S,B]=i.useState(F?"visible":"hidden"),le=Ge(),{register:x,unregister:H}=le;O(()=>x(y),[x,y]),O(()=>{if(te===T.Hidden&&y.current){if(F&&S!=="visible"){B("visible");return}return D(S,{hidden:()=>H(y),visible:()=>x(y)})}},[S,y,x,H,F,te]);let W=be();O(()=>{if(w&&W&&S==="visible"&&y.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[y,S,W,w]);let Se=re&&!ne,ie=ne&&F&&re,Y=i.useRef(!1),L=Ce(()=>{Y.current||(B("hidden"),H(y))},le),ue=$(Z=>{Y.current=!0;let U=Z?"enter":"leave";L.onStart(y,U,N=>{N==="enter"?s==null||s():N==="leave"&&(a==null||a())})}),se=$(Z=>{let U=Z?"enter":"leave";Y.current=!1,L.onStop(y,U,N=>{N==="enter"?o==null||o():N==="leave"&&(u==null||u())}),U==="leave"&&!_(L)&&(B("hidden"),H(y))});i.useEffect(()=>{w&&l||(ue(F),se(F))},[F,w,l]);let Te=!(!l||!w||!W||Se),[,b]=De(Te,C,F,{start:ue,end:se}),Oe=R({ref:j,className:((r=X(m.className,ie&&p,ie&&c,b.enter&&p,b.enter&&b.closed&&c,b.enter&&!b.closed&&h,b.leave&&d,b.leave&&!b.closed&&f,b.leave&&b.closed&&g,!b.transition&&F&&v))==null?void 0:r.trim())||void 0,...qe(b)}),k=0;S==="visible"&&(k|=A.Open),S==="hidden"&&(k|=A.Closed),b.enter&&(k|=A.Opening),b.leave&&(k|=A.Closing);let je=me();return E.createElement(K.Provider,{value:L},E.createElement(_e,{value:k},je({ourProps:Oe,theirProps:m,defaultTag:Fe,features:$e,visible:S==="visible",name:"Transition.Child"})))}function Xe(e,t){let{show:n,appear:r=!1,unmount:l=!0,...s}=e,o=i.useRef(null),a=Ee(e),u=ve(...a?[o,t]:t===null?[]:[t]);be();let p=ye();if(n===void 0&&p!==null&&(n=(p&A.Open)===A.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,h]=i.useState(n?"visible":"hidden"),v=Ce(()=>{n||h("hidden")}),[d,f]=i.useState(!0),g=i.useRef([n]);O(()=>{d!==!1&&g.current[g.current.length-1]!==n&&(g.current.push(n),f(!1))},[g,n]);let m=i.useMemo(()=>({show:n,appear:r,initial:d}),[n,r,d]);O(()=>{n?h("visible"):!_(v)&&o.current!==null&&h("hidden")},[n,v]);let C={unmount:l},P=$(()=>{var j;d&&f(!1),(j=e.beforeEnter)==null||j.call(e)}),y=$(()=>{var j;d&&f(!1),(j=e.beforeLeave)==null||j.call(e)}),w=me();return E.createElement(K.Provider,{value:v},E.createElement(z.Provider,{value:m},w({ourProps:{...C,as:i.Fragment,children:E.createElement(we,{ref:u,...C,...s,beforeEnter:P,beforeLeave:y})},theirProps:{},defaultTag:i.Fragment,features:$e,visible:c==="visible",name:"Transition"})))}function Je(e,t){let n=i.useContext(z)!==null,r=ye()!==null;return E.createElement(E.Fragment,null,!n&&r?E.createElement(J,{ref:t,...e}):E.createElement(we,{ref:t,...e}))}let J=ee(Xe),we=ee(Qe),et=ee(Je),it=Object.assign(J,{Child:et,Root:J});export{et as F,ee as K,me as L,pe as O,rt as T,q as a,de as b,ye as c,lt as d,We as f,A as i,be as l,O as n,$ as o,ce as p,I as s,ke as t,D as u,ve as y,it as z};
