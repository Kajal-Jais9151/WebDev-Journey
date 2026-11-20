// console.log("namaste dunia");
// console.log("namaste duniaaaa");

// var age = 25;
// if(true){
//     console.log(age);
//     console.log(age-4);  
// }

// let age= 30;


// console.log(status1);

// let ans=(3>5 || 3>5);
// console.log(ans);

// falsey --> undefined, null, 0, false, NaN(not a num), '';
// truthy---> which is not falsey;
// bitwise operators--> bit level par sare bits ko flip kar deta hai;
// left shift (n)--> 2 n times multiply ho jyega number
// right shift--> 2 n times divide ho jyega number

// console.log(false || 'kajal');
                                          
 //if we want to print strings in multiple lines then we can use back-ticks(``)
 //can concatenate strings using `` , (${s1}${s2})
 //memory mein strings array form m store hota hai(har character ek array index m store hota h)  
 //we can separate strings basis of space or any char  with help of 'split'.
 //agar hume string m "" include krna hai output m then we can use it with \, taki string isko ek char ki trh treat kre.
 //eg: sentence="hello jii \"hii\" kaise ho"  

//  -----function way-----
//
// function getSum(a,b){
//     let sum=a+b; or  return a+b;
// }
// let sums=getSum(4,6);
// console.log(sums);


// -----function expression way-----
//
// let getSum=function(a,b){
//   return a+b;
// }
// let sums=getSum(4,6);
// console.log(sums);

// -----arrow function way-----
//
// let getSum=(a,b) => {
//     let sums=a+b;
//     return sums;
// }
// console.log(getSum(4,6));


// -----Objects(key-value pair)-----
//
// let obj = {
//     name: "Love",
//     age: 20,
//   agar multiple words ki key hai toh "" ke andar rkhnge otherwise bina "" use kiye bhi key use kr skte h
//
//     "Full name": "Kajal Jaiswal"
 
//  can also include funcn in key value pair
//
//    greet: function(){
//     console.log("hello");
//    }
// };

// -----creation of array-----
//
// let arr1 = [1,2,3,4,5];
// array constructor : let arr2 = new Array('kajal',1,true);
//let arr1 = [1,'kajal',3,true,5];

// built-in funcn in arrays :
// push > insert at end,
// pop > remove last item,
// shift > remove first or leftmost item,
// unshift > add item at first or leftmost,
// slice > take out subpart from array,
// splice(arr.splice(1,2,'kajal') ...1st index se 2 values remove krk kajal add krdo)> change content of array by inserting or remove a part,
// map > array ke har values k sath koi function perform krna ho, 
//    eg:  let arr = [10,20,30];
//         let ansArray = Array.map((number)  => {
//        return number*number;
//         })
//        console.log(ansArray);
//    eg:  let arr = [10,20,30];
//          arr.map((number,index)  => {
//           console.log(number);
//           console.log(index);
//         })
//      
//
// filter > koi logic perform krk array ki values ko filter krna,
//        eg:  let arr = [10,20,30,40,50,60];
//            let evenArray = arr.filter((number)  => {
//                if(number%2 === 0) { 
//                  return true;
//                }
//                else{
//                  return false;
//                }
//             })
//
// reduce > to perform funcn on array(0 is starting assigned value and acc stores calculated value),
//        eg:  let arr = [10,20,30,40,50,60];
//            let sumArray = arr.reduce((acc,curr)  => {
//                return acc+curr;
//             },0)
//             console.log( sumArray );
// sort > to sort the array,
// indexOf > to find index of any values of array,
// find > to search for an element in array

//-----for-each(traverse the array)-----
// arr.forEach((value, index) => {
//     console.log("Number: ", value, " Index: ", index);
// })

//-----for-in(to iterate on enumerable properties of object----
//  let obj = {
//     name: "Love",
//     age: 20
//    }
// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

//-----for-of(iterate object such as arrays strings)-----
//  let fullname = "kajal";
// for(let value of fullname) {
//     console.log(value);
// }

//---arrays with funcns----
// function getSum(arr){
// let len= arr.length;
// let sum=0;
// for(let index=0; index<len; index++) {
//    sum= sum+arr[index];
//  }
//  return sum;
// }
// let totalSum= getSum(arr);
// console.log(totalSum);

//-----for-of(iterate object such as arrays strings)-----
//  let fullname = "kajal";
// for(let value of fullname) {
//     console.log(value);
// }


