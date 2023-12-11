// write your code here
var e=document.querySelector(".logo"),n=new Promise(function(n,t){e.addEventListener("click",function(){n()})}),t=new Promise(function(e,n){setTimeout(function(){n(Error("Rejected"))},3e3)}),c=function(){var e=document.createElement("div");e.className="message",e.innerText="Promise was resolved!",document.body.appendChild(e)},o=function(){var e=document.createElement("div");e.className="message error-message",e.innerText="Promise was rejected!",document.body.appendChild(e)};n.then(c).catch(o),t.then(c).catch(o);//# sourceMappingURL=index.5e145892.js.map

//# sourceMappingURL=index.5e145892.js.map
