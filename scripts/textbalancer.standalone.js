/*text-balancer by New York Times <https://github.com/nytimes/text-balancer> Apache License 2.0*/(function(l){function m(a){selectorArray=a.split(",");for(a=0;a<selectorArray.length;a+=1)for(var c=document.querySelectorAll(selectorArray[a].trim()),b=0;b<c.length;b+=1)g.push(c[b])}function n(a,c,b){var e;return function(){var d=this,f=arguments,p=b&&!e;clearTimeout(e);e=setTimeout(function(){e=null;b||a.apply(d,f)},c);p&&a.apply(d,f)}}function k(){var a;for(a=0;a<g.length;a+=1){var c=g[a];var b=c;var e=b.innerHTML;var d=b.innerHTML.split(" ");var f=document.createElement("span");f.id="element-first-word";
f.innerHTML=d[0];d=d.slice(1);b.innerHTML="";b.appendChild(f);b.innerHTML+=" "+d.join(" ");f=document.getElementById("element-first-word");d=f.offsetHeight;f=b.offsetHeight;b.innerHTML=e;f-10>d&&(c.style.maxWidth="",h(c,c.clientHeight,0,c.clientWidth))}}function h(a,c,b,e){if(b>=e)a.style.maxWidth=e+"px";else{var d=(b+e)/2;a.style.maxWidth=d+"px";a.clientHeight>c?h(a,c,d+1,e):h(a,c,b+1,d)}}var g=[];l.textBalancer={initialize:function(a){a?m(a):g=document.querySelectorAll(".balance-text");k();a=n(function(){k()},
100);window.addEventListener("resize",a)}}})(window);