//------------hoisting----------------
//
//funcn hoisting, variable (var) hoisting is possible and others like let,const, class hoisting is not possible and shows reference error

// ----------function as different purpose:------------
//
//----function returns funcn:----
// function solve(num){
//    return function( num){
//       return num*num;
//    }
// }
// let ans =solve(5);
// let finalans =ans(10);
// console.log(finalans);
//
//---function as a variable----(function expression)
//
// ---function as an argument--- : giving function as an argument in another funcn during calling 
//
//---- array of functions----
// const arr = [
//     function(a,b){
//           return a+b;
//     }
//      function(a,b){
//           return a-b;
//     }
//      function(a,b){
//           return a*b;
//     }
// ];
// let first= arr[2];
//  let ans =first(5,10);
//  console.log(ans);
//
// ----functions as objects-----
// let obj = {
//     name:'kajal',
//     age:15,
//     greet:() => {
//         console.log("helloo");
//     }
// }
// console.log(obj.age);
// obj.greet();


//    --------------temporal dead zone-------------------
//
//    eg :   console.log(marks);
//           console.log("babbar");
//           console.log("Love");    
//           const marks = 100;
//           console.log(marks);                                                                                                                                                         
//  we have initialized marks with const keyword which cannot be hoisted
// ( which means marks cannot be accessed above the line of declaration of marks)
// therefore , from first line of code till declaration of marks it is called "temporal dead zone".

                   
// -----------------classes and objects------------------------
//private member can only be accessed inside that class in which it's declared
// eg :  class Human{

//     //properties
//     age=13; //by default explicitly publicly accessible
//     #wt=80;  //private(hash)
//     ht=180;

//     //behaviour
//     walking(){
//         console.log("I am walking" , this.#wt); //just like in java to access private objects and it points to current object of the funcn we called , we use this.obj
//     }
//     running(){
//         console.log("I am running");
//     }
// }
// let obj=new Human();
// console.log(obj.age);
// console.log(obj.#wt); //(gives syntax error bcz it's private)
// obj.walking();



// ---------------getter and setter-------------------
// getter are used to fetch the values of private member outside the class
// setter is used to update or modify the values of member 
// they both ae used for semantic clarity, encapsulation and data protection
//   class Human{

//     //properties
//     age=13; //by default explicitly publicly accessible
//     #wt=80;  //private(hash)
//     ht=180;

//     //behaviour
//     walking(){
//         console.log("I am walking" , this.#wt); //just like in java to access private objects and it points to current object of the funcn we called , we use this.obj
//     }
//     running(){
//         console.log("I am running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifyWeight(val){
//         this.#wt=val;
//     }
// }
// let obj=new Human();
// console.log(obj.age);
// //  console.log(obj.#wt);//(gives syntax error bcz it's private)
// console.log(obj.fetchWeight); //fetchWeight is a getter, not a method — calling it with () breaks Since it's declared with get, you access it like a property, not a function call:console.log(obj.fetchWeight);


// ---------------constructor---------------------
 
//   class Human{


    
//     age=13; //by default explicitly publicly accessible
//     #wt=80;  //private(hash)
//     ht=180;

//     constructor(newAge, newHeight, newWeight){
//         this.age=newAge;
//         this.ht=newHeight;
//     }
//     walking(){
//         console.log("I am walking" , this.#wt); //just like in java to access private objects and it points to current object of the funcn we called , we use this.obj
//     }
//     running(){
//         console.log("I am running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifyWeight(val){
//         this.#wt=val;
//     }
// }
// let obj=new Human(20, 180, 80);
// console.log(obj.fetchWeight);
// obj.walking();
// obj.modifyWeight = 85; // Using the setter to modify the private property
// console.log(obj.fetchWeight); // Fetching the updated value


// ---------------------------default parameters--------------------
// If we forget to give arguments at the time of funcn calling thw default value will be used in place of that argument

// function sayName(fName, lName="Jaiswal"){
//     console.log("My name is: ", fName," " ,lName);
// }
// sayName("John"); // Output: My name is: John Jaiswal, took default value bcz argument not passed
// sayName("Jane", "Smith"); // Output: My name is: Jane Smith

