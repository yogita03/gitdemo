let form = document.getElementById('addform')

async function windowrefresh(table){
    let arr = ['table1','table2','table3']
    for(let i=0;i<arr.length;i++){
    let list = document.getElementById(arr[i])
    while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
        }
    await axios.get('https://crudcrud.com/api/f146fa89b07b4bf9a4bc8e83f74cabc7/restaurantData')
    .then((res)=>{
        res.data.map((item)=>{
            showUserDetails(item)
            // console.log(item)
        })
    })
}

     form.addEventListener('submit',addData=async (e)=>{
        e.preventDefault();
        let name  = document.getElementById('name').value 
        let price = document.getElementById('price').value
        let table = document.getElementById('table').value
        let obj = {
            name ,
            price,
            table
        }
         await axios.post('https://crudcrud.com/api/f146fa89b07b4bf9a4bc8e83f74cabc7/restaurantData',{obj})
        .then((res)=>{
           
                windowrefresh(table)
            })
            console.log(res)})
        .catch((err)=>console.log(err))
        


// Loading in the screen
window.addEventListener('DOMContentLoaded',async ()=>{
    let table = 'table1'
    windowrefresh(table)
})
// 
    
    async function showUserDetails(item){
    let list = document.getElementById(item.obj.table)
   
    let li = document.createElement('li');
    // li.textContent =''
    li.textContent = `Name : ${item.obj.name}  price : ${item.obj.price}  table :${item.obj.table}`
    // create Delete Button
    let deletebutton = document.createElement('button');
    deletebutton.textContent ='Delete'
    deletebutton.className ='btn btn-danger p-3 ms-3 float-right'
    
    deletebutton.onclick=async ()=>{
        
          await axios.delete(`https://crudcrud.com/api/f146fa89b07b4bf9a4bc8e83f74cabc7/restaurantData/${item._id}`)
        .then((res)=>{
            console.log(`Deletion Status: ${res.statusText}`)
           windowrefresh(item.obj.table)
            })
        
    }
    
    li.appendChild(deletebutton)
    list.appendChild(li)
    

}
