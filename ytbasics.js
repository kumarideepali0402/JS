// Operator Precedence
// * /  first
//  + - second
console.log(2*3+5);
console.log(Math.round(5.5));


// String
console.log('some'+'more'+'text');

console.log(typeof(2));
console.log(typeof('o'));
console.log(typeof('hello'+2));
console.log('$'+20.67+769.0);//$20.67769(left->right precedence)
console.log('$'+(20.67+769.0)); //string also follow operator precedence
// Ways to create string
// 'hello'
// "hello"
// `hello`

// console.log('I'm learning js'); invalid
console.log("I'm learning js");
console.log('I\'m learning js');//escape character
// escape character is considered as 1 length :'\t'
console.log('I\"m learning js');//escape character

console.log("hi\nbro"); //newline characterk

// interpolation :'${}' (backticks only)
console.log(`Items(${1+1}):$${(2095+799)/100}`);

// multiline string (backticks only)
console.log(`hello
            world`);

// comments
 // this is comment
 /*
 Multiline comment
 */

// null undefined
// null->no value
// undefined->don't know what's inside


// Variables
// var : variable can be redeclared and updated,global scope  //deprecated
// let : can't be redeclared but can be updated,block scope
// const : can't be updated and can't be updated,block scope,mandatory to initialize



// DataType: Number,String,Boolean,Undefined,Null,BigInt,Symbol

price=78;
console.log(typeof price); //number

msg="hi";
console.log(typeof msg); //string

bool=true;
console.log(typeof bool); //boolean

let x;
console.log(typeof x); //undefined

let u=null;
console.log(typeof u); //object

let r=BigInt("456");
console.log(r); //456n

let y=Symbol("Hello");
console.log(y); //Symbol(Hello)
console.log(typeof y); //symbol


// Non-primitive data type
const student={
    fullName:"deepali",
    age:20,
    cgpa:8.2,
    isPass:true
};
console.log(student);//{ fullName: 'deepali', age: 20, cgpa: 8.2, isPass: true }
console.log(typeof student);//object
console.log(student["age"]);//20
console.log(student.age);//20
student["fullName"]="abc";
console.log(student); //{ fullName: 'abc', age: 20, cgpa: 8.2, isPass: true }
// we can change key of an object even if it's declared with const

const profile={
    handle:"shraddhakhapra",
    isFollow:true,
    canMessage:true,
    followers:566,
    following:30,
    bio:"iuytsbnm,uoiuyteweasdcvhnkjnk,",


};
console.log(profile);


// Arithmetic operator
let a=7;
let b=8;
console.log("divide:" ,a/b) // 0.875
console.log("power:" ,a**b) //5764801
console.log("remainder:" ,a%b) //7

// unary operators
console.log("a+1" ,a++); //7
console.log("remainder:" ,++b); //8

// Assignment: +=,*=,/=,%=,**=
// comparison:
// ==:equalto 
console.log("1"==1); //true
// === equal to & type check
console.log("1"===1); //false
// != not equal to 
// !== not equal to & type check

// Ternary Operator
let age=90;
console.log(age>18?"adult":"not adult");

// Switch Expressions
exp='c';
switch(exp){
    case 'A':
        console.log("a");
        break;
    case 'B':
        console.log("b");
        break;
    default:
        console.log("c-z");
    
}

// prompt:temporary way of taking input from user: wwill give alert as well as let you type,takes string as input
// let k=prompt("hello");
// console.log(k);

// loops

// for-loop
for(let i=0;i<5;i++){
    console.log("ji");
}

//while loop
let i=1;
while(i<5){
    console.log(i);
    i++;
}

// do-while
i=1;
do{
console.log(i);i++;
}while(i<5);

// for-of loop:used for string and arrays
let str="_dips";
for(let i of str){
    console.log(i);
}
/* output:
_
d
i
p
s      */

// for-in loop:used for objects and arrays
const s1={
    name:"Rahul",
    class:"9",
};
for(let i in s1){
    console.log("key:",i ,"value:",s1[i]);//i will print the keys of the obj
}

// guess the number

// gameNum=34
// usernum=prompt("Guess the number:");
// while(usernum!=gameNum){
//     usernum=prompt("Try again:");

// }
// console.log("Congrats you have guessed the right number");

// strings
let str1="Hello";
console.log(str1);
let str2='hello';
console.log(str2);
console.log(str2.length);
console.log(str2[0]);

// template strings
// `hello`
// string interpolation
console.log(`hi${8+9}`);//hi17

// string methods:strings are immutable
str="heLo";
console.log(str.toUpperCase());//HELO
console.log(str);//heLo
console.log(str.toLowerCase());//helo
str3="heL  o";//remove whitespace
str3.trim();//heLo

// str.slice(start,end) : fetch a part of string end:exclusive,optional
console.log(str.slice(1,3));
// str1.concat(str2)
console.log(str1.concat(str2));
console.log(str1+str+str2);
// str.replace(searchvalue,replace value)
console.log(str.replace("h","H"));


