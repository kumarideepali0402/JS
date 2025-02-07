// const outermost=document.querySelector("#outermost");
// const outer=document.querySelector("#outer");

// const out=document.querySelector("#out");

// outermost.addEventListener('click',function(e){
//     console.log(`outermost\nTarget:  ${e.target.id} ,current:  ${this.id}`);
// },true); 

// outer.addEventListener('click',function(e){
//     console.log(`outer\nTarget:  ${e.target.id} ,current:  ${this.id}`);
//     e.stopPropagation();
// },true);

// out.addEventListener('click',function(e){
//     console.log(`out\nTarget:  ${e.target.id} ,current:  ${this.id}`);
// },true
// )

// // e.stopPropogation()
// class Plant{
//     constructor(height,color){
//         this.height=height;
//         this.color=color;
//     }
    
// }
// const rose=new Plant(30,"red");
// function hello(){
//     console.log("hi");
// }


// setTimeout(hello,4000);

let num=1;
console.log("hi".toUpperCase());
// try {
//     num.toUpperCase();
// } catch (error) {
//     console.log(error.name);
//     console.log("*********");
    
//         console.log(error.message);
//         document.querySelector(".content").innerHTML=error.name;
    
// }
const str=`{"name":"yuv"}`;
try{
    const obj=JSON.parse(str);
    document.querySelector(".content").innerHTML="parsed well...";
}
catch (error) {
    console.log(error.name);
    console.log("*********");
    
        console.log(error.message);
        // document.querySelector(".content").innerHTML=error.name;
    
}

class BankBalance extends Error{
    constructor(message){
        super(message);
        this.name="Insufficient Balance";
    }
}

const currBalace=10000;
const reqBal=1000000;
try {
    if(reqBal>currBalace){
        throw new BankBalance("itne ameer nahi ho tum..")
    }
    
    
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    
}
const reqButton=document.querySelector(".reqbal");
reqButton.addEventListener("click",()=>{
    

})