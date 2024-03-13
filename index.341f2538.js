document.addEventListener("click",e=>{if("wall"!==e.target.className)return;let t=document.querySelector(".wall"),l=document.querySelector(".spider"),i=t.clientWidth-l.clientWidth,c=t.clientHeight-l.clientHeight,n=e.offsetX-l.clientWidth/2,d=e.offsetY-l.clientHeight/2;n>i&&(n=i),d>c&&(d=c),n<0&&(n=0),d<0&&(d=0),l.style.left=`${n}px`,l.style.top=`${d}px`});//# sourceMappingURL=index.341f2538.js.map

//# sourceMappingURL=index.341f2538.js.map
