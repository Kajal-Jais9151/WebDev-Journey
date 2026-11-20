// -------------------JS DOM MANIPULATION-----------------------------

// > window object : (includes all DOM, BOM, JS Core)created by browser,a global object which is also above root element 
//    that includes all global variables or methods(webpage we open is called window)
// > Document Object Model(DOM) : tree like structure
//    (index.html)html code converted to -> JS Object -> this object called document
// > Browser Object Model(BOM) :
//   all the interactions with browser except html content such as History,screensize
//    or navigations are done under this


// > CODE :
// >> -------------if we want to fetch or access any tag, elements then it can be done through ----------
//          -ID 
//          -Classname
//          -tagname
//          -$0
//        and in response we can get 
//          -single output
//          -multiple output
// 1) document.getElementById('idname') : to fetch or access any element of html through ID, single output bcz id is unique
// 2) document.getElementsByClassName('classname')
// 3) document.getElementByTagName('tagname')
// 4) document.querySelector('#idname'/'.classname'/'tagname') : rather than above we can use this single query instead of diff ones
//          jo sbse pehle uss tag ya class m milega usko display kr dega bhale multiple output ho same class k, only one will be given as output
// 5) document.querySelectorAll()
// 6) $0 : after selecting arrow ,write $0 on console and selected element will be printed
//    let para = $0 : this can also be stored in a variables

        

// >> -------------to update existing element :---------------
// 1) innerHTML : 
//    -get/set the html code inside any tag/element
//    -Definition: Gets or sets the HTML inside an element (its child nodes).
//    -When reading: Returns the HTML markup between the opening and closing tags.
//    -When writing: Replaces the element’s contents but keeps the element itself.
//     > tagname.innerHTML : to get 
//     > tagname.innerHTML = '<p>Hello jee</p>'; : to set/modify the code iside given tagname
  
// 2) outerHTML :
//    -Definition: Gets or sets the HTML including the element itself.
//    -When reading: Returns the HTML markup for the element and its contents.
//    -When writing: Replaces the entire element in the DOM.
//    - Use innerHTML when you want to change inside content without touching the element itself.
//    - Use outerHTML when you want to replace the whole element.

// 3) textContent : to get/set the text inside the tagname, ye tabs spaces enter 
//    sab kux show krta hai jo bhi include kiya hai humne, jaisa code m humne likha hai

// 4) innerText : to get/set the text inside the tagname but it will not consider the hidden 
//    text inside the tagname, jaise ui/browser me show/render hota hai same waisa hi ye show krta hai text 



// >> ----------to add new element :-------------
// 1) document.createElement('tagname') : to create new element/tagname
//    >tagname.textContent = 'text' : to add text inside newly created tagname

// 2) parentTagname.appendChild(child) : to append child element inside parent element at last

// 3) parentTagname.insertAdjacentElement(position, element) : to add new child at the position werever we want to
//    >position : beforebegin
//                afterbegin
//                beforeend
//                afterend


// >> -----------to remove any element :--------------
// 1) parentTagname.removeChild(child) : to remove child element from parent element
//    -opposite of appendChild

// 2) const child = document.querySelector('input'); // select the child element
//    const parent = child.parentElement; // get its immediate parent
//    console.log(parent); // logs the parent element

