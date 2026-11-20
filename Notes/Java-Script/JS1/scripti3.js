// NOTE: In JS we cannot directly acces inside a function, we first need to call that function and then we can access it.

//performance.now : this method provides a time stamp as an output

// ------------------code1------------------
//
// const t1= performance.now();
// for(let i=1; i<=100; i++){
//     let para=document.createElement('p');
//     para.textContent="This is Para "+ i;
//     document.body.appendChild(para); //taking 100 reflow and 100 repaint
// }
// const t2= performance.now();
// console.log("Total time by code 1 ", (t2-t1));


//---------------- code2-------------------
//            
// const t3= performance.now();
// let mydiv= document.createElement('div');
//
// for(let i=1; i<=100; i++){
//     let para=document.createElement('p');
//     para.textContent="This is Para "+ i;
//     mydiv.appendChild(para); 
// document.body.appendChild(mydiv); //includes 1 reflow and 1 repaint for printing
// }
// const t4= performance.now();
// console.log("Total time by code 2 ", (t4-t3));
//
//
// --------------reflow and repaint---------------
// 1) reflow : process of calculating position/dimensions of Element(time taking)
// 2) repaint : process of displaying context/ele of pixel by pixel(faster)
//
// Note : since code 2 uses only 1 reflow and repaint , it is faster than code 1


// ----------------document-fragment-------------------
// >light-weight doc Object
// >in append/addition doesn't require reflow or repaint
// >when this document fragment is added in another document then it takes 1 reflow and 1 repaint
//
// eg : let fragment=document.createDocumentFragment();
//
//     for(let i=1; i<=100; i++){
//        let para=document.createElement('p');
//        para.textContent="This is Para "+ i;
//        fragment.appendChild(para);  //no reflow and no repaint for this line
//     }
//     document.body.appendChild(fragment); //takes 1 reflow and 1 repaint



// ------------------Event-loops---------------------
// >used for async funcns
// >1)callstack -> 2)browsers -> 3)callback/task queue 
// >setTimeout is used

// eg : console.log("Start!");
//
// setTimeout(function timeout(){
//     console.log("Kajal Jaiswal"); //goes to browser and wait until timer is completed
// },5000);
//
// console.log("End");




// ----------------------Promises--------------------------

// >its an object Async code ke returning value or completion state ko handle krta hai
// >two states of promise :1) Resolve/fulfilled
//                         2) Reject 
// >eg : 1)Synchronous :
// let firstPromise = new Promise( (resolve, reject) =>{
//       console.log("Abhay, my babyy"); //if no resolve then promise pending
//       resolve(1001); //indicates that the promise is resolved here
//       reject(new Error("Internal Server Error")); //if rejected then error message is thrown  
// });
// 2) Asynchronous :
// let firstPromise = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My name is Kajal");
//     },1000);
//     return 1; //promise is pending, even after the task is executed it remains in pending state if we have not given resolve()
//     resolve(1); //promise is fulfilled
// });

// >then-catch :
// eg : let promise1 = new Promise(( resolve, reject) => {
//     let success=false; //if true, means promise fulfilled and resolved and then message is executed and if false then promise rejected and catch is executed
//     if(success) {
//         resolve("Promise fulfilled");
//     }
//     else{  
//         reject("Promise rejected");
//     }
// });
// promise1.then((message) => {
//     console.log("Then ka message is "+message);
//     return "Promise fulfilled second";
// }).then((message) => {
//     console.log("Then ka message is "+message);
//     return "Promise fulfilled third"; //multiple then ->called promise chaining
// }).catch((error) => {
//     console.log("Error: "+error);
// }).finally((message) =>{
//     console.log("Main to final hu, chalunga pakka"); //always executes whether promise fulfilled or rejected
// })

// >Promise.all : it is a new promise created and executes only if all the promises that are passed in it are executed and resolved successfully.
//                If anyone of those passed promises in this new promise get rejected and this new promise also get rejected.
// let promise1 = new Promise((resolve, reject)1 =>{
//     setTimeout(resolve, 1000, "First");
// }) 
// let promise2 = new Promise((resolve, reject)1 =>{
//     setTimeout(resolve, 2000, "Second");
// }) 
// let promise3 = new Promise((resolve, reject)1 =>{
//     setTimeout(reject, 3000, "Third"); //rejected so goes in catch and the new promise created will also be rejected
// }) 
// Promise.all([promise2, promise1, promise3]) //order can be changed
// .then((values) => {
//     console.log(values);
// }).catch((error)=>{
//     console.log("Error: "+error);
// })


// ----------------------Async-Await & Fetch API--------------------------

// >async-await: 
// 1)with this we can provide synchronous behaviour to our asynchronous 
//   code which means our asynchronous code will sequentially execute.
// 2)async-await is used to handle promises in a better way and it is a syntactic sugar for promises.
// 3)async function always returns a promise and await is used to wait for the promise to be resolved or rejected.

//  eg:  async function getData(){
//       setTimeout(() => {
//           console.log("I am inside setTimeout block");
//       }, 3000);
//   }
//   getData(); //this will execute first and then the setTimeout block will execute after 3 seconds

//-----------------------------------------------------------------------------------------

// >Fetch-API: (mdn docs)
// 1)Basically it's used to perform CRUD operations on the server and it is a
//     modern way to make network requests(get,post,put,delete) and get data from the server. It returns
//     a promise which resolves to the Response object representing the response to the request.
// 2)Used to make network requests and get data from server.

//SCENARIO:
// prepare url or api endpoint -> sync
//(await) fetch data -> network call -> async (fetching the data on given url)
// process data -> sync(processing the same fetched data, but until data is not fetched 
//                       we cannot process it ,this is where await comes in picture which means 
//                       until the fetching is not executed we will not process the data i.e. sync behaviour )
//
// eg: async function getData(){

//     //get request-> async
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     //parse json-> async
//     let data = await response.json(); //response.json() converts the response into a JavaScript object.
//     console.log(data);
// }
// getData();
// eg: fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Hello",
//     body: "My first post",
//     userId: 1
//   })
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));

//   How it works:
// - method: "POST" specifies the request type.
// - headers tells the server that we're sending JSON data.
// - JSON.stringify() converts a JavaScript object into a JSON string.
// - body contains the data being sent.
// - response.json() reads the server's response.
// JSONPlaceholder is a testing API. It simulates creating a post but does not permanently save it.


// --------------------------Closures------------------------------

// 1)It's a top level entity. To make a closure we need a 
//   function + required data/ lexical scope/ surrounding state.
//SCENARIO: 
// Ek asa case jaha apr 2 function nested hai, aur humne inner function ko call
// kr diya hai aur inner funcn jis value(name in this example) par dependent hai wo value memory se delete/free
// kar di gayi hai...toh us case mein kya hoga?
// //

    //   function outerFun(){
    //     let name= "Kajal";

    //     function innerFun(){
    //         console.log(name);
    //     }

    //     return innerFun();
    //  }

    //  let inner= outerFun(); //outerFun() is returning reference of innerFun() which is stored in an inner variable and later that variable is called(which holds reference of innerFun()) to execute the function i.e. innerFun().
    //  inner();
     
// -> Yaha par innerFun() apne required Data(name) ke sath bind ho chuka hai,
//    asa humein lgg rha hai ki name ki memory clear ho gayi hogi par actually name ka Reference(not copy)
//    innerFun() ke sath bind kar diya gya hai.