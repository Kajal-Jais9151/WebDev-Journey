// -----------------Changing CSS-------------------
//
// 1).style : get/set an inline style
// eg :let paraElement=document.getElementById('spara');
//     console.log(paraElement.style); //get,gives all the style tags added
//     paraElement.style.backgroundColor='blue'; //set, modifies the changes done on browser
//     paraElement.style.color='white';
//
// 2) .cssText : can get/set multiple inline styles at a time
//eg : let secondElement=document.getElementById('sdiv');
//     secondElement.style.cssText;
//     secondElement.style.cssText="background-color:black; color:white; padding: 0.5rem;";     
//
//3) .setAttribute : can set/modify the names of attributes such as class,id etc.
//   eg : let firstElement=document.querySelector('#fdiv'); 
//      firstElement.setAttribute('class','secondDivClass'); //set
//      firstElement.setAttribute('style',"padding: 0.4rem"); //changes the whole style , if bg color was added previously it also removes it and just add new padding value(modifies whole style)
//
// 4) .className : get the classes
// eg : let fpara=$0;
//      fpara.className //to get the classnames of given class
//      fpara.className="Gohan Gulgul" //set the classname
//
//5) .classList : get in form of array/list ;
// add : to add any class from classList
// remove : to remove any class from classList
// toggle : if present then remove or if not present then add the class
// contains : to check if class is present
// eg : let fpara=document.querySelector('#fpara');
//    fpara.classList //get the classList
//    fpara.classList.add('thirdClass'); //set the classList
//    fpara.classList.remove('thirdClass');
//    fpara.classList.toggle('thirdClass');


//-----------------browser-events----------------
// 1)Events : EventListeners(location)
//            Event(action)
//            EventTarget
//    >Syntax : element.addEventListener('event-type',function);
//    >Phases : Capturing phase(target ele pr pahuchte hai),
//              At-target phase(at present on the target),
//              Bubbling phase(target se root ki trf), by default addEventListener bubbling phase m run hota hai, but we can change it to capturing phase by adding third argument(useCapture) as true
//    >Event-Object : after event is triggered the object/reference of an event is passed as an argument 
//                    to addEventListener and we can check what event we have used by console.log
//    >Default action : by default anchor tag behaves as a link, but we can change its default behaviour to anything else by using function with event.preventDefault()

// 2)Listeners : event.target.textContent
//               event.target.nodeName
// 
//
// eg : function changeText(){
//         let fpara=document.getElementById('fpara');
//         fpara.textContent="Hello Kajal";
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);
// Note : to remove eventListener the reference/object that is passed should be same otherwise no remove, therefore create a funcn and pass them as argument at both the places

//3)how can we use DOMContentLoaded event to add script dynamically? 