var X=Object.defineProperty;var Y=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>Y(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function p(){}function Z(t){return t()}function I(){return Object.create(null)}function H(t){t.forEach(Z)}function G(t){return typeof t=="function"}function E(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function q(t,e){return t===e?!0:(j||(j=document.createElement("a")),j.href=e,t===j.href)}function z(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function x(){return K(" ")}function ee(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function l(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}let F;function S(t){F=t}const b=[],V=[];let O=[];const W=[],re=Promise.resolve();let M=!1;function oe(){M||(M=!0,re.then(Q))}function B(t){O.push(t)}const U=new Set;let y=0;function Q(){if(y!==0)return;const t=F;do{try{for(;y<b.length;){const e=b[y];y++,S(e),se(e.$$)}}catch(e){throw b.length=0,y=0,e}for(S(null),b.length=0,y=0;V.length;)V.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];U.has(n)||(U.add(n),n())}O.length=0}while(b.length);for(;W.length;)W.pop()();M=!1,U.clear(),S(t)}function se(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}function ie(t){const e=[],n=[];O.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),O=e}const P=new Set;let ce;function _(t,e){t&&t.i&&(P.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),ce.c.push(()=>{P.delete(t)}),t.o(e)}}function k(t){t&&t.c()}function $(t,e,n){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),B(()=>{const s=t.$$.on_mount.map(Z).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...s):H(s),t.$$.on_mount=[]}),r.forEach(B)}function v(t,e){const n=t.$$;n.fragment!==null&&(ie(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function le(t,e){t.$$.dirty[0]===-1&&(b.push(t),oe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,o,r,s,i=null,u=[-1]){const a=F;S(t);const c=t.$$={fragment:null,ctx:[],props:s,update:p,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||a.$$.root};i&&i(c.root);let C=!1;if(c.ctx=n?n(t,e.props||{},(f,h,...m)=>{const T=m.length?m[0]:h;return c.ctx&&r(c.ctx[f],c.ctx[f]=T)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](T),C&&le(t,f)),h}):[],c.update(),C=!0,H(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){const f=te(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&_(t.$$.fragment),$(t,e.target,e.anchor),Q()}S(a)}class D{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){v(this,1),this.$destroy=p}$on(e,n){if(!G(n))return p;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);const ae="/assets/logo-QNVFEplJ.png",fe="/assets/arrow-down-DV2da0X3.png";function de(t){let e;return{c(){e=g("div"),e.innerHTML=`<span class="description svelte-14kajvv">Download link below</span> <img src="${fe}" class="logo svelte-14kajvv" alt="TODO Logo"/>`,l(e,"class","container svelte-14kajvv")},m(n,o){A(n,e,o)},p,i:p,o:p,d(n){n&&w(e)}}}class me extends D{constructor(e){super(),N(this,e,null,de,E,{})}}const ge="https://drive.google.com/file/d/1D3FUw35EFdMZt9gzGwlcX2ZHUHJAsH5W/view?usp=sharing",pe="https://www.youtube.com/embed/CysY5jvssQ0?si=VhFR-8m305YRhdvJ",he="https://www.youtube.com/embed/29C6oJp9CNA?si=w79Hgl6se1n7h_34";function _e(t){let e,n,o,r,s,i,u;return{c(){e=g("div"),n=g("div"),o=K(t[0]),r=x(),s=g("div"),i=g("iframe"),l(n,"class","description svelte-500gil"),l(i,"class","video-frame svelte-500gil"),q(i.src,u=t[1])||l(i,"src",u),l(s,"class","video-box svelte-500gil"),l(e,"class","container svelte-500gil")},m(a,c){A(a,e,c),d(e,n),d(n,o),d(e,r),d(e,s),d(s,i)},p(a,[c]){c&1&&ne(o,a[0]),c&2&&!q(i.src,u=a[1])&&l(i,"src",u)},i:p,o:p,d(a){a&&w(e)}}}function $e(t,e,n){let{description:o}=e,{url:r}=e;return t.$$set=s=>{"description"in s&&n(0,o=s.description),"url"in s&&n(1,r=s.url)},[o,r]}class J extends D{constructor(e){super(),N(this,e,$e,_e,E,{description:0,url:1})}}function ve(t){let e,n,o,r,s,i,u,a,c,C,f,h;return u=new J({props:{description:"Watch the full 100% TAS!",url:he}}),c=new me({}),f=new J({props:{description:"Watch the complete walkthrough",url:pe}}),{c(){e=g("section"),n=g("div"),o=g("img"),s=x(),i=g("div"),k(u.$$.fragment),a=x(),k(c.$$.fragment),C=x(),k(f.$$.fragment),q(o.src,r=ae)||l(o,"src",r),l(o,"class","logo svelte-156u3kq"),l(o,"alt","TODO Logo"),l(i,"class","container2 svelte-156u3kq"),l(n,"class","container svelte-156u3kq"),l(e,"class","section svelte-156u3kq")},m(m,T){A(m,e,T),d(e,n),d(n,o),d(n,s),d(n,i),$(u,i,null),d(i,a),$(c,i,null),d(i,C),$(f,i,null),h=!0},p,i(m){h||(_(u.$$.fragment,m),_(c.$$.fragment,m),_(f.$$.fragment,m),h=!0)},o(m){L(u.$$.fragment,m),L(c.$$.fragment,m),L(f.$$.fragment,m),h=!1},d(m){m&&w(e),v(u),v(c),v(f)}}}class we extends D{constructor(e){super(),N(this,e,null,ve,E,{})}}const ye="/assets/mario-BPZMoNSo.png";function be(t){let e,n,o,r,s,i,u;return{c(){e=g("div"),n=g("img"),r=x(),s=g("button"),s.textContent="Download now!",q(n.src,o=ye)||l(n,"src",o),l(n,"class","mario-image svelte-75eeoa"),l(n,"alt","TODO Logo"),l(s,"class","svelte-75eeoa"),l(e,"class","container svelte-75eeoa")},m(a,c){A(a,e,c),d(e,n),d(e,r),d(e,s),i||(u=ee(s,"click",t[0]),i=!0)},p,i:p,o:p,d(a){a&&w(e),i=!1,u()}}}function xe(t){function e(){window.open(ge,"_blank")}return[e]}class Oe extends D{constructor(e){super(),N(this,e,xe,be,E,{})}}function Le(t){let e,n,o;return n=new Oe({}),{c(){e=g("section"),k(n.$$.fragment),l(e,"class","container svelte-8ygu25")},m(r,s){A(r,e,s),$(n,e,null),o=!0},p,i(r){o||(_(n.$$.fragment,r),o=!0)},o(r){L(n.$$.fragment,r),o=!1},d(r){r&&w(e),v(n)}}}class ke extends D{constructor(e){super(),N(this,e,null,Le,E,{})}}function Ee(t){let e,n,o,r,s;return n=new we({}),r=new ke({}),{c(){e=g("main"),k(n.$$.fragment),o=x(),k(r.$$.fragment),l(e,"class","svelte-4o0u2r")},m(i,u){A(i,e,u),$(n,e,null),d(e,o),$(r,e,null),s=!0},p,i(i){s||(_(n.$$.fragment,i),_(r.$$.fragment,i),s=!0)},o(i){L(n.$$.fragment,i),L(r.$$.fragment,i),s=!1},d(i){i&&w(e),v(n),v(r)}}}class Ae extends D{constructor(e){super(),N(this,e,null,Ee,E,{})}}new Ae({target:document.getElementById("app")});