// 3) const child = document.querySelector('input'); // the child element
//     const parent = child.closest('label'); // finds the nearest <label> ancestor
//     console.log(parent); // logs the <label> element or null
//
//
//  eg :  document.getElementById("fpara");
// Output  :  <p id=​"fpara">​Hello ji kaise ho saare​</p>​
// eg : document.getElementById("fheading");
// Output  :  <h1 id=​"fheading">​Hello ji​</h1>​
//
// eg  : document.getElementsByClassName("textmatter");
// Output :  HTMLCollection(2) [p#fpara.textmatter, h1#fheading.textmatter, fpara: p#fpara.textmatter, fheading: h1#fheading.textmatter]
// eg : document.getElementsByTagName('p');
// Output  :  HTMLCollection [p#fpara.textmatter, fpara: p#fpara.textmatter]
//
// eg : document.getElementsByClassName("textmatter");
// Output : HTMLCollection(4) [p#fpara.textmatter, 
//     p#spara.textmatter, 
//     p#tpara.textmatter, 
//     h1#fheading.textmatter, 
//     fpara: p#fpara.textmatter, 
//     spara: p#spara.textmatter, 
//     tpara: p#tpara.textmatter, 
//     fheading: h1#fheading.textmatter]
//
// eg : document.querySelector('.textmatter');
// Output : <p id=​"fpara" class=​"textmatter">​Hello ji kaise ho saare​</p>​
//
//eg : document.querySelectorAll('p');
//Output : NodeList(3) [p#fpara.textmatter, p#spara.textmatter, p#tpara.textmatter]
//
// NOTE : through className returns all the collections that has classname textmatter 
//         but querySelector returns the very first element with classname textmatter and ignores all the next.
//        And querySelectorAll returns all the elements collection that has classname textmatter , does not ignore any of them.
//
// eg : $0
// OUTPUT : <button id=​"fbutton" class=​"textmatter">​…​</button>​
// let button = $0; //declaring variable
// OUTPUT : undefined
// button //(get)calling declared variable
// OUTPUT : <button id=​"fbutton" class=​"textmatter">​…​</button>​
// button.innerHTML //shows only the tags inside selected html
// OUTPUT : '\n    <p id="bpara" class="textmatter">heyy</p>\n'
// button.innerHTML  = '<p>Hello sir jee</p>'; //(set),new element modified
//  OUTPUT : '<p>Hello sir jee</p>'
// button
//  OUTPUT : <button id=​"fbutton" class=​"textmatter">​<p>​Hello sir jee​</p>​</button>​
//
// eg : let element=document.querySelector('#fdiv'); 
//  OUTPUT : undefined
// element
//  OUTPUT : <div id=​"fdiv">​…​</div>​
// element.textContent
//  OUTPUT : '\n      \n        This is my first\n        \n            Text\n        \n      \n      This is my second para\n    '
// element  .innerText
//  OUTPUT : 'This is my first Text\n\nThis is my second para'
//
// eg : let fheading=document.createElement('h1')  ;                          
// OUTPUT : undefined
// fheading
// OUTPUT : <h1>​</h1>​

// fheading.textContent="My name is Kajal "
// OUTPUT : 'My name is Kajal '
// fheading
// OUTPUT : <h1>​My name is Kajal ​</h1>​

// let bodyTag=document.querySelector('body');
// OUTPUT : undefined
// bodyTag
// OUTPUT : <body>​…​</body>​<!-- <p id="fpara" class="textmatter">Hello ji kaise ho saare</p>
//         <p id="spara" class="textmatter">Hello ji kaise ho saare</p>
//     <p id="tpara" class="textmatter">Hello ji kaise ho saare</p>
//   <button id="fbutton" class="textmatter">
//     <p id="bpara" class="textmatter">heyy</p>
//    </button>
//     <h1 id="fheading" class="textmatter">Hello ji</h1>
    
// bodyTag.appendChild(fheading);
// OUTPUT : <h1>​My name is Kajal ​</h1>​
// bodyTag
// OUTPUT : <body>​…​</body>​<!-- <p id="fpara" class="textmatter">Hello ji kaise ho saare</p>
//         <p id="spara" class="textmatter">Hello ji kaise ho saare</p>
//     <p id="tpara" class="textmatter">Hello ji kaise ho saare</p>
//   <button id="fbutton" class="textmatter">
//     <p id="bpara" class="textmatter">heyy</p>
//    </button>
//     <h1 id="fheading" class="textmatter">Hello ji</h1>
//     ​<h1>​My name is Kajal ​</h1>​</body>​