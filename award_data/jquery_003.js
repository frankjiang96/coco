"use strict";
/*!
 * jQuery Mobile Events
 * by Ben Major (www.ben-major.co.uk)
 *
 * Copyright 2011, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
(function(n){function l(){var n=e();n!==s&&(s=n,f.trigger("orientationchange"))}function i(t,i,r,u){var f=r.type;r.type=i;n.event.dispatch.call(t,r,u);r.type=f}var f,g,e,s,h,c,o;n.attrFn=n.attrFn||{};var r=navigator.userAgent.toLowerCase(),u=r.indexOf("chrome")>-1&&(r.indexOf("windows")>-1||r.indexOf("macintosh")>-1||r.indexOf("linux")>-1)&&r.indexOf("mobile")<0&&r.indexOf("android")<0,t={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:window.navigator.msPointerEnabled?!1:"ontouchstart"in window&&!u,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:window.navigator.msPointerEnabled?"MSPointerDown":"ontouchstart"in window&&!u?"touchstart":"mousedown",endevent:window.navigator.msPointerEnabled?"MSPointerUp":"ontouchstart"in window&&!u?"touchend":"mouseup",moveevent:window.navigator.msPointerEnabled?"MSPointerMove":"ontouchstart"in window&&!u?"touchmove":"mousemove",tapevent:"ontouchstart"in window&&!u?"tap":"click",scrollevent:"ontouchstart"in window&&!u?"touchmove":"scroll",hold_timer:null,tap_timer:null};if(n.isTouchCapable=function(){return t.touch_capable},n.getStartEvent=function(){return t.startevent},n.getEndEvent=function(){return t.endevent},n.getMoveEvent=function(){return t.moveevent},n.getTapEvent=function(){return t.tapevent},n.getScrollEvent=function(){return t.scrollevent},n.each(["tapstart","tapend","tapmove","tap","tap2","tap3","tap4","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,i){n.fn[i]=function(n){return n?this.on(i,n):this.trigger(i)};n.attrFn[i]=!0}),n.event.special.tapstart={setup:function(){var r=this,u=n(r);u.on(t.startevent,function f(n){if(u.data("callee",f),n.which&&n.which!==1)return!1;var e=n.originalEvent,o={position:{x:t.touch_capable?e.touches[0].screenX:n.screenX,y:t.touch_capable?e.touches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.touches[0].pageX-e.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.touches[0].pageY-e.touches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};return i(r,"tapstart",n,o),!0})},remove:function(){n(this).off(t.startevent,n(this).data.callee)}},n.event.special.tapmove={setup:function(){var r=this,u=n(r);u.on(t.moveevent,function f(n){u.data("callee",f);var e=n.originalEvent,o={position:{x:t.touch_capable?e.touches[0].screenX:n.screenX,y:t.touch_capable?e.touches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.touches[0].pageX-e.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.touches[0].pageY-e.touches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};return i(r,"tapmove",n,o),!0})},remove:function(){n(this).off(t.moveevent,n(this).data.callee)}},n.event.special.tapend={setup:function(){var r=this,u=n(r);u.on(t.endevent,function f(n){u.data("callee",f);var e=n.originalEvent,o={position:{x:t.touch_capable?e.changedTouches[0].screenX:n.screenX,y:t.touch_capable?e.changedTouches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.changedTouches[0].pageX-e.changedTouches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.changedTouches[0].pageY-e.changedTouches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};return i(r,"tapend",n,o),!0})},remove:function(){n(this).off(t.endevent,n(this).data.callee)}},n.event.special.taphold={setup:function(){var o=this,u=n(o),s,r={x:0,y:0},f=0,e=0;u.on(t.startevent,function h(n){if(n.which&&n.which!==1)return!1;u.data("tapheld",!1);s=n.target;var c=n.originalEvent,l=Date.now(),a={x:t.touch_capable?c.touches[0].screenX:n.screenX,y:t.touch_capable?c.touches[0].screenY:n.screenY},v={x:t.touch_capable?c.touches[0].pageX-c.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?c.touches[0].pageY-c.touches[0].target.offsetTop:n.offsetY};return r.x=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX,r.y=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY,f=r.x,e=r.y,t.hold_timer=window.setTimeout(function(){var y=r.x-f,p=r.y-e;if(n.target==s&&(r.x==f&&r.y==e||y>=-t.tap_pixel_range&&y<=t.tap_pixel_range&&p>=-t.tap_pixel_range&&p<=t.tap_pixel_range)){u.data("tapheld",!0);var w=Date.now(),b={x:t.touch_capable?c.touches[0].screenX:n.screenX,y:t.touch_capable?c.touches[0].screenY:n.screenY},k={x:t.touch_capable?c.touches[0].pageX-c.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?c.touches[0].pageY-c.touches[0].target.offsetTop:n.offsetY},d=w-l,g={startTime:l,endTime:w,startPosition:a,startOffset:v,endPosition:b,endOffset:k,duration:d,target:n.target};u.data("callee1",h);i(o,"taphold",n,g)}},t.taphold_threshold),!0}).on(t.endevent,function c(){u.data("callee2",c);u.data("tapheld",!1);window.clearTimeout(t.hold_timer)}).on(t.moveevent,function l(n){u.data("callee3",l);f=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX;e=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2).off(t.moveevent,n(this).data.callee3)}},n.event.special.doubletap={setup:function(){var s=this,r=n(s),h,f,e,u,c,o=!1;r.on(t.startevent,function l(n){return n.which&&n.which!==1?!1:(r.data("doubletapped",!1),h=n.target,r.data("callee1",l),u=n.originalEvent,e={position:{x:t.touch_capable?u.touches[0].screenX:n.screenX,y:t.touch_capable?u.touches[0].screenY:n.screenY},offset:{x:t.touch_capable?u.touches[0].pageX-u.touches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?u.touches[0].pageY-u.touches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target},!0)}).on(t.endevent,function a(n){var u=Date.now(),p=r.data("lastTouch")||u+1,v=u-p,l,y;window.clearTimeout(f);r.data("callee2",a);v<t.doubletap_int&&n.target==h&&v>100?(r.data("doubletapped",!0),window.clearTimeout(t.tap_timer),l={position:{x:t.touch_capable?n.originalEvent.changedTouches[0].screenX:n.screenX,y:t.touch_capable?n.originalEvent.changedTouches[0].screenY:n.screenY},offset:{x:t.touch_capable?n.originalEvent.changedTouches[0].pageX-n.originalEvent.changedTouches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?n.originalEvent.changedTouches[0].pageY-n.originalEvent.changedTouches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target},y={firstTap:e,secondTap:l,interval:l.time-e.time},o||i(s,"doubletap",n,y),o=!0,c=window.setTimeout(function(){o=!1},t.doubletap_int)):(r.data("lastTouch",u),f=window.setTimeout(function(){window.clearTimeout(f)},t.doubletap_int,[n]));r.data("lastTouch",u)})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2)}},n.event.special.singletap={setup:function(){var f=this,r=n(f),e=null,o=null,u={x:0,y:0};r.on(t.startevent,function s(n){return n.which&&n.which!==1?!1:(o=Date.now(),e=n.target,r.data("callee1",s),u.x=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX,u.y=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY,!0)}).on(t.endevent,function h(n){if(r.data("callee2",h),n.target==e){var s=n.originalEvent.changedTouches?n.originalEvent.changedTouches[0].pageX:n.pageX,c=n.originalEvent.changedTouches?n.originalEvent.changedTouches[0].pageY:n.pageY;t.tap_timer=window.setTimeout(function(){if(!r.data("doubletapped")&&!r.data("tapheld")&&u.x==s&&u.y==c){var e=n.originalEvent,h={position:{x:t.touch_capable?e.changedTouches[0].screenX:n.screenX,y:t.touch_capable?e.changedTouches[0].screenY:n.screenY},offset:{x:t.touch_capable?e.changedTouches[0].pageX-e.changedTouches[0].target.offsetLeft:n.offsetX,y:t.touch_capable?e.changedTouches[0].pageY-e.changedTouches[0].target.offsetTop:n.offsetY},time:Date.now(),target:n.target};h.time-o<t.taphold_threshold&&i(f,"singletap",n,h)}},t.doubletap_int)}})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2)}},n.event.special.tap={setup:function(){var e=this,u=n(e),o=!1,s=null,h,r={x:0,y:0},f;u.on(t.startevent,function c(n){return u.data("callee1",c),n.which&&n.which!==1?!1:(o=!0,r.x=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageX:n.pageX,r.y=n.originalEvent.targetTouches?n.originalEvent.targetTouches[0].pageY:n.pageY,h=Date.now(),s=n.target,f=n.originalEvent.targetTouches?n.originalEvent.targetTouches:[n],!0)}).on(t.endevent,function l(n){var a,y,c,d;u.data("callee2",l);var p=n.originalEvent.targetTouches?n.originalEvent.changedTouches[0].pageX:n.pageX,w=n.originalEvent.targetTouches?n.originalEvent.changedTouches[0].pageY:n.pageY,b=r.x-p,k=r.y-w,v;if(s==n.target&&o&&Date.now()-h<t.taphold_threshold&&(r.x==p&&r.y==w||b>=-t.tap_pixel_range&&b<=t.tap_pixel_range&&k>=-t.tap_pixel_range&&k<=t.tap_pixel_range)){for(a=n.originalEvent,y=[],c=0;c<f.length;c++)d={position:{x:t.touch_capable?a.changedTouches[c].screenX:n.screenX,y:t.touch_capable?a.changedTouches[c].screenY:n.screenY},offset:{x:t.touch_capable?a.changedTouches[c].pageX-a.changedTouches[c].target.offsetLeft:n.offsetX,y:t.touch_capable?a.changedTouches[c].pageY-a.changedTouches[c].target.offsetTop:n.offsetY},time:Date.now(),target:n.target},y.push(d);switch(f.length){case 1:v="tap";break;case 2:v="tap2";break;case 3:v="tap3";break;case 4:v="tap4"}i(e,v,n,y)}})},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.endevent,n(this).data.callee2)}},n.event.special.swipe={setup:function(){function s(o){i=n(o.currentTarget);i.data("callee1",s);u.x=o.originalEvent.targetTouches?o.originalEvent.targetTouches[0].pageX:o.pageX;u.y=o.originalEvent.targetTouches?o.originalEvent.targetTouches[0].pageY:o.pageY;f.x=u.x;f.y=u.y;e=!0;var h=o.originalEvent;r={position:{x:t.touch_capable?h.touches[0].screenX:o.screenX,y:t.touch_capable?h.touches[0].screenY:o.screenY},offset:{x:t.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:o.offsetX,y:t.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:o.offsetY},time:Date.now(),target:o.target}}function h(s){i=n(s.currentTarget);i.data("callee2",h);f.x=s.originalEvent.targetTouches?s.originalEvent.targetTouches[0].pageX:s.pageX;f.y=s.originalEvent.targetTouches?s.originalEvent.targetTouches[0].pageY:s.pageY;var c,a=i.parent().data("xthreshold")?i.parent().data("xthreshold"):i.data("xthreshold"),v=i.parent().data("ythreshold")?i.parent().data("ythreshold"):i.data("ythreshold"),p=typeof a!="undefined"&&a!==!1&&parseInt(a)?parseInt(a):t.swipe_h_threshold,w=typeof v!="undefined"&&v!==!1&&parseInt(v)?parseInt(v):t.swipe_v_threshold;if(u.y>f.y&&u.y-f.y>w&&(c="swipeup"),u.x<f.x&&f.x-u.x>p&&(c="swiperight"),u.y<f.y&&f.y-u.y>w&&(c="swipedown"),u.x>f.x&&u.x-f.x>p&&(c="swipeleft"),c!=undefined&&e){u.x=0;u.y=0;f.x=0;f.y=0;e=!1;var l=s.originalEvent,y={position:{x:t.touch_capable?l.touches[0].screenX:s.screenX,y:t.touch_capable?l.touches[0].screenY:s.screenY},offset:{x:t.touch_capable?l.touches[0].pageX-l.touches[0].target.offsetLeft:s.offsetX,y:t.touch_capable?l.touches[0].pageY-l.touches[0].target.offsetTop:s.offsetY},time:Date.now(),target:s.target},k=Math.abs(r.position.x-y.position.x),d=Math.abs(r.position.y-y.position.y),b={startEvnt:r,endEvnt:y,direction:c.replace("swipe",""),xAmount:k,yAmount:d,duration:y.time-r.time};o=!0;i.trigger("swipe",b).trigger(c,b)}}function c(u){var s;if(i=n(u.currentTarget),s="",i.data("callee3",c),o){var l=i.data("xthreshold"),a=i.data("ythreshold"),v=typeof l!="undefined"&&l!==!1&&parseInt(l)?parseInt(l):t.swipe_h_threshold,y=typeof a!="undefined"&&a!==!1&&parseInt(a)?parseInt(a):t.swipe_v_threshold,h=u.originalEvent,f={position:{x:t.touch_capable?h.changedTouches[0].screenX:u.screenX,y:t.touch_capable?h.changedTouches[0].screenY:u.screenY},offset:{x:t.touch_capable?h.changedTouches[0].pageX-h.changedTouches[0].target.offsetLeft:u.offsetX,y:t.touch_capable?h.changedTouches[0].pageY-h.changedTouches[0].target.offsetTop:u.offsetY},time:Date.now(),target:u.target};r.position.y>f.position.y&&r.position.y-f.position.y>y&&(s="swipeup");r.position.x<f.position.x&&f.position.x-r.position.x>v&&(s="swiperight");r.position.y<f.position.y&&f.position.y-r.position.y>y&&(s="swipedown");r.position.x>f.position.x&&r.position.x-f.position.x>v&&(s="swipeleft");var p=Math.abs(r.position.x-f.position.x),w=Math.abs(r.position.y-f.position.y),b={startEvnt:r,endEvnt:f,direction:s.replace("swipe",""),xAmount:p,yAmount:w,duration:f.time-r.time};i.trigger("swipeend",b)}e=!1;o=!1}var l=this,i=n(l),e=!1,o=!1,u={x:0,y:0},f={x:0,y:0},r;i.on(t.startevent,s);i.on(t.moveevent,h);i.on(t.endevent,c)},remove:function(){n(this).off(t.startevent,n(this).data.callee1).off(t.moveevent,n(this).data.callee2).off(t.endevent,n(this).data.callee3)}},n.event.special.scrollstart={setup:function(){function o(n,t){r=t;i(u,r?"scrollstart":"scrollend",n)}var u=this,f=n(u),r,e;f.on(t.scrollevent,function s(n){f.data("callee",s);r||o(n,!0);clearTimeout(e);e=setTimeout(function(){o(n,!1)},50)})},remove:function(){n(this).off(t.scrollevent,n(this).data.callee)}},f=n(window),o={"0":!0,"180":!0},t.orientation_support){var p=window.innerWidth||f.width(),w=window.innerHeight||f.height();h=p>w&&p-w>50;c=o[window.orientation];(h&&c||!h&&!c)&&(o={"-90":!0,"90":!0})}n.event.special.orientationchange=g={setup:function(){if(t.orientation_support)return!1;s=e();f.on("throttledresize",l);return!0},teardown:function(){return t.orientation_support?!1:(f.off("throttledresize",l),!0)},add:function(n){var t=n.handler;n.handler=function(n){return n.orientation=e(),t.apply(this,arguments)}}};n.event.special.orientationchange.orientation=e=function(){var i=!0,n=document.documentElement;return i=t.orientation_support?o[window.orientation]:n&&n.clientWidth/n.clientHeight<1.1,i?"portrait":"landscape"};n.event.special.throttledresize={setup:function(){n(this).on("resize",k)},teardown:function(){n(this).off("resize",k)}};var b=250,k=function(){v=Date.now();y=v-d;y>=b?(d=v,n(this).trigger("throttledresize")):(a&&window.clearTimeout(a),a=window.setTimeout(l,b-y))},d=0,a,v,y;n.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(t,i){n.event.special[t]={setup:function(){n(this).on(i,n.noop)}}})})(jQuery)
