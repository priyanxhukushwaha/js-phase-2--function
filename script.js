// functions 

// 1.function decliration

// function abc(a){
//     console.log("he",a);
// }
// abc("Rohan")

// 2.function expration

// let abc=function(){
//     console.log("i am expresion");
// }
// 3.fat arrow function / one liner function

// let abc=(a)=>{console.log("mast ho",a);}
// abc("ha hu")


// let abc= (a)=> console.log("I am Fat arrow function",a);

// abc("do you know me")

// let abc=a=>console.log("ye to mast hai");
// abc()


// IIFE/ Imidiatly Invoked funtion expression

// (function(){console.log("this is IIFE");})()

//  function for default value

// function abc(name = "sir" ,age = 29){
//     console.log("hey ",name,"Your age is", age);
// }
// console.log(abc());


// ------------forEach method on array===============>
// let arr=[8,83, 88]
// let sum=0;
// arr.forEach(function(a){
//     sum+=a
// })

// console.log(sum);

// ----------- map on array=============>

// map used for traversing and performing something on each element of arry but not in original array, map makes a new array and store all the element in that new array. 

// let arr = [1,2,3,4]

// let newarr=arr.map((a)=>{
//     if (a%2==0) {return "even"}
//     else{ return "odd"}
// })
// console.log(newarr);

//---------------filter in array============:>

// filter is used for filtering the elements. and it creats a new array and stors only that values witch are tru for the given condition. 

// let arr=[5,9,2,4,33,8]

// let newarr=arr.filter((a)=>{
//     return a>4
// })

// console.log(arr);
// console.log(newarr);

// let arr=["aman", "Anju", "bhola","Brijes"]

// let newarr= arr.filter((a)=>{
//     return a.includes("a")
// })
// console.log(newarr);

//--------------reduce================:> 
// to give a final answer or we can say that to give a single answer , for that we use method called reduce.

// let arr = [1,2,3,4,5]

// let newarr = arr.reduce((acc,val)=>{
//     return acc + val
// },0)
// console.log(newarr);

// let arr = [32,98,7757,"678",350,20,12];

// let newarr = arr.reduce((acc,val)=>{
//     if (val<acc){
//         return val
//     }
//     else {
//         return acc
//     }

// },arr[0])

// console.log(newarr);


