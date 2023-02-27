// //TRAVERSING THE DOM//
//parentNode//
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='grey';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement//
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor ='grey';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNode//
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow'

// //firstChild//
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1'

//lastChild//
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4'

// nextSibling//
// console.log(itemList.nextSibling);
// //nextElementSibling//
// console.log(itemList.nextElementSibling);

//previousSibling//
// console.log(itemList.previousSibling);
// //previousElementSibling//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//createElement//
//create a div/
var newDiv = document.createElement('div');
//add class
newDiv.className = 'Hello';
//add id
newDiv.id='hello1';

// //add attr
newDiv.setAttribute('title','Hello Div');

//create a text node
var newDivText =document.createTextNode('HEllo');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);


var parentNode = document.querySelector("#items");

newDiv.className="hello";
// newDiv.id='hello1';
// newDiv.setAttribute('title','Hello Div');

parentNode.innerHTML = "<li>HEllo</li>" + parentNode.innerHTML;
// newDiv.appendChild(newDivText);