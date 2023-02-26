var li =document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[4].textContent="Hello 2";
li[4].style.fontWeight = 'bold';
li[4].style.backgroundColor ="yellow";
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor = 'green'
}


// var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';

var items =document.getElementsByClassName('listed');
console.log(list);
console.log(list[0]);
list[0].style.fontWeight = 'bold';
//QUERYSELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'
