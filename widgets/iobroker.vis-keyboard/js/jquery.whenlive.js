/*! whenlive 2014-10-09 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery.whenlive"],b):b(jQuery)}(this,function(a){!function(b){var c=window.MutationObserver||window.WebKitMutationObserver,d=function(a,c){return b(a).data("whenlive_processed")?!1:b(a).is(":visible")?(c(a),b(a).data("whenlive_processed",!0),!0):!1},e=function(a){a||(a=document.documentElement);for(var c in b.whenLiveElements)b.whenLiveElements[c].selector?b(b.whenLiveElements[c].selector,a).each(function(a,e){d(e,b.whenLiveElements[c].fn)}):(b.contains(a,b.whenLiveElements[c].elem[0])||a===b.whenLiveElements[c].elem[0])&&(b.whenLiveElements[c].options.visibility?b.whenLiveElements[c].elem.is(":visible")&&(b.whenLiveElements[c].fn.call(b.whenLiveElements[c].elem),b.whenLiveElements.splice(c,1)):(b.whenLiveElements[c].fn.call(b.whenLiveElements[c].elem),b.whenLiveElements.splice(c,1)))};b.fn.whenLive=function(f,g){var h=this;if("function"==typeof f?(g=f,f={}):"string"==typeof f?(g=f,f={}):"object"!=typeof f&&(f={}),"boolean"!=typeof f.visibility&&(f.visibility=!0),"string"==typeof g){var i=g;g=function(a){b(document).trigger({type:i,addedElement:a})}}if("function"==typeof g){if(b.whenLiveElements||(b.whenLiveElements=[]),!b.whenLiveInit)if(b.whenLiveInit=!0,c){var j=new c(function(a){for(var c=0;c<a.length;c++){var d=a[c];if(e(d.target),b.whenLiveElements.length&&null!=d.addedNodes)for(var f=0;f<d.addedNodes.length;f++){var g=d.addedNodes[f];e(g)}}});j.observe(document,{childList:!0,subtree:!0,attributes:!0})}else!function(){for(var a=0,b=["webkit","moz"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),b.whenLiveLoop=function(){e(),b.whenLiveElements.length>0&&requestAnimationFrame(b.whenLiveLoop)};this.selector?(b(this.selector).filter(":visible").each(function(a,b){d(b,g)}),b.whenLiveElements.push({elem:null,selector:this.selector,fn:g,options:f}),c||1===b.whenLiveElements.length&&requestAnimationFrame(b.whenLiveLoop)):a.contains(document.documentElement,this[0])?f.visibility?b(this).is(":visible")?g():(b.whenLiveElements.push({elem:h,selector:null,fn:g,options:f}),c||1===b.whenLiveElements.length&&requestAnimationFrame(b.whenLiveLoop)):g():(b.whenLiveElements.push({elem:h,selector:null,fn:g,options:f}),c||1===b.whenLiveElements.length&&requestAnimationFrame(b.whenLiveLoop))}}}(a)});