"use strict";(self.webpackChunkCryptosmart=self.webpackChunkCryptosmart||[]).push([[2937],{2937:function(t,n,i){i.r(n),i.d(n,{ion_ripple_effect:function(){return r}});var e=i(9388),a=i(4039),o=i(323),r=function(){function t(t){(0,a.r)(this,t),this.type="bounded"}return t.prototype.addRipple=function(t,n){return(0,e.mG)(this,void 0,void 0,(function(){var i=this;return(0,e.Jh)(this,(function(e){return[2,new Promise((function(e){(0,a.f)((function(){var o=i.el.getBoundingClientRect(),r=o.width,l=o.height,m=Math.sqrt(r*r+l*l),u=Math.max(l,r),d=i.unbounded?u:m+f,p=Math.floor(u*c),b=d/p,y=t-o.left,h=n-o.top;i.unbounded&&(y=.5*r,h=.5*l);var w=y-.5*p,k=h-.5*p,v=.5*r-y,g=.5*l-h;(0,a.c)((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=k+"px",n.left=w+"px",n.width=n.height=p+"px",n.setProperty("--final-scale",""+b),n.setProperty("--translate-end",v+"px, "+g+"px"),(i.el.shadowRoot||i.el).appendChild(t),setTimeout((function(){e((function(){s(t)}))}),325)}))}))}))]}))}))},Object.defineProperty(t.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!1,configurable:!0}),t.prototype.render=function(){var t,n=(0,o.b)(this);return(0,a.h)(a.H,{role:"presentation",class:(t={},t[n]=!0,t.unbounded=this.unbounded,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.i)(this)},enumerable:!1,configurable:!0}),t}(),s=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},f=10,c=.5;r.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
//# sourceMappingURL=2937.6946edd7.chunk.js.map