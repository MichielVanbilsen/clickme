(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();var n=document.getElementById("no");n.addEventListener("mouseover",function(){console.log("button hovered");var i=Math.floor(Math.random()*window.innerWidth),o=Math.floor(Math.random()*window.innerHeight);n.style.top=o+"px",n.style.left=i+"px"});var l=document.getElementById("yes");l.addEventListener("click",function(){window.location.href="firework.html"});
//# sourceMappingURL=index-b5933cbb.js.map
