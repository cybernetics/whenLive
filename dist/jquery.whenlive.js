/*! whenlive 2014-01-07 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b(jQuery)}(this,function(a){a.fn.whenLive=function(b){var c=this;a.whenLiveInit||(a.whenLiveInit=!0,function(){for(var a=0,b=["webkit","moz"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),a.whenLiveLoop=function(){for(var b in a.whenLiveElements)a.contains(document.documentElement,a.whenLiveElements[b].elem[0])&&a.whenLiveElements[b].elem.is(":visible")&&(a.whenLiveElements[b].fn.call(a.whenLiveElements[b].elem),a.whenLiveElements.splice(b));a.whenLiveElements.length>0&&requestAnimationFrame(a.whenLiveLoop)}),jQuery.contains(document.documentElement,this[0])?b():(a.whenLiveElements||(a.whenLiveElements=[]),a.whenLiveElements.push({elem:c,fn:b}),1===a.whenLiveElements.length&&requestAnimationFrame(a.whenLiveLoop))}});