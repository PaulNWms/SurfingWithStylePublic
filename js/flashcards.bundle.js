var MyLibrary=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t=this;this.elementBindings=[],this.value=e.object[e.property],this.valueGetter=function(){return t.value},this.valueSetter=function(e){t.value=e;for(var n=0;n<t.elementBindings.length;n++){var r=t.elementBindings[n];r.element[r.attribute]=e}},this.addBinding=function(e,n,r){var o={element:e,attribute:n,event:r};return r&&(e.addEventListener(r,(function(r){t.valueSetter(e[n])})),o.event=r),this.elementBindings.push(o),e[n]=t.value,t},Object.defineProperty(e.object,e.property,{get:this.valueGetter,set:this.valueSetter}),e.object[e.property]=this.value}},,,function(e,t,n){"use strict";n.r(t);var r=n(1),o=function(){this.front="",this.back=[]};function i(e){var t=new XMLHttpRequest,n="Failed to get file contents.";return t.open("GET",e,!1),t.onreadystatechange=function(){4===t.readyState&&(200!==t.status&&0!=t.status||(n=t.responseText))},t.send(null),n.split("\n").map((function(e){return e.trim()}))}function a(e){for(var t="",n=0,r=e;n<r.length;n++){var o=r[n];t.length>0&&(t=t.concat("\n")),t=t.concat(o)}return t}function l(e){for(var t,n=e.slice(),r=n.length-1;r>0;r--){var o=Math.floor(Math.random()*(r+1));t=[n[o],n[r]],n[r]=t[0],n[o]=t[1]}return n}function u(){b.total=b.count,b.remaining=H.length+J.length}function s(){var e=x.options[x.selectedIndex].value;D=i(m+e+".txt"),P=function(e){for(var t=[],n=new o,r=0,i=e;r<i.length;r++){var a=i[r];0!==a.trim().length?n.front?n.back.push(a):n.front=a:(t.push(n),n=new o)}return n.front&&t.push(n),t}(D),v.style.display="block",h.style.display="block",w.style.display="none",B.style.display="none",b.total=b.remaining=b.to=b.count=P.length,b.from=1}function d(){_=P.slice(b.from-1,b.to),v.style.display="block",h.style.display="block",w.style.display="block",B.style.display="none",b.total=b.remaining=b.count=_.length}function c(){H=(H=l(_)).slice(0,b.count),v.style.display="none",h.style.display="none",w.style.display="none",B.style.display="block",y()}function y(){var e;H.length?A=H.pop():J.length?(alert(b.remaining+" cards remaining."),H=l(J),J=[],A=H.pop()):(alert("Congratulations!"),v.style.display="block",h.style.display="none",w.style.display="none",B.style.display="none"),e=A,!1?b.question=a(e.back):e.back.length>1?b.question=e.front+" ("+e.back.length+")":b.question=e.front,b.question.match(/^\$\$.*\$\$$/)&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,T]),b.answer="\n"}function p(){var e;O.setAttribute("disabled","true"),S.removeAttribute("disabled"),q.removeAttribute("disabled"),e=A,!1?e.back.length>1?b.answer=e.front+" ("+e.back.length+")":b.answer=e.front:b.answer=a(e.back),b.answer.match(/^\$\$.*\$\$$/)&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,$])}function f(){O.removeAttribute("disabled"),S.setAttribute("disabled","true"),q.setAttribute("disabled","true"),u(),y()}function g(){O.removeAttribute("disabled"),S.setAttribute("disabled","true"),q.setAttribute("disabled","true"),J.push(A),u(),y()}var m=window.location.protocol+"//"+window.location.host+"/flashcards/",b={total:0,remaining:0,question:"",answer:"",from:0,to:0,count:0},v=document.getElementById("selectDeckDiv"),h=document.getElementById("fromToDiv"),w=document.getElementById("countDiv"),B=document.getElementById("mainDiv"),j=document.getElementById("total");new r.a({object:b,property:"total"}).addBinding(j,"innerText");var k=document.getElementById("remaining");new r.a({object:b,property:"remaining"}).addBinding(k,"innerText");var x=document.getElementById("select-deck"),E=document.getElementById("from");new r.a({object:b,property:"from"}).addBinding(E,"value","change");var I=document.getElementById("to");new r.a({object:b,property:"to"}).addBinding(I,"value","change");var M=document.getElementById("count");new r.a({object:b,property:"count"}).addBinding(M,"value","change");var T=document.getElementById("question");new r.a({object:b,property:"question"}).addBinding(T,"innerText");var $=document.getElementById("answer");new r.a({object:b,property:"answer"}).addBinding($,"innerText");var A,O=document.getElementById("flip"),S=document.getElementById("right"),q=document.getElementById("wrong"),D=[],P=[],_=[],H=[],J=[];!function(){!function(){for(var e=0,t=i(m+"subjects.txt");e<t.length;e++){var n=t[e];x[x.length]=new Option(n,n)}}(),v.style.display="block",h.style.display="none",w.style.display="none",B.style.display="none";var e=window;e.selectDeck=s,e.selectRange=d,e.start=c,e.flipCard=p,e.setRight=f,e.setWrong=g}()}]);