/*! For license information please see 9691.8f97fbdc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkCryptosmart=self.webpackChunkCryptosmart||[]).push([[9691],{9691:function(t,e,n){n.r(e),n.d(e,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return l},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return s},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return f},trackViewportChanges:function(){return v}});var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,s=function(){o={},u={},a=!1},f=function(t){c(t),t.visualViewport&&(u=l(t.visualViewport),t.visualViewport.onresize=function(){v(t),p()||b(t)?d(t):g(t)&&h(t)})},c=function(t){t.addEventListener("keyboardDidShow",(function(e){return d(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},d=function(t,e){w(t,e),a=!0},h=function(t){y(t),a=!1},p=function(){var t=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&t>150},b=function(t){return a&&!g(t)},g=function(t){return a&&u.height===t.innerHeight},w=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(r)},y=function(t){var e=new CustomEvent(r);t.dispatchEvent(e)},v=function(t){o=Object.assign({},u),u=l(t.visualViewport)},l=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=9691.8f97fbdc.chunk.js.map