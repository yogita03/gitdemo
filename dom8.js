var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var item = document.getElementsByClassName('list-group-item');
var filter = document.getElementById('filter');

//add submit event//
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click',removeItem);
// itemList.addEventListener('click',removeItem);
//Filter Event//
filter.addEventListener('keyup',filterItems)

//Adding edit button to all list item
for(var i=0;i<item.length;i++)
{
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'))

    itemList[i].appendChild(editBtn)
}
//Add Item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(newText);
    li.appendChild(descriptionNode)
    //create delete button element
    var deleteBtn = document.createElement('button');
    
    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
   
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append button to li
    li.appendChild(deleteBtn);
    
    //Append li to List
    itemList.appendChild(li);
   

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure'))
    {
        var li =e.target.parentElement;
        itemList.removeChild(li);
    }
}
}

//Filter Items
function filterItems(e)
{
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get li//
   var items = itemList.getElementsByTagName('li');
   //Convert to an array
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
   if(itemName.toLowerCase().indexOf(text) != -1)
   {
    item.style.display = 'block';
   }
   else{
    item.style.display ='none';
   }
   });
}