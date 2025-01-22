



let x=10;
let name="deepali";
let y=876543245678n;//bigint
console.log(y);



// ARRAY
let a=[1,2,3,"abc",767543213456789n]; //heterogeneous,0 indexed
console.log(a);
console.log(a.length);
let m=["RRR","KGF","KKK","SOTY"];
console.log(m[m.length-2]);

for( let i=0;i<m.length;i++){
    console.log(m[i]);
}
console.log();
// appending
m.push("SOTY2");
for( let i=0;i<m.length;i++){
    console.log(m[i]);
}
let k=[];
k.push("iui");
k.push("jhgyt");
k.push(0);
console.log(k);

// pop(): return and delete the item
console.log(k.pop());
console.log(k);

let n=5;
let marks=[23,45,67,87,98];
let sum=0,mini=10000;
for(let i=0;i<marks.length;i++){
  sum+=marks[i];
  if(mini>marks[i]) mini=marks[i];
}
console.log("avg:",sum/n);
console.log("mini:",mini);

delete m[2];
console.log(m[2]);

// shift():remove first elt of array and left shift
 console.log(k);
k.shift();
 console.log(k);

//  unshift: add new elt towards begining
console.log();
console.log(k);
k.unshift(8);
 console.log(k);
 k.unshift(50,40,15);
 console.log(k);

//  toString()
console.log(k);
console.log(k.toString());

// cancat: merge 2 or more arrays and create new one
console.log(k.concat(m,marks));

console.log();

// indexOf lastIndexOf
marks.push(45);
console.log(marks.indexOf(45));
console.log(marks.lastIndexOf(45));

console.log();

// join(separator)
let arr=["Hello","world"]
let str=arr.join(" ");
console.log( str);


// slice(start,end) :end exclusive
console.log(m);
console.log(m.slice(0,2));

// forEach()
arr.forEach(elt=>console.log(elt));


console.log();
console.log();

for(let i=0;i<marks.length;i++){
    marks[i]*=2;
}
// is similar to
console.log(marks);

h=marks.map(elt=>elt*2);
console.log(h);
p=marks.filter(element=>element%2===0)



const obj={
    greet:()=>{
        console.log("hello")
    }

}
obj['greet'];





const f1=function(){
    console.log("hi");
    
}
const f2=function(){
    console.log("Deepali");
    
}
const list=[f1,f2];
list[0]();
console.log(list);

list2=['a','b']
console.log(list2);

const greet=function(){
    console.log("hEllo");
}


function greetings(){
    return greet;

}
p=greetings();
p();

// or

greetings()();
console.log('******')

function Name() {
    console.log("Deepali");
    return "kumari";
}

function greetDeepali(namefun){
    console.log(namefun());
    return greet;
}

greetDeepali(Name)();

