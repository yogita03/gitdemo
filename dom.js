// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title= 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent="Hello";
// console.log(document.links);
// console.log(document.images);

// For changing header title.......
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// headerTitle.style.borderBottom = 'solid 3px #000';

// GETELEMENT BY CLASS NAME 

var items =document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green'
// items[1].textContent ='Hello 2';