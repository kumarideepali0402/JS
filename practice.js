const outermost=document.querySelector(".outermost");
const outer=document.querySelector(".outer");

const out=document.querySelector(".out");

outer.addEventListener('click',()=>{
    alert("outer");
},true);
outermost.addEventListener('click',()=>{
    alert("outermost");
},true);
out.addEventListener('click',()=>{
    alert("out");
},true)

