var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){var t=e.firstChild;if(t.nextSibling){var n=document.createElement("span");n.textContent=t.nodeValue,t.textContent="",e.prepend(n)}}),e.addEventListener("click",function(e){if("SPAN"===e.target.nodeName){var t=e.target.nextElementSibling;t.classList.toggle("hidden"),t.style.display=t.classList.contains("hidden")?"none":"block"}});
//# sourceMappingURL=index.672514e1.js.map