// Arrays
arr=[9,4,2,4,7,8,9];
console.log(arr);
console.log(arr.length);
console.log(typeof(arr)); //object
// arrays are mutable
// both for-of and for-in can beused for iterating over array but for-of is preffered
let alpha=['a','b','c','d'];
console.log(alpha);
alpha.push('e','f','g')
console.log(alpha);/*[
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g'
  ]*/
//  pop():delete from the end and return
let deleted=alpha.pop();
console.log(alpha);
console.log("deleted",deleted);
console.log(alpha.toString());//a,b,c,d,e,f

 alphaN=[1,2,3];
 console.log(alphaN);
console.log(alphaN.toString()); //1,2,3

// concat():joins multiple arrays and return result
a1=['A','B'];
a2=['c'];
a3=['d','k','l','m','n','o'];
console.log(a1.concat(a2,a3));
console.log(a1); //unchanged

// unshift():addition at the beginning of array,push
a1.unshift('o');
console.log(a1);  //[ 'o', 'A', 'B' ]

// shift():deletion at the beginning  of the  array
a1.shift();
console.log(a1);  //[  'A', 'B' ]

// slice(startidx,endidx):endidx-exclusive   returns a part of the array
console.log(a3.slice(2,5));

// splice(indexAtWhichYouHaveToInsertValue,no_of_elt_to_be_deleted,value to be added)
a3.splice(4,0,'y');
console.log(a3);
a3.splice(4);
console.log(a3);//deleted all elts starting from index 4 till the end


// practice
let company=["Bloomberg","Microsoft","Uber","Google"];
console.log(company);
company.shift();
console.log(company);
company.splice(1,1,"ola");
console.log(company);
company.push("Amazon");
console.log(company);


// function
function sum(l,v){//params
    return l+v;
}
console.log(sum(4,8));//arguments

// Arrow Function
const arrowSum=(a,b)=>{
    return( a+b);
};
console.log(arrowSum(6,8));

const greet=()=>{
    console.log("hello!");
}
console.log(greet())



// practice
function vow(s){
    let count=0;
    for(let i of s){
        if(i=='a' ||i=='e' ||i=='i' ||i=='o' ||i=='u' ){
            count++;
        }
    }
    return count;
}
console.log(vow("aeiou"));

const ArrowVow=(s)=>{
    let count=0;
    for(let i of s){
        if(i=='a' ||i=='e' ||i=='i' ||i=='o' ||i=='u' ){
            count++;
        }
    }
    return count;
}
console.log(ArrowVow("aeiou"));

// Callback=a function passed as an argument to the function
// hof=a function that can take a function as an argument or return a function

let arr2=["gfg","leetcode","cf"];
arr2.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx);
});

// or

let calcSq=(val,idx,arr)=>{
    console.log(val.toUpperCase(),idx);
};
arr2.forEach(calcSq);

// map: create a new array with the results of some operation.the value its collback returns are used to form new array.
nums=[1,2,3];
let newArr=nums.map((val)=>{
    return val;
});
console.log(newArr);

// filter
let eve=nums.filter((val)=>{
    return (val%2==0);
});
console.log(eve);

// reduce:performs operation and reduce the array to a single value
let summation= nums.reduce((res,curr)=>{
    return res+curr
});
console.log(summation);

// Practice
let marks=[89,90,97,45,65]
let toppers=marks.filter((val)=>{
    return val>=90;
});
console.log(toppers);


// Window object:it represents an open window in browser.It is browsers object and not js'& is automaticaaly created by browser.
// it is a global model with a lot of properties and methods in it.

// what is DOM? When a web page is  loaded browser creates a document object model(DOM)of the page. we can access html element in js.
// hierarchy:window->document->html
// DOM manipulation
// document.getElementById("myelt");
// document.getElementsByClassName("hjfg");
// document.getElementsByTagName("poiu");
// document.querySelector("p");//1st element p,can pass id,class tag
// document.querySelector("#id");
// document.querySelector(".class");
// document.querySelectorAll("p")//all p,can pass id,class tag
// Properties:
// tagName:return tag for element nodes
// innerText:return text content of an element and all its childrens
// innerHTML:return the plain text or HTML contents in the elements
// textContent:return the textual content even for hiddden elements

// DOM tree has 3 nodes:text nodes,comment ,elements nodes
// document.querySelector("div").children;
// document.querySelector("div").firstChild;
// document.querySelector("div").lastChild;
// divs=document.querySelectorAll(".div").;
// divs[0].innerHTML="asfg";

// Attributes
// getAttribute(attr): to get the attribute value
// e.g:
/* let para=document.querySelector("p");
   console.log(para.getAttribute("class"));
*/


// setAttribute(attr,value):to set the attribute value
/* para.setAttribute("class","123");
*/

// Style
/*
    let div=document.querySelector("div");
    div.style.backgroundColor="green";
    div.style.fontSize="29px";
    div.style.visibility="hidden";
    div.innerHTML="HTML";
 */