// function sayName(fName="Kajal", lName=fName.toUpperCase()){
//     console.log("My name is: ", fName," " ,lName);
// }
// sayName(); // Output: My name is: John Jaiswal, took default value bcz argument not passed
// sayName("Kajal", "Jaiswal"); // Output: My name is: Kajal Jaiswal
//
//
//
//  function sayName(value={age:15,wt:90,ht:190}){
//      console.log("Hello jii ", value); //Output: Hello jii age:15,wt:90,ht:190
//  }
//
//  function sayName(value=["kajal","abhay","pagal"]){ //can also take arrays as objects
//      console.log("Hello jii ", value); //Output: Hello jii ["kajal","abhay","pagal"]
//  }
//
//  function sayName(value="Kajal"){ //can also take arrays as objects
//      console.log("Hello jii ", value); //Output: Hello jii ["kajal","abhay","pagal"]
//  }
//  sayName(null); //Output: Hello jii null
//  sayName(undefined); //Output: Hello jii Kajal
//
// function getAge(){ //can also use funcn as parameters
//     return 190;
// }
// function utility(name="Kajal", age=getAge()){
//     console.log(name," ", age);
// }
// utility();
  

// --------------------Date obj----------------------
// let curr = new Date(); //prints current date
// let date= new Date('June 20 1998 07:15'); // prints date with day of given date
// let newdate= new Date(1998 ,6, 20, 7); //year, month(0-based indexing), date, time
// console.log(newdate.getDay()); //it gives the day of newDate we have declared above
// console.log(newdate.setFullYear(2001)); //modifies the year of newDate from prev with modified value we have given(2001) later
// console.log(curr);


// ------------------object-cloning---------------------
//
// 1) spread operator(...) :
//   eg :  let src = {
//           age:13,
//           wt:68,
//           ht:150
//         };
//         let dest = src; //this is copying not cloning
//         let dest = {...src}; //cloning syntax
//         src.age= 90; //changing the original age doesn't affect cloned one
//         console.log("src: ", src); //Output: {age:90,wt:68,ht:150} , original (age changed)
//         console.log("dest: ", dest); ////Output: {age:13,wt:68,ht:150}, cloned(affected by change in original one)
//
// 2)  assign operator :
//    eg :  let src = {
//           age:13,
//           wt:68,
//           ht:150
//         };
//         let src2 = {
//           value:113,
//           name: "Kajal"
//         };
//         let dest = Object.assign({}, src); //cloning syntax
//         src.age= 90; //changing the original age doesn't affect cloned one
//         console.log("src: ", src); //Output: {age:90,wt:68,ht:150} , original (age changed)
//         console.log("dest: ", dest); ////Output: {age:13,wt:68,ht:150}, cloned(affected by change in original one)
//   
// 3)  iteration :(complex and not recommended to use)
//     eg :    let src = {
//              age:13,
//              wt:68,
//              ht:150
//             };
//            let dest = {};
//           
//            for(let key in src){ //cloning using iteration
//               let newKey = key; //accessinhg only keys
//               let newValue = src[key]; //accessing values associated with key in src object
//               //insert newKey and value in dest and create a clone
//               dest[newKey ]= newValue; //har dest ke newKey ke andar newValue daal diya
//            }
//            src.age = 90;
//            console.log("src: ", src); //Output: {age:90,wt:68,ht:150} , original (age changed)
//            console.log("dest: ", dest); //Output: {age:13,wt:68,ht:150}, cloned(affected by change in original one)


// --------------------------error handling------------------

// types of errors :
// 1) compile time error(shows error before execution(or running the program) during parsing) : syntax error
//       eg :  console.log(1;

// 2) runtime error(shows error during runtime or execution) : reference error
//       eg :  console.log(x) //x is not defined

// ways to handle errors :
// 1) try-catch : 
//     eg :  try{
//                console.log("try block starts here ");
//                console.log(x); //this line has reference error therefore from this line execution stops
//                console.log("try block ends here");
              
//             }
//           catch(err){
//              //define krte h, error k sath aap kya krna chahte h
//              //retry logic
//              //fallback mechanism
//              //logging
//              //custom error
//              console.log("I AM INSIDE CATCH BLOCK")
//              console.log("your error is here: ",err);
//             }

// 2) finally block :
//    eg :  finally{
//              console.log(" I will run everytime, as i am finally block")
//            }
//
// 3) if we want to create custom error ourselves, then use "throw"
//    eg : try{
//     console.log(x);
//    }
//    catch(err){
//     throw new Error("Bhai pehle declare kro, phir print krna");
//    }

//    eg : let errorCode = 100;
//        if(errorCode == 100){
//         throw new Error("Invalid Json");
//        }