// Create elements
/* 
    let newBtn=document.createElement("div");
    newBtn.innerHTML="hello!";
    console.log(newBtn);
*/

// Insert Elements

// node.append(el);:append at the end of node(inside)
// node.prepend(el);:append at the start of node(inside)
// node.before(el);:adds before the node(outside)
// node.after(el);:adds after the node(outside)


/* 
let newHeading=document.createElement("h1");
newHeading.innerHTML="Hi! I'm new";

document.querySelector("body").prepend(newHeading);
newHeading.remove(); will delete the newHeading completely
*/
// appendChild
// removeChild

// Practice
// Qs 1
// let newBtn=document.createElement("button");
// newBtn.innerHTML="click me!";
// newBtn.style.backgroundColor="red";
// newBtn.style.fontSize="26px";
// body=document.querySelector("body");
// body.prepend(newBtn);

// Qs2
// para=document.querySelector("p");
// para.setAttribute("class","newClass");//will replace the class name with newClass
// para.classList.add("newClass") //will append newClass
//  event
// change in state of event
// Types of events:mouse event,keyboard,form(submit),print event etc.

// btn1=document.querySelector(".btn1");
// btn1.onclick = () =>{
//     console.log("btn1 is  clicked");
// }
// JS event handling>inline event handling

// buttonn=document.querySelector("#btn1");
// buttonn.addEventListener("click",()=>{
//     buttonn.style.color='blue'
// })

// Classes and objects
const Student={
    fullName:"deepali",
    roll_no:45,
    marks:45,
    printMarks:()=>{
        console.log("Marks:",this.marks);
    }

}

// every object has a special property called prototype which is itself an object which contains properties and methods of the class
// We can set prototype using __proto__
const Employee={
    Fname:"Despo",
    salary:20000,

}
const Employee2={
    Fname:"fiasco",
    company:"tesco"

}
Employee2.__proto__=Employee;
console.log(Employee2.salary);


// Class
class Hostel{
    opening(){
        console.log("opens at 5am");

    }
    closing(){
        console.log("closes at 9pm");
    }
    BookRoom(roomno){
        this.bookedRoom=roomno;
    }
}

yello= new Hostel();
console.log(typeof yello);//object
yello.opening();//opens at 5am
yello.BookRoom(425);
console.log(yello.bookedRoom);//425

// constructor() method is automatically invoked by new keyboard and it initializes objects

class NewHostel{
    constructor(bRoom,occupancy){
        console.log("creating object..");
        this.bookedRoom=bRoom;
        this.occupancy=occupancy;

    }
    opening(){
        console.log("opens at 5am");

    }
    closing(){
        console.log("closes at 9pm");
    }
    
}

stanza=new NewHostel();//if you won't pass the arguments to it then those will be initialized with undefined
console.log(stanza.bookedRoom);//undefined


// inheritance in JS:Passing down properties and methods from parent class to child class
// super keyword:it is used to call constructor of the parent class to access parentsproperties and method (only when we make use of "this" keyword in child class)
class Parent{
    constructor(legs,hands,eyes){
        this.legs=legs;
        this.hands=hands;
        this.eyes=eyes;
    }

    job(){
        console.log("Shape child");
    }
};

class Child extends Parent{
   
    constructor(hobby){
        super(3,4);// to invoke parents class constructor,if you want to pass argument to parent constructor from child then tht u can pass inside super()

        this.hobby=hobby;
    }
    job(){
        console.log("Inside child class")
        super.job();
    }
}

p=new Parent(2,2,2);
console.log(p.legs);

c=new Child("sing");
console.log(c.hobby);
console.log(c.legs);
c.job();


// Practice
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    view(){
        console.log("Viewing the data")
    }
}
u=new User("deepali","deepali@gmail.com");
console.log(u.name); //deepali
u.view();//Viewing the data
 
class Admin extends User{
    constructor(possession,name,email){
        super(name,email);
        this.possession=possession;

    }
    editData(){
        console.log("editing is allowed");
    }
}
adm=new Admin("admin","rijhi","rijhi123@gmail.com")
console.log(adm.email);



// error handling
let aa=7;
let bb=8;
try{
    console.log(aa+cc);
}
catch(err){
    console.log(err);//this will print the error and then continue the execution of further lines without haltk
}
console.log(7+9);



// Sync in JS
// Synchronous Programming:Means codes run in a particular sequence of instructions given  in program.Each instruction waits for previous instruction to complete its education
// Asynchronous Programming:due to synchronous programming , some imp instructions gets blocked due to some previous instructions,which causes a delay in ythe UI.Asynchronous code execution allows to execute next instructions immediately and does not block the flow
// setTimeout()

function hello(){
    console.log("hello");
}
setTimeout(hello,2000); //2s=2000ms


// Asynchronous Programming example
console.log("a");
console.log("b");
setTimeout(hello,4000);
console.log("c");
console.log("d");

// Callback:
function sum(a,b){
    console.log(a+b);
}
 
function calculator(a,b,callback){
    return callback(a,b);
}
 
calculator(1,2,sum);//3










